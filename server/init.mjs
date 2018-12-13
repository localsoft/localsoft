import {Roles} from './enums'
import bcrypt from 'bcrypt'
import config from './config'
import db from './db'
import fsUtils from 'nodejs-fs-utils'
import jekyll from './jekyll'
import uuid from 'uuid/v4'

// Create the data directory (if not exists).
fsUtils.mkdirsSync(config.DATA_DIR)

//-------------------------------------------------------------------------------------------------------------------//
// Write default collections.
db.defaults({
    conversations: {},
    emails: [],
    events: [],
    files: [],
    forums: {},
    people: [],
    pages: [],
    settings: {}
}).write()

//-------------------------------------------------------------------------------------------------------------------//
// If there are no administrators then add the default one.
const administrators = db
    .get('people')
    .filter({role: Roles.ADMINISTRATOR})
    .value()

if (!administrators.length) {
    db.get('people')
        .push({
            email: 'user@domain.tld',
            identifier: uuid(),
            hash: bcrypt.hashSync('password', 10),
            preferences: {
                email: false
            },
            role: Roles.ADMINISTRATOR
        })
        .write()
}

//-------------------------------------------------------------------------------------------------------------------//
// If there are no pages then add a default index page.
const pageCount = db
    .get('pages')
    .size()
    .value()

if (pageCount === 0) {
    const timestamp = new Date().toISOString()
    db.get('pages')
        .push({
            author: [],
            content: `This is the default index page of your localsoft instance.`,
            created: timestamp,
            description: '',
            identifier: uuid(),
            name: 'index',
            modified: timestamp,
            path: '/',
            post: false,
            published: timestamp,
            tags: [],
            title: 'Welcome'
        })
        .push({
            author: [],
            content: `This is an example about page`,
            created: timestamp,
            description: '',
            identifier: uuid(),
            name: 'about',
            modified: timestamp,
            path: '/about',
            post: false,
            published: timestamp,
            tags: [],
            title: 'About'
        })
        .push({
            author: [],
            content: `This is an example blog post.`,
            created: timestamp,
            description: '',
            identifier: uuid(),
            name: 'new-post',
            modified: timestamp,
            path: `/posts/${timestamp.split('T')[0]}/new-post`,
            post: true,
            published: timestamp,
            tags: [],
            title: 'New Post'
        })
        .write()
}

//-------------------------------------------------------------------------------------------------------------------//
// Rebuild jekyll static site:
;(async () => {
    await jekyll()
})()

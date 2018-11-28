import {bool, func, string} from 'propTypes'
import {Button, Col, Drawer, Form, Input, Row, Select, Tooltip} from 'antd'
import {cloneDeep, get, set} from 'lodash'
import gql from 'gql'
import React, {Component} from 'react'


const BLANK_RECORD = Object.seal({
    address: {
        country: '',
        locality: '',
        postalCode: '',
        region: '',
        streetAddress: '',
    },
    affiliation: [],
    email: '',
    name: {
        additional: '',
        family: '',
        given: '',
    },
    preferences: {
        email: true,
    },
    role: 'ANONYMOUS',
    telephone: '',
})


const PLACEHOLDERS = {
    'address.country': 'Country',
    'address.locality': 'Town / City',
    'address.postalCode': 'Postal Code / ZIP',
    'address.region': 'Province/State',
    'address.streetAddress': 'Street',
    'email': 'Email: user@domain.tld',
    'name.additional': 'Additional',
    'name.family': 'Given',
    'name.given': 'Given',
    'telephone': 'Phone +1 (123) 456-7890',
}

const INPUT_TYPES = {
    email: 'email',
    telephone: 'tel',
}


export default class PersonEditDrawer extends Component {

    static propTypes = {
        identifier: string,
        onClose: func.isRequired,
        visible: bool.isRequired,
    }

    constructor (props) {
        super(props)
        this.state = {
            person: cloneDeep(BLANK_RECORD),
            saving: false,
        }
        this.state.person.identifier = props.identifier
    }

    title = () =>
        <Row>
            <Col span={8}>
                <h3 className='mb0'>{this.props.identifier ? 'Editing' : 'Creating'} Person</h3>
            </Col>
            <Col className='align-r' span={16}>
                <Tooltip placement='left' title='Save'>
                    <Button className='mr1' icon='check' onClick={this.onClickSave} shape='circle' type='primary' />
                </Tooltip>
                <Tooltip placement='bottom' title='Abandon'>
                    <Button icon='cross' onClick={this.props.onClose} shape='circle' type='danger' />
                </Tooltip>
            </Col>
        </Row>

    componentDidUpdate = (prevProps) => {
        if (this.props.identifier !== prevProps.identifier) {
            if (this.props.identifier) {
                this.retrieve()
            }
        }
    }

    inputFor = (path) => {
        const onChange = ({target}) => this.update(path, target.value)
        const placeholder = PLACEHOLDERS[path]
        const type = INPUT_TYPES[path] || 'text'
        const value = get(this.state.person, path, '')
        return <Input name={path} onChange={onChange} placeholder={placeholder} type={type} value={value} />
    }

    onClickSave = () => {
        console.info('PersonEditDrawer.onClickSave', this.state.person)
    }

    retrieve = async () => {
        const {person} = await gql(`{
            person(identifier:"8e172a7d-66dc-4520-bd01-98436658f6ee") {
                address {
                    country
                    locality
                    postalCode
                    region
                    streetAddress
                }
                email
                identifier
                name {
                    additional
                    family
                    given
                }
                preferences {
                    email
                }
                role
                telephone
            }
        }`)
        this.setState({person})
    }

    update = (path, value) => {
        const person = cloneDeep(this.state.person)
        set(person, path, value)
        this.setState({person})
    }

    render = () =>
        <Drawer closable={false} onClose={this.props.onClose} maskClosable={false} placement='right' title={this.title()} visible={this.props.visible} width={768}>
            <Form layout='vertical' onSubmit={this.onSubmit}>
                <Form.Item label='Name'>
                    <Row gutter={8}>
                        <Col span={8}>{this.inputFor('name.given')}</Col>
                        <Col span={8}>{this.inputFor('name.additional')}</Col>
                        <Col span={8}>{this.inputFor('name.family')}</Col>
                    </Row>
                </Form.Item>
                <Form.Item label='Contacts'>
                    <Row gutter={8}>
                        <Col span={12}>{this.inputFor('email')}</Col>
                        <Col span={12}>{this.inputFor('telephone')}</Col>
                    </Row>
                </Form.Item>
                <Form.Item label='Address'>
                    {this.inputFor('address.streetAddress')}
                    <Row className='mt1' gutter={8}>
                        <Col span={12}>{this.inputFor('address.locality')}</Col>
                        <Col span={12}>{this.inputFor('address.region')}</Col>
                    </Row>
                    <Row className='mt1' gutter={8}>
                        <Col span={12}>{this.inputFor('address.postalCode')}</Col>
                        <Col span={12}>{this.inputFor('address.country')}</Col>
                    </Row>
                </Form.Item>

                <Row className='mt1' gutter={16}>
                    <Col span={6}>
                        <Form.Item label='Role'>
                            <Select defaultValue={this.state.person.role} name='role' onChange={value => this.update('role', value)}>
                                <Select.Option value='ANONYMOUS'>
                                    None
                                </Select.Option>
                                <Select.Option value='MEMBER'>
                                    Member
                                </Select.Option>
                                <Select.Option value='STAFF'>
                                    Staff
                                </Select.Option>
                                <Select.Option value='ADMINISTRATOR'>
                                    Administrator
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item label='Tags'>
                            <p>Coming Soon</p>
                        </Form.Item>
                    </Col>

                </Row>
                <Form.Item label='Preferences'>
                    <p>Coming Soon</p>
                </Form.Item>
            </Form>
        </Drawer>

}
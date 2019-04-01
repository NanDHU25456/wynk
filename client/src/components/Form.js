import React, { Component } from 'react'
import { DatePicker, Select, Button, Form } from "antd";
import Table1 from './Table'
import operation from '../utils/operation';
import axios from 'axios'

const { Option } = Select;
export default class Form1 extends Component {
    constructor(props) {
        super(props);
        const value = props.value || {};
        this.state = {
            language: value.language || 'hindi',
            startDate: '',
            endDate: '',
            data: ''
        }
    }
    componentDidMount = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    handleChange = (language) => {
        if (!('value' in this.props)) {
            this.setState({ language });
        }
        this.triggerChange({ language });
    }

    triggerChange = (changedValue) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }

    onChange1 = (date, dateString) => {
        this.setState({ startDate: dateString })
    }

    onChange2 = (date, dateString) => {
        this.setState({ endDate: dateString })
    }

    handleSubmit = (e) => {
        const { language, startDate, endDate } = this.state
        let data = ''
        let response = ''
        e.preventDefault();


        axios.post('https://api-gw.revup.reverieinc.com/apiman-gateway/Wynk/stats/1.0', {
            "languages": [language],
            "startDate": startDate,
            "endDate": endDate
        })
            .then(res => {
                response = res.data.perLangPerDayStat;
                console.log(response)
                data = operation(response, startDate, endDate);
                this.setState({ data })
            })
            .catch(err => console.log(err))


    }
    render() {
        const size = this.props;
        return (
            <div>
                <Form layout='vertical' onSubmit={this.handleSubmit}>
                    {/* <Form.Item
            label="Choose Language"
            style={{ marginTop: '50px', marginLeft: '10px' }}
          >
          </Form.Item> */}
                    <Select
                        value={this.state.language}
                        size={size}
                        style={{ width: '32%', marginTop: '50px', marginLeft: '10px' }}
                        onChange={this.handleChange}
                    >
                        <Option value="Hindi">Hindi</Option>
                        <Option value="Tamil">tamil</Option>
                    </Select>
                    <br />
                    <DatePicker
                        onChange={this.onChange1}
                        style={{ marginTop: '50px', marginLeft: '10px' }}
                        placeholder='Start Date'
                    />
                    <br />
                    <DatePicker
                        placeholder='End Date'
                        onChange={this.onChange2}
                        style={{ marginTop: '50px', marginLeft: '10px' }}
                    />
                    <br />
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginTop: '50px', marginLeft: '10px' }}
                    >Submit</Button>
                </Form>
                <Table1 obj={this.state.data} language={this.state.language}></Table1>
            </div>
        )
    }
}

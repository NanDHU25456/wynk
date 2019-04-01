import React, { Component } from 'react'
import uuid from 'uuid/v1';
import { Table } from 'antd';

export default class Table1 extends Component {
    render() {
        let { obj, language } = this.props
        const columns = [{
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
        }, {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        }, {
            title: 'Month',
            dataIndex: 'month',
            key: 'month'
        }, {
            title: 'Moderated',
            dataIndex: 'moderated',
            key: 'moderated'
        }, {
            title: 'InProgress',
            dataIndex: 'inprogress',
            key: 'inprogress'
        }];
        let dataSource = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let temp = {}
                temp.key = uuid()
                temp.language = language
                temp.year = key
                for (const key1 in obj[key]) {
                    let temp1 = {}
                    if (obj[key].hasOwnProperty(key1)) {
                        temp1.month = key1
                        temp1.moderated = obj[key][key1].mod
                        temp1.inprogress = obj[key][key1].in
                        temp1.language = language
                        temp1.year = key
                        dataSource.push(temp1)
                    }
                }
                dataSource.push(temp)
            }
        }
        return (
            <div>
                {dataSource.length <= 0 ? '' : <Table dataSource={dataSource} columns={columns} />}
            </div>
        )
    }
}

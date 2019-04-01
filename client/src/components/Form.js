import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment';

export default class Form extends Component {
  constructor(props){
      super(props);
      this.state = {
          startDate: new Date(),
          endDate: new Date(),
          start: '',
          end: ''
      }
  }
  handleChange1 = (date) => {
    let newDate = moment(date).format('YYYY/DD/MM').split('/').join('-')
    this.setState({startDate: date})
    this.setState({start: newDate})
  }
  handleChange2 = (date) => {
    let newDate = moment(date).format('YYYY/DD/MM').split('/').join('-')
    this.setState({endDate: date})
    this.setState({end: newDate})
  }
  submit = () => {
      console.log(this.state.start, this.state.end);
  }
  render() {
    return (
      <div className='container'>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option value='tamil'>Tamil</option>
            <option value='hindi'>Hindi</option>
            <option valiue='english'>English</option>
            </select>
        </div>
        <div className="form-group">
            <label for="exampleDate1">Start Date</label>
            <div style = {{width: 300 + 'px'}}> 
            <DatePicker 
             dateFormat="yyyy/MM/dd"
             selected = {this.state.startDate}
             onChange = {this.handleChange1}
            />
            </div>
       </div>
       <div className="form-group">
            <label for="exampleDate2">End Date</label>
            <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={this.state.endDate}
                onChange={this.handleChange2} 
            />
       </div>
        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

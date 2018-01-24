import React, { Component } from 'react';
import { Tabs, Radio } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import eventProxy from './eventProxy';
const TabPane = Tabs.TabPane;

class Parent extends Component{
  render (){
    return <div>
        <Child_1 />
        <Child_2 />
      </div>
  }
}

class Child_1 extends Component{
  componentDidMount(){
    setTimeout(() => { 
      eventProxy.trigger('msg','end');
    }, 1000);
  }
  render() {
    return <div>
      <p>{this.props.msg}</p>
    </div>
  }
}

class Child_2 extends Component{
  state = {
    msg: 'start'
  };

  componentDidMount() {
  	// 监听 msg 事件
    eventProxy.on('msg', (msg) => {
      this.setState({
        msg
      });
    });
  }
  render(){
    return <div>
      <p>{this.props.msg}</p>
      </div>
  }
}

export default Parent;
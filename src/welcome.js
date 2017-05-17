import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
        this.setState({
            date: new Date()
        })
        console.log('我在constructor中')
    }
    componentWillMount() {
        this.setState({
            date: new Date(), // 更新 date
            test: 'componentWillMount'
        })
        console.log('运行到这里的话，说明马上就要运行 render 了')
    }
    render() {
        this.setState({
            date: new Date(),
            test: 'render'
        })
        console.log('恩，这里是render')
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>{this.state.date.toString()}</h2>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            date: new Date(),
            test: 'componentDidMount'
        })
        console.log('已经挂载在页面了')
    }
    shouldComponentUpdate() {
        this.setState({
            date: new Date(), // 更新 date
            test: 'shouldComponentUpdate'
        })
        console.log(' shouldComponentUpdate')
    }
    componentWillUpdate() {
        this.setState({
            date: new Date(), // 更新 date
            test: 'componentWillUpdate'
        })
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        this.setState({
            date: new Date(), // 更新 date
            test: 'componentDidUpdate'
        })
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('要死了')
    }

}


export default Welcome
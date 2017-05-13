import React from 'react'
class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            test: '1'
        }
        setInterval(()=>{
            this.setState({
                date: new Date()//更新Date
            })
        })
        this.setState({
            date: new Date(),
            test: 'constructor'
        })
        console.log('我已经在constructor里面初始化了props和state')
    }
    componentWillMount(){
        this.setState({
            date: new Date(),
            test: 'constructor'
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
    componentDidMount(){
        this.setState({
            date: new Date(),
            test: 'componentDidMount'
        }) 
        console.log('已经挂载到页面里面了')
    }
    shouldComponentUpdate(){
        this.setState({
            date: new Date(),
            test: 'shouldComponentUpdate'
        }) 
    }
    componentWillUpdate(){
     this.setState({
       date: new Date(), // 更新 date
       test: 'componentWillUpdate'
     })
   }
   componentDidUpdate(){
     this.setState({
       date: new Date(), // 更新 date
       test: 'componentDidUpdate'
     })
   }
   componentWillUnmount(){
       this.setState({
       date: new Date(), // 更新 date
       test: 'componentWillUnmount'
     })
     console.log('要死了')
   }
}

export default Welcome
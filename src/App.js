import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Counter from "./pages/Counter";
import Age from "./pages/Age";
import Name from "./pages/Name";

class App extends Component {


    constructor(props) {
        debugger;
        console.log('app 初始化');
        super(props);
        this.state = {
            appNum:0
        }
    }

    componentWillMount() {
        console.log('app  will mount');
    }

    componentDidMount() {
        console.log('app did mount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('app will receive');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('app should update');
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('app will update');
    }

    componentWillUnmount() {
        console.log('app will unmount');
    }
    onClick=()=>{
        this.setState({appNum:this.state.appNum+1})
    };

    handleClick=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    };



    render() {
        console.log('app render');
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div onClick={this.onClick}>onClick{this.state.appNum}</div>
                <Counter/>
                <Age age={30}/>
                <Name name='小米'/>
                <button onClick={this.handleClick}>卸载</button>
            </div>
        );
    }
}

export default App;

/**
 * Created by zyf on 2019/1/14.
 */
import React, {Component} from 'react';

class Name extends React.PureComponent{

    constructor(props) {
        debugger;
        console.log('name 初始化');
        super(props);
        this.state = {
            say:'666',
        }
    }

    componentWillMount() {
        console.log('name  will mount');
    }

    componentDidMount() {
        console.log('name   did mount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('name  will receive');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('name  will update');
    }


    componentWillUnmount() {
        console.log('name  will unmount');
    }

    render() {
        console.log('name render');
        const {name}=this.props;
        return (
            <div>
                {
                    name
                }
            </div>
        )
    }
}

export default Name;
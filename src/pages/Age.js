/**
 * Created by zyf on 2019/1/14.
 */
import React, {Component,PureComponent} from 'react';

class Age extends Component {

    constructor(props) {
        debugger;
        console.log('age 初始化');
        super(props);
        this.state = {
            say:'666',
        }
    }

    componentWillMount() {
        console.log('age will mount');
    }

    componentDidMount() {
        console.log('age  did mount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('age will receive');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('age should update');
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('age will update');
    }


    componentWillUnmount() {
        console.log('age will unmount');
    }


    add = () => {
        this.setState({say:555});
    };

    render() {
        console.log('age render');
        const {age} = this.props;
        return (
            <div onClick={this.add}>
                {
                    age
                }
            </div>
        )
    }
}

export default Age;
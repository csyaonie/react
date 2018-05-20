/**
 * Created by zyf on 2018/1/22.
 */
import React from 'react';
import {counter_add, counter_add_async, counter_dec, counter_dec_async} from "../actions/counter";
import {connect} from "react-redux";

class Counter extends React.Component {
    render(){
        const {dispatch}=this.props;
        return (
            <div>
                <button onClick={_=>dispatch(counter_add_async(1))} >异步增加</button>
                <button onClick={_=>dispatch(counter_add(1))} >增加</button>
                <div >数量:{this.props.count}</div>
                <button  onClick={_=>dispatch(counter_dec(1))} >减少</button>
                <button  onClick={_=>dispatch(counter_dec_async(1))} >异步减少</button>
            </div>
        );
    }
}

const mapStoreToProps=(state)=>{
    return {count:state.counter.count}
};

export default connect(mapStoreToProps)(Counter);
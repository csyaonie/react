/**
 * Created by zyf on 2018/1/23.
 */
export const counter_add =(number)=>({
    type:'ADD',
    number:number
});

export const counter_add_async =(number)=>(dispatch,getState)=>{
    setTimeout(function () {
        dispatch(counter_add(number));
    },2000)
};

export const counter_dec=(number)=>({
    type:'DEC',
    number:number
});

export const counter_dec_async =(number)=>(dispatch,getState)=>{
    setTimeout(function () {
        dispatch(counter_dec(number));
    },2000)
};
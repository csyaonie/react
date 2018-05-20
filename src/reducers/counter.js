/**
 * Created by zyf on 2018/1/22.
 */
const initState = {count: 0};
export const counter = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {count: state.count + action.number};
        case 'DEC':
            return {count: state.count - action.number};
        default:
            return state;
    }
};

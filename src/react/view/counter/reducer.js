import { ReducerRegistry }  from "../../base/redux";
let stateDefault = {
    counter:0
};

ReducerRegistry.register("react/counter", (state = stateDefault, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return { counter : state.counter + 1};

        case 'DECREMENT' :
            return { counter : state.counter -1 };

        default :
            return state;
    }
});

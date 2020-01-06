import { ReducerRegistry }  from "../../base/redux";
let stateDefault = {
    home:1
};

ReducerRegistry.register("react/home", (state = stateDefault, action) => {
    switch (action.type) {        
        default :
            return state;
    }
});

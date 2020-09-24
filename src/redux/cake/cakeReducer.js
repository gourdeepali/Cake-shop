import { BUY_CAKE } from './cakeTypes'

const initalstate = {
    noOfCakes:10
}

const cakeReducer = (state = initalstate, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                noOfCakes: state.noOfCakes-1
            }

        default:
            return state
    }
}

export default cakeReducer








import produce from 'immer';
import execHandler from './reducerUtils'

const initialState = {
    coordinates: {}
};

const temperature = {
    addTemperature(state, action){
        state.temperature = action.payLoad
    },getTemperature(state, action) {
        state.temperature = action.payLoad;
    }   
}

export default produce((state, action)=>{
    execHandler(state, action, temperature)
}, initialState)

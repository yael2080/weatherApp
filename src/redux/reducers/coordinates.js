import produce from 'immer';
import execHandler from './reducerUtils'

const initialState = {
    coordinates: [{latitude: '31.98654', longitude: '32.45646'}],
};

const coordinates = {
    addCoordinates(state, action){
        state.coordinates.push(action.payLoad)
    },getCoordinates(state, action) {
        state.coordinates = action.payLoad;
    }   
}

export default produce((state, action)=>{
    execHandler(state, action, coordinates)
}, initialState)

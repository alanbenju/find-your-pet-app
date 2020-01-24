import { TEST, ON_CHANGE_REGION, ADD_CIRCLE, REMOVE_POLYGON, SET_CIRCLE } from "../actions/test";

const initialState = {
    text: '',
    circle: undefined,
    region: {
        latitude: -34.60372,
        longitude: -58.381592,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
}

const testReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case TEST:
            return { ...state, text: action.payload.data }

        case ON_CHANGE_REGION:
            return { ...state, region: action.payload.region }

        case ADD_CIRCLE:
            const coordinates = [
                {
                    latitude: action.payload.region.latitude + 0.005,
                    longitude: action.payload.region.longitude + 0.005
                },
                {
                    latitude: action.payload.region.latitude + 0.005,
                    longitude: action.payload.region.longitude - 0.005
                },
                {
                    latitude: action.payload.region.latitude - 0.005,
                    longitude: action.payload.region.longitude - 0.005
                },
                {
                    latitude: action.payload.region.latitude - 0.005,
                    longitude: action.payload.region.longitude + 0.005
                }
            ]
            return { ...state, circle: { coordinates } }

        case SET_CIRCLE:
            //NAVIGATIOR
            return { ...state }

        default:
            return state;
    }

}

export default testReducer
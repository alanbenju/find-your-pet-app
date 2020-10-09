import { TEST} from "../actions/test";

const initialState = {
    text: '',
}

const mapReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case TEST:
            return { ...state, text: action.payload.data }

        default:
            return state;
    }

}

export default mapReducer
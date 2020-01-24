export const TEST = 'TEST';
export const test = (data) => ({
  type: TEST,
  payload: {data}
});

export const ON_CHANGE_REGION = "ON_CHANGE_REGION"
export const onChangeRegion = (region) => ({
  type: ON_CHANGE_REGION,
  payload: {region}
})

export const ADD_CIRCLE = "ADD_CIRCLE"
export const addCircle = (region) => ({
  type: ADD_CIRCLE,
  payload: {region}
})

export const SET_CIRCLE = "SET_CIRCLE"
export const setCircle = () => ({
  type: SET_CIRCLE,
})
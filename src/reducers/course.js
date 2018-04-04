export default (state = {}, action) => {
    switch(action.type){
        case 'ADD_COURSE':
            return [
                ...state,
                ...action.courses
            ]

        case 'SET_COURSE': {
            // console.log('action',action.data)
            state = action.data
        }

        case 'SET_PAYMENT': {
            return {
                payment: action.courseID
            }
        }

        case 'SET_TRAINER_COURSE': {
            return [
                ...state,
                ...action.courses
            ]
        }

        default:
            return state;
    }
}
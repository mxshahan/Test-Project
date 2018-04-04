export const addCourse = (courses) => ({
    type: 'ADD_COURSE',
    courses
})

export const startAddCourses = (body) => {
    return (dispatch) => {
        dispatch(addCourse(body))
    }
}

export const setCourse = (data) => ({
    type: 'SET_COURSE',
    data
})

export const setDownload = (id) => ({
    type: 'SET_PAYMENT',
    courseID: id
})

export const setTrainerCourse = (_Course) => {
    return (dispatch) => {
        dispatch(addCourse(_Course))
    }
}
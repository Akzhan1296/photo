const initialState ={
    term: '',
    imgs: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'IMG_SEARCH':
            return {
                term: action.payload
            }

        case 'IMGS_DATA':
            return {
                imgs: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;
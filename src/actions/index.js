const imgSearch = (term) => {
    return {
        type: 'IMG_SEARCH',
        payload: term
    };
}



const imgData = (imgArr) => {
    return {
        type: 'IMGS_DATA',
        payload: imgArr
    };
}

export {
    imgSearch,
    imgData
}
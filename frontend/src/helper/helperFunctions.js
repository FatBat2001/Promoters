import data from './data.json'; 
const mapping = {
    "concerts":0, 
    "corporate":1,
    "conferences":2,
    "activations":3
}
export const getAllEvents = ()=> {
    return data.allCategories; 
}

export const getCategoryList = (category) => {
    return data.allCategories[mapping[category]][category].events;
}


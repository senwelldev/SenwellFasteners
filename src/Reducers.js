const initialState={
    categoryData:[],
    productsData:[],
    filterProducts:[],
    blogs:[],
    filteredBlogs:[]

};

const rootReducers =(state=initialState,action)=>{
switch(action.type){
    case "SET_CATEGORY_DATA" :
        return{
            ...state,
            categoryData:action.payload
        }

    case "SET_PRODUCTS_DATA":
        return{
            ...state,
            productsData:action.payload
        }

    case "SET_FILTER_PRODUCTS":
        return{
            ...state,
            filterProducts:action.payload
        }

    case "SET_BLOG":
        return{
            ...state,
            blogs:action.payload

        }
    case "SET_FILTER_BLOGS":
        return{
            ...state,
            filteredBlogs:action.payload

        }
    default:
        return state;
}
}

export default rootReducers;
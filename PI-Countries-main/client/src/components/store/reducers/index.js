

const initialState = {
    countries: [],
    detail:{},
    filterActivity:[]
    
}
function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":return{
            ...state,
            countries: action.payload

        }
        case "GET_DETAIL":return{
            ...state,
            detail: action.payload
        }
        case "BAR_SEARCH":return{
            ...state,
            countries: action.payload
        }
        case "FILTER_ACTIVITY":return{
            ...state,
            
        }
        default:return{
            ...state
        }
    }
}
export default rootReducer;
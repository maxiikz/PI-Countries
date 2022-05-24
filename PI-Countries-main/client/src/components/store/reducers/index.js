

const initialState = {
    filterCountries:[],
    countries: [],
    detail:{},
    filterActivity:[]
    
}
function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":return{
            ...state,
            countries: action.payload, filterCountries:action.payload

        }
        case "GET_DETAIL":return{
            ...state,
            detail: action.payload
        }
        case "SORT_NAME":
            const copy=[...state.countries]
            let mageName=action.payload==="A Z"? state.countries.sort(
                function (a,b){
                    if(a.name>b.name){
                        return 1;
                    }
                    if(b.name>a.name){
                        return -1
                    }
                    return 0;
                }
            ): action.payload=== "Z A"? state.countries.sort(
                function(a,b){
                    if(a.name>b.name){
                        return -1
                    }
                    if(b.name>a.name){
                        return 1
                    }
                    return 0;
                }
            ): copy
            console.log(mageName);
            return{
            ...state,
            countries: mageName
        }
        case "SORT_POP":
            const copy2=[...state.countries]
            let magePop=action.payload==="low high"? state.countries.sort(
                (a,b)=>{
                    if(a.population>b.population){
                        return 1;
                    }
                    if(b.population>a.population){
                        return -1
                    }
                    return 0;
                }
            ): action.payload=== "high low"? state.countries.sort(
                (a,b)=>{
                    if(a.population>b.population){
                        return -1
                    }
                    if(b.population>a.population){
                        return 1
                    }
                    return 0;
                }
            ): copy2
            console.log(magePop);
            return{
            ...state,
            countries: magePop
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


const initialState = {
    filterCountries:[],
    countries: [],
    detail:{},
    activity:[]
    
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
            let mageName=action.payload==="A Z"? state.countries.slice().sort(
                function (a,b){
                    if(a.name>b.name){
                        return 1;
                    }
                    if(b.name>a.name){
                        return -1
                    }
                    return 0;
                }
            ): action.payload=== "Z A"? state.countries.slice().sort(
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
            let magePop=action.payload==="low high"? state.countries.slice().sort(
                (a,b)=>{
                    if(a.population>b.population){
                        return 1;
                    }
                    if(b.population>a.population){
                        return -1
                    }
                    return 0;
                }
            ): action.payload=== "high low"? state.countries.slice().sort(
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
        case "FILTER_REGION":
      const filterByReg =
        action.payload === "ALL"
          ? state.countries
          : state.countries.filter((element) =>
              element.region.includes(action.payload)
            );
      return {
        ...state,
        countries: filterByReg,
      };
      case "FILTER_ACTIVITY":
            let filterByActivities = action.payload === "All"
            ? state.countries
            : state.countries.slice().filter(country => country.activity && country.activity.map(a => a.name).find(action.payload)) 
                console.log(filterByActivities)
              
            return {
                ...state,
                countries: filterByActivities
            }
        case "GET_ACTIVITIES":return{
            ...state,
            activity:action.payload
        }
        case "POST_ACTIVITIES":return{
            ...state
        }
        
        default:return{
            ...state
        }
    }
}
export default rootReducer;
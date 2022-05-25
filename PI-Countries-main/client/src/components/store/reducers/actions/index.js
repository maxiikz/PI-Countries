import axios from 'axios'
export function getCountries(){
    return function (dispatch){
        axios.get("http://localhost:3001/countries").then(response=>{
            return dispatch({
                type:"GET_COUNTRIES", payload:response.data
            })
        })
    }
}
export function getActivities(){
    return function (dispatch){
        axios.get("http://localhost:3001/activity").then(response=>{
            return dispatch({
                type:"GET_ACTIVITIES", payload:response.data
            })
        })
    }
}
export function postActivities(payload){
    return function(dispatch){
        axios.post("http://localhost:3001/activity", payload).then(response=>{
         return dispatch({
            type:"POST_ACTIVITIES", payload:response.data
        })   
        });
        
    }}

export function orderByReg(payload){
    return function(dispatch){
        dispatch({type:"FILTER_REGION",
        payload:payload})
    }
        
    }

export function orderByName(payload){
    return async (dispatch) =>{
        try{
            dispatch({
                type: "SORT_NAME",
                payload:payload
            })
            
        }catch(err){
            console.log(err,"error order")
        }
    }
}
export function orderByPop(payload){
    return async (dispatch) =>{
        try{
            dispatch({
                type: "SORT_POP",
                payload:payload
            })
            
        }catch(err){
            console.log(err,"error pop")
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        let json=await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type:"GET_DETAIL", payload:json.data
        })
    }
}
export let filterByActivity = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: "FILTER_ACTIVITY",
                payload: payload
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function barSearch(name){
 return async function(dispatch){
    let json=await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch({
        type:"BAR_SEARCH", payload:json.data
    })
}
}

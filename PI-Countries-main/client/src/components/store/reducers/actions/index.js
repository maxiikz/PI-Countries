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
export function barSearch(name){
 return async function(dispatch){
    let json=await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch({
        type:"BAR_SEARCH", payload:json.data
    })
}
}

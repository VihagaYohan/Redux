export const increment = ()=> {
    return{
        type:'INCREMENT'
    }
}

export const decrement = (nr)=>{
    return{
        type:'DECREMENT',
        payload:nr
    }
}
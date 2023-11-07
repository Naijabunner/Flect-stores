import { useEffect, useState } from "react";

const Usefetch = (url) => {
    const [data, setData]= useState([])
    const [ispending, setispending]= useState(true)
    const [error, seterror]= useState(null)
     
    useEffect(()=>{
        setTimeout(() => {
             fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error('could not fetch data')
            }
            return res.json()
        })
        .then(data =>{
            setData(data)
            setispending(false)
        })
        .catch(err=>{
            seterror(err)
            console.log(error)
            setispending(false)
        });
        }, 1000);
               
    }, [])
     return{data, ispending, error}
}
 
export default Usefetch;
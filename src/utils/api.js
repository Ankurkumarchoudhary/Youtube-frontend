import axios from "axios";
const BASE_URL="http://localhost:8000/api/v1"


 export const fetchDataFromApi= async(url)=>{
    // const {data}= await axios.get(`${BASE_URL}/${url}`)
    // return data
    const {data}= await axios.get(`${BASE_URL}/${url}`)
    return data
    // console.log(data)
  }
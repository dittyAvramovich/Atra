 import axios from 'axios';
 class cardService{
     fetchCard=()=>{
         return axios.get('http://localhost:4000/').then(({data})=> data)
     }
 }
 export default new cardService();

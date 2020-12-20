import axios from 'axios';



class cardService {

 fetchCard() {

        debugger;

      
         return axios.get(`http://localhost:4000/category/allCategory/`).then(({ data }) => data);
        // return axios.get(`http://localhost:4000/card/allCard/`).then(({ data }) => data);

        // return axios.get('https://academeez-chat.herokuapp.com/api/users').then(({data})=>data)
        // .then((res) => {
        //     debugger
        //      return res.data() 
        //     })
        

        }
        fetchCardById(){
const id="5fc80139389b213cb82f7adb";

        return axios.get(`http://localhost:4000/card/cardById/${id}`).then(({ data }) => data().then((res)=>{
            return res.data()
        }))
        }


    

    }
export default new cardService();

import axios from 'axios';



class cardService {

 fetchCard() {

        debugger;

      
        return axios.get(`http://localhost:4000/category/allCategory/`).then(({ data }) => data);

        // return axios.get('https://academeez-chat.herokuapp.com/api/users').then(({data})=>data)
        // .then((res) => {
        //     debugger
        //      return res.data() 
        //     })
        


        }
        fetchCardById(id){
        return axios.get(`http://localhost:4000/card/cardById/${"5f50f2ba5e476c2b08677f46"}`).then(({ data }) => data);
        }


    

    }
export default new cardService();

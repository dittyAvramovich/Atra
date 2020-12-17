import axios from 'axios';



class cardService {



    fetchCard() {

        debugger

      
        return axios.get('http://localhost:4000/card/allCard').then(({ data }) => data);

        // return axios.get('https://academeez-chat.herokuapp.com/api/users').then(({data})=>data)
        // .then((res) => {
        //     debugger
        //      return res.data() 
        //     })
        


        }
        fetchCardById(id){
        return axios.get(`http://localhost:4000/${id}`).then(({ data }) => data);
        }


    

    }
export default new cardService();

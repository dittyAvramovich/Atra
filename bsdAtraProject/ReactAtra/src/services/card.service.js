import axios from 'axios';



class cardService {



    fetchCard() {

        debugger
        let userID = "ZgIubuvlcmeB5KUTtMACQT2bJhH3";
        let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJaZ0l1YnV2bGNtZUI1S1VUdE1BQ1FUMmJKaEgzIiwiZW1haWwiOiJtaWNoYWxnaWxhZGlAbGVhZGVyLmNvZGVzIiwiaXAiOiIxOTUuNjAuMjM1LjE0MSIsImlhdCI6MTYwNTYxNjIzMX0.0tzZaphzABxKiRcEo93XXUiBRcoplIzwJkn7DfuMY7Q";

        return axios.get('https://academeez-chat.herokuapp.com/api/users').then(({data})=>data)
        // .then((res) => {
        //     debugger
        //      return res.data() 
        //     })
        

        }


        // return axios.get('http://localhost:4000/').then(({ data }) => data)

    }
export default new cardService();

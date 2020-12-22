import axios from 'axios';



class cardService {

  fetchCard() {

    return axios.get(`http://localhost:4000/category/allCategory/`)
    .then((res) => {
      debugger
       console.log(res.data.result);
           return res .data.result
          });
 
   

  //const arry = [...data.data.benefits];




  //     return fetch(`http://localhost:4000/category/allCategory/`)
  //     .then((res)=> {

  //     console.log("fghj"+ res.json()) 
  // });

  //return axios.get(`http://localhost:4000/card/allCard/`).then(({ data }) => data);

  // return axios.get('https://academeez-chat.herokuapp.com/api/users').then(({data})=>data)
  // .then((res) => {
  //     debugger
  //      return res.data() 
  //     })


}

fetchCards() {

  return axios.get(`http://localhost:4000/card/allCard/`)
  .then((res) => {
    debugger
     console.log(res.data.result);
         return res .data.result
        });
}

fetchCardById() {
  const id = "5fc80139389b213cb82f7adb";
  debugger
  return axios.get(`http://localhost:4000/card/cardById/${id}`).then(({ data }) => data, console.log(this.data));
}




}
export default new cardService();

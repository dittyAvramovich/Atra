import axios from 'axios';

class cardService {
  fetchCard() {
    return axios.get(`http://localhost:4000/category/allCategory/`)
      .then((res) => {
        debugger
        console.log(res.data.result);
        return res.data.result
      });
  }
  fetchCards() {
    return axios.get(`http://localhost:4000/card/allCard/`)
      .then((res) => {
        debugger
        console.log(res.data.result);
        return res.data.result
      });
  }
  fetchCardById() {
    const id = "5fc80139389b213cb82f7adb";
    debugger
    return axios.get(`http://localhost:4000/card/cardById/${id}`).then(({ data }) => data, console.log(this.data));
  }
}
export default new cardService();

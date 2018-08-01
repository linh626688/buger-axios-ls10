import axios from 'axios'
const instance = axios.create({
   baseURL: 'https://react-my-burger-ee348.firebaseio.com/'

});
export default instance;
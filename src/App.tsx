// URL for USer = https://jsonplaceholder.typicode.com/users

// import { useState } from 'react'
import './App.css'
// import axios from "axios";

import User from './component/User'


function App() {
  return (
    <>
      <User />
    </>
  )
}
export default App





















// interface user {
//   name: String
//   username: String
//   email: String
// }

// const [result, setResult] = useState("");

// const fetchRandomData = (pageNumber: number) => {
//   return axios
//     .get(`https://jsonplaceholder.typicode.com/users`)
//     .then(({ data }) => {
//       console.log(data);
//       return data
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

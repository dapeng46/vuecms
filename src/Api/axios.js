import axios from 'axios'
export default function Axios (url, types, data, info) {
  let result = axios({
    url: url,
    headers: { "content-type":"application/x-www-form-urlencoded" },
    method: types,
    data: 'username='+data.username+'&userpwd='+data.password+'&userclass=48&type=2&m='+info
  })
  return result;
}



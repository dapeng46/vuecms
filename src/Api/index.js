import axios from './axios'
//定义基础路径
const BASE_URL='http://www.qhdlink-student.top/student';

//请求登录数据
export const getUserData=(data)=>axios(BASE_URL+'/login.php','POST',data)
export const getNewsData=(data)=>axios(BASE_URL+'/newsa.php','POST',data)
export const getBannerData=(data)=>axios(BASE_URL+'/banner.php','POST',data)
export const getStaffData=(data)=>axios(BASE_URL+'/coach.php','POST',data)
export const getVarietyData=(data)=>axios(BASE_URL+'/coacha.php','POST',data)
export const getInfoData=(data,info)=>axios(BASE_URL+'/newsinfo.php','POST',data,info)
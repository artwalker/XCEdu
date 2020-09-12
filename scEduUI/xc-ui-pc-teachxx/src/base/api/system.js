import http from './public'

let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
/*数据字典 */
export const sys_getDictionary = dType => {
  return http.requestQuickGet(apiUrl + '/sys/dictionary/get/' + dType)
}
/*获取jwt令牌*/
export const getjwt = () => {
  return http.requestQuickGet('/openapi/auth/userjwt')
}
/*根据课程id查询课程信息*/
export const course_view = id => {
  return http.requestGet('/openapi/search/course/getall/'+id);
}





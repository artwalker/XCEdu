webpackJsonp([1],{0:function(e,t){},"17ed":function(e,t){},"2am/":function(e,t){},GsS9:function(e,t){},"N/D4":function(e,t){},NHnr:function(e,t,a){"use strict";function s(e){a("2am/")}function n(e,t){for(var t=t-(e+"").length,a=0;a<t;a++)e="0"+e;return e}function r(e){a("17ed")}function o(e){a("male")}function i(e){a("gZzQ")}function l(e){a("N/D4")}function c(e){a("djTQ")}function u(e){a("GsS9")}Object.defineProperty(t,"__esModule",{value:!0});var p={};a.d(p,"increment",function(){return st}),a.d(p,"decrement",function(){return nt});var m={};a.d(m,"getCount",function(){return rt});var d=a("//Fk"),g=a.n(d),h=a("mvHQ"),f=a.n(h),v=a("7+uW"),b={data:function(){return{name:"app"}},methods:{},created:function(e){}},_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view")],1)},y=[],w={render:_,staticRenderFns:y},F=w,I=a("VU/8"),k=s,$=I(b,F,!1,k,null,null),x=$.exports,C=a("zL8q"),P=a.n(C),q=(a("tvR6"),a("/ocq")),N=a("ytdl"),U=a.n(N),L=/([yMdhsm])(\1*)/g,S={getActiveUser:function(){if(this.getCookie("uid")){var e=this.getUserSession("activeUser");return JSON.parse(e)}this.delUserSession("activeUser")},getJwt:function(){var e=this.getActiveUser();if(e)return e.jwt},checkActiveUser:function(){var e=this.getCookie("juid");if(e){var t=Base64.decode(e),a=U()(t);if(a){var s={};return s.utype=a.utype||"",s.username=a.user_name||"",s.userpic=a.userpic||"",s.userid=a.userid||"",s.authorities=a.authorities||"",s.menus=a.menus||"",this.setSession("activeUser",f()(s)),this.getUserSession("activeUser")}}return null},checkAuthorities:function(e,t){if("Login"!=t&&"Logout"!=t){var a=this.getActiveUser(),s=a.authorities;s||(C.Message.error("对不起您没有此操作权限！"),window.location="http://ucenter.xuecheng.com/#/denied?returnUrl="+Base64.encode(window.location));s.find(function(e,a,s){return e==t})||(C.Message.error("对不起您没有此操作权限！"),window.location="http://ucenter.xuecheng.com/#/denied?returnUrl="+Base64.encode(window.location))}},checkmenu:function(e,t){if(e.meta&&e.meta.permission){var a=e.meta.permission;t.find(function(e,t,s){return e==a})||(e.hidden=!0)}},getCookie:function(e){var t,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(a))?t[2]:null},setCookie:function(e,t,a){var s=new Date;s.setDate(s.getDate()+a),document.cookie=e+"="+escape(t)+(null==a?"":";expires="+s.toGMTString())},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1),document.cookie=e+"="+cval+";expires="+t.toGMTString()},setSession:function(e,t){return sessionStorage.setItem(e,t)},getUserSession:function(e){return sessionStorage.getItem(e)},delUserSession:function(e){return sessionStorage.removeItem(e)},getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),s="";return null!=a&&(s=a[2]),t=null,a=null,null==s||""==s||"undefined"==s?"":s},formatDate:function(e,t){return t=t||"yyyy-MM-dd",t.replace(L,function(t){switch(t.charAt(0)){case"y":return n(e.getFullYear(),t.length);case"M":return n(e.getMonth()+1,t.length);case"d":return n(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return n(e.getHours(),t.length);case"m":return n(e.getMinutes(),t.length);case"s":return n(e.getSeconds(),t.length)}})},parseDate:function(e,t){var a=t.match(L),s=e.match(/(\d)+/g);if(a.length==s.length){for(var n=new Date(1970,0,1),r=0;r<a.length;r++){var o=parseInt(s[r]);switch(a[r].charAt(0)){case"y":n.setFullYear(o);break;case"M":n.setMonth(o-1);break;case"d":n.setDate(o);break;case"h":n.setHours(o);break;case"m":n.setMinutes(o);break;case"s":n.setSeconds(o)}}return n}return null}},T=a("mtWM"),A=a.n(T);a("hKoQ").polyfill(),A.a.defaults.withCredentials=!0,A.a.defaults.timeout=1e4,A.a.defaults.headers.post["Content-Type"]="application/x-www=form-urlencoded",S.getJwt()&&(A.a.defaults.headers.Authorization="Bearer "+S.getJwt());var M={requestGet:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g.a(function(a,s){A.a.get(e,t).then(function(e){a(e.data)}).catch(function(e){s(e)})})},requestQuickGet:function(e){return new g.a(function(t,a){A.a.get(e).then(function(e){t(e.data)}).catch(function(e){a(e)})})},requestPost:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g.a(function(a,s){A.a.post(e,t).then(function(e){a(e.data)}).catch(function(e){s(e)})})},requestPostForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g.a(function(a,s){A.a.post(e,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){a(e.data)}).catch(function(e){s(e)})})},requestPut:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g.a(function(a,s){A.a.put(e,t).then(function(e){a(e.data)}).catch(function(e){s(e)})})},requestDelete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g.a(function(a,s){A.a.delete(e,t).then(function(e){a(e.data)}).catch(function(e){s(e)})})}},E=a("1nuA"),R=a.n(E),D=(a("mw3O"),{data:function(){return{editLoading:!1,sysName:"系统管理中心",user:{userid:"",username:"",userimg:""},logined:!1,collapsed:!1}},methods:{logout:function(){this.$confirm("确认退出吗?","提示",{}).then(function(){window.location="http://ucenter.xuecheng.com/#/logout"}).catch(function(){})},refresh_user:function(){var e=S.getActiveUser();e&&(this.logined=!0,this.user=e)}},mounted:function(){this.refresh_user()}}),z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",attrs:{span:14}},[a("img",{attrs:{src:"/static/images/asset-logoIco-white.png",width:"500px",alt:""}}),e._v(e._s(e.collapsed?"":e.sysName)+"\n    ")]),e._v(" "),this.logined?a("el-col",{staticClass:"userinfo",attrs:{span:10}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"usermenu"},[a("span",{staticClass:"el-dropdown-link userinfo-inner"},[a("img",{attrs:{src:null!=this.user.sysUserImg?this.user.sysUserImg:"/static/images/small.jpg"}})]),e._v("\n            欢迎您："+e._s(e.user.username)+"\n            "),a("a",{attrs:{href:"http://www.xuecheng.com",target:"_blank"}},[a("i",{staticClass:"el-icon-star-on"}),e._v("首页")]),e._v(" "),a("a",{attrs:{href:"javascript:;",loading:e.editLoading},on:{click:e.logout}},[a("i",{staticClass:"el-icon-circle-close"}),e._v("退出")])])])]):e._e()],1)],1)},H=[],V={render:z,staticRenderFns:H},W=V,j=a("VU/8"),Q=r,B=j(D,W,!1,Q,"data-v-c4e8658e",null),G=B.exports,O={components:{PHead:G},data:function(){return{collapsed:!1,sysUserName:"",sysUserAvatar:"/static/images/small.jpg",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},created:function(){console.log(this.$router.options.routes)}},J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("p-head"),e._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[a("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:"","background-color":"#EFEFF4"},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,s){return t.hidden?e._e():[t.leaf?e._e():a("el-submenu",{attrs:{index:s+""}},[a("template",{slot:"title"},[a("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():a("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n                "+e._s(t.name)+"\n              ")])})],2),e._v(" "),t.leaf&&t.children.length>0?a("el-menu-item",{attrs:{index:t.children[0].path}},[a("i",{class:t.iconCls}),e._v(e._s(t.children[0].name)+"\n            ")]):e._e()]})],2),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},e._l(e.$router.options.routes,function(t,s){return t.hidden?e._e():a("li",{staticClass:"el-submenu item"},[t.leaf?[a("li",{staticClass:"el-submenu"},[a("div",{staticClass:"el-submenu__title el-menu-item",class:e.$route.path==t.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(a){e.$menu.push(t.children[0].path)}}},[a("i",{class:t.iconCls})])])]:[a("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},on:{mouseover:function(t){e.showMenu(s,!0)},mouseout:function(t){e.showMenu(s,!1)}}},[a("i",{class:t.iconCls})]),e._v(" "),a("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+s,on:{mouseover:function(t){e.showMenu(s,!0)},mouseout:function(t){e.showMenu(s,!1)}}},e._l(t.children,function(t){return t.hidden?e._e():a("li",{key:t.path,staticClass:"el-menu-item",class:e.$route.path==t.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(a){e.$menu.push(t.path)}}},[e._v(e._s(t.name)+"\n                ")])}))]],2)}))],1),e._v(" "),a("section",{staticClass:"content-container"},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("strong",{staticClass:"title"},[e._v(e._s(e.$route.name))]),e._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}})],1),e._v(" "),a("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)])])],1)},Y=[],Z={render:J,staticRenderFns:Y},K=Z,X=a("VU/8"),ee=o,te=X(O,K,!1,ee,"data-v-311605d9",null),ae=te.exports,se=[{path:"/",component:ae,name:"系统管理首页",hidden:!0}],ne=a("gBtx"),re=a.n(ne),oe=a("kspH"),ie=oe.xcApiUrlPre,le=function(e,t,a){var s=R.a.stringify(a);return M.requestQuickGet(ie+"/cms/page/list/"+e+"/"+t+"/?"+s)},ce=function(e){return M.requestPost(ie+"/cms/page/add",e)},ue=function(e){return M.requestPut(ie+"/cms/page/edit",e)},pe=function(e){return M.requestQuickGet(ie+"/cms/page/get/"+e)},me=function(e){return M.requestDelete(ie+"/cms/page/del/"+e)},de=function(e){return M.requestPost(ie+"/cms/page/generateHtml/"+e)},ge=function(e){return M.requestQuickGet(ie+"/cms/page/getHtml/"+e)},he=function(e){return M.requestPost(ie+"/cms/page/postPage/"+e)},fe={data:function(){return{params:{page:1,size:2,siteId:""},listLoading:!1,list:[],total:0,siteList:[]}},methods:{formatCreatetime:function(e,t){var a=new Date(e.pageCreateTime);if(a)return S.formatDate(a,"yyyy-MM-dd hh:mm:ss")},generateHtml:function(e){this.$router.push({path:"/cms/page/html/"+e,query:{page:this.params.page,siteId:this.params.siteId}})},postPage:function(e){var t=this;this.$confirm("确认发布该页面吗?","提示",{}).then(function(){t.listLoading=!0,he(e).then(function(a){a.success?(console.log("发布页面id="+e),t.listLoading=!1,t.$message.success("发布成功，请稍后查看结果")):t.$message.error("发布失败")})}).catch(function(){})},edit:function(e){this.$router.push({path:"/cms/page/edit/"+e,query:{page:this.params.page,siteId:this.params.siteId}})},del:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0;var e=t.pageId;me(e).then(function(e){a.listLoading=!1,e.success?(a.$message.success("删除成功"),a.query()):a.$message.error("删除失败")})}).catch(function(){})},changePage:function(e){this.params.page=e,this.query()},query:function(){var e=this;le(this.params.page,this.params.size,this.params).then(function(t){console.log(t),e.total=t.queryResult.total,e.list=t.queryResult.list})}},created:function(){this.params.page=re()(this.$route.query.page||1),this.params.siteId=this.$route.query.siteId||""},mounted:function(){this.query(),this.siteList=[{siteId:"5a751fab6abb5044e0d19ea1",siteName:"门户主站"},{siteId:"102",siteName:"测试站"}]}},ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{model:e.params}},[a("el-select",{attrs:{placeholder:"请选择站点"},model:{value:e.params.siteId,callback:function(t){e.$set(e.params,"siteId",t)},expression:"params.siteId"}},e._l(e.siteList,function(e){return a("el-option",{key:e.siteId,attrs:{label:e.siteName,value:e.siteId}})})),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.query}},[e._v("查询")]),e._v(" "),a("router-link",{staticClass:"mui-tab-item",attrs:{to:{path:"/cms/page/add/",query:{page:this.params.page,siteId:this.params.siteId}}}},[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("新增页面")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pageName",label:"页面名称",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pageAliase",label:"别名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pageType",label:"类型（静态、动态）",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pageWebPath",label:"访问路径",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pagePhysicalPath",label:"物理路径",width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pageCreateTime",label:"创建时间",width:"180",formatter:e.formatCreatetime}}),e._v(" "),a("el-table-column",{attrs:{label:"编辑",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.edit(t.row.pageId)}}},[e._v("编辑\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"删除",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.del(t.$index,t.row)}}},[e._v("删除\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"静态化",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(a){e.generateHtml(t.row.pageId)}}},[e._v("静态化\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发布",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(a){e.postPage(t.row.pageId)}}},[e._v("发布\n          ")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":this.params.size,total:e.total,"current-page":this.params.page},on:{"current-change":e.changePage}})],1)],1)},be=[],_e={render:ve,staticRenderFns:be},ye=_e,we=a("VU/8"),Fe=i,Ie=we(fe,ye,!1,Fe,null,null),ke=Ie.exports,$e={data:function(){return{templateList:[],addLoading:!1,pageForm:{siteId:"",templateId:"",pageName:"",pageAliase:"",pageWebPath:"",dataUrl:"",pageParameter:"",pagePhysicalPath:"",pageType:"",pageCreateTime:new Date},pageFormRules:{siteId:[{required:!0,message:"请选择站点",trigger:"blur"}],templateId:[{required:!0,message:"请选择模版",trigger:"blur"}],pageName:[{required:!0,message:"请输入页面名称",trigger:"blur"}],pageWebPath:[{required:!0,message:"请输入访问路径",trigger:"blur"}],pagePhysicalPath:[{required:!0,message:"请输入物理路径",trigger:"blur"}]},siteList:[],goback_params:{page:this.$route.query.page,siteId:this.$route.query.siteId}}},methods:{go_back:function(){this.$router.push({path:"/cms/page/list",query:{page:this.$route.query.page,siteId:this.$route.query.siteId}})},addSubmit:function(){var e=this;this.$refs.pageForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0,ce(e.pageForm).then(function(t){console.log(t),t.success?(e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.pageForm.resetFields()):t.message?(e.addLoading=!1,e.$message.error(t.message)):(e.addLoading=!1,e.$message.error("提交失败"))})})})}},created:function(){},mounted:function(){this.siteList=[{siteId:"5a751fab6abb5044e0d19ea1",siteName:"门户主站"},{siteId:"102",siteName:"测试站"}],this.templateList=[{templateId:"5a962b52b00ffc514038faf7",templateName:"首页"},{templateId:"5a962bf8b00ffc514038fafa",templateName:"轮播图"}]}},xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"pageForm",attrs:{model:e.pageForm,"label-width":"80px",rules:e.pageFormRules}},[a("el-form-item",{attrs:{label:"所属站点",prop:"siteId"}},[a("el-select",{attrs:{placeholder:"请选择站点"},model:{value:e.pageForm.siteId,callback:function(t){e.$set(e.pageForm,"siteId",t)},expression:"pageForm.siteId"}},e._l(e.siteList,function(e){return a("el-option",{key:e.siteId,attrs:{label:e.siteName,value:e.siteId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"选择模版",prop:"templateId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pageForm.templateId,callback:function(t){e.$set(e.pageForm,"templateId",t)},expression:"pageForm.templateId"}},e._l(e.templateList,function(e){return a("el-option",{key:e.templateId,attrs:{label:e.templateName,value:e.templateId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"页面名称",prop:"pageName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pageName,callback:function(t){e.$set(e.pageForm,"pageName",t)},expression:"pageForm.pageName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"别名",prop:"pageAliase"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pageAliase,callback:function(t){e.$set(e.pageForm,"pageAliase",t)},expression:"pageForm.pageAliase"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"访问路径",prop:"pageWebPath"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pageWebPath,callback:function(t){e.$set(e.pageForm,"pageWebPath",t)},expression:"pageForm.pageWebPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"物理路径",prop:"pagePhysicalPath"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pagePhysicalPath,callback:function(t){e.$set(e.pageForm,"pagePhysicalPath",t)},expression:"pageForm.pagePhysicalPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数据Url",prop:"dataUrl"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.dataUrl,callback:function(t){e.$set(e.pageForm,"dataUrl",t)},expression:"pageForm.dataUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{model:{value:e.pageForm.pageType,callback:function(t){e.$set(e.pageForm,"pageType",t)},expression:"pageForm.pageType"}},[a("el-radio",{staticClass:"radio",attrs:{label:"0"}},[e._v("静态")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:"1"}},[e._v("动态")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"创建时间"},model:{value:e.pageForm.pageCreateTime,callback:function(t){e.$set(e.pageForm,"pageCreateTime",t)},expression:"pageForm.pageCreateTime"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.go_back}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.addSubmit(t)}}},[e._v("提交")])],1)],1)},Ce=[],Pe={render:xe,staticRenderFns:Ce},qe=Pe,Ne=a("VU/8"),Ue=l,Le=Ne($e,qe,!1,Ue,null,null),Se=Le.exports,Te={data:function(){return{pageId:"",templateList:[],addLoading:!1,pageForm:{siteId:"",templateId:"",pageName:"",pageAliase:"",pageWebPath:"",dataUrl:"",pageParameter:"",pagePhysicalPath:"",pageType:"",pageCreateTime:new Date},pageFormRules:{siteId:[{required:!0,message:"请选择站点",trigger:"blur"}],templateId:[{required:!0,message:"请选择模版",trigger:"blur"}],pageName:[{required:!0,message:"请输入页面名称",trigger:"blur"}],pageWebPath:[{required:!0,message:"请输入访问路径",trigger:"blur"}],pagePhysicalPath:[{required:!0,message:"请输入物理路径",trigger:"blur"}]},siteList:[]}},methods:{go_back:function(){this.$router.push({path:"/cms/page/list",query:{page:this.$route.query.page,siteId:this.$route.query.siteId}})},editSubmit:function(){var e=this;this.$refs.pageForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0,ue(e.pageForm).then(function(t){console.log(t),t.success?(e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.go_back()):(e.addLoading=!1,e.$message.error("提交失败"))})})})}},created:function(){var e=this;this.pageId=this.$route.params.pageId,pe(this.pageId).then(function(t){console.log(t),t.success&&(e.pageForm=t.cmsPage)})},mounted:function(){this.siteList=[{siteId:"5a751fab6abb5044e0d19ea1",siteName:"门户主站"},{siteId:"102",siteName:"测试站"}],this.templateList=[{templateId:"5a962b52b00ffc514038faf7",templateName:"首页"},{templateId:"5a962bf8b00ffc514038fafa",templateName:"轮播图"}]}},Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"pageForm",attrs:{model:e.pageForm,"label-width":"80px",rules:e.pageFormRules}},[a("el-form-item",{attrs:{label:"所属站点",prop:"siteId"}},[a("el-select",{attrs:{placeholder:"请选择站点"},model:{value:e.pageForm.siteId,callback:function(t){e.$set(e.pageForm,"siteId",t)},expression:"pageForm.siteId"}},e._l(e.siteList,function(e){return a("el-option",{key:e.siteId,attrs:{label:e.siteName,value:e.siteId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"选择模版",prop:"templateId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pageForm.templateId,callback:function(t){e.$set(e.pageForm,"templateId",t)},expression:"pageForm.templateId"}},e._l(e.templateList,function(e){return a("el-option",{key:e.templateId,attrs:{label:e.templateName,value:e.templateId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"页面名称",prop:"pageName"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pageName,callback:function(t){e.$set(e.pageForm,"pageName",t)},expression:"pageForm.pageName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"别名",prop:"pageAliase"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pageAliase,callback:function(t){e.$set(e.pageForm,"pageAliase",t)},expression:"pageForm.pageAliase"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"访问路径",prop:"pageWebPath"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pageWebPath,callback:function(t){e.$set(e.pageForm,"pageWebPath",t)},expression:"pageForm.pageWebPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"物理路径",prop:"pagePhysicalPath"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.pagePhysicalPath,callback:function(t){e.$set(e.pageForm,"pagePhysicalPath",t)},expression:"pageForm.pagePhysicalPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数据Url",prop:"dataUrl"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.pageForm.dataUrl,callback:function(t){e.$set(e.pageForm,"dataUrl",t)},expression:"pageForm.dataUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{model:{value:e.pageForm.pageType,callback:function(t){e.$set(e.pageForm,"pageType",t)},expression:"pageForm.pageType"}},[a("el-radio",{staticClass:"radio",attrs:{label:"0"}},[e._v("静态")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:"1"}},[e._v("动态")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"创建时间"},model:{value:e.pageForm.pageCreateTime,callback:function(t){e.$set(e.pageForm,"pageCreateTime",t)},expression:"pageForm.pageCreateTime"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.go_back}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v("提交")])],1)],1)},Me=[],Ee={render:Ae,staticRenderFns:Me},Re=Ee,De=a("VU/8"),ze=c,He=De(Te,Re,!1,ze,null,null),Ve=He.exports,We={data:function(){return{addLoading:!1,templateForm:{templateValue:""},pageForm:{siteId:"",pageId:"",pageName:"",templateId:"",pageParams:[],htmlValue:""}}},methods:{go_back:function(){this.$router.push({path:"/cms/page/list",query:{page:this.$route.query.page,siteId:this.$route.query.siteId}})},generateHtml:function(){var e=this;de(this.pageForm.pageId).then(function(t){console.log(t),t.success?(e.addLoading=!1,e.$message.success("生成静态化页面成功！"),e.pageForm.htmlValue=t.html):t.message?(e.addLoading=!1,e.$message.error(t.message)):(e.addLoading=!1,e.$message.error("生成静态化页面失败！"))})}},created:function(){var e=this;this.pageId=this.$route.params.pageId,pe(this.pageId).then(function(t){console.log(t),t.success&&(e.pageForm.pageName=t.cmsPage.pageName)})},mounted:function(){var e=this;this.pageForm.pageId=this.$route.params.pageId,ge(this.pageForm.pageId).then(function(t){console.log(t),t.success&&(e.pageForm.htmlValue=t.html)})}},je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-form",{ref:"pageForm",attrs:{model:e.pageForm,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"页面名称"}},[e._v("\n        "+e._s(e.pageForm.pageName)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"静态化",prop:"htmlValue"}},[a("el-input",{attrs:{type:"textarea",rows:20,placeholder:"点击 静态化 将根据模版生成静态化页面"},model:{value:e.pageForm.htmlValue,callback:function(t){e.$set(e.pageForm,"htmlValue",t)},expression:"pageForm.htmlValue"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.go_back}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.generateHtml(t)}}},[e._v("静态化，并保存")])],1)],1)},Qe=[],Be={render:je,staticRenderFns:Qe},Ge=Be,Oe=a("VU/8"),Je=u,Ye=Oe(We,Ge,!1,Je,"data-v-1157b697",null),Ze=Ye.exports,Ke=[{path:"/cms",component:ae,name:"CMS",hidden:!1,children:[{path:"/cms/page/list",name:"页面列表",component:ke,hidden:!1},{path:"/cms/page/add",name:"添加页面",component:Se,hidden:!0},{path:"/cms/page/edit/:pageId",name:"修改页面",component:Ve,hidden:!0},{path:"/cms/page/html/:pageId",name:"生成html",component:Ze,hidden:!0}]}];v.default.use(q.a);var Xe=[],et=function(e){Xe=Xe.concat(e)};et(se),et(Ke);var tt=Xe,at=a("NYxO"),st=function(e){(0,e.commit)("INCREMENT")},nt=function(e){(0,e.commit)("DECREMENT")},rt=function(e){return e.count};v.default.use(at.a);var ot={count:10},it={INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}},lt=new at.a.Store({actions:p,getters:m,state:ot,mutations:it}),ct=a("ORbq");v.default.config.productionTip=!1,v.default.use(P.a),v.default.use(at.a),v.default.use(q.a);var ut=a("xrTZ").Base64,pt=a("kspH"),mt=pt.openAuthenticate;pt.openAuthorize;v.default.use(ct.a);var dt=new q.a({routes:tt});dt.beforeEach(function(e,t,a){if(mt){var s=void 0,n=void 0;try{s=S.getActiveUser(),n=S.getCookie("uid")}catch(e){}s&&n&&n==s.uid?a():"/login"==e.path||"/logout"==e.path?a():n?systemApi.getjwt().then(function(e){if(e.success){var t=e.jwt,s=S.getUserInfoFromJwt(t);s&&S.setUserSession("activeUser",f()(s)),a()}else window.location="http://ucenter.xuecheng.com/#/login?returnUrl="+ut.encode(window.location)}):window.location="http://ucenter.xuecheng.com/#/login?returnUrl="+ut.encode(window.location)}else a()}),A.a.interceptors.request.use(function(e){var t=S.getJwt();return t&&(e.headers.Authorization="Bearer "+t),e},function(e){return g.a.reject(e)}),A.a.interceptors.response.use(function(e){return console.log("data="),console.log(e),e&&e.data&&(e.data.code&&"10001"==e.data.code?window.location="http://ucenter.xuecheng.com/#/login?returnUrl="+ut.encode(window.location):e.data.code&&"10002"==e.data.code?C.Message.error("您没有此操作的权限，请与客服联系！"):e.data.code&&"10003"==e.data.code&&C.Message.error("认证被拒绝，请重新登录重试！")),e}),new v.default({el:"#app",router:dt,store:lt,render:function(e){return e(x)}})},djTQ:function(e,t){},gZzQ:function(e,t){},kspH:function(e,t){var a={xcApiUrlPre:"/api",xcApiUrl:"http://api.xuecheng.com/",imgUrl:"http://img.xuecheng.com/",videoUrl:"http://video.xuecheng.com/",openAuthenticate:!0,openAuthorize:!0};e.exports=a},male:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.99f4784e5b1abf788bb6.js.map
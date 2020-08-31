var {addition} = require('./model01')
var Vue = require('./vue.min');
var VM = new Vue({
    el:"#app", // 表示当前vue对象接管app的div区域
    data:{
        name:"学成在线", // 表示当前vue对象接管app的div区域
        num1: 0,
        num2: 0,
        result: 0,
        url: 'www.google.com'
    },
    methods:{
        change:function () {
            //这里使用了导入的model01.js文件中的add方法
            this.result = Number.parseInt(this.num1) + Number.parseInt(this.num2)
        }
    }
});
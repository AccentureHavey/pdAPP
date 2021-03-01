///工具类

var QQMapWX = require("../../qqmap-wx-jssdk.js");//引入核心sdk文件
var demo = new QQMapWX({
    key:'你申请的key'
})


// demo.calculateDistance({
//     //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
//     //from参数不填默认当前地址
//     //获取表单提交的经纬度并设置from和to参数（示例为string格式）
//     //若起点有数据则采用起点坐标，若为空默认当前地址
//     to:this.longitude1 + "," + this.latitude1,
//     success: res => {
//         console.log(res);
//         var res = res.result;
//         var dis = [];
//         for (var i = 0; i < res.elements.length; i++) {
//             dis.push(res.elements[i].distance); //将返回数据存入dis数组，
//         }
//         //获得的结果是一个数组，先转为字符串在转为数组
//         this.disKM = Number(dis.toString())
//         console.log(this.disKM);
//         // return false
        
//     fail: function(res) {
//         console.log('失败');
//     }
// });

// 计算距离
const calculateDistinck = (point1,point2) => {



}




module.exports = {
}

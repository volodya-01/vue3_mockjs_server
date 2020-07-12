# vue3_mockserve

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

 vue中使用mockjs服务器测试项目

1、在vue项目中安装依赖

  npm  install  mockjs --save-dev

安装成功后package.json文件会有下图红色框内信息

2、建立项目文件结构

   根目录下建立mockServe文件夹，然后分别构建util.js 、index.js 、json文件（以index.json为例）

 

 

 3、util.js文件，主要是用来进行json数据读取方法的封装。内容如下
复制代码

 1 const fs = require('fs')
 2 
 3 const path = require('path')
 4 
 5 module.exports = {
 6 
 7     // 用于被index.js进行调用
 8 
 9     getJsonFile(filePath) {
10 
11         // 读取指定的json文件
12 
13         const json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
14 
15         // 解析并返回
16 
17       //  console.log(json)
18 
19         return JSON.parse(json)
20 
21     }
22 
23 }

复制代码

 

 

 4、index.js文件，主要是用来定义各个接口方法。内容如下
复制代码

  1 const Mock = require('mockjs')
  2 
  3 const util = require('./util')
  4 
  5 module.exports = function (app) {
  6 
  7     // 监听请求
  8 
  9     app.post('/Mock/index', (rep, res) => {
 10 
 11         // 响应时，返回 mock data的json数据
 12 
 13         const articleList = util.getJsonFile('./data/index.json')
 14 
 15         // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 16 
 17         res.json(Mock.mock(articleList))
 18 
 19     })
 20     app.post('/Mock/GetMonthReportingState', (rep, res) => {
 21 
 22         // 响应时，返回 mock data的json数据
 23 
 24         const articleList = util.getJsonFile('./data/GetMonthReportingState.json')
 25 
 26         // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 27 
 28         res.json(Mock.mock(articleList))
 29 
 30     })
 31     app.post('/Mock/GetYearReportingState', (rep, res) => {
 32 
 33         // 响应时，返回 mock data的json数据
 34 
 35         const articleList = util.getJsonFile('./data/GetYearReportingState.json')
 36 
 37         // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 38 
 39         res.json(Mock.mock(articleList))
 40 
 41     })
 42      app.post('/Mock/GetReportingData', (rep, res) => {
 43 
 44          // 响应时，返回 mock data的json数据
 45 
 46          const articleList = util.getJsonFile('./data/GetReportingData.json')
 47 
 48          // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 49 
 50          res.json(Mock.mock(articleList))
 51 
 52      })
 53       app.post('/Mock/UpdateEditTime', (rep, res) => {
 54 
 55           // 响应时，返回 mock data的json数据
 56 
 57           const articleList = util.getJsonFile('./data/UpdateEditTime.json')
 58 
 59           // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 60 
 61           res.json(Mock.mock(articleList))
 62 
 63       })
 64         app.post('/Mock/GetReportingLockState', (rep, res) => {
 65 
 66             // 响应时，返回 mock data的json数据
 67 
 68             const articleList = util.getJsonFile('./data/GetReportingLockState.json')
 69 
 70             // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 71 
 72             res.json(Mock.mock(articleList))
 73 
 74         })
 75          app.post('/Mock/SaveReportingData', (rep, res) => {
 76 
 77              // 响应时，返回 mock data的json数据
 78 
 79              const articleList = util.getJsonFile('./data/SaveReportingData.json')
 80 
 81              // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 82 
 83              res.json(Mock.mock(articleList))
 84 
 85          })
 86           app.post('/Mock/UnLockReporting', (rep, res) => {
 87 
 88               // 响应时，返回 mock data的json数据
 89 
 90               const articleList = util.getJsonFile('./data/UnLockReporting.json')
 91 
 92               // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
 93 
 94               res.json(Mock.mock(articleList))
 95 
 96           })
 97             app.post('/Mock/GetEditItemTip', (rep, res) => {
 98 
 99                 // 响应时，返回 mock data的json数据
100 
101                 const articleList = util.getJsonFile('./data/GetEditItemTip.json')
102 
103                 // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
104 
105                 res.json(Mock.mock(articleList))
106 
107             })
108             app.post('/Mock/GetLeakageKeyChangingTrendData', (rep, res) => {
109 
110                 // 响应时，返回 mock data的json数据
111 
112                 const articleList = util.getJsonFile('./data/GetLeakageKeyChangingTrendData.json')
113 
114                 // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
115 
116                 res.json(Mock.mock(articleList))
117 
118             })
119 
120 }

复制代码

5、index.json文件，主要是用来构建自己的模拟数据。如：
复制代码

  1 {
  2     "Ok": true,
  3     "Message": null,
  4     "Result": {
  5         "VolumeFromOwnSource": 0,
  6         "VolumeFromOwnSourceGrading": 0,
  7         "MasterMeterErrorAdjustment": 0,
  8         "IsIncreaseOrDecrease": "偏多",
  9         "MasterMeterErrorAdjustmentGrading": 0,
 10         "WaterImported": 0,
 11         "WaterImportedGrading": 0,
 12         "WaterExported": 0,
 13         "WaterExportedGrading": 0,
 14         "WaterSupplied": 0,
 15         "BilledMetered": 0,
 16         "BilledMeteredGrading": 0,
 17         "BilledUnmetered": {
 18             "Value": 0,
 19             "SubItems": [{
 20                     "Label": "环卫用水",
 21                     "Value": 0
 22                 },
 23                 {
 24                     "Label": "绿化用水",
 25                     "Value": 0
 26                 },
 27                 {
 28                     "Label": "新建管道冲洗",
 29                     "Value": 0
 30                 },
 31                 {
 32                     "Label": "定量用户用水",
 33                     "Value": 0
 34                 }
 35             ]
 36         },
 37         "BilledUnmeteredGrading": 0,
 38         "UnbilledMetered": {
 39             "Value": 0,
 40             "SubItems": [{
 41                     "Label": "自来水企业生产/办公用水",
 42                     "Value": 0
 43                 },
 44                 {
 45                     "Label": "消防用水",
 46                     "Value": 0
 47                 },
 48                 {
 49                     "Label": "政策性减免",
 50                     "Value": 0
 51                 }
 52             ]
 53         },
 54         "UnbilledMeteredGrading": 0,
 55         "UnbilledUnmetered": {
 56             "Value": 0,
 57             "SubItems": [{
 58                     "Label": "消防用水量",
 59                     "Value": 0
 60                 },
 61                 {
 62                     "Label": "管网维护和冲洗用水",
 63                     "Value": 0
 64                 },
 65                 {
 66                     "Label": "自来水企业生活/办公用水",
 67                     "Value": 0
 68                 },
 69                 {
 70                     "Label": "二次供水泵房冲洗",
 71                     "Value": 0
 72                 }
 73             ]
 74         },
 75         "UnbilledUnmeteredGrading": 0,
 76         "UnbilledUnmeteredMode": 0,
 77         "UnbilledUnmeteredPercent": 0,
 78         "UnbilledUnmeteredEstimated": 0,
 79         "AuthorizedConsumption": 0,
 80         "WaterLossed": 0,
 81         "ReportedLeakage": {
 82             "Value": 0,
 83             "SubItems": [{
 84                     "Label": "明漏点漏失水量",
 85                     "Value": 0
 86                 },
 87                 {
 88                     "Label": "爆管漏失水量",
 89                     "Value": 0
 90                 },
 91                 {
 92                     "Label": "明漏点漏失水量",
 93                     "Value": 0
 94                 },
 95                 {
 96                     "Label": "爆管漏失水量",
 97                     "Value": 0
 98                 },{
 99                     "Label": "明漏点漏失水量",
100                     "Value": 0
101                 },
102                 {
103                     "Label": "爆管漏失水量",
104                     "Value": 0
105                 }
106             ]
107         },
108         "ReportedLeakageGrading": 0,
109         "UnreportedLeakage": {
110             "Value": 0,
111             "SubItems": [{
112                     "Label": "已检出明漏点水量",
113                     "Value": 0
114                 },
115                 {
116                     "Label": "未检出暗漏点水量",
117                     "Value": 0
118                 },
119                 {
120                     "Label": "已检出明漏点水量",
121                     "Value": 0
122                 },
123                 {
124                     "Label": "未检出暗漏点水量",
125                     "Value": 0
126                 },{
127                     "Label": "已检出明漏点水量",
128                     "Value": 0
129                 },
130                 {
131                     "Label": "未检出暗漏点水量",
132                     "Value": 0
133                 },{
134                     "Label": "已检出明漏点水量",
135                     "Value": 0
136                 },
137                 {
138                     "Label": "未检出暗漏点水量",
139                     "Value": 0
140                 }
141             ]
142         },
143         "UnreportedLeakageGrading": 0,
144         "UnreportedLeakageMode": 0,
145         "UnreportedLeakagePercent": 0,
146         "UnreportedLeakageEstimated": 0,
147         "BackgroundLeakage": 0,
148         "BackgroundLeakageGrading": 0,
149         "BackgroundLeakageMode": 0,
150         "BackgroundLeakagePercent": 0,
151         "BackgroundLeakageEstimated": 0,
152         "TankLeakageAndOverflow": 0,
153         "TankLeakageAndOverflowGrading": 0,
154         "TankLeakageAndOverflowMode": 0,
155         "TankLeakageAndOverflowPercent": 0,
156         "TankLeakageAndOverflowEstimated": 0,
157         "UnauthorizedConsumption": {
158             "Value": 0,
159             "SubItems": [{
160                     "Label": "明漏点漏失水量",
161                     "Value": 0
162                 },
163                 {
164                     "Label": "爆管漏失水量",
165                     "Value": 0
166                 }
167             ]
168         },
169         "NonResidentMeteringInaccuracies": 0,
170         "NonResidentMeteringInaccuraciesGrading": 0,
171         "WaterLossBetweenMainSubMeters": 0,
172         "WaterLossBetweenMainSubMetersGrading": 0,
173         "UnauthorizedConsumptionGrading":0,
174         "UnauthorizedConsumptionMode": 0,
175         "UnauthorizedConsumptionPercent": 0,
176         "UnauthorizedConsumptionEstimated": 0,
177         "RevenueWater": 0,
178         "NonRevenueWater": 0,
179         "TotalPipeLength": 0,
180         "TotalPipeLengthGrading": 0,
181         "AveragePressure": 0,
182         "AveragePressureGrading": 0,
183         "ReadingMeterInHouseConsumption": 0,
184         "ReadingMeterInHouseConsumptionGrading": 0,
185         "MaximumFrozenSoilDepth": 0,
186         "MaximumFrozenSoilDepthGrading": 0,
187         "NonRevenueWaterRatio": 0,
188         "ProduceSaleDifferentia": 0,
189         "ProduceSaleDifferentiaRate": 0,
190         "WaterLossRate": 0,
191         "CorrectedReadingMeterInHouseConsumption": 0,
192         "CorrectedPipeLengthPerUnitWaterSupply": 0,
193         "CorrectedAveragePressure": 0,
194         "CorrectedMaximumFrozenSoilDepth": 0,
195         "CorrectedWaterLossRate": 0,
196         "DataQualityScore": 0,
197         "AreasForAttention1": 0,
198         "AreasForAttention2": 0,
199         "AreasForAttention3": 0,
200         "Year": 0,
201         "Month": 0,
202         "StartDate": "2020-03-30 19:37:51",
203         "StopDate": "2020-03-30 19:37:51",
204         "LastModificationDate": "2020-03-30 19:37:51",
205         "CompanyID": "",
206         "DataTableID": ""
207     }
208 }

复制代码

6、 修改 webpack 配置。

在vue.config.js文件中或者路径build/webpack.dev.conf.js文件中的devServer属性中新添加一个before钩子函数,用来监听来自web的http请求。

vue.config.js文件：
复制代码

 1 const path = require("path");
 2 const resolve = function (dir) {
 3   return path.join(__dirname, dir);
 4 };
 5 const IP = require("ip").address();
 6 module.exports = {
 7   publicPath: "/", //process.env.NODE_ENV === "production" ? "./" : "./",
 8   outputDir: "dist",
 9   assetsDir: "static/WhaleReport",
10   //assetsDir: "static",
11   lintOnSave: true, // 是否开启eslint保存检测
12   productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
13   chainWebpack: (config) => {
14     config.resolve.alias
15       .set("@", resolve("src"))
16       .set("@v", resolve("src/views"))
17       .set("@c", resolve("src/components"))
18       .set("@u", resolve("src/utils"))
19       .set("@s", resolve("src/service")); /* 别名配置 */
20     config.optimization.runtimeChunk("single");
21   },
22   configureWebpack: (config) => {
23     if (process.env.NODE_ENV === "production") {
24       config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
25     }
26   },
27   devServer: {
28     // host: "localhost",
29     host: IP,
30     /* 本地ip地址 */
31     // host: "192.168.1.107",
32     port: "8080",
33     hot: true,
34     /* 自动打开浏览器 */
35     open: false,
36     overlay: {
37       warning: false,
38       error: true,
39     },
40     before: require("./mockServe"),
41     /* 跨域代理 */
42     //proxyTable:{
43     // proxy: {
44     //   "/api": {
45     //     target: 'http://121.40.242.176:9527/api/ReportingTool/',//"http://waterrtmstest.dlmeasure.com:1800/api/ReportingTool/",  //API服务器的地址
46     //     ws: true, //代理websockets
47     //     changeOrigin: true, // 虚拟的站点需要更管origin
48     //     pathRewrite: {
49     //       //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
50     //       "^/api": "",
51     //     },
52     //   },
53     // },
54   },
55 };

复制代码

 

 

7、完成以上步骤以后，启动应用npm run serve，在vue项目中使用即可。
复制代码

 1 <template>
 2   <div class="hello">
 3     <h1>{{ msg }}</h1>
 4 
 5   </div>
 6 </template>
 7 
 8 <script>
 9 import UrlClass from "../http/Urlclass"
10 export default {
11   name: 'HelloWorld',
12   props: {
13     msg: String
14   },
15   mounted(){
16     this.GetMonthReportingState()
17   },
18   methods:{
19     GetMonthReportingState(){
20       this.$axios.post(UrlClass.axiosUrlRC+"GetMonthReportingState")
21       .then(res=>{
22         console.log("GetMonthReportingState----res",res)
23       })
24       .catch(erroe=>{
25         console.log('error', error)
26       })
27     }
28   }
29 }
30 </script>
31 
32 <!-- Add "scoped" attribute to limit CSS to this component only -->
33 <style scoped lang="scss">
34 h3 {
35   margin: 40px 0 0;
36 }
37 ul {
38   list-style-type: none;
39   padding: 0;
40 }
41 li {
42   display: inline-block;
43   margin: 0 10px;
44 }
45 a {
46   color: #42b983;
47 }
48 </style>

复制代码

 

 

 8.请求完成后的数据为：

 

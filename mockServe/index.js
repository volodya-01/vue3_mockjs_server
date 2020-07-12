const Mock = require('mockjs')

const util = require('./util')

module.exports = function (app) {

    // 监听请求

    app.post('/Mock/index', (rep, res) => {

        // 响应时，返回 mock data的json数据

        const articleList = util.getJsonFile('./data/index.json')

        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

        res.json(Mock.mock(articleList))

    })
    app.post('/Mock/GetMonthReportingState', (rep, res) => {

        // 响应时，返回 mock data的json数据

        const articleList = util.getJsonFile('./data/GetMonthReportingState.json')

        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

        res.json(Mock.mock(articleList))

    })
    app.post('/Mock/GetYearReportingState', (rep, res) => {

        // 响应时，返回 mock data的json数据

        const articleList = util.getJsonFile('./data/GetYearReportingState.json')

        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

        res.json(Mock.mock(articleList))

    })
     app.post('/Mock/GetReportingData', (rep, res) => {

         // 响应时，返回 mock data的json数据

         const articleList = util.getJsonFile('./data/GetReportingData.json')

         // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

         res.json(Mock.mock(articleList))

     })
      app.post('/Mock/UpdateEditTime', (rep, res) => {

          // 响应时，返回 mock data的json数据

          const articleList = util.getJsonFile('./data/UpdateEditTime.json')

          // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

          res.json(Mock.mock(articleList))

      })
        app.post('/Mock/GetReportingLockState', (rep, res) => {

            // 响应时，返回 mock data的json数据

            const articleList = util.getJsonFile('./data/GetReportingLockState.json')

            // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

            res.json(Mock.mock(articleList))

        })
         app.post('/Mock/SaveReportingData', (rep, res) => {

             // 响应时，返回 mock data的json数据

             const articleList = util.getJsonFile('./data/SaveReportingData.json')

             // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

             res.json(Mock.mock(articleList))

         })
          app.post('/Mock/UnLockReporting', (rep, res) => {

              // 响应时，返回 mock data的json数据

              const articleList = util.getJsonFile('./data/UnLockReporting.json')

              // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

              res.json(Mock.mock(articleList))

          })
            app.post('/Mock/GetEditItemTip', (rep, res) => {

                // 响应时，返回 mock data的json数据

                const articleList = util.getJsonFile('./data/GetEditItemTip.json')

                // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

                res.json(Mock.mock(articleList))

            })
            app.post('/Mock/GetLeakageKeyChangingTrendData', (rep, res) => {

                // 响应时，返回 mock data的json数据

                const articleList = util.getJsonFile('./data/GetLeakageKeyChangingTrendData.json')

                // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器

                res.json(Mock.mock(articleList))

            })

}
const path = require('path');
const glob = require('glob');

const proxy = {
  // _proxy: {
  //   proxy: {
  //     '/repos/(.*)': 'http://49.234.33.30:3000/',
  //     '/:owner/:repo/raw/:ref/(.*)': 'http://127.0.0.1:2018',
  //   },
  //   changeHost: true,
  //   // modify the http-proxy options
  //   httpProxy: {
  //     options: {
  //       ignorePath: true,
  //     },
  //     listeners: {
  //       proxyReq(proxyReq, req, res, options) {
  //         console.log('proxyReq');
  //       },
  //     },
  //   },
  // },
  // =====================
  // 'GET /mock/user': {
  //   id: 1,
  //   username: 'kenny1',
  //   sex: 6,
  // },
  // 'GET /api/user/list': [{
  //   id: 1,
  //   username: 'kenny',
  //   sex: 6,
  // }, {
  //   id: 2,
  //   username: 'kenny',
  //   sex: 6,
  // }],
  // 'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
  //   const {
  //     owner,
  //     repo,
  //     ref,
  //   } = req.params;
  //   // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
  //   // owner => admin
  //   // repo => webpack-mock-api
  //   // ref => master
  //   // req.params[0] => add/ddd.md
  //   return res.json({
  //     id: 1,
  //     owner,
  //     repo,
  //     ref,
  //     path: req.params[0],
  //   });
  // },
  // 'POST /api/login/account': (req, res) => {
  //   const {
  //     password,
  //     username,
  //   } = req.body;
  //   if (password === '888888' && username === 'admin') {
  //     return res.json({
  //       status: 'ok',
  //       code: 0,
  //       token: 'sdfsdfsdfdsf',
  //       data: {
  //         id: 1,
  //         username: 'kenny',
  //         sex: 6,
  //       },
  //     });
  //   }
  //   return res.status(403).json({
  //     status: 'error',
  //     code: 403,
  //   });
  // },
  // 'DELETE /api/user/:id': (req, res) => {
  //   console.log('---->', req.body);
  //   console.log('---->', req.params.id);
  //   res.send({
  //     status: 'ok',
  //     message: '删除成功！',
  //   });
  // },
};
// 动态引入module文件夹中的模块
glob.sync(path.resolve(__dirname, './module', '*.js')).forEach((item) => {
  const childPath = item && item.split('/mock/module')[1];
  const child = require(path.resolve(__dirname, './module' + childPath));
  console.log(path.resolve(__dirname, './module' + childPath));

  Object.assign(proxy, child);
});
module.exports = proxy;

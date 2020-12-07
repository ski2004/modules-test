# js-components

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### package.json
"name": "js-f2e",// name = loggin account
"version": "2.0.2",//版本號
"main": "dist/vue-F2E.common.js", //npm install 引入後位置 等同 --name vue-F2E 


### 指令
npm adduser // 新增使用者
npm run build // 重新打包專案
npm publish //發佈到npm上

### main.js 全域引入
import jsf2e from 'js-f2e'
import 'js-f2e/dist/vue-F2E.css'
Vue.use(jsf2e)

import jsf2e from 'js-f2e'
### 引入某個頁面
components:{
	"f2e-commonMask":jsf2e.commonMask
},
### 引入某個頁面 全部引入
components:jsf2e

### 引入某個頁面 查看有哪些元件
import jsf2e from 'js-f2e'
jsf2e.getName()

### xxx.vue  
有用到bootstrap 需自行引入 
請勿使用@assets方式

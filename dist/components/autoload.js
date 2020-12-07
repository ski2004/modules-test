import Vue from 'vue'
import toLower from 'lodash/toLower'
import camelCase from 'lodash/camelCase'

var JsF2e = {};


// 全部元件
const requireComponent = require.context(
    '@/components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    let componentName = camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    JsF2e[componentName] = componentConfig.default
    componentName = `f2e-${componentName}`
})

/**
 * 查看元件名稱
 */
JsF2e.getName = function () {
    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName)
        let componentName = camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
        console.log(`元件名稱:f2e-${componentName} , 局部引入物件名稱:${componentName}`)
    })
}

/**
 * 自動全域引入
 * 指引入 common
 */
const requireComponent_common = require.context(
    '@/components', true, /\.vue$/
)

JsF2e.install = function (Vue, opts = {}) {
    requireComponent_common.keys().forEach(fileName => {
        const componentConfig = requireComponent_common(fileName)
        let componentName = camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
        componentName = `f2e-${componentName}`
        Vue.component(componentName, componentConfig.default || componentConfig)
        // console.log(`元件名稱:${componentName} , 局部引入物件名稱:${componentName}`)
    })
}

export default JsF2e

/* console.log(module)
Module {
    id: '.', //模块id
    exports: {},//导出对象
    parent: null,//父模块,此模块是由哪个模块加载的
    filename: '/Users/zhangwen/Sites/front-end/node/node-learn/nodeCore/module/useschool.js', //绝对路径
    loaded: false, //是否加载完成
    children: [],//加载了哪些模块
    paths: //第三方模块加载路径
     [ '/Users/zhangwen/Sites/front-end/node/node-learn/nodeCore/module/node_modules',
       '/Users/zhangwen/Sites/front-end/node/node-learn/nodeCore/node_modules',
       '/Users/zhangwen/Sites/front-end/node/node-learn/node_modules',
       '/Users/zhangwen/Sites/front-end/node/node_modules',
       '/Users/zhangwen/Sites/front-end/node_modules',
       '/Users/zhangwen/Sites/node_modules',
       '/Users/zhangwen/node_modules',
       '/Users/node_modules',
       '/node_modules' ] } */
/**
 * require 这个过程是同步的,模块实现缓存,当第一次记载后,会缓存这个模块的exports对象
 * 1.找到这个文件
 * 2.读取此文件内容
 * 3.把它封装再一个函数立刻执行
 */
let school = require('./school');
debugger
console.log(school,module.paths);
// { name: 'zfs', age: 9 }
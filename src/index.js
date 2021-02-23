import x from './x.js'
import './style.scss'
import './yyy.less'
import './zzz.styl'
import png from './assets/1.jpg'

const div = document.getElementById('app1')
div.innerHTML=`
  <img src="${png}">
`;
const buttom = document.createElement('button')
buttom.innerText='懒加载'
div.append(buttom)
buttom.onclick=()=>{
    const promise = import('./2.js')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('访问失败')
    })
}
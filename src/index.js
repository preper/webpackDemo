import _ from 'lodash'
import printMe from './print.js'
import './style.css'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!')
    // printMe()
    // 启用模块热替换后，修改printMe函数
    // 这里的printMe()会变成修改后的函数
    // 但btn绑定的onclick事件并没有改变
    // 所以需要重新绑定点击事件
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}

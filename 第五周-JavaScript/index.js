// alert('我了个去~')
// var a = prompt('请输入第一个数字');
// var b = prompt('请输入第二个数字')
// alert(Number(a) + Number(b));
// var a = b = c = 12;
// console.log(a, b, c)

// var year = Number(prompt('请输入年份'));
// // 能被4整除,但不能被100整除
// // 能被100整除,且能被400整除
// console.log((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0))
// var num = Number(prompt('请输入一个三位数字'))
// if (!isNaN(num) && num >= 100 && num <= 999) {
//     let f = Math.floor(num / 100)
//     let s = Math.floor((num % 100) / 10)
//     let t = num % 10
//     console.log(f, s, t)
//     let sum = Math.pow(f, 3) + Math.pow(s, 3) + Math.pow(t, 3)
//     if (sum == num) {
//         alert(num + '是水仙花数')
//     } else {
//         alert('不是')
//     }
// } else {
//     alert('三位的数字啊兄弟')
// }

// 莱布尼茨级数估算圆周率
var num = parseInt(prompt('请输入整数数字'))
let sum = 1
let single = 1
if (!isNaN(num)) {
    for ( let i = 1; i < num ; i++) {
        // 单个数是累乘
        // 所有数是累加
        single *= (i / (2 * i + 1))
        sum += single
    }
    let w = sum * 2
    alert( w )
} else {
    alert('请输入整数数字')
}
// 查找所有的水仙花数
for (let i = 100; i < 999 ; i++) {
    let b = Math.floor(i / 100)
    let s = Math.floor((i % 100 ) / 10)
    let g = i % 10
    if (Math.pow(b, 3) + Math.pow(s, 3) + Math.pow(g, 3) == i ) {
        console.log(i)  // 153 370 371 407
    }
}
// 1~100 寻找所有的质数,只能被1和本身整除的数字
outer: for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue outer;
        }
    }
    console.log(i)
}
// 鸡兔同笼, 头35 脚94
// 鸡头数
for (let i = 0; i < 35; i++) {
    for (let j = 0; j < 35; j++) {
        if (i * 2 + j * 4 == 94 && i + j == 35) {
            console.log(i, j) // 23 12
        }
    }
}
for (let i = 0; i < 35; i++) {
    let j = 35 - i;
    if (i * 2 + j * 4 == 94) {
        console.log(i, j) // 23 12
    }
}
// 冒泡排序
let array = [9, 4, 10, 3, 5, 7, 2, 1, 8]
let newArray = []
for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length -1; j >= i; j--) {
        if (array[j-1] > array[j]) {
            let a = array[j-1]
            array[j-1] = array[j]
            array[j] = a
        }
    }
    console.log(array)
}
console.log(array)
// 寻找喇叭花数 三位数,每位的数字自己的阶乘之和相加=自身
// 函数-累乘器
function lc (n) {
    let result = 1
    for (let i = 1; i <= Number(n); i++) {
        result *= i
    }
    return result
}
function labahua (num) {
    num = num.toString()
    let g = lc(Number(num.charAt(0)))
    let s = lc(Number(num.charAt(1)))
    let b = lc(Number(num.charAt(2)))
    if (g + s + b == Number(num)) {
        return num + '是喇叭花数'
    }
    return num + '不是'
}
console.log(labahua(567))
function lbh () {
    let n = null;
    for (let i = 100; i < 999; i++) {
        n = i + ''
        // console.log(n, typeof n)
        const g = lc(n.charAt(0))
        const s = lc(n.charAt(1))
        const b = lc(n.charAt(2))
        // console.log(g, s, b)
        if (g + s + b == Number(n)) {
            console.log(n + '是喇叭花数')
        }
    }
}
lbh()
// 递归-斐波那契数列 后一项是前两项的和
function feibo (n) {
    if (n==0 || n==1) { return 1}
    return feibo(n-1) + feibo(n-2)
}
for (let i = 0; i < 10; i++) {
    console.log(feibo(i))
}
function * feibo2 (x= 1, y = 1) {
    let z
    while (1) {
        yield x
        z = y
        y = x + y
        x = z
    }
}
let feiboNum = feibo2()
for (let i = 0; i < 10; i++) {
    console.log(feiboNum.next().value)
}
// 深克隆 - 递归思想
let arr = [3, 5, 8, 2, [6, 7, 9, [66, 77, 88]]]
function deepClone (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(deepClone(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}
let newArr = deepClone(arr)
arr[4].push(55)
console.log(newArr, newArr == arr)

// 闭包 记忆性
function checkTemp (standard) {
    function check (tw) {
        if (tw >= standard) {
            console.log("体温偏高")
        } else {
            console.log("体温正常")
        }
    }
    return check;
}
// A小区以37.1为标准
var tw = checkTemp(37.1)
tw(38);
tw(37)
// B小区以38为标准
var tw2 = checkTemp(38)
tw2(38);
tw2(37)
// 闭包 模拟私有变量
function moni () {
    var a = 0
    return {
        getA () {
            return a
        }
    }
}
var obj = moni()
console.log(obj.getA())

// 节点关系
var boxs = document.getElementsByClassName('box')[0];
var para = document.getElementById('para');
console.log(boxs.childNodes)
console.log(boxs.children)
console.log(boxs.firstChild)
console.log(boxs.firstElementChild)
// 兼容模式下获取节点
// 获取所有的子元素节点
function getChildren (node) {
    var children = []
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType == 1) {
            children.push(node.childNodes[i])
        }
    }
    return children
}
console.log(getChildren(boxs))
// 获取前一个元素兄弟节点
function getPreviousElementSibling (node) {
    let n = node
    while (n.previousSibling != null) {
        if (n.previousSibling.nodeType == 1) {
            return n.previousSibling
        }
        n = n.previousSibling
    }
    return null
}
console.log(getPreviousElementSibling(para))
// 获取后一个元素兄弟节点
function getNextElementSibling (node) {
    let n = node
    while (n.nextSibling != null) {
        if (n.nextSibling.nodeType == 1) {
            return n.nextSibling
        }
        n = n.nextSibling
    }
    return null
}
console.log(getNextElementSibling(para))
// 获取所有的兄弟节点
function getAllSiblings (node) {
    let s = []
    let p = node
    while (getPreviousElementSibling(p) != null) {
        s.unshift(getPreviousElementSibling(p))
        p = getPreviousElementSibling(p)
    }
    let n = node
    while (getNextElementSibling(n) != null) {
        s.push(getNextElementSibling(n))
        n = getNextElementSibling(n)
    }
    return s
}
console.log(getAllSiblings(para))
// 创建一个20行12列的表格
var tb = document.getElementsByClassName('table')[0]
let table = document.createElement('table')
for (let i = 0; i < 20; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < 12; j++) {
        let td = document.createElement('td')
        td.innerText = (i+1) + '行' + (j+1) + '列'
        td.style.border = '1px solid red'
        tr.appendChild(td)
    }
    tr.style.border = '1px solid red'
    table.appendChild(tr)
}
table.style.border = '1px solid red'
table.style = 'border-collapse: collapse;' // 合并边框
tb.appendChild(table)
// 制作九九乘法表
var chengFa = document.getElementsByClassName('chengFa')[0]
let biao = document.createElement('table')
for (let i = 1; i < 10; i++) {
    let tr = document.createElement('tr')
    for (let j = 1; j <= i; j++) {
        let td = document.createElement('td')
        td.innerText = j + 'x' + i + '=' + i*j
        tr.appendChild(td)
    }
    biao.appendChild(tr)
}
chengFa.appendChild(biao)
// 事件监听 按方向键使盒子移动
var yd = document.getElementById('yd')
let t = 200
let l = 200
document.onkeydown = function (e) {
    let keyCode = e.keyCode
    // if (keyCode == 40) {
    //     t += 50
    // } else if (keyCode == 39 ) {
    //     l += 50
    // } else if (keyCode == 38 && t > 0 ) {
    //     t -= 50
    // } else if (keyCode == 37 && l > 0 ) {
    //     l -= 50
    // }
    switch (keyCode) {
        case 40:
            t += 50
            break
        case 39:
            l < 1310 ? l += 50 : l
            break
        case 38:
            t > 0 ? t -= 50 : t
            break
        case 37:
            l > 0 ? l -= 50 : l
            break
    }
    yd.style.top = t + 'px'
    yd.style.left = l + 'px'
}

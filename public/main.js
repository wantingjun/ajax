console.log('i am main')
getJS.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','/2.js')
    request.onload =() =>{
        console.log(request.response)
        // 创建标签
        const script = document.createElement('script')
        // 填写内容
        script.innerHTML = request.response
        // 插入body
        document.body.appendChild (script)

    }
    request.onerror = () =>{}
    request.send()

}

getCss.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/style.css')
    request.onload=()=>{
        console.log('success')
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror=()=>{
        console.log('fail')
    }
    request.send()
}

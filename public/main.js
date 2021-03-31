// const { getMaxListeners } = require("node:process")
let n =1;
console.log('i am main')
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get',`/page${n + 1}`)
    request.onreadystatechange=()=>{
        console.log(request.response)
        if(request.readyState ===4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item =>{
                const li = document.createElement("li");
                li.textContent =item.id
                liId.appendChild(li)

            })
           n =  n+1
        }
    }
    request.send()
}
getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/5.JSON')
    request.onreadystatechange=()=>{
        if(request.readyState === 4 && request.status ===200){
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            showname.innerHTML= object.name
        }
    }
    request.send()
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if( request.readyState ===4 && request.status===200){
            console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }

    }
    request.send()
}
getHTML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','/3.html')
    request.onload =() =>{
        console.log(request.response)
        // 创建标签
        const div = document.createElement('div')
        // 填写内容
        div.innerHTML = request.response
        // 插入body
        document.body.appendChild (div)

    }
    request.onerror = () =>{}
    request.send()

}
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
    // request.onload=()=>{
    //     console.log('success')
    //     const style = document.createElement('style')
    //     style.innerHTML = request.response
    //     document.head.appendChild(style)
    // }
    // request.onerror=()=>{
    //     console.log('fail')
    // }
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState === 4){ //无法判断是成功还是失败的下载完
            console.log('下载完成')
            if(request.status >=200 && request.status <= 300){ //成功的下载完成
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
            else{
                console.log('加载css失败')
            }
        }
    }
    request.send()
}

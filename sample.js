// const btn=document.getElementById('change')
// const Tag=document.getElementsByTagName('h1')
// const para=document.getElementsByClassName('para')

let head=document.querySelector('h1')
let btn=document.querySelector('#change').textContent='click me'
let p=document.querySelectorAll('.para')

head.style.color='red'
head.style.backgroundColor='blue'
head.style.fontSize='30px'

p[0].innerHTML='HELLOO'
head.textContent='hlo everyone'
head.innerHTML='<p>hiiiiii</p>'



const newline=document.createElement('h1')
newline.textContent='hlooo my friend'
newline.style.color='green'
document.body.appendChild(newline)

// const imge=document.createElement('img')
// document.body.appendChild(createImage)
// imge.setAttribute

const image=document.createElement('img')
document.body.appendChild(image)
image.setAttribute('src','img.png')
image.setAttribute('alt','it is a screenshot')
image.setAttribute('width','100px')

const butt=document.createElement('button')
butt.textContent='submit'
document.body.appendChild(butt)
butt.addEventListener("click",function(){
    alert('submit successfully')
})
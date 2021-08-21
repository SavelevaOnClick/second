const input = document.body.appendChild(document.createElement('input'))
const btn = document.body.appendChild(document.createElement('button'))
btn. style = `
 width: 150px;
 height: 50px;
`
btn.innerText = `отправить`
input.type = 'file'

const reader = new FileReader()
 input.onchange = function (event) {
   reader.readAsDataURL(event.target.files[0])
 }
reader.onload = function (event) {
  console.log(event.target.readyState)
  document.body.appendChild(document.createElement('img')).src = event.target.result
}

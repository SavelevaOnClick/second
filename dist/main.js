(()=>{const e=document.body.appendChild(document.createElement("input")),t=document.body.appendChild(document.createElement("button"));t.style="\n width: 150px;\n height: 50px;\n",t.innerText="отправить",e.type="file";const n=new FileReader;e.onchange=function(e){n.readAsDataURL(e.target.files[0])},n.onload=function(e){console.log(e.target.readyState),document.body.appendChild(document.createElement("img")).src=e.target.result}})();
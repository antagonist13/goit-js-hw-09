import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l=document.querySelector(".feedback-form"),s="data";let t={email:"",message:""};l.addEventListener("input",e=>{e.target.className==="email-input"?t.email=e.target.value.trim():t.message=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(t))});const r=document.querySelector(".email-input"),o=document.querySelector(".textarea"),a=localStorage.getItem("data");a?(r.value=JSON.parse(a).email,o.value=JSON.parse(a).message):(r.value="",o.value="");l.addEventListener("submit",e=>{if(e.preventDefault(),r.value===""||o.value===""){alert("All form fields must be filled in");return}console.log(JSON.parse(localStorage.getItem("data"))),localStorage.removeItem("data"),l.reset()});
//# sourceMappingURL=commonHelpers2.js.map

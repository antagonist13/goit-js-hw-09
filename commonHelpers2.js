import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l=document.querySelector(".feedback-form"),m="feedback-form-state";let a={email:"",message:""};l.addEventListener("input",e=>{e.target.className==="email-input"?a.email=e.target.value.trim():a.message=e.target.value.trim(),localStorage.setItem(m,JSON.stringify(a))});const s=document.querySelector(".email-input"),o=document.querySelector(".textarea"),r=localStorage.getItem("feedback-form-state");r?(s.value=JSON.parse(r).email,o.value=JSON.parse(r).message):(s.value="",o.value="");const t=JSON.parse(localStorage.getItem(m));l.addEventListener("submit",e=>{if(e.preventDefault(),s.value===""||o.value.trim()===""){alert("All form fields must be filled in");return}if(t.email&&!t.message||!t.email&&t.message){alert("Data entry error. To solve the problem - refresh the page ");return}console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),l.reset()});
//# sourceMappingURL=commonHelpers2.js.map

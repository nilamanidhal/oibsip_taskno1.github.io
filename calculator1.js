let str='';
const output=document.querySelector('.result');
const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{(e.target.innerText);

        if(e.target.innerText==="AC"){
            str='';
            output.value=str;  
        }
        else if(e.target.innerText==="DEL"){
            str=output.value;
           str=str.substring(0,str.length-1);
           output.value=str;
        }
        else if(e.target.innerText==="="){
            str=eval(str);
            output.value=str;
        }
        else{
            str+=e.target.innerText;
            output.value=str;
            }
    });
})
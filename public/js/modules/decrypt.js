import copyText from "./copyText.js"

export default function decryptText(){
  const btnDecrypt = document.querySelector('#decrypt')
  const textArea = document.querySelector('#text')
  const textResult = document.querySelector('#textResult')
  const copyArea = document.querySelector('.copy')


  btnDecrypt.addEventListener('click', ()=>{
    const textValue = textArea.value;
    
    if(textValue != ""){
      if(textValue.indexOf('enter')!= -1 || textValue.indexOf('imes')!= -1 || textValue.indexOf('ai')!= -1 || textValue.indexOf('ober')!= -1 || textValue.indexOf('ufat') != -1){
        const textEncrypt = textValue.replace(/enter/gi, 'e').replace(/imes/gi,"i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
        textResult.innerHTML = `<p class="result">${textEncrypt}</p>`
        copyArea.style.display = 'flex';
        copyText(textEncrypt);
      }
      else{
        textResult.innerHTML = "<h3>Parece que esse texto não é criptografado.</h3>" 
      }
    }else{
      textResult.innerHTML = "<h3>Você deve digitar um texto antes.</h3>" 
    }

  })

}
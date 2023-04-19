import copyText from "./copyText.js"

export default function encryptText(){
  const btnEncrypt = document.querySelector('#encrypt')
  const textArea = document.querySelector('#text')
  const textResult = document.querySelector('#textResult')
  const copyArea = document.querySelector('.copy')

  btnEncrypt.addEventListener('click', ()=>{
    const textValue = textArea.value;
    
    if(textValue != ""){
      if(textValue.indexOf('e')!= -1 || textValue.indexOf('i')!= -1 || textValue.indexOf('a')!= -1 || textValue.indexOf('o')!= -1 || textValue.indexOf('u') != -1){
        const textEncrypt = textValue.replace(/e/gi, 'enter').replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")
        textResult.innerHTML = `<p  class="result">${textEncrypt}</p>`
        copyArea.style.display = 'flex';
        copyText(textEncrypt);
      }else{
        textResult.innerHTML = "<h3>Parece que esse texto não contém palavras válidas para criptografar, certifique-se de ter vogais.</h3>" 
      }
    }else{
        textResult.innerHTML = "<h3>Você deve digitar um texto antes.</h3>" 
    }

  })

}
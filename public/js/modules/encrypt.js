export default function encryptText(){
  const btnEncrypt = document.querySelector('#encrypt')
  const textArea = document.querySelector('#text')
  const textResult = document.querySelector('#textResult')

  btnEncrypt.addEventListener('click', ()=>{
    const textvalue = textArea.value;
    
    if(textvalue != ""){
      const textEncrypt = textvalue.replace(/e/gi, 'enter').replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")
      textResult.innerHTML = `<p >${textEncrypt}</p>`
    }else{
      textResult.innerHTML = "<h3>Você deve digitar um texto antes.</h3>" 
    }

  })

}
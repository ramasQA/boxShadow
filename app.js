function generateCss(){
    let inset = document.getElementById('inset').checked
    
    if (inset) inset = ' inset'
    else inset = ''

    let offsetX = document.getElementById('offsetX').value
    let offsetY = document.getElementById('offsetY').value
    let blur = document.getElementById('blur').value
    let stretch = document.getElementById('stretch').value
    let color = document.getElementById('color').value
    let opacity = document.getElementById('opacity').value
    
    let red = parseInt(color.slice(1,3),16)
    let green = parseInt(color.slice(3,5),16)
    let blue = parseInt(color.slice(5,7),16)
    

    let result = document.getElementById('result')
    let textarea = document.getElementById('cssCode')

    let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`
    
    textarea.value = 'box-shadow:' + str
    result.style.boxShadow = str

  }
  
  for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss)
  }
  generateCss()

  // Button Copied
  let button = document.getElementById('textCopy');
  button.addEventListener('click', function() {
    let area = document.getElementById('cssCode')
    let range = document.createRange();
    range.selectNode(area);
    window.getSelection().addRange(range);

    try{
      document.execCommand("copy");
      
    } catch(err){
      alert('Can`t copy')
    }
    //window.getSelection().removeAllRanges();
  })

  
  textCopy.onclick = e => {
   //let html = "<h4 id="textPic" >Скопировано в буфер обмена</h4>"
   textCopy.insertAdjacentHTML('afterend', '<div style="position:absolute; top: 72%;" id="cpd"><h3>Скопировано в буфер обмена</h3></div>');
   setTimeout(_=> cpd.remove(), 1000);
     
  } ;

  

    

  




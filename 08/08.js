const selChange = (s1, s2, l1, l2, i1, i2) => {

if (s1.value=="℃") {
  s2.value="℉" ; 
  s1.style.color= "red";
  s2.style.color= "blue";
  l1.style.color= "red";
  l2.style.color= "blue";
  
 
} else {
    s2.value="℃" ;
    s1.style.color= "blue";
    s2.style.color= "red";
    l1.style.color= "blue";
    l2.style.color= "red";
}
      l1.innerHTML = s1.value;
      l2.innerHTML = s2.value;

      i1.value="" ;
      i2.value="" ;
      i1.focus();
}


document.addEventListener('DOMContentLoaded', ()=>{
    const select1 = document.querySelector("#sel1")
    const select2 = document.querySelector("#sel2")
    const input1 = document.querySelector("input")
    const input2 = document.querySelector("[readonly]")
    const label1 = document.querySelector("[for= txt1]")
    const label2 = document.querySelector("[for= txt2]")

    console.log(select1);
    console.log(select2);
    console.log(input1);
    console.log(input2);

  
    //Selector의 값이 변경될 때
    select1.addEventListener('change',() => {
      console.log(select1.value);
      selChange(select1, select2, label1, label2, input1, input2);
    })

    //Selector의 값이 변경될 때
    select2.addEventListener('change',() => {
      selChange(select2, select1, label2, label1, input1, input2);

    })

    input1.addEventListener('input', () => {

      if (select1.value=="℃") {
       input2.value = parseFloat((input1.value * (9/5)) +32).toFixed(4);
      } else 
      input2.value = parseFloat((input1.value - 32) * (5/9)).toFixed(4);
    })


    
  


});
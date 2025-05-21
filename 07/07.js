document.addEventListener('DOMContentLoaded', ()=>{
    const imgs = document.querySelectorAll(".mdiv > img")
    const bts = document.querySelectorAll(".mdiv > button")
    let same = document.querySelector(".correct > span") ;
  console.log(bts);
  console.log(imgs);
  
  for (let bt of bts) {
      bt.addEventListener('click', (e) =>{
            //0. 버튼이벤트 방지
            //e.preventDefault() ;

          //1. 1~6까지 랜덤 수 생성
          let n = Math.floor(Math.random() * 6) + 1 ;
          
          //2. 랜덤 수에 해당하는 이미지 변경
          //img.src=`/img/${n}.png`;
          
          imgs[0].setAttribute('src', `../img/${n}.png`);
          imgs[0].alt=`주사위${n}` ;
     
          // 클릭 주사위 번호
          
          let i = bt.innerHTML[bt.innerHTML.length-1] ;
          imgs[1].setAttribute('src', `../img/${i}.png`);
          imgs[1].alt=`주사위${i}` ;
          
          console.log(i,n) ;
          //<img src="/img/1.png" alt="주사위1" />
          if (i == n) {
            same.innerHTML=`일치` ;
            
        } else  
        same.innerHTML=`불일치` ;
          
      } )
     
 }

});
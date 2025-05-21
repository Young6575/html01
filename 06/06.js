document.addEventListener('DOMContentLoaded', ()=>{
    const img = document.querySelector(".mdiv> img")
    const bt = document.querySelector(".mdiv> button")

    bt.addEventListener('click', () =>{
        //1. 1~6까지 랜덤 수 생성
        let n = Math.floor(Math.random() * 6) + 1 ;
        
        //2. 랜덤 수에 해당하는 이미지 변경
        //img.src=`/img/${n}.png`;
        img.setAttribute('src', `../img/${n}.png`);

        img.alt=`주사위${n}` ;

        //<img src="/img/1.png" alt="주사위1" />

    } )
});
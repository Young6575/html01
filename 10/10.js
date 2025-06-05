document.addEventListener("DOMContentLoaded", () => {

    const boxs = document.querySelectorAll(".box") ;
    const bbox1 = document.querySelector(".bigbox1") ;
    const bbox2 = document.querySelector(".bigbox2") ;

    const bt = document.querySelector("main button") ;
    const msg = document.querySelector("#msg") ;
    let flag = false;
    let arr = [0,0,0,0,0,0,0,0,1] ;
    let i =0;
    let count=0;
    bbox2.style.display = 'none';

    for (let [idx,box] of boxs.entries()) {
        box.innerHTML = idx+1;
        console.log(idx, box);
    

        box.addEventListener("click", () => {
  

            if (!flag) {
                msg.innerHTML = "폭탄을 섞어주세요"
                return;
            }

            // 클릭 시 이미지 생성 또는 교체
            const img = document.createElement("img");
            img.setAttribute("width", "80"); // 필요시 크기 조정
            img.setAttribute("height", "80");

            if (arr[idx] == 1) {
                  img.setAttribute("src", "../img/boom.png");
                  flag = false;
                  bt.innerHTML="폭탄 섞기"
                  msg.innerHTML="실패"
                  count ++;
            } else { 
                    img.setAttribute("src", "../img/hart.png");
                    count ++;
            }
            
            box.innerHTML = ""; // 기존 내용 제거
            box.appendChild(img); // box에 이미지 삽입

            if (count == 8) {
                msg.innerHTML="성공"
               // boxs[arr.indexOf(1)].innerHTML = `<img src="../img/hart.png">`
                console.log(arr.indexOf(1));
                bbox1.style.display = 'none';
                bbox2.style.display = 'block';
                flag = false;
                bt.innerHTML="폭탄 섞기"
            
            }
                
        })   
    }
    
    bt.addEventListener("click", () => {
        if (flag == false) {
            arr.sort(() => Math.random() - 0.5);
            console.log(arr) ;
            flag = true;
            bbox1.style.display = 'block';
            bbox2.style.display = 'none';
            for (let box of boxs){
                box.innerHTML=""
            }

            bt.innerHTML = "게임 중.."
            count =0;
            return;
        }


        

    })


});
document.addEventListener("DOMContentLoaded", () => {

  const img = document.querySelector("div > img");
  const input = document.querySelector("#bt1 > input");
  const bt = document.querySelector("#bt1 > button");
  const btag = document.querySelector("#btarea > button");
  const btarea1 = document.querySelector("#bt1");
  const btarea2 = document.querySelector("#btarea");
  const counttxt = document.querySelector("div > span");
  //flag 변수
  let flag = false;
  let count = 0;
  let rnd = 0;
 


  bt.addEventListener('click', (e) => {
    e.preventDefault();

    if (flag == false && count == 0) {
      rnd = Math.floor(Math.random() * 100) + 1;
      console.log(rnd);
      flag = true;
    }

    if (input.value > rnd) {
      count++;
      console.log(input.value)
      img.setAttribute('src', `/img/down.png`);
      counttxt.innerHTML = count;
    } else if (input.value < rnd) {
      count++;
      console.log(input.value)
      img.setAttribute('src', `/img/up.png`);
      counttxt.innerHTML = count;
    } else if (input.value == rnd) {
      count++;
      console.log(input.value)
      img.setAttribute('src', `/img/good.png`);
      counttxt.innerHTML = count;
      flag = true;
      count = 0;
      btarea1.style.display = 'none';
      btarea2.style.display = 'flex';

    }
  })

  btag.addEventListener('click', (e) => {

    rnd = Math.floor(Math.random() * 100) + 1;
    img.setAttribute('src', `/img/what.png`);
    btarea1.style.display = 'flex';
    btarea2.style.display = 'none';
    input.value="";
    counttxt.innerHTML ="시도횟수";

  })



});
const lotto = () => {
    document.getElementById("nlist").innerHTML = "" ;

    let arr = [];
    
    //중복되지 않게 6개의 숫자 생성
    while(arr.length < 6) {
        let n = Math.floor(Math.random() * 45) +1 ; //1~45

        //랜덤 수가 이미 있는 경우
        if (arr.includes(n)) continue;

        //랜덤 수 배열에 추가
        arr.push(n);
    }
    
    //배열 정렬
    arr.sort((a, b) => a - b);


    //보너스 번호
    let bonus = [];
    while(bonus.length < 1) {
      let n = Math.floor(Math.random() * 45) +1 ; //1~45

        //랜덤 수가 이미 있는 경우
        if (arr.includes(n)) continue;

        //랜덤 수 배열에 추가
        bonus.push(n);
    }
    
    //전체 배열
    //arr.push('+') ;
    arr = [...arr,...bonus] ;
    console.log(arr);


    //태그배열
    let tags = arr.map( item => `<span class="sp${Math.floor(item/10)}">${item}</span>`) ;
    tags.splice(6,0, `<span id="spPlus">+</span>`) ;
    tags = tags.join('');
    console.log(tags) ;

    document.getElementById("nlist").innerHTML = tags ;



}
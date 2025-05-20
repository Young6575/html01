const check1 = (e) => {
    // e.preventDefault;
    let txt1 = document.getElementById("txt1").value ;

    //공백 제거
    txt1 = txt1.replaceAll(' ','');
    //문자열 반복문
    let s = '';
    // for(let i = txt1.length - 1 ; i >= 0 ; i--){
    //     s = s + txt1[i];
    // }

    s = txt1.split('').reverse().join('');
    //문자열 비교
    if (txt1 == s) document.getElementById("txt2").value = "회문입니다."
    else document.getElementById("txt2").value = "회문이 아닙니다.";
}

const check2 = () => {
    let txt2 = document.getElementById("txt1").value;

    //문자열 반복문
    let s = 0;
    for(let i = 0 ; i < txt2.length ; i++){
        if ( !isNaN(txt2[i])) {
        s = s + parseInt(txt2[i]) ;
        console.log(s)
        }
    }

    document.getElementById("txt2").value = s ;
}

const check3 = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
}
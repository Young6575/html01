

const yesterday = () => {

    const yday = new Date();
    yday.setDate(yday.getDate() - 1);
    
    const year = yday.getFullYear();
    const month = String(yday.getMonth() + 1).padStart(2, '0');
    const day = String(yday.getDate()).padStart(2, '0');
    
    return yday.toISOString().slice(0,10);
   
}


const getpost = (mvNm) => {

    const tbdbAPI = "" ;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${tbdbAPI}&query=${mvNm}` ;
    const poster = document.querySelector(".poster");


  fetch(url)
    .then(resp => resp.json())
    .then(data => poster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}" />`) 
   // .then (data => console.log(data)) 
    .catch(err => console.log(err)) ;

  
}



const getMvList = (dt,ul,mt) => {


        console.log(mt);

        fetch(mt)
            .then(resp => resp.json())
            .then(data => {
                const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

                const mvlist = dailyBoxOfficeList.map((item) => {

                    let icon = "";
                    if (item.rankInten > 0) {
                        icon = `<i class="fa-solid fa-up-long" style="color:red"></i>`;
                    } else if (item.rankInten < 0) {
                        icon = `<i class="fa-solid fa-down-long" style="color:blue"></i>`;
                    } else {
                        icon = `<i class="fa-solid fa-minus" style="color:gray"></i>`;
                    }
                    const mv = encodeURIComponent(item.movieNm);
                    return `<li onClick=getpost("${mv}")>
                        <span class="spRank">${item.rank} </span> 
                        <span class="spMv">${item.movieNm}</span>
                        <span class="sprankInten">${icon} ${item.rankInten}</span> 
                    </li>`;
                });

                const tags = mvlist.join('');
                ul.innerHTML = tags;
            })
            .catch(err => console.log(err));

}





document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("main  ul") ;
    const date = document.querySelector("#scandate") ;
    const bt = document.querySelector("#bt1");
    date.value = yesterday();
    dt =date.value.replaceAll('-','');
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d96fcc807188ee7c92cbe1d0636aef73&targetDt=" + dt;
    
        
        getMvList(date.value.replaceAll('-',''), ul,url) ;

    date.addEventListener("change", () => {
        getMvList(date.value.replaceAll('-',''), ul,url) ;
    });

bt.addEventListener("click", () => {
    
    const ul = document.querySelector("main  ul") ;
    const date = document.querySelector("#scandate") ;
    const selectedRadio = document.querySelector('input[name="multiMovieYn"]:checked');
    dt =date.value.replaceAll('-','');


    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d96fcc807188ee7c92cbe1d0636aef73&targetDt=" + dt + "&multiMovieYn=";
        if (selectedRadio.value=="다양성 영화") url = url + "Y";
        else if (selectedRadio.value=="상업 영화") url = url + "N";

    console.log(selectedRadio.value);
    console.log(url);        
         
    getMvList(date.value.replaceAll('-',''), ul,url)

    })

});



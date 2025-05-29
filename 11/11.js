
const yesterday = () => {

    const yday = new Date();
    yday.setDate(yday.getDate() - 1);
    
    const year = yday.getFullYear();
    const month = String(yday.getMonth() + 1).padStart(2, '0');
    const day = String(yday.getDate()).padStart(2, '0');
    
    return yday.toISOString().slice(0,10);
   
}

const getMvList = (dt,ul) => {

        const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d96fcc807188ee7c92cbe1d0636aef73&targetDt=" + dt;

        console.log(url);

        fetch(url)
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

                    return `<li>
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

const mostList = (date,yearsearch) => {
    const endDate = date;



}



document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("main > ul") ;
    const date = document.querySelector("#scandate") ;
    
        date.value = yesterday();
        getMvList(date.value.replaceAll('-',''), ul) ;

    date.addEventListener("change", () => {
        getMvList(date.value.replaceAll('-',''), ul) ;
    });
});

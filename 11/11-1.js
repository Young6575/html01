document.addEventListener("DOMContentLoaded", () => {
    const date = document.querySelector("#scandate");
    const sort = document.querySelector("#sel1");

    date.addEventListener("change", () => {
        const box1 = document.querySelector("main > ul");
        const cleanDate = date.value.replace(/-/g, "");
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d96fcc807188ee7c92cbe1d0636aef73&targetDt=${cleanDate}`;

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
                box1.innerHTML = tags;
            })
            .catch(err => console.log(err));
    });


    sort.addEventListener("click", () => {

        console.log(sort.value);




    })









});

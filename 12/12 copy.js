const getpost = (searchName) => {

    const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=kASgudSVIDhI8SvrRuVA2EZyHH8kpgeygVvyj%2FcIPbzNvlWF%2BEJ%2ByAXv6X2uq9vB8YNRPVsq8LFYFOdjVteeaw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${searchName}&_type=json`
    const form = document.querySelector(".cbox");

    fetch(url)
    .then(resp => resp.json())
    .then (data => {
        
        const result = data.response.body.items.item;

        let resultbox = result.map((item) => {
            const isrc = item.galWebImageUrl;
            const title = item.galTitle;
            const location = item.galPhotographyLocation;

            return `<div class="photo">
                        <img src="${isrc}">
                        <span>${title} <br />
                              ${location}  
                        </span>

                    </div>`
        })

        console.log(resultbox);
        resultbox = resultbox.join("");

        form.innerHTML=resultbox;

    });


}




document.addEventListener("DOMContentLoaded", () => {
    const sbox = document.querySelector("[name=search]");
    const bt = document.querySelector("[name=ok]");
    const reset = document.querySelector("[name=reset]");
    const form = document.querySelector(".cbox");



    sbox.addEventListener('keydown', (event) => {
    
        if (event.key === 'Enter') {
            getpost(sbox.value);
        }

    })

    bt.addEventListener("click", () => {
        const sbox = document.querySelector("[name=search]");

        getpost(sbox.value);
    })

    reset.addEventListener("click", () => {
        form.innerHTML="";
    })

})
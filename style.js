
const accesskey="ypSuXQ2VftFogVXpRp5GAQVdgdY6BO4GCVVhxn_wz5Y";
const searchform=document.getElementById("searchform");
const searchresult=document.getElementById("searchresult");
const searchmora=document.getElementById("show-mora-button");
const searchbox=document.getElementById("searchbox");


let keyword=" ";
let page=1;


async function myfetching(){

          keyword=searchbox.value;
          const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=19`;
          const response = await fetch(url)
          const data =await response.json()
          const results=data.results;
          
    results.forEach((result)=>{
                      const imagewrapper=document.createElement("div");
                      imagewrapper.classList.add("searchresults1");
                      const image=document.createElement("img");
                      image.src=result.urls.small;
                      const imagelink=document.createElement("a");
                      imagelink.href=result.links.html;
                      imagelink.target="_balnk";
                      imagelink.textContent=results.alt_description;


                        imagewrapper.appendChild(image);
                        imagewrapper.appendChild(imagelink);
                        searchresult.appendChild(imagewrapper);
                      })
      searchmora.style.display = "block";

} 

searchform.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
  searchresult.innerHTML="";
  myfetching();
});
searchmora.addEventListener("click",()=>{
  page++;
  myfetching();
})




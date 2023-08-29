console.log("Let's get this party started!");


async function onSubmit(input){

    try{
        const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
        const res = await axios.get(url);
        console.log(res)
        const randIndex = Math.floor(Math.random() * res.data.data.length);
        const GIF = res.data.data[randIndex];
        const img = document.createElement('img');
        img.src = GIF.images.original.url;

        const container = document.getElementById('container');
        container.appendChild(img)

    }catch (e){
    alert("Try a different one!")
    console.error(e)
}}

const clearBtn = document.getElementById('delete');

function onClear(){
    const container = document.getElementById('container');
    container.innerHTML = '';
}

const form = document.getElementById("giphy-form");
const input = document.getElementById("searchbar")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    onSubmit(input.value);

})

clearBtn.addEventListener('click', function (){
    onClear();
})
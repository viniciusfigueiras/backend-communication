const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const welcome = document.getElementById("welcome");

getBtn.addEventListener('click', getInfo);
postBtn.addEventListener('click', postInfo);

async function getInfo(e) {
    e.preventDefault();

    const inputValue = document.getElementById("input").value;
    const res = await fetch('/info/' + inputValue, {
        method: 'GET'
    });

    const data = await res.json();
    var result = JSON.parse(data);
    welcome.textContent = "Welcome " + result.name;
}

async function postInfo(e) {
    e.preventDefault();
    
    const inputValue = document.getElementById("input").value;
    if(inputValue == ''){
        return; 
    }
    const res = await fetch('/post/' + inputValue, {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            parcel: inputValue
        })
    });


}
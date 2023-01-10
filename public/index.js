const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");

const baseUrl = '/info'

document.addEventListener('click', getInfo);
async function getInfo(e) {
    e.preventDefault();

    const res = await fetch(baseUrl, {
        method: 'GET'
    });

    const data = await res.json();
    input.value = data.info;
}

async function postInfo() {

}
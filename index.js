console.log(API_URL);

window.onload(fetchData());

async function fetchData  (){

    let res = await fetch("https://codejudge-question-artifacts.s3.ap-south-1.amazonaws.com/poplution-countries-yearwise.json");
    let data = await res.json();
    console.log(data);
}


document.querySelector(".get-jokes").addEventListener("click", dohvati);

function dohvati(e) {
  const broj = document.querySelector('input[type="number"]').value;

const xhr = new XMLHttpRequest();
xhr.open('GET', `http://api.icndb.com/jokes/random/${broj}`, true);
xhr.onload = function() {
  if(this.status === 200) {
    const response = JSON.parse(this.responseText);
  console.log(response);

  let shala = "";
  if(response.type === "success") {
      response.value.forEach(function(i){
        shala += `<li>${i.joke}</li>`;
      })
  }
  document.querySelector('.jokes').innerHTML = shala;
 // document.querySelector('.jokes').innerHTML = response.value[1].joke;
  }
}

xhr.send();
 
e.preventDefault();
}
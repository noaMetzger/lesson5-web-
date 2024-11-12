function f1() {
  document.querySelector("#res").innerHTML = "";
  let name = document.querySelector("#filter").value;
  const catalog1 = catalog.filter(x => x.title.includes(name))
  for (let i = 0; i < catalog1.length; i++) {
    document.querySelector("#res").innerHTML += catalog1[i]["title"] + " ";
  }
}

function f2() {

  const country = catalog.map(x=>x.country).filter((item, index,arr) => !arr.includes(item, index + 1))
  console.log(country);

}


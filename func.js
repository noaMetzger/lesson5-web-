function f1() {
  document.querySelector("#res").innerHTML = "";
  let name = document.querySelector("#filter").value;
  const catalog1 = catalog.filter(x => x.title.includes(name))
  for (let i = 0; i < catalog1.length; i++) {
    document.querySelector("#res").innerHTML +=i+1+"."+ catalog1[i]["title"] +" "+"<br>";
  }
  f5(catalog1)
}

function f2() {
  const country = catalog.map(x=>x.country).filter((item, index,arr) => !arr.includes(item, index + 1))
  console.log(country);
  country.sort();
  console.log(country);
  for (let i = 0; i < country.length; i++) {
    document.querySelector("#select").innerHTML+="<option>"+country[i]+"</option";
  }
}
f2()
function f3(){
  document.querySelector("#res2").innerHTML = "";
  let country=document.querySelector("#select").value;
  const catalog2 = catalog.filter(x => x.country.includes(country))
  console.log(catalog2);
  for (let i = 0; i < catalog2.length; i++) {
    document.querySelector("#res2").innerHTML +=i+1+"."+ catalog2[i]["title"] +" " +catalog2[i]["country"] +" "+"<br>";
  }
  f5(catalog2)
}
function f4(){
  const fYear=document.querySelector("#fYear").value;
  const lYear=document.querySelector("#lYear").value;
  const found=catalog.find(x=>x.year>=fYear&&x.year<=lYear)
document.querySelector("#res3").innerHTML=found.title;
}
function f5(x){ 
  document.querySelector("#tab").innerHTML=" ";
  const t=x.map(item=>`<tr>
  <td>${item.title} </td>
  <td>${item.company} </td>
  <td>${item.country} </td>
  <td>${item.id} </td>
  <td>${item.price} </td>
  <td>${item.artist} </td>
  <td>${item.year} </td> 
  </tr>`)
  document.querySelector("#tab").innerHTML+=t.join('');
}
function f6(){
  const title=document.querySelector("#title").value;
  const artist=document.querySelector("#artist").value;
  const country=document.querySelector("#country").value;
  const company=document.querySelector("#company").value;
  const price=document.querySelector("#price").value;
  const year=document.querySelector("#year").value;
  const id=catalog.length+100;
catalog.push({title,artist,country,company,price,year,id})
console.log(catalog);
}
function f7(){
  const id=document.querySelector("#remove").value;
  const index=catalog.findIndex(x=>x.id==id);
  catalog.splice(index,1);
  console.log(catalog);

}
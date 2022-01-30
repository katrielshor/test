let array = [{}]

//add products function
const add = () => {
    let productName = document.getElementById("name").value
    let productPrice = document.getElementById("price").value
    let productType = document.getElementById("type").value
    let productImage = document.getElementById("image").value
    const tbodyEl = document.querySelector("tbody");

 
    array.push({name : `${productName}`, price : `${productPrice}`, type: `${productType}`, image:`${productImage}`});
    console.log(array);


    tbodyEl.innerHTML += `
    <tr>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productType}</td>
    <td><img src=${productImage} alt="alternatetext"></td>
    <td><button class="deleteBtn">delete</button></td>
  </tr>
    `}


    //remove products
    const tableEl = document.querySelector("table");
    function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }
      tableEl.addEventListener("click", onDeleteRow);;
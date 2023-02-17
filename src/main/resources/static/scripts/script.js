

function getTableRow(product) {
    product.submitted = undefined;
    var id = product.id;
    var name = product.name;
    var description = product.description;
    var submitted = product.submitted;
    var price = product.price;

    //Cell with Icon ID
    const idCell = document.createElement("td");
    idCell.innerText = id;

    //Cell with name
    const nameCell = document.createElement("td");
    nameCell.innerText = name;

    //Cell with description
    const descriptionCell = document.createElement("td");
    descriptionCell.innerText = description;

    //Cell with submitted
    const submittedCell = document.createElement("td");
    submittedCell.innerText = submitted;

    //Cell with price
    const priceCell = document.createElement("td");
    priceCell.innerText = "$" + price;

    //Cell with Edit
    const editCell = document.createElement("td");
    editCell.innerHTML = "<a class='link' onclick='editProduct("+ id +")'> Edit </a>";

    //Cell with Delete
    const deleteCell = document.createElement("td");
    deleteCell.innerHTML = "<a class='link' onclick='deleteProduct("+ id +")'>Delete</a>";


    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "product" + id);
    tableRow.appendChild(idCell);
    tableRow.appendChild(submittedCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(descriptionCell);
    tableRow.appendChild(priceCell);
    tableRow.appendChild(editCell);
    tableRow.appendChild(deleteCell);

    return tableRow;
}


fetch("http://localhost:8080/products/all", { method: 'GET', headers: { 'Accept': 'application/json', }})
    .then(async function(response){
        let data = await response.json();
        //console.log(data);
        data.forEach(function(product) {

            var tableRow = getTableRow(product);
            document.getElementById("dateTable").appendChild(tableRow);

        });
    })
    .catch(function (err) {
        console.log("Something Went wrong", err);
    });


function addNewProduct(){
    var nameBox = document.getElementById('nameBox');
    if(nameBox.value == ""){
        document.getElementById('nameErr').innerText = "Name is Required.";
        return;
    }

    var priceBox = document.getElementById('priceBox');
    if(priceBox.value == ""){
        document.getElementById('priceErr').innerText = "Price is Required.";
        return;
    }

    var descriptionBox = document.getElementById('descriptionBox');

    const data = {"name": nameBox.value,"description":descriptionBox.value,"price":priceBox.value};

    fetch('http://localhost:8080/products/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            var tableRow = getTableRow(data);
            document.getElementById("dateTable").appendChild(tableRow);
            document.getElementById("msg").innerText = "Success: Product Added Successfully";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("msg").innerText = "Error: Error Occurred";
        });

}
function deleteProduct(id) {
    fetch('http://localhost:8080/products/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.getElementById("product" + id).remove();
            document.getElementById("msg").innerText = "Success: Product Deleted Successfully";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("msg").innerText = "Error: Error Occurred";
        });
}


function editProduct(id) {
    var tableRow = document.getElementById("product" + id);
    var childrens = tableRow.children;

    childrens[2].innerHTML = "<input type='text' class='text-box-edit' id='nameBoxEdit' value='"+ childrens[2].innerText +"'/>";
    childrens[3].innerHTML = "<input type='text' class='text-box-edit' id='descriptionBoxEdit' value='"+ childrens[3].innerText +"'/>";
    childrens[4].innerHTML = "<input type='number' class='text-box-edit' id='priceBoxEdit' value='"+ childrens[4].innerText.replace('$', '') +"'/>";

    childrens[5].innerHTML = "<button onclick='saveProduct("+id+")' class='save-btn'>Save</button>";
    childrens[6].innerHTML = "";
}


function hideError(id) {
    document.getElementById(id).innerText = "";
}



function saveProduct(id) {

    var nameBox = document.getElementById('nameBoxEdit');
    var descriptionBox = document.getElementById('descriptionBoxEdit');
    var priceBox = document.getElementById('priceBoxEdit');

    const data = {"id" : id, "name": nameBox.value,"description":descriptionBox.value,"price":priceBox.value};

    fetch('http://localhost:8080/products/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.getElementById("product" + id).remove();
            var tableRow = getTableRow(data);
            document.getElementById("dateTable").appendChild(tableRow);
            document.getElementById("msg").innerText = "Success: Product Saved Successfully";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("msg").innerText = "Error: Error Occurred";
        });
}
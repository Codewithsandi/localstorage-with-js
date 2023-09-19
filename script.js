let form = document.getElementById("mainForm");
let main = document.querySelector(".main");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.uName.value;
  let email = event.target.uEmail.value;
  let phone = event.target.uPhone.value;
  let checkStatus = 0;
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

  for (let value of userData) {
    if (value.email == email) {
      checkStatus = 1;
      break;
    }
    if (value.phone == phone) {
      checkStatus = 2;
      break;
    }
  }

  if (checkStatus == 1) {
    alert("Email Already Exsists");
  } else if (checkStatus == 2) {
    alert("Number Already Exsists");
  } else {
    userData.push({
      name: name,
      email: email,
      phone: phone,
    });
    localStorage.setItem("userDetails", JSON.stringify(userData));
    event.target.reset();
  }
  displayData();
});

let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = "";
  userData.forEach((element, i) => {
    finalData += `
    <div class="items">
        <span onclick='removeData(${i})'>&times;</span>
        <h5>Name:</h5>
        <div>${element.name}</div>
        <h5>Email:</h5>
        <div>${element.email}</div>
        <h5>Number:</h5>
        <div>${element.phone}</div>
    </div>
  `;
  });
  main.innerHTML = finalData;
};

let removeData = (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
};
displayData();

// let user = [
//     {
//         name: "Sandipan",
//         email: "Sandipan@gmil.com"
//     },
//     {
//         name: "Susanto",
//         email: "Susanto@gmail.com"
//     }
// ]
// localStorage.setItem("name",JSON.stringify(user))
// let nameVal = localStorage.getItem("name")
// console.log(JSON.parse(nameVal));

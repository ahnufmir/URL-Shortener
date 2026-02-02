const body = document.querySelector("body");
const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");
const getSbmitBtn = document.querySelector("#get-sbmt");
const postSbmitBtn = document.querySelector("#post-sbmt");

getBtn.addEventListener("click", () => {
  const postDiv = document.querySelector(".post-div");
  postDiv.style.display = "none";
  const div = document.querySelector(".get-div");
  div.style.display = "block";
});

getSbmitBtn.addEventListener("click", () => {
  const getResultDiv = document.querySelector("#get-result");
  const email = document.querySelector("#get-url");
  const value = email.value;
  if (!value) {
    alert("Required Fields are missing");
    return;
  }
  window.location.href = `http://localhost:8000/${value}`;
});

postBtn.addEventListener("click", () => {
  const getDiv = document.querySelector(".get-div");
  getDiv.style.display = "none";
  const div = document.querySelector(".post-div");
  div.style.display = "block";
});

postSbmitBtn.addEventListener("click", () => {
  const postResultDiv = document.querySelector("#post-result");
  const email = document.querySelector("#post-url");
  const emailVal = email.value;

  if (!emailVal) {
    alert("Required Fields are missing");
    return;
  }

  userData = {
    url: emailVal
  };

  fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response)=> response.json())
    .then((data) => {
      postResultDiv.innerHTML = `
        <p><strong>201: </strong> Short url is created ${data.msg}</p>
        `;
    })
    .catch((err) => console.log("Error", err));
});

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", async () => {
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;
  const error = document.getElementsByClassName("error")[0];
  error.innerHTML = "";

  if (userEmail === "" || userPassword === "") {
    error.innerHTML = "all fields required";
    return;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
    error.innerHTML = "invalid email address";
    return;
  }
  const data = {
    email: userEmail,
    password: userPassword,
  };

  const response = await fetch("http://localhost:3000/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responsedata = await response.json();
  console.log(responsedata);

  location.href = "../index.html";
});

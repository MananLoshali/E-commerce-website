const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", async () => {
  const userName = document.getElementById("user-name").value;
  const userEmail = document.getElementById("user-email").value;
  const userType = document.getElementById("user-type").value;
  const userPassword = document.getElementById("user-password").value;
  const confirmUserPassword = document.getElementById(
    "confirm-user-password"
  ).value;
  const error = document.getElementsByClassName("invalid-email")[0];
  error.innerHTML = "";

  if (
    userName === "" ||
    userEmail === "" ||
    userType === "" ||
    userPassword === "" ||
    confirmUserPassword === ""
  ) {
    error.innerHTML = "all fields are required";
    return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
    error.innerHTML = "invalid email address";
    return;
  }

  if (userPassword !== confirmUserPassword) {
    error.innerHTML = "password did not match";
    return;
  }

  const data = {
    name: userName,
    email: userEmail,
    type: userType,
    password: userPassword,
  };

  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responsedata = await response.json();
  console.log(responsedata);
});

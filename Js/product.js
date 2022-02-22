function onSubmit() {
  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("product-price").value;
  const category = document.getElementById("product-type").value;

  const input_image = document.getElementById("input_image");
  const file = input_image.files[0];
  let image = "";
  const reader = new FileReader();

  reader.addEventListener("load", async function () {
    image = this.result;
    const data = {
      name: productName,
      price: productPrice,
      category: category,
      image: image,
    };

    const response = await fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response_data = await response.json();
    console.log(response_data);
  });

  reader.readAsDataURL(file);
}

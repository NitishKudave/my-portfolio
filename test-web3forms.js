async function testWeb3Forms() {
  const json = JSON.stringify({
    access_key: "68c60623-f654-4ce4-b6c1-f4dcd025decb",
    name: "Nitish kudave",
    email: "nitishkudave111@gmail.com",
    message: "nooooo noooooo"
  });

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json,
  });

  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Response:", data);
}

testWeb3Forms();

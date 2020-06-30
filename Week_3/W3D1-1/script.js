fetch("https://jsonplaceholder.typicode.com/users",)
    .then(response => response.json())
    .then(myJson => {
        document.body.innerHTML =
            "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })
fetch('https://catfact.ninja/fact')
.then(function (response) {
    let elements;

    response.json().then(function(jsonData){
        console.log(jsonData);

        elements=jsonData.data.map(function (item) {
            return `<li> ${item.fact} </li>`;
        });
        document.writeln("<ol>"+ elements.json("") + "</ol>");
    });
})
.catch(function (err) {
    console.log(err);
});
const newBurgButton = document.getElementById("burger-submit");

newBurgButton.addEventListener("click", event => {
    event.preventDefault();
    const newBurger = document.getElementById("newBurgID").nodeValue;
    axios.post("/api/burger", {
        burger_name: newBurger
    })
    window.location.reload();
})

document.querySelectorAll(".devoured").forEach(burg => {
    burg.addEventListener("click", event => {
        event.preventDefault();
        let id = event.target.getAtrribute("data-id");
        axios.put(`/api/burger/${id}`, {})
        this.value === "";
    })
})
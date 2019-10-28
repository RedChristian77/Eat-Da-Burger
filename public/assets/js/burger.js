
const newBurgButton = document.getElementById("burger-submit");

newBurgButton.addEventListener("click", event => {
    event.preventDefault();
    const newBurger = document.getElementById("newBurgID").value;
    axios.post("/api/burgers", {
        burger_name: newBurger
    })
})

document.querySelectorAll(".devoured").forEach(burg => {
    burg.addEventListener("click", event => {
        event.preventDefault();
        let id = event.target.getAttribute("data-id");
        axios.put(`/api/burger/${id}`, {})
        this.value === "";
    })
})
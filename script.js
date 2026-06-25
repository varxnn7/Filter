function filterProducts(category,button)
{
    document
    .querySelectorAll(".filter-btn")
    .forEach(btn =>
    btn.classList.remove("active"));

    button.classList.add("active");

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card =>
    {
        if(
            category === "all" ||
            card.dataset.category === category
        )
        {
            card.style.display = "block";
        }
        else
        {
            card.style.display = "none";
        }
    });
}
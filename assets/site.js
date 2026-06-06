const filterButtons = document.querySelectorAll("[data-filter]");
const filterCards = document.querySelectorAll("[data-topic]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterCards.forEach((card) => {
      const topics = card.dataset.topic.split(" ");
      card.hidden = filter !== "all" && !topics.includes(filter);
    });
  });
});

const copyButtons = document.querySelectorAll("[data-copy-email]");
const toast = document.querySelector("[data-toast]");
const email = "harrison.feig@gmail.com";

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast("Copied email to clipboard");
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});

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

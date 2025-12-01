(() => {
  const openModalBtn = document.querySelector("[data-menu-open]");
  const closeModalBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    menu.classList.toggle("is-open");
  }
})();
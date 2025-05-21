const box = document.getElementById("hoverbox");

box.addEventListener("mousemove", (e) => {
  const boxRect = box.getBoundingClientRect();
  const offsetX = e.clientX - boxRect.left - boxRect.width / 2;
  const offsetY = e.clientY - boxRect.top - boxRect.height / 2;


  box.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
});

box.addEventListener("mouseleave", () => {
  box.style.transform = "translate(0, 0)";
});
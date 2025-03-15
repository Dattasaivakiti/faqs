const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll(".questions img");
const hr = document.querySelectorAll(".first");
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    let answer = sections[i].querySelector(".answer");
    if (answer) {
      // Correct way to toggle display
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
      hr[i].classList.toggle("hide");
    } else {
      console.error(`No answer found in section ${i}`);
    }
  });
});

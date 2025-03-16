const sections = document.querySelectorAll("section");
const block = document.querySelectorAll(".questions");
const hr = document.querySelectorAll(".first");
if (sections.length > 0) {
  let firstAnswer = sections[0].querySelector(".answer");
  let firstImages = sections[0].querySelectorAll("img");
  let firstHr = sections[0].querySelector(".first");

  if (firstAnswer) {
    firstAnswer.style.display = "block"; // Make first answer visible
  }
  if (firstHr && !firstAnswer) {
    firstHr.classList.add("hide"); // Hide HR if answer is not available
  }
  if (firstImages.length >= 2) {
    firstImages[0].classList.add("hide"); // Hide plus icon
    firstImages[1].classList.add("display"); // Show minus icon
  }
}
block.forEach((current, i) => {
  current.addEventListener("click", () => {
    let answer = sections[i].querySelector(".answer");
    if (answer) {
      // Toggle Answer Display
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";

      // Select HR inside the section dynamically
      let hrElement = sections[i].querySelector(".first");
      if (hrElement) {
        hrElement.classList.toggle("hide");
      }

      // Select images dynamically inside the clicked block
      let images = current.querySelectorAll("img");
      if (images[0]) images[0].classList.toggle("hide"); // Toggle first image
      if (images[1]) images[1].classList.toggle("display"); // Toggle second image
    } else {
      console.error(`No answer found in section ${i}`);
    }
  });
});

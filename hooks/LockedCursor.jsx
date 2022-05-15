//when the document makes a query it return the ("#cursor") object
const cursor = document.querySelector("#cursor");

//this sets the cursor default cursor size
const DEFAULT_CURSOR_SIZE = cursor.style.getPropertyValue("--height");

//sets initial isCursorLocked boolean valur to false
let isCursorLocked = false;

//sets event listener for "mousedown"
//when "mousedown" event is triggered and IF isCursorLocked = true…
//the cursor is set to scale is set to 0.9
//setProperty("attribute" (scale), set to value (0.9)
document.addEventListener("mousedown", () => {
  if (!isCursorLocked) {
    cursor.style.setProperty("--scale", 0.9);
  }
});

//sets event listener for "mouseup"
//when "mouseup" event is triggered and IF isCursorLocked = true…
//the cursor is set to scale is set to 0.9
//setProperty("attribute" (scale), set to value (1)
document.addEventListener("mouseup", () => {
  if (!isCursorLocked) {
    cursor.style.setProperty("--scale", 1);
  }
});

//sets event listener for "mousemove"
//("mousemove", ({ x, y }) is passed out via the ({,}) allowing access to the x, y values
//when "mouseup" event is triggered and IF isCursorLocked = true…
//the cursor is set to scale is set to 0.9
//setProperty("attribute" (scale), set to value (1)
//the y + "px" syntax adds the "px" type to the value accessed through y
document.addEventListener("mousemove", ({ x, y }) => {
  if (!isCursorLocked) {
    cursor.style.setProperty("--top", y + "px");
    cursor.style.setProperty("--left", x + "px");
  }
});

// sets the query selector for all elements with the "a" class
// forEach((a) executes the function once for each a object
document.querySelectorAll("a").forEach((a) => {
  // declares the rect variable and sets it to null
  let rect = null;

  //adds an event listener to a for mouseenter
  //sets a as the target
  //sets isCusoorlocked to true
  a.addEventListener(
    "mouseenter",
    ({ target }) => {
      isCursorLocked = true;
      // sets rect to target
      rect = target.getBoundingClientRect();

      cursor.classList.add("is-locked");
      cursor.style.setProperty("--top", rect.top + rect.height / 2 + "px");
      cursor.style.setProperty("--left", rect.left + rect.width / 2 + "px");
      cursor.style.setProperty("--width", rect.width + "px");
      cursor.style.setProperty("--height", rect.height + "px");

      target.style.setProperty("--scale", 1.05);
    },
    // continously retturns true
    { passive: true }
  );

  a.addEventListener(
    "mousemove",
    ({ target }) => {
      const halfHeight = rect.height / 2;
      const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
      const halfWidth = rect.width / 2;
      const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;

      cursor.style.setProperty("--translateX", `${leftOffset * 3}px`);
      cursor.style.setProperty("--translateY", `${topOffset * 3}px`);

      target.style.setProperty("--translateX", `${leftOffset * 6}px`);
      target.style.setProperty("--translateY", `${topOffset * 4}px`);
    },
    { passive: true }
  );

  a.addEventListener(
    "mouseleave",
    ({ target }) => {
      isCursorLocked = false;

      cursor.style.setProperty("--width", DEFAULT_CURSOR_SIZE);
      cursor.style.setProperty("--height", DEFAULT_CURSOR_SIZE);
      cursor.style.setProperty("--translateX", 0);
      cursor.style.setProperty("--translateY", 0);

      target.style.setProperty("--translateX", 0);
      target.style.setProperty("--translateY", 0);
      target.style.setProperty("--scale", 1);

      setTimeout(() => {
        if (!isCursorLocked) {
          cursor.classList.remove("is-locked");
        }
      }, 100);
    },
    { passive: true }
  );
});

document.querySelectorAll("p").forEach((p) => {
  p.addEventListener(
    "mouseover",
    () => {
      cursor.style.setProperty("--width", "0.2em");
      cursor.style.setProperty("--height", "1.5em");
    },
    { passive: true }
  );

  p.addEventListener(
    "mouseout",
    () => {
      cursor.style.setProperty("--width", DEFAULT_CURSOR_SIZE);
      cursor.style.setProperty("--height", DEFAULT_CURSOR_SIZE);
    },
    { passive: true }
  );
});

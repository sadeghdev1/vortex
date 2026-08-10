import sr from "./scrollReveal";

export default function initScrollReveal() {
  sr.reveal(".reveal", {
    interval: 100,
  });

  sr.reveal(".reveal-left", {
    origin: "left",
  });

  sr.reveal(".reveal-right", {
    origin: "right",
  });

  sr.reveal(".reveal-top", {
    origin: "top",
  });

  sr.reveal(".reveal-bottom", {
    origin: "bottom",
  });
}
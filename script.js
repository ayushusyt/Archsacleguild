const BOOKING_URL = "";
const CONTACT_EMAIL = "hello@archscaleguild.com";

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const primaryCtas = document.querySelectorAll('[data-cta="primary"]');
const growthForm = document.getElementById("growth-form");
const formStatus = document.getElementById("form-status");
const revealTargets = document.querySelectorAll("[data-reveal]");

function applyCtaTargets() {
  primaryCtas.forEach((link) => {
    const fallbackHref = link.getAttribute("href") || "#apply";

    if (BOOKING_URL) {
      link.setAttribute("href", BOOKING_URL);
      if (/^https?:\/\//.test(BOOKING_URL)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer");
      }
      return;
    }

    link.setAttribute("href", fallbackHref);
  });
}

function setMenuState(isOpen) {
  if (!header || !navToggle) {
    return;
  }

  header.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", (event) => {
  if (!header || !navMenu || !navToggle) {
    return;
  }

  if (!header.contains(event.target)) {
    setMenuState(false);
  }
});

growthForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(growthForm);
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const studioType = formData.get("studio_type")?.toString().trim() || "";
  const stage = formData.get("stage")?.toString().trim() || "";
  const bottleneck = formData.get("bottleneck")?.toString().trim() || "";

  const subject = `Growth Audit Request - ${name || "New enquiry"}`;
  const body = [
    "Growth Audit Request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Studio type: ${studioType}`,
    `Current stage: ${stage}`,
    "",
    "Biggest growth bottleneck:",
    bottleneck,
  ].join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (formStatus) {
    formStatus.textContent = "Your email app should open with the enquiry details prefilled.";
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

applyCtaTargets();

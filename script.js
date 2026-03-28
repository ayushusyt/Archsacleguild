const BOOKING_URL = "";
const CONTACT_EMAIL = "hello@archscaleguild.com";

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
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

function getFieldError(field) {
  if (!growthForm) {
    return null;
  }

  return growthForm.querySelector(`[data-error-for="${field.name}"]`);
}

function clearFieldError(field) {
  field.removeAttribute("aria-invalid");
  const error = getFieldError(field);
  if (error) {
    error.textContent = "";
  }
}

function setFieldError(field, message) {
  field.setAttribute("aria-invalid", "true");
  const error = getFieldError(field);
  if (error) {
    error.textContent = message;
  }
}

function validateField(field) {
  const rawValue = field.value || "";
  const value = rawValue.toString().trim();

  if (!value) {
    return `Please add ${field.dataset.label || "this field"}.`;
  }

  if (field.type === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid work email.";
    }
  }

  return "";
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", (event) => {
  if (!header || !navToggle) {
    return;
  }

  if (!header.contains(event.target)) {
    setMenuState(false);
  }
});

if (growthForm) {
  const formFields = Array.from(growthForm.querySelectorAll("input, select, textarea"));

  formFields.forEach((field) => {
    field.addEventListener("input", () => clearFieldError(field));
    field.addEventListener("change", () => clearFieldError(field));
  });

  growthForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    formFields.forEach((field) => {
      clearFieldError(field);
      const errorMessage = validateField(field);

      if (errorMessage) {
        setFieldError(field, errorMessage);
        hasError = true;
      }
    });

    if (hasError) {
      formStatus.textContent = "Please review the highlighted fields and try again.";
      return;
    }

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
    formStatus.textContent = "Your email app should open with the enquiry details prefilled.";
  });
}

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
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

applyCtaTargets();

const copyBtn = document.getElementById("copy-email");
const copyLabel = copyBtn.querySelector("span");

copyBtn.addEventListener("click", async () => {
  const email = document.getElementById("email-text").textContent.trim();

  try {
    await navigator.clipboard.writeText(email);
  } catch (_) {
    const ta = document.createElement("textarea");
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  copyBtn.classList.add("copied");
  copyLabel.textContent = "Copiado!";
  setTimeout(() => {
    copyBtn.classList.remove("copied");
    copyLabel.textContent = "Copiar";
  }, 2000);
});

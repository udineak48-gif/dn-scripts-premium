const btn = document.getElementById("copyBtn");
const codeText = document.getElementById("codeText");
const hint = document.getElementById("copyHint");

btn.addEventListener("click", async () => {
  const text = codeText.innerText;

  try {
    await navigator.clipboard.writeText(text);
    hint.textContent = "✅ Copied!";
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    hint.textContent = "✅ Copied (fallback)!";
  }

  setTimeout(() => hint.textContent = "", 1500);
});
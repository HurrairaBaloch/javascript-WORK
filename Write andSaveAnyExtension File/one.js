const textarea = document.getElementById("textarea");
const input = document.getElementById("input");
const select = document.getElementById("select");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: select.value });

  const fileurl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = input.value;
  link.href = fileurl;
  link.click();
});

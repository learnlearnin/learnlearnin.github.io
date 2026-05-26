import QRCode from "https://esm.sh/qrcode@1.5.1";
const canvas = document.getElementById("qr-canvas");
const text = document.getElementById("qr-input");
const image = document.getElementById("qr-image");
canvas.style.display = "none";
image.style.display = "none";
const DEFAULT = "https://learnlearn.in/tools/qr/";
text.defaultValue = DEFAULT;
text.value = DEFAULT;
const parent = document.querySelector("article");
function getContentWidth(element) {
  let widthWithPaddings = element.clientWidth;
  const elementComputedStyle = window.getComputedStyle(element, null);
  return (
    widthWithPaddings -
    parseFloat(elementComputedStyle.paddingLeft) -
    parseFloat(elementComputedStyle.paddingRight)
  );
}
function write(text) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.font = "48px serif";
  ctx.fillText(text, 10, 50);
}
const create = (text) => {
  image.style.display = "none";
  const width = getContentWidth(parent);
  QRCode.toCanvas(
    canvas,
    text,
    {
      width,
    },
    function (error) {
      if (error) {
        console.error(error);
        write(error);
      }
      image.src = canvas.toDataURL("image/png");
      image.style.display = "block";
    },
  );
};

create(DEFAULT);
text.addEventListener("input", () => create(text.value));
text.addEventListener("change", () => create(text.value));
const resizeObserver = new ResizeObserver(() => {
  create(text.value);
});
resizeObserver.observe(parent);
download.addEventList;

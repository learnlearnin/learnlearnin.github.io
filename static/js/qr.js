import QRCode from "https://esm.sh/qrcode@1.5.1";
const canvas = document.getElementById("qr-canvas");
const text = document.getElementById("qr-input");
const DEFAULT = "https://learnlearn.in/qr/";
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
const create = (text) => {
  const width = getContentWidth(parent);
  console.log(width);
  QRCode.toCanvas(
    canvas,
    text,
    {
      width,
    },
    function (error) {
      if (error) console.error(error);
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

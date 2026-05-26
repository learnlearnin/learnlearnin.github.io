import QRCode from "https://esm.sh/qrcode@1.5.1";

const canvas = document.getElementById("qr-canvas");
const text = document.getElementById("qr-input");
const image = document.getElementById("qr-image");
const wifiAp = document.getElementById("wifi-ap");
const wifiPass = document.getElementById("wifi-pass");
const regularSwitch = document.getElementById("regular");
const wifiSwitch = document.getElementById("wifi");
const wifiSection = document.getElementById("wifi-section");

const hide = (...nodes) => {
  nodes.forEach((n) => (n.style.display = "none"));
};

const show = (...nodes) => {
  nodes.forEach((n) => (n.style.display = "revert"));
};

const getMode = () => {
  if (regularSwitch.checked) return "regular";
  if (wifiSwitch.checked) return "wifi";
};

let mode = getMode();

const repaint = () => {
  mode = getMode();
  switch (mode) {
    case "regular":
      hide(wifiSection);
      show(text);
      break;
    case "wifi":
      hide(text);
      show(wifiSection);
      break;
  }
};

hide(canvas);
repaint();

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
  hide(image);
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
      show(image);
    },
  );
};

const escape = (
  string,
  charsToEscape = ["\\", ";", ",", '"', ":"],
  escapeChar = "\\",
) => {
  let escaped = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charsToEscape.includes(char)) {
      escaped = escaped + "\\" + char;
    } else {
      escaped = escaped + char;
    }
  }
  return escaped;
};

const update = () => {
  switch (mode) {
    case "regular":
      create(text.value);
      break;
    case "wifi":
      const ssid = escape(wifiAp.value);
      const pass = escape(wifiPass.value);
      create(`WIFI:T:WPA;S:${ssid};P:${pass};;`);
      break;
  }
};

update();

text.addEventListener("input", update);
text.addEventListener("change", update);
wifiAp.addEventListener("input", update);
wifiAp.addEventListener("change", update);
wifiPass.addEventListener("input", update);
wifiPass.addEventListener("change", update);
regular.addEventListener("change", repaint);
wifi.addEventListener("change", repaint);
const resizeObserver = new ResizeObserver(() => {
  update();
});
resizeObserver.observe(parent);

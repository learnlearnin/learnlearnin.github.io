import QRCode from "https://esm.sh/qrcode@1.5.1";

const $ = (selector) => document.querySelector(selector);
const display =
  (value) =>
  (...nodes) =>
    nodes.forEach((n) => (n.style.display = value));
const hide = display("none");
const show = display("revert");

const canvas = $("#qr-canvas");
const text = $("#qr-input");
const image = $("#qr-image");
const wifiAp = $("#wifi-ap");
const wifiPass = $("#wifi-pass");
const regularSwitch = $("#regular");
const wifiSwitch = $("#wifi");
const wifiSection = $("#wifi-section");

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
text.value = DEFAULT;

const DEFAULT_AP = "My WiFi";
const DEFAULT_PASSWORD = "My Secret Password";
wifiAp.value = DEFAULT_AP;
wifiPass.value = DEFAULT_PASSWORD;

const parent = $("article");

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
      if (ssid === "") {
        create("");
      } else {
        create(`WIFI:T:WPA;S:${ssid};P:${pass};;`);
      }
      break;
  }
};

update();

const inputHandler = (fn, ...inputs) => {
  inputs.forEach((i) => {
    i.addEventListener("input", fn);
    i.addEventListener("change", fn);
  });
};

inputHandler(update, text, wifiAp, wifiPass);
inputHandler(repaint, regular, wifi);

const resizeObserver = new ResizeObserver(() => {
  update();
});
resizeObserver.observe(parent);

+++
title = 'QR code generator'
description = 'QR codes'
js = ['qr']
aliases = ['/qr/']
+++

<fieldset>
  <legend>Select the kind of QR code:</legend>

  <div>
    <input type="radio" id="regular" name="type" value="regular" checked />
    <label for="regular">Regular</label>
  </div>

  <div>
    <input type="radio" id="wifi" name="type" value="wifi" />
    <label for="wifi">WiFi</label>
  </div>
</fieldset>

<textarea id="qr-input" type="text" style="width: 100%"></textarea>
<div id="wifi-section">
<label for="wifi-ap">Access Point: </label><input id="wifi-ap" type="text">
<label for="wifi-pass">Password: </label><input id="wifi-pass" type="text">
</div>

<canvas id="qr-canvas"></canvas>

<img id="qr-image" />

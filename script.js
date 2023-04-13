"use strict";

const videoEl = document.getElementById("video");
const btn = document.getElementById("btn");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    // Catch Eror Here
    console.log(`whoops, error here:`, error);
  }
}

// BTN EVENT LISTENER
btn.addEventListener("click", async () => {
  // Disable btn
  btn.disabled = true;
  // Start Picture in Picture
  await videoEl.requestPictureInPicture();
  // Reset btn
  btn.disabled = false;
});

// ON LOAD
selectMediaStream();

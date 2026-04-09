var typed = new Typed((".skills"),{
    strings : ["Engineer In The Making","Web Development","Undergraduate"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})
 window.addEventListener("DOMContentLoaded", () => {

  const text = "Welcome to Anushka Sinha's portfolio. I am a web developer passionate about creating amazing projects.";

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  function speakNow() {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }

  // Try immediately after small delay
  setTimeout(speakNow, 500);

  // If blocked, trigger when tab becomes active
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      speakNow();
    }
  });

  // Trigger when window gains focus (no click needed)
  window.addEventListener("focus", speakNow);

});

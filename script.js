var typed = new Typed((".skills"),{
    strings : ["Engineer In The Making","Web Development","Undergraduate"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})
 window.addEventListener("load", () => {

    const text = "Welcome to Anushka Sinha's portfolio. I am a web developer passionate about creating amazing projects.";

    const speech = new SpeechSynthesisUtterance(text);

    // Voice settings
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    function speakNow() {
      window.speechSynthesis.cancel(); // stop any previous speech
      window.speechSynthesis.speak(speech);
    }

    // Try autoplay
    speakNow();

    // Fallback (if autoplay blocked)
    document.addEventListener("click", speakNow, { once: true });

  });

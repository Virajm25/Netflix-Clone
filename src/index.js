
function toggleAccordion(e) {
  const title = e.target.closest(".FAQ__title");
  if (!title) return;

  const icon = title.querySelector("i");
  if (!icon) return;

  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-times");

  const content = title.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
document.querySelector(".FAQ__list").addEventListener("click", toggleAccordion);

const translations = {
  hi: {
    "h-1": "Netflix भारत - टीवी शो और फ़िल्में ऑनलाइन देखें",
    "s-1": "साइन इन करें",
    "hero-title": "अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ।",
    "hero-subtitle": "₹149 से शुरू. कभी भी रद्द करें।",
    "hero-description": "देखने के लिए तैयार हैं? अपना ईमेल डालें और शुरू करें।",
    "email-1": "ईमेल एड्रेस",
    "get-started-button": "शुरू करें",
    "trending-title": "ट्रेंडिंग नाव",
    "feature1-title": "अपने टीवी पर आनंद लें।",
    "feature1-subtitle": "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV और बहुत कुछ पर देखें।",
    "feature2-title": "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें।",
    "feature2-subtitle": "अपने पसंदीदा आसानी से सहेजें और हमेशा कुछ न कुछ देखें।",
    "feature3-title": "हर जगह देखें।",
    "feature3-subtitle": "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फिल्में और शो स्ट्रीम करें।",
    "feature4-title": "बच्चों के लिए प्रोफाइल बनाएं।",
    "feature4-subtitle": "बच्चों को उनके पसंदीदा किरदारों के साथ रोमांच पर भेजें।",
    "faq-head": "अक्सर पूछे जाने वाले सवाल",
    "faq-q1": "Netflix क्या है?",
    "faq-q2": "Netflix की कीमत कितनी है?",
    "faq-q3": "मैं कहां देख सकता हूं?",
    "faq-q4": "मैं कैसे रद्द करूं?",
    "faq-q5": "Netflix पर मैं क्या देख सकता हूं?",
    "faq-q6": "क्या Netflix बच्चों के लिए अच्छा है?",
    "faq-a1-1": "Netflix एक स्ट्रीमिंग सेवा है जो टीवी शो, फिल्में, एनीमे और बहुत कुछ प्रदान करती है।",
    "faq-a1-2": "आप जब चाहें जितना चाहें देख सकते हैं, बिना किसी विज्ञापन के। हर हफ्ते नए शो और फिल्में जुड़ती हैं।",
    "faq-a2-1": "Netflix को स्मार्टफोन, टैबलेट, टीवी या लैपटॉप पर मासिक शुल्क पर देखा जा सकता है। कोई अतिरिक्त शुल्क नहीं।",
    "faq-a3-1": "Netflix को किसी भी डिवाइस पर कभी भी देखा जा सकता है। बस साइन इन करें और शुरू करें।",
    "faq-a3-2": "आप डाउनलोड करके ऑफलाइन भी देख सकते हैं।",
    "faq-a4-1": "Netflix को किसी भी समय रद्द किया जा सकता है, कोई अनुबंध या शुल्क नहीं।",
    "faq-a5-1": "Netflix की लाइब्रेरी में फिल्में, टीवी शो, डॉक्युमेंट्री, और Netflix Originals शामिल हैं।",
    "faq-a6-1": "Netflix Kids बच्चों के लिए सुरक्षित और मज़ेदार अनुभव प्रदान करता है।",
    "faq-a6-2": "आप कंटेंट को नियंत्रित कर सकते हैं और विशिष्ट टाइटल को ब्लॉक कर सकते हैं।",
    "f-1-text": "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
    "e-2": "ईमेल एड्रेस",
    "start-2": "शुरू करें"
  },
  en: {
    "h-1": "Netflix India – Watch TV Shows Online, Watch Movies Online",
    "s-1": "Sign In",
    "hero-title": "Unlimited Movies , TV Shows and More.",
    "hero-subtitle": "Starts at ₹149. Cancel at any time.",
    "hero-description": "Ready to watch? Enter your email to create or restart your membership.",
    "email-1": "Email address",
    "get-started-button": "Get Started",
    "trending-title": "Trending Now",
    "feature1-title": "Enjoy on your TV.",
    "feature1-subtitle": "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    "feature2-title": "Download your shows to watch offline.",
    "feature2-subtitle": "Save your favourites easily and always have something to watch.",
    "feature3-title": "Watch everywhere.",
    "feature3-subtitle": "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    "feature4-title": "Create profiles for children.",
    "feature4-subtitle": "Send children on adventures with their favourite characters in a space made just for them.",
    "faq-head": "Frequently Asked Questions",
    "faq-q1": "What is Netflix?",
    "faq-q2": "How much does Netflix cost?",
    "faq-q3": "Where can I watch?",
    "faq-q4": "How do I cancel?",
    "faq-q5": "What can I watch from Netflix?",
    "faq-q6": "Is Netflix good for kids?",
    "faq-a1-1": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    "faq-a1-2": "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    "faq-a2-1": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
    "faq-a3-1": "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    "faq-a3-2": "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    "faq-a4-1": "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "faq-a5-1": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    "faq-a6-1": "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    "faq-a6-2": "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    "f-1-text": "Ready to watch? Enter your email to create or restart your membership.",
    "e-2": "Email address",
    "start-2": "Get Started"
  }
};

function applyTranslations(lang) {
  const map = translations[lang];
  for (const id in map) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "BUTTON" && el.querySelector("i")) {
        const icon = el.querySelector("i");
        const iconClass = icon ? icon.className : "fal fa-plus";
        el.innerHTML = `${map[id]} <i class="${iconClass}"></i>`;
      } else {
        el.innerText = map[id];
      }
    }
  }
}

function updateLinks(lang) {
  const signinBtn = document.getElementById("s-1");
  const signinLink = document.getElementById("signin-link");
  const topBtn = document.getElementById("get-started-button");
  const bottomBtn = document.getElementById("start-2");

  const loginURL = lang === "hi"
    ? "https://www.netflix.com/in-hi/login"
    : "https://www.netflix.com/in/login";

  const signupURL = lang === "hi"
    ? "https://www.netflix.com/signup/registration?locale=hi-IN"
    : "https://www.netflix.com/signup/registration?locale=en-IN";

  if (signinBtn) signinBtn.innerText = translations[lang]["s-1"];
  if (signinLink) signinLink.href = loginURL;
  if (topBtn) topBtn.onclick = () => window.location.href = signupURL;
  if (bottomBtn) bottomBtn.onclick = () => window.location.href = signupURL;
}

const langSelect = document.getElementById("languagesSelect");

langSelect.addEventListener("change", function () {
  const lang = this.value === "hi" || this.value === "hindi" ? "hi" : "en";
  localStorage.setItem("preferredLang", lang);
  applyTranslations(lang);
  updateLinks(lang);
});

const savedLang = localStorage.getItem("preferredLang");
const initialLang = savedLang || (langSelect.value === "hi" || langSelect.value === "hindi" ? "hi" : "en");

langSelect.value = initialLang;
applyTranslations(initialLang);
updateLinks(initialLang);

function showTrailer(videoId) {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerIframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.remove("hidden");
}

function closeTrailer() {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerIframe");
  iframe.src = "";
  modal.classList.add("hidden");
}

window.showTrailer = showTrailer;
window.closeTrailer = closeTrailer;

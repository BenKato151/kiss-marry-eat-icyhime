// Lista de personajes / Character List
const characters = [

  { name: "Aki", images: ["kiss_marry_eat/Ak3n4ri/Aki-1.jpg"] },
  { name: "Chirokoon👽🦝", images: [
    "kiss_marry_eat/Chirokoon/Chirokoon👽🦝-1.jpg",
    "kiss_marry_eat/Chirokoon/Chirokoon👽🦝-2.jpg"
  ]},
  { name: "Ciella the cutie potati   Dokomi 2027", images: ["kiss_marry_eat/CiellaVT/Ciella the cutie potati _ Dokomi 2027-1.jpg"] },
  { name: "DaisyMelfea ✨ Elf Vtuber 🍃", images: ["kiss_marry_eat/DaisyMelfea/DaisyMelfea ✨ Elf Vtuber 🍃-1.jpg"] },
  { name: "Einerwie", images: ["kiss_marry_eat/Einerwie_LP/Einerwie-1.jpg"] },
  { name: "Frau Ente", images: [
    "kiss_marry_eat/Frau_Ente_VT/Frau_Ente-1.jpg",
    "kiss_marry_eat/Frau_Ente_VT/Frau_Ente-2.jpg"
  ]},
  { name: "Gomnir vt   collabs closed", images: ["kiss_marry_eat/Gomnir_vt/Gomnir_vt _ collabs closed-1.jpg"] },
  { name: "Hanae ⏻ 🌐14.11 BIRTHDAY STREAM", images: [
    "kiss_marry_eat/HanaeVT/Hanae ⏻ 🌐14.11 BIRTHDAY STREAM-1.jpg",
    "kiss_marry_eat/HanaeVT/Hanae ⏻ 🌐14.11 BIRTHDAY STREAM-2.jpg"
  ]},
  { name: "Himechii   Subathon 29.11. 🦋", images: [
    "kiss_marry_eat/HimechiiVT/Himechii _ Subathon 29.11. 🦋-1.jpg",
    "kiss_marry_eat/HimechiiVT/Himechii _ Subathon 29.11. 🦋-2.jpg"
  ]},
  { name: "Hoshizuki 🦊⛩️   🏳️‍⚧️ (Un-)Heilige Allianz", images: ["kiss_marry_eat/HoshizukiVT/Hoshizuki 🦊⛩️ _ 🏳️‍⚧️ (Un-)Heilige Allianz-1.jpg"] },
  { name: "IceRuneKnight", images: ["kiss_marry_eat/IceRuneKnight/IceRuneKnight-1.jpg"] },
  { name: "IcyHime   GER Spider Vtuber  🕸️❄️", images: ["kiss_marry_eat/Icylia_Webster/IcyHime _ GER Spider Vtuber _🕸️❄️-1.jpg"] },
  { name: "Ignitris - Feuerbär-Vtuber   PRIIIIIIIIDE", images: [
    "kiss_marry_eat/IgnitrisVt/Ignitris - Feuerbär-Vtuber _ PRIIIIIIIIDE-1.jpg",
    "kiss_marry_eat/IgnitrisVt/Ignitris - Feuerbär-Vtuber _ PRIIIIIIIIDE-2.jpg"
  ]},
  { name: "JesterVT", images: [
    "kiss_marry_eat/JesterVT_/JesterVT-1.jpg",
    "kiss_marry_eat/JesterVT_/JesterVT-2.jpg"
  ]},
  { name: "Jodaiku 💜 🔥⛓️", images: [
    "kiss_marry_eat/Jodaiku/Jodaiku 💜 🔥⛓️-1.jpg",
    "kiss_marry_eat/Jodaiku/Jodaiku 💜 🔥⛓️-2.jpg"
  ]},
  { name: "JustAzuu 🦦🌊", images: [
    "kiss_marry_eat/JustAzuuVT/JustAzuu 🦦🌊-1.jpg",
    "kiss_marry_eat/JustAzuuVT/JustAzuu 🦦🌊-2.jpg",
    "kiss_marry_eat/JustAzuuVT/JustAzuu 🦦🌊-3.jpg"
  ]},
  { name: "K4Lonk   VTuber   Soulsync   ComicConStuttgart26", images: ["kiss_marry_eat/K4Lonk_/K4Lonk _ VTuber _ Soulsync _ ComicConStuttgart26-1.jpg"] },
  { name: "Kazu 🌺", images: ["kiss_marry_eat/KazumiHideko/Kazu 🌺-1.jpg"] },
  { name: "Klinday ~ 🐺🪓-Vtuber", images: [
    "kiss_marry_eat/Klinday_/Klinday ~ 🐺🪓-Vtuber-1.jpg",
    "kiss_marry_eat/Klinday_/Klinday ~ 🐺🪓-Vtuber-2.jpg",
    "kiss_marry_eat/Klinday_/Klinday ~ 🐺🪓-Vtuber-3.png"
  ]},
  { name: "Marry 🌹 GERVtuberin I Redebut 04.11.", images: [
    "kiss_marry_eat/MarryofBlood/Marry 🌹 GERVtuberin I Redebut 04.11.-1.jpg",
    "kiss_marry_eat/MarryofBlood/Marry 🌹 GERVtuberin I Redebut 04.11.-2.jpg"
  ]},
  { name: "🍰 NagiNova ☕   Latex Maid VTuber   Club Maid Zone", images: [
    "kiss_marry_eat/NagiNovaNya/🍰 NagiNova ☕ _ Latex Maid VTuber _ Club Maid Zone-1.jpg",
    "kiss_marry_eat/NagiNovaNya/🍰 NagiNova ☕ _ Latex Maid VTuber _ Club Maid Zone-2.jpg"
  ]},
  { name: "NessaNoCho🖤💙", images: [
    "kiss_marry_eat/NessaNoCho/NessaNoCho🖤💙-1.jpg",
    "kiss_marry_eat/NessaNoCho/NessaNoCho🖤💙-2.jpg"
  ]},
  { name: "NezuAwoo   VTuber   Gym", images: [
    "kiss_marry_eat/NezuAwoo/NezuAwoo _ VTuber _ Gym-1.jpg",
    "kiss_marry_eat/NezuAwoo/NezuAwoo _ VTuber _ Gym-2.jpg",
    "kiss_marry_eat/NezuAwoo/NezuAwoo _ VTuber _ Gym-3.jpg",
    "kiss_marry_eat/NezuAwoo/NezuAwoo _ VTuber _ Gym-4.jpg"
  ]},
  { name: "Obergeneral Stinky   VTuber & Cutter", images: ["kiss_marry_eat/OberGen_Stinky/Obergeneral Stinky _ VTuber & Cutter-1.jpg"] },
  { name: "Raito 🔥🪽 Polaris 2026 🫰🏻", images: [
    "kiss_marry_eat/RaitoNoAniki/Raito 🔥🪽 Polaris 2026 🫰🏻-1.jpg",
    "kiss_marry_eat/RaitoNoAniki/Raito 🔥🪽 Polaris 2026 🫰🏻-2.jpg"
  ]},
  { name: "Rena 🍀🐛  ARTIST   Everybody's Darling", images: [
    "kiss_marry_eat/RenaCloverfield/Rena 🍀🐛_ ARTIST _ Everybody's Darling-1.jpg",
    "kiss_marry_eat/RenaCloverfield/Rena 🍀🐛_ ARTIST _ Everybody's Darling-2.jpg"
  ]},
  { name: "ShadowLorn 🐲🎲📽GerPNGTuber", images: ["kiss_marry_eat/ShadowLorn1/ShadowLorn 🐲🎲📽GerPNGTuber-1.jpg"] },
  { name: "Raya 🐲📖  wurmdrago", images: [
    "kiss_marry_eat/SorayaLinx/Raya 🐲📖_ wurmdrago _-1.jpg",
    "kiss_marry_eat/SorayaLinx/Raya 🐲📖_ wurmdrago _-2.jpg"
  ]},
  { name: "SpiritoftheWolfs👻🐺 GerVTuber ✨03.04 AniMuc", images: ["kiss_marry_eat/SpiritoftheWo1f/SpiritoftheWolfs👻🐺 GerVTuber ✨03.04 AniMuc-1.jpg"] },
  { name: "TimoTamun   GERVtuber ⚡🦅", images: [
    "kiss_marry_eat/TimotamunVT/TimoTamun _ GERVtuber ⚡🦅-1.jpg",
    "kiss_marry_eat/TimotamunVT/TimoTamun _ GERVtuber ⚡🦅-2.jpg"
  ]},
  { name: "Viktorija❄️🦊   🏳️‍⚧️ (Un-)Heilige Allianz", images: [
    "kiss_marry_eat/VictorijaVT/Viktorija❄️🦊 _ 🏳️‍⚧️ (Un-)Heilige Allianz-1.jpg",
    "kiss_marry_eat/VictorijaVT/Viktorija❄️🦊 _ 🏳️‍⚧️ (Un-)Heilige Allianz-2.jpg",
    "kiss_marry_eat/VictorijaVT/Viktorija❄️🦊 _ 🏳️‍⚧️ (Un-)Heilige Allianz-3.jpg",
    "kiss_marry_eat/VictorijaVT/Viktorija❄️🦊 _ 🏳️‍⚧️ (Un-)Heilige Allianz-4.jpg"
  ]},
  { name: "Waschmaschinenmann", images: ["kiss_marry_eat/WaschiOkay/Waschmaschinenmann-1.jpg"] },
  { name: "Yusaki 🦄🪽  YuMii   #ALightForPaws •´¨ •.¸¸.εïз", images: ["kiss_marry_eat/YusakiKirin/Yusaki 🦄🪽_ YuMii _ #ALightForPaws •´¨_•.¸¸.εïз-1.jpg"] },
  { name: "Blizzchaq🦎🗺️", images: ["kiss_marry_eat/blizzchaq/Blizzchaq🦎🗺️-1.jpg"] },
  { name: "𓄼Azuriel↝", images: ["kiss_marry_eat/einAzuriel/𓄼Azuriel↝-1.jpg"] },
  { name: "Ravora 🍓🍃", images: [
    "kiss_marry_eat/itsRavora/Ravora 🍓🍃-1.jpg",
    "kiss_marry_eat/itsRavora/Ravora 🍓🍃-2.jpg"
  ]},
  { name: "Kayaba sama   GERVtuber   Debut soon", images: [
    "kiss_marry_eat/kayaba_sama/Kayaba_sama _ GERVtuber _ Debut soon-1.jpg",
    "kiss_marry_eat/kayaba_sama/Kayaba_sama _ GERVtuber _ Debut soon-2.jpg"
  ]},
  { name: "Kerberusz (rocamiel), not an artist", images: ["kiss_marry_eat/kerberusz/Kerberusz (rocamiel), not an artist-1.jpg"] },
  { name: "MONIIKA    💸🐖 VTUBER", images: [
    "kiss_marry_eat/moniika_vt/MONIIKA __ 💸🐖 VTUBER-1.jpg",
    "kiss_marry_eat/moniika_vt/MONIIKA __ 💸🐖 VTUBER-2.jpg"
  ]},
  { name: "Sir Reap", images: [
    "kiss_marry_eat/reap_sir/Sir Reap-1.jpg",
    "kiss_marry_eat/reap_sir/Sir Reap-2.jpg"
  ]},
  { name: "Riyucca   🦦🐉 Drotter GERVtuber", images: ["kiss_marry_eat/riyucca_ttv/Riyucca _ 🦦🐉 Drotter GERVtuber-1.jpg"] },
  { name: "Roter Drache", images: ["kiss_marry_eat/roterdrache611/Roter Drache-1.jpg"] }
]

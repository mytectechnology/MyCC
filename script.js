

// Debug Variables

var version = 1.001

// Variable declaration for use throughout the game
var bitcoin = 0;
var keyboards = 1;
var keyboardPrice = 75;
var bots = 0;
var botPrice = 200;
var tier2botPrice = 700;
var tier2bots = 0;
var tier3bots = 0;
var tier3botPrice = 2000;
var tier4bots = 0;
var tier4botPrice = 10000;
var tier5bots = 0;
var tier5botPrice = 50000;
var tier6bots = 0;
var tier6botPrice = 300000;
var tier7bots = 0;
var tier7botPrice = 700000;
var botAmount = 1;
var bot2Amount = 2;
var bot3Amount = 4;
var bot5Amount = 2;
var bot6Amount = 100;
var cps = 0;
var autoclickers = 0;
var dogecoinBots = 0;
var dogecoinBotPrice = 1000000;
var clickerPrice = 10;
var clickerCps = 0.0;
var click = new Audio("/assets/click.mp3");
var soundMuted = false;

// Load data if data exists.
window.onload = function() {
  if (localStorage.hasOwnProperty("saveObj")) {
    load();
  }
  else {
    alert("Merhaba! Yeni olmalısın, Bu oyun oldukça basit, sadece para resmine tıklıyorsun ve 1 MyCC alıyorsun. Şanslısın! oyuna ücretsiz bir klavye ile başladın... [Kazmak için klavyedeki alfanümerik(Türkçe Karakterler Hariç; a-z, 0-9) herhangi bir karakter ve Enter'a  basabilirsiniz]       Yapımcı: mye_1453");
  } 
  console.log(`MyCC - Online Clicker Oyunu v${version.toFixed(3)}`);
}
 
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 	13 || event.keyCode === 	47 || event.keyCode === 	48 || event.keyCode === 	49 ||event.keyCode === 	50 || event.keyCode === 	51 ||event.keyCode === 	52 || event.keyCode === 	53 ||event.keyCode === 	54 || event.keyCode === 	55 || event.keyCode === 	56 || event.keyCode === 	57 ||event.keyCode === 	65 || event.keyCode === 	65 ||event.keyCode === 	66 || event.keyCode === 	67 || event.keyCode === 	68 || event.keyCode === 	69 || event.keyCode === 	70 || event.keyCode === 	71 || event.keyCode === 	72 || event.keyCode === 	73 || event.keyCode === 	74 || event.keyCode === 	75 || event.keyCode === 	76 || event.keyCode === 	77 || event.keyCode === 	78 || event.keyCode === 	79 || event.keyCode === 	80 || event.keyCode === 	81 || event.keyCode === 	82 || event.keyCode === 	83 || event.keyCode === 	84 || event.keyCode === 	85 || event.keyCode === 	86 || event.keyCode === 	87 || event.keyCode === 	88 || event.keyCode === 	89 || event.keyCode === 	90 ) {
        crypMine();
    }
});

// Function to mute the sound, and unmute, chosen programatically.
function soundMute() {
  if (soundMuted == false) {
    soundMuted = true;
  }
  else {
    soundMuted = false;
  }
  
  if (soundMuted == true) {
    document.getElementById("muteSound").innerHTML = "Sesi Aç";
  }
  else {
    document.getElementById("muteSound").innerHTML = "Sesi Kapat";
  }
}

// The basic mining function, the so called "skeleton" of the game, may see updates as more is added.

// Added audio, which is only played in this function, not when a bot mines (you're welcome)
function crypMine() {
  bitcoin += 1*keyboards;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
  if (soundMuted == false) {
    click.pause();
    click.currentTime = 0;
    click.play();
  }
  else {
    return;
  }
}

// Function used by bots.
function autoMineBot() {
  bitcoin += botAmount;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMine() {
  bitcoin += (clickerCps);
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMineTier2() {
  bitcoin += bot2Amount;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMineTier3() {
  bitcoin += bot3Amount;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMineTier4() {
  bitcoin += (keyboards * tier4bots);
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMineTier5() {
  bitcoin += bot5Amount;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMineTier6() {
  bitcoin += bot6Amount;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function autoMineTier7() {
  bitcoin += ((keyboards+10) * tier7bots);
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function dogecoinMine() {
  var ranBtc = Math.floor(Math.random() * 100000 + 1);
  bitcoin += ranBtc;
  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
}

function startAlert() {
  alert("MyCC'ye hoşgeldin... Paraya tıklayarak 1 MyCC kazanmış olursun. Daha fazla bilgi için [Tamam] tuşuna tıkla!");
  alert("Yaklaşık 10 MyCC'niz olduğunda, bir bot satın alabilirsiniz, bunlar son derece yavaştır, sadece her 10 saniyede bir kazar, ancak yakında daha fazla yükseltme satın almanıza izin veren biraz hızlı bir şekilde birikir.");
  alert("Sonra da Klavyeler! Klavye satın alarak hızı çok daha arttırabilir, süper bir güce dönüşebilirsiniz! ")
}

// Keyboard purchasing function, may end up putting all purchase functions into one using objects
function buyKeyboard() {
  if (bitcoin >= keyboardPrice) {
    bitcoin -= keyboardPrice;
    keyboards += 1;
    clickerCps = clickerCps * 2;
    keyboardPrice = (keyboardPrice*4.6);
    document.getElementById("keyboardSpan").innerHTML = keyboards;
    document.getElementById("cpsSpan").innerHTML = (cps+clickerCps).toFixed(1);
    document.getElementById("keyboardPrice").innerHTML = Math.round(keyboardPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

// Bot buying function, blah blah blah
function buyBot() {
  if (bitcoin >= botPrice) {
    bitcoin -= botPrice;
    bots += 1;
    botPrice = (botPrice*1.14);
    document.getElementById("botSpan").innerHTML = bots;
    document.getElementById("botPrice").innerHTML = Math.round(botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

function buyBotUpgraded1() {
  if (bitcoin >= tier2botPrice) {
    bitcoin -= tier2botPrice;
    tier2bots += 1;
    tier2botPrice = (tier2botPrice*1.15);
    document.getElementById("tier2botSpan").innerHTML = tier2bots;
    document.getElementById("botUpgrade1Price").innerHTML = Math.round(tier2botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

function buyClicker() {
  if (bitcoin >= clickerPrice) {
    bitcoin -= clickerPrice;
    autoclickers += 1;
    clickerCps += 0.1;
    clickerPrice = (clickerPrice*1.1);
    document.getElementById("clickerSpan").innerHTML = autoclickers;
    document.getElementById("cpsSpan").innerHTML = (cps+clickerCps).toFixed(1);
    document.getElementById("clickerPrice").innerHTML = Math.round(clickerPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

function buyBotUpgraded2() {
  if (bitcoin >= tier3botPrice) {
    bitcoin -= tier3botPrice;
    tier3bots += 1;
    tier3botPrice = (tier3botPrice*1.16);
    document.getElementById("tier3botSpan").innerHTML = tier3bots;
    document.getElementById("tier3botPrice").innerHTML = Math.round(tier3botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

function buyBotUpgraded3() {
  if (bitcoin >= tier4botPrice) {
    bitcoin -= tier4botPrice;
    if (tier4bots < 1) {
      tier4bots += 1;
    }
    tier4bots += 1;
    tier4botPrice = (tier4botPrice*1.12);
    document.getElementById("tier4botSpan").innerHTML = tier4bots;
    document.getElementById("tier4botPrice").innerHTML = Math.round(tier4botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

function buyBotUpgraded4() {
  if (bitcoin >= tier5botPrice) {
    bitcoin -= tier5botPrice;
    tier5bots += 1;
    tier5botPrice = (tier5botPrice*1.14);
    document.getElementById("tier5botSpan").innerHTML = tier5bots;
    document.getElementById("tier5botPrice").innerHTML = Math.round(tier5botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = bitcoin;
  }
}

function buyBotUpgraded5() {
  if (bitcoin >= tier6botPrice) {
    bitcoin -= tier6botPrice;
    tier6bots += 1;
    tier6botPrice = (tier6botPrice*1.17);
    document.getElementById("tier6botSpan").innerHTML = tier6bots;
    document.getElementById("tier6botPrice").innerHTML = Math.round(tier6botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
  }
}

function buyBotUpgraded6() {
  if (bitcoin >= tier7botPrice) {
    bitcoin -= tier7botPrice;
    if (tier7bots < 1) {
      tier7bots += 1;
    }
    tier7bots += 1;
    tier7botPrice = (tier7botPrice*1.14);
    document.getElementById("tier7botSpan").innerHTML = tier7bots;
    document.getElementById("tier7botPrice").innerHTML = Math.round(tier7botPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
  }
}

function buyDogecoinBot() {
  if (bitcoin >= dogecoinBotPrice) {
    bitcoin -= dogecoinBotPrice;
    dogecoinBots += 1;
    dogecoinBotPrice = (dogecoinBotPrice*1.12);
    document.getElementById("dogeCoinBotSpan").innerHTML = dogecoinBots;
    document.getElementById("dogeCoinBotPrice").innerHTML = Math.round(dogecoinBotPrice);
    bitcoin = Math.round(bitcoin);
    document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
  }
}

// Save function, will see many updates as upgrades are added.
function save() {
  var saveObj = {
    bitcoin: bitcoin,
    keyboards: keyboards,
    keyboardPrice: keyboardPrice,
    bots: bots,
    botPrice: botPrice,
    tier2botPrice: tier2botPrice,
    tier2bots: tier2bots,
    tier3bots: tier3bots,
    tier3botPrice: tier3botPrice,
    tier4bots: tier4bots,
    tier4botPrice: tier4botPrice,
    tier5bots: tier5bots,
    tier5botPrice: tier5botPrice,
    tier6bots: tier6bots,
    tier6botPrice: tier6botPrice,
    tier7bots: tier7bots,
    tier7botPrice: tier7botPrice,
    botAmount: botAmount,
    bot2Amount: bot2Amount,
    bot3Amount: bot3Amount,
    bot5Amount: bot5Amount,
    bot6Amount: bot6Amount,
    cps: cps,
    autoclickers: autoclickers,
    dogecoinBots: dogecoinBots,
    dogecoinBotPrice: dogecoinBotPrice,
    clickerPrice: clickerPrice,
    clickerCps: clickerCps
  }

  localStorage.setItem("saveObj", JSON.stringify(saveObj));
}

// Load function, the vice versa of save.
function load() {
  var savegame = JSON.parse(localStorage.getItem("saveObj"));
  if (typeof savegame.bitcoin !== "undefined") bitcoin = Math.round(savegame.bitcoin);
  if (typeof savegame.keyboards !== "undefined") keyboards = savegame.keyboards;
  if (typeof savegame.keyboardPrice !== "undefined") keyboardPrice = savegame.keyboardPrice;
  if (typeof savegame.bots !== "undefined") bots = savegame.bots;
  if (typeof savegame.botPrice !== "undefined") botPrice = savegame.botPrice;
  if (typeof savegame.tier2botPrice !== "undefined") tier2botPrice = savegame.tier2botPrice;
  if (typeof savegame.tier2bots !== "undefined") tier2bots = savegame.tier2bots;
  if (typeof savegame.tier3bots !== "undefined") tier3bots = savegame.tier3bots;
  if (typeof savegame.tier3botPrice !== "undefined") tier3botPrice = savegame.tier3botPrice;
  if (typeof savegame.tier4bots !== "undefined") tier4bots = savegame.tier4bots;
  if (typeof savegame.tier4botPrice !== "undefined") tier4botPrice = savegame.tier4botPrice;
  if (typeof savegame.tier5bots !== "undefined") tier5bots = savegame.tier5bots;
  if (typeof savegame.tier5botPrice !== "undefined") tier5botPrice = savegame.tier5botPrice;
  if (typeof savegame.tier6bots !== "undefined") tier6bots = savegame.tier6bots;
  if (typeof savegame.tier6botPrice !== "undefined") tier6botPrice = savegame.tier6botPrice;
  if (typeof savegame.tier7bots !== "undefined") tier7bots = savegame.tier7bots;
  if (typeof savegame.tier7botPrice !== "undefined") tier7botPrice = savegame.tier7botPrice;
  if (typeof savegame.botAmount !== "undefined") botAmount = savegame.botAmount;
  if (typeof savegame.bot2Amount !== "undefined") bot2Amount = savegame.bot2Amount;
  if (typeof savegame.bot3Amount !== "undefined") bot3Amount = savegame.bot3Amount;
  if (typeof savegame.bot5Amount !== "undefined") bot5Amount = savegame.bot5Amount;
  if (typeof savegame.bot6Amount !== "undefined") bot6Amount = savegame.bot6Amount;
  if (typeof savegame.cps !== "undefined") cps = savegame.cps;
  if (typeof savegame.autoclickers !== "undefined") autoclickers = savegame.autoclickers;
  if (typeof savegame.dogecoinBots !== "undefined") dogecoinBots = savegame.dogecoinBots;
  if (typeof savegame.dogecoinBotPrice !== "undefined") dogecoinBotPrice = savegame.dogecoinBotPrice;
  if (typeof savegame.clickerPrice !== "undefined") clickerPrice = savegame.clickerPrice;
  if (typeof savegame.clickerCps !== "undefined") clickerCps = savegame.clickerCps;

  document.getElementById("bitcoinSpan").innerHTML = Math.round(bitcoin);
  document.getElementById("cpsSpan").innerHTML = (clickerCps+cps).toFixed(1);
  document.getElementById("keyboardSpan").innerHTML = keyboards;
  document.getElementById("clickerSpan").innerHTML = autoclickers;
  document.getElementById("keyboardPrice").innerHTML = keyboardPrice;
  document.getElementById("clickerPrice").innerHTML = clickerPrice;
  document.getElementById("botSpan").innerHTML = bots;
  document.getElementById("botPrice").innerHTML = botPrice;
  document.getElementById("tier2botSpan").innerHTML = tier2bots;
  document.getElementById("botUpgrade1Price").innerHTML = tier2botPrice;
  document.getElementById("tier3botSpan").innerHTML = tier3bots;
  document.getElementById("tier3botPrice").innerHTML = tier3botPrice;
  document.getElementById("tier4botSpan").innerHTML = tier4bots;
  document.getElementById("tier4botPrice").innerHTML = tier4botPrice;
  document.getElementById("tier5botSpan").innerHTML = tier5bots;
  document.getElementById("tier5botPrice").innerHTML = tier5botPrice;
  document.getElementById("tier6botSpan").innerHTML = tier6bots;
  document.getElementById("tier6botPrice").innerHTML = tier6botPrice;
  document.getElementById("tier7botSpan").innerHTML = tier7bots;
  document.getElementById("tier7botPrice").innerHTML = tier7botPrice;
  document.getElementById("dogeCoinBotSpan").innerHTML = dogecoinBots;
  document.getElementById("dogeCoinBotPrice").innerHTML = dogecoinBotPrice;
}

function reset() {
  if (window.confirm("Sıfırlamak istediğinize emin misiniz? Tüm veriler kaybedilecektir.")) {
    localStorage.clear();
    window.location.reload();
  }
}

// Bot function, runs every 10 seconds.

window.setInterval(function() {
  for (let i = 0; i < bots; i++) {
    autoMineBot();
  }
}, 2000);

// Tier 2 bots run every 3 seconds

window.setInterval(function() {
  for (let i = 0; i < tier2bots; i++) {
    autoMineTier2();
  }
}, 3000);

// Tier 3 "Cool" bots, much faster.

window.setInterval(function() {
  for (let i = 0; i < tier3bots; i++) {
    autoMineTier3();
  }
}, 500)

// Tier 4 "Linked" bots

window.setInterval(function() {
  for (let i = 0; i < tier4bots; i++) {
    autoMineTier4();
  }
}, 10000)

window.setInterval(function() {
  for (let i = 0; i < tier7bots; i++) {
    autoMineTier7();
  }
}, 4000)

// Autoclicker interval.
window.setInterval(function() {
  autoMine();
}, 1000)

// Tier 5 "Fast" bots

window.setInterval(function() {
  for (let i = 0; i < tier5bots; i++) {
    autoMineTier5();
  }

  for (let i = 0; i < tier6bots; i++) {
    autoMineTier6();
  }
}, 35)

window.setInterval(function() {
  for (let i = 0; i < dogecoinBots; i++) {
    dogecoinMine();
  }
}, 2000)

// Title update and autosave
window.setInterval(function() {
  document.title = `${Math.round(bitcoin)} MyCC!`;
  save();
  if (bitcoin >= 1000000 && botAmount == 1) {
    botAmount = 100;
    bot2Amount = 200;
    bot3Amount = 400;
    bot5Amount = 200;
    bot6Amount = 1000;
    alert("Vay be, Bill Gates'i Geçtin! Ödül olarak bazı botlarının yetenekleri arttırıldı.");
  }
}, 500);


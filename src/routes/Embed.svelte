<script>
  import { onMount } from "svelte";

  let jobs = [
    { name: "Küchenhilfe", req: 0, amt: [20, 30] },
    { name: "Kassierer", req: 5, amt: [30, 40] },
    { name: "Dönermann", req: 10, amt: [40, 50] },
    { name: "Elektroniker", req: 15, amt: [50, 60] },
    { name: "Pfleger", req: 20, amt: [60, 70] },
    { name: "Bäcker", req: 25, amt: [70, 80] },
    { name: "Bauarbeiter", req: 30, amt: [80, 90] },
    { name: "Gärtner", req: 35, amt: [90, 100] },
    { name: "Lehrer", req: 40, amt: [100, 120] },
    { name: "Koch", req: 45, amt: [120, 140] },
    { name: "Sanitäter", req: 50, amt: [140, 160] },
    { name: "TV-Moderator", req: 60, amt: [160, 180] },
    { name: "Schauspieler", req: 70, amt: [180, 200] },
    { name: "Engineur", req: 80, amt: [200, 220] },
    { name: "Streamer", req: 90, amt: [220, 240] },
    { name: "Atlet", req: 100, amt: [240, 260] },
    { name: "Polizist", req: 120, amt: [260, 280] },
    { name: "Programmierer", req: 140, amt: [280, 300] },
    { name: "Chirurg", req: 160, amt: [300, 320] },
    { name: "Arzthelfer", req: 180, amt: [320, 340] },
    { name: "Chefarzt", req: 200, amt: [340, 360] },
    { name: "Anwalt", req: 220, amt: [360, 380] },
    { name: "CEO", req: 240, amt: [380, 400] },
    { name: "Richter", req: 260, amt: [400, 420] },
    { name: "Marketing Manager", req: 280, amt: [420, 440] },
    { name: "Analyst", req: 300, amt: [440, 460] },
    { name: "Wirtschaftsingenieur", req: 320, amt: [460, 480] },
    { name: "Mediaplaner", req: 340, amt: [480, 500] },
    { name: "Pressesprecher", req: 360, amt: [500, 520] },
    { name: "Qualitätsmanager", req: 380, amt: [520, 540] },
    { name: "Informatiker", req: 400, amt: [540, 560] },
    { name: "Fachinformatiker", req: 420, amt: [560, 580] },
    { name: "Referent", req: 440, amt: [580, 600] },
    { name: "Consultant", req: 460, amt: [600, 620] },
    { name: "Bauleiter", req: 480, amt: [620, 640] },
    { name: "Tiefbau-Ingenieur", req: 500, amt: [640, 660] },
    { name: "App Developer", req: 550, amt: [660, 680] },
    { name: "Volljurist", req: 600, amt: [680, 700] },
    { name: "Harvard Professor", req: 650, amt: [700, 720] },
    { name: "Pilot", req: 700, amt: [720, 740] },
    { name: "Corporate Finance Manager", req: 750, amt: [740, 760] },
    { name: "Trader", req: 800, amt: [760, 780] },
    { name: "Marktkettenführer", req: 850, amt: [780, 800] },
    { name: "Lufthansa Chef", req: 900, amt: [800, 820] },
    { name: "Wirtschaftsprüfer", req: 950, amt: [820, 840] },
    { name: "Fußballer", req: 1000, amt: [840, 860] },
    { name: "Fußball Trainer", req: 1050, amt: [860, 880] },
    { name: "Nasa", req: 1100, amt: [880, 900] },
    { name: "Präsident", req: 1150, amt: [900, 920] },
    { name: "Chef Anwaltskanzlei", req: 1200, amt: [920, 940] },
    { name: "Medical Advisor", req: 1250, amt: [940, 960] },
    { name: "Astronaut", req: 1300, amt: [960, 980] }
  ];  

  let message = "";
  let job_hours = 0;
  let timestamp = "heute um " + new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  function generateMessage() {
    let number = Math.floor(Math.random() * jobs.length)
    let job = jobs[number];
    let nextJob = jobs[number + 1];
    let earnings = Math.floor(Math.random() * (job.amt[1] - job.amt[0] + 1)) + job.amt[0];
    let textTemplates = [
      `<p style="margin: 0px;">Du hast als
        <span style="color: #ffffff; font-weight: bold;">${job.name}</span> gearbeitet und hast dafür <span style="color: #ffffff; font-weight: bold;">${earnings}</span> 
        <img src="assets/cookie.png" alt="🍪" style="width: 16px; height: 16px; vertical-align: text-top;" /> bekommen!</p>`,
      
      `<p style="margin: 0px;">Eine erfolgreiche Arbeitsstunde als
        <span style="color: #ffffff; font-weight: bold;">${job.name}</span> hat dir <span style="color: #ffffff; font-weight: bold;">${earnings}</span> 
        <img src="assets/cookie.png" alt="🍪" style="width: 16px; height: 16px; vertical-align: text-top;"/> gebracht!</p>`,
      
      `<p style="margin: 0px;">Nach einer harten Arbeitsstunde als
        <span style="color: #ffffff; font-weight: bold;">${job.name}</span> hat dich dein Chef mit <span style="color: #ffffff; font-weight: bold;">${earnings}</span> 
        <img src="assets/cookie.png" alt="🍪" style="width: 16px; height: 16px; vertical-align: text-top;" /> bezahlt!</p>`
    ];

    message = textTemplates[Math.floor(Math.random() * textTemplates.length)];
    job_hours = Math.floor(Math.random() * (nextJob.req - job.req) + job.req);
  }

  onMount(() => {
    generateMessage();
  });
</script>

<style>
  .discord-message {
    background-color: #2c2f33;
    color: #b9bbbe;
    padding: 16px;
    border-radius: 8px;
    font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    max-width: 600px;
    margin: auto;
  }

  .arrow {
    width: 40px;
    height: 20px;
    transform: translateY(140%) translateX(10%);
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    margin-left: 3rem;
  }

  .bot-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
    transform: translateY(-60%) translateX(-10%);
  }

  .user-icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .user-info {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .username {
    color: #206694;
    font-size: 0.8rem;
  }

  .username:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .command {
    color: #72767d;
    margin-left: 4px;
  }

  .command-main {
    color: #00a8fc;
    background-color: #3b406e;
    padding: 0.2rem;
    border-radius: 4px;
    margin-left: 4px;
  }

  .command-main:hover {
    background-color: #5865f0;
    color: white;
    cursor: default;
  }

  .command-main-wrapper:hover .command-tooltip {
    transform: translateX(-65%) translateY(125%);
    display: block;
  }

  .bot-info {
    display: flex;
    align-items: center;
    margin-right: 0px;
  }

  .bot-name {
    font-weight: bold;
    color: #e67e22;
    margin-right: 4px;
  }

  .bot-name:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .bot-badge {
    display: inline-flex;
    align-items: center;
    background-color: #5865f2;
    color: #ffffff;
    border-radius: 4px;
    padding: 2px 4px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 4px;
    position: relative; 
  }

  .bot-badge .checkmark {
    width: 10px;
    height: 10px;
    margin-left: 1px;
    padding-right: 5px;
  }

  .checkmark {
    position: relative;
  }

  .verified-tooltip {
      display: none;
      background-color: #000000;
      color: #ffffff;
      font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px;
      border-radius: 0.5rem;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-65%);
      white-space: nowrap;
      z-index: 1;
      margin-bottom: 12px;
  }

  .verified-tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: #000000 transparent transparent transparent;
  }

  .bot-badge:hover .verified-tooltip {
    display: block;
  }

  .command-tooltip {
      display: none;
      background-color: #000000;
      color: #ffffff;
      font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px;
      border-radius: 0.5rem;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-65%);
      white-space: nowrap;
      z-index: 1;
      margin-bottom: 12px;
  }

  .command-tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: #000000 transparent transparent transparent;
  }

  .timestamp {
    font-size: 0.8rem;
    padding-left: 5px;
    color: #949ba4
  }

  .message-content-wrapper {
    display: flex;
    align-items: flex-start;
  }

  .message-content {
    background-color: #36393f;
    border-left: 4px solid #faa61a;
    padding: 16px;
    border-radius: 8px;
    flex-grow: 1;
  }

  .message-text p {
    margin: 4px 0;
  }

  .highlight {
    color: #ffffff;
    font-weight: bold;
  }

  .info {
    width: 22px;
    height: 22px;
    vertical-align: bottom;
    margin-right: 4px;
  }

  .footer {
    color: #dbdee1;
    font-size: 1rem;
  }
</style>

<div class="discord-message">
  <img src="assets/arrow.png" alt="Arrow" class="arrow"/>
  <div class="header">
    <img src="assets/ben.png" alt="User icon" class="user-icon" />
    <div class="user-info">
      <span class="username">Mcbencrafter</span>
      <span class="command">verwendet</span>
      <div class="command-main-wrapper">
        <div class="command-tooltip">/work</div>
        <div class="command-main">
          <span>work</span>
        </div>
      </div>
    </div>
  </div>
  <div class="header">
    <div class="bot-info">
      <span class="bot-name">Vulpo</span>
      <span class="bot-badge">
        <div class="verified-tooltip">Verifizierte App</div>
        <img src="assets/checkmark.svg" alt="Verified checkmark" class="checkmark" />APP</span>
      <span class="timestamp">{timestamp}</span>
    </div>
  </div>
  <div class="message-content-wrapper">
    <div class="bot-info">
      <img src="favicon.png" alt="Bot icon" class="bot-icon" />
    </div>
    <div class="message-content">
      <div class="message-text">
        <p><span class="highlight">Du hast gearbeitet</span></p>
        <p>{@html message}</p>
        <p class="footer"><img src="assets/info.png" alt="info" class="info" />Deine Arbeitsstunden: {job_hours}</p>
      </div>
    </div>
  </div>
</div>

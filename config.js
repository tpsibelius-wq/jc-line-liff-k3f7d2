// この団体の設定。本番移行（共有アカウントで作り直し）のときは、ここと go.html の meta refresh の URL だけを差し替える
window.JC_CONFIG = {
  LIFF_ID: "2011899563-2QnvzXN3",            // LINE Login チャネルの LIFF ID（LIFF エンドポイントは GitHub Pages の index.html）
  API: "https://script.google.com/macros/s/AKfycbyOg2pXPu-Qi53DHxHzYKOgqBeygrHHybyRM5OBa7i8YqlLlrSzsHoNu2WsR-VGnrNi/exec",  // GAS の Web アプリ URL（/exec）
  WORKER: "https://jc-line-api.numazujc.workers.dev",  // Cloudflare Worker（高速表示の写し）。使わないなら "" にする
  ADD_URL: "https://line.me/R/ti/p/@829ipabd",  // LINE 公式アカウントの友だち追加 URL（lin.ee）
  ORG: "沼津JC"
};

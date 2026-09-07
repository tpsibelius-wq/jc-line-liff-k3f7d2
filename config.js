// この団体の設定。本番移行（共有アカウントで作り直し）のときは、ここと go.html の meta refresh の URL だけを差し替える
window.JC_CONFIG = {
  LIFF_ID: "2011464754-qYbl2VQR",            // LINE Login チャネルの LIFF ID（LIFF エンドポイントは GitHub Pages の index.html）
  API: "https://script.google.com/macros/s/AKfycbziKZweNT8sibVn54UrfNpQMsTxtxgBH1CqOtzLK_le7vdHdOj0eN9YbapdpG1twYMw/exec",  // GAS の Web アプリ URL（/exec）
  WORKER: "https://jc-line-api.election-dashboard-2026.workers.dev",  // Cloudflare Worker（高速表示の写し）。使わないなら "" にする
  ADD_URL: "https://lin.ee/NMLj2g7",  // LINE 公式アカウントの友だち追加 URL（lin.ee）
  ORG: "沼津JC"
};

#!/usr/bin/env bash
# Regenererar inter-embed.css (base64-inbäddad Inter) som creative-*.html länkar till.
# Kör en gång innan render.mjs om inter-embed.css saknas. Kräver curl + node.
set -euo pipefail
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
URL="https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
curl -sS -A "$UA" "$URL" -o inter-latin.woff2
node -e '
const fs=require("fs");
const b64=fs.readFileSync("inter-latin.woff2").toString("base64");
fs.writeFileSync("inter-embed.css",
  `@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:block;src:url(data:font/woff2;base64,${b64}) format("woff2");}`);
console.log("inter-embed.css skapad");
'

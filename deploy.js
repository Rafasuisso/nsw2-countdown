const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const distPath = "dist/nsw2-countdown/browser";
const docsPath = "docs";

// Função para copiar arquivos recursivamente
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((item) => {
    const src = path.join(from, item);
    const dest = path.join(to, item);
    if (fs.lstatSync(src).isDirectory()) {
      copyFolderSync(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  });
}

try {
  console.log("📦 Construindo o projeto...");
  execSync("ng build --configuration production --base-href /nsw2-countdown/", { stdio: "inherit" });

  console.log("🧹 Limpando pasta docs...");
  fs.rmSync(docsPath, { recursive: true, force: true });

  console.log("📁 Copiando arquivos de dist para docs...");
  copyFolderSync(distPath, docsPath);

  const status = execSync("git status --porcelain docs").toString();
  if (!status.trim()) {
    console.log("✅ Nenhuma mudança detectada. Nada para publicar.");
    process.exit(0);
  }

  console.log("🚀 Commitando e fazendo push...");
  execSync("git add docs -f");
  execSync('git commit -m "deploy"');
  execSync("git push");

  console.log("✅ Deploy completo! 🎉 Acesse: https://rafasuisso.github.io/nsw2-countdown/");
} catch (err) {
  console.error("❌ Erro durante o deploy:", err.message);
  process.exit(1);
}

# NSW2 Countdown ⏳

Este é um site simples feito com Angular que mostra uma contagem regressiva até o dia **05/06/2025**.

## 🖥️ Visualizar

Acesse o site publicado aqui:  
👉 [https://Rafasuisso.github.io/nsw2-countdown/](https://Rafasuisso.github.io/nsw2-countdown/)

> Substitua `Rafasuisso` pelo seu nome de usuário no GitHub

## 🚀 Tecnologias

- Angular
- TypeScript
- HTML + CSS
- GitHub Pages (para deploy)

## 📦 Como rodar localmente

```bash
git clone https://github.com/Rafasuisso/nsw2-countdown.git
cd nsw2-countdown
npm install
ng serve

## 📦 Como fazer o deploy

```bash
ng build --configuration production --base-href /nsw2-countdown/

rm -rf docs
mkdir docs
cp -r dist/nsw2-countdown/browser/* docs/

git add docs -f
git commit -m "Realizando deploy"
git push origin main

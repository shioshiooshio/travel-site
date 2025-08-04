// // JavaScriptで県の画像にクリックイベントを設定する

// document.addEventListener("DOMContentLoaded", () => {
//   // 県画像に使われている共通クラスを取得
//   const prefectureImages = document.querySelectorAll(".prefecture");

//   prefectureImages.forEach(img => {
//     img.addEventListener("click", () => {
//       const prefectureId = img.id; // 例："tokyo", "gunma" など

//       // ページ遷移処理
//       const targetPage = `${prefectureId}.html`; // 例："tokyo.html"
//       window.location.href = targetPage;
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("map");
  const label = document.getElementById("label");

  // すべての県画像にイベントを設定
  document.querySelectorAll(".prefecture").forEach(img => {
    img.addEventListener("click", () => {
      const id = img.id;         // 県のID（例：tokyo）
      const name = img.alt;      // 県名（例：東京）

      // 県名ラベルを表示
      label.textContent = name;
      label.classList.add("show");

      // 地図全体をズームアウト
      map.classList.add("zoom-out");

      // アニメーション後にページ遷移
      setTimeout(() => {
        window.location.href = `pre/${id}.html`;
      }, 1000); // CSSのアニメーション時間と合わせる
    });
  });
});

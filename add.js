// detail.js

// ページ名を取得（例：niigata.html → niigata）
const pageId = window.location.pathname.split("/").pop().replace(".html", "");

// 共通のフォーム要素を取得
const nameInput = document.getElementById("spot-name");
const imageInput = document.getElementById("spot-image");
const descInput = document.getElementById("spot-desc");
const addButton = document.getElementById("add-button");
const spotList = document.getElementById("spot-list");

// 要素が存在する場合のみ動作（どの県でも対応）
if (addButton && nameInput && imageInput && descInput && spotList) {
  addButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const image = imageInput.value.trim();
    const desc = descInput.value.trim();

    // 入力チェック
    if (!name || !image || !desc) {
      alert("すべての項目を入力してください！");
      return;
    }

    // 新しいスポットカードを作成
    const card = document.createElement("section");
    card.className = "spot-card";
    card.innerHTML = `
      <img src="${image}" alt="${name}" />
      <div class="description">
        <h2>${name}</h2>
        <p>${desc}</p>
      </div>
    `;

    // カードをリストに追加
    spotList.appendChild(card);

    // 入力欄をリセット
    nameInput.value = "";
    imageInput.value = "";
    descInput.value = "";
  });
}

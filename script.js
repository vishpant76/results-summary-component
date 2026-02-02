const summaryUlEle = document.querySelector(".summary-list");

function createSummaryItem(item, idx) {
  const summaryItem = document.createElement("li");
  const leftGroup = document.createElement("div");
  const imageIcon = document.createElement("img");
  const summaryCategory = document.createElement("span");
  const rightGroup = document.createElement("div");
  const categoryScore = document.createElement("span");
  const totalScore = document.createElement("span");

  summaryItem.classList.add(`summary-${idx + 1}`);
  leftGroup.classList.add("summary-left");
  imageIcon.src = item.icon;
  summaryCategory.textContent = item.category;
  summaryCategory.classList.add("text-preset-6-medium");
  leftGroup.appendChild(imageIcon);
  leftGroup.appendChild(summaryCategory);

  rightGroup.classList.add("summary-right", "text-preset-6-bold");
  categoryScore.textContent = item.score;
  totalScore.classList.add("total-score");
  totalScore.textContent = "/ 100";
  rightGroup.appendChild(categoryScore);
  rightGroup.appendChild(totalScore);

  summaryItem.appendChild(leftGroup);
  summaryItem.appendChild(rightGroup);

  return summaryItem;
}

function renderSummaryList(data) {
  data.forEach((item, idx) => {
    const li = createSummaryItem(item, idx);
    summaryUlEle.appendChild(li);
  });
}

fetch("./data.json")
  .then((response) => response.json())
  .then(renderSummaryList);

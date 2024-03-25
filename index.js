// index.js
function generateCompliment() {
  const compliments = [
    "你就像一片披萨，又美味又让人满足。",
    "你的存在就像彩虹，为我的生活增添色彩。",
    "你就像一杯热巧克力，温暖我的心灵。",
    "你的笑容就像一束阳光，照亮我的每一天。",
    "你就像一本好书，让我欲罢不能。",
    "你就像一颗星星，在黑暗中指引我前进。",
    "你就像一片云朵，又软又蓬松，让我想拥抱你。",
    "你就像一杯冰激凌，甜美可口，让我心情愉悦。",
    "你就像一朵花，美丽动人，让我赏心悦目。",
    "你就像一首歌，旋律优美，让我沉醉其中。",
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

module.exports = generateCompliment;

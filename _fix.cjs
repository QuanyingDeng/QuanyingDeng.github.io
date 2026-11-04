const fs = require('fs');

const srcPath = 'data.js';
let code = fs.readFileSync(srcPath, 'utf8');

eval(code.replace('window.PORTFOLIO', 'global.P'));

const P = global.P;

const newCraftProjects = [
  {
    id: "heritage-zha-ran",
    title: "扎染",
    en: "Tie-Dye",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/zha-ran/zha-ran-01.jpg",
      "assets/works/craft/zha-ran/zha-ran-02.jpg",
      "assets/works/craft/zha-ran/zha-ran-03.jpg",
      "assets/works/craft/zha-ran/zha-ran-04.jpg",
      "assets/works/craft/zha-ran/zha-ran-05.jpg",
      "assets/works/craft/zha-ran/zha-ran-06.jpg",
      "assets/works/craft/zha-ran/zha-ran-07.jpg",
      "assets/works/craft/zha-ran/zha-ran-08.jpg",
      "assets/works/craft/zha-ran/zha-ran-09.jpg"
    ],
    description: "扎染，传统印染工艺，通过捆扎、浸泡、拆线等工序，在织物上呈现自然晕染的纹样效果。",
    descriptionEn: "Tie-dye is a traditional dyeing technique that creates naturally diffused patterns on fabric through tying, soaking, and untying."
  },
  {
    id: "heritage-qia-si-fa-lang",
    title: "掐丝珐琅 · 螺钿",
    en: "Cloisonné & Mother-of-Pearl Inlay",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/qia-si-fa-lang/qia-si-fa-lang-01.jpg"
    ],
    description: "掐丝珐琅与螺钿工艺，前者以金属丝掐出图案再填色烧制，后者将贝壳薄片嵌入器物表面形成华美装饰。",
    descriptionEn: "Cloisonné uses metal wire to form patterns filled with enamel; mother-of-pearl inlay creates ornate decoration by embedding thin shell pieces into surfaces."
  },
  {
    id: "heritage-chan-hua",
    title: "缠花",
    en: "Silk Flower Craft",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/chan-hua/chan-hua-01.jpg"
    ],
    description: "缠花，以蚕丝缠绕纸板造型，制作出仿真花朵，多用于传统头饰与节庆装饰。",
    descriptionEn: "Silk flower craft wraps silk threads around cardboard shapes to create lifelike flowers, traditionally used for hair ornaments and festive decorations."
  },
  {
    id: "heritage-zhu-xiu",
    title: "珠绣",
    en: "Bead Embroidery",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/zhu-xiu/zhu-xiu-01.jpg"
    ],
    description: "珠绣，以各色珠子在织物上穿绣图案，珠光流转，常用于服饰、包袋及装饰画。",
    descriptionEn: "Bead embroidery stitches colorful beads onto fabric to create shimmering patterns, commonly used for clothing, bags, and decorative art."
  },
  {
    id: "heritage-mu-ban-nian-hua",
    title: "木版年画",
    en: "Woodblock New Year Prints",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/mu-ban-nian-hua/mu-ban-nian-hua-01.jpg"
    ],
    description: "木版年画，以梨木雕刻版、套色印刷，是中国传统年节文化中不可或缺的艺术形式。",
    descriptionEn: "Woodblock New Year prints are carved on pear wood and printed in multiple colors, forming an indispensable art form in Chinese traditional festival culture."
  },
  {
    id: "heritage-tao-yi",
    title: "陶艺",
    en: "Pottery",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/tao-yi/tao-yi-01.jpg"
    ],
    description: "陶艺，手拉坯、塑形、施釉、烧制，从泥土到器物的传统造物技艺。",
    descriptionEn: "Pottery — throwing, shaping, glazing, and firing — the traditional craft of transforming clay into vessels."
  },
  {
    id: "heritage-zhi-jiang-hua",
    title: "纸浆画",
    en: "Paper Pulp Painting",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/zhi-jiang-hua/zhi-jiang-hua-01.jpg"
    ],
    description: "纸浆画，以废纸回收打浆、染色后堆积成画，兼具环保性与独特的肌理质感。",
    descriptionEn: "Paper pulp painting recycles waste paper into dyed pulp that is layered into artworks, with unique textural quality and eco-friendliness."
  },
  {
    id: "heritage-zhi-xian-wei",
    title: "纸纤维艺术",
    en: "Paper Fiber Art",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/zhi-xian-wei/zhi-xian-wei-01.jpg",
      "assets/works/craft/zhi-xian-wei/zhi-xian-wei-02.jpg"
    ],
    description: "纸纤维艺术，以纸为媒介进行编织、堆叠、塑形，探索传统材料的当代表达。",
    descriptionEn: "Paper fiber art uses paper as a medium for weaving, layering, and shaping, exploring contemporary expressions of traditional materials."
  },
  {
    id: "heritage-workshop",
    title: "非遗手工 · 教学与实践",
    en: "Heritage Craft & Education",
    category: "craft",
    year: "实践记录",
    type: "非遗手工 / Heritage Crafts",
    images: [
      "assets/works/craft/zha-ran/zha-ran-01.jpg",
      "assets/works/craft/zhi-xian-wei/zhi-xian-wei-01.jpg",
      "assets/works/craft/tao-yi/tao-yi-01.jpg"
    ],
    description: "曾多次参与非物质文化遗产项目企业实践，实践单位包括广东非遗梦文化产业有限公司等企业；担任学院教师大讲堂美术（非遗手工课）授课教师，为学院教师提供非遗教学培训。关注传统手工技艺与数字媒体技术的结合。",
    descriptionEn: "I have participated in multiple enterprise-based intangible cultural heritage projects, including practice at Guangdong Intangible Cultural Heritage Dream Cultural Industry Co., Ltd. I also taught heritage crafts in the college's Faculty Lecture Series, providing training for fellow teachers. This practice informs my interest in traditional craft and digital media."
  }
];

const idx = P.projects.findIndex(p => p.id === 'heritage-workshop');
if (idx >= 0) {
  P.projects.splice(idx, 1, ...newCraftProjects);
  console.log('Replaced heritage-workshop with', newCraftProjects.length, 'projects. Total:', P.projects.length);
} else {
  console.log('heritage-workshop not found, appending...');
  P.projects.push(...newCraftProjects);
}

const header = '/* 项目与荣誉数据；descriptionEn 为英文简介。 */\nwindow.PORTFOLIO = ';
const body = JSON.stringify(P, null, 2);
const footer = ';\n';
const out = header + body + footer;

try {
  JSON.parse(body);
  console.log('JSON validation: OK');
} catch(e) {
  console.log('JSON validation FAILED:', e.message);
}

fs.writeFileSync(srcPath, out, 'utf8');
console.log('Written to', srcPath, '(' + out.length + ' chars)');

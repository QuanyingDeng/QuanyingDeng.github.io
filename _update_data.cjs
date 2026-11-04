﻿const fs = require('fs');
const path = 'data.js';
let content = fs.readFileSync(path, 'utf8');

const craftProjects = [
  {
    id: "heritage-zha-ran",
    title: "鎵庢煋",
    en: "Tie-Dye",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
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
    description: "鎵庢煋锛屼紶缁熷嵃鏌撳伐鑹猴紝閫氳繃鎹嗘墡銆佹蹈娉°€佹媶绾跨瓑宸ュ簭锛屽湪缁囩墿涓婂憟鐜拌嚜鐒舵檿鏌撶殑绾规牱鏁堟灉銆?,
    descriptionEn: "Tie-dye is a traditional dyeing technique that creates naturally diffused patterns on fabric through tying, soaking, and untying."
  },
  {
    id: "heritage-qia-si-fa-lang",
    title: "鎺愪笣鐝愮悈 路 铻洪捒",
    en: "Cloisonn茅 & Mother-of-Pearl Inlay",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/qia-si-fa-lang/qia-si-fa-lang-01.jpg"
    ],
    description: "鎺愪笣鐝愮悈涓庤灪閽垮伐鑹猴紝鍓嶈€呬互閲戝睘涓濇帎鍑哄浘妗堝啀濉壊鐑у埗锛屽悗鑰呭皢璐濆３钖勭墖宓屽叆鍣ㄧ墿琛ㄩ潰褰㈡垚鍗庣編瑁呴グ銆?,
    descriptionEn: "Cloisonn茅 uses metal wire to form patterns filled with enamel; mother-of-pearl inlay creates ornate decoration by embedding thin shell pieces into surfaces."
  },
  {
    id: "heritage-chan-hua",
    title: "缂犺姳",
    en: "Silk Flower Craft",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/chan-hua/chan-hua-01.jpg"
    ],
    description: "缂犺姳锛屼互铓曚笣缂犵粫绾告澘閫犲瀷锛屽埗浣滃嚭浠跨湡鑺辨湹锛屽鐢ㄤ簬浼犵粺澶撮グ涓庤妭搴嗚楗般€?,
    descriptionEn: "Silk flower craft wraps silk threads around cardboard shapes to create lifelike flowers, traditionally used for hair ornaments and festive decorations."
  },
  {
    id: "heritage-zhu-xiu",
    title: "鐝犵唬",
    en: "Bead Embroidery",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/zhu-xiu/zhu-xiu-01.jpg"
    ],
    description: "鐝犵唬锛屼互鍚勮壊鐝犲瓙鍦ㄧ粐鐗╀笂绌跨唬鍥炬锛岀彔鍏夋祦杞紝甯哥敤浜庢湇楗般€佸寘琚嬪強瑁呴グ鐢汇€?,
    descriptionEn: "Bead embroidery stitches colorful beads onto fabric to create shimmering patterns, commonly used for clothing, bags, and decorative art."
  },
  {
    id: "heritage-mu-ban-nian-hua",
    title: "鏈ㄧ増骞寸敾",
    en: "Woodblock New Year Prints",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/mu-ban-nian-hua/mu-ban-nian-hua-01.jpg"
    ],
    description: "鏈ㄧ増骞寸敾锛屼互姊ㄦ湪闆曞埢鐗堛€佸鑹插嵃鍒凤紝鏄腑鍥戒紶缁熷勾鑺傛枃鍖栦腑涓嶅彲鎴栫己鐨勮壓鏈舰寮忋€?,
    descriptionEn: "Woodblock New Year prints are carved on pear wood and printed in multiple colors, forming an indispensable art form in Chinese traditional festival culture."
  },
  {
    id: "heritage-tao-yi",
    title: "闄惰壓",
    en: "Pottery",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/tao-yi/tao-yi-01.jpg"
    ],
    description: "闄惰壓锛屾墜鎷夊澂銆佸褰€佹柦閲夈€佺儳鍒讹紝浠庢偿鍦熷埌鍣ㄧ墿鐨勪紶缁熼€犵墿鎶€鑹恒€?,
    descriptionEn: "Pottery 鈥?throwing, shaping, glazing, and firing 鈥?the traditional craft of transforming clay into vessels."
  },
  {
    id: "heritage-zhi-jiang-hua",
    title: "绾告祮鐢?,
    en: "Paper Pulp Painting",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/zhi-jiang-hua/zhi-jiang-hua-01.jpg"
    ],
    description: "绾告祮鐢伙紝浠ュ簾绾稿洖鏀舵墦娴嗐€佹煋鑹插悗鍫嗙Н鎴愮敾锛屽吋鍏风幆淇濇€т笌鐙壒鐨勮倢鐞嗚川鎰熴€?,
    descriptionEn: "Paper pulp painting recycles waste paper into dyed pulp that is layered into artworks, with unique textural quality and eco-friendliness."
  },
  {
    id: "heritage-zhi-xian-wei",
    title: "绾哥氦缁磋壓鏈?,
    en: "Paper Fiber Art",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/zhi-xian-wei/zhi-xian-wei-01.jpg",
      "assets/works/craft/zhi-xian-wei/zhi-xian-wei-02.jpg"
    ],
    description: "绾哥氦缁磋壓鏈紝浠ョ焊涓哄獟浠嬭繘琛岀紪缁囥€佸爢鍙犮€佸褰紝鎺㈢储浼犵粺鏉愭枡鐨勫綋浠ｈ〃杈俱€?,
    descriptionEn: "Paper fiber art uses paper as a medium for weaving, layering, and shaping, exploring contemporary expressions of traditional materials."
  },
  {
    id: "heritage-workshop",
    title: "闈為仐鎵嬪伐 路 鏁欏涓庡疄璺?,
    en: "Heritage Craft & Education",
    category: "craft",
    year: "瀹炶返璁板綍",
    type: "闈為仐鎵嬪伐 / Heritage Crafts",
    images: [
      "assets/works/craft/zha-ran/zha-ran-01.jpg",
      "assets/works/craft/zhi-xian-wei/zhi-xian-wei-01.jpg",
      "assets/works/craft/tao-yi/tao-yi-01.jpg"
    ],
    description: "鏇惧娆″弬涓庨潪鐗╄川鏂囧寲閬椾骇椤圭洰浼佷笟瀹炶返锛屽疄璺靛崟浣嶅寘鎷箍涓滈潪閬楁ⅵ鏂囧寲浜т笟鏈夐檺鍏徃绛変紒涓氾紱鎷呬换瀛﹂櫌鏁欏笀澶ц鍫傜編鏈紙闈為仐鎵嬪伐璇撅級鎺堣鏁欏笀锛屼负瀛﹂櫌鏁欏笀鎻愪緵闈為仐鏁欏鍩硅銆傚叧娉ㄤ紶缁熸墜宸ユ妧鑹轰笌鏁板瓧濯掍綋鎶€鏈殑缁撳悎銆?,
    descriptionEn: "I have participated in multiple enterprise-based intangible cultural heritage projects, including practice at Guangdong Intangible Cultural Heritage Dream Cultural Industry Co., Ltd. I also taught heritage crafts in the college's Faculty Lecture Series, providing training for fellow teachers. This practice informs my interest in traditional craft and digital media."
  }
];

const indent = '    ';
function projectToString(p) {
  const lines = [
    `${indent}{`,
    `${indent}  "id": "${p.id}",`,
    `${indent}  "title": ${JSON.stringify(p.title)},`,
    `${indent}  "en": ${JSON.stringify(p.en)},`,
    `${indent}  "category": "${p.category}",`,
    `${indent}  "year": ${JSON.stringify(p.year)},`,
    `${indent}  "type": ${JSON.stringify(p.type)},`,
    `${indent}  "images": [`,
    ...p.images.map((img,i) => indent + "    " + JSON.stringify(img) + (i < p.images.length-1 ? "," : "")),
    `${indent}  ],`,
    `${indent}  "description": ${JSON.stringify(p.description)},`,
    `${indent}  "descriptionEn": ${JSON.stringify(p.descriptionEn)}`,
    `${indent}}`
  ];
  return lines.join('\n');
}

const newProjectsStr = craftProjects.map(projectToString).join(',\n') + ',';

const marker = /\n\s*\{\s*\n\s*"id":\s*"heritage-workshop"[\s\S]*?"descriptionEn":\s*"[^"]*"\s*\n\s*\}/;

if (marker.test(content)) {
  content = content.replace(marker, '\n' + newProjectsStr);
  fs.writeFileSync(path, content, 'utf8');
  console.log('OK - replaced heritage-workshop with', craftProjects.length, 'craft projects');
  
  const m = content.match(/window\.PORTFOLIO\s*=\s*([\s\S]*?);\s*$/);
  try {
    JSON.parse(m[1]);
    console.log('JSON validation passed');
  } catch(e) {
    console.log('JSON ERROR:', e.message);
  }
} else {
  console.log('ERROR: could not find heritage-workshop block');
}


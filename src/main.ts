import "./style.css";

import { isWeekend } from "./basic/5";

import { compare } from "./generic/2";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
      Click on the Vite and TypeScript logos to learn more
  </div>
`;

// console.log(isWeekend("Friday"));

const type1 = { name: "Den", position: 1, color: "red", weight: 100 };
const type2 = { name: "Den", position: 1, color: "red", weight: 100 };

console.log(compare(type1, type2));

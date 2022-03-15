import { createDivElements } from "./createDivElements";

// export лучше ставить прямо перед названием
const createHtmlDocument = (json) => {
  return json.map((data) => createDivElements(data)).join("");
};

export { createHtmlDocument };

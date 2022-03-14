import {createDivElements} from "./createDivElements";

const createHtmlDocument = (json) => {
    return json
        .map(data => createDivElements(data))
        .join('')
}

export {createHtmlDocument}
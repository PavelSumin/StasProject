import {getDataTodos} from './getDataTodos';
import {createHtmlDocument} from "./createHtmlDocument";
import {setHiddenForTodos} from "./setHiddenForTodos";


getDataTodos()
    .then(json => document
        .querySelector('#test')
        .insertAdjacentHTML('afterbegin', createHtmlDocument(json))
    )
    .catch(error => console.log(error))

setHiddenForTodos();
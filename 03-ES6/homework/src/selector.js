var traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  if (startEl.childElementCount) {
    for (let element of startEl.children) {
      if (matchFunc(element, startEl)) {
        resultSet.push(element);
      }
      if (element.childElementCount) {
        resultSet = [
          ...resultSet,
          ...traverseDomAndCollectElements(matchFunc, element),
        ];
      }
    }
  }
  //console.log(resultSet);
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector.indexOf(">") > 0) return "CC";
  if (selector.indexOf(" ") > 0) return "DC";
  if (selector.indexOf("#") === 0) return "id";
  if (selector.indexOf(".") === 0) {
    return "class";
  } else if (selector.indexOf(".") > 0) {
    return "tag.class";
  } else {
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector);
  //let matchFunction;
  console.log(selectorType);
  if (selectorType === "CC") {
    return (elemento, parentEl) => {
      if (!parentEl) return false;
      return parentEl.tagName.toLowerCase() ===
        selector.toLowerCase().split(" > ")[0] &&
        elemento.tagName.toLowerCase() ===
          selector.toLowerCase().split(" > ")[1]
        ? true
        : false;
    };
  } else if (selectorType === "DC") {
    return (elemento, parentEl) => {
      if (!parentEl) return false;
      return parentEl.tagName.toLowerCase() ===
        selector.toLowerCase().split(" ")[0] &&
        elemento.tagName.toLowerCase() === selector.toLowerCase().split(" ")[1]
        ? true
        : false;
    };
  } else if (selectorType === "id") {
    return (elemento) =>
      elemento.id.toLowerCase() === selector.slice(1).toLowerCase()
        ? true
        : false;
  } else if (selectorType === "class") {
    return (elemento) =>
      elemento.className
        .toLowerCase()
        .split(" ")
        .indexOf(selector.slice(1).toLowerCase()) >= 0
        ? true
        : false;
  } else if (selectorType === "tag.class") {
    return (elemento) =>
      elemento.tagName.toLowerCase() === selector.toLowerCase().split(".")[0] &&
      elemento.className
        .toLowerCase()
        .split(" ")
        .indexOf(selector.toLowerCase().split(".")[1]) >= 0
        ? true
        : false;
  } else if (selectorType === "tag") {
    return (elemento) =>
      elemento.tagName.toLowerCase() === selector.toLowerCase() ? true : false;
  }
  //return matchFunction;
};

var $ = function (selector) {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

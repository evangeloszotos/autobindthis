"use strict";

const reactMethodNames = [
  "componentWillMount",
  "UNSAFE_componentWillMount",
  "render",
  "getSnapshotBeforeUpdate",
  "componentDidMount",
  "componentWillReceiveProps",
  "UNSAFE_componentWillReceiveProps",
  "shouldComponentUpdate",
  "componentWillUpdate",
  "UNSAFE_componentWillUpdate",
  "componentDidUpdate",
  "componentWillUnmount",
  "componentDidCatch",
  "setState",
  "forceUpdate"
];

function autobind(self, options) {
  options = Object.assign({}, options);
  options.exclude = (options.exclude || []).concat(["constructor"]);

  const prototype = Object.getPrototypeOf(self);

  const methodsOfPrototype = Object.getOwnPropertyNames(prototype);
  const filteredMethods = methodsOfPrototype.filter(
    methodName => !options.exclude.includes(methodName)
  );

  filteredMethods.forEach(methodName => {
    const method = self[methodName];
    if (typeof method === "function") {
      console.log(methodName);
      self[methodName] = self[methodName].bind(self);
    }
  });

  return self;
}

function react(self, options) {
  options = Object.assign({}, options);
  options.exclude = (options.exclude || []).concat(reactMethodNames);
  return autobind(self, { exclude: reactMethodNames.concat(options.exclude) });
}

module.exports = autobind;
module.exports.react = react;

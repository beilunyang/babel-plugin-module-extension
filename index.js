/*
 * @Author: beilunyang
 * @Date: 2018-12-26 14:24:26
 * @Last Modified by: beilunyang
 * @Last Modified time: 2020-05-30 17:54:12
 */

const transformExt = (rules, node) => {
  const originExts = Object.keys(rules);
  for (const originExt of originExts) {
    const originExtRegx = new RegExp(`\\.${originExt}$`);
    const replaceValue = rules[originExt] ? `.${rules[originExt]}` : '';
    const value = node.value.replace(originExtRegx, replaceValue);
    if (value !== node.value) {
      node.value = value;
      break;
    }
  }
};

module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        transformExt(state.opts, path.node.source);
      },
      CallExpression(path, state) {
        if (path.node.callee.name === "require") {
          const requireArg = path.node.arguments[0];
          transformExt(state.opts, requireArg);
        }
      }
    }
  };
};

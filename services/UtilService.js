class UtilService {
  replaceStringParams (text, params) {
    params.forEach((param, index) => {
      const position = '{' + index + '}';
      text = text.replace(position, param);
    });

    return text;
  }
}

module.exports = new UtilService();
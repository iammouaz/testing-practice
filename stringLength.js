const stringLength = (string) => {
    if (string.length > 10) {
      return 'String too long';
    } else if (string.length < 1) {
      return 'String too short';
    } else {
      return string.length;
    }
  };
  
  module.exports = {stringLength}
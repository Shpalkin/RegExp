class Validator {
    constructor(options) {
      this.options = options;
    }
  
    // eslint-disable-next-line class-methods-use-this
    validateUsername(username) {
      const regexp = /^(?!.*\d{4,})[a-z][-_a-z0-9]*[a-z]$/i;
  
      return regexp.test(username);
    }
  }
  
  export default Validator;
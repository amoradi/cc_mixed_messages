const clauses = require('./clauses');

class MarkovChain {
  constructor() {
    const tokens = (() => {
      let result = [];
      clauses.forEach((c) => {
        result = result.concat(c.split(' ').map((t) => t.toLowerCase()));
      });

      return [...new Set(result)];
    })();

    this.message = [];
    /*
      2 deep tree of possible next token given a token

      {
        token: next token[],
        token: next token[]
      }

    */
   
    this.nextTokens = (() => {
      const result = {};

      tokens.forEach((t) => {
        if (!result[t]) result[t] = [];

        clauses.forEach((c) => {
          const c_ = c.split(' ').map((t) => t.toLowerCase());

          if (c_.includes(t) && c_.indexOf(t) < c_.length - 1) {
            result[t].push(c_[c_.indexOf(t) + 1]);
          }
        });
      });

      return result;
    })();
  }

  randIndex(len) {
    return Math.max(Math.ceil(Math.random() * (len - 1)), 0)
  }

  generate() {
    const tokens = Object.keys(this.nextTokens);
    const firstToken = tokens[this.randIndex(tokens.length)];
    this.message.push(firstToken);
    this.recurse(firstToken);

    return this.message.join(' ');
  }

  recurse(t) {
    let r = this.pick(t);

    if (r) {
      this.message.push(r);
      this.recurse(r);
    }
  }

  pick(token) {
    const nextTokens = this.nextTokens[token] || [];
    const len = nextTokens.length;
    let result = ''; 

    if (len) {
      result = nextTokens[this.randIndex(len)];
    }
    
    return result;
  }
}

module.exports = MarkovChain;

var defaultArguments = {
    log: 'log.txt',
    first: 0,
    count: 10
}

module.exports = {
  
  parseLog: function(args) {
    return args.log || defaultArguments.log;
  },

  parseStart: function(args) {
      return args.first || defaultArguments.first; 
  },

  parseCount: function(args) {
      return args.count || defaultArguments.count
  }

};
export default [{
  name: 'get',
  fn: 'singleStock',
  regex: /\/get ([^ ]+)$/,
  params: [
    'stock-symbol',
  ],
  disabled: false,
  description: 'Get stock current values',
},{
  name: 'graph',
  fn: 'stock3dGraph',
  regex: /^\/graph ([^ ]+)$/,
  params: [
    'stock-symbol',
  ],
  disabled: false,
  description: 'Get stock\'s 3 day graph',
},{
  name: 'graph',
  fn: 'stockGraph',
  regex: /^\/graph ([^ ]+) ([dwm])?$/,
  params: [
    'stock-symbol',
    'period-amount',
    'period-sign',
  ],
  disabled: false,
  description: 'Get stock\'s graph for specified period (PERIDO-SIGN = d|w|m)',
},{
  name: 'info',
  regex: /^\/info ([^ ]+)$/,
  params: [
    'stock-symbol',
  ],
  disabled: false,
  description: 'Get all information on the stock',
},{
  disabled: false,
  name: 'help',
  regex:/\/help/,
  description: 'Get this message of explanation of how to use the bot',
}];

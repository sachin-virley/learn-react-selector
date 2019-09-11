window.Inventory = {
  allSizes: (function(small, large) {
    var sizes = [];
    for (var i = small; i <= large; i++) {
      sizes.push(i);
      sizes.push(i + 0.5);
    }

    return sizes;
  })(7, 12),

  allColors: ['red', 'blue', 'green', 'purple', 'brown'],

  bySize: {
    "7": [
      "red", "blue"
    ],
    "7.5":  [
      "red", "blue"
    ],
    "8":  [
      "red", "brown", "green", "purple", "blue"
    ],
    "8.5":  [
      "red", "blue"
    ],
    "9":  [
      "brown", "green", "purple"
    ],
    "9.5":  [
      "brown", "green", "purple"
    ],
    "10":  [
      "brown", "green", "purple"
    ],
    "10.5":  [
      "brown", "green", "purple"
    ],
    "11":  [
      "brown", "green", "purple"
    ],
    "11.5":  [
      "brown", "green", "purple"
    ],
    "12":  [
      "brown", "green", "purple"
    ],
    "12.5":  [
      "brown", "green", "purple"
    ]
  },

  byColor: {
    "red" : ["7", "7.5", "8", "8.5"],
    "blue" : ["7", "7.5", "8", "8.5"],
    "brown" : ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    "purple" : ["9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    "green" : ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"]
  }
};
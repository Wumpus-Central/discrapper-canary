t.d(n, { Z: () => l });
var e = t(528734),
    a = t(757490),
    r = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п\u2019ятницю', 'суботу'];
function u(i) {
    return "'у " + r[i] + " о' p";
}
var o = {
    lastWeek: function (i, n, t) {
        var o = (0, e.default)(i),
            l = o.getUTCDay();
        return (0, a.Z)(o, n, t)
            ? u(l)
            : (function (i) {
                  var n = r[i];
                  switch (i) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                          return "'у минулу " + n + " о' p";
                      case 1:
                      case 2:
                      case 4:
                          return "'у минулий " + n + " о' p";
                  }
              })(l);
    },
    yesterday: "'вчора о' p",
    today: "'сьогодні о' p",
    tomorrow: "'завтра о' p",
    nextWeek: function (i, n, t) {
        var o = (0, e.default)(i),
            l = o.getUTCDay();
        return (0, a.Z)(o, n, t)
            ? u(l)
            : (function (i) {
                  var n = r[i];
                  switch (i) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                          return "'у наступну " + n + " о' p";
                      case 1:
                      case 2:
                      case 4:
                          return "'у наступний " + n + " о' p";
                  }
              })(l);
    },
    other: 'P'
};
let l = function (i, n, t, e) {
    var a = o[i];
    return 'function' == typeof a ? a(n, t, e) : a;
};

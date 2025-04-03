e.d(n, { Z: () => l });
var t = e(528734),
    a = e(757490),
    r = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п\u2019ятницю', 'суботу'];
function u(i) {
    return "'у " + r[i] + " о' p";
}
var o = {
    lastWeek: function (i, n, e) {
        var o = (0, t.default)(i),
            l = o.getUTCDay();
        if ((0, a.Z)(o, n, e)) return u(l);
        var s = r[l];
        switch (l) {
            case 0:
            case 3:
            case 5:
            case 6:
                return "'у минулу " + s + " о' p";
            case 1:
            case 2:
            case 4:
                return "'у минулий " + s + " о' p";
        }
    },
    yesterday: "'вчора о' p",
    today: "'сьогодні о' p",
    tomorrow: "'завтра о' p",
    nextWeek: function (i, n, e) {
        var o = (0, t.default)(i),
            l = o.getUTCDay();
        if ((0, a.Z)(o, n, e)) return u(l);
        var s = r[l];
        switch (l) {
            case 0:
            case 3:
            case 5:
            case 6:
                return "'у наступну " + s + " о' p";
            case 1:
            case 2:
            case 4:
                return "'у наступний " + s + " о' p";
        }
    },
    other: 'P'
};
let l = function (i, n, e, t) {
    var a = o[i];
    return 'function' == typeof a ? a(n, e, t) : a;
};

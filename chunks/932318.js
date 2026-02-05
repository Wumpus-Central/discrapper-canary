"use strict";
e.exports = function (e, t) {
    var r,
        i,
        a,
        s,
        o,
        l,
        u = this,
        c = [];
    for (a = 0, r = n(246734)(e), s = n(976617), o = n(577360), l = n(921194); a < r.length; ++a)
        s[(i = r[a])] && (i = s[i]), t && "keypress" !== t && o[i] && ((i = o[i]), c.push("shift")), l(i) && c.push(i);
    return (t = u.pickBestAction(i, c, t)), { key: i, modifiers: c, action: t };
};

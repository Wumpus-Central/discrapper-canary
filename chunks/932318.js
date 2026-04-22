"use strict";
e.exports = function (e, t) {
    var r,
        i,
        s,
        a,
        o,
        l,
        u = [];
    for (s = 0, r = n(246734)(e), a = n(976617), o = n(577360), l = n(921194); s < r.length; ++s)
        a[(i = r[s])] && (i = a[i]), t && "keypress" !== t && o[i] && ((i = o[i]), u.push("shift")), l(i) && u.push(i);
    return (t = this.pickBestAction(i, u, t)), { key: i, modifiers: u, action: t };
};

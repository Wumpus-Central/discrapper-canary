"use strict";
e.exports = function (e, t) {
    var n,
        o,
        i,
        a,
        s,
        l,
        u = [];
    for (i = 0, n = r(246734)(e), a = r(976617), s = r(577360), l = r(921194); i < n.length; ++i)
        a[(o = n[i])] && (o = a[o]), t && "keypress" !== t && s[o] && ((o = s[o]), u.push("shift")), l(o) && u.push(o);
    return (t = this.pickBestAction(o, u, t)), { key: o, modifiers: u, action: t };
};

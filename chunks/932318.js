e.exports = function (e, t) {
    var n,
        i,
        o,
        a,
        s,
        l,
        u = [];
    for (o = 0, n = r(246734)(e), a = r(976617), s = r(577360), l = r(921194); o < n.length; ++o)
        a[(i = n[o])] && (i = a[i]), t && "keypress" !== t && s[i] && ((i = s[i]), u.push("shift")), l(i) && u.push(i);
    return (t = this.pickBestAction(i, u, t)), { key: i, modifiers: u, action: t };
};

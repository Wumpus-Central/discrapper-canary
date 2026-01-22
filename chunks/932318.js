e.exports = function (e, t) {
    var r,
        i,
        a,
        s,
        o,
        l,
        c = this,
        u = [];
    for (a = 0, r = n(246734)(e), s = n(976617), o = n(577360), l = n(921194); a < r.length; ++a)
        s[(i = r[a])] && (i = s[i]), t && "keypress" !== t && o[i] && ((i = o[i]), u.push("shift")), l(i) && u.push(i);
    return (
        (t = c.pickBestAction(i, u, t)),
        {
            key: i,
            modifiers: u,
            action: t,
        }
    );
};

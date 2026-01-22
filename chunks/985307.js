n.d(t, { W: () => a });
var r = n(90727),
    i = n(391898);
function a(e, t, n, a, s, o) {
    var l = {
            lastyear: e,
            lastmonth: t,
            nwdaymask: [],
        },
        c = [];
    if (o.freq === r.p3.YEARLY)
        if ((0, i.Ie)(o.bymonth)) c = [[0, n]];
        else for (var u = 0; u < o.bymonth.length; u++) (t = o.bymonth[u]), c.push(a.slice(t - 1, t + 1));
    else o.freq === r.p3.MONTHLY && (c = [a.slice(t - 1, t + 1)]);
    if ((0, i.Ie)(c)) return l;
    l.nwdaymask = (0, i.ux)(0, n);
    for (var u = 0; u < c.length; u++)
        for (var d = c[u], f = d[0], p = d[1] - 1, _ = 0; _ < o.bynweekday.length; _++) {
            var h = void 0,
                m = o.bynweekday[_],
                g = m[0],
                E = m[1];
            E < 0
                ? ((h = p + (E + 1) * 7), (h -= (0, i._D)(s[h] - g, 7)))
                : ((h = f + (E - 1) * 7), (h += (0, i._D)(7 - s[h] + g, 7))),
                f <= h && h <= p && (l.nwdaymask[h] = 1);
        }
    return l;
}

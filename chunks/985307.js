"use strict";
n.d(t, { W: () => s });
var r = n(90727),
    i = n(391898);
function s(e, t, n, s, a, o) {
    var l = { lastyear: e, lastmonth: t, nwdaymask: [] },
        u = [];
    if (o.freq === r.p3.YEARLY)
        if ((0, i.Ie)(o.bymonth)) u = [[0, n]];
        else for (var c = 0; c < o.bymonth.length; c++) (t = o.bymonth[c]), u.push(s.slice(t - 1, t + 1));
    else o.freq === r.p3.MONTHLY && (u = [s.slice(t - 1, t + 1)]);
    if ((0, i.Ie)(u)) return l;
    l.nwdaymask = (0, i.ux)(0, n);
    for (var c = 0; c < u.length; c++)
        for (var d = u[c], _ = d[0], f = d[1] - 1, p = 0; p < o.bynweekday.length; p++) {
            var h = void 0,
                E = o.bynweekday[p],
                m = E[0],
                g = E[1];
            g < 0
                ? ((h = f + (g + 1) * 7), (h -= (0, i._D)(a[h] - m, 7)))
                : ((h = _ + (g - 1) * 7), (h += (0, i._D)(7 - a[h] + m, 7))),
                _ <= h && h <= f && (l.nwdaymask[h] = 1);
        }
    return l;
}

"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(531685),
    o = n(620141),
    l = n(966598),
    u = n(224964);
function c(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        r = (0, s.bG)([a.A], () => a.A.isFocused()),
        o = (0, u.A)(),
        c = (0, l.A)(t);
    return (
        i.useEffect(() => {
            r && n && null != c && o.fire(c.x, c.y);
        }, [o, r, c, n]),
        null
    );
}
function d(e) {
    return (0, r.jsx)(o.A, { confettiLocation: e.confettiLocation, children: (0, r.jsx)(c, { ...e }) });
}

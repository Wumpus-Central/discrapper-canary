"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(531685),
    r = n(620141),
    o = n(966598),
    c = n(224964);
function u(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, s.bG)([a.A], () => a.A.isFocused()),
        r = (0, c.A)(),
        u = (0, o.A)(t);
    return (
        i.useEffect(() => {
            l && n && null != u && r.fire(u.x, u.y);
        }, [r, l, u, n]),
        null
    );
}
function d(e) {
    return (0, l.jsx)(r.A, { confettiLocation: e.confettiLocation, children: (0, l.jsx)(u, { ...e }) });
}

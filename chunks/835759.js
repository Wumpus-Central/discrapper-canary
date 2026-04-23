"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(531685),
    o = n(620141),
    l = n(966598),
    d = n(224964);
function _(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, s.bG)([a.A], () => a.A.isFocused()),
        o = (0, d.A)(),
        _ = (0, l.A)(t);
    return (
        r.useEffect(() => {
            i && n && null != _ && o.fire(_.x, _.y);
        }, [o, i, _, n]),
        null
    );
}
function u(e) {
    return (0, i.jsx)(o.A, { confettiLocation: e.confettiLocation, children: (0, i.jsx)(_, { ...e }) });
}

"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(151252),
    o = n(733391),
    l = n(133015),
    u = n(476438),
    c = n(204890),
    d = n(985018);
function _(e) {
    let { location: t } = e,
        n = (0, l.n)({ location: t }),
        a = (0, u.A)();
    return (i.useEffect(() => {
        n && (0, o.Xw)();
    }, [n]),
    n)
        ? (0, r.jsx)(c.A, {
              variant: "standard",
              timeRemaining: a ?? void 0,
              Icon: s.Cp8,
              text: d.intl.string(d.t.RUuXiA),
          })
        : null;
}
function f(e) {
    let { location: t } = e,
        { enabled: n } = (0, a.Z)({ location: t });
    return n ? (0, r.jsx)(_, { location: t }) : null;
}

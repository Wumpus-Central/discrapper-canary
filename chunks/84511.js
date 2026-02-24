"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(262427),
    o = n(151252),
    l = n(733391),
    u = n(133015),
    c = n(476438),
    d = n(985018);
function _(e) {
    let { location: t } = e,
        n = (0, u.n)({ location: t }),
        o = (0, c.A)();
    return (i.useEffect(() => {
        n && (0, l.Xw)();
    }, [n]),
    n)
        ? (0, r.jsx)(a.A, {
              variant: "standard",
              timeRemaining: o ?? void 0,
              Icon: s.Cp8,
              text: d.intl.format(d.t.RUuXiA, { applicationName: d.intl.string(d.t.Uu8hke) }),
          })
        : null;
}
function f(e) {
    let { location: t } = e,
        { enabled: n } = (0, o.Z)({ location: t });
    return n ? (0, r.jsx)(_, { location: t }) : null;
}

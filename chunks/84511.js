n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(151252),
    r = n(733391),
    o = n(133015),
    d = n(476438),
    c = n(204890),
    u = n(985018);
function h(e) {
    let { location: t } = e,
        n = (0, o.n)({ location: t }),
        a = (0, d.A)();
    return (l.useEffect(() => {
        n && (0, r.Xw)();
    }, [n]),
    n)
        ? (0, i.jsx)(c.A, {
              variant: "standard",
              timeRemaining: a ?? void 0,
              Icon: s.Cp8,
              text: u.intl.string(u.t["tTo/dy"]),
          })
        : null;
}
function A(e) {
    let { location: t } = e,
        { enabled: n } = (0, a.Z)({ location: t });
    return n ? (0, i.jsx)(h, { location: t }) : null;
}

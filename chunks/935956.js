s.d(n, { A: () => A, u: () => E });
var l = s(627968);
s(64700);
var t = s(503698),
    r = s.n(t),
    a = s(534514),
    i = s(31502),
    d = s(256599),
    u = s(385337),
    c = s(744064),
    N = s(254748),
    f = s(256358),
    o = s(985018),
    p = s(367791),
    _ = s(102338),
    m = s(672193);
let E = "xgpp";
function A(e) {
    let { glowingSectionId: n } = e,
        s = (0, i.l)("premium_subscriber_home_rewards"),
        { logitechCard: t, steelseriesCard: A } = (0, f.A)();
    if (!s) return null;
    let L = null != t || null != A;
    return (0, l.jsx)(N.A, {
        id: E,
        sectionClassName: r()(_.uW, _.Uv, _.qr),
        heading: (0, l.jsx)(a.D, {
            variant: "display-sm",
            className: r()(m.R_, p.U6),
            children: o.intl.string(o.t.NG1e6l),
        }),
        beforeGrid: (0, l.jsx)("div", { className: p.JE, children: (0, l.jsx)(d.A, { glowing: n === E }) }),
        grid: L
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(u.A, { containerClassName: m.Nr }),
                      null != t && (0, l.jsx)(c.S, { ...t, containerClassName: m.Nr }),
                      null != A && (0, l.jsx)(c.S, { ...A, containerClassName: m.Nr }),
                  ],
              })
            : null,
    });
}

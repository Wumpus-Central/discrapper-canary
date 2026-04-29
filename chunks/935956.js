r.d(e, { A: () => g, u: () => j });
var l = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    i = r(534514),
    t = r(31502),
    u = r(256599),
    c = r(385337),
    d = r(744064),
    m = r(254748),
    p = r(256358),
    h = r(985018),
    o = r(367791),
    N = r(102338),
    x = r(672193);
let j = "xgpp";
function g(s) {
    let { glowingSectionId: e } = s,
        r = (0, t.l)("premium_subscriber_home_rewards"),
        { logitechCard: n, steelseriesCard: g } = (0, p.A)();
    if (!r) return null;
    let C = null != n || null != g;
    return (0, l.jsx)(m.A, {
        id: j,
        sectionClassName: a()(N.uW, N.Uv, N.qr),
        heading: (0, l.jsx)(i.D, {
            variant: "display-sm",
            className: a()(x.R_, o.U6),
            children: h.intl.string(h.t.NG1e6l),
        }),
        beforeGrid: (0, l.jsx)("div", { className: o.JE, children: (0, l.jsx)(u.A, { glowing: e === j }) }),
        grid: C
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(c.A, { containerClassName: x.Nr }),
                      null != n && (0, l.jsx)(d.S, { ...n, containerClassName: x.Nr }),
                      null != g && (0, l.jsx)(d.S, { ...g, containerClassName: x.Nr }),
                  ],
              })
            : null,
    });
}

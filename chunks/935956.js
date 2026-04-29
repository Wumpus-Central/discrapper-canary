e.d(r, { A: () => g, u: () => x });
var n = e(627968);
e(64700);
var l = e(503698),
    a = e.n(l),
    i = e(534514),
    t = e(31502),
    c = e(256599),
    u = e(385337),
    d = e(744064),
    m = e(254748),
    o = e(256358),
    h = e(985018),
    N = e(367791),
    p = e(102338),
    j = e(672193);
let x = "croissant";
function g(s) {
    let { glowingSectionId: r } = s,
        e = (0, t.l)("premium_subscriber_home_rewards"),
        { logitechCard: l, steelseriesCard: g } = (0, o.A)();
    if (!e) return null;
    let C = null != l || null != g;
    return (0, n.jsx)(m.A, {
        id: x,
        sectionClassName: a()(p.uW, p.Uv, p.qr),
        heading: (0, n.jsx)(i.D, {
            variant: "display-sm",
            className: a()(j.R_, N.U6),
            children: h.intl.string(h.t.NG1e6l),
        }),
        beforeGrid: (0, n.jsx)("div", { className: N.JE, children: (0, n.jsx)(c.A, { glowing: r === x }) }),
        grid: C
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(u.A, { containerClassName: j.Nr }),
                      null != l && (0, n.jsx)(d.S, { ...l, containerClassName: j.Nr }),
                      null != g && (0, n.jsx)(d.S, { ...g, containerClassName: j.Nr }),
                  ],
              })
            : null,
    });
}

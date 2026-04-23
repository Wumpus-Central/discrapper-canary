n.d(t, { A: () => R, u: () => N });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(534514),
    a = n(31502),
    E = n(256599),
    o = n(385337),
    c = n(744064),
    _ = n(254748),
    A = n(256358),
    u = n(985018),
    I = n(367791),
    T = n(102338),
    d = n(672193);
let N = "croissant";
function R(e) {
    let { glowingSectionId: t } = e,
        n = (0, a.l)("premium_subscriber_home_rewards"),
        { logitechCard: l, steelseriesCard: R } = (0, A.A)();
    if (!n) return null;
    let O = null != l || null != R;
    return (0, i.jsx)(_.A, {
        id: N,
        sectionClassName: r()(T.uW, T.Uv, T.qr),
        heading: (0, i.jsx)(s.D, {
            variant: "display-sm",
            className: r()(d.R_, I.U6),
            children: u.intl.string(u.t.NG1e6l),
        }),
        beforeGrid: (0, i.jsx)("div", { className: I.JE, children: (0, i.jsx)(E.A, { glowing: t === N }) }),
        grid: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.A, { containerClassName: d.Nr }),
                O
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != l && (0, i.jsx)(c.S, { ...l, containerClassName: d.Nr }),
                              null != R && (0, i.jsx)(c.S, { ...R, containerClassName: d.Nr }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}

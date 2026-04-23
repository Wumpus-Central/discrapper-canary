n.d(t, { A: () => d, u: () => T });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(534514),
    a = n(715547),
    E = n(744064),
    o = n(254748),
    c = n(256358),
    _ = n(985018),
    A = n(367791),
    u = n(102338),
    I = n(672193);
let T = "croissant";
function d(e) {
    let { glowingSectionId: t } = e,
        n = (0, a.l)("premium_subscriber_home_rewards"),
        { logitechCard: l, steelseriesCard: d } = (0, c.A)();
    if (!n) return null;
    let [N, R] = [null, null];
    if (null == N || null == R) return null;
    let O = null != l || null != d;
    return (0, i.jsx)(o.A, {
        id: T,
        sectionClassName: r()(u.uW, u.Uv, u.qr),
        heading: (0, i.jsx)(s.D, {
            variant: "display-sm",
            className: r()(I.R_, A.U6),
            children: _.intl.string(_.t.NG1e6l),
        }),
        beforeGrid: (0, i.jsx)("div", { className: A.JE, children: (0, i.jsx)(N, { glowing: t === T }) }),
        grid: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R, { containerClassName: I.Nr }),
                O
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != l && (0, i.jsx)(E.S, { ...l, containerClassName: I.Nr }),
                              null != d && (0, i.jsx)(E.S, { ...d, containerClassName: I.Nr }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}

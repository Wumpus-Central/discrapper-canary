n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(534514),
    l = n(31502),
    c = n(744064),
    o = n(254748),
    d = n(609059),
    u = n(985018),
    _ = n(367791),
    m = n(102338),
    p = n(672193);
let f = "croissant";
function A(e) {
    let { glowingSectionId: t } = e,
        n = (0, l.l)("premium_subscriber_home_rewards"),
        { logitechCard: a, steelseriesCard: A } = (0, d.A)();
    if (!n) return null;
    let [g, h] = [null, null];
    if (null == g || null == h) return null;
    let b = null != a || null != A;
    return (0, r.jsx)(o.A, {
        id: f,
        sectionClassName: i()(m.uW, m.Uv, m.qr),
        heading: (0, r.jsx)(s.D, {
            variant: "display-sm",
            className: i()(p.R_, _.U6),
            children: u.intl.string(u.t.NG1e6l),
        }),
        beforeGrid: (0, r.jsx)("div", { className: _.JE, children: (0, r.jsx)(g, { glowing: t === f }) }),
        grid: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h, { containerClassName: p.Nr }),
                b
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != a && (0, r.jsx)(c.S, { ...a, containerClassName: p.Nr }),
                              null != A && (0, r.jsx)(c.S, { ...A, containerClassName: p.Nr }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}

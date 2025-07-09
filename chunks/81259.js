(r.d(t, { Z: () => f }), r(314940));
var n = r(255367);
r(73800);
var i = r(120356),
    a = r.n(i),
    o = r(278074),
    s = r(692547),
    l = r(481060),
    c = r(551556),
    u = r(927687);
let d = () =>
        (0, n.jsx)(c.Z, {
            width: 13,
            height: 13,
            backgroundColor: s.Z.colors.TEXT_FEEDBACK_POSITIVE.css
        }),
    m = () =>
        (0, n.jsx)(l.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: s.Z.colors.TEXT_DANGER.css
        }),
    g = () =>
        (0, n.jsx)(l.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: s.Z.colors.TEXT_FEEDBACK_WARNING.css
        });
function f(e) {
    let t = (0, o.EQ)(e.type)
        .with('info', () => (0, n.jsx)(g, {}))
        .with('error', () => (0, n.jsx)(m, {}))
        .with('success', () => (0, n.jsx)(d, {}))
        .otherwise(() => null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t,
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: a()(u.formMessage, {
                    [u.formMessageNegative]: 'error' === e.type,
                    [u.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}

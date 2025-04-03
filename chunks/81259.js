r.d(t, { Z: () => f }), r(627341);
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(278074),
    a = r(692547),
    l = r(481060),
    c = r(551556),
    u = r(927687);
let d = () =>
        (0, n.jsx)(c.Z, {
            width: 13,
            height: 13,
            backgroundColor: a.Z.colors.TEXT_POSITIVE.css
        }),
    g = () =>
        (0, n.jsx)(l.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: a.Z.colors.TEXT_DANGER.css
        }),
    m = () =>
        (0, n.jsx)(l.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: a.Z.colors.TEXT_WARNING.css
        });
function f(e) {
    let t = (0, o.EQ)(e.type)
        .with('info', () => (0, n.jsx)(m, {}))
        .with('error', () => (0, n.jsx)(g, {}))
        .with('success', () => (0, n.jsx)(d, {}))
        .otherwise(() => null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t,
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: s()(u.formMessage, {
                    [u.formMessageNegative]: 'error' === e.type,
                    [u.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}

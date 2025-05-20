n.d(t, { Z: () => f }), n(314940);
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(278074),
    l = n(692547),
    a = n(481060),
    c = n(551556),
    u = n(927687);
let d = () =>
        (0, r.jsx)(c.Z, {
            width: 13,
            height: 13,
            backgroundColor: l.Z.colors.TEXT_POSITIVE.css
        }),
    g = () =>
        (0, r.jsx)(a.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: l.Z.colors.TEXT_DANGER.css
        }),
    m = () =>
        (0, r.jsx)(a.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: l.Z.colors.TEXT_WARNING.css
        });
function f(e) {
    let t = (0, o.EQ)(e.type)
        .with('info', () => (0, r.jsx)(m, {}))
        .with('error', () => (0, r.jsx)(g, {}))
        .with('success', () => (0, r.jsx)(d, {}))
        .otherwise(() => null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(a.Text, {
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

n.d(t, { Z: () => E }), n(627341);
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(278074),
    r = n(692547),
    o = n(481060),
    u = n(551556),
    d = n(180028);
let c = () =>
        (0, i.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: r.Z.colors.TEXT_POSITIVE.css
        }),
    m = () =>
        (0, i.jsx)(o.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: r.Z.colors.TEXT_DANGER.css
        }),
    g = () =>
        (0, i.jsx)(o.k$p, {
            size: 'custom',
            width: 13,
            height: 13,
            color: r.Z.colors.TEXT_WARNING.css
        });
function E(e) {
    let t = (0, l.EQ)(e.type)
        .with('info', () => (0, i.jsx)(g, {}))
        .with('error', () => (0, i.jsx)(m, {}))
        .with('success', () => (0, i.jsx)(c, {}))
        .otherwise(() => null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t,
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: a()(d.formMessage, {
                    [d.formMessageNegative]: 'error' === e.type,
                    [d.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}

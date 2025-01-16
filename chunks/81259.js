n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(278074),
    l = n(692547),
    o = n(481060),
    u = n(551556),
    c = n(579532);
let d = () =>
        (0, i.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: l.Z.colors.TEXT_POSITIVE.css
        }),
    m = () =>
        (0, i.jsx)(o.CircleXIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            color: l.Z.colors.TEXT_DANGER.css
        }),
    g = () =>
        (0, i.jsx)(o.CircleXIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            color: l.Z.colors.TEXT_WARNING.css
        });
function E(e) {
    let t = (0, a.EQ)(e.type)
        .with('info', () => (0, i.jsx)(g, {}))
        .with('error', () => (0, i.jsx)(m, {}))
        .with('success', () => (0, i.jsx)(d, {}))
        .otherwise(() => null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t,
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: r()(c.formMessage, {
                    [c.formMessageNegative]: 'error' === e.type,
                    [c.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}

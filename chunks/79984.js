n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(607070),
    u = n(847800);
function d() {
    let e = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = r.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: a()(u.container, { [u.noAnimation]: e }),
        children: [
            (0, i.jsx)('div', { className: u.iconPlaceholder }),
            (0, i.jsxs)('div', {
                className: u.textContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: u.textPlaceholder,
                        style: t,
                        children: (0, i.jsx)(c.X6q, {
                            className: u.hidden,
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: '_'
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: u.textPlaceholder,
                        style: n,
                        children: (0, i.jsx)(c.Text, {
                            className: u.hidden,
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: '_'
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', { className: u.underline })
        ]
    });
}

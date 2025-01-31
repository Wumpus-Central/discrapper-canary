n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    r = n(481060),
    c = n(607070),
    d = n(14596);
function u() {
    let e = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = l.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: o()(d.container, { [d.noAnimation]: e }),
        children: [
            (0, i.jsx)('div', { className: d.iconPlaceholder }),
            (0, i.jsxs)('div', {
                className: d.textContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: d.textPlaceholder,
                        style: t,
                        children: (0, i.jsx)(r.X6q, {
                            className: d.hidden,
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: '_'
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: d.textPlaceholder,
                        style: n,
                        children: (0, i.jsx)(r.Text, {
                            className: d.hidden,
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: '_'
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', { className: d.underline })
        ]
    });
}

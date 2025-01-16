t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(442837),
    s = t(481060),
    c = t(607070),
    d = t(14596);
function u() {
    let e = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: n, styleSmall: t } = l.useMemo(
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
                        style: n,
                        children: (0, i.jsx)(s.Heading, {
                            className: d.hidden,
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: '_'
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: d.textPlaceholder,
                        style: t,
                        children: (0, i.jsx)(s.Text, {
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

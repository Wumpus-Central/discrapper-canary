t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(442837),
    s = t(481060),
    c = t(607070),
    d = t(98880),
    u = t(61474);
function m(e) {
    let { look: n = d.U4.LARGE_BANNER } = e,
        t = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: a, styleSmall: m } = l.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: o()(u.container, u.loadingAnimation, {
            [u.noAnimation]: t,
            [u.containerBorderRadius]: n !== d.U4.ROW,
            [u.rowContainer]: n === d.U4.ROW
        }),
        children: [
            (0, i.jsx)('div', {
                className: o()(u.bannerImage, {
                    [u.mediumBanner]: n === d.U4.MEDIUM_BANNER,
                    [u.largeBanner]: n === d.U4.LARGE_BANNER
                })
            }),
            (0, i.jsxs)('div', {
                className: o()(u.appDetailsContainer, { [u.appDetailsRowContainer]: n === d.U4.ROW }),
                children: [
                    (0, i.jsx)('div', { className: o()(u.iconPlaceholder, { [u.rowIconPlaceholder]: n === d.U4.ROW }) }),
                    (0, i.jsxs)('div', {
                        className: u.textContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.textPlaceholder,
                                style: a,
                                children: (0, i.jsx)(s.Heading, {
                                    className: u.hidden,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: u.textPlaceholder,
                                style: m,
                                children: (0, i.jsx)(s.Text, {
                                    className: u.hidden,
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            })
                        ]
                    }),
                    n === d.U4.ROW && (0, i.jsx)('div', { className: u.rowDivider })
                ]
            })
        ]
    });
}

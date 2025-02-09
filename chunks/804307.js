n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    r = n(481060),
    c = n(607070),
    d = n(98880),
    u = n(45287);
function m(e) {
    let { look: t = d.U4.LARGE_BANNER } = e,
        n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: a, styleSmall: m } = l.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: o()(u.container, u.loadingAnimation, {
            [u.noAnimation]: n,
            [u.containerBorderRadius]: t !== d.U4.ROW,
            [u.rowContainer]: t === d.U4.ROW
        }),
        children: [
            (0, i.jsx)('div', {
                className: o()(u.bannerImage, {
                    [u.mediumBanner]: t === d.U4.MEDIUM_BANNER,
                    [u.largeBanner]: t === d.U4.LARGE_BANNER
                })
            }),
            (0, i.jsxs)('div', {
                className: o()(u.appDetailsContainer, { [u.appDetailsRowContainer]: t === d.U4.ROW }),
                children: [
                    (0, i.jsx)('div', { className: o()(u.iconPlaceholder, { [u.rowIconPlaceholder]: t === d.U4.ROW }) }),
                    (0, i.jsxs)('div', {
                        className: u.textContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.textPlaceholder,
                                style: a,
                                children: (0, i.jsx)(r.X6q, {
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
                                children: (0, i.jsx)(r.Text, {
                                    className: u.hidden,
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            })
                        ]
                    }),
                    t === d.U4.ROW && (0, i.jsx)('div', { className: u.rowDivider })
                ]
            })
        ]
    });
}

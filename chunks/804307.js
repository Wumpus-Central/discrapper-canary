n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    d = n(98880),
    u = n(85884);
function p(e) {
    let { look: t = d.U4.LARGE_BANNER } = e,
        n = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: l, styleSmall: p } = r.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: a()(u.container, u.loadingAnimation, {
            [u.noAnimation]: n,
            [u.containerBorderRadius]: t !== d.U4.ROW,
            [u.rowContainer]: t === d.U4.ROW
        }),
        children: [
            (0, i.jsx)('div', {
                className: a()(u.bannerImage, {
                    [u.mediumBanner]: t === d.U4.MEDIUM_BANNER,
                    [u.largeBanner]: t === d.U4.LARGE_BANNER
                })
            }),
            (0, i.jsxs)('div', {
                className: a()(u.appDetailsContainer, { [u.appDetailsRowContainer]: t === d.U4.ROW }),
                children: [
                    (0, i.jsx)('div', { className: a()(u.iconPlaceholder, { [u.rowIconPlaceholder]: t === d.U4.ROW }) }),
                    (0, i.jsxs)('div', {
                        className: u.textContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.textPlaceholder,
                                style: l,
                                children: (0, i.jsx)(s.X6q, {
                                    className: u.hidden,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: u.textPlaceholder,
                                style: p,
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
                    t === d.U4.ROW && (0, i.jsx)('div', { className: u.rowDivider })
                ]
            })
        ]
    });
}

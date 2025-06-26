n.d(t, { Z: () => p });
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    c = n(481060),
    s = n(607070),
    u = n(98880),
    d = n(85884);
function p(e) {
    let { look: t = u.U4.LARGE_BANNER } = e,
        n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        { styleLarge: r, styleSmall: p } = l.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: o()(d.container, d.loadingAnimation, {
            [d.noAnimation]: n,
            [d.containerBorderRadius]: t !== u.U4.ROW,
            [d.rowContainer]: t === u.U4.ROW
        }),
        children: [
            (0, i.jsx)('div', {
                className: o()(d.bannerImage, {
                    [d.mediumBanner]: t === u.U4.MEDIUM_BANNER,
                    [d.largeBanner]: t === u.U4.LARGE_BANNER
                })
            }),
            (0, i.jsxs)('div', {
                className: o()(d.appDetailsContainer, { [d.appDetailsRowContainer]: t === u.U4.ROW }),
                children: [
                    (0, i.jsx)('div', { className: o()(d.iconPlaceholder, { [d.rowIconPlaceholder]: t === u.U4.ROW }) }),
                    (0, i.jsxs)('div', {
                        className: d.textContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.textPlaceholder,
                                style: r,
                                children: (0, i.jsx)(c.X6q, {
                                    className: d.hidden,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: d.textPlaceholder,
                                style: p,
                                children: (0, i.jsx)(c.Text, {
                                    className: d.hidden,
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            })
                        ]
                    }),
                    t === u.U4.ROW && (0, i.jsx)('div', { className: d.rowDivider })
                ]
            })
        ]
    });
}

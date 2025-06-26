n.d(t, { Z: () => p });
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(98880),
    d = n(85884);
function p(e) {
    let { look: t = u.U4.LARGE_BANNER } = e,
        n = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: r, styleSmall: p } = i.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, l.jsxs)('div', {
        className: a()(d.container, d.loadingAnimation, {
            [d.noAnimation]: n,
            [d.containerBorderRadius]: t !== u.U4.ROW,
            [d.rowContainer]: t === u.U4.ROW
        }),
        children: [
            (0, l.jsx)('div', {
                className: a()(d.bannerImage, {
                    [d.mediumBanner]: t === u.U4.MEDIUM_BANNER,
                    [d.largeBanner]: t === u.U4.LARGE_BANNER
                })
            }),
            (0, l.jsxs)('div', {
                className: a()(d.appDetailsContainer, { [d.appDetailsRowContainer]: t === u.U4.ROW }),
                children: [
                    (0, l.jsx)('div', { className: a()(d.iconPlaceholder, { [d.rowIconPlaceholder]: t === u.U4.ROW }) }),
                    (0, l.jsxs)('div', {
                        className: d.textContainer,
                        children: [
                            (0, l.jsx)('div', {
                                className: d.textPlaceholder,
                                style: r,
                                children: (0, l.jsx)(s.X6q, {
                                    className: d.hidden,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            }),
                            (0, l.jsx)('div', {
                                className: d.textPlaceholder,
                                style: p,
                                children: (0, l.jsx)(s.Text, {
                                    className: d.hidden,
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            })
                        ]
                    }),
                    t === u.U4.ROW && (0, l.jsx)('div', { className: d.rowDivider })
                ]
            })
        ]
    });
}

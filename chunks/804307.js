n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(607070),
    u = n(98880),
    d = n(85884);
function p(e) {
    let { look: t = u.U4.LARGE_BANNER } = e,
        n = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        { styleLarge: l, styleSmall: p } = r.useMemo(
            () => ({
                styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
                styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: a()(d.container, d.loadingAnimation, {
            [d.noAnimation]: n,
            [d.containerBorderRadius]: t !== u.U4.ROW,
            [d.rowContainer]: t === u.U4.ROW
        }),
        children: [
            (0, i.jsx)('div', {
                className: a()(d.bannerImage, {
                    [d.mediumBanner]: t === u.U4.MEDIUM_BANNER,
                    [d.largeBanner]: t === u.U4.LARGE_BANNER
                })
            }),
            (0, i.jsxs)('div', {
                className: a()(d.appDetailsContainer, { [d.appDetailsRowContainer]: t === u.U4.ROW }),
                children: [
                    (0, i.jsx)('div', { className: a()(d.iconPlaceholder, { [d.rowIconPlaceholder]: t === u.U4.ROW }) }),
                    (0, i.jsxs)('div', {
                        className: d.textContainer,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.textPlaceholder,
                                style: l,
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

n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(98880),
    d = n(116965);
function m(e) {
    let { look: t = u.U4.LARGE_BANNER } = e,
        n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: r, styleSmall: m } = l.useMemo(
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
                                children: (0, i.jsx)(s.X6q, {
                                    className: d.hidden,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: '_'
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: d.textPlaceholder,
                                style: m,
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
                    t === u.U4.ROW && (0, i.jsx)('div', { className: d.rowDivider })
                ]
            })
        ]
    });
}

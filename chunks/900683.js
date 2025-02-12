i.d(n, {
    Z: () => d,
    e: () => u
});
var t = i(200651);
i(192379);
var l = i(120356),
    r = i.n(l),
    a = i(481060),
    s = i(388032),
    c = i(297830),
    o = i(531599);
function u() {
    return (0, t.jsxs)('div', {
        className: r()(c.upsellFooter, c.reverseTrialUpsellContainer),
        children: [
            (0, t.jsx)('img', {
                src: o.Z,
                alt: 'reverse trial unlock',
                className: c.unlockIcon
            }),
            (0, t.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: c.upsellText,
                children: s.intl.format(s.t.f5VHKi, {})
            })
        ]
    });
}
function d(e) {
    let { text: n, color: i } = e;
    return (0, t.jsxs)('div', {
        className: c.upsellFooter,
        children: [
            (0, t.jsx)(a.SrA, {
                size: 'md',
                className: c.upsellFooterIcon,
                color: i
            }),
            (0, t.jsx)('div', { children: n })
        ]
    });
}

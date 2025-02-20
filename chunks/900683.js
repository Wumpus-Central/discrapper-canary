t.d(n, {
    Z: () => d,
    e: () => u
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    a = t(481060),
    s = t(388032),
    c = t(832341),
    o = t(531599);
function u() {
    return (0, i.jsxs)('div', {
        className: l()(c.upsellFooter, c.reverseTrialUpsellContainer),
        children: [
            (0, i.jsx)('img', {
                src: o.Z,
                alt: 'reverse trial unlock',
                className: c.unlockIcon
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: c.upsellText,
                children: s.NW.format(s.t.f5VHKi, {})
            })
        ]
    });
}
function d(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)('div', {
        className: c.upsellFooter,
        children: [
            (0, i.jsx)(a.SrA, {
                size: 'md',
                className: c.upsellFooterIcon,
                color: t
            }),
            (0, i.jsx)('div', { children: n })
        ]
    });
}

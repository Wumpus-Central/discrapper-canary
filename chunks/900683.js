n.d(t, {
    Z: () => d,
    e: () => u
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(388032),
    s = n(978862),
    c = n(531599);
function u() {
    return (0, r.jsxs)('div', {
        className: l()(s.upsellFooter, s.reverseTrialUpsellContainer),
        children: [
            (0, r.jsx)('img', {
                src: c.Z,
                alt: 'reverse trial unlock',
                className: s.unlockIcon
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: s.upsellText,
                children: a.intl.format(a.t.f5VHKi, {})
            })
        ]
    });
}
function d(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)('div', {
        className: s.upsellFooter,
        children: [
            (0, r.jsx)(o.SrA, {
                size: 'md',
                className: s.upsellFooterIcon,
                color: n
            }),
            (0, r.jsx)('div', { children: t })
        ]
    });
}

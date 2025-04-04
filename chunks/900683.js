n.d(t, {
    Z: () => u,
    e: () => d
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(388032),
    s = n(978862),
    c = n(531599);
function d() {
    return (0, r.jsxs)('div', {
        className: l()(s.upsellFooter, s.reverseTrialUpsellContainer),
        children: [
            (0, r.jsx)('img', {
                src: c.Z,
                alt: 'reverse trial unlock',
                className: s.unlockIcon
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/medium',
                className: s.upsellText,
                children: o.NW.format(o.t.f5VHKi, {})
            })
        ]
    });
}
function u(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)('div', {
        className: s.upsellFooter,
        children: [
            (0, r.jsx)(i.SrA, {
                size: 'md',
                className: s.upsellFooterIcon,
                color: n
            }),
            (0, r.jsx)('div', { children: t })
        ]
    });
}

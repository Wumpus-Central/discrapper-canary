t.d(e, {
    Z: function () {
        return d;
    },
    e: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(481060),
    s = t(388032),
    o = t(66294),
    c = t(531599);
function u() {
    return (0, i.jsxs)('div', {
        className: r()(o.upsellFooter, o.reverseTrialUpsellContainer),
        children: [
            (0, i.jsx)('img', {
                src: c.Z,
                alt: 'reverse trial unlock',
                className: o.unlockIcon
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: o.upsellText,
                children: s.intl.format(s.t.f5VHKi, {})
            })
        ]
    });
}
function d(n) {
    let { text: e, color: t } = n;
    return (0, i.jsxs)('div', {
        className: o.upsellFooter,
        children: [
            (0, i.jsx)(a.NitroWheelIcon, {
                size: 'md',
                className: o.upsellFooterIcon,
                color: t
            }),
            (0, i.jsx)('div', { children: e })
        ]
    });
}

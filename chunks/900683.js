n.d(t, {
    Z: () => d,
    e: () => u,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(810955),
    c = n(531599);
function u() {
    return (0, r.jsxs)("div", {
        className: a()(l.upsellFooter, l.reverseTrialUpsellContainer),
        children: [
            (0, r.jsx)("img", {
                src: c.Z,
                alt: "reverse trial unlock",
                className: l.unlockIcon,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                className: l.upsellText,
                children: s.intl.format(s.t.f5VHKm, {}),
            }),
        ],
    });
}
function d(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: l.upsellFooter,
        children: [
            (0, r.jsx)(o.SrA, {
                size: "md",
                className: l.upsellFooterIcon,
                color: n,
            }),
            (0, r.jsx)("div", { children: t }),
        ],
    });
}

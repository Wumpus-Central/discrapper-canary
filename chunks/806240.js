n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(931240),
    c = n(836768),
    d = n(859921),
    u = n(53876),
    h = n(941469);
function m() {
    let e = a.useRef(null);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(h.panel, u.panel),
        children: [
            (0, r.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                onClick: s.LX,
                children: 'Reset Every Clan Setup State'
            }),
            (0, r.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                onClick: c.Z.resetState,
                children: 'Reset Global Discovery State'
            }),
            (0, r.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                onClick: d.Z.resetState,
                children: 'Reset Global Discovery Servers State'
            })
        ]
    });
}

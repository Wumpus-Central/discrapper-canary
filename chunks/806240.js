n.d(t, { Z: () => x });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(931240),
    c = n(836768),
    d = n(859921),
    u = n(973161),
    m = n(616257);
function x() {
    let e = a.useRef(null);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(m.panel, u.panel),
        children: [
            (0, r.jsx)(o.zxk, {
                size: o.zxk.Sizes.SMALL,
                onClick: s.LX,
                children: 'Reset Every Clan Setup State'
            }),
            (0, r.jsx)(o.zxk, {
                size: o.zxk.Sizes.SMALL,
                onClick: c.Z.resetState,
                children: 'Reset Global Discovery State'
            }),
            (0, r.jsx)(o.zxk, {
                size: o.zxk.Sizes.SMALL,
                onClick: d.Z.resetState,
                children: 'Reset Global Discovery Servers State'
            })
        ]
    });
}

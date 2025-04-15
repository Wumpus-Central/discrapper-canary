n.d(t, { Z: () => x });
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(931240),
    c = n(836768),
    d = n(859921),
    u = n(973161),
    m = n(616257);
function x() {
    let e = r.useRef(null);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(m.panel, u.panel),
        children: [
            (0, a.jsx)(s.zxk, {
                size: s.zxk.Sizes.SMALL,
                onClick: o.LX,
                children: 'Reset Every Clan Setup State'
            }),
            (0, a.jsx)(s.zxk, {
                size: s.zxk.Sizes.SMALL,
                onClick: c.Z.resetState,
                children: 'Reset Global Discovery State'
            }),
            (0, a.jsx)(s.zxk, {
                size: s.zxk.Sizes.SMALL,
                onClick: d.Z.resetState,
                children: 'Reset Global Discovery Servers State'
            })
        ]
    });
}

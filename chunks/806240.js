n.d(t, { Z: () => h });
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(481060),
    s = n(931240),
    c = n(836768),
    d = n(859921),
    u = n(53876),
    m = n(941469);
function h() {
    let e = l.useRef(null);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(m.panel, u.panel),
        children: [
            (0, a.jsx)(o.zxk, {
                size: o.zxk.Sizes.SMALL,
                onClick: s.LX,
                children: 'Reset Every Clan Setup State'
            }),
            (0, a.jsx)(o.zxk, {
                size: o.zxk.Sizes.SMALL,
                onClick: c.Z.resetState,
                children: 'Reset Global Discovery State'
            }),
            (0, a.jsx)(o.zxk, {
                size: o.zxk.Sizes.SMALL,
                onClick: d.Z.resetState,
                children: 'Reset Global Discovery Servers State'
            })
        ]
    });
}

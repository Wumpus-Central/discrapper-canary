n.d(t, { Z: () => m });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(931240),
    c = n(836768),
    d = n(859921),
    u = n(331145),
    h = n(841699);
function m() {
    let e = a.useRef(null);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(h.panel, u.panel),
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

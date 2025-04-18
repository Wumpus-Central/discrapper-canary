n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    o = n(556296),
    a = n(13140),
    l = n(981631),
    c = n(418597);
let d = {
    [l.kg4.TOGGLE_MUTE]: {
        slash: s.nRN,
        default: s.S6n
    }
};
function u(e) {
    let { value: t, action: n, shouldShow: l } = e,
        u = (0, r.e7)([o.ZP], () => o.ZP.getKeybindForAction(n, !1, !0));
    if (null == u || !l) return null;
    let h = a.BB(u.shortcut),
        p = d[n],
        f = t ? p.slash : p.default;
    return (0, i.jsxs)('div', {
        className: c.keybindIndicator,
        children: [
            (0, i.jsx)(f, {
                className: c.keybindIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xxs/semibold',
                className: c.keybindIndicatorText,
                children: h
            })
        ]
    });
}

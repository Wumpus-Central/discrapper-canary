n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    o = n(556296),
    l = n(13140),
    a = n(981631),
    c = n(42124);
let u = {
    [a.kg4.TOGGLE_MUTE]: {
        slash: s.nRN,
        default: s.S6n
    }
};
function d(e) {
    let { value: t, action: n, shouldShow: a } = e,
        d = (0, r.e7)([o.ZP], () => o.ZP.getKeybindForAction(n, !1, !0));
    if (null == d || !a) return null;
    let h = l.BB(d.shortcut),
        p = u[n],
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

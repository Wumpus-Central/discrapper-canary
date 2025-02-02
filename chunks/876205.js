n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    a = n(442837),
    r = n(481060),
    o = n(556296),
    d = n(13140),
    c = n(981631),
    u = n(346728);
let h = {
    [c.kg4.TOGGLE_MUTE]: {
        legacy: {
            slash: r.nRN,
            default: r.S6n
        },
        new: {
            slash: r.nRN,
            default: r.S6n
        }
    }
};
function p(e) {
    let { value: t, action: n, shouldShow: s } = e,
        c = (0, a.e7)([o.Z], () => o.Z.getKeybindForAction(n, !1, !0)),
        p = (0, r.bWb)().enabled;
    if (null == c || !s) return null;
    let g = d.BB(c.shortcut),
        m = p ? h[n].new : h[n].legacy,
        f = t ? m.slash : m.default;
    return (0, i.jsxs)('div', {
        className: u.keybindIndicator,
        children: [
            (0, i.jsx)(f, {
                className: u.keybindIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xxs/semibold',
                className: l()(u.keybindIndicatorText),
                children: g
            })
        ]
    });
}

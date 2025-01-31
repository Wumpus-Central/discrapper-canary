n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    a = n(556296),
    d = n(13140),
    c = n(981631),
    u = n(346728);
let h = {
    [c.kg4.TOGGLE_MUTE]: {
        legacy: {
            slash: o.nRN,
            default: o.S6n
        },
        new: {
            slash: o.nRN,
            default: o.S6n
        }
    }
};
function p(e) {
    let { value: t, action: n, shouldShow: s } = e,
        c = (0, r.e7)([a.Z], () => a.Z.getKeybindForAction(n, !1, !0)),
        p = (0, o.bWb)().enabled;
    if (null == c || !s) return null;
    let g = d.BB(c.shortcut),
        f = p ? h[n].new : h[n].legacy,
        m = t ? f.slash : f.default;
    return (0, i.jsxs)('div', {
        className: u.keybindIndicator,
        children: [
            (0, i.jsx)(m, {
                className: u.keybindIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xxs/semibold',
                className: l()(u.keybindIndicatorText),
                children: g
            })
        ]
    });
}

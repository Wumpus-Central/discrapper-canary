n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(442837),
    l = n(481060),
    a = n(556296),
    c = n(13140),
    d = n(981631),
    u = n(329112);
let h = {
    [d.kg4.TOGGLE_MUTE]: {
        legacy: {
            slash: l.nRN,
            default: l.S6n
        },
        new: {
            slash: l.nRN,
            default: l.S6n
        }
    }
};
function p(e) {
    let { value: t, action: n, shouldShow: r } = e,
        d = (0, o.e7)([a.ZP], () => a.ZP.getKeybindForAction(n, !1, !0)),
        p = (0, l.bWb)().enabled;
    if (null == d || !r) return null;
    let g = c.BB(d.shortcut),
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
            (0, i.jsx)(l.Text, {
                variant: 'text-xxs/semibold',
                className: s()(u.keybindIndicatorText),
                children: g
            })
        ]
    });
}

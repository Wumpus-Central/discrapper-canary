n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    l = n(556296),
    d = n(13140),
    c = n(981631),
    u = n(346728);
let h = {
    [c.kg4.TOGGLE_MUTE]: {
        legacy: {
            slash: o.MicrophoneSlashIcon,
            default: o.MicrophoneIcon
        },
        new: {
            slash: o.MicrophoneSlashIcon,
            default: o.MicrophoneIcon
        }
    }
};
function p(e) {
    let { value: t, action: n, shouldShow: s } = e,
        c = (0, a.e7)([l.Z], () => l.Z.getKeybindForAction(n, !1, !0)),
        p = (0, o.useRedesignIconContext)().enabled;
    if (null == c || !s) return null;
    let f = d.BB(c.shortcut),
        g = p ? h[n].new : h[n].legacy,
        m = t ? g.slash : g.default;
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
                className: r()(u.keybindIndicatorText),
                children: f
            })
        ]
    });
}

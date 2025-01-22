n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    o = n(442837),
    a = n(481060),
    l = n(556296),
    c = n(13140),
    d = n(981631),
    u = n(346728);
let h = {
    [d.kg4.TOGGLE_MUTE]: {
        legacy: {
            slash: a.MicrophoneSlashIcon,
            default: a.MicrophoneIcon
        },
        new: {
            slash: a.MicrophoneSlashIcon,
            default: a.MicrophoneIcon
        }
    }
};
function p(e) {
    let { value: t, action: n, shouldShow: s } = e,
        d = (0, o.e7)([l.Z], () => l.Z.getKeybindForAction(n, !1, !0)),
        p = (0, a.useRedesignIconContext)().enabled;
    if (null == d || !s) return null;
    let f = c.BB(d.shortcut),
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
            (0, i.jsx)(a.Text, {
                variant: 'text-xxs/semibold',
                className: r()(u.keybindIndicatorText),
                children: f
            })
        ]
    });
}

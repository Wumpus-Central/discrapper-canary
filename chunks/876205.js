n.d(t, { Z: () => u });
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    o = n(556296),
    s = n(13140),
    a = n(981631),
    c = n(482784);
let d = {
    [a.kg4.TOGGLE_MUTE]: {
        slash: l.nRN,
        default: l.S6n,
    },
};
function u(e) {
    let { value: t, action: n, shouldShow: a } = e,
        u = (0, r.e7)([o.ZP], () => o.ZP.getKeybindForAction(n, !1, !0));
    if (null == u || !a) return null;
    let h = s.BB(u.shortcut),
        p = d[n],
        f = t ? p.slash : p.default;
    return (0, i.jsxs)("div", {
        className: c.keybindIndicator,
        children: [
            (0, i.jsx)(f, {
                className: c.keybindIcon,
                size: "xs",
                color: "currentColor",
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-xxs/semibold",
                className: c.keybindIndicatorText,
                children: h,
            }),
        ],
    });
}

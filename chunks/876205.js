n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(442837),
    o = n(481060),
    l = n(556296),
    s = n(13140),
    a = n(981631),
    c = n(482784);
let d = {
    [a.kg4.TOGGLE_MUTE]: {
        slash: o.nRN,
        default: o.S6n,
    },
};
function u(e) {
    let { value: t, action: n, shouldShow: a } = e,
        u = (0, r.e7)([l.ZP], () => l.ZP.getKeybindForAction(n, !1, !0));
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
            (0, i.jsx)(o.Text, {
                variant: "text-xxs/semibold",
                className: c.keybindIndicatorText,
                children: h,
            }),
        ],
    });
}

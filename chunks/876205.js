n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(442837),
    a = n(481060),
    s = n(556296),
    o = n(13140),
    l = n(981631),
    c = n(238249);
let d = {
    [l.kg4.TOGGLE_MUTE]: {
        slash: a.nRN,
        default: a.S6n,
    },
};
function u(e) {
    let { value: t, action: n, shouldShow: l } = e,
        u = (0, r.e7)([s.ZP], () => s.ZP.getKeybindForAction(n, !1, !0));
    if (null == u || !l) return null;
    let f = o.BB(u.shortcut),
        h = d[n],
        p = t ? h.slash : h.default;
    return (0, i.jsxs)("div", {
        className: c.keybindIndicator,
        children: [
            (0, i.jsx)(p, {
                className: c.keybindIcon,
                size: "xs",
                color: "currentColor",
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-xxs/semibold",
                className: c.keybindIndicatorText,
                children: f,
            }),
        ],
    });
}

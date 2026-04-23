n.d(t, { c: () => p, g: () => f });
var i,
    r = n(627968),
    a = n(64700),
    s = n(311907),
    l = n(778712),
    o = n(534890),
    d = n(827734),
    c = n(263063),
    u = n(290863),
    h = n(102983),
    m = n(912156),
    p = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function g(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? l._3.SIZE_24 : l._3.SIZE_40;
        case "guild":
            return 24 === e ? c.Ay.Sizes.SMALLER : c.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let f = a.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: a = !1,
            size: l = 24,
            isTyping: p = !1,
            mentionCount: f = 0,
            isMentionLowImportance: _ = !1,
        } = e,
        x = t?.isPrivate() ?? !1,
        A = t?.isMultiUserDM() ?? !1,
        E = n?.id,
        S = (0, s.bG)([u.A], () => (null != E ? u.A.getStatus(E) : null), [E]),
        I = (0, s.bG)([u.A], () => null != E && u.A.isMobileOnline(E), [E]);
    if (x || A)
        return (0, r.jsx)(h.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: g(l, "user"),
            status: S,
            isMobile: I,
            isTyping: p,
            mentionCount: f,
            isMentionLowImportance: _,
        });
    if (null == i) return (0, r.jsx)(o.o, { size: g(l, "default"), color: d.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, r.jsx)(c.Ay, { guild: i, size: g(l, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === l ? m.Q.MEDIUM_40 : m.Q.TINY_24;
        return (0, r.jsx)(m.A, { channel: t, guild: i, size: e, isTyping: p });
    }
});

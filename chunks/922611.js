n.d(t, { c: () => h, g: () => m });
var i,
    s = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    o = n(263063),
    d = n(290863),
    u = n(102983),
    c = n(912156),
    h = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function g(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? a._3J.SIZE_24 : a._3J.SIZE_40;
        case "guild":
            return 24 === e ? o.Ay.Sizes.SMALLER : o.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let m = l.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: l = !1,
            size: h = 24,
            isTyping: m = !1,
            mentionCount: p = 0,
            isMentionLowImportance: A = !1,
        } = e,
        x = t?.isPrivate() ?? !1,
        E = t?.isMultiUserDM() ?? !1,
        f = n?.id,
        S = (0, r.bG)([d.A], () => (null != f ? d.A.getStatus(f) : null), [f]),
        I = (0, r.bG)([d.A], () => null != f && d.A.isMobileOnline(f), [f]);
    if (x || E)
        return (0, s.jsx)(u.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: g(h, "user"),
            status: S,
            isMobile: I,
            isTyping: m,
            mentionCount: p,
            isMentionLowImportance: A,
        });
    if (null == i) return (0, s.jsx)(a.oyn, { size: g(h, "default"), color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, s.jsx)(o.Ay, { guild: i, size: g(h, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === h ? c.Q.MEDIUM_40 : c.Q.TINY_24;
        return (0, s.jsx)(c.A, { channel: t, guild: i, size: e, isTyping: m });
    }
});

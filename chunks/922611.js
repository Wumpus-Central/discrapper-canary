n.d(t, { c: () => h, g: () => m });
var i,
    l = n(627968),
    a = n(64700),
    s = n(311907),
    r = n(397927),
    o = n(263063),
    d = n(290863),
    u = n(102983),
    c = n(912156),
    h = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function A(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? r._3J.SIZE_24 : r._3J.SIZE_40;
        case "guild":
            return 24 === e ? o.A.Sizes.SMALLER : o.A.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let m = a.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: a = !1,
            size: h = 24,
            isTyping: m = !1,
            mentionCount: g = 0,
            isMentionLowImportance: p = !1,
        } = e,
        f = t?.isPrivate() ?? !1,
        _ = t?.isMultiUserDM() ?? !1,
        E = n?.id,
        x = (0, s.bG)([d.A], () => (null != E ? d.A.getStatus(E) : null), [E]),
        S = (0, s.bG)([d.A], () => null != E && d.A.isMobileOnline(E), [E]);
    if (f || _)
        return (0, l.jsx)(u.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: A(h, "user"),
            status: x,
            isMobile: S,
            isTyping: m,
            mentionCount: g,
            isMentionLowImportance: p,
        });
    if (null == i) return (0, l.jsx)(r.oyn, { size: A(h, "default"), color: r.LU0.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, l.jsx)(o.A, { guild: i, size: A(h, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === h ? c.Q.MEDIUM_40 : c.Q.TINY_24;
        return (0, l.jsx)(c.A, { channel: t, guild: i, size: e, isTyping: m });
    }
});

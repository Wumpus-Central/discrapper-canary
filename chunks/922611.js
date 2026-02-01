n.d(t, {
    c: () => h,
    g: () => f,
}),
    n(65821);
var i,
    r = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(263063),
    u = n(290863),
    c = n(102983),
    d = n(912156),
    h = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);

function p(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? s._3J.SIZE_24 : s._3J.SIZE_40;
        case "guild":
            return 24 === e ? o.A.Sizes.SMALLER : o.A.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error("Unhandled icon type: ".concat(String(t)));
    }
}
let f = l.memo(function (e) {
    var t, n;
    let {
            channel: i,
            user: l,
            guild: h,
            isSelected: f = !1,
            size: g = 24,
            isTyping: m = !1,
            mentionCount: y = 0,
            isMentionLowImportance: A = !1,
        } = e,
        v = null != (t = null == i ? void 0 : i.isPrivate()) && t,
        b = null != (n = null == i ? void 0 : i.isMultiUserDM()) && n,
        E = null == l ? void 0 : l.id,
        O = (0, a.bG)([u.A], () => (null != E ? u.A.getStatus(E) : null), [E]),
        x = (0, a.bG)([u.A], () => null != E && u.A.isMobileOnline(E), [E]);
    if (v || b)
        return (0, r.jsx)(c.h, {
            channel: null != i ? i : null,
            user: l,
            "aria-hidden": !0,
            size: p(g, "user"),
            status: O,
            isMobile: x,
            isTyping: m,
            mentionCount: y,
            isMentionLowImportance: A,
        });
    if (null == h)
        return (0, r.jsx)(s.oyn, {
            size: p(g, "default"),
            color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT,
        });
    {
        if (null == i)
            return (0, r.jsx)(o.A, {
                guild: h,
                size: p(g, "guild"),
                active: !0,
                showTooltip: !1,
            });
        let e = 40 === g ? d.Q.MEDIUM_40 : d.Q.TINY_24;
        return (0, r.jsx)(d.A, {
            channel: i,
            guild: h,
            size: e,
            isTyping: m,
        });
    }
});

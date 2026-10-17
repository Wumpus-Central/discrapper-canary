r.d(t, { Ay: () => f, X8: () => m });
var n = r(477900),
    i = r(582128),
    l = r(17928),
    a = r(245179),
    o = r(260498),
    s = r(246338),
    u = r(659723),
    c = r(261425),
    h = r(105292),
    d = r(831283);
function f(e) {
    let { projectId: t } = e,
        r = (0, l.bG)([a.A], () => null != t && a.A.isThinking(t), [t]),
        [o, s] = i.useState(r ? t : null);
    return (
        r && o !== t && s(t),
        i.useEffect(() => {
            if (r || null == o) return;
            let e = setTimeout(() => s(null), 300);
            return () => clearTimeout(e);
        }, [r, o]),
        (0, n.jsx)("span", {
            className: d.W,
            "data-page": r ? void 0 : "chat",
            "data-thinking": r ? "" : void 0,
            role: r ? "img" : void 0,
            "aria-label": r ? h.intl.string(c.default["Y8pS+n"]) : void 0,
            "aria-hidden": !r || void 0,
            children: null == o ? null : (0, n.jsx)(u.A, { projectId: o, orientation: "right", state: "thinking" }),
        })
    );
}
function m(e) {
    let { guildId: t } = e,
        r = (0, l.bG)(
            [a.A, o.Ay],
            () =>
                a.A.getActivityOrderedProjectIds().find((e) => (0, s.Ot)(o.Ay.getProject(e), t) && a.A.isThinking(e)) ??
                null,
            [t],
        );
    return (0, n.jsx)(f, { projectId: r });
}

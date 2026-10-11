n.d(t, { Ay: () => f, X8: () => m });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(245179),
    o = n(260498),
    s = n(246338),
    u = n(659723),
    c = n(248675),
    h = n(660183),
    d = n(831283);
function f(e) {
    let { projectId: t, intensity: n } = e,
        o = (0, l.bG)([a.A], () => null != t && a.A.isThinking(t), [t]),
        [s, f] = i.useState(o ? t : null);
    return (
        o && s !== t && f(t),
        i.useEffect(() => {
            if (o || null == s) return;
            let e = setTimeout(() => f(null), 300);
            return () => clearTimeout(e);
        }, [o, s]),
        (0, r.jsx)("span", {
            className: d.W,
            "data-page": o ? void 0 : "chat",
            "data-thinking": o ? "" : void 0,
            role: o ? "img" : void 0,
            "aria-label": o ? h.intl.string(c.default["Y8pS+n"]) : void 0,
            "aria-hidden": !o || void 0,
            children:
                null == s
                    ? null
                    : (0, r.jsx)(u.A, { projectId: s, orientation: "right", state: "thinking", intensity: n }),
        })
    );
}
function m(e) {
    let { guildId: t } = e,
        n = (0, l.bG)(
            [a.A, o.Ay],
            () =>
                a.A.getActivityOrderedProjectIds().find((e) => (0, s.Ot)(o.Ay.getProject(e), t) && a.A.isThinking(e)) ??
                null,
            [t],
        );
    return (0, r.jsx)(f, { projectId: n });
}

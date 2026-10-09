n.d(t, { Ay: () => f, X8: () => m });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(245179),
    o = n(42766),
    u = n(246338),
    s = n(659723),
    c = n(248675),
    h = n(660183),
    d = n(831283);
function f(e) {
    let { projectId: t } = e,
        n = (0, l.bG)([a.Ay], () => null != t && a.Ay.isThinking(t), [t]),
        [o, u] = i.useState(n ? t : null);
    return (
        n && o !== t && u(t),
        i.useEffect(() => {
            if (n || null == o) return;
            let e = setTimeout(() => u(null), 300);
            return () => clearTimeout(e);
        }, [n, o]),
        (0, r.jsx)("span", {
            className: d.W,
            "data-page": n ? void 0 : "chat",
            "data-thinking": n ? "" : void 0,
            role: n ? "img" : void 0,
            "aria-label": n ? h.intl.string(c.default["Y8pS+n"]) : void 0,
            "aria-hidden": !n || void 0,
            children: null == o ? null : (0, r.jsx)(s.A, { projectId: o, orientation: "right", state: "thinking" }),
        })
    );
}
function m(e) {
    let { guildId: t } = e,
        n = (0, l.bG)(
            [a.Ay, o.Ay],
            () =>
                a.Ay.getActivityOrderedProjectIds().find(
                    (e) => (0, u.Ot)(o.Ay.getProject(e), t) && a.Ay.isThinking(e),
                ) ?? null,
            [t],
        );
    return (0, r.jsx)(f, { projectId: n });
}

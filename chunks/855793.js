n.d(t, { Ay: () => f, X8: () => m });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(245179),
    o = n(260498),
    s = n(246338),
    u = n(659723),
    h = n(248675),
    c = n(375708),
    d = n(831283);
function f(e) {
    let { projectId: t } = e,
        n = (0, l.bG)([a.Ay], () => null != t && a.Ay.isThinking(t), [t]),
        [o, s] = i.useState(n ? t : null);
    return (
        n && o !== t && s(t),
        i.useEffect(() => {
            if (n || null == o) return;
            let e = setTimeout(() => s(null), 300);
            return () => clearTimeout(e);
        }, [n, o]),
        (0, r.jsx)("span", {
            className: d.W,
            "data-page": n ? void 0 : "chat",
            "data-thinking": n ? "" : void 0,
            role: n ? "img" : void 0,
            "aria-label": n ? c.intl.string(h.default["Y8pS+n"]) : void 0,
            "aria-hidden": !n || void 0,
            children: null == o ? null : (0, r.jsx)(u.A, { projectId: o, orientation: "right", state: "thinking" }),
        })
    );
}
function m(e) {
    let { guildId: t } = e,
        n = (0, l.bG)(
            [a.Ay, o.Ay],
            () =>
                a.Ay.getActivityOrderedProjectIds().find(
                    (e) => (0, s.Ot)(o.Ay.getProject(e), t) && a.Ay.isThinking(e),
                ) ?? null,
            [t],
        );
    return (0, r.jsx)(f, { projectId: n });
}

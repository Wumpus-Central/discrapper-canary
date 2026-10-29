e.d(i, { Ay: () => p, X8: () => g });
var n = e(477900),
    r = e(582128),
    l = e(17928),
    a = e(245179),
    d = e(260498),
    u = e(246338),
    s = e(659723),
    o = e(87501),
    c = e(105292),
    h = e(831283);
function p(t) {
    let { projectId: i } = t,
        e = (0, l.bG)([a.A], () => null != i && a.A.isThinking(i), [i]),
        [d, u] = r.useState(e ? i : null);
    return (
        e && d !== i && u(i),
        r.useEffect(() => {
            if (e || null == d) return;
            let t = setTimeout(() => u(null), 300);
            return () => clearTimeout(t);
        }, [e, d]),
        (0, n.jsx)("span", {
            className: h.W,
            "data-page": e ? void 0 : "chat",
            "data-thinking": e ? "" : void 0,
            role: e ? "img" : void 0,
            "aria-label": e ? c.intl.string(o.default["Y8pS+n"]) : void 0,
            "aria-hidden": !e || void 0,
            children: null == d ? null : (0, n.jsx)(s.Ay, { projectId: d, orientation: "right", state: "thinking" }),
        })
    );
}
function g(t) {
    let { guildId: i } = t,
        e = (0, l.bG)(
            [a.A, d.Ay],
            () =>
                a.A.getActivityOrderedProjectIds().find((t) => (0, u.Ot)(d.Ay.getProject(t), i) && a.A.isThinking(t)) ??
                null,
            [i],
        );
    return (0, n.jsx)(p, { projectId: e });
}

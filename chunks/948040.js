n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    a = n(633018),
    r = n(261958),
    o = n(939249),
    d = n(834730),
    c = n(885574),
    u = n(442433),
    m = n(155718),
    g = n(200662),
    h = n(985018),
    x = n(870807);
function p(e) {
    let { applicationIcon: t, applicationName: p, canNavigate: A, command: b, guildId: f } = e,
        _ = l.useMemo(() => 0 !== Object.keys(b.permissions ?? {}).length, [b.permissions]),
        j = l.useCallback(() => {
            null != b &&
                A() &&
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("15946").then(n.bind(n, 326993));
                    return (n) =>
                        (0, i.jsx)(e, {
                            applicationIcon: t,
                            applicationId: b.applicationId,
                            applicationName: p,
                            command: b,
                            guildId: f,
                            ...n,
                        });
                });
        }, [t, p, A, b, f]),
        N = l.useCallback(
            (e) => {
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                    return (t) => (0, i.jsx)(e, { ...t, id: b.id, label: h.intl.string(h.t.oJ1Muw) });
                });
            },
            [b],
        ),
        v = b.type === m.kc.CHAT ? a.k : r.u,
        E = (0, g.p6)(b.type, b.displayName);
    return (0, i.jsxs)(o.D, {
        onClick: j,
        className: x.AS,
        onContextMenu: N,
        children: [
            (0, i.jsxs)("div", {
                className: x.Cv,
                children: [
                    (0, i.jsx)(v, { className: x.Kk, size: "md", color: "currentColor" }),
                    (0, i.jsx)(d.E, { variant: "text-md/normal", children: E }),
                ],
            }),
            (0, i.jsx)("div", {
                className: x.II,
                children: _
                    ? (0, i.jsxs)("div", {
                          className: x.Bs,
                          children: [
                              (0, i.jsx)(d.E, { variant: "text-md/normal", children: h.intl.string(h.t.jH4B9O) }),
                              (0, i.jsx)(c.m, { size: "sm", color: "currentColor", className: x.I8 }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}

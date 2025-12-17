n.d(t, { Z: () => j });
var a = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    i = n(149765),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(592125),
    u = n(430824),
    m = n(496675),
    p = n(944486),
    h = n(914010),
    f = n(233608),
    x = n(71080),
    b = n(295532),
    g = n(663618);
function v(e) {
    let { title: t, can: n } = e,
        r = n ? o.dz2 : o.Dio,
        i = (0, a.jsx)("div", {
            className: l()(b.iconOuter, n ? b.iconCheck : b.iconCross),
            children: (0, a.jsx)(r, { className: b.icon }),
        });
    return (0, a.jsxs)("div", {
        className: b.scope,
        children: [
            i,
            (0, a.jsx)("div", {
                className: b.scopeInner,
                children: (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                }),
            }),
        ],
    });
}
function j() {
    let e = (0, s.e7)([p.Z], () => p.Z.getChannelId()),
        t = (0, s.e7)([h.Z], () => h.Z.getGuildId()),
        n = (0, s.e7)([d.Z], () => d.Z.getChannel(e)),
        r = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        j = (0, s.e7)([m.Z], () => m.Z.computePermissions(n)),
        y = (0, s.e7)([m.Z], () => m.Z.computePermissions(r)),
        C = (0, c.ZP)(n, !0),
        _ = null != n ? (0, x.IG)(n, !1) : null,
        S = null != r ? f.Z.getGuildPermissionSpecMap(r) : null,
        E = Object.values(null != _ ? _ : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(j, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: r,
                },
                t,
            );
        }),
        T = Object.values(null != S ? S : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(y, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: r,
                },
                t,
            );
        });
    return (0, a.jsx)("div", {
        className: l()(g.panel, b.panel),
        children: (0, a.jsxs)("div", {
            className: b.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: b.section,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != C ? "Permissions in ".concat(C) : "No channel selected",
                        }),
                        E,
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: b.section,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != r ? "Permissions in ".concat(r.name) : "No guild selected",
                        }),
                        T,
                    ],
                }),
            ],
        }),
    });
}

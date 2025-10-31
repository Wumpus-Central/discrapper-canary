n.d(t, { Z: () => j });
var a = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    r = n(149765),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(592125),
    u = n(430824),
    m = n(496675),
    p = n(944486),
    h = n(914010),
    x = n(233608),
    g = n(71080),
    f = n(989295),
    b = n(451429);
function v(e) {
    let { title: t, can: n } = e,
        i = n ? o.dz2 : o.Dio,
        r = (0, a.jsx)("div", {
            className: l()(f.iconOuter, n ? f.iconCheck : f.iconCross),
            children: (0, a.jsx)(i, { className: f.icon }),
        });
    return (0, a.jsxs)("div", {
        className: f.scope,
        children: [
            r,
            (0, a.jsx)("div", {
                className: f.scopeInner,
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
        i = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        j = (0, s.e7)([m.Z], () => m.Z.computePermissions(n)),
        _ = (0, s.e7)([m.Z], () => m.Z.computePermissions(i)),
        y = (0, c.ZP)(n, !0),
        C = null != n ? (0, g.IG)(n, !1) : null,
        S = null != i ? x.Z.getGuildPermissionSpecMap(i) : null,
        E = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: n } = e,
                i = r.e$(j, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: i,
                },
                t,
            );
        }),
        T = Object.values(null != S ? S : {}).map((e) => {
            let { title: t, flag: n } = e,
                i = r.e$(_, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: i,
                },
                t,
            );
        });
    return (0, a.jsx)("div", {
        className: l()(b.panel, f.panel),
        children: (0, a.jsxs)("div", {
            className: f.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: f.section,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != y ? "Permissions in ".concat(y) : "No channel selected",
                        }),
                        E,
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: f.section,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != i ? "Permissions in ".concat(i.name) : "No guild selected",
                        }),
                        T,
                    ],
                }),
            ],
        }),
    });
}

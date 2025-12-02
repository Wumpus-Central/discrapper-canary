n.d(t, { Z: () => j });
var a = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
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
    f = n(71080),
    g = n(989295),
    b = n(451429);
function v(e) {
    let { title: t, can: n } = e,
        l = n ? o.dz2 : o.Dio,
        r = (0, a.jsx)("div", {
            className: i()(g.iconOuter, n ? g.iconCheck : g.iconCross),
            children: (0, a.jsx)(l, { className: g.icon }),
        });
    return (0, a.jsxs)("div", {
        className: g.scope,
        children: [
            r,
            (0, a.jsx)("div", {
                className: g.scopeInner,
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
        l = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        j = (0, s.e7)([m.Z], () => m.Z.computePermissions(n)),
        _ = (0, s.e7)([m.Z], () => m.Z.computePermissions(l)),
        y = (0, c.ZP)(n, !0),
        C = null != n ? (0, f.IG)(n, !1) : null,
        S = null != l ? x.Z.getGuildPermissionSpecMap(l) : null,
        E = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: n } = e,
                l = r.e$(j, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: l,
                },
                t,
            );
        }),
        N = Object.values(null != S ? S : {}).map((e) => {
            let { title: t, flag: n } = e,
                l = r.e$(_, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: l,
                },
                t,
            );
        });
    return (0, a.jsx)("div", {
        className: i()(b.panel, g.panel),
        children: (0, a.jsxs)("div", {
            className: g.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != y ? "Permissions in ".concat(y) : "No channel selected",
                        }),
                        E,
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: g.section,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != l ? "Permissions in ".concat(l.name) : "No guild selected",
                        }),
                        N,
                    ],
                }),
            ],
        }),
    });
}

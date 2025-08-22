n.d(t, { Z: () => g });
var a = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    i = n(149765),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(592125),
    u = n(430824),
    m = n(496675),
    x = n(944486),
    h = n(914010),
    p = n(233608),
    f = n(71080),
    v = n(989295),
    b = n(451429);
function j(e) {
    let { title: t, can: n } = e,
        r = n ? o.dz2 : o.Dio,
        i = (0, a.jsx)("div", {
            className: l()(v.iconOuter, n ? v.iconCheck : v.iconCross),
            children: (0, a.jsx)(r, { className: v.icon }),
        });
    return (0, a.jsxs)("div", {
        className: v.scope,
        children: [
            i,
            (0, a.jsx)("div", {
                className: v.scopeInner,
                children: (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                }),
            }),
        ],
    });
}
function g() {
    let e = (0, s.e7)([x.Z], () => x.Z.getChannelId()),
        t = (0, s.e7)([h.Z], () => h.Z.getGuildId()),
        n = (0, s.e7)([d.Z], () => d.Z.getChannel(e)),
        r = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
        g = (0, s.e7)([m.Z], () => m.Z.computePermissions(n)),
        _ = (0, s.e7)([m.Z], () => m.Z.computePermissions(r)),
        y = (0, c.ZP)(n, !0),
        C = null != n ? (0, f.IG)(n, !1) : null,
        N = null != r ? p.Z.getGuildPermissionSpecMap(r) : null,
        E = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(g, n);
            return (0, a.jsx)(
                j,
                {
                    title: t,
                    can: r,
                },
                t,
            );
        }),
        O = Object.values(null != N ? N : {}).map((e) => {
            let { title: t, flag: n } = e,
                r = i.e$(_, n);
            return (0, a.jsx)(
                j,
                {
                    title: t,
                    can: r,
                },
                t,
            );
        });
    return (0, a.jsx)("div", {
        className: l()(b.panel, v.panel),
        children: (0, a.jsxs)("div", {
            className: v.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: v.section,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-md/semibold",
                            children: null != y ? "Permissions in ".concat(y) : "No channel selected",
                        }),
                        E,
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: v.section,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-md/semibold",
                            children: null != r ? "Permissions in ".concat(r.name) : "No guild selected",
                        }),
                        O,
                    ],
                }),
            ],
        }),
    });
}

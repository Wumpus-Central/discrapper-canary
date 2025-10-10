t.d(n, { Z: () => m }), t(953529), t(997841);
var l = t(951288);
t(647438);
var i = t(793030),
    r = t(442837),
    o = t(481060),
    s = t(860719),
    a = t(621853),
    c = t(388032),
    d = t(770978);
function u(e) {
    let { icon: n, title: t, description: i } = e;
    return (0, l.jsxs)("div", {
        className: d.row,
        children: [
            (0, l.jsx)("div", {
                className: d.rowIcon,
                children: (0, l.jsx)(n, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, l.jsxs)("div", {
                className: d.rowText,
                children: [
                    (0, l.jsx)(o.X6q, {
                        variant: "text-xs/semibold",
                        children: t,
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: i,
                    }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { user: n } = e,
        t = (0, r.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        {
            hasMessageContent: m,
            hasGuildPresences: p,
            hasGuildMembers: f,
        } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: d.scroller,
        children: [
            m &&
                (0, l.jsx)(u, {
                    icon: o.kBi,
                    title: c.intl.string(c.t["7Tmhfn"]),
                    description: c.intl.string(c.t["eu5x7+"]),
                }),
            p &&
                (0, l.jsx)(u, {
                    icon: o.iWm,
                    title: c.intl.string(c.t.awYSsL),
                    description: c.intl.string(c.t.TpsXoK),
                }),
            f &&
                (0, l.jsx)(u, {
                    icon: o.BFJ,
                    title: c.intl.string(c.t.WuKeSE),
                    description: c.intl.string(c.t.wOBmtb),
                }),
            (0, l.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: c.intl.format(c.t.b6nqk5, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}

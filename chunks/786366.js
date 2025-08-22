t.d(n, { Z: () => f }), t(953529), t(997841);
var r = t(951288);
t(647438);
var l = t(597312),
    o = t(442837),
    i = t(481060),
    c = t(860719),
    s = t(621853),
    a = t(388032),
    d = t(770978);
function u(e) {
    let { icon: n, title: t, description: l } = e;
    return (0, r.jsxs)("div", {
        className: d.row,
        children: [
            (0, r.jsx)("div", {
                className: d.rowIcon,
                children: (0, r.jsx)(n, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.rowText,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "text-xs/semibold",
                        children: t,
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { user: n } = e,
        t = (0, o.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        {
            hasMessageContent: f,
            hasGuildPresences: m,
            hasGuildMembers: p,
        } = (0, c.w)({ flags: null == t ? void 0 : t.flags });
    return (0, r.jsxs)(l.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, r.jsx)(u, {
                    icon: i.kBi,
                    title: a.intl.string(a.t["7Tmhfn"]),
                    description: a.intl.string(a.t["eu5x7+"]),
                }),
            m &&
                (0, r.jsx)(u, {
                    icon: i.iWm,
                    title: a.intl.string(a.t.awYSsL),
                    description: a.intl.string(a.t.TpsXoK),
                }),
            p &&
                (0, r.jsx)(u, {
                    icon: i.BFJ,
                    title: a.intl.string(a.t.WuKeSE),
                    description: a.intl.string(a.t.wOBmtb),
                }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                children: a.intl.format(a.t.b6nqk5, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}

n.d(t, { Z: () => f }), n(953529), n(997841);
var r = n(255367);
n(73800);
var l = n(597312),
    i = n(442837),
    o = n(481060),
    a = n(860719),
    c = n(621853),
    s = n(388032),
    d = n(137861);
function u(e) {
    let { icon: t, title: n, description: l } = e;
    return (0, r.jsxs)("div", {
        className: d.row,
        children: [
            (0, r.jsx)("div", {
                className: d.rowIcon,
                children: (0, r.jsx)(t, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.rowText,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "text-xs/semibold",
                        children: n,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { user: t } = e,
        n = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        {
            hasMessageContent: f,
            hasGuildPresences: m,
            hasGuildMembers: p,
        } = (0, a.w)({ flags: null == n ? void 0 : n.flags });
    return (0, r.jsxs)(l.zJ, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, r.jsx)(u, {
                    icon: o.kBi,
                    title: s.intl.string(s.t["7Tmhfn"]),
                    description: s.intl.string(s.t["eu5x7+"]),
                }),
            m &&
                (0, r.jsx)(u, {
                    icon: o.iWm,
                    title: s.intl.string(s.t.awYSsL),
                    description: s.intl.string(s.t.TpsXoK),
                }),
            p &&
                (0, r.jsx)(u, {
                    icon: o.BFJ,
                    title: s.intl.string(s.t.WuKeSE),
                    description: s.intl.string(s.t.wOBmtb),
                }),
            (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: s.intl.format(s.t.b6nqk5, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}

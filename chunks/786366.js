t.d(n, { Z: () => m }), t(953529), t(997841);
var l = t(54381);
t(473749);
var i = t(793030),
    o = t(442837),
    r = t(481060),
    s = t(860719),
    a = t(621853),
    c = t(388032),
    d = t(888842);
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
                    (0, l.jsx)(r.Heading, {
                        variant: "text-xs/semibold",
                        children: t,
                    }),
                    (0, l.jsx)(r.Text, {
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
        t = (0, o.e7)([a.Z], () => {
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
                    icon: r.kBi,
                    title: c.intl.string(c.t["7Tmhfu"]),
                    description: c.intl.string(c.t.eu5x7z),
                }),
            p &&
                (0, l.jsx)(u, {
                    icon: r.iWm,
                    title: c.intl.string(c.t.awYSsM),
                    description: c.intl.string(c.t.TpsXoC),
                }),
            f &&
                (0, l.jsx)(u, {
                    icon: r.BFJ,
                    title: c.intl.string(c.t.WuKeSJ),
                    description: c.intl.string(c.t.wOBmtV),
                }),
            (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                children: c.intl.format(c.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}

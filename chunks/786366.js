t.d(n, { Z: () => f }), t(953529), t(997841);
var l = t(54381);
t(473749);
var i = t(793030),
    o = t(442837),
    r = t(481060),
    a = t(860719),
    c = t(621853),
    s = t(388032),
    d = t(800593);
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
function f(e) {
    let { user: n } = e,
        t = (0, o.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        {
            hasMessageContent: f,
            hasGuildPresences: m,
            hasGuildMembers: p,
        } = (0, a.w)({ flags: null == t ? void 0 : t.flags });
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: d.scroller,
        children: [
            f &&
                (0, l.jsx)(u, {
                    icon: r.kBi,
                    title: s.intl.string(s.t["7Tmhfu"]),
                    description: s.intl.string(s.t.eu5x7z),
                }),
            m &&
                (0, l.jsx)(u, {
                    icon: r.iWm,
                    title: s.intl.string(s.t.awYSsM),
                    description: s.intl.string(s.t.TpsXoC),
                }),
            p &&
                (0, l.jsx)(u, {
                    icon: r.BFJ,
                    title: s.intl.string(s.t.WuKeSJ),
                    description: s.intl.string(s.t.wOBmtV),
                }),
            (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                children: s.intl.format(s.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}

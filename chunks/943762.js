n.d(t, {
    K: () => c,
    r: () => u,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(884338),
    o = n(981631),
    s = n(388032),
    l = n(633082);
function c(e) {
    let { activityUsers: t, guildId: n, activityText: o } = e;
    return (0, r.jsxs)("div", {
        className: l.wrapper,
        children: [
            (0, r.jsx)(a.ZP, {
                guildId: n,
                users: t,
                max: 6,
                size: a.u8.SIZE_16,
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "none",
                children: o,
            }),
        ],
    });
}
function u(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (null == t ? void 0 : t.type) {
        case o.IIU.STREAMING:
            return {
                text: s.intl.formatToPlainString(s.t.tyCw2q, { count: n }),
                Icon: i.m3e,
            };
        case o.IIU.LISTENING:
            return {
                text: s.intl.formatToPlainString(s.t["2l8yka"], { count: n }),
                Icon: i.RZG,
            };
        default:
            return {
                text: s.intl.formatToPlainString(s.t.yJj035, { count: n }),
                Icon: i.iWm,
            };
    }
}

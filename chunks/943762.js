n.d(t, {
    K: () => c,
    r: () => u,
});
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(884338),
    o = n(981631),
    a = n(388032),
    s = n(188206);
function c(e) {
    let { activityUsers: t, guildId: n, activityText: o } = e;
    return (0, r.jsxs)("div", {
        className: s.wrapper,
        children: [
            (0, r.jsx)(l.ZP, {
                guildId: n,
                users: t,
                max: 6,
                size: l.u8.SIZE_16,
            }),
            (0, r.jsxs)(i.Text, {
                variant: "text-xs/normal",
                color: "none",
                children: [t.length, " ", o],
            }),
        ],
    });
}
function u(e) {
    switch (null == e ? void 0 : e.type) {
        case o.IIU.STREAMING:
            return {
                text: a.intl.string(a.t["Jpkr/v"]),
                Icon: i.m3e,
            };
        case o.IIU.LISTENING:
            return {
                text: a.intl.string(a.t.kUEnxM),
                Icon: i.RZG,
            };
        default:
            return {
                text: a.intl.string(a.t.BMTj29),
                Icon: i.iWm,
            };
    }
}

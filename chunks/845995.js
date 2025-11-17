n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(100527),
    a = n(906732),
    s = n(246946),
    o = n(999382),
    c = n(270394);
let d = function () {
    let e = (0, i.e7)([s.Z], () => s.Z.hideInstantInvites),
        { invites: t, guild: n } = (0, i.cj)([o.Z], () => o.Z.getProps(), []),
        { analyticsLocations: d } = (0, a.ZP)(l.Z.GUILD_SETTINGS_PROFILE_PAGE);
    return (0, r.jsx)(a.Gt, {
        value: d,
        children: (0, r.jsx)(c.Z, {
            invites: t,
            guild: n,
            showChannel: !0,
            hide: e,
            withV2Actions: !0,
            canCreateInvites: !0,
        }),
    });
};

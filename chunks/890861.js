n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(100527),
    s = n(906732),
    a = n(246946),
    o = n(999382),
    c = n(270394);
let d = function () {
    let e = (0, r.e7)([a.Z], () => a.Z.hideInstantInvites),
        { invites: t, guild: n } = (0, r.cj)([o.Z], () => o.Z.getProps(), []),
        { analyticsLocations: d } = (0, s.ZP)(l.Z.GUILD_SETTINGS_PROFILE_PAGE);
    return (0, i.jsx)(s.Gt, {
        value: d,
        children: (0, i.jsx)(c.Z, {
            invites: t,
            guild: n,
            showChannel: !0,
            hide: e,
            withV2Actions: !0,
            canCreateInvites: !0
        })
    });
};

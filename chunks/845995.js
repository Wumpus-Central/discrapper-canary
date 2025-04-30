n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(100527),
    s = n(906732),
    a = n(246946),
    o = n(999382),
    c = n(270394);
let u = function () {
    let e = (0, i.e7)([a.Z], () => a.Z.hideInstantInvites),
        { invites: t, guild: n } = (0, i.cj)([o.Z], () => o.Z.getProps(), []),
        { analyticsLocations: u } = (0, s.ZP)(l.Z.GUILD_SETTINGS_PROFILE_PAGE);
    return (0, r.jsx)(s.Gt, {
        value: u,
        children: (0, r.jsx)(c.Z, {
            invites: t,
            guild: n,
            showChannel: !0,
            hide: e,
            withV2Actions: !0,
            canCreateInvites: !0
        })
    });
};

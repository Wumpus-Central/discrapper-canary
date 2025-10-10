n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(512508),
    l = n(706371),
    s = n(563115);
function a(e) {
    let {
            guildId: t,
            selectedChannelIds: n,
            selectedRoleIds: a,
            onChange: o,
            placeholder: c,
            disableEveryoneRole: d,
            includeRoleRestrictedPrivateChannels: u = !1,
            includeStageVoiceChannels: g = !1,
            helperText: m,
            className: p,
        } = e,
        f = (0, l.r)(t, n, u, g),
        h = (0, s.h)(t, a, d);
    return (0, r.jsx)(i.ZP, {
        channelRows: f,
        roleRows: h,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: o,
        placeholder: c,
        helperText: m,
        className: p,
    });
}

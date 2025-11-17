n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(512508),
    l = n(706371),
    a = n(563115);
function s(e) {
    let {
            guildId: t,
            selectedChannelIds: n,
            selectedRoleIds: s,
            onChange: o,
            placeholder: c,
            disableEveryoneRole: d,
            includeRoleRestrictedPrivateChannels: u = !1,
            includeStageVoiceChannels: g = !1,
            helperText: m,
            className: p,
        } = e,
        f = (0, l.r)(t, n, u, g),
        h = (0, a.h)(t, s, d);
    return (0, r.jsx)(i.ZP, {
        channelRows: f,
        roleRows: h,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: s,
        onChange: o,
        placeholder: c,
        helperText: m,
        className: p,
    });
}

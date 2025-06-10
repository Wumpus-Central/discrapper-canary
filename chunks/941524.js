n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(512508),
    l = n(706371),
    s = n(563115);
function a(e) {
    let { guildId: t, selectedChannelIds: n, selectedRoleIds: a, onChange: o, placeholder: c, disableEveryoneRole: d, includeRoleRestrictedPrivateChannels: u = !1, includeStageVoiceChannels: m = !1, helperText: g, className: p } = e,
        f = (0, l.r)(t, n, u, m),
        h = (0, s.h)(t, a, d);
    return (0, r.jsx)(i.ZP, {
        channelRows: f,
        roleRows: h,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: o,
        placeholder: c,
        helperText: g,
        className: p
    });
}

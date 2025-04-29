n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(512508),
    l = n(706371),
    s = n(563115);
function a(e) {
    let { guildId: t, selectedChannelIds: n, selectedRoleIds: a, onChange: o, placeholder: c, disableEveryoneRole: u, includeRoleRestrictedPrivateChannels: d = !1, includeStageVoiceChannels: m = !1, helperText: g, className: p } = e,
        h = (0, l.r)(t, n, d, m),
        f = (0, s.h)(t, a, u);
    return (0, r.jsx)(i.ZP, {
        channelRows: h,
        roleRows: f,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: o,
        placeholder: c,
        helperText: g,
        className: p
    });
}

n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(512508),
    l = n(706371),
    s = n(563115);
function a(e) {
    let { guildId: t, selectedChannelIds: n, selectedRoleIds: a, onChange: o, placeholder: c, disableEveryoneRole: u, includeRoleRestrictedPrivateChannels: d = !1, includeStageVoiceChannels: m = !1, helperText: g, className: p } = e,
        f = (0, l.r)(t, n, d, m),
        h = (0, s.h)(t, a, u);
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

n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(512508),
    l = n(706371),
    a = n(563115);
function s(e) {
    let { guildId: t, selectedChannelIds: n, selectedRoleIds: s, onChange: o, placeholder: c, disableEveryoneRole: d, includeRoleRestrictedPrivateChannels: u = !1, includeStageVoiceChannels: m = !1, helperText: g, className: p } = e,
        h = (0, l.r)(t, n, u, m),
        f = (0, a.h)(t, s, d);
    return (0, r.jsx)(i.ZP, {
        channelRows: h,
        roleRows: f,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: s,
        onChange: o,
        placeholder: c,
        helperText: g,
        className: p
    });
}

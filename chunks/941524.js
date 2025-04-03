n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(512508),
    s = n(706371),
    a = n(563115);
function l(e) {
    let { guildId: t, selectedChannelIds: n, selectedRoleIds: l, onChange: o, placeholder: c, disableEveryoneRole: d, includeRoleRestrictedPrivateChannels: u = !1, includeStageVoiceChannels: m = !1, helperText: g, className: p } = e,
        h = (0, s.r)(t, n, u, m),
        f = (0, a.h)(t, l, d);
    return (0, r.jsx)(i.ZP, {
        channelRows: h,
        roleRows: f,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: l,
        onChange: o,
        placeholder: c,
        helperText: g,
        className: p
    });
}

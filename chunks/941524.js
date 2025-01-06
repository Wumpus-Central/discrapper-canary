n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(512508),
    l = n(706371),
    a = n(563115);
function s(e) {
    let { guildId: t, selectedChannelIds: n, selectedRoleIds: s, onChange: o, placeholder: c, disableEveryoneRole: d, includeRoleRestrictedPrivateChannels: u = !1, includeStageVoiceChannels: m = !1, helperText: h, className: g } = e,
        x = (0, l.r)(t, n, u, m),
        p = (0, a.h)(t, s, d);
    return (0, i.jsx)(r.ZP, {
        channelRows: x,
        roleRows: p,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: s,
        onChange: o,
        placeholder: c,
        helperText: h,
        className: g
    });
}

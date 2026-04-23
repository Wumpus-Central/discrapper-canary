n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(64749),
    s = n(508595),
    r = n(57222);
function a(e) {
    let {
            guildId: t,
            selectedChannelIds: n,
            selectedRoleIds: a,
            onChange: o,
            placeholder: d,
            disableEveryoneRole: c,
            includeRoleRestrictedPrivateChannels: u = !1,
            includeStageVoiceChannels: m = !1,
            helperText: g,
            className: h,
        } = e,
        x = (0, s.q)(t, n, u, m),
        _ = (0, r.H)(t, a, c);
    return (0, i.jsx)(l.Ay, {
        channelRows: x,
        roleRows: _,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: o,
        placeholder: d,
        helperText: g,
        className: h,
    });
}

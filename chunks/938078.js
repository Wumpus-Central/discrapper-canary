n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var i = n(64749),
    l = n(508595),
    s = n(57222);

function a(e) {
    let {
            guildId: t,
            selectedChannelIds: n,
            selectedRoleIds: a,
            onChange: c,
            placeholder: o,
            disableEveryoneRole: d,
            includeRoleRestrictedPrivateChannels: u = !1,
            includeStageVoiceChannels: f = !1,
            helperText: g,
            className: b,
        } = e,
        m = (0, l.q)(t, n, u, f),
        p = (0, s.H)(t, a, d);
    return (0, r.jsx)(i.Ay, {
        channelRows: m,
        roleRows: p,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: c,
        placeholder: o,
        helperText: g,
        className: b,
    });
}

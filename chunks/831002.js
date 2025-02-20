n.d(t, {
    $A: () => O,
    ZP: () => E,
    j8: () => N
});
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(40851),
    c = n(358221),
    u = n(431368),
    d = n(167675),
    p = n(418469),
    h = n(673539),
    f = n(218035),
    m = n(775666),
    g = n(423589),
    b = n(592125),
    _ = n(496675),
    C = n(881824),
    v = n(146085),
    y = n(427679),
    x = n(354459),
    j = n(388032);
function O(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getChannel(e), [e]),
        n = (0, o.e7)([_.Z], () => _.Z.can(v.yP, t)),
        i = (0, o.e7)([y.Z], () => y.Z.getStageInstanceByChannel(e), [e]),
        l = (0, s.bp)(),
        c = () => null != t && (0, C.T)(t, l);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n
        ? null != i
            ? (0, r.jsx)(a.sNh, {
                  id: 'edit-stage',
                  label: j.NW.string(j.t['I+9bLy']),
                  action: c
              })
            : (0, r.jsx)(a.sNh, {
                  id: 'start-stage',
                  label: j.NW.string(j.t.OYbHfn),
                  action: c
              })
        : null;
}
function N(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getChannel(e), [e]);
    l()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
    let n = (0, g.Mn)('StageChannelCallOverflowMenu'),
        r = (0, m.ZP)(t),
        i = (0, f.Z)(t);
    return n ? r : i;
}
function E(e) {
    let { channelId: t, closePopout: n, appContext: i, onSelect: l } = e,
        s = (0, o.e7)([c.Z], () => c.Z.getSelectedParticipant(t)),
        f = (null == s ? void 0 : s.type) === x.fO.STREAM ? s.stream : null,
        m = (0, h.Z)(t);
    return (0, r.jsxs)(a.v2r, {
        navId: 'stage-channel-call-overflow-popout',
        onClose: n,
        'aria-label': j.NW.string(j.t.pkYeAw),
        onSelect: l,
        children: [O(t), N(t), (0, d.Z)(), (0, u.Z)(t), m, (0, p.Z)(f, i)]
    });
}

n.d(t, {
    $A: () => O,
    ZP: () => N,
    j8: () => E
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
    y = n(146085),
    x = n(427679),
    v = n(354459),
    j = n(388032);
function O(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getChannel(e), [e]),
        n = (0, o.e7)([_.Z], () => _.Z.can(y.yP, t)),
        i = (0, o.e7)([x.Z], () => x.Z.getStageInstanceByChannel(e), [e]),
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
function E(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getChannel(e), [e]);
    l()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
    let n = (0, g.Mn)('StageChannelCallOverflowMenu'),
        r = (0, m.ZP)(t),
        i = (0, f.Z)(t);
    return n ? r : i;
}
function N(e) {
    let { channelId: t, closePopout: n, appContext: i, onSelect: l, onInteraction: s } = e,
        f = (0, o.e7)([c.Z], () => c.Z.getSelectedParticipant(t)),
        m = (null == f ? void 0 : f.type) === v.fO.STREAM ? f.stream : null,
        g = (0, h.Z)(t);
    return (0, r.jsxs)(a.v2r, {
        navId: 'stage-channel-call-overflow-popout',
        onClose: n,
        'aria-label': j.NW.string(j.t.pkYeAw),
        onSelect: l,
        onInteraction: s,
        children: [O(t), E(t), (0, d.Z)(), (0, u.Z)(t), g, (0, p.Z)(m, i)]
    });
}

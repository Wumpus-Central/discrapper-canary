n.d(t, {
    $A: () => Z,
    ZP: () => T,
    j8: () => N
});
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(40851),
    c = n(358221),
    d = n(431368),
    u = n(167675),
    h = n(418469),
    p = n(673539),
    m = n(218035),
    f = n(775666),
    g = n(423589),
    _ = n(592125),
    C = n(496675),
    x = n(881824),
    v = n(146085),
    E = n(427679),
    I = n(354459),
    b = n(388032);
function Z(e) {
    let t = (0, r.e7)([_.Z], () => _.Z.getChannel(e), [e]),
        n = (0, r.e7)([C.Z], () => C.Z.can(v.yP, t)),
        l = (0, r.e7)([E.Z], () => E.Z.getStageInstanceByChannel(e), [e]),
        a = (0, o.bp)(),
        c = () => null != t && (0, x.T)(t, a);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n
        ? null != l
            ? (0, i.jsx)(s.sNh, {
                  id: 'edit-stage',
                  label: b.intl.string(b.t['I+9bLy']),
                  action: c
              })
            : (0, i.jsx)(s.sNh, {
                  id: 'start-stage',
                  label: b.intl.string(b.t.OYbHfn),
                  action: c
              })
        : null;
}
function N(e) {
    let t = (0, r.e7)([_.Z], () => _.Z.getChannel(e), [e]);
    a()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
    let n = (0, g.Mn)('StageChannelCallOverflowMenu'),
        i = (0, f.ZP)(t),
        l = (0, m.Z)(t);
    return n ? i : l;
}
function T(e) {
    let { channelId: t, closePopout: n, appContext: l, onSelect: a } = e,
        o = (0, r.e7)([c.Z], () => c.Z.getSelectedParticipant(t)),
        m = (null == o ? void 0 : o.type) === I.fO.STREAM ? o.stream : null,
        f = (0, p.Z)(t);
    return (0, i.jsxs)(s.v2r, {
        navId: 'stage-channel-call-overflow-popout',
        onClose: n,
        'aria-label': b.intl.string(b.t.pkYeAw),
        onSelect: a,
        children: [Z(t), N(t), (0, u.Z)(), (0, d.Z)(t), f, (0, h.Z)(m, l)]
    });
}

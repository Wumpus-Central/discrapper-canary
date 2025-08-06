n.d(t, {
    $A: () => E,
    j8: () => b
});
var r = n(255367);
n(73800);
var i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(40851);
(n(358221), n(431368), n(167675), n(418469), n(673539));
var c = n(218035),
    u = n(775666),
    d = n(423589),
    f = n(592125),
    _ = n(496675),
    p = n(881824),
    h = n(146085),
    m = n(427679);
n(354459);
var g = n(388032);
function E(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
        n = (0, a.e7)([_.Z], () => _.Z.can(h.yP, t)),
        i = (0, a.e7)([m.Z], () => m.Z.getStageInstanceByChannel(e), [e]),
        o = (0, l.bp)(),
        c = () => null != t && (0, p.T)(t, o);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n
        ? null != i
            ? (0, r.jsx)(s.sNh, {
                  id: 'edit-stage',
                  label: g.intl.string(g.t['I+9bLy']),
                  action: c
              })
            : (0, r.jsx)(s.sNh, {
                  id: 'start-stage',
                  label: g.intl.string(g.t.OYbHfn),
                  action: c
              })
        : null;
}
function b(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]);
    o()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
    let n = (0, d.Mn)('StageChannelCallOverflowMenu'),
        r = (0, u.ZP)(t),
        i = (0, c.Z)(t);
    return n ? r : i;
}

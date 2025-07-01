n.d(t, {
    $A: () => _,
    j8: () => y
});
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(40851);
(n(358221), n(431368), n(167675), n(418469), n(673539));
var c = n(218035),
    u = n(775666),
    d = n(423589),
    p = n(592125),
    h = n(496675),
    f = n(881824),
    m = n(146085),
    g = n(427679);
n(354459);
var b = n(388032);
function _(e) {
    let t = (0, o.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = (0, o.e7)([h.Z], () => h.Z.can(m.yP, t)),
        i = (0, o.e7)([g.Z], () => g.Z.getStageInstanceByChannel(e), [e]),
        l = (0, s.bp)(),
        c = () => null != t && (0, f.T)(t, l);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n
        ? null != i
            ? (0, r.jsx)(a.sNh, {
                  id: 'edit-stage',
                  label: b.intl.string(b.t['I+9bLy']),
                  action: c
              })
            : (0, r.jsx)(a.sNh, {
                  id: 'start-stage',
                  label: b.intl.string(b.t.OYbHfn),
                  action: c
              })
        : null;
}
function y(e) {
    let t = (0, o.e7)([p.Z], () => p.Z.getChannel(e), [e]);
    l()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
    let n = (0, d.Mn)('StageChannelCallOverflowMenu'),
        r = (0, u.ZP)(t),
        i = (0, c.Z)(t);
    return n ? r : i;
}

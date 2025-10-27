n.d(t, {
    $A: () => C,
    j8: () => y,
});
var i = n(951288);
n(647438);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060);
n(358221), n(431368), n(167675), n(418469), n(673539);
var s = n(218035),
    c = n(775666),
    u = n(728285),
    d = n(423589),
    p = n(592125),
    h = n(496675),
    f = n(881824),
    m = n(146085),
    g = n(427679);
n(354459);
var b = n(388032);
function C(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = (0, a.e7)([h.Z], () => h.Z.can(m.yP, t)),
        r = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(e), [e]),
        l = (0, u.bp)(),
        s = () => null != t && (0, f.T)(t, l);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n
        ? null != r
            ? (0, i.jsx)(o.sNh, {
                  id: "edit-stage",
                  label: b.intl.string(b.t["I+9bLx"]),
                  action: s,
              })
            : (0, i.jsx)(o.sNh, {
                  id: "start-stage",
                  label: b.intl.string(b.t.OYbHfv),
                  action: s,
              })
        : null;
}
function y(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]);
    l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, d.Mn)("StageChannelCallOverflowMenu"),
        i = (0, c.ZP)(t),
        r = (0, s.Z)(t);
    return n ? i : r;
}

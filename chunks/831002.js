n.d(t, {
    $A: () => y,
    j8: () => C,
});
var r = n(951288);
n(647438);
var i = n(512722),
    l = n.n(i),
    a = n(442837),
    o = n(481060);
n(358221), n(431368), n(167675), n(418469), n(673539);
var s = n(218035),
    c = n(775666),
    u = n(728285),
    d = n(423589),
    p = n(592125),
    f = n(496675),
    h = n(881824),
    m = n(146085),
    g = n(427679),
    b = n(647767);
n(354459);
var _ = n(388032);
function y(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = (0, a.e7)([f.Z], () => f.Z.can(m.yP, t)),
        i = (0, b.s)(),
        l = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(e), [e]),
        s = (0, u.bp)(),
        c = () => null != t && (0, h.T)(t, s);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n && !i
        ? null != l
            ? (0, r.jsx)(o.sNh, {
                  id: "edit-stage",
                  label: _.intl.string(_.t["I+9bLx"]),
                  action: c,
              })
            : (0, r.jsx)(o.sNh, {
                  id: "start-stage",
                  label: _.intl.string(_.t.OYbHfv),
                  action: c,
              })
        : null;
}
function C(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]);
    l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, d.Mn)("StageChannelCallOverflowMenu"),
        r = (0, c.ZP)(t),
        i = (0, s.Z)(t);
    return n ? r : i;
}

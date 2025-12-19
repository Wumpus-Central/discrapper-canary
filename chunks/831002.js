n.d(t, {
    $A: () => C,
    j8: () => v,
});
var i = n(54381);
n(473749);
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
    f = n(496675),
    h = n(881824),
    m = n(146085),
    g = n(427679),
    b = n(430104);
n(354459);
var y = n(388032);
function C(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = (0, a.e7)([f.Z], () => f.Z.can(m.yP, t)),
        r = (0, b.sP)(),
        l = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(e), [e]),
        s = (0, u.bp)();
    return (null == t ? void 0 : t.isGuildStageVoice()) && n && !r
        ? null != l
            ? (0, i.jsx)(o.sNh, {
                  id: "edit-stage",
                  label: y.intl.string(y.t["I+9bLx"]),
                  action: () => {
                      null != t && (0, h.T)(t, s);
                  },
              })
            : (0, i.jsx)(o.sNh, {
                  id: "start-stage",
                  label: y.intl.string(y.t.OYbHfv),
                  action: () => {
                      null != t && (0, h.T)(t, s);
                  },
              })
        : null;
}
function v(e) {
    let t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]);
    l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, d.Mn)("StageChannelCallOverflowMenu"),
        i = (0, c.ZP)(t),
        r = (0, s.Z)(t);
    return n ? i : r;
}

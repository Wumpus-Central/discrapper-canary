n.d(t, {
    $A: () => v,
    j8: () => O,
});
var r = n(951288);
n(647438);
var i = n(512722),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(168107),
    c = n(480916);
n(358221), n(431368), n(167675), n(418469), n(673539);
var u = n(218035),
    d = n(775666),
    p = n(728285),
    f = n(423589),
    h = n(592125),
    m = n(496675),
    g = n(881824),
    b = n(146085),
    _ = n(427679),
    y = n(430104);
n(354459);
var C = n(388032);
function v(e) {
    let t = (0, a.e7)([h.Z], () => h.Z.getChannel(e), [e]),
        n = (0, a.e7)([m.Z], () => m.Z.can(b.yP, t)),
        i = (0, y.sP)(),
        l = (0, a.e7)([_.Z], () => _.Z.getStageInstanceByChannel(e), [e]),
        u = (0, p.bp)(),
        d = () => {
            (0, y.u1)()
                ? s.Z.showAgeVerificationGetStartedModal({ entryPoint: c.cU.START_STAGE_PROMPT })
                : null != t && (0, g.T)(t, u);
        };
    return (null == t ? void 0 : t.isGuildStageVoice()) && n && !i
        ? null != l
            ? (0, r.jsx)(o.sNh, {
                  id: "edit-stage",
                  label: C.intl.string(C.t["I+9bLx"]),
                  action: d,
              })
            : (0, r.jsx)(o.sNh, {
                  id: "start-stage",
                  label: C.intl.string(C.t.OYbHfv),
                  action: d,
              })
        : null;
}
function O(e) {
    let t = (0, a.e7)([h.Z], () => h.Z.getChannel(e), [e]);
    l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, f.Mn)("StageChannelCallOverflowMenu"),
        r = (0, d.ZP)(t),
        i = (0, u.Z)(t);
    return n ? r : i;
}

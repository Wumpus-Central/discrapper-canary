n.d(t, {
    $A: () => _,
    j8: () => O,
});
var i = n(54381);
n(473749);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(168107),
    c = n(480916);
n(358221), n(431368), n(167675), n(418469), n(673539);
var u = n(218035),
    d = n(775666),
    p = n(728285),
    h = n(423589),
    f = n(592125),
    m = n(496675),
    g = n(881824),
    b = n(146085),
    C = n(427679),
    y = n(430104);
n(354459);
var v = n(388032);
function _(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
        n = (0, a.e7)([m.Z], () => m.Z.can(b.yP, t)),
        r = (0, y.sP)(),
        l = (0, a.e7)([C.Z], () => C.Z.getStageInstanceByChannel(e), [e]),
        u = (0, p.bp)(),
        d = () => {
            (0, y.u1)()
                ? s.Z.showAgeVerificationGetStartedModal({ entryPoint: c.cU.START_STAGE_PROMPT })
                : null != t && (0, g.T)(t, u);
        };
    return (null == t ? void 0 : t.isGuildStageVoice()) && n && !r
        ? null != l
            ? (0, i.jsx)(o.sNh, {
                  id: "edit-stage",
                  label: v.intl.string(v.t["I+9bLx"]),
                  action: d,
              })
            : (0, i.jsx)(o.sNh, {
                  id: "start-stage",
                  label: v.intl.string(v.t.OYbHfv),
                  action: d,
              })
        : null;
}
function O(e) {
    let t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]);
    l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, h.Mn)("StageChannelCallOverflowMenu"),
        i = (0, d.ZP)(t),
        r = (0, u.Z)(t);
    return n ? i : r;
}

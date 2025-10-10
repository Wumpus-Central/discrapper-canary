t.d(n, { Z: () => u });
var o = t(951288),
    r = t(442837),
    a = t(481060),
    i = t(726521),
    c = t(592125),
    l = t(388032);
function u(e, n, t) {
    let u = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
        _ = null == u ? void 0 : u.getGuildId();
    return (0, o.jsx)(a.sNh, {
        id: "report-app",
        color: "danger",
        label: l.intl.string(l.t.NgA5vr),
        action: () =>
            (0, i.uu)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: null != _ ? _ : void 0,
                contextualChannelId: null == u ? void 0 : u.id,
                appContext: t,
            }),
        icon: a.U65,
    });
}

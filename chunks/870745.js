t.d(n, { Z: () => _ });
var o = t(54381),
    r = t(442837),
    a = t(481060),
    i = t(726521),
    c = t(592125),
    l = t(388032);
function _(e, n, t) {
    let _ = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
        u = null == _ ? void 0 : _.getGuildId();
    return (0, o.jsx)(a.sNh, {
        id: "report-app",
        color: "danger",
        label: l.intl.string(l.t.NgA5vp),
        action: () =>
            (0, i.uu)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: null != u ? u : void 0,
                contextualChannelId: null == _ ? void 0 : _.id,
                appContext: t,
            }),
        icon: a.U65,
    });
}

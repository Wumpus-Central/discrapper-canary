t.d(n, { Z: () => u });
var r = t(54381),
    o = t(442837),
    i = t(481060),
    l = t(726521),
    a = t(592125),
    c = t(388032);
function u(e, n, t) {
    let u = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
        s = null == u ? void 0 : u.getGuildId();
    return (0, r.jsx)(i.sNh, {
        id: "report-app",
        color: "danger",
        label: c.intl.string(c.t.NgA5vp),
        action: () =>
            (0, l.uu)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: null != s ? s : void 0,
                contextualChannelId: null == u ? void 0 : u.id,
                appContext: t,
            }),
        icon: i.U65,
    });
}

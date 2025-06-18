n.d(t, { Z: () => u });
var r = n(255367),
    o = n(442837),
    i = n(481060),
    l = n(726521),
    a = n(592125),
    c = n(388032);
function u(e, t, n) {
    let u = (0, o.e7)([a.Z], () => a.Z.getChannel(t)),
        s = null == u ? void 0 : u.getGuildId();
    return (0, r.jsx)(i.sNh, {
        id: 'report-app',
        color: 'danger',
        label: c.intl.string(c.t.NgA5vr),
        action: () =>
            (0, l.uu)({
                application: e,
                entrypoint: 'activity_ui_popout',
                contextualGuildId: null != s ? s : void 0,
                contextualChannelId: null == u ? void 0 : u.id,
                appContext: n
            }),
        icon: i.U65
    });
}

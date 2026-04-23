n.d(t, { A: () => d });
var l = n(627968),
    i = n(311907),
    a = n(477782),
    r = n(138134),
    o = n(928658),
    s = n(734057),
    c = n(985018);
function d(e, t, n) {
    let d = (0, i.bG)([s.A], () => s.A.getChannel(t)),
        u = d?.getGuildId();
    return (0, l.jsx)(a.Dr, {
        id: "report-app",
        color: "danger",
        label: c.intl.string(c.t.NgA5vp),
        action: () =>
            (0, o.r3)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: u ?? void 0,
                contextualChannelId: d?.id,
                appContext: n,
            }),
        icon: r.i,
        leadingAccessory: { type: "icon", icon: r.i },
    });
}

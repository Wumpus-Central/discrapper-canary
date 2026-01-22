a.d(t, {
    A: () => i,
});
var c = a(627968),
    n = a(311907),
    l = a(397927),
    d = a(928658),
    r = a(734057),
    o = a(985018);

function i(e, t, a) {
    let i = (0, n.bG)([r.A], () => r.A.getChannel(t)),
        f = null == i ? void 0 : i.getGuildId();
    return (0, c.jsx)(l.Drp, {
        id: "report-app",
        color: "danger",
        label: o.intl.string(o.t.NgA5vp),
        action: () =>
            (0, d.r3)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: null != f ? f : void 0,
                contextualChannelId: null == i ? void 0 : i.id,
                appContext: a,
            }),
        icon: l.iFK,
    });
}

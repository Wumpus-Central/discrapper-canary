t.d(n, {
    A: () => _,
});
var r = t(627968),
    o = t(311907),
    a = t(397927),
    i = t(928658),
    l = t(734057),
    c = t(985018);

function _(e, n, t) {
    let _ = (0, o.bG)([l.A], () => l.A.getChannel(n)),
        s = null == _ ? void 0 : _.getGuildId();
    return (0, r.jsx)(a.Drp, {
        id: "report-app",
        color: "danger",
        label: c.intl.string(c.t.NgA5vp),
        action: () =>
            (0, i.r3)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: null != s ? s : void 0,
                contextualChannelId: null == _ ? void 0 : _.id,
                appContext: t,
            }),
        icon: a.iFK,
        leadingAccessory: {
            type: "icon",
            icon: a.iFK,
        },
    });
}

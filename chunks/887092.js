n.d(t, { A: () => c });
var l = n(627968),
    i = n(311907),
    a = n(397927),
    o = n(928658),
    r = n(734057),
    s = n(985018);
function c(e, t, n) {
    let c = (0, i.bG)([r.A], () => r.A.getChannel(t)),
        d = c?.getGuildId();
    return (0, l.jsx)(a.Drp, {
        id: "report-app",
        color: "danger",
        label: s.intl.string(s.t.NgA5vp),
        action: () =>
            (0, o.r3)({
                application: e,
                entrypoint: "activity_ui_popout",
                contextualGuildId: d ?? void 0,
                contextualChannelId: c?.id,
                appContext: n,
            }),
        icon: a.iFK,
        leadingAccessory: { type: "icon", icon: a.iFK },
    });
}

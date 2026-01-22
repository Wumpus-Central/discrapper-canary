n.d(t, { A: () => s });
var r = n(627968),
    l = n(990078),
    i = n(851109),
    a = n(985018);
function s(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, i.X8)({ location: "NotificationsInboxTooltip" }),
        s = n === i.U5.LEGACY ? a.intl.string(a.t.GSmTKJ) : a.intl.string(a.t.HcoRu0);
    return (0, r.jsx)(l.m, {
        spacing: 12,
        position: "right",
        text: s,
        children: (0, r.jsx)("div", { children: t }),
    });
}

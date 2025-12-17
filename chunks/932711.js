n.d(t, { Z: () => o });
var r = n(54381),
    i = n(28664),
    l = n(821020),
    a = n(388032);
function o(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, l.pN)({ location: "NotificationsInboxTooltip" }),
        o = n === l.jP.LEGACY ? a.intl.string(a.t.GSmTKJ) : a.intl.string(a.t.HcoRu0);
    return (0, r.jsx)(i.u, {
        spacing: 12,
        position: "right",
        text: o,
        children: (0, r.jsx)("div", { children: t }),
    });
}

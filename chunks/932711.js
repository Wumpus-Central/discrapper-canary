n.d(t, { Z: () => a });
var r = n(54381),
    i = n(28664),
    l = n(821020),
    o = n(388032);
function a(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, l.pN)({ location: "NotificationsInboxTooltip" }),
        a = n === l.jP.LEGACY ? o.intl.string(o.t.GSmTKJ) : o.intl.string(o.t.HcoRu0);
    return (0, r.jsx)(i.u, {
        spacing: 12,
        position: "right",
        text: a,
        children: (0, r.jsx)("div", { children: t }),
    });
}

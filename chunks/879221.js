"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(990078),
    l = n(851109),
    r = n(985018);
function a(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, l.X8)({ location: "NotificationsInboxTooltip" }),
        a = n === l.U5.LEGACY ? r.intl.string(r.t.GSmTKJ) : r.intl.string(r.t.HcoRu0);
    return (0, i.jsx)(s.m, { spacing: 12, position: "right", text: a, children: (0, i.jsx)("div", { children: t }) });
}

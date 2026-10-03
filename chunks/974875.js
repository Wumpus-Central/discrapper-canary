e.d(n, { Q: () => d });
var i = e(477900);
e(582128);
var s = e(192308),
    a = e(579872),
    l = e(104217),
    o = e(390248),
    r = e(900019),
    c = e(375708);
function d(t, n) {
    if (
        ((0, o.hv)({ action: o.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: n, channelId: t }),
        !r.A.canSubmitFpReport(n))
    ) {
        (a.A.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS),
        }),
            l.A.disableFalsePositiveButton(t, n));
        return;
    }
    (0, s.openModalLazy)(async () => {
        let { default: s } = await e(287002);
        return (e) => (0, i.jsx)(s, { channelId: t, messageId: n, ...e });
    });
}

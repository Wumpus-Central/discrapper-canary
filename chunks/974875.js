e.d(n, { Q: () => u });
var i = e(477900);
e(582128);
var a = e(192308),
    l = e(579872),
    s = e(104217),
    r = e(390248),
    o = e(900019),
    c = e(375708);
function u(t, n) {
    if (
        ((0, r.hv)({ action: r.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: n, channelId: t }),
        !o.A.canSubmitFpReport(n))
    ) {
        l.A.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS),
        }),
            s.A.disableFalsePositiveButton(t, n);
        return;
    }
    (0, a.openModalLazy)(async () => {
        let { default: a } = await e(287002);
        return (e) => (0, i.jsx)(a, { channelId: t, messageId: n, ...e });
    });
}

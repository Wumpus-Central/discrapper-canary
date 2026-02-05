n.d(t, { Q: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(579872),
    r = n(104217),
    s = n(390248),
    o = n(900819),
    d = n(985018);
function c(e, t) {
    if (
        ((0, s.hv)({ action: s.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId: t, channelId: e }),
        !o.A.canSubmitFpReport(t))
    ) {
        a.A.show({
            title: d.intl.string(d.t["iS/eFN"]),
            body: d.intl.string(d.t.YrjcgR),
            confirmText: d.intl.string(d.t.BddRzS),
        }),
            r.A.disableFalsePositiveButton(e, t);
        return;
    }
    (0, l.mMO)(async () => {
        let { default: l } = await n(287002);
        return (n) => (0, i.jsx)(l, { channelId: e, messageId: t, ...n });
    });
}

n.r(t), n.d(t, { default: () => d });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(522664),
    o = n(247206),
    a = n(668058),
    c = n(112554),
    s = n(160877),
    u = n(388032);
function d(e) {
    let { channelId: t, messageId: n, mediaItemUrl: d, embedId: f, transitionState: g, onClose: b } = e,
        p = (0, c.v)(t, n, d),
        O = (0, c.Z)(t, n, f),
        { reportFalsePositive: y, isReportFalsePositiveLoading: m } = (0, a.$)({
            onSuccess: () => (0, s.s)(b),
            onError: () => {
                (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRX), i.ToastType.FAILURE));
            },
            report: () => {
                (0, l.Uj)(
                    t,
                    n,
                    p.map((e) => e.id),
                    O.map((e) => e.id),
                );
            },
        });
    return (
        p.length > 0 || O.length > 0 || b(),
        (0, r.jsx)(s.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: m,
            analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: y,
            attachmentPreview: 1 === p.length && 0 === O.length ? p[0] : void 0,
            embedPreview: 1 === O.length && 0 === p.length ? O[0] : void 0,
            transitionState: g,
            onClose: b,
        })
    );
}

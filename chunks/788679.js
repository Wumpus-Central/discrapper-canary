n.r(t), n.d(t, { default: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(522664),
    a = n(247206),
    o = n(668058),
    s = n(112554),
    c = n(160877),
    u = n(388032);
function d(e) {
    let { channelId: t, messageId: n, mediaItemUrl: d, embedId: f, transitionState: g, onClose: b } = e,
        p = (0, s.v)(t, n, d),
        y = (0, s.Z)(t, n, f),
        { reportFalsePositive: O, isReportFalsePositiveLoading: h } = (0, o.$)({
            onSuccess: () => (0, c.s)(b),
            onError: () => {
                (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRX), i.ToastType.FAILURE));
            },
            report: () => {
                (0, l.Uj)(
                    t,
                    n,
                    p.map((e) => e.id),
                    y.map((e) => e.id),
                );
            },
        });
    return (
        p.length > 0 || y.length > 0 || b(),
        (0, r.jsx)(c.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: h,
            analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: O,
            attachmentPreview: 1 === p.length && 0 === y.length ? p[0] : void 0,
            embedPreview: 1 === y.length && 0 === p.length ? y[0] : void 0,
            transitionState: g,
            onClose: b,
        })
    );
}

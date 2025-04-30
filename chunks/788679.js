n.r(t), n.d(t, { default: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(522664),
    a = n(247206),
    o = n(668058),
    s = n(112554),
    c = n(160877),
    u = n(388032);
function d(e) {
    let { channelId: t, messageId: n, mediaItemUrl: d, embedId: f, transitionState: g, onClose: m } = e,
        h = (0, s.K)(t, n, d),
        b = (0, s.b)(t, n, f),
        { reportFalsePositive: p, isReportFalsePositiveLoading: O } = (0, o.$)({
            onSuccess: () => (0, c.s)(m),
            onError: () => {
                (0, r.showToast)((0, r.createToast)(u.intl.string(u.t.R0RpRU), r.ToastType.FAILURE));
            },
            report: () => {
                (0, l.Uj)(
                    t,
                    n,
                    h.map((e) => e.id),
                    b.map((e) => e.id)
                );
            }
        });
    return (
        h.length > 0 || b.length > 0 || m(),
        (0, i.jsx)(c.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: O,
            analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: p,
            attachmentPreview: 1 === h.length && 0 === b.length ? h[0] : void 0,
            embedPreview: 1 === b.length && 0 === h.length ? b[0] : void 0,
            transitionState: g,
            onClose: m
        })
    );
}

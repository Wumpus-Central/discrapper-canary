n.r(t), n.d(t, { default: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(522664),
    a = n(247206),
    o = n(668058),
    s = n(112554),
    c = n(160877),
    u = n(388032);
function d(e) {
    let { channelId: t, messageId: n, mediaItemUrl: d, embedId: f, transitionState: g, onClose: m } = e,
        b = (0, s.K)(t, n, d),
        p = (0, s.b)(t, n, f),
        { reportFalsePositive: h, isReportFalsePositiveLoading: y } = (0, o.$)({
            onSuccess: () => (0, c.s)(m),
            onError: () => {
                (0, i.showToast)((0, i.createToast)(u.NW.string(u.t.R0RpRU), i.ToastType.FAILURE));
            },
            report: () => {
                (0, l.Uj)(
                    t,
                    n,
                    b.map((e) => e.id),
                    p.map((e) => e.id)
                );
            }
        });
    return (
        b.length > 0 || p.length > 0 || m(),
        (0, r.jsx)(c.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: y,
            analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: h,
            attachmentPreview: 1 === b.length && 0 === p.length ? b[0] : void 0,
            embedPreview: 1 === p.length && 0 === b.length ? p[0] : void 0,
            transitionState: g,
            onClose: m
        })
    );
}

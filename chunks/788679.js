n.r(t), n.d(t, { default: () => g });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(522664),
    s = n(651530),
    r = n(247206),
    o = n(668058),
    d = n(112554),
    c = n(160877),
    u = n(388032);
function g(e) {
    let { channelId: t, messageId: n, mediaItemUrl: g, embedId: f, transitionState: m, onClose: h } = e,
        E = (0, s.yh)(),
        v = (0, d.K)(t, n, g),
        Z = (0, d.b)(t, n, f),
        { reportFalsePositive: x, isReportFalsePositiveLoading: p } = (0, o.$)({
            onSuccess: () => (0, c.s)(h),
            onError: () => {
                (0, l.showToast)((0, l.createToast)(u.intl.string(u.t.R0RpRU), l.ToastType.FAILURE));
            },
            report: () => {
                (0, a.Uj)(
                    t,
                    n,
                    v.map((e) => e.id),
                    Z.map((e) => e.id)
                );
            }
        });
    return (
        (E && (v.length > 0 || Z.length > 0)) || h(),
        (0, i.jsx)(c.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: p,
            analyticsContext: r.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: x,
            attachmentPreview: 1 === v.length && 0 === Z.length ? v[0] : void 0,
            embedPreview: 1 === Z.length && 0 === v.length ? Z[0] : void 0,
            transitionState: m,
            onClose: h
        })
    );
}

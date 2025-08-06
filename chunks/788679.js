(n.r(t), n.d(t, { default: () => d }));
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(522664),
    a = n(247206),
    s = n(668058),
    l = n(112554),
    c = n(160877),
    u = n(388032);
function d(e) {
    let { channelId: t, messageId: n, mediaItemUrl: d, embedId: f, transitionState: _, onClose: p } = e,
        h = (0, l.v)(t, n, d),
        m = (0, l.Z)(t, n, f),
        { reportFalsePositive: g, isReportFalsePositiveLoading: E } = (0, s.$)({
            onSuccess: () => (0, c.s)(p),
            onError: () => {
                (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRU), i.ToastType.FAILURE));
            },
            report: () => {
                (0, o.Uj)(
                    t,
                    n,
                    h.map((e) => e.id),
                    m.map((e) => e.id)
                );
            }
        });
    return (
        h.length > 0 || m.length > 0 || p(),
        (0, r.jsx)(c.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: E,
            analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: g,
            attachmentPreview: 1 === h.length && 0 === m.length ? h[0] : void 0,
            embedPreview: 1 === m.length && 0 === h.length ? m[0] : void 0,
            transitionState: _,
            onClose: p
        })
    );
}

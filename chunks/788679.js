n.r(t), n.d(t, { default: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(522664),
    a = n(247206),
    o = n(668058),
    s = n(112554),
    c = n(160877),
    u = n(388032);
function d(e) {
    let { channelId: t, messageId: n, mediaItemUrl: d, embedId: f, transitionState: g, onClose: b } = e,
        p = (0, s.K)(t, n, d),
        O = (0, s.b)(t, n, f),
        { reportFalsePositive: m, isReportFalsePositiveLoading: h } = (0, o.$)({
            onSuccess: () => (0, c.s)(b),
            onError: () => {
                (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRU), i.ToastType.FAILURE));
            },
            report: () => {
                (0, l.Uj)(
                    t,
                    n,
                    p.map((e) => e.id),
                    O.map((e) => e.id)
                );
            }
        });
    return (
        p.length > 0 || O.length > 0 || b(),
        (0, r.jsx)(c.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: h,
            analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: m,
            attachmentPreview: 1 === p.length && 0 === O.length ? p[0] : void 0,
            embedPreview: 1 === O.length && 0 === p.length ? O[0] : void 0,
            transitionState: g,
            onClose: b
        })
    );
}

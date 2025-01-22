t.r(n),
    t.d(n, {
        default: function () {
            return g;
        }
    });
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(522664),
    a = t(651530),
    o = t(247206),
    s = t(668058),
    u = t(112554),
    d = t(160877),
    c = t(388032);
function g(e) {
    let { channelId: n, messageId: t, mediaItemUrl: g, embedId: f, transitionState: m, onClose: h } = e,
        E = (0, a.yh)(),
        I = (0, u.K)(n, t, g),
        v = (0, u.b)(n, t, f),
        { reportFalsePositive: M, isReportFalsePositiveLoading: p } = (0, s.$)({
            onSuccess: () => (0, d.s)(h),
            onError: () => {
                (0, l.showToast)((0, l.createToast)(c.intl.string(c.t.R0RpRU), l.ToastType.FAILURE));
            },
            report: () => {
                (0, r.Uj)(
                    n,
                    t,
                    I.map((e) => e.id),
                    v.map((e) => e.id)
                );
            }
        });
    return (
        !(E && (I.length > 0 || v.length > 0)) && h(),
        (0, i.jsx)(d.$, {
            messageId: t,
            channelId: n,
            isReportFalsePositiveLoading: p,
            analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: M,
            attachmentPreview: 1 === I.length && 0 === v.length ? I[0] : void 0,
            embedPreview: 1 === v.length && 0 === I.length ? v[0] : void 0,
            transitionState: m,
            onClose: h
        })
    );
}

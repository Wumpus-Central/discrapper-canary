n.r(t), n.d(t, { default: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(522664),
    s = n(247206),
    r = n(668058),
    o = n(112554),
    d = n(160877),
    c = n(388032);
function u(e) {
    let { channelId: t, messageId: n, mediaItemUrl: u, embedId: g, transitionState: f, onClose: m } = e,
        h = (0, o.K)(t, n, u),
        E = (0, o.b)(t, n, g),
        { reportFalsePositive: v, isReportFalsePositiveLoading: Z } = (0, r.$)({
            onSuccess: () => (0, d.s)(m),
            onError: () => {
                (0, l.showToast)((0, l.createToast)(c.intl.string(c.t.R0RpRU), l.ToastType.FAILURE));
            },
            report: () => {
                (0, a.Uj)(
                    t,
                    n,
                    h.map((e) => e.id),
                    E.map((e) => e.id)
                );
            }
        });
    return (
        h.length > 0 || E.length > 0 || m(),
        (0, i.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: Z,
            analyticsContext: s.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: v,
            attachmentPreview: 1 === h.length && 0 === E.length ? h[0] : void 0,
            embedPreview: 1 === E.length && 0 === h.length ? E[0] : void 0,
            transitionState: f,
            onClose: m
        })
    );
}

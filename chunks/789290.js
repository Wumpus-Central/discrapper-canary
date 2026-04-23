n.d(t, { A: () => s });
var i = n(64700),
    l = n(172218),
    a = n(521741),
    r = n(633075);
function s(e) {
    let { widget: t, onAction: n } = e,
        [s, o] = (0, i.useState)(!1),
        c = t instanceof r.R ? t.applicationId : null,
        { fetched: d } = (0, a.U)(c),
        u = (0, i.useCallback)(
            (e) => {
                e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), o(!0));
            },
            [n, t],
        );
    return (0, l.K)(u, void 0, !s && (null == c || d));
}

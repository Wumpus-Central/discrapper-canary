n.d(t, { A: () => c });
var r = n(64700),
    l = n(17928),
    a = n(736056),
    s = n(851245),
    i = n(671281);
let c = function (e, t, n) {
    let c = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments),
        [o, u, d] = (0, l.yK)([i.A], () => [
            i.A.getTemplateLayout(e, t, n),
            i.A.isFetchingTemplate(e, t, n),
            i.A.getTemplateFetchError(e, t, n),
        ]),
        h = null == o && null != t && c && !u && null == d;
    return (
        r.useEffect(() => {
            h && (0, s.J)({ tenantId: e, templateId: t, requestParams: n }).catch(() => {});
        }, [h, e, t, n]),
        { layout: o, loading: u, error: d }
    );
};

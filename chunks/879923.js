n.d(t, { A: () => c });
var r = n(582128),
    l = n(17928),
    a = n(736056),
    i = n(851245),
    s = n(671281);
let c = function (e, t, n) {
    let c = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments),
        [o, u, d] = (0, l.yK)([s.A], () => [
            s.A.getTemplateLayout(e, t, n),
            s.A.isFetchingTemplate(e, t, n),
            s.A.getTemplateFetchError(e, t, n),
        ]),
        h = null == o && null != t && c && !u && null == d;
    return (
        r.useEffect(() => {
            h && (0, i.J)({ tenantId: e, templateId: t, requestParams: n }).catch(() => {});
        }, [h, e, t, n]),
        { layout: o, loading: u, error: d }
    );
};

l.d(t, { A: () => c });
var r = l(64700),
    n = l(17928),
    a = l(736056),
    s = l(851245),
    i = l(671281);
let c = (e, t, l) => {
    let c = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [d, o, u] = (0, n.yK)([i.A], () => [
            i.A.getTemplateLayout(e, t, l),
            i.A.isFetchingTemplate(e, t, l),
            i.A.getTemplateFetchError(e, t, l),
        ]),
        m = null == d && null != t && c && !o && null == u;
    return (
        r.useEffect(() => {
            m && (0, s.J)({ tenantId: e, templateId: t, requestParams: l }).catch(() => {});
        }, [m, e, t, l]),
        { layout: d, loading: o, error: u }
    );
};

n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    a = n(702841),
    r = n(793574),
    o = n(688810),
    d = n(139286),
    c = n(627363),
    u = n(587895),
    m = n(485724),
    h = n(204776);
function g(e) {
    let { applicationId: t, message: n } = e,
        [s, r, o] = (0, a.yK)(
            [u.A],
            () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (l.useEffect(() => {
        null != s || r || o || c.Ay.fetchApplication(t);
    }, [s, r, o, t]),
    null != s &&
        (0, h.Ie)({
            customInstallUrl: s.customInstallUrl,
            installParams: s.installParams,
            integrationTypesConfig: s.integrationTypesConfig,
        }))
        ? (0, i.jsx)(A, { application: s, message: n })
        : null;
}
function A(e) {
    let { application: t, message: n } = e,
        a = l.useCallback(() => {
            (0, d.x)({
                type: s.ImpressionTypes.VIEW,
                name: s.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: c } = (0, o.Ay)(r.A.APP_OAUTH2_LINK_EMBED);
    return (0, i.jsx)(o.f5, {
        value: c,
        children: (0, i.jsx)(m.W, { app: t, linkType: m.J.OAUTH, onView: a, message: n }),
    });
}

n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    r = n(702841),
    s = n(793574),
    o = n(688810),
    c = n(139286),
    d = n(627363),
    u = n(587895),
    _ = n(485724),
    m = n(204776);
function h(e) {
    let { applicationId: t, message: n } = e,
        [a, s, o] = (0, r.yK)(
            [u.A],
            () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (l.useEffect(() => {
        null != a || s || o || d.Ay.fetchApplication(t);
    }, [a, s, o, t]),
    null != a &&
        (0, m.Ie)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig,
        }))
        ? (0, i.jsx)(p, { application: a, message: n })
        : null;
}
function p(e) {
    let { application: t, message: n } = e,
        r = l.useCallback(() => {
            (0, c.x)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: d } = (0, o.Ay)(s.A.APP_OAUTH2_LINK_EMBED);
    return (0, i.jsx)(o.f5, {
        value: d,
        children: (0, i.jsx)(_.W, { app: t, linkType: _.J.OAUTH, onView: r, message: n }),
    });
}

n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    s = n(417597),
    r = n(793574),
    o = n(688810),
    d = n(139286),
    c = n(627363),
    u = n(587895),
    m = n(485724),
    _ = n(204776);
function h(e) {
    let { applicationId: t, message: n } = e,
        [a, r, o] = (0, s.yK)(
            [u.A],
            () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (l.useEffect(() => {
        null != a || r || o || c.Ay.fetchApplication(t);
    }, [a, r, o, t]),
    null != a &&
        (0, _.Ie)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig,
        }))
        ? (0, i.jsx)(p, { application: a, message: n })
        : null;
}
function p(e) {
    let { application: t, message: n } = e,
        s = l.useCallback(() => {
            (0, d.x)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: c } = (0, o.Ay)(r.A.APP_OAUTH2_LINK_EMBED);
    return (0, i.jsx)(o.f5, {
        value: c,
        children: (0, i.jsx)(m.W, { app: t, linkType: m.J.OAUTH, onView: s, message: n }),
    });
}

n.d(t, { A: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(417597),
    o = n(793574),
    l = n(688810),
    c = n(139286),
    u = n(627363),
    d = n(587895),
    f = n(485724),
    p = n(204776);
function _(e) {
    let { applicationId: t, message: n } = e,
        [a, o, l] = (0, s.yK)(
            [d.A],
            () => [d.A.getApplication(t), d.A.isFetchingApplication(t), d.A.didFetchingApplicationFail(t)],
            [t],
        );
    return (i.useEffect(() => {
        null != a || o || l || u.Ay.fetchApplication(t);
    }, [a, o, l, t]),
    null != a &&
        (0, p.Ie)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig,
        }))
        ? (0, r.jsx)(h, {
              application: a,
              message: n,
          })
        : null;
}
function h(e) {
    let { application: t, message: n } = e,
        s = i.useCallback(() => {
            (0, c.x)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]),
        { analyticsLocations: u } = (0, l.Ay)(o.A.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(l.f5, {
        value: u,
        children: (0, r.jsx)(f.W, {
            app: t,
            linkType: f.J.OAUTH,
            onView: s,
            message: n,
        }),
    });
}

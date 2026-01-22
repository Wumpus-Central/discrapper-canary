n.d(t, {
    q: () => d,
});
var r = n(485845),
    i = n(58149),
    a = n(200330),
    s = n(611010),
    o = n(627363),
    l = n(587895),
    c = n(204776),
    u = n(652215);
async function d(e) {
    var t, n, d;
    let { applicationId: f, channel: p, commandIntegrationTypes: _, appLauncherContext: h } = e;
    if (
        !(0, c.Rx)({
            applicationId: f,
            channel: p,
            commandIntegrationTypes: _,
        })
    )
        return Promise.resolve({
            isAuthorized: !0,
        });
    let m = l.A.getApplication(f);
    if (null == m) {
        let e = await (0, o.TA)(f);
        m = s.Ay.createFromServer(e);
    }
    let g = r.b.USER_INSTALL,
        E =
            null == m ||
            null == (d = m.integrationTypesConfig) ||
            null == (n = d[g]) ||
            null == (t = n.oauth2InstallParams)
                ? void 0
                : t.scopes;
    return (
        null != h &&
            (0, i.zV)(u.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
                application_id: f,
                location: h.location,
                section_name: h.sectionName,
                source: h.entrypoint,
            }),
        new Promise((e) => {
            (0, a.openOAuth2Modal)(
                {
                    clientId: f,
                    integrationType: g,
                    scopes: E,
                    callback: (t) => {
                        let { location: n } = t;
                        null != n
                            ? (null != h &&
                                  (0, i.zV)(u.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                                      application_id: f,
                                      location: h.location,
                                      section_name: h.sectionName,
                                      source: h.entrypoint,
                                  }),
                              e({
                                  isAuthorized: !0,
                              }))
                            : e({
                                  isAuthorized: !1,
                              });
                    },
                },
                () => {
                    e({
                        isAuthorized: !1,
                    });
                },
            );
        })
    );
}

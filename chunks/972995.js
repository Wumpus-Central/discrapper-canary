"use strict";
n.d(t, { q: () => d });
var r = n(485845),
    i = n(58149),
    a = n(200330),
    s = n(611010),
    o = n(627363),
    l = n(587895),
    u = n(204776),
    c = n(652215);
async function d(e) {
    let { applicationId: t, channel: n, commandIntegrationTypes: d, appLauncherContext: _ } = e;
    if (!(0, u.Rx)({ applicationId: t, channel: n, commandIntegrationTypes: d }))
        return Promise.resolve({ isAuthorized: !0 });
    let f = l.A.getApplication(t);
    if (null == f) {
        let e = await (0, o.TA)(t);
        f = s.Ay.createFromServer(e);
    }
    let p = r.b.USER_INSTALL,
        h = f?.integrationTypesConfig?.[p]?.oauth2InstallParams?.scopes;
    return (
        null != _ &&
            (0, i.zV)(c.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
                application_id: t,
                location: _.location,
                section_name: _.sectionName,
                source: _.entrypoint,
            }),
        new Promise((e) => {
            (0, a.openOAuth2Modal)(
                {
                    clientId: t,
                    integrationType: p,
                    scopes: h,
                    callback: (n) => {
                        let { location: r } = n;
                        null != r
                            ? (null != _ &&
                                  (0, i.zV)(c.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                                      application_id: t,
                                      location: _.location,
                                      section_name: _.sectionName,
                                      source: _.entrypoint,
                                  }),
                              e({ isAuthorized: !0 }))
                            : e({ isAuthorized: !1 });
                    },
                },
                () => {
                    e({ isAuthorized: !1 });
                },
            );
        })
    );
}

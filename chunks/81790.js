"use strict";
n.d(t, { t: () => o });
var r = n(64700),
    i = n(311907),
    a = n(10716),
    s = n(360469);
let o = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, i.cf)(
            [a.A],
            () => ({ isEnabled: a.A.getIsEnabled(), lastUsedObject: a.A.getLastUsedObject() }),
            [],
        ),
        n = (0, i.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
    return r.useMemo(
        () =>
            e
                ? n
                      .map((e) => ({
                          application: e,
                          activity: { ...s.Gl, ...e.embeddedActivityConfig, application_id: e.id },
                      }))
                      .sort((e, n) => {
                          let r = t[e.application.id],
                              i = t[n.application.id];
                          return null == r ? 1 : null == i ? -1 : i - r;
                      })
                : [],
        [n, e, t],
    );
};

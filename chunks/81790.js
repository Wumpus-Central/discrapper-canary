n.d(t, { t: () => r });
var l = n(64700),
    i = n(311907),
    a = n(10716),
    s = n(360469);
let r = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, i.cf)(
            [a.A],
            () => ({ isEnabled: a.A.getIsEnabled(), lastUsedObject: a.A.getLastUsedObject() }),
            [],
        ),
        n = (0, i.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
    return l.useMemo(
        () =>
            e
                ? n
                      .map((e) => ({
                          application: e,
                          activity: { ...s.Gl, ...e.embeddedActivityConfig, application_id: e.id },
                      }))
                      .sort((e, n) => {
                          let l = t[e.application.id],
                              i = t[n.application.id];
                          return null == l ? 1 : null == i ? -1 : i - l;
                      })
                : [],
        [n, e, t],
    );
};

n.d(t, { t: () => r });
var i = n(64700),
    l = n(311907),
    a = n(10716),
    s = n(360469);
let r = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, l.cf)(
            [a.A],
            () => ({ isEnabled: a.A.getIsEnabled(), lastUsedObject: a.A.getLastUsedObject() }),
            [],
        ),
        n = (0, l.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
    return i.useMemo(
        () =>
            e
                ? n
                      .map((e) => ({
                          application: e,
                          activity: { ...s.Gl, ...e.embeddedActivityConfig, application_id: e.id },
                      }))
                      .sort((e, n) => {
                          let i = t[e.application.id],
                              l = t[n.application.id];
                          return null == i ? 1 : null == l ? -1 : l - i;
                      })
                : [],
        [n, e, t],
    );
};

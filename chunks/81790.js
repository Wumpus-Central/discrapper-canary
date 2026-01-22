n.d(t, { t: () => d }), n(638769);
var r = n(64700),
    i = n(311907),
    a = n(10716),
    s = n(360469);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, i.cf)(
            [a.A],
            () => ({
                isEnabled: a.A.getIsEnabled(),
                lastUsedObject: a.A.getLastUsedObject(),
            }),
            [],
        ),
        n = (0, i.yK)([a.A], () => a.A.getDeveloperShelfItems(), []);
    return r.useMemo(
        () =>
            e
                ? n
                      .map((e) => ({
                          application: e,
                          activity: u(l({}, s.Gl, e.embeddedActivityConfig), { application_id: e.id }),
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

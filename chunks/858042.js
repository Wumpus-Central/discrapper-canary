n.d(t, { M: () => l });
var r = n(200651),
    i = n(481060),
    o = n(388032);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e) {
    let { applicationId: t, viewId: a, showOutdatedInfoOption: l = !0 } = e;
    if (null == t) return null;
    let c = () =>
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('46923').then(n.bind(n, 55396));
            return (n) =>
                (0, r.jsx)(
                    e,
                    s(
                        {
                            showOutdatedInfoOption: l,
                            applicationId: t,
                            viewId: a
                        },
                        n
                    )
                );
        });
    return (0, r.jsx)(i.sNh, {
        id: 'game-profile-something-wrong',
        label: o.NW.string(o.t.qP2cXV),
        action: c
    });
}

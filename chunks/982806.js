n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = {
    show(e) {
        let { url: t, trustUrl: o, onConfirm: s, onCancel: c, isProtocol: u, contextKey: d } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e('85668').then(n.bind(n, 720553));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(a({}, n), {
                            url: t,
                            isProtocol: u,
                            trustUrl: o,
                            onConfirm: s,
                            onCancel: c
                        })
                    );
            },
            { contextKey: d }
        );
    }
};

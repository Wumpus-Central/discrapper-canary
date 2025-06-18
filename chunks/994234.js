n.d(t, { z: () => c });
var r = n(818083);
function i(e, t, n) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = {
        forceModel: void 0,
        krispSuppressionLevel: void 0
    },
    c = (0, r.B)({
        kind: 'user',
        id: '2025-06_krisp_levers',
        label: 'Krisp Levers Experiment',
        defaultConfig: l,
        treatments: [
            {
                id: 1,
                label: 'Always use current 32kHz model',
                config: s(a({}, l), { forceModel: 'full_NC' })
            },
            {
                id: 2,
                label: 'Always use new large model',
                config: s(a({}, l), { forceModel: 'c8_NC' })
            },
            {
                id: 3,
                label: 'Always use new large model with laughter detection',
                config: s(a({}, l), { forceModel: 'c8_NC_laughter' })
            },
            {
                id: 4,
                label: 'Use a lowered suppression level using existing models',
                config: s(a({}, l), { krispSuppressionLevel: 95 })
            }
        ]
    });

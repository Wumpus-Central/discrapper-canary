n.d(t, {
    M: () => d,
    ZP: () => O,
});
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = "0";
var d = (function (e) {
    return (e[(e.FETCHING = 0)] = "FETCHING"), (e[(e.FETCHED = 1)] = "FETCHED"), (e[(e.ERROR = 2)] = "ERROR"), e;
})({});
let f = {},
    _ = {},
    p = {};
function h(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    return "location:".concat(t, " channelId:").concat(u, " withCommands:").concat(r);
}
function m(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    _ = c(s({}, _), {
        [h({
            location: t,
            channelId: n,
            withCommands: r,
        })]: 0,
    });
}
function g(e) {
    let { recommendations: t, location: n, channelId: r, withCommands: i } = e,
        o = h({
            location: n,
            channelId: r,
            withCommands: i,
        });
    (f = c(s({}, f), { [o]: t })), (_ = c(s({}, _), { [o]: 1 }));
    let a = Date.now();
    p = c(s({}, p), { [o]: a });
}
function E(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    _ = c(s({}, _), {
        [h({
            location: t,
            channelId: n,
            withCommands: r,
        })]: 2,
    });
}
let b = Object.freeze([]);
class y extends (r = i.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return p[
            h({
                location: t,
                channelId: n,
                withCommands: r,
            })
        ];
    }
    getFetchState(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return _[
            h({
                location: t,
                channelId: n,
                withCommands: r,
            })
        ];
    }
    getRecommendations(e) {
        var t;
        let { location: n, channelId: r, withCommands: i } = e;
        return null !=
            (t =
                f[
                    h({
                        location: n,
                        channelId: r,
                        withCommands: i,
                    })
                ])
            ? t
            : b;
    }
}
a(y, "displayName", void 0);
let O = new y(o.Z, {
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: m,
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: g,
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: E,
});

n.d(t, {
    M: () => u,
    ZP: () => E
});
var o,
    i,
    r = n(442837),
    l = n(570140);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, o);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var u = (((o = {})[(o.FETCHING = 0)] = 'FETCHING'), (o[(o.FETCHED = 1)] = 'FETCHED'), (o[(o.ERROR = 2)] = 'ERROR'), o);
let s = {},
    m = {},
    p = {};
function f(e) {
    let { location: t, channelId: n, withCommands: o } = e;
    return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(o);
}
let O = Object.freeze([]);
class b extends (i = r.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: t, channelId: n, withCommands: o } = e;
        return p[
            f({
                location: t,
                channelId: n,
                withCommands: o
            })
        ];
    }
    getFetchState(e) {
        let { location: t, channelId: n, withCommands: o } = e;
        return m[
            f({
                location: t,
                channelId: n,
                withCommands: o
            })
        ];
    }
    getRecommendations(e) {
        var t;
        let { location: n, channelId: o, withCommands: i } = e;
        return null !==
            (t =
                s[
                    f({
                        location: n,
                        channelId: o,
                        withCommands: i
                    })
                ]) && void 0 !== t
            ? t
            : O;
    }
}
a(b, 'displayName', void 0);
let E = new b(l.Z, {
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
        let { location: t, channelId: n, withCommands: o } = e;
        m = d(c({}, m), {
            [f({
                location: t,
                channelId: n,
                withCommands: o
            })]: 0
        });
    },
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
        let { recommendations: t, location: n, channelId: o, withCommands: i } = e,
            r = f({
                location: n,
                channelId: o,
                withCommands: i
            });
        (s = d(c({}, s), { [r]: t })), (m = d(c({}, m), { [r]: 1 }));
        let l = Date.now();
        p = d(c({}, p), { [r]: l });
    },
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
        let { location: t, channelId: n, withCommands: o } = e;
        m = d(c({}, m), {
            [f({
                location: t,
                channelId: n,
                withCommands: o
            })]: 2
        });
    }
});

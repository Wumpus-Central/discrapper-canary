t.d(n, {
    M: function () {
        return d;
    }
});
var i,
    l,
    a,
    o,
    d,
    r,
    c = t(442837),
    u = t(570140);
((i = d || (d = {}))[(i.FETCHING = 0)] = 'FETCHING'), (i[(i.FETCHED = 1)] = 'FETCHED'), (i[(i.ERROR = 2)] = 'ERROR');
let s = {},
    m = {},
    E = {};
function p(e) {
    let { location: n, channelId: t, withCommands: i } = e;
    return 'location:'.concat(n, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let v = Object.freeze([]);
class C extends (r = c.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: n, channelId: t, withCommands: i } = e;
        return E[
            p({
                location: n,
                channelId: t,
                withCommands: i
            })
        ];
    }
    getFetchState(e) {
        let { location: n, channelId: t, withCommands: i } = e;
        return m[
            p({
                location: n,
                channelId: t,
                withCommands: i
            })
        ];
    }
    getRecommendations(e) {
        var n;
        let { location: t, channelId: i, withCommands: l } = e;
        return null !==
            (n =
                s[
                    p({
                        location: t,
                        channelId: i,
                        withCommands: l
                    })
                ]) && void 0 !== n
            ? n
            : v;
    }
}
(o = void 0),
    (a = 'displayName') in (l = C)
        ? Object.defineProperty(l, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = o),
    (n.ZP = new C(u.Z, {
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
                ...m,
                [p({
                    location: n,
                    channelId: t,
                    withCommands: i
                })]: 0
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let { recommendations: n, location: t, channelId: i, withCommands: l } = e,
                a = p({
                    location: t,
                    channelId: i,
                    withCommands: l
                });
            (s = {
                ...s,
                [a]: n
            }),
                (m = {
                    ...m,
                    [a]: 1
                });
            let o = Date.now();
            E = {
                ...E,
                [a]: o
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
                ...m,
                [p({
                    location: n,
                    channelId: t,
                    withCommands: i
                })]: 2
            };
        }
    }));

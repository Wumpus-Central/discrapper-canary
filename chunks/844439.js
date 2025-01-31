t.d(n, {
    M: () => r,
    ZP: () => C
});
var l,
    i,
    a,
    o,
    d = t(442837),
    c = t(570140),
    r = (((l = {})[(l.FETCHING = 0)] = 'FETCHING'), (l[(l.FETCHED = 1)] = 'FETCHED'), (l[(l.ERROR = 2)] = 'ERROR'), l);
let u = {},
    s = {},
    m = {};
function E(e) {
    let { location: n, channelId: t, withCommands: l } = e;
    return 'location:'.concat(n, ' channelId:').concat('0', ' withCommands:').concat(l);
}
let v = Object.freeze([]);
class p extends (o = d.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: n, channelId: t, withCommands: l } = e;
        return m[
            E({
                location: n,
                channelId: t,
                withCommands: l
            })
        ];
    }
    getFetchState(e) {
        let { location: n, channelId: t, withCommands: l } = e;
        return s[
            E({
                location: n,
                channelId: t,
                withCommands: l
            })
        ];
    }
    getRecommendations(e) {
        var n;
        let { location: t, channelId: l, withCommands: i } = e;
        return null !==
            (n =
                u[
                    E({
                        location: t,
                        channelId: l,
                        withCommands: i
                    })
                ]) && void 0 !== n
            ? n
            : v;
    }
}
(a = void 0),
    (i = 'displayName') in p
        ? Object.defineProperty(p, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[i] = a);
let C = new p(c.Z, {
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
        let { location: n, channelId: t, withCommands: l } = e;
        s = {
            ...s,
            [E({
                location: n,
                channelId: t,
                withCommands: l
            })]: 0
        };
    },
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
        let { recommendations: n, location: t, channelId: l, withCommands: i } = e,
            a = E({
                location: t,
                channelId: l,
                withCommands: i
            });
        (u = {
            ...u,
            [a]: n
        }),
            (s = {
                ...s,
                [a]: 1
            });
        let o = Date.now();
        m = {
            ...m,
            [a]: o
        };
    },
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
        let { location: n, channelId: t, withCommands: l } = e;
        s = {
            ...s,
            [E({
                location: n,
                channelId: t,
                withCommands: l
            })]: 2
        };
    }
});

t.d(n, { Z: () => u });
var r,
    i = t(442837),
    a = t(570140);
function l(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
let o = {},
    s = [];
function d() {
    o = {};
}
class c extends (r = i.ZP.Store) {
    getRegionStateForPingUrl(e) {
        if (null != e) return o[e];
    }
    getRegionState() {
        return o;
    }
    getRegions() {
        return s;
    }
}
l(c, "displayName", "GameServerRegionStore");
let u = new c(a.Z, {
    LOGOUT: d,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        var n, t;
        let { pingUrl: r, state: i } = e;
        (n = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (n) {
                        l(e, n, t[n]);
                    });
            }
            return e;
        })({}, o)),
            (t = t = { [r]: i }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            (o = n);
    },
    GAME_SERVER_REGION_PING_STATE_RESET: d,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: n } = e;
        s = n;
    },
});

n.d(t, {
    Ai: () => O,
    PW: () => I,
    Tu: () => A,
    am: () => v,
    hP: () => y,
    hY: () => S,
    k1: () => N,
    rC: () => b,
    wO: () => T
}),
    n(177593);
var r = n(544891),
    i = n(846519),
    o = n(570140),
    a = n(70956),
    s = n(877481),
    l = n(358085),
    c = n(18323),
    u = n(616922),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 5000,
    g = 5000;
function E(e, t, n, r) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e((r = h(_({}, r), { headers: { authorization: 'Bearer '.concat(n) } })))
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let a = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || a) && o > 0
                ? (202 === n.status ? (0, i.GR)(m) : Promise.resolve())
                      .then(() => y(t))
                      .then((n) => {
                          let {
                              body: { access_token: i }
                          } = n;
                          return E(e, t, i, r, o - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let b = {
    get: E.bind(null, r.tn.get),
    put: E.bind(null, r.tn.put)
};
function y(e) {
    return r.tn
        .get({
            url: d.ANM.CONNECTION_ACCESS_TOKEN(d.ABu.SPOTIFY, e),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((t) => {
            var n;
            if ((null == (n = t.body) ? void 0 : n.code) === d.evJ.CONNECTION_REVOKED)
                o.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE',
                    accountId: e
                });
            else if (429 === t.status) {
                let n = t.headers['retry-after'] * a.Z.Millis.SECOND,
                    r = isNaN(n) || 0 === n ? g : n;
                return (0, i.GR)(r).then(() => y(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return (
                o.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN',
                    accountId: e,
                    accessToken: n
                }),
                t
            );
        });
}
function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return b
        .put(e, t, {
            url: u.C7.NOTIFICATIONS_PLAYER,
            query: { connection_id: n }
        })
        .catch((o) => (r <= 0 ? Promise.reject(o) : (0, i.GR)(m).then(() => v(e, t, n, r - 1))));
}
function O(e, t) {
    return b.get(e, t, { url: u.C7.PROFILE }).then(
        (t) => (
            o.Z.dispatch({
                type: 'SPOTIFY_PROFILE_UPDATE',
                accountId: e,
                isPremium: 'premium' === t.body.product
            }),
            t
        )
    );
}
function I(e, t) {
    return b.get(e, t, { url: u.C7.PLAYER_DEVICES }).then(
        (t) => (
            t.body &&
                o.Z.dispatch({
                    type: 'SPOTIFY_SET_DEVICES',
                    accountId: e,
                    devices: t.body.devices
                }),
            t
        )
    );
}
function S(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = u.C7.PLAYER_OPEN(r, n, !1),
        { deviceId: s, position: l, contextUri: c, repeat: d } = i;
    return b
        .put(e, t, {
            url: u.C7.PLAYER_PLAY,
            query: { device_id: s },
            body: {
                context_uri: null != c ? c : void 0,
                uris: null == c ? [a] : void 0,
                offset: null != c ? { uri: a } : void 0,
                position_ms: null != l ? l : 0
            }
        })
        .then((n) =>
            null == d
                ? n
                : b.put(e, t, {
                      url: u.C7.PLAYER_REPEAT,
                      query: {
                          device_id: s,
                          state: d ? 'context' : 'off'
                      }
                  })
        )
        .then(
            (e) => (
                o.Z.dispatch({
                    type: 'SPOTIFY_PLAYER_PLAY',
                    id: n,
                    position: null != l ? l : 0
                }),
                e
            )
        );
}
function T(e, t) {
    return b.put(e, t, { url: u.C7.PLAYER_PAUSE }).then((e) => (o.Z.dispatch({ type: 'SPOTIFY_PLAYER_PAUSE' }), e));
}
function N() {
    !c.Z.isProtocolRegistered() &&
        (0, l.isDesktop)() &&
        s.Z.isProtocolRegistered(u.M5).then((e) => {
            o.Z.dispatch({
                type: 'SPOTIFY_SET_PROTOCOL_REGISTERED',
                isRegistered: e
            });
        });
}
function A(e, t) {
    o.Z.dispatch({
        type: 'SPOTIFY_SET_ACTIVE_DEVICE',
        accountId: e,
        deviceId: t
    });
}

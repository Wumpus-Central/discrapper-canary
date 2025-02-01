n.d(t, {
    Ai: () => E,
    PW: () => v,
    Tu: () => b,
    am: () => g,
    hP: () => m,
    hY: () => y,
    k1: () => T,
    rC: () => h,
    wO: () => I
}),
    n(177593);
var i = n(544891),
    r = n(846519),
    a = n(570140),
    s = n(70956),
    o = n(877481),
    l = n(358085),
    u = n(18323),
    c = n(616922),
    d = n(981631);
let f = 5000,
    _ = 5000;
function p(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e(
        (i = {
            ...i,
            headers: { authorization: 'Bearer '.concat(n) }
        })
    )
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let s = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || s) && a > 0
                ? (202 === n.status ? (0, r.GR)(f) : Promise.resolve())
                      .then(() => m(t))
                      .then((n) => {
                          let {
                              body: { access_token: r }
                          } = n;
                          return p(e, t, r, i, a - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let h = {
    get: p.bind(null, i.tn.get),
    put: p.bind(null, i.tn.put)
};
function m(e) {
    return i.tn
        .get({
            url: d.ANM.CONNECTION_ACCESS_TOKEN(d.ABu.SPOTIFY, e),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((t) => {
            var n;
            if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === d.evJ.CONNECTION_REVOKED)
                a.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE',
                    accountId: e
                });
            else if (429 === t.status) {
                let n = t.headers['retry-after'] * s.Z.Millis.SECOND,
                    i = isNaN(n) || 0 === n ? _ : n;
                return (0, r.GR)(i).then(() => m(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return (
                a.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN',
                    accountId: e,
                    accessToken: n
                }),
                t
            );
        });
}
function g(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return h
        .put(e, t, {
            url: c.C7.NOTIFICATIONS_PLAYER,
            query: { connection_id: n }
        })
        .catch((a) => (i <= 0 ? Promise.reject(a) : (0, r.GR)(f).then(() => g(e, t, n, i - 1))));
}
function E(e, t) {
    return h.get(e, t, { url: c.C7.PROFILE }).then(
        (t) => (
            a.Z.dispatch({
                type: 'SPOTIFY_PROFILE_UPDATE',
                accountId: e,
                isPremium: 'premium' === t.body.product
            }),
            t
        )
    );
}
function v(e, t) {
    return h.get(e, t, { url: c.C7.PLAYER_DEVICES }).then(
        (t) => (
            t.body &&
                a.Z.dispatch({
                    type: 'SPOTIFY_SET_DEVICES',
                    accountId: e,
                    devices: t.body.devices
                }),
            t
        )
    );
}
function y(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        s = c.C7.PLAYER_OPEN(i, n, !1),
        { deviceId: o, position: l, contextUri: u, repeat: d } = r;
    return h
        .put(e, t, {
            url: c.C7.PLAYER_PLAY,
            query: { device_id: o },
            body: {
                context_uri: null != u ? u : void 0,
                uris: null == u ? [s] : void 0,
                offset: null != u ? { uri: s } : void 0,
                position_ms: null != l ? l : 0
            }
        })
        .then((n) =>
            null == d
                ? n
                : h.put(e, t, {
                      url: c.C7.PLAYER_REPEAT,
                      query: {
                          device_id: o,
                          state: d ? 'context' : 'off'
                      }
                  })
        )
        .then(
            (e) => (
                a.Z.dispatch({
                    type: 'SPOTIFY_PLAYER_PLAY',
                    id: n,
                    position: null != l ? l : 0
                }),
                e
            )
        );
}
function I(e, t) {
    return h.put(e, t, { url: c.C7.PLAYER_PAUSE }).then((e) => (a.Z.dispatch({ type: 'SPOTIFY_PLAYER_PAUSE' }), e));
}
function T() {
    !u.Z.isProtocolRegistered() &&
        (0, l.isDesktop)() &&
        o.Z.isProtocolRegistered(c.M5).then((e) => {
            a.Z.dispatch({
                type: 'SPOTIFY_SET_PROTOCOL_REGISTERED',
                isRegistered: e
            });
        });
}
function b(e, t) {
    a.Z.dispatch({
        type: 'SPOTIFY_SET_ACTIVE_DEVICE',
        accountId: e,
        deviceId: t
    });
}

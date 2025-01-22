r.d(n, {
    Ai: function () {
        return y;
    },
    PW: function () {
        return b;
    },
    Tu: function () {
        return A;
    },
    am: function () {
        return v;
    },
    hP: function () {
        return E;
    },
    hY: function () {
        return I;
    },
    k1: function () {
        return S;
    },
    rC: function () {
        return g;
    },
    wO: function () {
        return T;
    }
});
var i = r(177593);
var a = r(544891),
    o = r(846519),
    s = r(570140),
    l = r(70956),
    u = r(877481),
    c = r(358085),
    d = r(18323),
    f = r(616922),
    p = r(981631);
let h = 5000,
    _ = 5000;
function m(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e(
        (i = {
            ...i,
            headers: { authorization: 'Bearer '.concat(r) }
        })
    )
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((r) => {
            let s = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === r.status;
            return (401 === r.status || s) && a > 0
                ? (202 === r.status ? (0, o.GR)(h) : Promise.resolve())
                      .then(() => E(n))
                      .then((r) => {
                          let {
                              body: { access_token: o }
                          } = r;
                          return m(e, n, o, i, a - 1);
                      })
                      .then((e) => new Promise((n) => setImmediate(() => n(e))))
                : Promise.reject(r);
        });
}
let g = {
    get: m.bind(null, a.tn.get),
    put: m.bind(null, a.tn.put)
};
function E(e) {
    return a.tn
        .get({
            url: p.ANM.CONNECTION_ACCESS_TOKEN(p.ABu.SPOTIFY, e),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((n) => {
            var r;
            if ((null === (r = n.body) || void 0 === r ? void 0 : r.code) === p.evJ.CONNECTION_REVOKED)
                s.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE',
                    accountId: e
                });
            else if (429 === n.status) {
                let r = n.headers['retry-after'] * l.Z.Millis.SECOND,
                    i = isNaN(r) || 0 === r ? _ : r;
                return (0, o.GR)(i).then(() => E(e));
            }
            return Promise.reject(n);
        })
        .then((n) => {
            let { access_token: r } = n.body;
            return (
                s.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN',
                    accountId: e,
                    accessToken: r
                }),
                n
            );
        });
}
function v(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return g
        .put(e, n, {
            url: f.C7.NOTIFICATIONS_PLAYER,
            query: { connection_id: r }
        })
        .catch((a) => (i <= 0 ? Promise.reject(a) : (0, o.GR)(h).then(() => v(e, n, r, i - 1))));
}
function y(e, n) {
    return g.get(e, n, { url: f.C7.PROFILE }).then(
        (n) => (
            s.Z.dispatch({
                type: 'SPOTIFY_PROFILE_UPDATE',
                accountId: e,
                isPremium: 'premium' === n.body.product
            }),
            n
        )
    );
}
function b(e, n) {
    return g.get(e, n, { url: f.C7.PLAYER_DEVICES }).then(
        (n) => (
            n.body &&
                s.Z.dispatch({
                    type: 'SPOTIFY_SET_DEVICES',
                    accountId: e,
                    devices: n.body.devices
                }),
            n
        )
    );
}
function I(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        o = f.C7.PLAYER_OPEN(i, r, !1),
        { deviceId: l, position: u, contextUri: c, repeat: d } = a;
    return g
        .put(e, n, {
            url: f.C7.PLAYER_PLAY,
            query: { device_id: l },
            body: {
                context_uri: null != c ? c : void 0,
                uris: null == c ? [o] : void 0,
                offset: null != c ? { uri: o } : void 0,
                position_ms: null != u ? u : 0
            }
        })
        .then((r) =>
            null == d
                ? r
                : g.put(e, n, {
                      url: f.C7.PLAYER_REPEAT,
                      query: {
                          device_id: l,
                          state: d ? 'context' : 'off'
                      }
                  })
        )
        .then(
            (e) => (
                s.Z.dispatch({
                    type: 'SPOTIFY_PLAYER_PLAY',
                    id: r,
                    position: null != u ? u : 0
                }),
                e
            )
        );
}
function T(e, n) {
    return g.put(e, n, { url: f.C7.PLAYER_PAUSE }).then((e) => (s.Z.dispatch({ type: 'SPOTIFY_PLAYER_PAUSE' }), e));
}
function S() {
    if (!d.Z.isProtocolRegistered())
        (0, c.isDesktop)() &&
            u.Z.isProtocolRegistered(f.M5).then((e) => {
                s.Z.dispatch({
                    type: 'SPOTIFY_SET_PROTOCOL_REGISTERED',
                    isRegistered: e
                });
            });
}
function A(e, n) {
    s.Z.dispatch({
        type: 'SPOTIFY_SET_ACTIVE_DEVICE',
        accountId: e,
        deviceId: n
    });
}

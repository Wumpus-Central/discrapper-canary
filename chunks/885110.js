var i,
    a = r(47120);
var s = r(348327),
    o = r.n(s),
    l = r(392711),
    u = r.n(l),
    c = r(442837),
    d = r(570140),
    f = r(503438),
    _ = r(768419),
    h = r(695346),
    p = r(581883),
    m = r(780570),
    g = r(77498),
    E = r(517100),
    v = r(283595),
    I = r(293273),
    T = r(158776),
    b = r(797258),
    y = r(981631);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = !1,
    N = y.Skl.ONLINE,
    C = y.Skl.UNKNOWN,
    R = 0,
    O = [],
    D = !1,
    L = !0,
    x = Object.freeze([]),
    w = [];
function P(e) {
    return (0, m.OT)(e, v.Z);
}
function M(e) {
    let n = g.Z.getGameByName(e);
    return null != n ? P(n.id) : h.G6.getSetting();
}
function k(e) {
    switch (e.type) {
        case y.IIU.LISTENING:
            if ((0, f.Z)(e)) return _.Z.shouldShowActivity();
            if (null != e.application_id) return P(e.application_id);
            return !1;
        case y.IIU.PLAYING:
            return null != e.application_id ? P(e.application_id) : M(e.name);
        case y.IIU.STREAMING:
        case y.IIU.WATCHING:
        default:
            return null == e.application_id || P(e.application_id);
    }
}
function U() {
    (L = !0), (C = N), B();
}
function B() {
    var e;
    if (((R = null !== (e = E.Z.getIdleSince()) && void 0 !== e ? e : 0), (D = E.Z.isAFK()), L)) N = C;
    else if (A) N = y.Skl.INVISIBLE;
    else {
        let e = h.co.getSetting();
        N = e !== y.Skl.UNKNOWN ? e : y.Skl.ONLINE;
    }
    N === y.Skl.ONLINE && R > 0 && (N = y.Skl.IDLE);
    let n = !1,
        r = L || N === y.Skl.INVISIBLE ? [] : I.Z.getActivities().filter(k);
    !o()(O, r) && ((O = r), (n = !0));
    let i = b.Z.getRemoteActivities();
    if ((x !== i && ((x = i), (n = !0)), n)) {
        let e = O.find((e) => e.type === y.IIU.CUSTOM_STATUS);
        w =
            O.filter((e) => e.type !== y.IIU.CUSTOM_STATUS).length > 0
                ? O
                : null != e
                  ? [
                        e,
                        ...u()(x)
                            .filter((e) => e.type !== y.IIU.CUSTOM_STATUS)
                            .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                            .value()
                    ]
                  : u().uniqBy(x, (e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name));
    }
}
function G(e) {
    return (A = e.invisible), B();
}
function Z() {
    return (A = !1), B();
}
function F() {
    (L = !1), (C = y.Skl.UNKNOWN), B(), T.Z.setCurrentUserOnConnectionOpen(N, w);
}
function V() {
    F();
}
class j extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, p.Z, I.Z, b.Z, v.Z, g.Z), this.syncWith([I.Z], B);
    }
    getLocalPresence() {
        return {
            status: N,
            since: R,
            activities: O,
            afk: D
        };
    }
    getStatus() {
        return N;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w : O;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w[0] : O[0];
    }
    getApplicationActivity(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity((n) => n.application_id === e, n);
    }
    findActivity(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(n).find(e);
    }
}
S(j, 'displayName', 'SelfPresenceStore'),
    (n.Z = new j(d.Z, {
        START_SESSION: B,
        CONNECTION_OPEN: V,
        CONNECTION_OPEN_SUPPLEMENTAL: F,
        OVERLAY_INITIALIZE: F,
        CONNECTION_CLOSED: B,
        IDLE: B,
        AFK: B,
        RUNNING_GAMES_CHANGE: B,
        STREAMING_UPDATE: B,
        USER_SETTINGS_PROTO_UPDATE: B,
        LOCAL_ACTIVITY_UPDATE: B,
        SPOTIFY_PLAYER_STATE: B,
        SPOTIFY_PLAYER_PLAY: B,
        USER_CONNECTIONS_UPDATE: B,
        SESSIONS_REPLACE: B,
        RPC_APP_DISCONNECTED: B,
        LIBRARY_FETCH_SUCCESS: B,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: B,
        LOGOUT: U,
        FORCE_INVISIBLE: G,
        WINDOW_FOCUS: Z
    }));

n.d(t, { Z: () => Z }), n(47120), n(230036);
var r,
    i = n(348327),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(503438),
    d = n(768419),
    f = n(695346),
    _ = n(581883),
    p = n(780570),
    h = n(77498),
    g = n(517100),
    m = n(283595),
    E = n(293273),
    v = n(158776),
    b = n(797258),
    y = n(981631);
function O(e, t, n) {
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
let S = !1,
    I = y.Skl.ONLINE,
    T = y.Skl.UNKNOWN,
    N = 0,
    A = [],
    C = !1,
    R = !0,
    P = Object.freeze([]),
    D = Object.freeze([]),
    w = [];
function L(e) {
    return (0, p.OT)(e, m.Z);
}
function x(e) {
    let t = h.Z.getGameByName(e);
    return null != t ? L(t.id) : f.G6.getSetting();
}
function M(e) {
    switch (e.type) {
        case y.IIU.LISTENING:
            if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
            if (null != e.application_id) return L(e.application_id);
            return !1;
        case y.IIU.PLAYING:
            return null != e.application_id ? L(e.application_id) : x(e.name);
        case y.IIU.STREAMING:
        case y.IIU.WATCHING:
        default:
            return null == e.application_id || L(e.application_id);
    }
}
function k() {
    (R = !0), (T = I), j();
}
function j() {
    var e;
    if (((N = null !== (e = g.Z.getIdleSince()) && void 0 !== e ? e : 0), (C = g.Z.isAFK()), R)) I = T;
    else if (S) I = y.Skl.INVISIBLE;
    else {
        let e = f.co.getSetting();
        I = e !== y.Skl.UNKNOWN ? e : y.Skl.ONLINE;
    }
    I === y.Skl.ONLINE && N > 0 && (I = y.Skl.IDLE);
    let t = !1,
        n = R || I === y.Skl.INVISIBLE ? [] : E.Z.getActivities().filter(M);
    o()(A, n) || ((A = n), (t = !0));
    let r = b.Z.getRemoteActivities();
    P !== r && ((P = r), (t = !0));
    let i = b.Z.getHiddenActivities();
    D !== i && (D = i),
        t &&
            (w = s()([...A, ...P.filter((e) => e.type !== y.IIU.CUSTOM_STATUS)].sort(v.f))
                .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                .value());
}
function U(e) {
    return (S = e.invisible), j();
}
function G() {
    return (S = !1), j();
}
function B() {
    (R = !1), (T = y.Skl.UNKNOWN), j(), v.Z.setCurrentUserOnConnectionOpen(I, w);
}
function V() {
    B();
}
class F extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, _.Z, E.Z, b.Z, m.Z, h.Z), this.syncWith([E.Z], j);
    }
    getLocalPresence() {
        return {
            status: I,
            since: N,
            activities: A,
            afk: C
        };
    }
    getStatus() {
        return I;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w : A;
    }
    getHiddenActivities() {
        return D;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w[0] : A[0];
    }
    getApplicationActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity((t) => t.application_id === e, t);
    }
    findActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(t).find(e);
    }
}
O(F, 'displayName', 'SelfPresenceStore');
let Z = new F(c.Z, {
    START_SESSION: j,
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    OVERLAY_INITIALIZE: B,
    CONNECTION_CLOSED: j,
    IDLE: j,
    AFK: j,
    RUNNING_GAMES_CHANGE: j,
    STREAMING_UPDATE: j,
    USER_SETTINGS_PROTO_UPDATE: j,
    LOCAL_ACTIVITY_UPDATE: j,
    SPOTIFY_PLAYER_STATE: j,
    SPOTIFY_PLAYER_PLAY: j,
    USER_CONNECTIONS_UPDATE: j,
    SESSIONS_REPLACE: j,
    RPC_APP_DISCONNECTED: j,
    LIBRARY_FETCH_SUCCESS: j,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: j,
    LOGOUT: k,
    FORCE_INVISIBLE: U,
    WINDOW_FOCUS: G
});

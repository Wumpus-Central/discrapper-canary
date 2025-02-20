n.d(t, { Z: () => F }), n(47120), n(230036);
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
    p = n(581883),
    _ = n(780570),
    h = n(77498),
    m = n(517100),
    g = n(283595),
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
    w = [];
function D(e) {
    return (0, _.OT)(e, g.Z);
}
function x(e) {
    let t = h.Z.getGameByName(e);
    return null != t ? D(t.id) : f.G6.getSetting();
}
function L(e) {
    switch (e.type) {
        case y.IIU.LISTENING:
            if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
            if (null != e.application_id) return D(e.application_id);
            return !1;
        case y.IIU.PLAYING:
            return null != e.application_id ? D(e.application_id) : x(e.name);
        case y.IIU.STREAMING:
        case y.IIU.WATCHING:
        default:
            return null == e.application_id || D(e.application_id);
    }
}
function M() {
    (R = !0), (T = I), k();
}
function k() {
    var e;
    if (((N = null !== (e = m.Z.getIdleSince()) && void 0 !== e ? e : 0), (C = m.Z.isAFK()), R)) I = T;
    else if (S) I = y.Skl.INVISIBLE;
    else {
        let e = f.co.getSetting();
        I = e !== y.Skl.UNKNOWN ? e : y.Skl.ONLINE;
    }
    I === y.Skl.ONLINE && N > 0 && (I = y.Skl.IDLE);
    let t = !1,
        n = R || I === y.Skl.INVISIBLE ? [] : E.Z.getActivities().filter(L);
    o()(A, n) || ((A = n), (t = !0));
    let r = b.Z.getRemoteActivities();
    P !== r && ((P = r), (t = !0)),
        t &&
            (w = s()([...A, ...P.filter((e) => e.type !== y.IIU.CUSTOM_STATUS)].sort(v.f))
                .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                .value());
}
function j(e) {
    return (S = e.invisible), k();
}
function U() {
    return (S = !1), k();
}
function G() {
    (R = !1), (T = y.Skl.UNKNOWN), k(), v.Z.setCurrentUserOnConnectionOpen(I, w);
}
function B() {
    G();
}
class Z extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, p.Z, E.Z, b.Z, g.Z, h.Z), this.syncWith([E.Z], k);
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
O(Z, 'displayName', 'SelfPresenceStore');
let F = new Z(c.Z, {
    START_SESSION: k,
    CONNECTION_OPEN: B,
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    OVERLAY_INITIALIZE: G,
    CONNECTION_CLOSED: k,
    IDLE: k,
    AFK: k,
    RUNNING_GAMES_CHANGE: k,
    STREAMING_UPDATE: k,
    USER_SETTINGS_PROTO_UPDATE: k,
    LOCAL_ACTIVITY_UPDATE: k,
    SPOTIFY_PLAYER_STATE: k,
    SPOTIFY_PLAYER_PLAY: k,
    USER_CONNECTIONS_UPDATE: k,
    SESSIONS_REPLACE: k,
    RPC_APP_DISCONNECTED: k,
    LIBRARY_FETCH_SUCCESS: k,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
    LOGOUT: M,
    FORCE_INVISIBLE: j,
    WINDOW_FOCUS: U
});

n.d(t, { Z: () => V }), n(47120);
var i,
    r = n(348327),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(503438),
    d = n(768419),
    f = n(695346),
    _ = n(581883),
    p = n(780570),
    h = n(77498),
    m = n(517100),
    g = n(283595),
    E = n(293273),
    v = n(158776),
    y = n(797258),
    I = n(981631);
function T(e, t, n) {
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
let b = !1,
    S = I.Skl.ONLINE,
    A = I.Skl.UNKNOWN,
    N = 0,
    C = [],
    R = !1,
    O = !0,
    D = Object.freeze([]),
    L = [];
function x(e) {
    return (0, p.OT)(e, g.Z);
}
function P(e) {
    let t = h.Z.getGameByName(e);
    return null != t ? x(t.id) : f.G6.getSetting();
}
function w(e) {
    switch (e.type) {
        case I.IIU.LISTENING:
            if ((0, c.Z)(e)) return d.Z.shouldShowActivity();
            if (null != e.application_id) return x(e.application_id);
            return !1;
        case I.IIU.PLAYING:
            return null != e.application_id ? x(e.application_id) : P(e.name);
        case I.IIU.STREAMING:
        case I.IIU.WATCHING:
        default:
            return null == e.application_id || x(e.application_id);
    }
}
function M() {
    (O = !0), (A = S), k();
}
function k() {
    var e;
    if (((N = null !== (e = m.Z.getIdleSince()) && void 0 !== e ? e : 0), (R = m.Z.isAFK()), O)) S = A;
    else if (b) S = I.Skl.INVISIBLE;
    else {
        let e = f.co.getSetting();
        S = e !== I.Skl.UNKNOWN ? e : I.Skl.ONLINE;
    }
    S === I.Skl.ONLINE && N > 0 && (S = I.Skl.IDLE);
    let t = !1,
        n = O || S === I.Skl.INVISIBLE ? [] : E.Z.getActivities().filter(w);
    a()(C, n) || ((C = n), (t = !0));
    let i = y.Z.getRemoteActivities();
    D !== i && ((D = i), (t = !0)),
        t &&
            (L = o()([...C, ...D.filter((e) => e.type !== I.IIU.CUSTOM_STATUS)].sort(v.f))
                .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                .value());
}
function U(e) {
    return (b = e.invisible), k();
}
function G() {
    return (b = !1), k();
}
function B() {
    (O = !1), (A = I.Skl.UNKNOWN), k(), v.Z.setCurrentUserOnConnectionOpen(S, L);
}
function Z() {
    B();
}
class F extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, _.Z, E.Z, y.Z, g.Z, h.Z), this.syncWith([E.Z], k);
    }
    getLocalPresence() {
        return {
            status: S,
            since: N,
            activities: C,
            afk: R
        };
    }
    getStatus() {
        return S;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? L : C;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? L[0] : C[0];
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
T(F, 'displayName', 'SelfPresenceStore');
let V = new F(u.Z, {
    START_SESSION: k,
    CONNECTION_OPEN: Z,
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    OVERLAY_INITIALIZE: B,
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
    FORCE_INVISIBLE: U,
    WINDOW_FOCUS: G
});

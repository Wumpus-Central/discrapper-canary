n.d(t, { Z: () => H }), n(789020), n(47120), n(230036);
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
    p = n(630388),
    h = n(780570),
    m = n(77498),
    g = n(517100),
    E = n(283595),
    b = n(293273),
    y = n(158776),
    v = n(797258),
    O = n(981631);
function I(e, t, n) {
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
    T = O.Skl.ONLINE,
    N = O.Skl.UNKNOWN,
    A = 0,
    C = [],
    R = !1,
    P = !0,
    w = Object.freeze([]),
    D = Object.freeze([]),
    L = [];
function x(e) {
    return (0, h.OT)(e, E.Z);
}
function M(e) {
    let t = m.Z.getGameByName(e);
    return null != t ? x(t.id) : f.G6.getSetting();
}
function k(e) {
    var t;
    if ((0, p.yE)(null != (t = e.flags) ? t : 0, O.xjy.CONTEXTLESS)) return !0;
    switch (e.type) {
        case O.IIU.LISTENING:
            if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
            if (null != e.application_id) return x(e.application_id);
            return !1;
        case O.IIU.PLAYING:
            return null != e.application_id ? x(e.application_id) : M(e.name);
        case O.IIU.STREAMING:
        case O.IIU.WATCHING:
        default:
            return null == e.application_id || x(e.application_id);
    }
}
function j() {
    (P = !0), (N = T), U();
}
function U() {
    var e;
    if (((A = null != (e = g.Z.getIdleSince()) ? e : 0), (R = g.Z.isAFK()), P)) T = N;
    else if (S) T = O.Skl.INVISIBLE;
    else {
        let e = f.co.getSetting();
        T = e !== O.Skl.UNKNOWN ? e : O.Skl.ONLINE;
    }
    T === O.Skl.ONLINE && A > 0 && (T = O.Skl.IDLE);
    let t = !1,
        n = P || T === O.Skl.INVISIBLE ? [] : b.Z.getActivities().filter(k);
    o()(C, n) || ((C = n), (t = !0));
    let r = v.Z.getRemoteActivities();
    w !== r && ((w = r), (t = !0));
    let i = v.Z.getHiddenActivities();
    D !== i && (D = i),
        t &&
            (L = s()([...C, ...w.filter((e) => e.type !== O.IIU.CUSTOM_STATUS)].sort(y.f))
                .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                .value());
}
function G(e) {
    return (S = e.invisible), U();
}
function B() {
    return (S = !1), U();
}
function F() {
    (P = !1), (N = O.Skl.UNKNOWN), U(), y.Z.setCurrentUserOnConnectionOpen(T, L);
}
function V() {
    F();
}
class Z extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, _.Z, b.Z, v.Z, E.Z, m.Z), this.syncWith([b.Z], U);
    }
    getLocalPresence() {
        return {
            status: T,
            since: A,
            activities: C,
            afk: R
        };
    }
    getStatus() {
        return T;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? L : C;
    }
    getHiddenActivities() {
        return D;
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
I(Z, 'displayName', 'SelfPresenceStore');
let H = new Z(c.Z, {
    START_SESSION: U,
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: F,
    OVERLAY_INITIALIZE: F,
    CONNECTION_CLOSED: U,
    IDLE: U,
    AFK: U,
    RUNNING_GAMES_CHANGE: U,
    STREAMING_UPDATE: U,
    USER_SETTINGS_PROTO_UPDATE: U,
    LOCAL_ACTIVITY_UPDATE: U,
    SPOTIFY_PLAYER_STATE: U,
    SPOTIFY_PLAYER_PLAY: U,
    USER_CONNECTIONS_UPDATE: U,
    SESSIONS_REPLACE: U,
    RPC_APP_DISCONNECTED: U,
    LIBRARY_FETCH_SUCCESS: U,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: U,
    LOGOUT: j,
    FORCE_INVISIBLE: G,
    WINDOW_FOCUS: B
});

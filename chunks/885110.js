n.d(t, { Z: () => K }), n(539854), n(388685), n(642613), n(997841);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(95015),
    c = n(442837),
    u = n(570140),
    d = n(503438),
    f = n(768419),
    p = n(695346),
    _ = n(581883),
    m = n(780570),
    h = n(77498),
    g = n(517100),
    E = n(283595),
    b = n(293273),
    y = n(158776),
    O = n(797258),
    v = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let I = !1,
    T = v.Skl.ONLINE,
    A = v.Skl.UNKNOWN,
    C = 0,
    N = [],
    P = [],
    R = !1,
    w = !0,
    D = Object.freeze([]),
    x = Object.freeze([]),
    L = [],
    j = [];
function M(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === v.IIU.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(y.f)[0]].sort(y.f);
}
function k(e) {
    return (0, m.OT)(e, E.Z);
}
function U(e) {
    let t = h.Z.getGameByName(e);
    return null != t ? k(t.id) : p.G6.getSetting();
}
function G(e) {
    var t;
    if ((0, l.yE)(null != (t = e.flags) ? t : 0, v.xjy.CONTEXTLESS)) return !0;
    switch (e.type) {
        case v.IIU.LISTENING:
            if ((0, d.Z)(e)) return f.Z.shouldShowActivity();
            if (null != e.application_id) return k(e.application_id);
            return !1;
        case v.IIU.PLAYING:
            return null != e.application_id ? k(e.application_id) : U(e.name);
        case v.IIU.STREAMING:
        case v.IIU.WATCHING:
        default:
            return null == e.application_id || k(e.application_id);
    }
}
function Z() {
    (w = !0), (A = T), B();
}
function B() {
    var e;
    if (((C = null != (e = g.Z.getIdleSince()) ? e : 0), (R = g.Z.isAFK()), w)) T = A;
    else if (I) T = v.Skl.INVISIBLE;
    else {
        let e = p.co.getSetting();
        T = e !== v.Skl.UNKNOWN ? e : v.Skl.ONLINE;
    }
    T === v.Skl.ONLINE && C > 0 && (T = v.Skl.IDLE);
    let t = !1,
        n = w || T === v.Skl.INVISIBLE ? [] : b.Z.getActivities().filter(G);
    a()(N, n) || ((N = n), (P = M(n)), (t = !0));
    let r = O.Z.getRemoteActivities();
    D !== r && ((D = r), (t = !0));
    let i = O.Z.getHiddenActivities();
    x !== i && (x = i),
        t &&
            (j = M(
                (L = s()([...N, ...D.filter((e) => e.type !== v.IIU.CUSTOM_STATUS)].sort(y.f))
                    .uniqBy((e) => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
                    .value()),
            ));
}
function F(e) {
    return (I = e.invisible), B();
}
function V() {
    return (I = !1), B();
}
function H() {
    (w = !1), (A = v.Skl.UNKNOWN), B(), y.Z.setCurrentUserOnConnectionOpen(T, L);
}
function Y() {
    H();
}
class W extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, g.Z, E.Z, b.Z, y.Z, O.Z, f.Z, _.Z), this.syncWith([b.Z], B);
    }
    getLocalPresence() {
        return {
            status: T,
            since: C,
            activities: P,
            afk: R,
        };
    }
    getStatus() {
        return T;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? j : P;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? L : N;
    }
    getHiddenActivities() {
        return x;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return this.getActivities(e)[0];
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
S(W, "displayName", "SelfPresenceStore");
let K = new W(u.Z, {
    START_SESSION: B,
    CONNECTION_OPEN: Y,
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    OVERLAY_INITIALIZE: H,
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
    LOGOUT: Z,
    FORCE_INVISIBLE: F,
    WINDOW_FOCUS: V,
});

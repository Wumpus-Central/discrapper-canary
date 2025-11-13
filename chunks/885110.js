n.d(t, { Z: () => K }), n(539854), n(388685), n(642613), n(997841);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
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
    O = n(797258),
    v = n(981631);
function I(e, t, n) {
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
let T = !1,
    S = v.Skl.ONLINE,
    A = v.Skl.UNKNOWN,
    C = 0,
    N = [],
    R = [],
    P = !1,
    D = !0,
    w = Object.freeze([]),
    x = Object.freeze([]),
    L = [],
    M = [];
function j(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === v.IIU.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(y.f)[0]].sort(y.f);
}
function k(e) {
    return (0, h.OT)(e, E.Z);
}
function U(e) {
    let t = m.Z.getGameByName(e);
    return null != t ? k(t.id) : f.G6.getSetting();
}
function G(e) {
    var t;
    if ((0, p.yE)(null != (t = e.flags) ? t : 0, v.xjy.CONTEXTLESS)) return !0;
    switch (e.type) {
        case v.IIU.LISTENING:
            if ((0, u.Z)(e)) return d.Z.shouldShowActivity();
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
function B() {
    (D = !0), (A = S), Z();
}
function Z() {
    var e;
    if (((C = null != (e = g.Z.getIdleSince()) ? e : 0), (P = g.Z.isAFK()), D)) S = A;
    else if (T) S = v.Skl.INVISIBLE;
    else {
        let e = f.co.getSetting();
        S = e !== v.Skl.UNKNOWN ? e : v.Skl.ONLINE;
    }
    S === v.Skl.ONLINE && C > 0 && (S = v.Skl.IDLE);
    let t = !1,
        n = D || S === v.Skl.INVISIBLE ? [] : b.Z.getActivities().filter(G);
    a()(N, n) || ((N = n), (R = j(n)), (t = !0));
    let r = O.Z.getRemoteActivities();
    w !== r && ((w = r), (t = !0));
    let i = O.Z.getHiddenActivities();
    x !== i && (x = i),
        t &&
            (M = j(
                (L = s()([...N, ...w.filter((e) => e.type !== v.IIU.CUSTOM_STATUS)].sort(y.f))
                    .uniqBy((e) => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
                    .value()),
            ));
}
function F(e) {
    return (T = e.invisible), Z();
}
function V() {
    return (T = !1), Z();
}
function H() {
    (D = !1), (A = v.Skl.UNKNOWN), Z(), y.Z.setCurrentUserOnConnectionOpen(S, L);
}
function Y() {
    H();
}
class W extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, g.Z, E.Z, b.Z, y.Z, O.Z, d.Z, _.Z), this.syncWith([b.Z], Z);
    }
    getLocalPresence() {
        return {
            status: S,
            since: C,
            activities: R,
            afk: P,
        };
    }
    getStatus() {
        return S;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : R;
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
I(W, "displayName", "SelfPresenceStore");
let K = new W(c.Z, {
    START_SESSION: Z,
    CONNECTION_OPEN: Y,
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    OVERLAY_INITIALIZE: H,
    CONNECTION_CLOSED: Z,
    IDLE: Z,
    AFK: Z,
    RUNNING_GAMES_CHANGE: Z,
    STREAMING_UPDATE: Z,
    USER_SETTINGS_PROTO_UPDATE: Z,
    LOCAL_ACTIVITY_UPDATE: Z,
    SPOTIFY_PLAYER_STATE: Z,
    SPOTIFY_PLAYER_PLAY: Z,
    USER_CONNECTIONS_UPDATE: Z,
    SESSIONS_REPLACE: Z,
    RPC_APP_DISCONNECTED: Z,
    LIBRARY_FETCH_SUCCESS: Z,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: Z,
    LOGOUT: B,
    FORCE_INVISIBLE: F,
    WINDOW_FOCUS: V,
});

(n.d(t, { A: () => Y }), n(321073));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(350835),
    o = n(855986),
    d = n(73153),
    c = n(933958),
    u = n(570138),
    _ = n(478437),
    E = n(734057),
    A = n(969151),
    h = n(90644),
    f = n(655116),
    I = n(253932),
    p = n(617617),
    m = n(674378),
    T = n(760751),
    g = n(885576),
    S = n(189081),
    N = n(491009),
    C = n(290863),
    O = n(528767),
    R = n(652215);
let L = !1,
    y = R.clD.ONLINE,
    D = R.clD.UNKNOWN,
    b = 0,
    v = [],
    P = [],
    M = !1,
    U = !0,
    w = Object.freeze([]),
    G = Object.freeze([]),
    x = [],
    k = [];
function F(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let i of e) i.type === l.$.PLAYING ? n.push(i) : t.push(i);
    if (0 === n.length || 1 === n.length) return e;
    let i = [...n].sort(C.m)[0];
    return [...t, i].sort(C.m);
}
function B(e) {
    return (0, m.kv)(e, S.A);
}
function V(e) {
    if (
        (function (e) {
            if (e.platform !== u.y.EMBEDDED || null == e.application_id) return !1;
            let t = c.Ay.getSelfEmbeddedActivities().get(e.application_id),
                n = (0, A.H)(t?.location);
            return null != n && E.A.getBasicChannel(n)?.type === _.r.GUILD_SPACE;
        })(e)
    )
        return !1;
    switch (e.type) {
        case l.$.LISTENING:
            if ((0, h.A)(e)) return f.A.shouldShowActivity();
            if (null != e.application_id) return B(e.application_id);
            return !1;
        case l.$.PLAYING:
            var t;
            let n;
            return null != e.application_id
                ? B(e.application_id)
                : ((t = e.name), 1 === (n = T.A.searchGamesByName(t)).length ? B(n[0]) : I.tz.getSetting());
        case l.$.STREAMING:
        case l.$.WATCHING:
        default:
            return null == e.application_id || B(e.application_id);
    }
}
function H() {
    if (((b = g.A.getIdleSince() ?? 0), (M = g.A.isAFK()), U)) y = D;
    else if (L) y = R.clD.INVISIBLE;
    else {
        let e = I.jP.getSetting();
        y = e !== R.clD.UNKNOWN ? e : R.clD.ONLINE;
    }
    y === R.clD.ONLINE && b > 0 && (y = R.clD.IDLE);
    let e = !1,
        t = U || y === R.clD.INVISIBLE ? [] : N.A.getActivities().filter(V);
    r()(v, t) || ((v = t), (P = F(t)), (e = !0));
    let n = O.A.getRemoteActivities();
    w !== n && ((w = n), (e = !0));
    let i = O.A.getHiddenActivities();
    (G !== i && (G = i),
        e &&
            (k = F(
                (x = s()([...v, ...w.filter((e) => e.type !== l.$.CUSTOM_STATUS)].sort(C.m))
                    .uniqBy((e) => `${e.type}:${e.application_id}:${e.name}`)
                    .value()),
            )));
}
function j() {
    ((U = !1), (D = R.clD.UNKNOWN), H(), C.A.setCurrentUserOnConnectionOpen(y, x));
}
class W extends o.Ay.Store {
    static displayName = "SelfPresenceStore";
    initialize() {
        (this.waitFor(E.A, T.A, c.Ay, g.A, S.A, N.A, C.A, O.A, f.A, p.A), this.syncWith([N.A], H));
    }
    getLocalPresence() {
        return { status: y, since: b, activities: P, afk: M };
    }
    getStatus() {
        return y;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? k : P;
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? x : v;
    }
    getHiddenActivities() {
        return G;
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
let Y = new W(d.h, {
    START_SESSION: H,
    CONNECTION_OPEN: function () {
        j();
    },
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    OVERLAY_INITIALIZE: j,
    CONNECTION_CLOSED: H,
    IDLE: H,
    AFK: H,
    RUNNING_GAMES_CHANGE: H,
    STREAMING_UPDATE: H,
    USER_SETTINGS_PROTO_UPDATE: H,
    LOCAL_ACTIVITY_UPDATE: H,
    SPOTIFY_PLAYER_STATE: H,
    SPOTIFY_PLAYER_PLAY: H,
    USER_CONNECTIONS_UPDATE: H,
    SESSIONS_REPLACE: H,
    RPC_APP_DISCONNECTED: H,
    LIBRARY_FETCH_SUCCESS: H,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: H,
    LOGOUT: function () {
        ((U = !0), (D = y), H());
    },
    FORCE_INVISIBLE: function (e) {
        return ((L = e.invisible), H());
    },
    WINDOW_FOCUS: function () {
        return ((L = !1), H());
    },
    APP_STATE_UPDATE: function (e) {
        if (e.state !== R.g6G.ACTIVE || !L) return !1;
        ((L = !1), H());
    },
});

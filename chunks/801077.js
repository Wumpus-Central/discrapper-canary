n.d(t, { Z: () => eR }), n(388685), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(790920),
    c = n(527805),
    u = n(841784),
    d = n(503438),
    f = n(802856),
    p = n(420660),
    _ = n(622822),
    m = n(728345),
    h = n(812206),
    g = n(710845),
    E = n(38618),
    b = n(656063),
    y = n(761282),
    O = n(752048),
    v = n(992261),
    S = n(439944),
    I = n(789407),
    T = n(630186),
    A = n(250889),
    C = n(199902),
    N = n(592125),
    P = n(480294),
    R = n(831506),
    w = n(430824),
    D = n(496675),
    x = n(158776),
    L = n(699516),
    j = n(594174),
    M = n(979651),
    k = n(823379),
    U = n(981631);
function G(e, t, n) {
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
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = "party-",
    H = "channel-",
    Y = "user-",
    W = 1000,
    K = !1,
    z = !1,
    q = [],
    Q = [],
    X = {},
    J = {},
    $ = new Set(),
    ee = new Set();
function et() {
    let e = L.Z.getFriendIDs();
    return new Set(
        P.Z.hasConsented(U.pjP.PERSONALIZATION) ? [...O.Z.getUserAffinities().map((e) => e.otherUserId), ...e] : e,
    );
}
function en(e) {
    return x.Z.findActivity(e, (e) => e.type !== U.IIU.CUSTOM_STATUS);
}
function er(e) {
    return null == X[e] && (X = F(Z({}, X), { [e]: new A.Z({ name: e }) })), X[e];
}
function ei(e) {
    return null == J[e] && (J = F(Z({}, J), { [e]: new T.Z({ url: e }) })), J[e];
}
function ea(e) {
    ee.has(e) || $.add(e);
}
function eo(e) {
    if ((0, d.Z)(e)) return I.r9;
    if ((0, f.Z)(e)) return er(e.name);
    let t = null != e.application_id ? h.Z.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, p.Z)(e) && null != e.url
          ? ei(e.url)
          : (null != e.application_id && ea(e.application_id), t);
}
function es(e) {
    let t = h.Z.getApplication(e);
    return null != t
        ? t
        : "string" != typeof e
          ? (new g.Z("NowPlayingViewStore").error(
                "Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e),
                { tags: { source: "ACTIVITIES" } },
            ),
            null)
          : e === I.XB
            ? I.r9
            : e.startsWith(A.H)
              ? er(e.slice(A.H.length))
              : e.startsWith(T._)
                ? ei(e.slice(T._.length))
                : (ea(e), null);
}
function el(e) {
    let t = M.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null &&
        D.Z.canWithPartialContext(U.Plq.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function ec(e) {
    return a()(e).groupBy((e) => {
        var t;
        let n = el(e.id),
            r = en(e.id);
        return null != n
            ? "".concat(H).concat(n)
            : (null == r || null == (t = r.party) ? void 0 : t.id) != null
              ? "".concat(V).concat(r.party.id)
              : "".concat(Y).concat(e.id);
    });
}
function eu(e, t) {
    let n = (e) => e.game.name;
    return a()(e).orderBy([t, n], ["desc", "asc"]);
}
function ed(e) {
    return L.Z.isFriend(e.id);
}
function ef(e, t, n) {
    let r,
        i = j.default.getCurrentUser(),
        o = O.Z.getUserAffinitiesMap(),
        s = (0, S.C)(t, o, "NowPlayingViewStore - partiedMembers"),
        d = s.map((e) => e.id),
        f = s.filter((t) => e.has(t.id)),
        p = !1,
        m = [],
        h = new Set(),
        g = !1,
        E = [];
    for (let e of s) {
        var T, A, P, L;
        let t = C.Z.getAnyStreamForUser(e.id),
            n = N.Z.getChannel(null == t ? void 0 : t.channelId);
        if ((0, _.Y3)(n)) continue;
        let r = en(e.id);
        if (
            (null != t &&
                E.push({
                    stream: t,
                    streamUser: e,
                    activity: r,
                }),
            null == r)
        )
            continue;
        let o = (0, b.Z)(r);
        if (null == o) continue;
        g = o === I.XB;
        let d = es(o);
        if ((0, u.Z)(r)) {
            let t = (0, l.a)();
            if (
                (0, c.ZP)({
                    activity: r,
                    userId: e.id,
                    application: d,
                    channelId: null == (A = M.Z.getVoiceStateForUser(e.id)) ? void 0 : A.channelId,
                    currentUser: i,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: N.Z,
                    VoiceStateStore: M.Z,
                    PermissionStore: D.Z,
                    GuildStore: w.Z,
                }) !== c.Fw.CAN_JOIN
            )
                continue;
        }
        if (!y.JE(r) || null == d || h.has(d.id)) continue;
        let f = null != r ? eo(r) : null;
        (null == f || f.id !== d.id) && (r = null);
        let O = [];
        (O =
            null != r && null != r.party && null != r.party.id
                ? Array.from(null != (P = R.Z.getParty(r.party.id)) ? P : []).reduce((e, t) => {
                      let n = j.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : s.filter((e) => {
                      let t = en(e.id),
                          n = null != t ? eo(t) : null;
                      return null != n && n.id === d.id;
                  })),
            (O = a().orderBy(O, [ed], ["desc"])).length !== s.length && (p = !0),
            h.add(d.id),
            m.push({
                game: d,
                activity: r,
                activityUser: e,
                startedPlayingTime:
                    null != (L = null == r || null == (T = r.timestamps) ? void 0 : T.start)
                        ? L
                        : null == r
                          ? void 0
                          : r.created_at,
                playingMembers: O,
            });
    }
    let U = 1 === f.length,
        G = [],
        Z = new Set(),
        B = new Set();
    for (let e of s) {
        let t = el(e.id),
            n = N.Z.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            o = w.Z.getGuild(i);
        if ((B.has(i) && Z.has(t)) || null == n || null == o || n.id === o.afkChannelId)
            null == n && ((r = null), (U = !0));
        else {
            let e = M.Z.getVoiceStatesForChannel(n.id),
                l = (0, v.HG)("NowPlayingViewStore - voiceMembers"),
                c = ed;
            null != l &&
                (c = (e) => {
                    var t, n;
                    let r = O.Z.getUserAffinity(e.id);
                    return "vc_probability" === l
                        ? null != (t = null == r ? void 0 : r.vcProbability)
                            ? t
                            : 0
                        : null != (n = null == r ? void 0 : r.communicationProbability)
                          ? n
                          : 0;
                });
            let u = a()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return j.default.getUser(t);
                })
                .filter(k.lm)
                .orderBy([c], ["desc"])
                .value();
            u.filter((e) => !d.includes(e.id)).forEach((e) => s.push(e)),
                U ? B.has(i) || (r = null) : ((r = o), (U = !0)),
                B.add(i),
                Z.add(t),
                G.push({
                    channel: n,
                    guild: o,
                    members: u,
                    voiceStates: e,
                });
        }
    }
    return {
        id: n,
        voiceChannels: G,
        isSpotifyActivity: g,
        priorityMembers: f.map((e) => ({
            user: e,
            status: x.Z.getStatus(e.id),
        })),
        partiedMembers: s,
        showPlayingMembers: p,
        guildContext: r,
        currentActivities: eu(m, (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }).value(),
        applicationStreams: E,
    };
}
function ep(e) {
    let t = et(),
        n = ef.bind(null, t);
    return a()(e).mapValues(n);
}
function e_(e) {
    let t = (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(" "),
        n = (e) => e.currentActivities.length > 0,
        r = (e) => e.voiceChannels.length > 0,
        i = (e) => e.applicationStreams.length > 0,
        a = (e) => e.partiedMembers.length > 1,
        o = (e) => e.isSpotifyActivity;
    return e.values().orderBy([em, a, i, r, n, o, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value();
}
function em(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function eh(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function eg(e) {
    return e.partiedMembers.some((e) => L.Z.isBlockedOrIgnored(e.id));
}
function eE(e) {
    return e.filter((e) => {
        let t = eg(e),
            n = eh(e);
        return (
            (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) &&
            !t &&
            !n
        );
    });
}
function eb(e) {
    return e.map((e) => ({
        type: U.GOo.USER,
        party: e,
    }));
}
function ey() {
    if ($.size > 0) {
        let e = Array.from($);
        m.ZP.fetchApplications(e), e.forEach((e) => ee.add(e)), $.clear();
    }
}
function eO() {
    return K && E.Z.isConnected();
}
function ev() {
    if (!eO()) return !1;
    $.clear(),
        (Q = eb(
            (q = eE(
                e_(
                    ep(
                        ec(
                            Array.from(et()).reduce((e, t) => {
                                let n = j.default.getUser(t);
                                return null == n || n.bot || e.push(n), e;
                            }, []),
                        ),
                    ),
                ),
            )),
        )),
        ey(),
        (z = !0);
}
let eS = a().throttle(() => {
    ev(), eP.emitChange();
}, W);
function eI() {
    return !!eO() && (eS(), !1);
}
function eT() {
    (K = !1), (q = []), (Q = []), $.clear();
}
function eA() {
    (K = !0), eS();
}
function eC() {
    K = !1;
}
class eN extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([j.default, h.Z, x.Z, R.Z, M.Z, C.Z, L.Z, P.Z, O.Z], eI),
            this.waitFor(h.Z, C.Z, N.Z, P.Z, R.Z, E.Z, w.Z, D.Z, x.Z, L.Z, O.Z, j.default, M.Z);
    }
    get currentActivityParties() {
        return q;
    }
    get nowPlayingCards() {
        return Q;
    }
    get isMounted() {
        return K;
    }
    get loaded() {
        return z;
    }
}
G(eN, "displayName", "NowPlayingViewStore");
let eP = new eN(s.Z, {
        LOGOUT: eT,
        NOW_PLAYING_MOUNTED: eA,
        NOW_PLAYING_UNMOUNTED: eC,
    }),
    eR = eP;

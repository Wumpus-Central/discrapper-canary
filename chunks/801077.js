n.d(t, { Z: () => ew }), n(388685), n(539854);
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
    _ = n(420660),
    p = n(622822),
    h = n(728345),
    m = n(812206),
    g = n(710845),
    E = n(38618),
    b = n(656063),
    y = n(761282),
    O = n(752048),
    v = n(992261),
    I = n(439944),
    T = n(789407),
    S = n(630186),
    A = n(250889),
    N = n(199902),
    C = n(592125),
    R = n(480294),
    P = n(831506),
    w = n(731290),
    D = n(430824),
    L = n(496675),
    x = n(158776),
    M = n(699516),
    k = n(594174),
    j = n(979651),
    U = n(823379),
    G = n(981631);
function B(e, t, n) {
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
function V(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = "party-",
    Y = "channel-",
    W = "user-",
    K = 1000,
    z = !1,
    q = !1,
    X = [],
    Q = [],
    J = {},
    $ = {},
    ee = new Set(),
    et = new Set();
function en() {
    let e = M.Z.getFriendIDs();
    return new Set(
        R.Z.hasConsented(G.pjP.PERSONALIZATION) ? [...O.Z.getUserAffinities().map((e) => e.otherUserId), ...e] : e,
    );
}
function er(e) {
    return x.Z.findActivity(e, (e) => e.type !== G.IIU.CUSTOM_STATUS);
}
function ei(e) {
    return null == J[e] && (J = Z(V({}, J), { [e]: new A.Z({ name: e }) })), J[e];
}
function ea(e) {
    return null == $[e] && ($ = Z(V({}, $), { [e]: new S.Z({ url: e }) })), $[e];
}
function eo(e) {
    et.has(e) || ee.add(e);
}
function es(e) {
    if ((0, d.Z)(e)) return T.r9;
    if ((0, f.Z)(e)) return ei(e.name);
    let t = null != e.application_id ? m.Z.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, _.Z)(e) && null != e.url
          ? ea(e.url)
          : (null != e.application_id && eo(e.application_id), t);
}
function el(e) {
    let t = m.Z.getApplication(e);
    return null != t
        ? t
        : "string" != typeof e
          ? (new g.Z("NowPlayingViewStore").error(
                "Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e),
                { tags: { source: "ACTIVITIES" } },
            ),
            null)
          : e === T.XB
            ? T.r9
            : e.startsWith(A.H)
              ? ei(e.slice(A.H.length))
              : e.startsWith(S._)
                ? ea(e.slice(S._.length))
                : (eo(e), null);
}
function ec(e) {
    let t = j.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null &&
        L.Z.canWithPartialContext(G.Plq.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function eu(e) {
    return a()(e).groupBy((e) => {
        var t;
        let n = ec(e.id),
            r = er(e.id);
        return null != n
            ? "".concat(Y).concat(n)
            : (null == r || null == (t = r.party) ? void 0 : t.id) != null
              ? "".concat(H).concat(r.party.id)
              : "".concat(W).concat(e.id);
    });
}
function ed(e, t) {
    let n = (e) => e.game.name;
    return a()(e).orderBy([t, n], ["desc", "asc"]);
}
function ef(e) {
    return M.Z.isFriend(e.id);
}
function e_(e, t, n) {
    var r, i, o, s, d;
    let f,
        _ = k.default.getCurrentUser(),
        h = null != (r = null == _ ? void 0 : _.nsfwAllowed) && r,
        m = O.Z.getUserAffinitiesMap(),
        g = (0, I.C)(t, m, "NowPlayingViewStore - partiedMembers"),
        E = g.map((e) => e.id),
        S = g.filter((t) => e.has(t.id)),
        A = !1,
        R = [],
        M = new Set(),
        G = !1,
        B = [];
    for (let e of g) {
        let t = N.Z.getAnyStreamForUser(e.id),
            n = C.Z.getChannel(null == t ? void 0 : t.channelId);
        if ((0, p.aC)(n) && (!h || !w.Z.didAgree(null == n ? void 0 : n.getGuildId()))) continue;
        let r = er(e.id);
        if (
            (null != t &&
                B.push({
                    stream: t,
                    streamUser: e,
                    activity: r,
                }),
            null == r)
        )
            continue;
        let f = (0, b.Z)(r);
        if (null == f) continue;
        G = f === T.XB;
        let m = el(f);
        if ((0, u.Z)(r)) {
            let t = (0, l.a)();
            if (
                (0, c.ZP)({
                    activity: r,
                    userId: e.id,
                    application: m,
                    channelId: null == (o = j.Z.getVoiceStateForUser(e.id)) ? void 0 : o.channelId,
                    currentUser: _,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: C.Z,
                    VoiceStateStore: j.Z,
                    PermissionStore: L.Z,
                    GuildStore: D.Z,
                }) !== c.Fw.CAN_JOIN
            )
                continue;
        }
        if (!y.JE(r) || null == m || M.has(m.id)) continue;
        let E = null != r ? es(r) : null;
        (null == E || E.id !== m.id) && (r = null);
        let O = [];
        (O =
            null != r && null != r.party && null != r.party.id
                ? Array.from(null != (s = P.Z.getParty(r.party.id)) ? s : []).reduce((e, t) => {
                      let n = k.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : g.filter((e) => {
                      let t = er(e.id),
                          n = null != t ? es(t) : null;
                      return null != n && n.id === m.id;
                  })),
            (O = a().orderBy(O, [ef], ["desc"])).length !== g.length && (A = !0),
            M.add(m.id),
            R.push({
                game: m,
                activity: r,
                activityUser: e,
                startedPlayingTime:
                    null != (d = null == r || null == (i = r.timestamps) ? void 0 : i.start)
                        ? d
                        : null == r
                          ? void 0
                          : r.created_at,
                playingMembers: O,
            });
    }
    let V = 1 === S.length,
        F = [],
        Z = new Set(),
        H = new Set();
    for (let e of g) {
        let t = ec(e.id),
            n = C.Z.getChannel(t),
            r = null != n ? n.getGuildId() : null,
            i = D.Z.getGuild(r);
        if ((H.has(r) && Z.has(t)) || null == n || null == i || n.id === i.afkChannelId)
            null == n && ((f = null), (V = !0));
        else {
            let e = j.Z.getVoiceStatesForChannel(n.id),
                o = (0, v.HG)("NowPlayingViewStore - voiceMembers"),
                s = ef;
            null != o &&
                (s = (e) => {
                    var t, n;
                    let r = O.Z.getUserAffinity(e.id);
                    return "vc_probability" === o
                        ? null != (t = null == r ? void 0 : r.vcProbability)
                            ? t
                            : 0
                        : null != (n = null == r ? void 0 : r.communicationProbability)
                          ? n
                          : 0;
                });
            let l = a()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return k.default.getUser(t);
                })
                .filter(U.lm)
                .orderBy([s], ["desc"])
                .value();
            l.filter((e) => !E.includes(e.id)).forEach((e) => g.push(e)),
                V ? H.has(r) || (f = null) : ((f = i), (V = !0)),
                H.add(r),
                Z.add(t),
                F.push({
                    channel: n,
                    guild: i,
                    members: l,
                    voiceStates: e,
                });
        }
    }
    return {
        id: n,
        voiceChannels: F,
        isSpotifyActivity: G,
        priorityMembers: S.map((e) => ({
            user: e,
            status: x.Z.getStatus(e.id),
        })),
        partiedMembers: g,
        showPlayingMembers: A,
        guildContext: f,
        currentActivities: ed(R, (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }).value(),
        applicationStreams: B,
    };
}
function ep(e) {
    let t = en(),
        n = e_.bind(null, t);
    return a()(e).mapValues(n);
}
function eh(e) {
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
function eg(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function eE(e) {
    return e.partiedMembers.some((e) => M.Z.isBlockedOrIgnored(e.id));
}
function eb(e) {
    return e.filter((e) => {
        let t = eE(e),
            n = eg(e);
        return (
            (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) &&
            !t &&
            !n
        );
    });
}
function ey(e) {
    return e.map((e) => ({
        type: G.GOo.USER,
        party: e,
    }));
}
function eO() {
    if (ee.size > 0) {
        let e = Array.from(ee);
        h.ZP.fetchApplications(e), e.forEach((e) => et.add(e)), ee.clear();
    }
}
function ev() {
    return z && E.Z.isConnected();
}
function eI() {
    if (!ev()) return !1;
    ee.clear(),
        (Q = ey(
            (X = eb(
                eh(
                    ep(
                        eu(
                            Array.from(en()).reduce((e, t) => {
                                let n = k.default.getUser(t);
                                return null == n || n.bot || e.push(n), e;
                            }, []),
                        ),
                    ),
                ),
            )),
        )),
        eO(),
        (q = !0);
}
let eT = a().throttle(() => {
    eI(), eP.emitChange();
}, K);
function eS() {
    return !!ev() && (eT(), !1);
}
function eA() {
    (z = !1), (X = []), (Q = []), ee.clear();
}
function eN() {
    (z = !0), eT();
}
function eC() {
    z = !1;
}
class eR extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([k.default, m.Z, x.Z, P.Z, j.Z, N.Z, M.Z, R.Z, O.Z], eS),
            this.waitFor(E.Z, D.Z, m.Z, k.default, O.Z);
    }
    get currentActivityParties() {
        return X;
    }
    get nowPlayingCards() {
        return Q;
    }
    get isMounted() {
        return z;
    }
    get loaded() {
        return q;
    }
}
B(eR, "displayName", "NowPlayingViewStore");
let eP = new eR(s.Z, {
        LOGOUT: eA,
        NOW_PLAYING_MOUNTED: eN,
        NOW_PLAYING_UNMOUNTED: eC,
    }),
    ew = eP;

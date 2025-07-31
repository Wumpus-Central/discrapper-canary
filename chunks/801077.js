(n.d(t, { Z: () => eR }), n(388685), n(539854));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(790920),
    c = n(527805),
    u = n(841784),
    d = n(503438),
    _ = n(802856),
    f = n(420660),
    p = n(622822),
    h = n(728345),
    m = n(812206),
    g = n(710845),
    E = n(38618),
    b = n(656063),
    y = n(761282),
    O = n(752048),
    v = n(789407),
    I = n(630186),
    T = n(250889),
    S = n(199902),
    A = n(592125),
    N = n(480294),
    C = n(831506),
    R = n(731290),
    P = n(430824),
    w = n(496675),
    D = n(158776),
    L = n(699516),
    x = n(594174),
    k = n(979651),
    M = n(823379),
    j = n(981631);
function U(e, t, n) {
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
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            }));
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function V(e, t) {
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
let F = 'party-',
    Z = 'channel-',
    H = 'user-',
    Y = 1000,
    W = !1,
    K = !1,
    z = [],
    q = [],
    X = {},
    Q = {},
    J = new Set(),
    $ = new Set();
function ee() {
    let e = L.Z.getFriendIDs();
    return new Set(N.Z.hasConsented(j.pjP.PERSONALIZATION) ? [...O.Z.getUserAffinities().map((e) => e.otherUserId), ...e] : e);
}
function et(e) {
    return D.Z.findActivity(e, (e) => e.type !== j.IIU.CUSTOM_STATUS);
}
function en(e) {
    return (null == X[e] && (X = V(G({}, X), { [e]: new T.Z({ name: e }) })), X[e]);
}
function er(e) {
    return (null == Q[e] && (Q = V(G({}, Q), { [e]: new I.Z({ url: e }) })), Q[e]);
}
function ei(e) {
    $.has(e) || J.add(e);
}
function ea(e) {
    if ((0, d.Z)(e)) return v.r9;
    if ((0, _.Z)(e)) return en(e.name);
    let t = null != e.application_id ? m.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, f.Z)(e) && null != e.url ? er(e.url) : (null != e.application_id && ei(e.application_id), t);
}
function eo(e) {
    let t = m.Z.getApplication(e);
    return null != t ? t : 'string' != typeof e ? (new g.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === v.XB ? v.r9 : e.startsWith(T.H) ? en(e.slice(T.H.length)) : e.startsWith(I._) ? er(e.slice(I._.length)) : (ei(e), null);
}
function es(e) {
    let t = k.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && w.Z.canWithPartialContext(j.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return a()(e).groupBy((e) => {
        var t;
        let n = es(e.id),
            r = et(e.id);
        return null != n ? ''.concat(Z).concat(n) : (null == r || null == (t = r.party) ? void 0 : t.id) != null ? ''.concat(F).concat(r.party.id) : ''.concat(H).concat(e.id);
    });
}
function ec(e, t) {
    let n = (e) => e.game.name;
    return a()(e).orderBy([t, n], ['desc', 'asc']);
}
function eu(e) {
    return L.Z.isFriend(e.id);
}
function ed(e, t, n) {
    var r, i, o, s, d;
    let _,
        f = x.default.getCurrentUser(),
        h = null != (r = null == f ? void 0 : f.nsfwAllowed) && r,
        m = t.map((e) => e.id),
        g = t.filter((t) => e.has(t.id)),
        E = !1,
        O = [],
        I = new Set(),
        T = !1,
        N = [];
    for (let e of t) {
        let n = S.Z.getAnyStreamForUser(e.id),
            r = A.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((0, p.aC)(r) && (!h || !R.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let _ = et(e.id);
        if (
            (null != n &&
                N.push({
                    stream: n,
                    streamUser: e,
                    activity: _
                }),
            null == _)
        )
            continue;
        let m = (0, b.Z)(_);
        if (null == m) continue;
        T = m === v.XB;
        let g = eo(m);
        if ((0, u.Z)(_)) {
            let t = (0, l.a)();
            if (
                (0, c.ZP)({
                    activity: _,
                    userId: e.id,
                    application: g,
                    channelId: null == (o = k.Z.getVoiceStateForUser(e.id)) ? void 0 : o.channelId,
                    currentUser: f,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: A.Z,
                    VoiceStateStore: k.Z,
                    PermissionStore: w.Z,
                    GuildStore: P.Z
                }) !== c.Fw.CAN_JOIN
            )
                continue;
        }
        if (!y.JE(_) || null == g || I.has(g.id)) continue;
        let D = null != _ ? ea(_) : null;
        (null == D || D.id !== g.id) && (_ = null);
        let L = [];
        ((L =
            null != _ && null != _.party && null != _.party.id
                ? Array.from(null != (s = C.Z.getParty(_.party.id)) ? s : []).reduce((e, t) => {
                      let n = x.default.getUser(t);
                      return (null != n && e.push(n), e);
                  }, [])
                : t.filter((e) => {
                      let t = et(e.id),
                          n = null != t ? ea(t) : null;
                      return null != n && n.id === g.id;
                  })),
            (L = a().orderBy(L, [eu], ['desc'])).length !== t.length && (E = !0),
            I.add(g.id),
            O.push({
                game: g,
                activity: _,
                activityUser: e,
                startedPlayingTime: null != (d = null == _ || null == (i = _.timestamps) ? void 0 : i.start) ? d : null == _ ? void 0 : _.created_at,
                playingMembers: L
            }));
    }
    let L = 1 === g.length,
        j = [],
        U = new Set(),
        G = new Set();
    for (let e of t) {
        let n = es(e.id),
            r = A.Z.getChannel(n),
            i = null != r ? r.getGuildId() : null,
            o = P.Z.getGuild(i);
        if ((G.has(i) && U.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((_ = null), (L = !0));
        else {
            let e = k.Z.getVoiceStatesForChannel(r.id),
                s = a()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return x.default.getUser(t);
                    })
                    .filter(M.lm)
                    .orderBy([eu], ['desc'])
                    .value();
            (s.filter((e) => !m.includes(e.id)).forEach((e) => t.push(e)),
                L ? G.has(i) || (_ = null) : ((_ = o), (L = !0)),
                G.add(i),
                U.add(n),
                j.push({
                    channel: r,
                    guild: o,
                    members: s,
                    voiceStates: e
                }));
        }
    }
    return {
        id: n,
        voiceChannels: j,
        isSpotifyActivity: T,
        priorityMembers: g.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: E,
        guildContext: _,
        currentActivities: ec(O, (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }).value(),
        applicationStreams: N
    };
}
function e_(e) {
    let t = ee(),
        n = ed.bind(null, t);
    return a()(e).mapValues(n);
}
function ef(e) {
    let t = (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' '),
        n = (e) => e.currentActivities.length > 0,
        r = (e) => e.voiceChannels.length > 0,
        i = (e) => e.applicationStreams.length > 0,
        a = (e) => e.partiedMembers.length > 1,
        o = (e) => e.isSpotifyActivity;
    return e.values().orderBy([ep, a, i, r, n, o, t], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc']).value();
}
function ep(e) {
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
function em(e) {
    return e.partiedMembers.some((e) => L.Z.isBlockedOrIgnored(e.id));
}
function eg(e) {
    return e.filter((e) => {
        let t = em(e),
            n = eh(e);
        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n;
    });
}
function eE(e) {
    return e.map((e) => ({
        type: j.GOo.USER,
        party: e
    }));
}
function eb() {
    if (J.size > 0) {
        let e = Array.from(J);
        (h.ZP.fetchApplications(e), e.forEach((e) => $.add(e)), J.clear());
    }
}
function ey() {
    return W && E.Z.isConnected();
}
function eO() {
    if (!ey()) return !1;
    (J.clear(),
        (q = eE(
            (z = eg(
                ef(
                    e_(
                        el(
                            Array.from(ee()).reduce((e, t) => {
                                let n = x.default.getUser(t);
                                return (null == n || n.bot || e.push(n), e);
                            }, [])
                        )
                    )
                )
            ))
        )),
        eb(),
        (K = !0));
}
let ev = a().throttle(() => {
    (eO(), eC.emitChange());
}, Y);
function eI() {
    return !!ey() && (ev(), !1);
}
function eT() {
    ((W = !1), (z = []), (q = []), J.clear());
}
function eS() {
    ((W = !0), ev());
}
function eA() {
    W = !1;
}
class eN extends (r = o.ZP.Store) {
    initialize() {
        (this.syncWith([x.default, m.Z, D.Z, C.Z, k.Z, S.Z, L.Z, N.Z, O.Z], eI), this.waitFor(E.Z, P.Z, m.Z, x.default, O.Z));
    }
    get currentActivityParties() {
        return z;
    }
    get nowPlayingCards() {
        return q;
    }
    get isMounted() {
        return W;
    }
    get loaded() {
        return K;
    }
}
U(eN, 'displayName', 'NowPlayingViewStore');
let eC = new eN(s.Z, {
        LOGOUT: eT,
        NOW_PLAYING_MOUNTED: eS,
        NOW_PLAYING_UNMOUNTED: eA
    }),
    eR = eC;

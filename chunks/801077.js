n.d(t, { Z: () => ep }), n(47120), n(653041), n(724458), n(627341);
var i,
    l,
    r,
    a = n(392711),
    o = n.n(a),
    s = n(278074),
    c = n(442837),
    d = n(570140),
    u = n(782769),
    h = n(527805),
    p = n(841784),
    m = n(503438),
    g = n(802856),
    f = n(420660),
    _ = n(728345),
    v = n(812206),
    C = n(750881),
    x = n(710845),
    Z = n(38618),
    I = n(656063),
    b = n(761282),
    S = n(814443),
    N = n(789407),
    E = n(630186),
    j = n(250889),
    y = n(199902),
    A = n(592125),
    P = n(480294),
    T = n(831506),
    w = n(731290),
    R = n(430824),
    L = n(496675),
    M = n(158776),
    D = n(699516),
    G = n(594174),
    k = n(979651),
    B = n(626135),
    O = n(823379),
    U = n(981631);
let V = !1,
    F = !1,
    H = [],
    z = [],
    W = {},
    q = {},
    Y = new Set(),
    Q = new Set();
function J() {
    let e = D.Z.getFriendIDs();
    return new Set(P.Z.hasConsented(U.pjP.PERSONALIZATION) ? [...S.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function K(e) {
    return M.Z.findActivity(e, (e) => e.type !== U.IIU.CUSTOM_STATUS);
}
function X(e) {
    return (
        null == W[e] &&
            (W = {
                ...W,
                [e]: new j.Z({ name: e })
            }),
        W[e]
    );
}
function $(e) {
    return (
        null == q[e] &&
            (q = {
                ...q,
                [e]: new E.Z({ url: e })
            }),
        q[e]
    );
}
function ee(e) {
    Q.has(e) || Y.add(e);
}
function et(e) {
    if ((0, m.Z)(e)) return N.r9;
    let t = null != e.application_id ? v.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, g.Z)(e) ? X(e.name) : (0, f.Z)(e) && null != e.url ? $(e.url) : (null != e.application_id && ee(e.application_id), t);
}
function en(e) {
    let t = k.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && L.Z.canWithPartialContext(U.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function ei(e) {
    return D.Z.isFriend(e.id);
}
function el(e, t, n) {
    var i, l, r, a, s;
    let c;
    let d = G.default.getCurrentUser(),
        m = null !== (i = null == d ? void 0 : d.nsfwAllowed) && void 0 !== i && i,
        g = t.map((e) => e.id),
        f = t.filter((t) => e.has(t.id)),
        _ = !1,
        C = [],
        Z = new Set(),
        S = !1,
        P = [];
    for (let e of t) {
        let n = y.Z.getAnyStreamForUser(e.id),
            i = A.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == i ? void 0 : i.isNSFW()) && (!m || !w.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
        let s = K(e.id);
        if (
            (null != n &&
                P.push({
                    stream: n,
                    streamUser: e,
                    activity: s
                }),
            null == s)
        )
            continue;
        let c = (0, I.Z)(s);
        if (null == c) continue;
        S = c === N.XB;
        let g = (function (e) {
                let t = v.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new x.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === N.XB ? N.r9 : e.startsWith(j.H) ? X(e.slice(j.H.length)) : e.startsWith(E._) ? $(e.slice(E._.length)) : (ee(e), null);
            })(c),
            f = null === (l = s.timestamps) || void 0 === l ? void 0 : l.start;
        if ((0, p.Z)(s)) {
            let t = (0, u.a)();
            if (
                (0, h.ZP)({
                    activity: s,
                    userId: e.id,
                    application: g,
                    channelId: null === (r = k.Z.getVoiceStateForUser(e.id)) || void 0 === r ? void 0 : r.channelId,
                    currentUser: d,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: A.Z,
                    VoiceStateStore: k.Z,
                    PermissionStore: L.Z,
                    GuildStore: R.Z
                }) !== h.Fw.CAN_JOIN
            )
                continue;
        } else if (null == f) continue;
        if (!b.JE(s) || null == g || Z.has(g.id)) continue;
        let M = null != s ? et(s) : null;
        (null == M || M.id !== g.id) && (s = null);
        let D = [];
        (D =
            null != s && null != s.party && null != s.party.id
                ? Array.from(null !== (a = T.Z.getParty(s.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
                      let n = G.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = K(e.id),
                          n = null != t ? et(t) : null;
                      return null != n && n.id === g.id;
                  })),
            (D = o().orderBy(D, [ei], ['desc'])).length !== t.length && (_ = !0),
            Z.add(g.id),
            C.push({
                game: g,
                activity: s,
                activityUser: e,
                startedPlayingTime: f,
                playingMembers: D
            });
    }
    let D = 1 === f.length,
        B = [],
        U = new Set(),
        V = new Set();
    for (let e of t) {
        let n = en(e.id),
            i = A.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = R.Z.getGuild(l);
        if ((V.has(l) && U.has(n)) || null == i || null == r || i.id === r.afkChannelId) null == i && ((c = null), (D = !0));
        else {
            let e = k.Z.getVoiceStatesForChannel(i.id),
                a = o()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return G.default.getUser(t);
                    })
                    .filter(O.lm)
                    .orderBy([ei], ['desc'])
                    .value();
            a.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
                D ? V.has(l) || (c = null) : ((c = r), (D = !0)),
                V.add(l),
                U.add(n),
                B.push({
                    channel: i,
                    guild: r,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: B,
        isSpotifyActivity: S,
        priorityMembers: f.map((e) => ({
            user: e,
            status: M.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: _,
        guildContext: c,
        currentActivities: ((s = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        o()(C).orderBy([s, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: P
    };
}
function er(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, C.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ea(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, C.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function eo(e) {
    return !!(0, C.sb)('now-playing-view-store') && e.partiedMembers.some((e) => D.Z.isBlocked(e.id));
}
function es() {
    return V && Z.Z.isConnected();
}
let ec = o().throttle(() => {
    !(function () {
        var e;
        if (!es()) return;
        Y.clear();
        let t = (function (e) {
                let t = J(),
                    n = el.bind(null, t);
                return o()(e).mapValues(n);
            })(
                ((e = Array.from(J()).reduce((e, t) => {
                    let n = G.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                o()(e).groupBy((e) => {
                    var t;
                    let n = en(e.id),
                        i = K(e.id);
                    return null != n ? ''.concat('channel-', '-').concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(i.party.id) : ''.concat('user-', '-').concat(e.id);
                }))
            )
                .values()
                .orderBy([er, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: i, analyticsEligible: l } = (0, C.p7)('now-playing-view-store');
        l &&
            t.forEach((e) => {
                let t = (0, s.EQ)({
                    party: e,
                    blockeeExperimentEnabled: n,
                    blockerExperimentEnabled: i
                })
                    .returnType()
                    .with(
                        {
                            blockerExperimentEnabled: !0,
                            party: s.P.when(eo)
                        },
                        () => C.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: s.P.when(ea)
                        },
                        () => C.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: s.P.when(er)
                        },
                        () => C.h9.DERANK
                    )
                    .otherwise(() => C.h9.SHOW);
                e.voiceChannels.forEach((e) => {
                    let { voiceStates: n, channel: i } = e,
                        l = o().map(n, 'userId'),
                        r = o().map(n, 'discoverable'),
                        a = o().map(n, (e) => D.Z.getRelationshipType(e.userId));
                    B.default.track(U.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                        activity_user_ids: l,
                        discoverable: r,
                        relationship_types: a,
                        voice_channel_id: i.id,
                        treatment: t,
                        surface: 'now-playing'
                    });
                });
            }),
            (z = (H = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, C.p7)('now-playing-view-store'),
                    i = n && eo(e),
                    l = t && ea(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !i && !l;
            })).map((e) => ({
                type: U.GOo.USER,
                party: e
            }))),
            (function () {
                if (Y.size > 0) {
                    let e = Array.from(Y);
                    _.ZP.fetchApplications(e), e.forEach((e) => Q.add(e)), Y.clear();
                }
            })(),
            (F = !0);
    })(),
        eh.emitChange();
}, 1000);
function ed() {
    return !!es() && (ec(), !1);
}
class eu extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([G.default, v.Z, M.Z, T.Z, k.Z, y.Z, D.Z, P.Z, S.Z], ed), this.waitFor(Z.Z, R.Z, v.Z, G.default, S.Z);
    }
    get currentActivityParties() {
        return H;
    }
    get nowPlayingCards() {
        return z;
    }
    get isMounted() {
        return V;
    }
    get loaded() {
        return F;
    }
}
(r = 'NowPlayingViewStore'),
    (l = 'displayName') in eu
        ? Object.defineProperty(eu, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (eu[l] = r);
let eh = new eu(d.Z, {
        LOGOUT: function () {
            (V = !1), (H = []), (z = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (V = !0), ec();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            V = !1;
        }
    }),
    ep = eh;

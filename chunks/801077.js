n.d(t, { Z: () => ef }), n(47120), n(653041), n(724458), n(627341);
var l,
    i,
    a,
    r = n(392711),
    o = n.n(r),
    s = n(278074),
    c = n(442837),
    u = n(570140),
    d = n(782769),
    h = n(527805),
    f = n(841784),
    g = n(503438),
    p = n(802856),
    N = n(420660),
    v = n(728345),
    x = n(812206),
    m = n(750881),
    C = n(710845),
    I = n(38618),
    E = n(656063),
    T = n(761282),
    y = n(814443),
    Z = n(789407),
    O = n(630186),
    b = n(250889),
    _ = n(199902),
    S = n(592125),
    w = n(480294),
    A = n(831506),
    P = n(731290),
    j = n(430824),
    R = n(496675),
    k = n(158776),
    D = n(699516),
    F = n(594174),
    M = n(979651),
    B = n(626135),
    U = n(823379),
    L = n(981631);
let V = !1,
    G = !1,
    W = [],
    H = [],
    K = {},
    Q = {},
    z = new Set(),
    Y = new Set();
function X() {
    let e = D.Z.getFriendIDs();
    return new Set(w.Z.hasConsented(L.pjP.PERSONALIZATION) ? [...y.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function J(e) {
    return k.Z.findActivity(e, (e) => e.type !== L.IIU.CUSTOM_STATUS);
}
function q(e) {
    return (
        null == K[e] &&
            (K = {
                ...K,
                [e]: new b.Z({ name: e })
            }),
        K[e]
    );
}
function $(e) {
    return (
        null == Q[e] &&
            (Q = {
                ...Q,
                [e]: new O.Z({ url: e })
            }),
        Q[e]
    );
}
function ee(e) {
    Y.has(e) || z.add(e);
}
function et(e) {
    if ((0, g.Z)(e)) return Z.r9;
    let t = null != e.application_id ? x.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, p.Z)(e) ? q(e.name) : (0, N.Z)(e) && null != e.url ? $(e.url) : (null != e.application_id && ee(e.application_id), t);
}
function en(e) {
    let t = M.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && R.Z.canWithPartialContext(L.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return D.Z.isFriend(e.id);
}
function ei(e, t, n) {
    var l, i, a, r, s;
    let c;
    let u = F.default.getCurrentUser(),
        g = null !== (l = null == u ? void 0 : u.nsfwAllowed) && void 0 !== l && l,
        p = t.map((e) => e.id),
        N = t.filter((t) => e.has(t.id)),
        v = !1,
        m = [],
        I = new Set(),
        y = !1,
        w = [];
    for (let e of t) {
        let n = _.Z.getAnyStreamForUser(e.id),
            l = S.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == l ? void 0 : l.isNSFW()) && (!g || !P.Z.didAgree(null == l ? void 0 : l.getGuildId()))) continue;
        let s = J(e.id);
        if (
            (null != n &&
                w.push({
                    stream: n,
                    streamUser: e,
                    activity: s
                }),
            null == s)
        )
            continue;
        let c = (0, E.Z)(s);
        if (null == c) continue;
        y = c === Z.XB;
        let p = (function (e) {
                let t = x.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new C.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === Z.XB ? Z.r9 : e.startsWith(b.H) ? q(e.slice(b.H.length)) : e.startsWith(O._) ? $(e.slice(O._.length)) : (ee(e), null);
            })(c),
            N = null === (i = s.timestamps) || void 0 === i ? void 0 : i.start;
        if ((0, f.Z)(s)) {
            let t = (0, d.a)();
            if (
                (0, h.ZP)({
                    activity: s,
                    userId: e.id,
                    application: p,
                    channelId: null === (a = M.Z.getVoiceStateForUser(e.id)) || void 0 === a ? void 0 : a.channelId,
                    currentUser: u,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: S.Z,
                    VoiceStateStore: M.Z,
                    PermissionStore: R.Z,
                    GuildStore: j.Z
                }) !== h.Fw.CAN_JOIN
            )
                continue;
        } else if (null == N) continue;
        if (!T.JE(s) || null == p || I.has(p.id)) continue;
        let k = null != s ? et(s) : null;
        (null == k || k.id !== p.id) && (s = null);
        let D = [];
        (D =
            null != s && null != s.party && null != s.party.id
                ? Array.from(null !== (r = A.Z.getParty(s.party.id)) && void 0 !== r ? r : []).reduce((e, t) => {
                      let n = F.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = J(e.id),
                          n = null != t ? et(t) : null;
                      return null != n && n.id === p.id;
                  })),
            (D = o().orderBy(D, [el], ['desc'])).length !== t.length && (v = !0),
            I.add(p.id),
            m.push({
                game: p,
                activity: s,
                activityUser: e,
                startedPlayingTime: N,
                playingMembers: D
            });
    }
    let D = 1 === N.length,
        B = [],
        L = new Set(),
        V = new Set();
    for (let e of t) {
        let n = en(e.id),
            l = S.Z.getChannel(n),
            i = null != l ? l.getGuildId() : null,
            a = j.Z.getGuild(i);
        if ((V.has(i) && L.has(n)) || null == l || null == a || l.id === a.afkChannelId) null == l && ((c = null), (D = !0));
        else {
            let e = M.Z.getVoiceStatesForChannel(l.id),
                r = o()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return F.default.getUser(t);
                    })
                    .filter(U.lm)
                    .orderBy([el], ['desc'])
                    .value();
            r.filter((e) => !p.includes(e.id)).forEach((e) => t.push(e)),
                D ? V.has(i) || (c = null) : ((c = a), (D = !0)),
                V.add(i),
                L.add(n),
                B.push({
                    channel: l,
                    guild: a,
                    members: r,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: B,
        isSpotifyActivity: y,
        priorityMembers: N.map((e) => ({
            user: e,
            status: k.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: v,
        guildContext: c,
        currentActivities: ((s = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        o()(m).orderBy([s, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: w
    };
}
function ea(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, m.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function er(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, m.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function eo(e) {
    return !!(0, m.sb)('now-playing-view-store') && e.partiedMembers.some((e) => D.Z.isBlocked(e.id));
}
function es() {
    return V && I.Z.isConnected();
}
let ec = o().throttle(() => {
    !(function () {
        var e;
        if (!es()) return;
        z.clear();
        let t = (function (e) {
                let t = X(),
                    n = ei.bind(null, t);
                return o()(e).mapValues(n);
            })(
                ((e = Array.from(X()).reduce((e, t) => {
                    let n = F.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                o()(e).groupBy((e) => {
                    var t;
                    let n = en(e.id),
                        l = J(e.id);
                    return null != n ? ''.concat('channel-', '-').concat(n) : (null == l ? void 0 : null === (t = l.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(l.party.id) : ''.concat('user-', '-').concat(e.id);
                }))
            )
                .values()
                .orderBy([ea, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: l, analyticsEligible: i } = (0, m.p7)('now-playing-view-store');
        i &&
            t.forEach((e) => {
                let t = (0, s.EQ)({
                    party: e,
                    blockeeExperimentEnabled: n,
                    blockerExperimentEnabled: l
                })
                    .returnType()
                    .with(
                        {
                            blockerExperimentEnabled: !0,
                            party: s.P.when(eo)
                        },
                        () => m.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: s.P.when(er)
                        },
                        () => m.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: s.P.when(ea)
                        },
                        () => m.h9.DERANK
                    )
                    .otherwise(() => m.h9.SHOW);
                e.voiceChannels.forEach((e) => {
                    let { voiceStates: n, channel: l } = e,
                        i = o().map(n, 'userId'),
                        a = o().map(n, 'discoverable'),
                        r = o().map(n, (e) => D.Z.getRelationshipType(e.userId));
                    B.default.track(L.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                        activity_user_ids: i,
                        discoverable: a,
                        relationship_types: r,
                        voice_channel_id: l.id,
                        treatment: t,
                        surface: 'now-playing'
                    });
                });
            }),
            (H = (W = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, m.p7)('now-playing-view-store'),
                    l = n && eo(e),
                    i = t && er(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !l && !i;
            })).map((e) => ({
                type: L.GOo.USER,
                party: e
            }))),
            (function () {
                if (z.size > 0) {
                    let e = Array.from(z);
                    v.ZP.fetchApplications(e), e.forEach((e) => Y.add(e)), z.clear();
                }
            })(),
            (G = !0);
    })(),
        eh.emitChange();
}, 1000);
function eu() {
    return !!es() && (ec(), !1);
}
class ed extends (l = c.ZP.Store) {
    initialize() {
        this.syncWith([F.default, x.Z, k.Z, A.Z, M.Z, _.Z, D.Z, w.Z, y.Z], eu), this.waitFor(I.Z, j.Z, x.Z, F.default, y.Z);
    }
    get currentActivityParties() {
        return W;
    }
    get nowPlayingCards() {
        return H;
    }
    get isMounted() {
        return V;
    }
    get loaded() {
        return G;
    }
}
(a = 'NowPlayingViewStore'),
    (i = 'displayName') in ed
        ? Object.defineProperty(ed, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (ed[i] = a);
let eh = new ed(u.Z, {
        LOGOUT: function () {
            (V = !1), (W = []), (H = []), z.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (V = !0), ec();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            V = !1;
        }
    }),
    ef = eh;

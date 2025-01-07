n(47120), n(653041), n(724458), n(627341);
var i,
    l,
    r,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(278074),
    u = n(442837),
    d = n(570140),
    h = n(782769),
    p = n(527805),
    f = n(841784),
    m = n(503438),
    g = n(802856),
    v = n(420660),
    C = n(728345),
    x = n(812206),
    I = n(750881),
    _ = n(710845),
    Z = n(38618),
    b = n(656063),
    S = n(761282),
    N = n(814443),
    E = n(789407),
    y = n(630186),
    j = n(250889),
    T = n(199902),
    P = n(592125),
    A = n(480294),
    w = n(831506),
    M = n(731290),
    L = n(430824),
    R = n(496675),
    D = n(158776),
    G = n(699516),
    B = n(594174),
    k = n(979651),
    U = n(626135),
    O = n(823379),
    V = n(981631);
let H = !1,
    F = !1,
    W = [],
    z = [],
    q = {},
    Y = {},
    Q = new Set(),
    J = new Set();
function K() {
    let e = G.Z.getFriendIDs();
    return A.Z.hasConsented(V.pjP.PERSONALIZATION) ? new Set([...N.Z.getUserAffinitiesUserIds(), ...e]) : new Set(e);
}
function X(e) {
    return D.Z.findActivity(e, (e) => e.type !== V.IIU.CUSTOM_STATUS);
}
function $(e) {
    return (
        null == q[e] &&
            (q = {
                ...q,
                [e]: new j.Z({ name: e })
            }),
        q[e]
    );
}
function ee(e) {
    return (
        null == Y[e] &&
            (Y = {
                ...Y,
                [e]: new y.Z({ url: e })
            }),
        Y[e]
    );
}
function et(e) {
    !J.has(e) && Q.add(e);
}
function en(e) {
    if ((0, m.Z)(e)) return E.r9;
    let t = null != e.application_id ? x.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, g.Z)(e) ? $(e.name) : (0, v.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t);
}
function ei(e) {
    let t = k.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && R.Z.canWithPartialContext(V.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return G.Z.isFriend(e.id);
}
function er(e, t, n) {
    var i, l, r, a, o, c;
    let u;
    let d = B.default.getCurrentUser(),
        m = null !== (i = null == d ? void 0 : d.nsfwAllowed) && void 0 !== i && i,
        g = t.map((e) => e.id),
        v = t.filter((t) => e.has(t.id)),
        C = !1,
        I = [],
        Z = new Set(),
        N = !1,
        A = [];
    for (let e of t) {
        let n = T.Z.getAnyStreamForUser(e.id),
            i = P.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == i ? void 0 : i.isNSFW()) && (!m || !M.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
        let o = X(e.id);
        if (
            (null != n &&
                A.push({
                    stream: n,
                    streamUser: e,
                    activity: o
                }),
            null == o)
        )
            continue;
        let c = (0, b.Z)(o);
        if (null == c) continue;
        N = c === E.XB;
        let u = (function (e) {
                let t = x.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new _.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === E.XB ? E.r9 : e.startsWith(j.H) ? $(e.slice(j.H.length)) : e.startsWith(y._) ? ee(e.slice(y._.length)) : (et(e), null);
            })(c),
            g = null === (l = o.timestamps) || void 0 === l ? void 0 : l.start;
        if ((0, f.Z)(o)) {
            let t = (0, h.a)();
            if (
                (0, p.ZP)({
                    activity: o,
                    userId: e.id,
                    application: u,
                    channelId: null === (r = k.Z.getVoiceStateForUser(e.id)) || void 0 === r ? void 0 : r.channelId,
                    currentUser: d,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: P.Z,
                    VoiceStateStore: k.Z,
                    PermissionStore: R.Z,
                    GuildStore: L.Z
                }) !== p.Fw.CAN_JOIN
            )
                continue;
        } else if (null == g) continue;
        if (!S.JE(o) || null == u || Z.has(u.id)) continue;
        let v = null != o ? en(o) : null;
        (null == v || v.id !== u.id) && (o = null);
        let D = [];
        (D =
            null != o && null != o.party && null != o.party.id
                ? Array.from(null !== (a = w.Z.getParty(o.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
                      let n = B.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? en(t) : null;
                      return null != n && n.id === u.id;
                  })),
            (D = s().orderBy(D, [el], ['desc'])).length !== t.length && (C = !0),
            Z.add(u.id),
            I.push({
                game: u,
                activity: o,
                activityUser: e,
                startedPlayingTime: g,
                playingMembers: D
            });
    }
    let G = 1 === v.length,
        U = [],
        V = new Set(),
        H = new Set();
    for (let e of t) {
        let n = ei(e.id),
            i = P.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = L.Z.getGuild(l);
        if ((H.has(l) && V.has(n)) || null == i || null == r || i.id === r.afkChannelId) null == i && ((u = null), (G = !0));
        else {
            let e = k.Z.getVoiceStatesForChannel(i.id),
                a = s()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return B.default.getUser(t);
                    })
                    .filter(O.lm)
                    .orderBy([el], ['desc'])
                    .value();
            a.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
                G ? !H.has(l) && (u = null) : ((u = r), (G = !0)),
                H.add(l),
                V.add(n),
                U.push({
                    channel: i,
                    guild: r,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: U,
        isSpotifyActivity: N,
        priorityMembers: v.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: C,
        guildContext: u,
        currentActivities: ((o = I),
        (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        s()(o).orderBy([c, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: A
    };
}
function ea(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, I.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function eo(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, I.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function es(e) {
    return !!(0, I.sb)('now-playing-view-store') && e.partiedMembers.some((e) => G.Z.isBlocked(e.id));
}
function ec() {
    return H && Z.Z.isConnected();
}
let eu = s().throttle(() => {
    !(function () {
        var e;
        if (!ec()) return;
        Q.clear();
        let t = (function (e) {
                let t = K(),
                    n = er.bind(null, t);
                return s()(e).mapValues(n);
            })(
                ((e = Array.from(K()).reduce((e, t) => {
                    let n = B.default.getUser(t);
                    return null != n && !n.bot && e.push(n), e;
                }, [])),
                s()(e).groupBy((e) => {
                    var t;
                    let n = ei(e.id),
                        i = X(e.id);
                    return null != n ? ''.concat('channel-', '-').concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(i.party.id) : ''.concat('user-', '-').concat(e.id);
                }))
            )
                .values()
                .orderBy([ea, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: i, analyticsEligible: l } = (0, I.p7)('now-playing-view-store');
        l &&
            t.forEach((e) => {
                let t = (0, c.EQ)({
                    party: e,
                    blockeeExperimentEnabled: n,
                    blockerExperimentEnabled: i
                })
                    .returnType()
                    .with(
                        {
                            blockerExperimentEnabled: !0,
                            party: c.P.when(es)
                        },
                        () => I.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: c.P.when(eo)
                        },
                        () => I.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: c.P.when(ea)
                        },
                        () => I.h9.DERANK
                    )
                    .otherwise(() => I.h9.SHOW);
                e.voiceChannels.forEach((e) => {
                    let { voiceStates: n, channel: i } = e,
                        l = s().map(n, 'userId'),
                        r = s().map(n, 'discoverable'),
                        a = s().map(n, (e) => G.Z.getRelationshipType(e.userId));
                    U.default.track(V.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                        activity_user_ids: l,
                        discoverable: r,
                        relationship_types: a,
                        voice_channel_id: i.id,
                        treatment: t,
                        surface: 'now-playing'
                    });
                });
            }),
            (z = (W = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, I.p7)('now-playing-view-store'),
                    i = n && es(e),
                    l = t && eo(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !i && !l;
            })).map((e) => ({
                type: V.GOo.USER,
                party: e
            }))),
            !(function () {
                if (Q.size > 0) {
                    let e = Array.from(Q);
                    C.ZP.fetchApplications(e), e.forEach((e) => J.add(e)), Q.clear();
                }
            })(),
            (F = !0);
    })(),
        ep.emitChange();
}, 1000);
function ed() {
    return !!ec() && (eu(), !1);
}
class eh extends (i = u.ZP.Store) {
    initialize() {
        this.syncWith([B.default, x.Z, D.Z, w.Z, k.Z, T.Z, G.Z, A.Z, N.Z], ed), this.waitFor(Z.Z, L.Z, x.Z, B.default, N.Z);
    }
    get currentActivityParties() {
        return W;
    }
    get nowPlayingCards() {
        return z;
    }
    get isMounted() {
        return H;
    }
    get loaded() {
        return F;
    }
}
(a = 'NowPlayingViewStore'),
    (r = 'displayName') in (l = eh)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a);
let ep = new eh(d.Z, {
    LOGOUT: function () {
        (H = !1), (W = []), (z = []), Q.clear();
    },
    NOW_PLAYING_MOUNTED: function () {
        (H = !0), eu();
    },
    NOW_PLAYING_UNMOUNTED: function () {
        H = !1;
    }
});
t.Z = ep;

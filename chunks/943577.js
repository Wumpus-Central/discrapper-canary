(n.d(t, { A: () => ed }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(170148),
    o = n(550151),
    d = n(55730),
    c = n(765379),
    u = n(90644),
    _ = n(61330),
    E = n(960076),
    A = n(323073),
    h = n(627363),
    f = n(587895),
    I = n(626584),
    p = n(276602),
    T = n(294857),
    m = n(475706),
    g = n(427358),
    S = n(57985),
    N = n(907459),
    C = n(666176),
    O = n(823441),
    R = n(47407),
    L = n(616356),
    y = n(734057),
    D = n(153488),
    v = n(629016),
    b = n(71393),
    M = n(576705),
    P = n(290863),
    U = n(994500),
    w = n(287809),
    G = n(977997),
    x = n(403362),
    k = n(652215),
    F = n(818023);
let B = !1,
    V = !1,
    H = [],
    j = [],
    W = new Map(),
    Y = {},
    K = new Set(),
    $ = new Set();
function z() {
    let e = U.A.getFriendIDs();
    return new Set(
        D.A.hasConsented(k.YAq.PERSONALIZATION)
            ? [
                  ...g.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function X(e) {
    return P.A.findActivity(e, (e) => e.type !== k.$pd.CUSTOM_STATUS);
}
function q(e) {
    let t = W.get(e);
    return (null == t && ((t = new R.A({ name: e })), W.set(e, t)), t);
}
function Z(e) {
    return (null == Y[e] && (Y = { ...Y, [e]: new O.A({ url: e }) }), Y[e]);
}
function Q(e) {
    $.has(e) || K.add(e);
}
function J(e) {
    if ((0, u.A)(e)) return C.HT;
    if (null != e.application_id && e.application_id !== F.$W) {
        let t = f.A.getApplication(e.application_id);
        if (null != t) return t;
        Q(e.application_id);
    }
    return (0, E.A)(e) && null != e.url ? Z(e.url) : (0, _.A)(e) ? q(e.name) : null;
}
function ee(e) {
    let t = G.A.getVoiceStateForUser(e);
    return t?.channelId != null && M.A.canWithPartialContext(k.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function et(e) {
    return U.A.isFriend(e.id);
}
function en(e, t, n) {
    var i;
    let a,
        s = w.default.getCurrentUser(),
        u = g.A.getUserAffinitiesMap(),
        _ = (0, N.L)(t, u, "NowPlayingViewStore - partiedMembers"),
        E = _.map((e) => e.id),
        h = _.filter((t) => e.has(t.id)),
        p = !1,
        D = [],
        U = new Set(),
        F = !1,
        B = [];
    for (let e of _) {
        let t = L.A.getAnyStreamForUser(e.id),
            n = y.A.getChannel(t?.channelId);
        if ((0, A.qR)(n)) continue;
        let i = X(e.id);
        if ((null != t && B.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let a = (0, T.A)(i);
        if (null == a) continue;
        F = a === C.WY;
        let u = (function (e) {
            if ("string" != typeof e)
                return (
                    new I.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null
                );
            if (e === C.WY) return C.HT;
            if (e.startsWith(R.W)) return q(e.slice(R.W.length));
            if (e.startsWith(O.K)) return Z(e.slice(O.K.length));
            let t = f.A.getApplication(e);
            return null != t ? t : (Q(e), null);
        })(a);
        if ((0, c.A)(i) && !(0, d.A)(i, k.jUm.CONTEXTLESS)) {
            let t = (0, l.A)(),
                n = G.A.getVoiceStateForUser(e.id)?.channelId,
                r = y.A.getChannel(n);
            if (
                (0, o.Ay)({
                    activity: i,
                    userId: e.id,
                    application: u,
                    channelId: n,
                    isContentGated: (0, A.qR)(r),
                    currentUser: s,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: y.A,
                    VoiceStateStore: G.A,
                    PermissionStore: M.A,
                    GuildStore: b.A,
                }) !== o.Gy.CAN_JOIN
            )
                continue;
        }
        if (!m.IS(i) || null == u || U.has(u.id)) continue;
        let E = null != i ? J(i) : null;
        (null == E || E.id !== u.id) && (i = null);
        let h = [];
        ((h =
            null != i && null != i.party && null != i.party.id
                ? Array.from(v.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = w.default.getUser(t);
                      return (null != n && e.push(n), e);
                  }, [])
                : _.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? J(t) : null;
                      return null != n && n.id === u.id;
                  })),
            (h = r().orderBy(h, [et], ["desc"])).length !== _.length && (p = !0),
            U.add(u.id),
            D.push({
                application: u,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: h,
            }));
    }
    let V = 1 === h.length,
        H = [],
        j = new Set(),
        W = new Set();
    for (let e of _) {
        let t = ee(e.id),
            n = y.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            s = b.A.getGuild(i);
        if ((W.has(i) && j.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((a = null), (V = !0));
        else {
            let e = G.A.getVoiceStatesForChannel(n.id),
                l = (0, S.Y1)("NowPlayingViewStore - voiceMembers"),
                o = et;
            null != l &&
                (o = (e) => {
                    let t = g.A.getUserAffinity(e.id);
                    return "vc_probability" === l ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let d = r()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return w.default.getUser(t);
                })
                .filter(x.Vq)
                .orderBy([o], ["desc"])
                .value();
            (d.filter((e) => !E.includes(e.id)).forEach((e) => _.push(e)),
                V ? W.has(i) || (a = null) : ((a = s), (V = !0)),
                W.add(i),
                j.add(t),
                H.push({ channel: n, guild: s, members: d, voiceStates: e }));
        }
    }
    return {
        id: n,
        voiceChannels: H,
        isSpotifyActivity: F,
        priorityMembers: h.map((e) => ({ user: e, status: P.A.getStatus(e.id) })),
        partiedMembers: _,
        showPlayingMembers: p,
        guildContext: a,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        r()(D).orderBy(
            [
                i,
                function (e) {
                    return e.application.name;
                },
            ],
            ["desc", "asc"],
        )).value(),
        applicationStreams: B,
    };
}
function ei(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function er() {
    return B && p.A.isConnected();
}
let ea = r().throttle(() => {
    (!(function () {
        var e, t;
        let n, i;
        if (er()) {
            if (
                (K.clear(),
                (j = (H = ((e = Array.from(z()).reduce((e, t) => {
                    let n = w.default.getUser(t);
                    return (null == n || n.bot || e.push(n), e);
                }, [])),
                (t = r()(e).groupBy((e) => {
                    let t = ee(e.id),
                        n = X(e.id);
                    return null != t ? `channel-${t}` : n?.party?.id != null ? `party-${n.party.id}` : `user-${e.id}`;
                })),
                (n = z()),
                (i = en.bind(null, n)),
                r()(t).mapValues(i))
                    .values()
                    .orderBy(
                        [
                            ei,
                            function (e) {
                                return e.partiedMembers.length > 1;
                            },
                            function (e) {
                                return e.applicationStreams.length > 0;
                            },
                            function (e) {
                                return e.voiceChannels.length > 0;
                            },
                            function (e) {
                                return e.currentActivities.length > 0;
                            },
                            function (e) {
                                return e.isSpotifyActivity;
                            },
                            function (e) {
                                return e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(" ");
                            },
                        ],
                        ["asc", "desc", "desc", "desc", "desc", "asc", "asc"],
                    )
                    .value()
                    .filter((e) => {
                        let t = e.partiedMembers.some((e) => U.A.isBlockedOrIgnored(e.id)),
                            n =
                                0 !== e.voiceChannels.length &&
                                e.voiceChannels.length > 0 &&
                                e.voiceChannels.every((e) => {
                                    let { voiceStates: t } = e;
                                    return Object.values(t).every((e) => !1 === e.discoverable);
                                });
                        return (
                            (e.voiceChannels.length >= 1 ||
                                e.currentActivities.length > 0 ||
                                e.applicationStreams.length > 0) &&
                            !t &&
                            !n
                        );
                    })).map((e) => ({ type: k.ZzC.USER, party: e }))),
                K.size > 0)
            ) {
                let e = Array.from(K);
                (h.Ay.fetchApplications(e).catch(k.tEg), e.forEach((e) => $.add(e)), K.clear());
            }
            V = !0;
        }
    })(),
        eo.emitChange());
}, 1e3);
function es() {
    return !!er() && (ea(), !1);
}
class el extends a.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        (this.syncWith([w.default, f.A, P.A, v.A, G.A, L.A, U.A, D.A, g.A], es),
            this.waitFor(f.A, L.A, y.A, D.A, v.A, p.A, b.A, M.A, P.A, U.A, g.A, w.default, G.A));
    }
    get currentActivityParties() {
        return H;
    }
    get nowPlayingCards() {
        return j;
    }
    get isMounted() {
        return B;
    }
    get loaded() {
        return V;
    }
}
let eo = new el(s.h, {
        LOGOUT: function () {
            ((B = !1), (H = []), (j = []), K.clear(), $.clear(), W.clear());
        },
        NOW_PLAYING_MOUNTED: function () {
            ((B = !0), ea());
        },
        NOW_PLAYING_UNMOUNTED: function () {
            B = !1;
        },
    }),
    ed = eo;

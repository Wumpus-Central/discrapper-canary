(n.d(t, { A: () => ed }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(170148),
    o = n(550151),
    d = n(765379),
    c = n(90644),
    u = n(61330),
    _ = n(960076),
    E = n(323073),
    A = n(627363),
    h = n(587895),
    I = n(626584),
    f = n(595528),
    p = n(294857),
    T = n(475706),
    m = n(427358),
    g = n(57985),
    S = n(907459),
    N = n(796306),
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
                  ...m.A.getUserAffinities()
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
function Z(e) {
    let t = W.get(e);
    return (null == t && ((t = new R.A({ name: e })), W.set(e, t)), t);
}
function q(e) {
    return (null == Y[e] && (Y = { ...Y, [e]: new O.A({ url: e }) }), Y[e]);
}
function Q(e) {
    $.has(e) || K.add(e);
}
function J(e) {
    if ((0, c.A)(e)) return C.HT;
    if (null != e.application_id && e.application_id !== F.$W) {
        let t = h.A.getApplication(e.application_id);
        if (null != t) return t;
        Q(e.application_id);
    }
    return (0, _.A)(e) && null != e.url ? q(e.url) : (0, u.A)(e) ? Z(e.name) : null;
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
        c = m.A.getUserAffinitiesMap(),
        u = (0, S.L)(t, c, "NowPlayingViewStore - partiedMembers"),
        _ = u.map((e) => e.id),
        A = u.filter((t) => e.has(t.id)),
        f = !1,
        D = [],
        U = new Set(),
        k = !1,
        F = [];
    for (let e of u) {
        let t = L.A.getAnyStreamForUser(e.id),
            n = y.A.getChannel(t?.channelId);
        if ((0, E.qR)(n)) continue;
        let i = X(e.id);
        if ((null != t && F.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let a = (0, p.A)(i);
        if (null == a) continue;
        k = a === C.WY;
        let c = (function (e) {
                if ("string" != typeof e)
                    return (
                        new I.A("NowPlayingViewStore").error(
                            `Unknown type for applicationId: ${typeof e}, value: ${e}`,
                            { tags: { source: "ACTIVITIES" } },
                        ),
                        null
                    );
                if (e === C.WY) return C.HT;
                if (e.startsWith(R.W)) return Z(e.slice(R.W.length));
                if (e.startsWith(O.K)) return q(e.slice(O.K.length));
                let t = h.A.getApplication(e);
                return null != t ? t : (Q(e), null);
            })(a),
            _ = (0, N.GH)(i);
        if (null != _) {
            if (null == (0, N.j1)(_, e.id)) continue;
        } else if ((0, d.A)(i)) {
            let t = (0, l.A)();
            if (
                (0, o.Ay)({
                    activity: i,
                    userId: e.id,
                    application: c,
                    channelId: G.A.getVoiceStateForUser(e.id)?.channelId,
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
        if (!T.IS(i) || null == c || U.has(c.id)) continue;
        let A = null != i ? J(i) : null;
        (null == A || A.id !== c.id) && (i = null);
        let m = [];
        ((m =
            null != i && null != i.party && null != i.party.id
                ? Array.from(v.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = w.default.getUser(t);
                      return (null != n && e.push(n), e);
                  }, [])
                : u.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? J(t) : null;
                      return null != n && n.id === c.id;
                  })),
            (m = r().orderBy(m, [et], ["desc"])).length !== u.length && (f = !0),
            U.add(c.id),
            D.push({
                application: c,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: m,
            }));
    }
    let B = 1 === A.length,
        V = [],
        H = new Set(),
        j = new Set();
    for (let e of u) {
        let t = ee(e.id),
            n = y.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            s = b.A.getGuild(i);
        if ((j.has(i) && H.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((a = null), (B = !0));
        else {
            let e = G.A.getVoiceStatesForChannel(n.id),
                l = (0, g.Y1)("NowPlayingViewStore - voiceMembers"),
                o = et;
            null != l &&
                (o = (e) => {
                    let t = m.A.getUserAffinity(e.id);
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
            (d.filter((e) => !_.includes(e.id)).forEach((e) => u.push(e)),
                B ? j.has(i) || (a = null) : ((a = s), (B = !0)),
                j.add(i),
                H.add(t),
                V.push({ channel: n, guild: s, members: d, voiceStates: e }));
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: k,
        priorityMembers: A.map((e) => ({ user: e, status: P.A.getStatus(e.id) })),
        partiedMembers: u,
        showPlayingMembers: f,
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
        applicationStreams: F,
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
    return B && f.A.isConnected();
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
                (A.Ay.fetchApplications(e), e.forEach((e) => $.add(e)), K.clear());
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
        (this.syncWith([w.default, h.A, P.A, v.A, G.A, L.A, U.A, D.A, m.A], es),
            this.waitFor(h.A, L.A, y.A, D.A, v.A, f.A, b.A, M.A, P.A, U.A, m.A, w.default, G.A));
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

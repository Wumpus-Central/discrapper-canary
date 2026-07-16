"use strict";
n.d(t, { A: () => eo }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
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
    f = n(617710),
    p = n(294857),
    T = n(475706),
    m = n(427358),
    g = n(57985),
    S = n(907459),
    N = n(666176),
    C = n(823441),
    R = n(47407),
    O = n(616356),
    L = n(734057),
    y = n(153488),
    D = n(629016),
    v = n(71393),
    b = n(576705),
    M = n(290863),
    P = n(994500),
    U = n(287809),
    w = n(977997),
    G = n(403362),
    x = n(652215),
    k = n(360469);
let F = !1,
    V = !1,
    B = [],
    H = [],
    j = new Map(),
    W = {},
    Y = new Set(),
    K = new Set();
function $() {
    let e = P.A.getFriendIDs();
    return new Set(
        y.A.hasConsented(x.YAq.PERSONALIZATION)
            ? [
                  ...m.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function z(e) {
    return M.A.findActivity(e, (e) => e.type !== x.$pd.CUSTOM_STATUS);
}
function q(e) {
    let t = j.get(e);
    return null == t && ((t = new R.A({ name: e })), j.set(e, t)), t;
}
function Z(e) {
    return null == W[e] && (W = { ...W, [e]: new C.A({ url: e }) }), W[e];
}
function X(e) {
    K.has(e) || Y.add(e);
}
function Q(e) {
    if ((0, c.A)(e)) return N.HT;
    if (null != e.application_id && e.application_id !== k.$W) {
        let t = h.A.getApplication(e.application_id);
        if (null != t) return t;
        X(e.application_id);
    }
    return (0, _.A)(e) && null != e.url ? Z(e.url) : (0, u.A)(e) ? q(e.name) : null;
}
function J(e) {
    let t = w.A.getVoiceStateForUser(e);
    return t?.channelId != null && b.A.canWithPartialContext(x.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function ee(e) {
    return P.A.isFriend(e.id);
}
function et(e, t, n) {
    var i;
    let a,
        s = U.default.getCurrentUser(),
        c = m.A.getUserAffinitiesMap(),
        u = (0, S.L)(t, c, "NowPlayingViewStore - partiedMembers"),
        _ = u.map((e) => e.id),
        A = u.filter((t) => e.has(t.id)),
        f = !1,
        y = [],
        P = new Set(),
        x = !1,
        k = [];
    for (let e of u) {
        let t = O.A.getAnyStreamForUser(e.id),
            n = L.A.getChannel(t?.channelId);
        if ((0, E.qR)(n)) continue;
        let i = z(e.id);
        if ((null != t && k.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let a = (0, p.A)(i);
        if (null == a) continue;
        x = a === N.WY;
        let c = (function (e) {
            if ("string" != typeof e)
                return (
                    new I.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null
                );
            if (e === N.WY) return N.HT;
            if (e.startsWith(R.W)) return q(e.slice(R.W.length));
            if (e.startsWith(C.K)) return Z(e.slice(C.K.length));
            let t = h.A.getApplication(e);
            return null != t ? t : (X(e), null);
        })(a);
        if ((0, d.A)(i)) {
            let t = (0, l.A)();
            if (
                (0, o.Ay)({
                    activity: i,
                    userId: e.id,
                    application: c,
                    channelId: w.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: s,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: L.A,
                    VoiceStateStore: w.A,
                    PermissionStore: b.A,
                    GuildStore: v.A,
                }) !== o.Gy.CAN_JOIN
            )
                continue;
        }
        if (!T.IS(i) || null == c || P.has(c.id)) continue;
        let _ = null != i ? Q(i) : null;
        (null == _ || _.id !== c.id) && (i = null);
        let A = [];
        (A =
            null != i && null != i.party && null != i.party.id
                ? Array.from(D.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = U.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : u.filter((e) => {
                      let t = z(e.id),
                          n = null != t ? Q(t) : null;
                      return null != n && n.id === c.id;
                  })),
            (A = r().orderBy(A, [ee], ["desc"])).length !== u.length && (f = !0),
            P.add(c.id),
            y.push({
                application: c,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: A,
            });
    }
    let F = 1 === A.length,
        V = [],
        B = new Set(),
        H = new Set();
    for (let e of u) {
        let t = J(e.id),
            n = L.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            s = v.A.getGuild(i);
        if ((H.has(i) && B.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((a = null), (F = !0));
        else {
            let e = w.A.getVoiceStatesForChannel(n.id),
                l = (0, g.Y1)("NowPlayingViewStore - voiceMembers"),
                o = ee;
            null != l &&
                (o = (e) => {
                    let t = m.A.getUserAffinity(e.id);
                    return "vc_probability" === l ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let d = r()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return U.default.getUser(t);
                })
                .filter(G.Vq)
                .orderBy([o], ["desc"])
                .value();
            d.filter((e) => !_.includes(e.id)).forEach((e) => u.push(e)),
                F ? H.has(i) || (a = null) : ((a = s), (F = !0)),
                H.add(i),
                B.add(t),
                V.push({ channel: n, guild: s, members: d, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: x,
        priorityMembers: A.map((e) => ({ user: e, status: M.A.getStatus(e.id) })),
        partiedMembers: u,
        showPlayingMembers: f,
        guildContext: a,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        r()(y).orderBy(
            [
                i,
                function (e) {
                    return e.application.name;
                },
            ],
            ["desc", "asc"],
        )).value(),
        applicationStreams: k,
    };
}
function en(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ei() {
    return F && f.A.isConnected();
}
let er = r().throttle(() => {
    !(function () {
        var e, t;
        let n, i;
        if (ei()) {
            if (
                (Y.clear(),
                (H = (B = ((e = Array.from($()).reduce((e, t) => {
                    let n = U.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                (t = r()(e).groupBy((e) => {
                    let t = J(e.id),
                        n = z(e.id);
                    return null != t ? `channel-${t}` : n?.party?.id != null ? `party-${n.party.id}` : `user-${e.id}`;
                })),
                (n = $()),
                (i = et.bind(null, n)),
                r()(t).mapValues(i))
                    .values()
                    .orderBy(
                        [
                            en,
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
                        let t = e.partiedMembers.some((e) => P.A.isBlockedOrIgnored(e.id)),
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
                    })).map((e) => ({ type: x.ZzC.USER, party: e }))),
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                A.Ay.fetchApplications(e), e.forEach((e) => K.add(e)), Y.clear();
            }
            V = !0;
        }
    })(),
        el.emitChange();
}, 1e3);
function ea() {
    return !!ei() && (er(), !1);
}
class es extends a.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([U.default, h.A, M.A, D.A, w.A, O.A, P.A, y.A, m.A], ea),
            this.waitFor(h.A, O.A, L.A, y.A, D.A, f.A, v.A, b.A, M.A, P.A, m.A, U.default, w.A);
    }
    get currentActivityParties() {
        return B;
    }
    get nowPlayingCards() {
        return H;
    }
    get isMounted() {
        return F;
    }
    get loaded() {
        return V;
    }
}
let el = new es(s.h, {
        LOGOUT: function () {
            (F = !1), (B = []), (H = []), Y.clear(), K.clear(), j.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (F = !0), er();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            F = !1;
        },
    }),
    eo = el;

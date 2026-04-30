"use strict";
n.d(t, { A: () => eo }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(170148),
    l = n(550151),
    u = n(765379),
    c = n(90644),
    d = n(61330),
    _ = n(960076),
    f = n(323073),
    h = n(627363),
    p = n(587895),
    E = n(626584),
    m = n(587626),
    g = n(294857),
    A = n(475706),
    I = n(427358),
    T = n(57985),
    S = n(907459),
    N = n(666176),
    y = n(823441),
    C = n(47407),
    v = n(616356),
    O = n(734057),
    R = n(153488),
    b = n(629016),
    D = n(71393),
    L = n(576705),
    w = n(290863),
    M = n(994500),
    P = n(287809),
    x = n(977997),
    U = n(403362),
    k = n(652215);
let G = !1,
    F = !1,
    V = [],
    B = [],
    H = {},
    j = {},
    Y = new Set(),
    W = new Set();
function K() {
    let e = M.A.getFriendIDs();
    return new Set(
        R.A.hasConsented(k.YAq.PERSONALIZATION)
            ? [
                  ...I.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function z(e) {
    return w.A.findActivity(e, (e) => e.type !== k.$pd.CUSTOM_STATUS);
}
function $(e) {
    return null == H[e] && (H = { ...H, [e]: new C.A({ name: e }) }), H[e];
}
function q(e) {
    return null == j[e] && (j = { ...j, [e]: new y.A({ url: e }) }), j[e];
}
function Z(e) {
    W.has(e) || Y.add(e);
}
function X(e) {
    if ((0, c.A)(e)) return N.HT;
    if ((0, d.A)(e)) return $(e.name);
    let t = null != e.application_id ? p.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, _.A)(e) && null != e.url
          ? q(e.url)
          : (null != e.application_id && Z(e.application_id), t);
}
function Q(e) {
    let t = x.A.getVoiceStateForUser(e);
    return t?.channelId != null && L.A.canWithPartialContext(k.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function J(e) {
    return M.A.isFriend(e.id);
}
function ee(e, t, n) {
    var i;
    let s,
        a = P.default.getCurrentUser(),
        c = I.A.getUserAffinitiesMap(),
        d = (0, S.L)(t, c, "NowPlayingViewStore - partiedMembers"),
        _ = d.map((e) => e.id),
        h = d.filter((t) => e.has(t.id)),
        m = !1,
        R = [],
        M = new Set(),
        k = !1,
        G = [];
    for (let e of d) {
        let t = v.A.getAnyStreamForUser(e.id),
            n = O.A.getChannel(t?.channelId);
        if ((0, f.qR)(n)) continue;
        let i = z(e.id);
        if ((null != t && G.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let s = (0, g.A)(i);
        if (null == s) continue;
        k = s === N.WY;
        let c = (function (e) {
            let t = p.A.getApplication(e);
            return null != t
                ? t
                : "string" != typeof e
                  ? (new E.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null)
                  : e === N.WY
                    ? N.HT
                    : e.startsWith(C.W)
                      ? $(e.slice(C.W.length))
                      : e.startsWith(y.K)
                        ? q(e.slice(y.K.length))
                        : (Z(e), null);
        })(s);
        if ((0, u.A)(i)) {
            let t = (0, o.A)();
            if (
                (0, l.Ay)({
                    activity: i,
                    userId: e.id,
                    application: c,
                    channelId: x.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: a,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: O.A,
                    VoiceStateStore: x.A,
                    PermissionStore: L.A,
                    GuildStore: D.A,
                }) !== l.Gy.CAN_JOIN
            )
                continue;
        }
        if (!A.IS(i) || null == c || M.has(c.id)) continue;
        let _ = null != i ? X(i) : null;
        (null == _ || _.id !== c.id) && (i = null);
        let h = [];
        (h =
            null != i && null != i.party && null != i.party.id
                ? Array.from(b.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = P.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : d.filter((e) => {
                      let t = z(e.id),
                          n = null != t ? X(t) : null;
                      return null != n && n.id === c.id;
                  })),
            (h = r().orderBy(h, [J], ["desc"])).length !== d.length && (m = !0),
            M.add(c.id),
            R.push({
                game: c,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: h,
            });
    }
    let F = 1 === h.length,
        V = [],
        B = new Set(),
        H = new Set();
    for (let e of d) {
        let t = Q(e.id),
            n = O.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            a = D.A.getGuild(i);
        if ((H.has(i) && B.has(t)) || null == n || null == a || n.id === a.afkChannelId)
            null == n && ((s = null), (F = !0));
        else {
            let e = x.A.getVoiceStatesForChannel(n.id),
                o = (0, T.Y1)("NowPlayingViewStore - voiceMembers"),
                l = J;
            null != o &&
                (l = (e) => {
                    let t = I.A.getUserAffinity(e.id);
                    return "vc_probability" === o ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let u = r()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return P.default.getUser(t);
                })
                .filter(U.Vq)
                .orderBy([l], ["desc"])
                .value();
            u.filter((e) => !_.includes(e.id)).forEach((e) => d.push(e)),
                F ? H.has(i) || (s = null) : ((s = a), (F = !0)),
                H.add(i),
                B.add(t),
                V.push({ channel: n, guild: a, members: u, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: k,
        priorityMembers: h.map((e) => ({ user: e, status: w.A.getStatus(e.id) })),
        partiedMembers: d,
        showPlayingMembers: m,
        guildContext: s,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        r()(R).orderBy([i, (e) => e.game.name], ["desc", "asc"])).value(),
        applicationStreams: G,
    };
}
function et(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function en() {
    return G && m.A.isConnected();
}
let ei = r().throttle(() => {
    !(function () {
        var e, t;
        let n, i;
        if (en()) {
            if (
                (Y.clear(),
                (B = (V = ((e = Array.from(K()).reduce((e, t) => {
                    let n = P.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                (t = r()(e).groupBy((e) => {
                    let t = Q(e.id),
                        n = z(e.id);
                    return null != t ? `channel-${t}` : n?.party?.id != null ? `party-${n.party.id}` : `user-${e.id}`;
                })),
                (n = K()),
                (i = ee.bind(null, n)),
                r()(t).mapValues(i))
                    .values()
                    .orderBy(
                        [
                            et,
                            (e) => e.partiedMembers.length > 1,
                            (e) => e.applicationStreams.length > 0,
                            (e) => e.voiceChannels.length > 0,
                            (e) => e.currentActivities.length > 0,
                            (e) => e.isSpotifyActivity,
                            (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(" "),
                        ],
                        ["asc", "desc", "desc", "desc", "desc", "asc", "asc"],
                    )
                    .value()
                    .filter((e) => {
                        let t = e.partiedMembers.some((e) => M.A.isBlockedOrIgnored(e.id)),
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
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                h.Ay.fetchApplications(e), e.forEach((e) => W.add(e)), Y.clear();
            }
            F = !0;
        }
    })(),
        ea.emitChange();
}, 1e3);
function er() {
    return !!en() && (ei(), !1);
}
class es extends s.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([P.default, p.A, w.A, b.A, x.A, v.A, M.A, R.A, I.A], er),
            this.waitFor(p.A, v.A, O.A, R.A, b.A, m.A, D.A, L.A, w.A, M.A, I.A, P.default, x.A);
    }
    get currentActivityParties() {
        return V;
    }
    get nowPlayingCards() {
        return B;
    }
    get isMounted() {
        return G;
    }
    get loaded() {
        return F;
    }
}
let ea = new es(a.h, {
        LOGOUT: function () {
            (G = !1), (V = []), (B = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (G = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            G = !1;
        },
    }),
    eo = ea;

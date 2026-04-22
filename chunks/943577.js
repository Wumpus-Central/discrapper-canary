"use strict";
n.d(t, { A: () => eo }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(170148),
    l = n(550151),
    u = n(765379),
    d = n(90644),
    c = n(61330),
    _ = n(960076),
    f = n(323073),
    E = n(627363),
    h = n(587895),
    p = n(626584),
    m = n(142120),
    g = n(294857),
    A = n(516085),
    I = n(21119),
    T = n(57985),
    S = n(907459),
    y = n(443795),
    N = n(823441),
    O = n(47407),
    R = n(616356),
    v = n(734057),
    C = n(153488),
    b = n(629016),
    D = n(71393),
    L = n(576705),
    w = n(290863),
    M = n(994500),
    P = n(287809),
    U = n(977997),
    k = n(403362),
    x = n(652215);
let G = !1,
    V = !1,
    F = [],
    B = [],
    H = {},
    Y = {},
    W = new Set(),
    j = new Set();
function K() {
    let e = M.A.getFriendIDs();
    return new Set(
        C.A.hasConsented(x.YAq.PERSONALIZATION)
            ? [
                  ...I.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function $(e) {
    return w.A.findActivity(e, (e) => e.type !== x.$pd.CUSTOM_STATUS);
}
function z(e) {
    return null == H[e] && (H = { ...H, [e]: new O.A({ name: e }) }), H[e];
}
function q(e) {
    return null == Y[e] && (Y = { ...Y, [e]: new N.A({ url: e }) }), Y[e];
}
function X(e) {
    j.has(e) || W.add(e);
}
function Q(e) {
    if ((0, d.A)(e)) return y.HT;
    if ((0, c.A)(e)) return z(e.name);
    let t = null != e.application_id ? h.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, _.A)(e) && null != e.url
          ? q(e.url)
          : (null != e.application_id && X(e.application_id), t);
}
function J(e) {
    let t = U.A.getVoiceStateForUser(e);
    return t?.channelId != null && L.A.canWithPartialContext(x.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function Z(e) {
    return M.A.isFriend(e.id);
}
function ee(e, t, n) {
    var r;
    let s,
        a = P.default.getCurrentUser(),
        d = I.A.getUserAffinitiesMap(),
        c = (0, S.L)(t, d, "NowPlayingViewStore - partiedMembers"),
        _ = c.map((e) => e.id),
        E = c.filter((t) => e.has(t.id)),
        m = !1,
        C = [],
        M = new Set(),
        x = !1,
        G = [];
    for (let e of c) {
        let t = R.A.getAnyStreamForUser(e.id),
            n = v.A.getChannel(t?.channelId);
        if ((0, f.qR)(n)) continue;
        let r = $(e.id);
        if ((null != t && G.push({ stream: t, streamUser: e, activity: r }), null == r)) continue;
        let s = (0, g.A)(r);
        if (null == s) continue;
        x = s === y.WY;
        let d = (function (e) {
            let t = h.A.getApplication(e);
            return null != t
                ? t
                : "string" != typeof e
                  ? (new p.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null)
                  : e === y.WY
                    ? y.HT
                    : e.startsWith(O.W)
                      ? z(e.slice(O.W.length))
                      : e.startsWith(N.K)
                        ? q(e.slice(N.K.length))
                        : (X(e), null);
        })(s);
        if ((0, u.A)(r)) {
            let t = (0, o.A)();
            if (
                (0, l.Ay)({
                    activity: r,
                    userId: e.id,
                    application: d,
                    channelId: U.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: a,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: v.A,
                    VoiceStateStore: U.A,
                    PermissionStore: L.A,
                    GuildStore: D.A,
                }) !== l.Gy.CAN_JOIN
            )
                continue;
        }
        if (!A.IS(r) || null == d || M.has(d.id)) continue;
        let _ = null != r ? Q(r) : null;
        (null == _ || _.id !== d.id) && (r = null);
        let E = [];
        (E =
            null != r && null != r.party && null != r.party.id
                ? Array.from(b.A.getParty(r.party.id) ?? []).reduce((e, t) => {
                      let n = P.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : c.filter((e) => {
                      let t = $(e.id),
                          n = null != t ? Q(t) : null;
                      return null != n && n.id === d.id;
                  })),
            (E = i().orderBy(E, [Z], ["desc"])).length !== c.length && (m = !0),
            M.add(d.id),
            C.push({
                game: d,
                activity: r,
                activityUser: e,
                startedPlayingTime: r?.timestamps?.start ?? r?.created_at,
                playingMembers: E,
            });
    }
    let V = 1 === E.length,
        F = [],
        B = new Set(),
        H = new Set();
    for (let e of c) {
        let t = J(e.id),
            n = v.A.getChannel(t),
            r = null != n ? n.getGuildId() : null,
            a = D.A.getGuild(r);
        if ((H.has(r) && B.has(t)) || null == n || null == a || n.id === a.afkChannelId)
            null == n && ((s = null), (V = !0));
        else {
            let e = U.A.getVoiceStatesForChannel(n.id),
                o = (0, T.Y1)("NowPlayingViewStore - voiceMembers"),
                l = Z;
            null != o &&
                (l = (e) => {
                    let t = I.A.getUserAffinity(e.id);
                    return "vc_probability" === o ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let u = i()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return P.default.getUser(t);
                })
                .filter(k.Vq)
                .orderBy([l], ["desc"])
                .value();
            u.filter((e) => !_.includes(e.id)).forEach((e) => c.push(e)),
                V ? H.has(r) || (s = null) : ((s = a), (V = !0)),
                H.add(r),
                B.add(t),
                F.push({ channel: n, guild: a, members: u, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: F,
        isSpotifyActivity: x,
        priorityMembers: E.map((e) => ({ user: e, status: w.A.getStatus(e.id) })),
        partiedMembers: c,
        showPlayingMembers: m,
        guildContext: s,
        currentActivities: ((r = (e) => e.startedPlayingTime ?? 0),
        i()(C).orderBy([r, (e) => e.game.name], ["desc", "asc"])).value(),
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
let er = i().throttle(() => {
    !(function () {
        var e, t;
        let n, r;
        if (en()) {
            if (
                (W.clear(),
                (B = (F = ((e = Array.from(K()).reduce((e, t) => {
                    let n = P.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                (t = i()(e).groupBy((e) => {
                    let t = J(e.id),
                        n = $(e.id);
                    return null != t ? `channel-${t}` : n?.party?.id != null ? `party-${n.party.id}` : `user-${e.id}`;
                })),
                (n = K()),
                (r = ee.bind(null, n)),
                i()(t).mapValues(r))
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
                    })).map((e) => ({ type: x.ZzC.USER, party: e }))),
                W.size > 0)
            ) {
                let e = Array.from(W);
                E.Ay.fetchApplications(e), e.forEach((e) => j.add(e)), W.clear();
            }
            V = !0;
        }
    })(),
        ea.emitChange();
}, 1e3);
function ei() {
    return !!en() && (er(), !1);
}
class es extends s.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([P.default, h.A, w.A, b.A, U.A, R.A, M.A, C.A, I.A], ei),
            this.waitFor(h.A, R.A, v.A, C.A, b.A, m.A, D.A, L.A, w.A, M.A, I.A, P.default, U.A);
    }
    get currentActivityParties() {
        return F;
    }
    get nowPlayingCards() {
        return B;
    }
    get isMounted() {
        return G;
    }
    get loaded() {
        return V;
    }
}
let ea = new es(a.h, {
        LOGOUT: function () {
            (G = !1), (F = []), (B = []), W.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (G = !0), er();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            G = !1;
        },
    }),
    eo = ea;

"use strict";
n.d(t, { A: () => eo }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(170148),
    l = n(550151),
    u = n(765379),
    c = n(90644),
    d = n(61330),
    _ = n(960076),
    f = n(323073),
    p = n(627363),
    h = n(587895),
    E = n(626584),
    m = n(142120),
    g = n(294857),
    A = n(516085),
    I = n(21119),
    T = n(57985),
    S = n(907459),
    y = n(443795),
    N = n(823441),
    v = n(47407),
    C = n(616356),
    O = n(734057),
    R = n(153488),
    b = n(629016),
    D = n(71393),
    L = n(576705),
    w = n(290863),
    M = n(994500),
    P = n(287809),
    x = n(977997),
    k = n(403362),
    U = n(652215);
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
        R.A.hasConsented(U.YAq.PERSONALIZATION)
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
    return w.A.findActivity(e, (e) => e.type !== U.$pd.CUSTOM_STATUS);
}
function z(e) {
    return null == H[e] && (H = { ...H, [e]: new v.A({ name: e }) }), H[e];
}
function q(e) {
    return null == j[e] && (j = { ...j, [e]: new N.A({ url: e }) }), j[e];
}
function X(e) {
    W.has(e) || Y.add(e);
}
function Q(e) {
    if ((0, c.A)(e)) return y.HT;
    if ((0, d.A)(e)) return z(e.name);
    let t = null != e.application_id ? h.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, _.A)(e) && null != e.url
          ? q(e.url)
          : (null != e.application_id && X(e.application_id), t);
}
function Z(e) {
    let t = x.A.getVoiceStateForUser(e);
    return t?.channelId != null && L.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function J(e) {
    return M.A.isFriend(e.id);
}
function ee(e, t, n) {
    var r;
    let s,
        a = P.default.getCurrentUser(),
        c = I.A.getUserAffinitiesMap(),
        d = (0, S.L)(t, c, "NowPlayingViewStore - partiedMembers"),
        _ = d.map((e) => e.id),
        p = d.filter((t) => e.has(t.id)),
        m = !1,
        R = [],
        M = new Set(),
        U = !1,
        G = [];
    for (let e of d) {
        let t = C.A.getAnyStreamForUser(e.id),
            n = O.A.getChannel(t?.channelId);
        if ((0, f.qR)(n)) continue;
        let r = $(e.id);
        if ((null != t && G.push({ stream: t, streamUser: e, activity: r }), null == r)) continue;
        let s = (0, g.A)(r);
        if (null == s) continue;
        U = s === y.WY;
        let c = (function (e) {
            let t = h.A.getApplication(e);
            return null != t
                ? t
                : "string" != typeof e
                  ? (new E.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null)
                  : e === y.WY
                    ? y.HT
                    : e.startsWith(v.W)
                      ? z(e.slice(v.W.length))
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
        if (!A.IS(r) || null == c || M.has(c.id)) continue;
        let _ = null != r ? Q(r) : null;
        (null == _ || _.id !== c.id) && (r = null);
        let p = [];
        (p =
            null != r && null != r.party && null != r.party.id
                ? Array.from(b.A.getParty(r.party.id) ?? []).reduce((e, t) => {
                      let n = P.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : d.filter((e) => {
                      let t = $(e.id),
                          n = null != t ? Q(t) : null;
                      return null != n && n.id === c.id;
                  })),
            (p = i().orderBy(p, [J], ["desc"])).length !== d.length && (m = !0),
            M.add(c.id),
            R.push({
                game: c,
                activity: r,
                activityUser: e,
                startedPlayingTime: r?.timestamps?.start ?? r?.created_at,
                playingMembers: p,
            });
    }
    let F = 1 === p.length,
        V = [],
        B = new Set(),
        H = new Set();
    for (let e of d) {
        let t = Z(e.id),
            n = O.A.getChannel(t),
            r = null != n ? n.getGuildId() : null,
            a = D.A.getGuild(r);
        if ((H.has(r) && B.has(t)) || null == n || null == a || n.id === a.afkChannelId)
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
            let u = i()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return P.default.getUser(t);
                })
                .filter(k.Vq)
                .orderBy([l], ["desc"])
                .value();
            u.filter((e) => !_.includes(e.id)).forEach((e) => d.push(e)),
                F ? H.has(r) || (s = null) : ((s = a), (F = !0)),
                H.add(r),
                B.add(t),
                V.push({ channel: n, guild: a, members: u, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: U,
        priorityMembers: p.map((e) => ({ user: e, status: w.A.getStatus(e.id) })),
        partiedMembers: d,
        showPlayingMembers: m,
        guildContext: s,
        currentActivities: ((r = (e) => e.startedPlayingTime ?? 0),
        i()(R).orderBy([r, (e) => e.game.name], ["desc", "asc"])).value(),
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
                (Y.clear(),
                (B = (V = ((e = Array.from(K()).reduce((e, t) => {
                    let n = P.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                (t = i()(e).groupBy((e) => {
                    let t = Z(e.id),
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
                    })).map((e) => ({ type: U.ZzC.USER, party: e }))),
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                p.Ay.fetchApplications(e), e.forEach((e) => W.add(e)), Y.clear();
            }
            F = !0;
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
        this.syncWith([P.default, h.A, w.A, b.A, x.A, C.A, M.A, R.A, I.A], ei),
            this.waitFor(h.A, C.A, O.A, R.A, b.A, m.A, D.A, L.A, w.A, M.A, I.A, P.default, x.A);
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
            (G = !0), er();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            G = !1;
        },
    }),
    eo = ea;

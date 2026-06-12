"use strict";
n.d(t, { A: () => el }), n(321073);
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
    h = n(323073),
    f = n(627363),
    p = n(587895),
    E = n(626584),
    m = n(617710),
    g = n(294857),
    A = n(475706),
    I = n(427358),
    T = n(57985),
    S = n(907459),
    y = n(666176),
    N = n(823441),
    v = n(47407),
    C = n(616356),
    R = n(734057),
    O = n(153488),
    b = n(629016),
    D = n(71393),
    L = n(576705),
    w = n(290863),
    M = n(994500),
    P = n(287809),
    x = n(977997),
    k = n(403362),
    U = n(652215),
    G = n(360469);
let F = !1,
    V = !1,
    B = [],
    H = [],
    j = new Map(),
    Y = {},
    W = new Set(),
    K = new Set();
function $() {
    let e = M.A.getFriendIDs();
    return new Set(
        O.A.hasConsented(U.YAq.PERSONALIZATION)
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
    return w.A.findActivity(e, (e) => e.type !== U.$pd.CUSTOM_STATUS);
}
function q(e) {
    let t = j.get(e);
    return null == t && ((t = new v.A({ name: e })), j.set(e, t)), t;
}
function X(e) {
    return null == Y[e] && (Y = { ...Y, [e]: new N.A({ url: e }) }), Y[e];
}
function Z(e) {
    K.has(e) || W.add(e);
}
function Q(e) {
    if ((0, c.A)(e)) return y.HT;
    if (null != e.application_id && e.application_id !== G.$W) {
        let t = p.A.getApplication(e.application_id);
        if (null != t) return t;
        Z(e.application_id);
    }
    return (0, _.A)(e) && null != e.url ? X(e.url) : (0, d.A)(e) ? q(e.name) : null;
}
function J(e) {
    let t = x.A.getVoiceStateForUser(e);
    return t?.channelId != null && L.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function ee(e) {
    return M.A.isFriend(e.id);
}
function et(e, t, n) {
    var i;
    let s,
        a = P.default.getCurrentUser(),
        c = I.A.getUserAffinitiesMap(),
        d = (0, S.L)(t, c, "NowPlayingViewStore - partiedMembers"),
        _ = d.map((e) => e.id),
        f = d.filter((t) => e.has(t.id)),
        m = !1,
        O = [],
        M = new Set(),
        U = !1,
        G = [];
    for (let e of d) {
        let t = C.A.getAnyStreamForUser(e.id),
            n = R.A.getChannel(t?.channelId);
        if ((0, h.qR)(n)) continue;
        let i = z(e.id);
        if ((null != t && G.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let s = (0, g.A)(i);
        if (null == s) continue;
        U = s === y.WY;
        let c = (function (e) {
            if ("string" != typeof e)
                return (
                    new E.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null
                );
            if (e === y.WY) return y.HT;
            if (e.startsWith(v.W)) return q(e.slice(v.W.length));
            if (e.startsWith(N.K)) return X(e.slice(N.K.length));
            let t = p.A.getApplication(e);
            return null != t ? t : (Z(e), null);
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
                    ChannelStore: R.A,
                    VoiceStateStore: x.A,
                    PermissionStore: L.A,
                    GuildStore: D.A,
                }) !== l.Gy.CAN_JOIN
            )
                continue;
        }
        if (!A.IS(i) || null == c || M.has(c.id)) continue;
        let _ = null != i ? Q(i) : null;
        (null == _ || _.id !== c.id) && (i = null);
        let f = [];
        (f =
            null != i && null != i.party && null != i.party.id
                ? Array.from(b.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = P.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : d.filter((e) => {
                      let t = z(e.id),
                          n = null != t ? Q(t) : null;
                      return null != n && n.id === c.id;
                  })),
            (f = r().orderBy(f, [ee], ["desc"])).length !== d.length && (m = !0),
            M.add(c.id),
            O.push({
                application: c,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: f,
            });
    }
    let F = 1 === f.length,
        V = [],
        B = new Set(),
        H = new Set();
    for (let e of d) {
        let t = J(e.id),
            n = R.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            a = D.A.getGuild(i);
        if ((H.has(i) && B.has(t)) || null == n || null == a || n.id === a.afkChannelId)
            null == n && ((s = null), (F = !0));
        else {
            let e = x.A.getVoiceStatesForChannel(n.id),
                o = (0, T.Y1)("NowPlayingViewStore - voiceMembers"),
                l = ee;
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
                .filter(k.Vq)
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
        isSpotifyActivity: U,
        priorityMembers: f.map((e) => ({ user: e, status: w.A.getStatus(e.id) })),
        partiedMembers: d,
        showPlayingMembers: m,
        guildContext: s,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        r()(O).orderBy([i, (e) => e.application.name], ["desc", "asc"])).value(),
        applicationStreams: G,
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
    return F && m.A.isConnected();
}
let er = r().throttle(() => {
    !(function () {
        var e, t;
        let n, i;
        if (ei()) {
            if (
                (W.clear(),
                (H = (B = ((e = Array.from($()).reduce((e, t) => {
                    let n = P.default.getUser(t);
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
                W.size > 0)
            ) {
                let e = Array.from(W);
                f.Ay.fetchApplications(e), e.forEach((e) => K.add(e)), W.clear();
            }
            V = !0;
        }
    })(),
        eo.emitChange();
}, 1e3);
function es() {
    return !!ei() && (er(), !1);
}
class ea extends s.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([P.default, p.A, w.A, b.A, x.A, C.A, M.A, O.A, I.A], es),
            this.waitFor(p.A, C.A, R.A, O.A, b.A, m.A, D.A, L.A, w.A, M.A, I.A, P.default, x.A);
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
let eo = new ea(a.h, {
        LOGOUT: function () {
            (F = !1), (B = []), (H = []), W.clear(), K.clear(), j.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (F = !0), er();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            F = !1;
        },
    }),
    el = eo;

n.d(t, { A: () => e_ }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    _ = n(170148),
    l = n(550151),
    o = n(765379),
    E = n(90644),
    d = n(61330),
    c = n(960076),
    u = n(323073),
    I = n(627363),
    A = n(587895),
    T = n(626584),
    S = n(366853),
    N = n(294857),
    O = n(516085),
    R = n(427358),
    f = n(57985),
    C = n(907459),
    p = n(666176),
    m = n(823441),
    L = n(47407),
    D = n(616356),
    h = n(734057),
    g = n(153488),
    b = n(629016),
    U = n(71393),
    P = n(576705),
    M = n(290863),
    y = n(994500),
    G = n(287809),
    v = n(977997),
    B = n(403362),
    w = n(652215);
let F = !1,
    V = !1,
    H = [],
    k = [],
    x = {},
    W = {},
    Y = new Set(),
    j = new Set();
function K() {
    let e = y.A.getFriendIDs();
    return new Set(
        g.A.hasConsented(w.YAq.PERSONALIZATION)
            ? [
                  ...R.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function $(e) {
    return M.A.findActivity(e, (e) => e.type !== w.$pd.CUSTOM_STATUS);
}
function Q(e) {
    return null == x[e] && (x = { ...x, [e]: new L.A({ name: e }) }), x[e];
}
function q(e) {
    return null == W[e] && (W = { ...W, [e]: new m.A({ url: e }) }), W[e];
}
function X(e) {
    j.has(e) || Y.add(e);
}
function z(e) {
    if ((0, E.A)(e)) return p.HT;
    if ((0, d.A)(e)) return Q(e.name);
    let t = null != e.application_id ? A.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, c.A)(e) && null != e.url
          ? q(e.url)
          : (null != e.application_id && X(e.application_id), t);
}
function J(e) {
    let t = v.A.getVoiceStateForUser(e);
    return t?.channelId != null && P.A.canWithPartialContext(w.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function Z(e) {
    return y.A.isFriend(e.id);
}
function ee(e, t, n) {
    var i;
    let a,
        s = G.default.getCurrentUser(),
        E = R.A.getUserAffinitiesMap(),
        d = (0, C.L)(t, E, "NowPlayingViewStore - partiedMembers"),
        c = d.map((e) => e.id),
        I = d.filter((t) => e.has(t.id)),
        S = !1,
        g = [],
        y = new Set(),
        w = !1,
        F = [];
    for (let e of d) {
        let t = D.A.getAnyStreamForUser(e.id),
            n = h.A.getChannel(t?.channelId);
        if ((0, u.qR)(n)) continue;
        let i = $(e.id);
        if ((null != t && F.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let a = (0, N.A)(i);
        if (null == a) continue;
        w = a === p.WY;
        let E = (function (e) {
            let t = A.A.getApplication(e);
            return null != t
                ? t
                : "string" != typeof e
                  ? (new T.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null)
                  : e === p.WY
                    ? p.HT
                    : e.startsWith(L.W)
                      ? Q(e.slice(L.W.length))
                      : e.startsWith(m.K)
                        ? q(e.slice(m.K.length))
                        : (X(e), null);
        })(a);
        if ((0, o.A)(i)) {
            let t = (0, _.A)();
            if (
                (0, l.Ay)({
                    activity: i,
                    userId: e.id,
                    application: E,
                    channelId: v.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: s,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: h.A,
                    VoiceStateStore: v.A,
                    PermissionStore: P.A,
                    GuildStore: U.A,
                }) !== l.Gy.CAN_JOIN
            )
                continue;
        }
        if (!O.IS(i) || null == E || y.has(E.id)) continue;
        let c = null != i ? z(i) : null;
        (null == c || c.id !== E.id) && (i = null);
        let I = [];
        (I =
            null != i && null != i.party && null != i.party.id
                ? Array.from(b.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = G.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : d.filter((e) => {
                      let t = $(e.id),
                          n = null != t ? z(t) : null;
                      return null != n && n.id === E.id;
                  })),
            (I = r().orderBy(I, [Z], ["desc"])).length !== d.length && (S = !0),
            y.add(E.id),
            g.push({
                game: E,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: I,
            });
    }
    let V = 1 === I.length,
        H = [],
        k = new Set(),
        x = new Set();
    for (let e of d) {
        let t = J(e.id),
            n = h.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            s = U.A.getGuild(i);
        if ((x.has(i) && k.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((a = null), (V = !0));
        else {
            let e = v.A.getVoiceStatesForChannel(n.id),
                _ = (0, f.Y1)("NowPlayingViewStore - voiceMembers"),
                l = Z;
            null != _ &&
                (l = (e) => {
                    let t = R.A.getUserAffinity(e.id);
                    return "vc_probability" === _ ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let o = r()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return G.default.getUser(t);
                })
                .filter(B.Vq)
                .orderBy([l], ["desc"])
                .value();
            o.filter((e) => !c.includes(e.id)).forEach((e) => d.push(e)),
                V ? x.has(i) || (a = null) : ((a = s), (V = !0)),
                x.add(i),
                k.add(t),
                H.push({ channel: n, guild: s, members: o, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: H,
        isSpotifyActivity: w,
        priorityMembers: I.map((e) => ({ user: e, status: M.A.getStatus(e.id) })),
        partiedMembers: d,
        showPlayingMembers: S,
        guildContext: a,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        r()(g).orderBy([i, (e) => e.game.name], ["desc", "asc"])).value(),
        applicationStreams: F,
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
    return F && S.A.isConnected();
}
let ei = r().throttle(() => {
    !(function () {
        var e, t;
        let n, i;
        if (en()) {
            if (
                (Y.clear(),
                (k = (H = ((e = Array.from(K()).reduce((e, t) => {
                    let n = G.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                (t = r()(e).groupBy((e) => {
                    let t = J(e.id),
                        n = $(e.id);
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
                        let t = e.partiedMembers.some((e) => y.A.isBlockedOrIgnored(e.id)),
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
                    })).map((e) => ({ type: w.ZzC.USER, party: e }))),
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                I.Ay.fetchApplications(e), e.forEach((e) => j.add(e)), Y.clear();
            }
            V = !0;
        }
    })(),
        es.emitChange();
}, 1e3);
function er() {
    return !!en() && (ei(), !1);
}
class ea extends a.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([G.default, A.A, M.A, b.A, v.A, D.A, y.A, g.A, R.A], er),
            this.waitFor(A.A, D.A, h.A, g.A, b.A, S.A, U.A, P.A, M.A, y.A, R.A, G.default, v.A);
    }
    get currentActivityParties() {
        return H;
    }
    get nowPlayingCards() {
        return k;
    }
    get isMounted() {
        return F;
    }
    get loaded() {
        return V;
    }
}
let es = new ea(s.h, {
        LOGOUT: function () {
            (F = !1), (H = []), (k = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (F = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            F = !1;
        },
    }),
    e_ = es;

n.d(t, { A: () => el }), n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(228366),
    l = n(170148),
    o = n(550151),
    d = n(765379),
    c = n(90644),
    _ = n(61330),
    E = n(960076),
    u = n(323073),
    A = n(627363),
    I = n(587895),
    T = n(626584),
    h = n(446458),
    S = n(294857),
    N = n(516085),
    f = n(427358),
    p = n(57985),
    m = n(907459),
    O = n(666176),
    C = n(823441),
    R = n(47407),
    g = n(616356),
    L = n(734057),
    D = n(153488),
    b = n(629016),
    M = n(71393),
    P = n(576705),
    U = n(290863),
    v = n(994500),
    y = n(287809),
    G = n(977997),
    w = n(403362),
    x = n(652215);
let V = !1,
    B = !1,
    F = [],
    k = [],
    H = {},
    j = {},
    Y = new Set(),
    W = new Set();
function K() {
    let e = v.A.getFriendIDs();
    return new Set(
        D.A.hasConsented(x.YAq.PERSONALIZATION)
            ? [
                  ...f.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function $(e) {
    return U.A.findActivity(e, (e) => e.type !== x.$pd.CUSTOM_STATUS);
}
function Z(e) {
    return null == H[e] && (H = { ...H, [e]: new R.A({ name: e }) }), H[e];
}
function q(e) {
    return null == j[e] && (j = { ...j, [e]: new C.A({ url: e }) }), j[e];
}
function Q(e) {
    W.has(e) || Y.add(e);
}
function z(e) {
    if ((0, c.A)(e)) return O.HT;
    if ((0, _.A)(e)) return Z(e.name);
    let t = null != e.application_id ? I.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, E.A)(e) && null != e.url
          ? q(e.url)
          : (null != e.application_id && Q(e.application_id), t);
}
function X(e) {
    let t = G.A.getVoiceStateForUser(e);
    return t?.channelId != null && P.A.canWithPartialContext(x.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function J(e) {
    return v.A.isFriend(e.id);
}
function ee(e, t, n) {
    var i;
    let r,
        s = y.default.getCurrentUser(),
        c = f.A.getUserAffinitiesMap(),
        _ = (0, m.L)(t, c, "NowPlayingViewStore - partiedMembers"),
        E = _.map((e) => e.id),
        A = _.filter((t) => e.has(t.id)),
        h = !1,
        D = [],
        v = new Set(),
        x = !1,
        V = [];
    for (let e of _) {
        let t = g.A.getAnyStreamForUser(e.id),
            n = L.A.getChannel(t?.channelId);
        if ((0, u.qR)(n)) continue;
        let i = $(e.id);
        if ((null != t && V.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let r = (0, S.A)(i);
        if (null == r) continue;
        x = r === O.WY;
        let c = (function (e) {
            let t = I.A.getApplication(e);
            return null != t
                ? t
                : "string" != typeof e
                  ? (new T.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null)
                  : e === O.WY
                    ? O.HT
                    : e.startsWith(R.W)
                      ? Z(e.slice(R.W.length))
                      : e.startsWith(C.K)
                        ? q(e.slice(C.K.length))
                        : (Q(e), null);
        })(r);
        if ((0, d.A)(i)) {
            let t = (0, l.A)();
            if (
                (0, o.Ay)({
                    activity: i,
                    userId: e.id,
                    application: c,
                    channelId: G.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: s,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: L.A,
                    VoiceStateStore: G.A,
                    PermissionStore: P.A,
                    GuildStore: M.A,
                }) !== o.Gy.CAN_JOIN
            )
                continue;
        }
        if (!N.IS(i) || null == c || v.has(c.id)) continue;
        let E = null != i ? z(i) : null;
        (null == E || E.id !== c.id) && (i = null);
        let A = [];
        (A =
            null != i && null != i.party && null != i.party.id
                ? Array.from(b.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = y.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : _.filter((e) => {
                      let t = $(e.id),
                          n = null != t ? z(t) : null;
                      return null != n && n.id === c.id;
                  })),
            (A = a().orderBy(A, [J], ["desc"])).length !== _.length && (h = !0),
            v.add(c.id),
            D.push({
                game: c,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: A,
            });
    }
    let B = 1 === A.length,
        F = [],
        k = new Set(),
        H = new Set();
    for (let e of _) {
        let t = X(e.id),
            n = L.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            s = M.A.getGuild(i);
        if ((H.has(i) && k.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((r = null), (B = !0));
        else {
            let e = G.A.getVoiceStatesForChannel(n.id),
                l = (0, p.Y1)("NowPlayingViewStore - voiceMembers"),
                o = J;
            null != l &&
                (o = (e) => {
                    let t = f.A.getUserAffinity(e.id);
                    return "vc_probability" === l ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let d = a()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return y.default.getUser(t);
                })
                .filter(w.Vq)
                .orderBy([o], ["desc"])
                .value();
            d.filter((e) => !E.includes(e.id)).forEach((e) => _.push(e)),
                B ? H.has(i) || (r = null) : ((r = s), (B = !0)),
                H.add(i),
                k.add(t),
                F.push({ channel: n, guild: s, members: d, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: F,
        isSpotifyActivity: x,
        priorityMembers: A.map((e) => ({ user: e, status: U.A.getStatus(e.id) })),
        partiedMembers: _,
        showPlayingMembers: h,
        guildContext: r,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        a()(D).orderBy([i, (e) => e.game.name], ["desc", "asc"])).value(),
        applicationStreams: V,
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
    return V && h.A.isConnected();
}
let ei = a().throttle(() => {
    !(function () {
        var e, t;
        let n, i;
        if (en()) {
            if (
                (Y.clear(),
                (k = (F = ((e = Array.from(K()).reduce((e, t) => {
                    let n = y.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                (t = a()(e).groupBy((e) => {
                    let t = X(e.id),
                        n = $(e.id);
                    return null != t ? `channel-${t}` : n?.party?.id != null ? `party-${n.party.id}` : `user-${e.id}`;
                })),
                (n = K()),
                (i = ee.bind(null, n)),
                a()(t).mapValues(i))
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
                        let t = e.partiedMembers.some((e) => v.A.isBlockedOrIgnored(e.id)),
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
                A.Ay.fetchApplications(e), e.forEach((e) => W.add(e)), Y.clear();
            }
            B = !0;
        }
    })(),
        es.emitChange();
}, 1e3);
function ea() {
    return !!en() && (ei(), !1);
}
class er extends r.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([y.default, I.A, U.A, b.A, G.A, g.A, v.A, D.A, f.A], ea),
            this.waitFor(I.A, g.A, L.A, D.A, b.A, h.A, M.A, P.A, U.A, v.A, f.A, y.default, G.A);
    }
    get currentActivityParties() {
        return F;
    }
    get nowPlayingCards() {
        return k;
    }
    get isMounted() {
        return V;
    }
    get loaded() {
        return B;
    }
}
let es = new er(s.h, {
        LOGOUT: function () {
            (V = !1), (F = []), (k = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (V = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            V = !1;
        },
    }),
    el = es;

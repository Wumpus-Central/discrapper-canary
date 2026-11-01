(n.d(t, { A: () => ec }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(350835),
    s = n(17928),
    l = n(73153),
    o = n(170148),
    d = n(550151),
    c = n(55730),
    u = n(765379),
    _ = n(90644),
    E = n(61330),
    A = n(960076),
    h = n(323073),
    f = n(627363),
    I = n(587895),
    p = n(626584),
    T = n(403010),
    m = n(294857),
    g = n(475706),
    S = n(427358),
    N = n(57985),
    C = n(907459),
    O = n(666176),
    R = n(823441),
    L = n(47407),
    y = n(616356),
    D = n(734057),
    v = n(153488),
    b = n(629016),
    P = n(71393),
    M = n(576705),
    U = n(290863),
    w = n(994500),
    G = n(287809),
    x = n(977997),
    k = n(403362),
    F = n(652215),
    B = n(818023);
let V = !1,
    H = !1,
    j = [],
    W = [],
    Y = new Map(),
    K = {},
    $ = new Set(),
    z = new Set();
function X() {
    let e = w.A.getFriendIDs();
    return new Set(
        v.A.hasConsented(F.YAq.PERSONALIZATION)
            ? [
                  ...S.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function q(e) {
    return U.A.findActivity(e, (e) => e.type !== a.$.CUSTOM_STATUS);
}
function Z(e) {
    let t = Y.get(e);
    return (null == t && ((t = new L.A({ name: e })), Y.set(e, t)), t);
}
function Q(e) {
    return (null == K[e] && (K = { ...K, [e]: new R.A({ url: e }) }), K[e]);
}
function J(e) {
    z.has(e) || $.add(e);
}
function ee(e) {
    if ((0, _.A)(e)) return O.HT;
    if (null != e.application_id && e.application_id !== B.$W) {
        let t = I.A.getApplication(e.application_id);
        if (null != t) return t;
        J(e.application_id);
    }
    return (0, A.A)(e) && null != e.url ? Q(e.url) : (0, E.A)(e) ? Z(e.name) : null;
}
function et(e) {
    let t = x.A.getVoiceStateForUser(e);
    return t?.channelId != null && M.A.canWithPartialContext(F.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function en(e) {
    return w.A.isFriend(e.id);
}
function ei(e, t, n) {
    var i;
    let a,
        s = G.default.getCurrentUser(),
        l = S.A.getUserAffinitiesMap(),
        _ = (0, C.L)(t, l, "NowPlayingViewStore - partiedMembers"),
        E = _.map((e) => e.id),
        A = _.filter((t) => e.has(t.id)),
        f = !1,
        T = [],
        v = new Set(),
        w = !1,
        B = [];
    for (let e of _) {
        let t = y.A.getAnyStreamForUser(e.id),
            n = D.A.getChannel(t?.channelId);
        if ((0, h.qR)(n)) continue;
        let i = q(e.id);
        if ((null != t && B.push({ stream: t, streamUser: e, activity: i }), null == i)) continue;
        let a = (0, m.A)(i);
        if (null == a) continue;
        w = a === O.WY;
        let l = (function (e) {
            if ("string" != typeof e)
                return (
                    new p.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                        tags: { source: "ACTIVITIES" },
                    }),
                    null
                );
            if (e === O.WY) return O.HT;
            if (e.startsWith(L.W)) return Z(e.slice(L.W.length));
            if (e.startsWith(R.K)) return Q(e.slice(R.K.length));
            let t = I.A.getApplication(e);
            return null != t ? t : (J(e), null);
        })(a);
        if ((0, u.A)(i) && !(0, c.A)(i, F.jUm.CONTEXTLESS)) {
            let t = (0, o.A)(),
                n = x.A.getVoiceStateForUser(e.id)?.channelId,
                r = D.A.getChannel(n);
            if (
                (0, d.Ay)({
                    activity: i,
                    userId: e.id,
                    application: l,
                    channelId: n,
                    isContentGated: (0, h.qR)(r),
                    currentUser: s,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: D.A,
                    VoiceStateStore: x.A,
                    PermissionStore: M.A,
                    GuildStore: P.A,
                }) !== d.Gy.CAN_JOIN
            )
                continue;
        }
        if (!g.IS(i) || null == l || v.has(l.id)) continue;
        let E = null != i ? ee(i) : null;
        (null == E || E.id !== l.id) && (i = null);
        let A = [];
        ((A =
            null != i && null != i.party && null != i.party.id
                ? Array.from(b.A.getParty(i.party.id) ?? []).reduce((e, t) => {
                      let n = G.default.getUser(t);
                      return (null != n && e.push(n), e);
                  }, [])
                : _.filter((e) => {
                      let t = q(e.id),
                          n = null != t ? ee(t) : null;
                      return null != n && n.id === l.id;
                  })),
            (A = r().orderBy(A, [en], ["desc"])).length !== _.length && (f = !0),
            v.add(l.id),
            T.push({
                application: l,
                activity: i,
                activityUser: e,
                startedPlayingTime: i?.timestamps?.start ?? i?.created_at,
                playingMembers: A,
            }));
    }
    let V = 1 === A.length,
        H = [],
        j = new Set(),
        W = new Set();
    for (let e of _) {
        let t = et(e.id),
            n = D.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            s = P.A.getGuild(i);
        if ((W.has(i) && j.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((a = null), (V = !0));
        else {
            let e = x.A.getVoiceStatesForChannel(n.id),
                l = (0, N.Y1)("NowPlayingViewStore - voiceMembers"),
                o = en;
            null != l &&
                (o = (e) => {
                    let t = S.A.getUserAffinity(e.id);
                    return "vc_probability" === l ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let d = r()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return G.default.getUser(t);
                })
                .filter(k.Vq)
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
        isSpotifyActivity: w,
        priorityMembers: A.map((e) => ({ user: e, status: U.A.getStatus(e.id) })),
        partiedMembers: _,
        showPlayingMembers: f,
        guildContext: a,
        currentActivities: ((i = (e) => e.startedPlayingTime ?? 0),
        r()(T).orderBy(
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
function er(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ea() {
    return V && T.A.isConnected();
}
let es = r().throttle(() => {
    (!(function () {
        var e, t;
        let n, i;
        if (ea()) {
            if (
                ($.clear(),
                (W = (j = ((e = Array.from(X()).reduce((e, t) => {
                    let n = G.default.getUser(t);
                    return (null == n || n.bot || e.push(n), e);
                }, [])),
                (t = r()(e).groupBy((e) => {
                    let t = et(e.id),
                        n = q(e.id);
                    return null != t ? `channel-${t}` : n?.party?.id != null ? `party-${n.party.id}` : `user-${e.id}`;
                })),
                (n = X()),
                (i = ei.bind(null, n)),
                r()(t).mapValues(i))
                    .values()
                    .orderBy(
                        [
                            er,
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
                        let t = e.partiedMembers.some((e) => w.A.isBlockedOrIgnored(e.id)),
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
                    })).map((e) => ({ type: F.ZzC.USER, party: e }))),
                $.size > 0)
            ) {
                let e = Array.from($);
                (f.Ay.fetchApplications(e).catch(F.tEg), e.forEach((e) => z.add(e)), $.clear());
            }
            H = !0;
        }
    })(),
        ed.emitChange());
}, 1e3);
function el() {
    return !!ea() && (es(), !1);
}
class eo extends s.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        (this.syncWith([G.default, I.A, U.A, b.A, x.A, y.A, w.A, v.A, S.A], el),
            this.waitFor(I.A, y.A, D.A, v.A, b.A, T.A, P.A, M.A, U.A, w.A, S.A, G.default, x.A));
    }
    get currentActivityParties() {
        return j;
    }
    get nowPlayingCards() {
        return W;
    }
    get isMounted() {
        return V;
    }
    get loaded() {
        return H;
    }
}
let ed = new eo(l.h, {
        LOGOUT: function () {
            ((V = !1), (j = []), (W = []), $.clear(), z.clear(), Y.clear());
        },
        NOW_PLAYING_MOUNTED: function () {
            ((V = !0), es());
        },
        NOW_PLAYING_UNMOUNTED: function () {
            V = !1;
        },
    }),
    ec = ed;

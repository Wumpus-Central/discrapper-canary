"use strict";
n.d(t, { A: () => eb }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(170148),
    l = n(550151),
    u = n(765379),
    c = n(90644),
    d = n(61330),
    _ = n(960076),
    f = n(323073),
    h = n(627363),
    p = n(587895),
    g = n(626584),
    E = n(142120),
    A = n(294857),
    I = n(516085),
    T = n(21119),
    y = n(57985),
    S = n(907459),
    v = n(443795),
    C = n(823441),
    b = n(47407),
    N = n(616356),
    R = n(734057),
    O = n(153488),
    D = n(629016),
    L = n(71393),
    w = n(576705),
    x = n(290863),
    P = n(994500),
    M = n(287809),
    k = n(977997),
    U = n(403362),
    G = n(652215);
let F = "party-",
    V = "channel-",
    B = "user-",
    j = 1e3,
    H = !1,
    Y = !1,
    W = [],
    K = [],
    $ = {},
    z = {},
    q = new Set(),
    X = new Set();
function Z() {
    let e = P.A.getFriendIDs();
    return new Set(
        O.A.hasConsented(G.YAq.PERSONALIZATION)
            ? [
                  ...T.A.getUserAffinities()
                      .filter((e) => e.communicationRank <= 15)
                      .map((e) => e.otherUserId),
                  ...e,
              ]
            : e,
    );
}
function Q(e) {
    return x.A.findActivity(e, (e) => e.type !== G.$pd.CUSTOM_STATUS);
}
function J(e) {
    return null == $[e] && ($ = { ...$, [e]: new b.A({ name: e }) }), $[e];
}
function ee(e) {
    return null == z[e] && (z = { ...z, [e]: new C.A({ url: e }) }), z[e];
}
function et(e) {
    X.has(e) || q.add(e);
}
function en(e) {
    if ((0, c.A)(e)) return v.HT;
    if ((0, d.A)(e)) return J(e.name);
    let t = null != e.application_id ? p.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, _.A)(e) && null != e.url
          ? ee(e.url)
          : (null != e.application_id && et(e.application_id), t);
}
function er(e) {
    let t = p.A.getApplication(e);
    return null != t
        ? t
        : "string" != typeof e
          ? (new g.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                tags: { source: "ACTIVITIES" },
            }),
            null)
          : e === v.WY
            ? v.HT
            : e.startsWith(b.W)
              ? J(e.slice(b.W.length))
              : e.startsWith(C.K)
                ? ee(e.slice(C.K.length))
                : (et(e), null);
}
function ei(e) {
    let t = k.A.getVoiceStateForUser(e);
    return t?.channelId != null && w.A.canWithPartialContext(G.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function ea(e) {
    return i()(e).groupBy((e) => {
        let t = ei(e.id),
            n = Q(e.id);
        return null != t ? `${V}${t}` : n?.party?.id != null ? `${F}${n.party.id}` : `${B}${e.id}`;
    });
}
function es(e, t) {
    let n = (e) => e.game.name;
    return i()(e).orderBy([t, n], ["desc", "asc"]);
}
function eo(e) {
    return P.A.isFriend(e.id);
}
function el(e, t, n) {
    let r,
        a = M.default.getCurrentUser(),
        s = T.A.getUserAffinitiesMap(),
        c = (0, S.L)(t, s, "NowPlayingViewStore - partiedMembers"),
        d = c.map((e) => e.id),
        _ = c.filter((t) => e.has(t.id)),
        h = !1,
        p = [],
        g = new Set(),
        E = !1,
        C = [];
    for (let e of c) {
        let t = N.A.getAnyStreamForUser(e.id),
            n = R.A.getChannel(t?.channelId);
        if ((0, f.qR)(n)) continue;
        let r = Q(e.id);
        if ((null != t && C.push({ stream: t, streamUser: e, activity: r }), null == r)) continue;
        let s = (0, A.A)(r);
        if (null == s) continue;
        E = s === v.WY;
        let d = er(s);
        if ((0, u.A)(r)) {
            let t = (0, o.A)();
            if (
                (0, l.Ay)({
                    activity: r,
                    userId: e.id,
                    application: d,
                    channelId: k.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: a,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: R.A,
                    VoiceStateStore: k.A,
                    PermissionStore: w.A,
                    GuildStore: L.A,
                }) !== l.Gy.CAN_JOIN
            )
                continue;
        }
        if (!I.IS(r) || null == d || g.has(d.id)) continue;
        let _ = null != r ? en(r) : null;
        (null == _ || _.id !== d.id) && (r = null);
        let T = [];
        (T =
            null != r && null != r.party && null != r.party.id
                ? Array.from(D.A.getParty(r.party.id) ?? []).reduce((e, t) => {
                      let n = M.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : c.filter((e) => {
                      let t = Q(e.id),
                          n = null != t ? en(t) : null;
                      return null != n && n.id === d.id;
                  })),
            (T = i().orderBy(T, [eo], ["desc"])).length !== c.length && (h = !0),
            g.add(d.id),
            p.push({
                game: d,
                activity: r,
                activityUser: e,
                startedPlayingTime: r?.timestamps?.start ?? r?.created_at,
                playingMembers: T,
            });
    }
    let b = 1 === _.length,
        O = [],
        P = new Set(),
        G = new Set();
    for (let e of c) {
        let t = ei(e.id),
            n = R.A.getChannel(t),
            a = null != n ? n.getGuildId() : null,
            s = L.A.getGuild(a);
        if ((G.has(a) && P.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((r = null), (b = !0));
        else {
            let e = k.A.getVoiceStatesForChannel(n.id),
                o = (0, y.Y1)("NowPlayingViewStore - voiceMembers"),
                l = eo;
            null != o &&
                (l = (e) => {
                    let t = T.A.getUserAffinity(e.id);
                    return "vc_probability" === o ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let u = i()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return M.default.getUser(t);
                })
                .filter(U.Vq)
                .orderBy([l], ["desc"])
                .value();
            u.filter((e) => !d.includes(e.id)).forEach((e) => c.push(e)),
                b ? G.has(a) || (r = null) : ((r = s), (b = !0)),
                G.add(a),
                P.add(t),
                O.push({ channel: n, guild: s, members: u, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: O,
        isSpotifyActivity: E,
        priorityMembers: _.map((e) => ({ user: e, status: x.A.getStatus(e.id) })),
        partiedMembers: c,
        showPlayingMembers: h,
        guildContext: r,
        currentActivities: es(p, (e) => e.startedPlayingTime ?? 0).value(),
        applicationStreams: C,
    };
}
function eu(e) {
    let t = Z(),
        n = el.bind(null, t);
    return i()(e).mapValues(n);
}
function ec(e) {
    let t = (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(" "),
        n = (e) => e.currentActivities.length > 0,
        r = (e) => e.voiceChannels.length > 0,
        i = (e) => e.applicationStreams.length > 0,
        a = (e) => e.partiedMembers.length > 1,
        s = (e) => e.isSpotifyActivity;
    return e.values().orderBy([ed, a, i, r, n, s, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value();
}
function ed(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function e_(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function ef(e) {
    return e.partiedMembers.some((e) => P.A.isBlockedOrIgnored(e.id));
}
function eh(e) {
    return e.filter((e) => {
        let t = ef(e),
            n = e_(e);
        return (
            (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) &&
            !t &&
            !n
        );
    });
}
function ep(e) {
    return e.map((e) => ({ type: G.ZzC.USER, party: e }));
}
function em() {
    if (q.size > 0) {
        let e = Array.from(q);
        h.Ay.fetchApplications(e), e.forEach((e) => X.add(e)), q.clear();
    }
}
function eg() {
    return H && E.A.isConnected();
}
function eE() {
    if (!eg()) return !1;
    q.clear(),
        (K = ep(
            (W = eh(
                ec(
                    eu(
                        ea(
                            Array.from(Z()).reduce((e, t) => {
                                let n = M.default.getUser(t);
                                return null == n || n.bot || e.push(n), e;
                            }, []),
                        ),
                    ),
                ),
            )),
        )),
        em(),
        (Y = !0);
}
let eA = i().throttle(() => {
    eE(), eC.emitChange();
}, j);
function eI() {
    return !!eg() && (eA(), !1);
}
function eT() {
    (H = !1), (W = []), (K = []), q.clear();
}
function ey() {
    (H = !0), eA();
}
function eS() {
    H = !1;
}
class ev extends a.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([M.default, p.A, x.A, D.A, k.A, N.A, P.A, O.A, T.A], eI),
            this.waitFor(p.A, N.A, R.A, O.A, D.A, E.A, L.A, w.A, x.A, P.A, T.A, M.default, k.A);
    }
    get currentActivityParties() {
        return W;
    }
    get nowPlayingCards() {
        return K;
    }
    get isMounted() {
        return H;
    }
    get loaded() {
        return Y;
    }
}
let eC = new ev(s.h, { LOGOUT: eT, NOW_PLAYING_MOUNTED: ey, NOW_PLAYING_UNMOUNTED: eS }),
    eb = eC;

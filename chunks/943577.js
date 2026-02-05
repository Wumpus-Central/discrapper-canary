"use strict";
n.d(t, { A: () => eC }), n(321073);
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
    p = n(627363),
    h = n(587895),
    m = n(626584),
    g = n(142120),
    E = n(294857),
    A = n(516085),
    I = n(21119),
    T = n(57985),
    y = n(907459),
    S = n(443795),
    v = n(823441),
    C = n(47407),
    b = n(616356),
    N = n(734057),
    R = n(153488),
    O = n(629016),
    D = n(71393),
    L = n(576705),
    w = n(290863),
    x = n(994500),
    P = n(287809),
    M = n(977997),
    k = n(403362),
    U = n(652215);
let G = "party-",
    V = "channel-",
    F = "user-",
    B = 1e3,
    j = !1,
    H = !1,
    Y = [],
    W = [],
    K = {},
    z = {},
    $ = new Set(),
    q = new Set();
function Z() {
    let e = x.A.getFriendIDs();
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
function Q(e) {
    return w.A.findActivity(e, (e) => e.type !== U.$pd.CUSTOM_STATUS);
}
function X(e) {
    return null == K[e] && (K = { ...K, [e]: new C.A({ name: e }) }), K[e];
}
function J(e) {
    return null == z[e] && (z = { ...z, [e]: new v.A({ url: e }) }), z[e];
}
function ee(e) {
    q.has(e) || $.add(e);
}
function et(e) {
    if ((0, c.A)(e)) return S.HT;
    if ((0, d.A)(e)) return X(e.name);
    let t = null != e.application_id ? h.A.getApplication(e.application_id) : null;
    return null != t
        ? t
        : (0, _.A)(e) && null != e.url
          ? J(e.url)
          : (null != e.application_id && ee(e.application_id), t);
}
function en(e) {
    let t = h.A.getApplication(e);
    return null != t
        ? t
        : "string" != typeof e
          ? (new m.A("NowPlayingViewStore").error(`Unknown type for applicationId: ${typeof e}, value: ${e}`, {
                tags: { source: "ACTIVITIES" },
            }),
            null)
          : e === S.WY
            ? S.HT
            : e.startsWith(C.W)
              ? X(e.slice(C.W.length))
              : e.startsWith(v.K)
                ? J(e.slice(v.K.length))
                : (ee(e), null);
}
function er(e) {
    let t = M.A.getVoiceStateForUser(e);
    return t?.channelId != null && L.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function ei(e) {
    return i()(e).groupBy((e) => {
        let t = er(e.id),
            n = Q(e.id);
        return null != t ? `${V}${t}` : n?.party?.id != null ? `${G}${n.party.id}` : `${F}${e.id}`;
    });
}
function ea(e, t) {
    let n = (e) => e.game.name;
    return i()(e).orderBy([t, n], ["desc", "asc"]);
}
function es(e) {
    return x.A.isFriend(e.id);
}
function eo(e, t, n) {
    let r,
        a = P.default.getCurrentUser(),
        s = I.A.getUserAffinitiesMap(),
        c = (0, y.L)(t, s, "NowPlayingViewStore - partiedMembers"),
        d = c.map((e) => e.id),
        _ = c.filter((t) => e.has(t.id)),
        p = !1,
        h = [],
        m = new Set(),
        g = !1,
        v = [];
    for (let e of c) {
        let t = b.A.getAnyStreamForUser(e.id),
            n = N.A.getChannel(t?.channelId);
        if ((0, f.qR)(n)) continue;
        let r = Q(e.id);
        if ((null != t && v.push({ stream: t, streamUser: e, activity: r }), null == r)) continue;
        let s = (0, E.A)(r);
        if (null == s) continue;
        g = s === S.WY;
        let d = en(s);
        if ((0, u.A)(r)) {
            let t = (0, o.A)();
            if (
                (0, l.Ay)({
                    activity: r,
                    userId: e.id,
                    application: d,
                    channelId: M.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: a,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: N.A,
                    VoiceStateStore: M.A,
                    PermissionStore: L.A,
                    GuildStore: D.A,
                }) !== l.Gy.CAN_JOIN
            )
                continue;
        }
        if (!A.IS(r) || null == d || m.has(d.id)) continue;
        let _ = null != r ? et(r) : null;
        (null == _ || _.id !== d.id) && (r = null);
        let I = [];
        (I =
            null != r && null != r.party && null != r.party.id
                ? Array.from(O.A.getParty(r.party.id) ?? []).reduce((e, t) => {
                      let n = P.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : c.filter((e) => {
                      let t = Q(e.id),
                          n = null != t ? et(t) : null;
                      return null != n && n.id === d.id;
                  })),
            (I = i().orderBy(I, [es], ["desc"])).length !== c.length && (p = !0),
            m.add(d.id),
            h.push({
                game: d,
                activity: r,
                activityUser: e,
                startedPlayingTime: r?.timestamps?.start ?? r?.created_at,
                playingMembers: I,
            });
    }
    let C = 1 === _.length,
        R = [],
        x = new Set(),
        U = new Set();
    for (let e of c) {
        let t = er(e.id),
            n = N.A.getChannel(t),
            a = null != n ? n.getGuildId() : null,
            s = D.A.getGuild(a);
        if ((U.has(a) && x.has(t)) || null == n || null == s || n.id === s.afkChannelId)
            null == n && ((r = null), (C = !0));
        else {
            let e = M.A.getVoiceStatesForChannel(n.id),
                o = (0, T.Y1)("NowPlayingViewStore - voiceMembers"),
                l = es;
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
            u.filter((e) => !d.includes(e.id)).forEach((e) => c.push(e)),
                C ? U.has(a) || (r = null) : ((r = s), (C = !0)),
                U.add(a),
                x.add(t),
                R.push({ channel: n, guild: s, members: u, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: R,
        isSpotifyActivity: g,
        priorityMembers: _.map((e) => ({ user: e, status: w.A.getStatus(e.id) })),
        partiedMembers: c,
        showPlayingMembers: p,
        guildContext: r,
        currentActivities: ea(h, (e) => e.startedPlayingTime ?? 0).value(),
        applicationStreams: v,
    };
}
function el(e) {
    let t = Z(),
        n = eo.bind(null, t);
    return i()(e).mapValues(n);
}
function eu(e) {
    let t = (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(" "),
        n = (e) => e.currentActivities.length > 0,
        r = (e) => e.voiceChannels.length > 0,
        i = (e) => e.applicationStreams.length > 0,
        a = (e) => e.partiedMembers.length > 1,
        s = (e) => e.isSpotifyActivity;
    return e.values().orderBy([ec, a, i, r, n, s, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value();
}
function ec(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ed(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function e_(e) {
    return e.partiedMembers.some((e) => x.A.isBlockedOrIgnored(e.id));
}
function ef(e) {
    return e.filter((e) => {
        let t = e_(e),
            n = ed(e);
        return (
            (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) &&
            !t &&
            !n
        );
    });
}
function ep(e) {
    return e.map((e) => ({ type: U.ZzC.USER, party: e }));
}
function eh() {
    if ($.size > 0) {
        let e = Array.from($);
        p.Ay.fetchApplications(e), e.forEach((e) => q.add(e)), $.clear();
    }
}
function em() {
    return j && g.A.isConnected();
}
function eg() {
    if (!em()) return !1;
    $.clear(),
        (W = ep(
            (Y = ef(
                eu(
                    el(
                        ei(
                            Array.from(Z()).reduce((e, t) => {
                                let n = P.default.getUser(t);
                                return null == n || n.bot || e.push(n), e;
                            }, []),
                        ),
                    ),
                ),
            )),
        )),
        eh(),
        (H = !0);
}
let eE = i().throttle(() => {
    eg(), ev.emitChange();
}, B);
function eA() {
    return !!em() && (eE(), !1);
}
function eI() {
    (j = !1), (Y = []), (W = []), $.clear();
}
function eT() {
    (j = !0), eE();
}
function ey() {
    j = !1;
}
class eS extends a.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([P.default, h.A, w.A, O.A, M.A, b.A, x.A, R.A, I.A], eA),
            this.waitFor(h.A, b.A, N.A, R.A, O.A, g.A, D.A, L.A, w.A, x.A, I.A, P.default, M.A);
    }
    get currentActivityParties() {
        return Y;
    }
    get nowPlayingCards() {
        return W;
    }
    get isMounted() {
        return j;
    }
    get loaded() {
        return H;
    }
}
let ev = new eS(s.h, { LOGOUT: eI, NOW_PLAYING_MOUNTED: eT, NOW_PLAYING_UNMOUNTED: ey }),
    eC = ev;

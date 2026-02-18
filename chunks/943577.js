"use strict";
n.d(t, { A: () => eN }), n(321073);
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
    m = n(626584),
    E = n(142120),
    g = n(294857),
    A = n(516085),
    I = n(21119),
    T = n(57985),
    S = n(907459),
    y = n(443795),
    v = n(823441),
    N = n(47407),
    C = n(616356),
    b = n(734057),
    R = n(153488),
    O = n(629016),
    D = n(71393),
    L = n(576705),
    w = n(290863),
    x = n(994500),
    M = n(287809),
    P = n(977997),
    k = n(403362),
    U = n(652215);
let G = "party-",
    F = "channel-",
    V = "user-",
    B = 1e3,
    H = !1,
    j = !1,
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
function X(e) {
    return w.A.findActivity(e, (e) => e.type !== U.$pd.CUSTOM_STATUS);
}
function Q(e) {
    return null == K[e] && (K = { ...K, [e]: new N.A({ name: e }) }), K[e];
}
function J(e) {
    return null == z[e] && (z = { ...z, [e]: new v.A({ url: e }) }), z[e];
}
function ee(e) {
    q.has(e) || $.add(e);
}
function et(e) {
    if ((0, c.A)(e)) return y.HT;
    if ((0, d.A)(e)) return Q(e.name);
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
          : e === y.WY
            ? y.HT
            : e.startsWith(N.W)
              ? Q(e.slice(N.W.length))
              : e.startsWith(v.K)
                ? J(e.slice(v.K.length))
                : (ee(e), null);
}
function er(e) {
    let t = P.A.getVoiceStateForUser(e);
    return t?.channelId != null && L.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, { channelId: t.channelId })
        ? t.channelId
        : null;
}
function ei(e) {
    return i()(e).groupBy((e) => {
        let t = er(e.id),
            n = X(e.id);
        return null != t ? `${F}${t}` : n?.party?.id != null ? `${G}${n.party.id}` : `${V}${e.id}`;
    });
}
function es(e, t) {
    let n = (e) => e.game.name;
    return i()(e).orderBy([t, n], ["desc", "asc"]);
}
function ea(e) {
    return x.A.isFriend(e.id);
}
function eo(e, t, n) {
    let r,
        s = M.default.getCurrentUser(),
        a = I.A.getUserAffinitiesMap(),
        c = (0, S.L)(t, a, "NowPlayingViewStore - partiedMembers"),
        d = c.map((e) => e.id),
        _ = c.filter((t) => e.has(t.id)),
        p = !1,
        h = [],
        m = new Set(),
        E = !1,
        v = [];
    for (let e of c) {
        let t = C.A.getAnyStreamForUser(e.id),
            n = b.A.getChannel(t?.channelId);
        if ((0, f.qR)(n)) continue;
        let r = X(e.id);
        if ((null != t && v.push({ stream: t, streamUser: e, activity: r }), null == r)) continue;
        let a = (0, g.A)(r);
        if (null == a) continue;
        E = a === y.WY;
        let d = en(a);
        if ((0, u.A)(r)) {
            let t = (0, o.A)();
            if (
                (0, l.Ay)({
                    activity: r,
                    userId: e.id,
                    application: d,
                    channelId: P.A.getVoiceStateForUser(e.id)?.channelId,
                    currentUser: s,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: b.A,
                    VoiceStateStore: P.A,
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
                      let n = M.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : c.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? et(t) : null;
                      return null != n && n.id === d.id;
                  })),
            (I = i().orderBy(I, [ea], ["desc"])).length !== c.length && (p = !0),
            m.add(d.id),
            h.push({
                game: d,
                activity: r,
                activityUser: e,
                startedPlayingTime: r?.timestamps?.start ?? r?.created_at,
                playingMembers: I,
            });
    }
    let N = 1 === _.length,
        R = [],
        x = new Set(),
        U = new Set();
    for (let e of c) {
        let t = er(e.id),
            n = b.A.getChannel(t),
            s = null != n ? n.getGuildId() : null,
            a = D.A.getGuild(s);
        if ((U.has(s) && x.has(t)) || null == n || null == a || n.id === a.afkChannelId)
            null == n && ((r = null), (N = !0));
        else {
            let e = P.A.getVoiceStatesForChannel(n.id),
                o = (0, T.Y1)("NowPlayingViewStore - voiceMembers"),
                l = ea;
            null != o &&
                (l = (e) => {
                    let t = I.A.getUserAffinity(e.id);
                    return "vc_probability" === o ? (t?.vcProbability ?? 0) : (t?.communicationProbability ?? 0);
                });
            let u = i()(e)
                .map((e) => {
                    let { userId: t } = e;
                    return M.default.getUser(t);
                })
                .filter(k.Vq)
                .orderBy([l], ["desc"])
                .value();
            u.filter((e) => !d.includes(e.id)).forEach((e) => c.push(e)),
                N ? U.has(s) || (r = null) : ((r = a), (N = !0)),
                U.add(s),
                x.add(t),
                R.push({ channel: n, guild: a, members: u, voiceStates: e });
        }
    }
    return {
        id: n,
        voiceChannels: R,
        isSpotifyActivity: E,
        priorityMembers: _.map((e) => ({ user: e, status: w.A.getStatus(e.id) })),
        partiedMembers: c,
        showPlayingMembers: p,
        guildContext: r,
        currentActivities: es(h, (e) => e.startedPlayingTime ?? 0).value(),
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
        s = (e) => e.partiedMembers.length > 1,
        a = (e) => e.isSpotifyActivity;
    return e.values().orderBy([ec, s, i, r, n, a, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value();
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
    return H && E.A.isConnected();
}
function eE() {
    if (!em()) return !1;
    $.clear(),
        (W = ep(
            (Y = ef(
                eu(
                    el(
                        ei(
                            Array.from(Z()).reduce((e, t) => {
                                let n = M.default.getUser(t);
                                return null == n || n.bot || e.push(n), e;
                            }, []),
                        ),
                    ),
                ),
            )),
        )),
        eh(),
        (j = !0);
}
let eg = i().throttle(() => {
    eE(), ev.emitChange();
}, B);
function eA() {
    return !!em() && (eg(), !1);
}
function eI() {
    (H = !1), (Y = []), (W = []), $.clear();
}
function eT() {
    (H = !0), eg();
}
function eS() {
    H = !1;
}
class ey extends s.Ay.Store {
    static displayName = "NowPlayingViewStore";
    initialize() {
        this.syncWith([M.default, h.A, w.A, O.A, P.A, C.A, x.A, R.A, I.A], eA),
            this.waitFor(h.A, C.A, b.A, R.A, O.A, E.A, D.A, L.A, w.A, x.A, I.A, M.default, P.A);
    }
    get currentActivityParties() {
        return Y;
    }
    get nowPlayingCards() {
        return W;
    }
    get isMounted() {
        return H;
    }
    get loaded() {
        return j;
    }
}
let ev = new ey(a.h, { LOGOUT: eI, NOW_PLAYING_MOUNTED: eT, NOW_PLAYING_UNMOUNTED: eS }),
    eN = ev;

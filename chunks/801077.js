n.d(t, { Z: () => eu }), n(388685), n(539854);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(442837),
    a = n(570140),
    s = n(790920),
    u = n(527805),
    c = n(841784),
    d = n(503438),
    f = n(802856),
    h = n(420660),
    p = n(728345),
    g = n(812206),
    y = n(710845),
    O = n(38618),
    b = n(656063),
    N = n(761282),
    v = n(752048),
    m = n(789407),
    x = n(630186),
    E = n(250889),
    C = n(199902),
    I = n(592125),
    T = n(480294),
    j = n(831506),
    S = n(731290),
    P = n(430824),
    _ = n(496675),
    Z = n(158776),
    A = n(699516),
    w = n(594174),
    R = n(979651),
    D = n(823379),
    U = n(981631);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = !1,
    G = !1,
    V = [],
    F = [],
    W = {},
    K = {},
    Y = new Set(),
    H = new Set();
function Q() {
    let e = A.Z.getFriendIDs();
    return new Set(T.Z.hasConsented(U.pjP.PERSONALIZATION) ? [...v.Z.getUserAffinities().map((e) => e.otherUserId), ...e] : e);
}
function z(e) {
    return Z.Z.findActivity(e, (e) => e.type !== U.IIU.CUSTOM_STATUS);
}
function X(e) {
    return null == W[e] && (W = L(M({}, W), { [e]: new E.Z({ name: e }) })), W[e];
}
function J(e) {
    return null == K[e] && (K = L(M({}, K), { [e]: new x.Z({ url: e }) })), K[e];
}
function q(e) {
    H.has(e) || Y.add(e);
}
function $(e) {
    if ((0, d.Z)(e)) return m.r9;
    let t = null != e.application_id ? g.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, f.Z)(e) ? X(e.name) : (0, h.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && q(e.application_id), t);
}
function ee(e) {
    let t = R.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && _.Z.canWithPartialContext(U.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function et(e) {
    return A.Z.isFriend(e.id);
}
function en(e, t, n) {
    var r, l, o, a, d, f;
    let h,
        p = w.default.getCurrentUser(),
        O = null != (r = null == p ? void 0 : p.nsfwAllowed) && r,
        v = t.map((e) => e.id),
        T = t.filter((t) => e.has(t.id)),
        A = !1,
        U = [],
        k = new Set(),
        M = !1,
        L = [];
    for (let e of t) {
        let n = C.Z.getAnyStreamForUser(e.id),
            r = I.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == r ? void 0 : r.isNSFW()) && (!O || !S.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let f = z(e.id);
        if (
            (null != n &&
                L.push({
                    stream: n,
                    streamUser: e,
                    activity: f
                }),
            null == f)
        )
            continue;
        let h = (0, b.Z)(f);
        if (null == h) continue;
        M = h === m.XB;
        let v = (function (e) {
            let t = g.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new y.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === m.XB ? m.r9 : e.startsWith(E.H) ? X(e.slice(E.H.length)) : e.startsWith(x._) ? J(e.slice(x._.length)) : (q(e), null);
        })(h);
        if ((0, c.Z)(f)) {
            let t = (0, s.a)();
            if (
                (0, u.ZP)({
                    activity: f,
                    userId: e.id,
                    application: v,
                    channelId: null == (o = R.Z.getVoiceStateForUser(e.id)) ? void 0 : o.channelId,
                    currentUser: p,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: I.Z,
                    VoiceStateStore: R.Z,
                    PermissionStore: _.Z,
                    GuildStore: P.Z
                }) !== u.Fw.CAN_JOIN
            )
                continue;
        }
        if (!N.JE(f) || null == v || k.has(v.id)) continue;
        let T = null != f ? $(f) : null;
        (null == T || T.id !== v.id) && (f = null);
        let Z = [];
        (Z =
            null != f && null != f.party && null != f.party.id
                ? Array.from(null != (a = j.Z.getParty(f.party.id)) ? a : []).reduce((e, t) => {
                      let n = w.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = z(e.id),
                          n = null != t ? $(t) : null;
                      return null != n && n.id === v.id;
                  })),
            (Z = i().orderBy(Z, [et], ['desc'])).length !== t.length && (A = !0),
            k.add(v.id),
            U.push({
                game: v,
                activity: f,
                activityUser: e,
                startedPlayingTime: null != (d = null == f || null == (l = f.timestamps) ? void 0 : l.start) ? d : null == f ? void 0 : f.created_at,
                playingMembers: Z
            });
    }
    let B = 1 === T.length,
        G = [],
        V = new Set(),
        F = new Set();
    for (let e of t) {
        let n = ee(e.id),
            r = I.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = P.Z.getGuild(l);
        if ((F.has(l) && V.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((h = null), (B = !0));
        else {
            let e = R.Z.getVoiceStatesForChannel(r.id),
                a = i()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return w.default.getUser(t);
                    })
                    .filter(D.lm)
                    .orderBy([et], ['desc'])
                    .value();
            a.filter((e) => !v.includes(e.id)).forEach((e) => t.push(e)),
                B ? F.has(l) || (h = null) : ((h = o), (B = !0)),
                F.add(l),
                V.add(n),
                G.push({
                    channel: r,
                    guild: o,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: G,
        isSpotifyActivity: M,
        priorityMembers: T.map((e) => ({
            user: e,
            status: Z.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: A,
        guildContext: h,
        currentActivities: ((f = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(U).orderBy([f, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: L
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
function el() {
    return B && O.Z.isConnected();
}
let ei = i().throttle(() => {
    !(function () {
        var e;
        if (el()) {
            if (
                (Y.clear(),
                (F = (V = (function (e) {
                    let t = Q(),
                        n = en.bind(null, t);
                    return i()(e).mapValues(n);
                })(
                    ((e = Array.from(Q()).reduce((e, t) => {
                        let n = w.default.getUser(t);
                        return null == n || n.bot || e.push(n), e;
                    }, [])),
                    i()(e).groupBy((e) => {
                        var t;
                        let n = ee(e.id),
                            r = z(e.id);
                        return null != n ? ''.concat('channel-').concat(n) : (null == r || null == (t = r.party) ? void 0 : t.id) != null ? ''.concat('party-').concat(r.party.id) : ''.concat('user-').concat(e.id);
                    }))
                )
                    .values()
                    .orderBy([er, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                    .value()
                    .filter((e) => {
                        let t = e.partiedMembers.some((e) => A.Z.isBlockedOrIgnored(e.id)),
                            n =
                                0 !== e.voiceChannels.length &&
                                e.voiceChannels.length > 0 &&
                                e.voiceChannels.every((e) => {
                                    let { voiceStates: t } = e;
                                    return Object.values(t).every((e) => !1 === e.discoverable);
                                });
                        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n;
                    })).map((e) => ({
                    type: U.GOo.USER,
                    party: e
                }))),
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                p.ZP.fetchApplications(e), e.forEach((e) => H.add(e)), Y.clear();
            }
            G = !0;
        }
    })(),
        es.emitChange();
}, 1000);
function eo() {
    return !!el() && (ei(), !1);
}
class ea extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([w.default, g.Z, Z.Z, j.Z, R.Z, C.Z, A.Z, T.Z, v.Z], eo), this.waitFor(O.Z, P.Z, g.Z, w.default, v.Z);
    }
    get currentActivityParties() {
        return V;
    }
    get nowPlayingCards() {
        return F;
    }
    get isMounted() {
        return B;
    }
    get loaded() {
        return G;
    }
}
k(ea, 'displayName', 'NowPlayingViewStore');
let es = new ea(a.Z, {
        LOGOUT: function () {
            (B = !1), (V = []), (F = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (B = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            B = !1;
        }
    }),
    eu = es;

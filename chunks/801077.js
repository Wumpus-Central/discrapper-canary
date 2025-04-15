n.d(t, { Z: () => eu }), n(388685), n(539854);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(442837),
    a = n(570140),
    s = n(782769),
    u = n(527805),
    c = n(841784),
    d = n(503438),
    h = n(802856),
    f = n(420660),
    p = n(728345),
    g = n(812206),
    y = n(710845),
    O = n(38618),
    N = n(656063),
    b = n(761282),
    v = n(814443),
    m = n(789407),
    x = n(630186),
    E = n(250889),
    C = n(199902),
    j = n(592125),
    I = n(480294),
    P = n(831506),
    S = n(731290),
    T = n(430824),
    Z = n(496675),
    w = n(158776),
    _ = n(699516),
    A = n(594174),
    R = n(979651),
    D = n(823379),
    W = n(981631);
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
function U(e, t) {
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
let L = !1,
    B = !1,
    G = [],
    V = [],
    F = {},
    K = {},
    H = new Set(),
    Q = new Set();
function Y() {
    let e = _.Z.getFriendIDs();
    return new Set(I.Z.hasConsented(W.pjP.PERSONALIZATION) ? [...v.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function X(e) {
    return w.Z.findActivity(e, (e) => e.type !== W.IIU.CUSTOM_STATUS);
}
function z(e) {
    return null == F[e] && (F = U(M({}, F), { [e]: new E.Z({ name: e }) })), F[e];
}
function J(e) {
    return null == K[e] && (K = U(M({}, K), { [e]: new x.Z({ url: e }) })), K[e];
}
function q(e) {
    Q.has(e) || H.add(e);
}
function $(e) {
    if ((0, d.Z)(e)) return m.r9;
    let t = null != e.application_id ? g.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, h.Z)(e) ? z(e.name) : (0, f.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && q(e.application_id), t);
}
function ee(e) {
    let t = R.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && Z.Z.canWithPartialContext(W.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function et(e) {
    return _.Z.isFriend(e.id);
}
function en(e, t, n) {
    var r, l, o, a, d, h;
    let f,
        p = A.default.getCurrentUser(),
        O = null != (r = null == p ? void 0 : p.nsfwAllowed) && r,
        v = t.map((e) => e.id),
        I = t.filter((t) => e.has(t.id)),
        _ = !1,
        W = [],
        k = new Set(),
        M = !1,
        U = [];
    for (let e of t) {
        let n = C.Z.getAnyStreamForUser(e.id),
            r = j.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == r ? void 0 : r.isNSFW()) && (!O || !S.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let h = X(e.id);
        if (
            (null != n &&
                U.push({
                    stream: n,
                    streamUser: e,
                    activity: h
                }),
            null == h)
        )
            continue;
        let f = (0, N.Z)(h);
        if (null == f) continue;
        M = f === m.XB;
        let v = (function (e) {
            let t = g.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new y.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === m.XB ? m.r9 : e.startsWith(E.H) ? z(e.slice(E.H.length)) : e.startsWith(x._) ? J(e.slice(x._.length)) : (q(e), null);
        })(f);
        if ((0, c.Z)(h)) {
            let t = (0, s.a)();
            if (
                (0, u.ZP)({
                    activity: h,
                    userId: e.id,
                    application: v,
                    channelId: null == (o = R.Z.getVoiceStateForUser(e.id)) ? void 0 : o.channelId,
                    currentUser: p,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: j.Z,
                    VoiceStateStore: R.Z,
                    PermissionStore: Z.Z,
                    GuildStore: T.Z
                }) !== u.Fw.CAN_JOIN
            )
                continue;
        }
        if (!b.JE(h) || null == v || k.has(v.id)) continue;
        let I = null != h ? $(h) : null;
        (null == I || I.id !== v.id) && (h = null);
        let w = [];
        (w =
            null != h && null != h.party && null != h.party.id
                ? Array.from(null != (a = P.Z.getParty(h.party.id)) ? a : []).reduce((e, t) => {
                      let n = A.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? $(t) : null;
                      return null != n && n.id === v.id;
                  })),
            (w = i().orderBy(w, [et], ['desc'])).length !== t.length && (_ = !0),
            k.add(v.id),
            W.push({
                game: v,
                activity: h,
                activityUser: e,
                startedPlayingTime: null != (d = null == h || null == (l = h.timestamps) ? void 0 : l.start) ? d : null == h ? void 0 : h.created_at,
                playingMembers: w
            });
    }
    let L = 1 === I.length,
        B = [],
        G = new Set(),
        V = new Set();
    for (let e of t) {
        let n = ee(e.id),
            r = j.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = T.Z.getGuild(l);
        if ((V.has(l) && G.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((f = null), (L = !0));
        else {
            let e = R.Z.getVoiceStatesForChannel(r.id),
                a = i()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return A.default.getUser(t);
                    })
                    .filter(D.lm)
                    .orderBy([et], ['desc'])
                    .value();
            a.filter((e) => !v.includes(e.id)).forEach((e) => t.push(e)),
                L ? V.has(l) || (f = null) : ((f = o), (L = !0)),
                V.add(l),
                G.add(n),
                B.push({
                    channel: r,
                    guild: o,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: B,
        isSpotifyActivity: M,
        priorityMembers: I.map((e) => ({
            user: e,
            status: w.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: _,
        guildContext: f,
        currentActivities: ((h = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(W).orderBy([h, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: U
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
    return L && O.Z.isConnected();
}
let ei = i().throttle(() => {
    !(function () {
        var e;
        if (el()) {
            if (
                (H.clear(),
                (V = (G = (function (e) {
                    let t = Y(),
                        n = en.bind(null, t);
                    return i()(e).mapValues(n);
                })(
                    ((e = Array.from(Y()).reduce((e, t) => {
                        let n = A.default.getUser(t);
                        return null == n || n.bot || e.push(n), e;
                    }, [])),
                    i()(e).groupBy((e) => {
                        var t;
                        let n = ee(e.id),
                            r = X(e.id);
                        return null != n ? ''.concat('channel-').concat(n) : (null == r || null == (t = r.party) ? void 0 : t.id) != null ? ''.concat('party-').concat(r.party.id) : ''.concat('user-').concat(e.id);
                    }))
                )
                    .values()
                    .orderBy([er, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                    .value()
                    .filter((e) => {
                        let t = e.partiedMembers.some((e) => _.Z.isBlocked(e.id)),
                            n =
                                0 !== e.voiceChannels.length &&
                                e.voiceChannels.length > 0 &&
                                e.voiceChannels.every((e) => {
                                    let { voiceStates: t } = e;
                                    return Object.values(t).every((e) => !1 === e.discoverable);
                                });
                        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n;
                    })).map((e) => ({
                    type: W.GOo.USER,
                    party: e
                }))),
                H.size > 0)
            ) {
                let e = Array.from(H);
                p.ZP.fetchApplications(e), e.forEach((e) => Q.add(e)), H.clear();
            }
            B = !0;
        }
    })(),
        es.emitChange();
}, 1000);
function eo() {
    return !!el() && (ei(), !1);
}
class ea extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([A.default, g.Z, w.Z, P.Z, R.Z, C.Z, _.Z, I.Z, v.Z], eo), this.waitFor(O.Z, T.Z, g.Z, A.default, v.Z);
    }
    get currentActivityParties() {
        return G;
    }
    get nowPlayingCards() {
        return V;
    }
    get isMounted() {
        return L;
    }
    get loaded() {
        return B;
    }
}
k(ea, 'displayName', 'NowPlayingViewStore');
let es = new ea(a.Z, {
        LOGOUT: function () {
            (L = !1), (G = []), (V = []), H.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (L = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            L = !1;
        }
    }),
    eu = es;

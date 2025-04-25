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
    b = n(656063),
    v = n(761282),
    m = n(814443),
    x = n(789407),
    N = n(630186),
    C = n(250889),
    E = n(199902),
    j = n(592125),
    I = n(480294),
    P = n(831506),
    S = n(731290),
    T = n(430824),
    Z = n(496675),
    _ = n(158776),
    w = n(699516),
    A = n(594174),
    R = n(979651),
    D = n(823379),
    k = n(981631);
function M(e, t, n) {
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
function U(e) {
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
                M(e, t, n[t]);
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
    W = [],
    F = {},
    K = {},
    H = new Set(),
    Q = new Set();
function Y() {
    let e = w.Z.getFriendIDs();
    return new Set(I.Z.hasConsented(k.pjP.PERSONALIZATION) ? [...m.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function X(e) {
    return _.Z.findActivity(e, (e) => e.type !== k.IIU.CUSTOM_STATUS);
}
function z(e) {
    return null == F[e] && (F = L(U({}, F), { [e]: new C.Z({ name: e }) })), F[e];
}
function J(e) {
    return null == K[e] && (K = L(U({}, K), { [e]: new N.Z({ url: e }) })), K[e];
}
function q(e) {
    Q.has(e) || H.add(e);
}
function $(e) {
    if ((0, d.Z)(e)) return x.r9;
    let t = null != e.application_id ? g.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, h.Z)(e) ? z(e.name) : (0, f.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && q(e.application_id), t);
}
function ee(e) {
    let t = R.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && Z.Z.canWithPartialContext(k.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function et(e) {
    return w.Z.isFriend(e.id);
}
function en(e, t, n) {
    var r, l, o, a, d, h;
    let f,
        p = A.default.getCurrentUser(),
        O = null != (r = null == p ? void 0 : p.nsfwAllowed) && r,
        m = t.map((e) => e.id),
        I = t.filter((t) => e.has(t.id)),
        w = !1,
        k = [],
        M = new Set(),
        U = !1,
        L = [];
    for (let e of t) {
        let n = E.Z.getAnyStreamForUser(e.id),
            r = j.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == r ? void 0 : r.isNSFW()) && (!O || !S.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let h = X(e.id);
        if (
            (null != n &&
                L.push({
                    stream: n,
                    streamUser: e,
                    activity: h
                }),
            null == h)
        )
            continue;
        let f = (0, b.Z)(h);
        if (null == f) continue;
        U = f === x.XB;
        let m = (function (e) {
            let t = g.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new y.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === x.XB ? x.r9 : e.startsWith(C.H) ? z(e.slice(C.H.length)) : e.startsWith(N._) ? J(e.slice(N._.length)) : (q(e), null);
        })(f);
        if ((0, c.Z)(h)) {
            let t = (0, s.a)();
            if (
                (0, u.ZP)({
                    activity: h,
                    userId: e.id,
                    application: m,
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
        if (!v.JE(h) || null == m || M.has(m.id)) continue;
        let I = null != h ? $(h) : null;
        (null == I || I.id !== m.id) && (h = null);
        let _ = [];
        (_ =
            null != h && null != h.party && null != h.party.id
                ? Array.from(null != (a = P.Z.getParty(h.party.id)) ? a : []).reduce((e, t) => {
                      let n = A.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? $(t) : null;
                      return null != n && n.id === m.id;
                  })),
            (_ = i().orderBy(_, [et], ['desc'])).length !== t.length && (w = !0),
            M.add(m.id),
            k.push({
                game: m,
                activity: h,
                activityUser: e,
                startedPlayingTime: null != (d = null == h || null == (l = h.timestamps) ? void 0 : l.start) ? d : null == h ? void 0 : h.created_at,
                playingMembers: _
            });
    }
    let B = 1 === I.length,
        G = [],
        V = new Set(),
        W = new Set();
    for (let e of t) {
        let n = ee(e.id),
            r = j.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = T.Z.getGuild(l);
        if ((W.has(l) && V.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((f = null), (B = !0));
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
            a.filter((e) => !m.includes(e.id)).forEach((e) => t.push(e)),
                B ? W.has(l) || (f = null) : ((f = o), (B = !0)),
                W.add(l),
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
        isSpotifyActivity: U,
        priorityMembers: I.map((e) => ({
            user: e,
            status: _.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: w,
        guildContext: f,
        currentActivities: ((h = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(k).orderBy([h, (e) => e.game.name], ['desc', 'asc'])).value(),
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
                (H.clear(),
                (W = (V = (function (e) {
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
                        let t = e.partiedMembers.some((e) => w.Z.isBlocked(e.id)),
                            n =
                                0 !== e.voiceChannels.length &&
                                e.voiceChannels.length > 0 &&
                                e.voiceChannels.every((e) => {
                                    let { voiceStates: t } = e;
                                    return Object.values(t).every((e) => !1 === e.discoverable);
                                });
                        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n;
                    })).map((e) => ({
                    type: k.GOo.USER,
                    party: e
                }))),
                H.size > 0)
            ) {
                let e = Array.from(H);
                p.ZP.fetchApplications(e), e.forEach((e) => Q.add(e)), H.clear();
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
        this.syncWith([A.default, g.Z, _.Z, P.Z, R.Z, E.Z, w.Z, I.Z, m.Z], eo), this.waitFor(O.Z, T.Z, g.Z, A.default, m.Z);
    }
    get currentActivityParties() {
        return V;
    }
    get nowPlayingCards() {
        return W;
    }
    get isMounted() {
        return B;
    }
    get loaded() {
        return G;
    }
}
M(ea, 'displayName', 'NowPlayingViewStore');
let es = new ea(a.Z, {
        LOGOUT: function () {
            (B = !1), (V = []), (W = []), H.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (B = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            B = !1;
        }
    }),
    eu = es;

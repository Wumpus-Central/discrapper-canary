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
    O = n(710845),
    y = n(38618),
    N = n(656063),
    b = n(761282),
    v = n(814443),
    m = n(789407),
    E = n(630186),
    C = n(250889),
    x = n(199902),
    I = n(592125),
    T = n(480294),
    S = n(831506),
    P = n(731290),
    j = n(430824),
    Z = n(496675),
    A = n(158776),
    _ = n(699516),
    w = n(594174),
    R = n(979651),
    D = n(823379),
    U = n(981631);
function L(e, t, n) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
    V = !1,
    G = [],
    F = [],
    W = {},
    H = {},
    Y = new Set(),
    K = new Set();
function Q() {
    let e = _.Z.getFriendIDs();
    return new Set(T.Z.hasConsented(U.pjP.PERSONALIZATION) ? [...v.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function z(e) {
    return A.Z.findActivity(e, (e) => e.type !== U.IIU.CUSTOM_STATUS);
}
function X(e) {
    return null == W[e] && (W = k(M({}, W), { [e]: new C.Z({ name: e }) })), W[e];
}
function J(e) {
    return null == H[e] && (H = k(M({}, H), { [e]: new E.Z({ url: e }) })), H[e];
}
function q(e) {
    K.has(e) || Y.add(e);
}
function $(e) {
    if ((0, d.Z)(e)) return m.r9;
    let t = null != e.application_id ? g.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, f.Z)(e) ? X(e.name) : (0, h.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && q(e.application_id), t);
}
function ee(e) {
    let t = R.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && Z.Z.canWithPartialContext(U.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function et(e) {
    return _.Z.isFriend(e.id);
}
function en(e, t, n) {
    var r, l, o, a, d, f;
    let h,
        p = w.default.getCurrentUser(),
        y = null != (r = null == p ? void 0 : p.nsfwAllowed) && r,
        v = t.map((e) => e.id),
        T = t.filter((t) => e.has(t.id)),
        _ = !1,
        U = [],
        L = new Set(),
        M = !1,
        k = [];
    for (let e of t) {
        let n = x.Z.getAnyStreamForUser(e.id),
            r = I.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == r ? void 0 : r.isNSFW()) && (!y || !P.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let f = z(e.id);
        if (
            (null != n &&
                k.push({
                    stream: n,
                    streamUser: e,
                    activity: f
                }),
            null == f)
        )
            continue;
        let h = (0, N.Z)(f);
        if (null == h) continue;
        M = h === m.XB;
        let v = (function (e) {
            let t = g.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new O.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === m.XB ? m.r9 : e.startsWith(C.H) ? X(e.slice(C.H.length)) : e.startsWith(E._) ? J(e.slice(E._.length)) : (q(e), null);
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
                    PermissionStore: Z.Z,
                    GuildStore: j.Z
                }) !== u.Fw.CAN_JOIN
            )
                continue;
        }
        if (!b.JE(f) || null == v || L.has(v.id)) continue;
        let T = null != f ? $(f) : null;
        (null == T || T.id !== v.id) && (f = null);
        let A = [];
        (A =
            null != f && null != f.party && null != f.party.id
                ? Array.from(null != (a = S.Z.getParty(f.party.id)) ? a : []).reduce((e, t) => {
                      let n = w.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = z(e.id),
                          n = null != t ? $(t) : null;
                      return null != n && n.id === v.id;
                  })),
            (A = i().orderBy(A, [et], ['desc'])).length !== t.length && (_ = !0),
            L.add(v.id),
            U.push({
                game: v,
                activity: f,
                activityUser: e,
                startedPlayingTime: null != (d = null == f || null == (l = f.timestamps) ? void 0 : l.start) ? d : null == f ? void 0 : f.created_at,
                playingMembers: A
            });
    }
    let B = 1 === T.length,
        V = [],
        G = new Set(),
        F = new Set();
    for (let e of t) {
        let n = ee(e.id),
            r = I.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = j.Z.getGuild(l);
        if ((F.has(l) && G.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((h = null), (B = !0));
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
                G.add(n),
                V.push({
                    channel: r,
                    guild: o,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: M,
        priorityMembers: T.map((e) => ({
            user: e,
            status: A.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: _,
        guildContext: h,
        currentActivities: ((f = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(U).orderBy([f, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: k
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
    return B && y.Z.isConnected();
}
let ei = i().throttle(() => {
    !(function () {
        var e;
        if (el()) {
            if (
                (Y.clear(),
                (F = (G = (function (e) {
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
                    type: U.GOo.USER,
                    party: e
                }))),
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                p.ZP.fetchApplications(e), e.forEach((e) => K.add(e)), Y.clear();
            }
            V = !0;
        }
    })(),
        es.emitChange();
}, 1000);
function eo() {
    return !!el() && (ei(), !1);
}
class ea extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([w.default, g.Z, A.Z, S.Z, R.Z, x.Z, _.Z, T.Z, v.Z], eo), this.waitFor(y.Z, j.Z, g.Z, w.default, v.Z);
    }
    get currentActivityParties() {
        return G;
    }
    get nowPlayingCards() {
        return F;
    }
    get isMounted() {
        return B;
    }
    get loaded() {
        return V;
    }
}
L(ea, 'displayName', 'NowPlayingViewStore');
let es = new ea(a.Z, {
        LOGOUT: function () {
            (B = !1), (G = []), (F = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (B = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            B = !1;
        }
    }),
    eu = es;

n.d(t, { Z: () => eu }), n(388685), n(539854);
var l,
    r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(782769),
    u = n(527805),
    c = n(841784),
    d = n(503438),
    f = n(802856),
    h = n(420660),
    g = n(728345),
    p = n(812206),
    y = n(710845),
    O = n(38618),
    m = n(656063),
    v = n(761282),
    E = n(814443),
    b = n(789407),
    N = n(630186),
    C = n(250889),
    x = n(199902),
    I = n(592125),
    S = n(480294),
    T = n(831506),
    P = n(731290),
    _ = n(430824),
    Z = n(496675),
    j = n(158776),
    A = n(699516),
    w = n(594174),
    R = n(979651),
    D = n(823379),
    M = n(981631);
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
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = !1,
    V = !1,
    B = [],
    F = [],
    W = {},
    H = {},
    z = new Set(),
    K = new Set();
function Y() {
    let e = A.Z.getFriendIDs();
    return new Set(S.Z.hasConsented(M.pjP.PERSONALIZATION) ? [...E.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function Q(e) {
    return j.Z.findActivity(e, (e) => e.type !== M.IIU.CUSTOM_STATUS);
}
function X(e) {
    return null == W[e] && (W = L(U({}, W), { [e]: new C.Z({ name: e }) })), W[e];
}
function J(e) {
    return null == H[e] && (H = L(U({}, H), { [e]: new N.Z({ url: e }) })), H[e];
}
function q(e) {
    K.has(e) || z.add(e);
}
function $(e) {
    if ((0, d.Z)(e)) return b.r9;
    let t = null != e.application_id ? p.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, f.Z)(e) ? X(e.name) : (0, h.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && q(e.application_id), t);
}
function ee(e) {
    let t = R.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && Z.Z.canWithPartialContext(M.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function et(e) {
    return A.Z.isFriend(e.id);
}
function en(e, t, n) {
    var l, r, a, o, d, f;
    let h,
        g = w.default.getCurrentUser(),
        O = null != (l = null == g ? void 0 : g.nsfwAllowed) && l,
        E = t.map((e) => e.id),
        S = t.filter((t) => e.has(t.id)),
        A = !1,
        M = [],
        k = new Set(),
        U = !1,
        L = [];
    for (let e of t) {
        let n = x.Z.getAnyStreamForUser(e.id),
            l = I.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == l ? void 0 : l.isNSFW()) && (!O || !P.Z.didAgree(null == l ? void 0 : l.getGuildId()))) continue;
        let f = Q(e.id);
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
        let h = (0, m.Z)(f);
        if (null == h) continue;
        U = h === b.XB;
        let E = (function (e) {
            let t = p.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new y.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === b.XB ? b.r9 : e.startsWith(C.H) ? X(e.slice(C.H.length)) : e.startsWith(N._) ? J(e.slice(N._.length)) : (q(e), null);
        })(h);
        if ((0, c.Z)(f)) {
            let t = (0, s.a)();
            if (
                (0, u.ZP)({
                    activity: f,
                    userId: e.id,
                    application: E,
                    channelId: null == (a = R.Z.getVoiceStateForUser(e.id)) ? void 0 : a.channelId,
                    currentUser: g,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: I.Z,
                    VoiceStateStore: R.Z,
                    PermissionStore: Z.Z,
                    GuildStore: _.Z
                }) !== u.Fw.CAN_JOIN
            )
                continue;
        }
        if (!v.JE(f) || null == E || k.has(E.id)) continue;
        let S = null != f ? $(f) : null;
        (null == S || S.id !== E.id) && (f = null);
        let j = [];
        (j =
            null != f && null != f.party && null != f.party.id
                ? Array.from(null != (o = T.Z.getParty(f.party.id)) ? o : []).reduce((e, t) => {
                      let n = w.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = Q(e.id),
                          n = null != t ? $(t) : null;
                      return null != n && n.id === E.id;
                  })),
            (j = i().orderBy(j, [et], ['desc'])).length !== t.length && (A = !0),
            k.add(E.id),
            M.push({
                game: E,
                activity: f,
                activityUser: e,
                startedPlayingTime: null != (d = null == f || null == (r = f.timestamps) ? void 0 : r.start) ? d : null == f ? void 0 : f.created_at,
                playingMembers: j
            });
    }
    let G = 1 === S.length,
        V = [],
        B = new Set(),
        F = new Set();
    for (let e of t) {
        let n = ee(e.id),
            l = I.Z.getChannel(n),
            r = null != l ? l.getGuildId() : null,
            a = _.Z.getGuild(r);
        if ((F.has(r) && B.has(n)) || null == l || null == a || l.id === a.afkChannelId) null == l && ((h = null), (G = !0));
        else {
            let e = R.Z.getVoiceStatesForChannel(l.id),
                o = i()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return w.default.getUser(t);
                    })
                    .filter(D.lm)
                    .orderBy([et], ['desc'])
                    .value();
            o.filter((e) => !E.includes(e.id)).forEach((e) => t.push(e)),
                G ? F.has(r) || (h = null) : ((h = a), (G = !0)),
                F.add(r),
                B.add(n),
                V.push({
                    channel: l,
                    guild: a,
                    members: o,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: U,
        priorityMembers: S.map((e) => ({
            user: e,
            status: j.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: A,
        guildContext: h,
        currentActivities: ((f = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(M).orderBy([f, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: L
    };
}
function el(e) {
    return (
        0 !== e.voiceChannels.length &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function er() {
    return G && O.Z.isConnected();
}
let ei = i().throttle(() => {
    !(function () {
        var e;
        if (er()) {
            if (
                (z.clear(),
                (F = (B = (function (e) {
                    let t = Y(),
                        n = en.bind(null, t);
                    return i()(e).mapValues(n);
                })(
                    ((e = Array.from(Y()).reduce((e, t) => {
                        let n = w.default.getUser(t);
                        return null == n || n.bot || e.push(n), e;
                    }, [])),
                    i()(e).groupBy((e) => {
                        var t;
                        let n = ee(e.id),
                            l = Q(e.id);
                        return null != n ? ''.concat('channel-').concat(n) : (null == l || null == (t = l.party) ? void 0 : t.id) != null ? ''.concat('party-').concat(l.party.id) : ''.concat('user-').concat(e.id);
                    }))
                )
                    .values()
                    .orderBy([el, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                    .value()
                    .filter((e) => {
                        let t = e.partiedMembers.some((e) => A.Z.isBlocked(e.id)),
                            n =
                                0 !== e.voiceChannels.length &&
                                e.voiceChannels.length > 0 &&
                                e.voiceChannels.every((e) => {
                                    let { voiceStates: t } = e;
                                    return Object.values(t).every((e) => !1 === e.discoverable);
                                });
                        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n;
                    })).map((e) => ({
                    type: M.GOo.USER,
                    party: e
                }))),
                z.size > 0)
            ) {
                let e = Array.from(z);
                g.ZP.fetchApplications(e), e.forEach((e) => K.add(e)), z.clear();
            }
            V = !0;
        }
    })(),
        es.emitChange();
}, 1000);
function ea() {
    return !!er() && (ei(), !1);
}
class eo extends (l = a.ZP.Store) {
    initialize() {
        this.syncWith([w.default, p.Z, j.Z, T.Z, R.Z, x.Z, A.Z, S.Z, E.Z], ea), this.waitFor(O.Z, _.Z, p.Z, w.default, E.Z);
    }
    get currentActivityParties() {
        return B;
    }
    get nowPlayingCards() {
        return F;
    }
    get isMounted() {
        return G;
    }
    get loaded() {
        return V;
    }
}
k(eo, 'displayName', 'NowPlayingViewStore');
let es = new eo(o.Z, {
        LOGOUT: function () {
            (G = !1), (B = []), (F = []), z.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (G = !0), ei();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            G = !1;
        }
    }),
    eu = es;

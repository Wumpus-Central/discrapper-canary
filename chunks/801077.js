(n.d(t, { Z: () => eu }), n(388685), n(539854));
var r,
    l = n(392711),
    i = n.n(l),
    o = n(442837),
    a = n(570140),
    s = n(790920),
    c = n(527805),
    u = n(841784),
    d = n(503438),
    f = n(802856),
    h = n(420660),
    p = n(622822),
    g = n(728345),
    y = n(812206),
    O = n(710845),
    b = n(38618),
    v = n(656063),
    m = n(761282),
    N = n(752048),
    x = n(789407),
    E = n(630186),
    C = n(250889),
    I = n(199902),
    T = n(592125),
    j = n(480294),
    S = n(831506),
    P = n(731290),
    _ = n(430824),
    Z = n(496675),
    A = n(158776),
    w = n(699516),
    R = n(594174),
    D = n(979651),
    U = n(823379),
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
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            }));
    }
    return e;
}
function B(e, t) {
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
let G = !1,
    V = !1,
    F = [],
    W = [],
    K = {},
    H = {},
    Y = new Set(),
    Q = new Set();
function z() {
    let e = w.Z.getFriendIDs();
    return new Set(j.Z.hasConsented(k.pjP.PERSONALIZATION) ? [...N.Z.getUserAffinities().map((e) => e.otherUserId), ...e] : e);
}
function X(e) {
    return A.Z.findActivity(e, (e) => e.type !== k.IIU.CUSTOM_STATUS);
}
function J(e) {
    return (null == K[e] && (K = B(L({}, K), { [e]: new C.Z({ name: e }) })), K[e]);
}
function q(e) {
    return (null == H[e] && (H = B(L({}, H), { [e]: new E.Z({ url: e }) })), H[e]);
}
function $(e) {
    Q.has(e) || Y.add(e);
}
function ee(e) {
    if ((0, d.Z)(e)) return x.r9;
    let t = null != e.application_id ? y.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, f.Z)(e) ? J(e.name) : (0, h.Z)(e) && null != e.url ? q(e.url) : (null != e.application_id && $(e.application_id), t);
}
function et(e) {
    let t = D.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && Z.Z.canWithPartialContext(k.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function en(e) {
    return w.Z.isFriend(e.id);
}
function er(e, t, n) {
    var r, l, o, a, d, f;
    let h,
        g = R.default.getCurrentUser(),
        b = null != (r = null == g ? void 0 : g.nsfwAllowed) && r,
        N = t.map((e) => e.id),
        j = t.filter((t) => e.has(t.id)),
        w = !1,
        k = [],
        M = new Set(),
        L = !1,
        B = [];
    for (let e of t) {
        let n = I.Z.getAnyStreamForUser(e.id),
            r = T.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((0, p.aC)(r) && (!b || !P.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let f = X(e.id);
        if (
            (null != n &&
                B.push({
                    stream: n,
                    streamUser: e,
                    activity: f
                }),
            null == f)
        )
            continue;
        let h = (0, v.Z)(f);
        if (null == h) continue;
        L = h === x.XB;
        let N = (function (e) {
            let t = y.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new O.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === x.XB ? x.r9 : e.startsWith(C.H) ? J(e.slice(C.H.length)) : e.startsWith(E._) ? q(e.slice(E._.length)) : ($(e), null);
        })(h);
        if ((0, u.Z)(f)) {
            let t = (0, s.a)();
            if (
                (0, c.ZP)({
                    activity: f,
                    userId: e.id,
                    application: N,
                    channelId: null == (o = D.Z.getVoiceStateForUser(e.id)) ? void 0 : o.channelId,
                    currentUser: g,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: T.Z,
                    VoiceStateStore: D.Z,
                    PermissionStore: Z.Z,
                    GuildStore: _.Z
                }) !== c.Fw.CAN_JOIN
            )
                continue;
        }
        if (!m.JE(f) || null == N || M.has(N.id)) continue;
        let j = null != f ? ee(f) : null;
        (null == j || j.id !== N.id) && (f = null);
        let A = [];
        ((A =
            null != f && null != f.party && null != f.party.id
                ? Array.from(null != (a = S.Z.getParty(f.party.id)) ? a : []).reduce((e, t) => {
                      let n = R.default.getUser(t);
                      return (null != n && e.push(n), e);
                  }, [])
                : t.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? ee(t) : null;
                      return null != n && n.id === N.id;
                  })),
            (A = i().orderBy(A, [en], ['desc'])).length !== t.length && (w = !0),
            M.add(N.id),
            k.push({
                game: N,
                activity: f,
                activityUser: e,
                startedPlayingTime: null != (d = null == f || null == (l = f.timestamps) ? void 0 : l.start) ? d : null == f ? void 0 : f.created_at,
                playingMembers: A
            }));
    }
    let G = 1 === j.length,
        V = [],
        F = new Set(),
        W = new Set();
    for (let e of t) {
        let n = et(e.id),
            r = T.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = _.Z.getGuild(l);
        if ((W.has(l) && F.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((h = null), (G = !0));
        else {
            let e = D.Z.getVoiceStatesForChannel(r.id),
                a = i()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return R.default.getUser(t);
                    })
                    .filter(U.lm)
                    .orderBy([en], ['desc'])
                    .value();
            (a.filter((e) => !N.includes(e.id)).forEach((e) => t.push(e)),
                G ? W.has(l) || (h = null) : ((h = o), (G = !0)),
                W.add(l),
                F.add(n),
                V.push({
                    channel: r,
                    guild: o,
                    members: a,
                    voiceStates: e
                }));
        }
    }
    return {
        id: n,
        voiceChannels: V,
        isSpotifyActivity: L,
        priorityMembers: j.map((e) => ({
            user: e,
            status: A.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: w,
        guildContext: h,
        currentActivities: ((f = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(k).orderBy([f, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: B
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
function ei() {
    return G && b.Z.isConnected();
}
let eo = i().throttle(() => {
    (!(function () {
        var e;
        if (ei()) {
            if (
                (Y.clear(),
                (W = (F = (function (e) {
                    let t = z(),
                        n = er.bind(null, t);
                    return i()(e).mapValues(n);
                })(
                    ((e = Array.from(z()).reduce((e, t) => {
                        let n = R.default.getUser(t);
                        return (null == n || n.bot || e.push(n), e);
                    }, [])),
                    i()(e).groupBy((e) => {
                        var t;
                        let n = et(e.id),
                            r = X(e.id);
                        return null != n ? ''.concat('channel-').concat(n) : (null == r || null == (t = r.party) ? void 0 : t.id) != null ? ''.concat('party-').concat(r.party.id) : ''.concat('user-').concat(e.id);
                    }))
                )
                    .values()
                    .orderBy([el, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                    .value()
                    .filter((e) => {
                        let t = e.partiedMembers.some((e) => w.Z.isBlockedOrIgnored(e.id)),
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
                Y.size > 0)
            ) {
                let e = Array.from(Y);
                (g.ZP.fetchApplications(e), e.forEach((e) => Q.add(e)), Y.clear());
            }
            V = !0;
        }
    })(),
        ec.emitChange());
}, 1000);
function ea() {
    return !!ei() && (eo(), !1);
}
class es extends (r = o.ZP.Store) {
    initialize() {
        (this.syncWith([R.default, y.Z, A.Z, S.Z, D.Z, I.Z, w.Z, j.Z, N.Z], ea), this.waitFor(b.Z, _.Z, y.Z, R.default, N.Z));
    }
    get currentActivityParties() {
        return F;
    }
    get nowPlayingCards() {
        return W;
    }
    get isMounted() {
        return G;
    }
    get loaded() {
        return V;
    }
}
M(es, 'displayName', 'NowPlayingViewStore');
let ec = new es(a.Z, {
        LOGOUT: function () {
            ((G = !1), (F = []), (W = []), Y.clear());
        },
        NOW_PLAYING_MOUNTED: function () {
            ((G = !0), eo());
        },
        NOW_PLAYING_UNMOUNTED: function () {
            G = !1;
        }
    }),
    eu = ec;

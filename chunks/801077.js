n.d(t, { Z: () => ep }), n(47120), n(653041), n(627341);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(278074),
    a = n(442837),
    s = n(570140),
    c = n(782769),
    u = n(527805),
    d = n(841784),
    h = n(503438),
    f = n(802856),
    p = n(420660),
    g = n(728345),
    N = n(812206),
    v = n(750881),
    O = n(710845),
    y = n(38618),
    m = n(656063),
    b = n(761282),
    x = n(814443),
    C = n(789407),
    I = n(630186),
    E = n(250889),
    T = n(199902),
    j = n(592125),
    w = n(480294),
    P = n(831506),
    S = n(731290),
    Z = n(430824),
    _ = n(496675),
    A = n(158776),
    R = n(699516),
    k = n(594174),
    D = n(979651),
    W = n(626135),
    F = n(823379),
    M = n(981631);
function B(e, t, n) {
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
                B(e, t, n[t]);
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
let V = !1,
    G = !1,
    H = [],
    K = [],
    Q = {},
    z = {},
    Y = new Set(),
    X = new Set();
function J() {
    let e = R.Z.getFriendIDs();
    return new Set(w.Z.hasConsented(M.pjP.PERSONALIZATION) ? [...x.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function q(e) {
    return A.Z.findActivity(e, (e) => e.type !== M.IIU.CUSTOM_STATUS);
}
function $(e) {
    return null == Q[e] && (Q = L(U({}, Q), { [e]: new E.Z({ name: e }) })), Q[e];
}
function ee(e) {
    return null == z[e] && (z = L(U({}, z), { [e]: new I.Z({ url: e }) })), z[e];
}
function et(e) {
    X.has(e) || Y.add(e);
}
function en(e) {
    if ((0, h.Z)(e)) return C.r9;
    let t = null != e.application_id ? N.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, f.Z)(e) ? $(e.name) : (0, p.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t);
}
function er(e) {
    let t = D.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && _.Z.canWithPartialContext(M.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return R.Z.isFriend(e.id);
}
function ei(e, t, n) {
    var r, l, o, a, s;
    let h;
    let f = k.default.getCurrentUser(),
        p = null !== (r = null == f ? void 0 : f.nsfwAllowed) && void 0 !== r && r,
        g = t.map((e) => e.id),
        v = t.filter((t) => e.has(t.id)),
        y = !1,
        x = [],
        w = new Set(),
        R = !1,
        W = [];
    for (let e of t) {
        let n = T.Z.getAnyStreamForUser(e.id),
            r = j.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == r ? void 0 : r.isNSFW()) && (!p || !S.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let s = q(e.id);
        if (
            (null != n &&
                W.push({
                    stream: n,
                    streamUser: e,
                    activity: s
                }),
            null == s)
        )
            continue;
        let h = (0, m.Z)(s);
        if (null == h) continue;
        R = h === C.XB;
        let g = (function (e) {
                let t = N.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new O.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === C.XB ? C.r9 : e.startsWith(E.H) ? $(e.slice(E.H.length)) : e.startsWith(I._) ? ee(e.slice(I._.length)) : (et(e), null);
            })(h),
            v = null === (l = s.timestamps) || void 0 === l ? void 0 : l.start;
        if ((0, d.Z)(s)) {
            let t = (0, c.a)();
            if (
                (0, u.ZP)({
                    activity: s,
                    userId: e.id,
                    application: g,
                    channelId: null === (o = D.Z.getVoiceStateForUser(e.id)) || void 0 === o ? void 0 : o.channelId,
                    currentUser: f,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: j.Z,
                    VoiceStateStore: D.Z,
                    PermissionStore: _.Z,
                    GuildStore: Z.Z
                }) !== u.Fw.CAN_JOIN
            )
                continue;
        } else if (null == v) continue;
        if (!b.JE(s) || null == g || w.has(g.id)) continue;
        let A = null != s ? en(s) : null;
        (null == A || A.id !== g.id) && (s = null);
        let F = [];
        (F =
            null != s && null != s.party && null != s.party.id
                ? Array.from(null !== (a = P.Z.getParty(s.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
                      let n = k.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = q(e.id),
                          n = null != t ? en(t) : null;
                      return null != n && n.id === g.id;
                  })),
            (F = i().orderBy(F, [el], ['desc'])).length !== t.length && (y = !0),
            w.add(g.id),
            x.push({
                game: g,
                activity: s,
                activityUser: e,
                startedPlayingTime: v,
                playingMembers: F
            });
    }
    let M = 1 === v.length,
        B = [],
        U = new Set(),
        L = new Set();
    for (let e of t) {
        let n = er(e.id),
            r = j.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = Z.Z.getGuild(l);
        if ((L.has(l) && U.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((h = null), (M = !0));
        else {
            let e = D.Z.getVoiceStatesForChannel(r.id),
                a = i()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return k.default.getUser(t);
                    })
                    .filter(F.lm)
                    .orderBy([el], ['desc'])
                    .value();
            a.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
                M ? L.has(l) || (h = null) : ((h = o), (M = !0)),
                L.add(l),
                U.add(n),
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
        isSpotifyActivity: R,
        priorityMembers: v.map((e) => ({
            user: e,
            status: A.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: y,
        guildContext: h,
        currentActivities: ((s = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        i()(x).orderBy([s, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: W
    };
}
function eo(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, v.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ea(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, v.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function es(e) {
    return !!(0, v.sb)('now-playing-view-store') && e.partiedMembers.some((e) => R.Z.isBlocked(e.id));
}
function ec() {
    return V && y.Z.isConnected();
}
let eu = i().throttle(() => {
    !(function () {
        var e;
        if (!ec()) return;
        Y.clear();
        let t = (function (e) {
                let t = J(),
                    n = ei.bind(null, t);
                return i()(e).mapValues(n);
            })(
                ((e = Array.from(J()).reduce((e, t) => {
                    let n = k.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                i()(e).groupBy((e) => {
                    var t;
                    let n = er(e.id),
                        r = q(e.id);
                    return null != n ? ''.concat('channel-', '-').concat(n) : (null == r ? void 0 : null === (t = r.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(r.party.id) : ''.concat('user-', '-').concat(e.id);
                }))
            )
                .values()
                .orderBy([eo, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: r, analyticsEligible: l } = (0, v.p7)('now-playing-view-store');
        l &&
            t.forEach((e) => {
                let t = (0, o.EQ)({
                    party: e,
                    blockeeExperimentEnabled: n,
                    blockerExperimentEnabled: r
                })
                    .returnType()
                    .with(
                        {
                            blockerExperimentEnabled: !0,
                            party: o.P.when(es)
                        },
                        () => v.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: o.P.when(ea)
                        },
                        () => v.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: o.P.when(eo)
                        },
                        () => v.h9.DERANK
                    )
                    .otherwise(() => v.h9.SHOW);
                e.voiceChannels.forEach((e) => {
                    let { voiceStates: n, channel: r } = e,
                        l = i().map(n, 'userId'),
                        o = i().map(n, 'discoverable'),
                        a = i().map(n, (e) => R.Z.getRelationshipType(e.userId));
                    W.default.track(M.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                        activity_user_ids: l,
                        discoverable: o,
                        relationship_types: a,
                        voice_channel_id: r.id,
                        treatment: t,
                        surface: 'now-playing'
                    });
                });
            }),
            (K = (H = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, v.p7)('now-playing-view-store'),
                    r = n && es(e),
                    l = t && ea(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !r && !l;
            })).map((e) => ({
                type: M.GOo.USER,
                party: e
            }))),
            (function () {
                if (Y.size > 0) {
                    let e = Array.from(Y);
                    g.ZP.fetchApplications(e), e.forEach((e) => X.add(e)), Y.clear();
                }
            })(),
            (G = !0);
    })(),
        ef.emitChange();
}, 1000);
function ed() {
    return !!ec() && (eu(), !1);
}
class eh extends (r = a.ZP.Store) {
    initialize() {
        this.syncWith([k.default, N.Z, A.Z, P.Z, D.Z, T.Z, R.Z, w.Z, x.Z], ed), this.waitFor(y.Z, Z.Z, N.Z, k.default, x.Z);
    }
    get currentActivityParties() {
        return H;
    }
    get nowPlayingCards() {
        return K;
    }
    get isMounted() {
        return V;
    }
    get loaded() {
        return G;
    }
}
B(eh, 'displayName', 'NowPlayingViewStore');
let ef = new eh(s.Z, {
        LOGOUT: function () {
            (V = !1), (H = []), (K = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (V = !0), eu();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            V = !1;
        }
    }),
    ep = ef;

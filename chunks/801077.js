n.d(t, { Z: () => ef }), n(388685), n(539854), n(314940);
var r,
    l = n(392711),
    i = n.n(l),
    o = n(278074),
    a = n(442837),
    s = n(570140),
    u = n(782769),
    c = n(527805),
    d = n(841784),
    h = n(503438),
    p = n(802856),
    f = n(420660),
    g = n(728345),
    y = n(812206),
    O = n(750881),
    N = n(710845),
    b = n(38618),
    v = n(656063),
    m = n(761282),
    x = n(814443),
    E = n(789407),
    C = n(630186),
    I = n(250889),
    j = n(199902),
    P = n(592125),
    S = n(480294),
    T = n(831506),
    w = n(731290),
    Z = n(430824),
    _ = n(496675),
    A = n(158776),
    R = n(699516),
    D = n(594174),
    W = n(979651),
    k = n(626135),
    M = n(823379),
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
function B(e) {
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
function V(e, t) {
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
    F = !1,
    K = [],
    H = [],
    Q = {},
    Y = {},
    X = new Set(),
    z = new Set();
function J() {
    let e = R.Z.getFriendIDs();
    return new Set(S.Z.hasConsented(U.pjP.PERSONALIZATION) ? [...x.Z.getUserAffinitiesUserIds(), ...e] : e);
}
function q(e) {
    return A.Z.findActivity(e, (e) => e.type !== U.IIU.CUSTOM_STATUS);
}
function $(e) {
    return null == Q[e] && (Q = V(B({}, Q), { [e]: new I.Z({ name: e }) })), Q[e];
}
function ee(e) {
    return null == Y[e] && (Y = V(B({}, Y), { [e]: new C.Z({ url: e }) })), Y[e];
}
function et(e) {
    z.has(e) || X.add(e);
}
function en(e) {
    if ((0, h.Z)(e)) return E.r9;
    let t = null != e.application_id ? y.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, p.Z)(e) ? $(e.name) : (0, f.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t);
}
function er(e) {
    let t = W.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && _.Z.canWithPartialContext(U.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return R.Z.isFriend(e.id);
}
function ei(e, t, n) {
    var r, l, o, a, s, h;
    let p,
        f = D.default.getCurrentUser(),
        g = null != (r = null == f ? void 0 : f.nsfwAllowed) && r,
        O = t.map((e) => e.id),
        b = t.filter((t) => e.has(t.id)),
        x = !1,
        S = [],
        R = new Set(),
        k = !1,
        U = [];
    for (let e of t) {
        let n = j.Z.getAnyStreamForUser(e.id),
            r = P.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == r ? void 0 : r.isNSFW()) && (!g || !w.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
        let h = q(e.id);
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
        let p = (0, v.Z)(h);
        if (null == p) continue;
        k = p === E.XB;
        let O = (function (e) {
            let t = y.Z.getApplication(e);
            return null != t ? t : 'string' != typeof e ? (new N.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === E.XB ? E.r9 : e.startsWith(I.H) ? $(e.slice(I.H.length)) : e.startsWith(C._) ? ee(e.slice(C._.length)) : (et(e), null);
        })(p);
        if ((0, d.Z)(h)) {
            let t = (0, u.a)();
            if (
                (0, c.ZP)({
                    activity: h,
                    userId: e.id,
                    application: O,
                    channelId: null == (o = W.Z.getVoiceStateForUser(e.id)) ? void 0 : o.channelId,
                    currentUser: f,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: P.Z,
                    VoiceStateStore: W.Z,
                    PermissionStore: _.Z,
                    GuildStore: Z.Z
                }) !== c.Fw.CAN_JOIN
            )
                continue;
        }
        if (!m.JE(h) || null == O || R.has(O.id)) continue;
        let b = null != h ? en(h) : null;
        (null == b || b.id !== O.id) && (h = null);
        let A = [];
        (A =
            null != h && null != h.party && null != h.party.id
                ? Array.from(null != (a = T.Z.getParty(h.party.id)) ? a : []).reduce((e, t) => {
                      let n = D.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = q(e.id),
                          n = null != t ? en(t) : null;
                      return null != n && n.id === O.id;
                  })),
            (A = i().orderBy(A, [el], ['desc'])).length !== t.length && (x = !0),
            R.add(O.id),
            S.push({
                game: O,
                activity: h,
                activityUser: e,
                startedPlayingTime: null != (s = null == h || null == (l = h.timestamps) ? void 0 : l.start) ? s : null == h ? void 0 : h.created_at,
                playingMembers: A
            });
    }
    let L = 1 === b.length,
        B = [],
        V = new Set(),
        G = new Set();
    for (let e of t) {
        let n = er(e.id),
            r = P.Z.getChannel(n),
            l = null != r ? r.getGuildId() : null,
            o = Z.Z.getGuild(l);
        if ((G.has(l) && V.has(n)) || null == r || null == o || r.id === o.afkChannelId) null == r && ((p = null), (L = !0));
        else {
            let e = W.Z.getVoiceStatesForChannel(r.id),
                a = i()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return D.default.getUser(t);
                    })
                    .filter(M.lm)
                    .orderBy([el], ['desc'])
                    .value();
            a.filter((e) => !O.includes(e.id)).forEach((e) => t.push(e)),
                L ? G.has(l) || (p = null) : ((p = o), (L = !0)),
                G.add(l),
                V.add(n),
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
        isSpotifyActivity: k,
        priorityMembers: b.map((e) => ({
            user: e,
            status: A.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: x,
        guildContext: p,
        currentActivities: ((h = (e) => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0;
        }),
        i()(S).orderBy([h, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: U
    };
}
function eo(e) {
    return (
        0 !== e.voiceChannels.length &&
        !!(0, O.$W)('now-playing-view-store') &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ea(e) {
    return (
        0 !== e.voiceChannels.length &&
        !!(0, O.$W)('now-playing-view-store') &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function es(e) {
    return !!(0, O.sb)('now-playing-view-store') && e.partiedMembers.some((e) => R.Z.isBlocked(e.id));
}
function eu() {
    return G && b.Z.isConnected();
}
let ec = i().throttle(() => {
    !(function () {
        var e;
        if (!eu()) return;
        X.clear();
        let t = (function (e) {
                let t = J(),
                    n = ei.bind(null, t);
                return i()(e).mapValues(n);
            })(
                ((e = Array.from(J()).reduce((e, t) => {
                    let n = D.default.getUser(t);
                    return null == n || n.bot || e.push(n), e;
                }, [])),
                i()(e).groupBy((e) => {
                    var t;
                    let n = er(e.id),
                        r = q(e.id);
                    return null != n ? ''.concat('channel-').concat(n) : (null == r || null == (t = r.party) ? void 0 : t.id) != null ? ''.concat('party-').concat(r.party.id) : ''.concat('user-').concat(e.id);
                }))
            )
                .values()
                .orderBy([eo, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: r, analyticsEligible: l } = (0, O.p7)('now-playing-view-store');
        if (
            (l &&
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
                            () => O.h9.HIDE
                        )
                        .with(
                            {
                                blockeeExperimentEnabled: !0,
                                party: o.P.when(ea)
                            },
                            () => O.h9.HIDE
                        )
                        .with(
                            {
                                blockeeExperimentEnabled: !0,
                                party: o.P.when(eo)
                            },
                            () => O.h9.DERANK
                        )
                        .otherwise(() => O.h9.SHOW);
                    e.voiceChannels.forEach((e) => {
                        let { voiceStates: n, channel: r } = e,
                            l = i().map(n, 'userId'),
                            o = i().map(n, 'discoverable'),
                            a = i().map(n, (e) => R.Z.getRelationshipType(e.userId));
                        k.default.track(U.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                            activity_user_ids: l,
                            discoverable: o,
                            relationship_types: a,
                            voice_channel_id: r.id,
                            treatment: t,
                            surface: 'now-playing'
                        });
                    });
                }),
            (H = (K = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, O.p7)('now-playing-view-store'),
                    r = n && es(e),
                    l = t && ea(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !r && !l;
            })).map((e) => ({
                type: U.GOo.USER,
                party: e
            }))),
            X.size > 0)
        ) {
            let e = Array.from(X);
            g.ZP.fetchApplications(e), e.forEach((e) => z.add(e)), X.clear();
        }
        F = !0;
    })(),
        ep.emitChange();
}, 1000);
function ed() {
    return !!eu() && (ec(), !1);
}
class eh extends (r = a.ZP.Store) {
    initialize() {
        this.syncWith([D.default, y.Z, A.Z, T.Z, W.Z, j.Z, R.Z, S.Z, x.Z], ed), this.waitFor(b.Z, Z.Z, y.Z, D.default, x.Z);
    }
    get currentActivityParties() {
        return K;
    }
    get nowPlayingCards() {
        return H;
    }
    get isMounted() {
        return G;
    }
    get loaded() {
        return F;
    }
}
L(eh, 'displayName', 'NowPlayingViewStore');
let ep = new eh(s.Z, {
        LOGOUT: function () {
            (G = !1), (K = []), (H = []), X.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
            (G = !0), ec();
        },
        NOW_PLAYING_UNMOUNTED: function () {
            G = !1;
        }
    }),
    ef = ep;

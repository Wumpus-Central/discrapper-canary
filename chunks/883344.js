n.d(t, {
    A: () => ej,
}),
    n(896048),
    n(638769),
    n(321073);
var r,
    i = n(681154),
    l = n(311907),
    a = n(73153),
    s = n(99753),
    o = n(20805),
    c = n(583846),
    u = n(49463),
    d = n(698441),
    p = n(141468),
    h = n(961350),
    g = n(734057),
    f = n(197305),
    m = n(71393),
    A = n(320501),
    _ = n(576705),
    b = n(222823),
    E = n(994500),
    O = n(543465),
    y = n(927813),
    I = n(449054),
    v = n(661191),
    S = n(105971),
    C = n(335934),
    N = n(116127),
    T = n(596720),
    j = n(449e3),
    x = n(859524),
    P = n(652215),
    w = n(424994);

function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}

function D(e, t) {
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
let M = +y.A.Millis.DAY,
    k = 3 * y.A.Millis.DAY,
    U = [],
    G = null,
    V = 0,
    B = [],
    H = [],
    F = {},
    Y = {},
    K = {},
    W = {},
    q = {},
    z = {},
    Q = 0,
    X = !1,
    Z = !1,
    J = !1,
    $ = null,
    ee = null,
    et = 0,
    en = [],
    er = [],
    ei = 0,
    el = [],
    ea = 0,
    es = !0,
    eo = !1,
    ec = new Set(),
    eu = !1,
    ed = !1,
    ep = 0,
    eh = 0;

function eg(e, t) {
    if (Date.now() - V > 6 * y.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}

function ef(e) {
    if (!N.A.filterStaffContent()) return !0;
    if ((0, x.xj)(e)) {
        if (e.data.guild_id === T.VL) return !0;
        let t = m.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(P.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}

function em(e, t, n, r) {
    let i = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * r < i.length ? i.splice((t + 1) * r, 0, e) : i.push(e);
        }),
        i
    );
}

function eA() {
    if (
        ((en = en.filter((e) => e.type !== T.Mm.RECOMMENDED_GUILDS)),
        (er = er.filter((e) => e.type !== T.Mm.RECOMMENDED_GUILDS)),
        0 === el.length)
    )
        return;
    let e = "recommendedGuilds",
        t = m.A.getGuildsArray().filter((e) => e.features.has(P.GuildFeatures.COMMUNITY)).length >= 5,
        n = j.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - ea > M && Date.now() - n < k) return;
    let r = {
        id: e,
        type: T.Mm.RECOMMENDED_GUILDS,
        score: 50,
    };
    if (((K[r.id] = r), (Y[r.id] = r), 0 === en.length)) er = [r, ...er];
    else if ((!t && en.length < 5) || (t && en.length < 10)) en = [...en, r];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        en.splice(e, 0, r);
    } else en.splice(5, 0, r);
}

function e_() {
    let e = new Set();
    if (
        (B.forEach((t) => {
            e.add(t.id);
        }),
        null != ee)
    )
        if (e.has(ee.id)) {
            let e = ee.id,
                t = ee.type,
                n = B.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((ee = B[n]), (B = B.filter((t) => t.id !== e)), (B = [ee, ...B]));
        } else (B = [ee, ...B]), e.add(ee.id);
    B.forEach((e) => {
        (Y[e.id] = e),
            e.type === T.Mm.CUSTOM_STATUS &&
                (E.A.isBlockedOrIgnored(e.data.user_id) ? (W[e.id] = !0) : (K[e.id] = (0, x.YM)(e)));
    });
}

function eb(e) {
    var t, n, r;
    let l, a, u, p, h;
    if ((B.length > 0 && ((U = B), (B = []), (H = [])), Q++, null != e)) (en = e.newUnread), (er = e.newRead);
    else {
        let [e, t] = eE(U);
        (en = e), (er = t);
    }
    if (
        (N.A.onlyShowRecentGeneratedCandidates() ||
            ((function () {
                let e = m.A.getGuildIds(),
                    t = [];
                for (let r of e) {
                    if (null != q[r] && q[r] < 0) continue;
                    let e = d.Ay.getGuildScheduledEventsForGuild(r),
                        i = 0;
                    for (let r of e)
                        if (!(0, d.AZ)(r)) {
                            if (null != r.channel_id) {
                                let e = g.A.getChannel(r.channel_id);
                                if (!_.A.can(P.xBc.VIEW_CHANNEL, e)) continue;
                            }
                            if ((0, d.W$)(r, 2 * y.A.Seconds.DAY) || (0, d.Fd)(r)) {
                                var n;
                                if (
                                    (null == K[r.id] &&
                                        (K[r.id] = {
                                            id: r.id,
                                            type: T.Mm.GUILD_EVENT,
                                            score: 10,
                                            event_id: r.id,
                                        }),
                                    t.push({
                                        id: r.id,
                                        type: T.Mm.GUILD_EVENT,
                                        score: 10,
                                        data: {
                                            guild_id: r.guild_id,
                                            event_id: r.id,
                                            channel_id: null != (n = r.channel_id) ? n : void 0,
                                        },
                                    }),
                                    ++i >= 1)
                                )
                                    break;
                            }
                        }
                }
                t.sort((e, t) => {
                    let n = f.A.getGuildAffinity(e.data.guild_id),
                        r = f.A.getGuildAffinity(t.data.guild_id);
                    return (null != r ? r.score : 0) - (null != n ? n.score : 0);
                });
                let r = [],
                    i = [];
                t.forEach((e) => {
                    (Y[e.id] = e), null != j.A.getReadTimestamp(e.id) ? i.push(e) : r.push(e);
                }),
                    (en = em(en, r, T.Mm.GUILD_EVENT, 7)),
                    (er = em(er, i, T.Mm.GUILD_EVENT, 7));
            })(),
            (l = new Set()),
            (a = {}),
            (u = []),
            (p = []),
            (h = null != (t = null == (n = s.A.getFeed(w.X1.GLOBAL_FEED)) ? void 0 : n.entries) ? t : [])
                .sort((e, t) => e.rank - t.rank)
                .slice(0, 5),
            h.forEach((e) => {
                if (
                    l.has(e.content.id) ||
                    (e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME &&
                        e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS &&
                        e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME) ||
                    (0, c.I5)(e.content)
                )
                    return;
                if ((0, o.zD)(e.content)) {
                    if (
                        (null == a[e.content.author_id] && (a[e.content.author_id] = new Set()),
                        a[e.content.author_id].has(e.content.extra.application_id))
                    )
                        return;
                    a[e.content.author_id].add(e.content.extra.application_id);
                }
                null == K[e.content.id] &&
                    (K[e.content.id] = {
                        id: e.content.id,
                        type: T.Mm.ACTIVITY,
                        score: 15,
                        activity: e.content,
                    });
                let t = {
                    id: e.content.id,
                    type: T.Mm.ACTIVITY,
                    score: 15,
                    data: {
                        user_id: e.content.author_id,
                        content_id: e.content.id,
                    },
                };
                l.add(e.content.id), (Y[t.id] = t), null != j.A.getReadTimestamp(t.id) ? p.push(t) : u.push(t);
            }),
            (en = em(en, u, T.Mm.ACTIVITY, 5)),
            (er = em(er, p, T.Mm.ACTIVITY, 5)),
            eA()),
        null != F.load_id && G !== F.load_id)
    ) {
        S.k.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: Z,
            unreadFeedItems: en,
            readFeedItems: er,
            homeSessionId: "gravity",
        }),
            (G = null != (r = F.load_id) ? r : null),
            (F = {});
    }
    (ei = 0), en.length + er.length === 0 && (ed = !0), (0, x.kx)([...en, ...er], 0, T.w5), (eo = !1);
}

function eE(e) {
    let t = [],
        n = [],
        r = [];
    return (
        e.forEach((e) => {
            let i = null != j.A.getReadTimestamp(e.id);
            if (e.type === T.Mm.MESSAGE) {
                var l;
                (null == (l = e.data.message_context) ? void 0 : l.external_content_application_id) == null &&
                    (i = i || !(0, x.$r)(e.data.channel_id, e.data.message_id));
            }
            i ? t.push(e) : e.type === T.Mm.MESSAGE && e.data.has_mention ? r.push(e) : n.push(e);
        }),
        [[...r, ...n], t.sort((e, t) => (0, x.tI)(e.id, t.id))]
    );
}

function eO(e, t) {
    let n = [],
        r = new Set(U.map((e) => e.id));
    for (let i of e)
        !(i.type === T.Mm.RECOMMENDED_GUILDS || r.has(i.id)) &&
            null == j.A.getReadTimestamp(i.id) &&
            (i.type !== T.Mm.MESSAGE || ((0, x.$r)(i.data.channel_id, i.data.message_id) && i.data.channel_id !== t)) &&
            n.push(i);
    return n;
}

function ey(e, t) {
    return e.filter((e) => !(0, x.xj)(e) || e.data.channel_id !== t);
}

function eI(e, t) {
    (0, x.Wu)(t) === x.n$.MUTED && ((U = ey(U, e)), (en = ey(en, e)), (er = ey(er, e)), (B = ey(B, e)), (H = ey(H, e)));
}

function ev(e, t) {
    return e.filter((e) => !(0, x.xj)(e) || e.data.guild_id !== t);
}

function eS(e, t) {
    (0, x.Wu)(t) === x.n$.MUTED && ((U = ev(U, e)), (en = ev(en, e)), (er = ev(er, e)), (B = ev(B, e)), (H = ev(H, e)));
}

function eC(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: l } = e,
        a = K[n];
    if (null == a || a.type !== T.Mm.MESSAGE) return !1;
    let s = h.default.getId() === r;
    "MESSAGE_REACTION_ADD" === t
        ? (a.message = a.message.addReaction(i, s, e.colors, l))
        : (a.message = a.message.removeReaction(i, s, l));
}

function eN(e) {
    let { channelId: t } = e,
        n = [],
        r = [];
    en.forEach((e, i) => {
        (i > ei || !J) && e.type === T.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : r.push(e);
    });
    let i = Z,
        [l, a] = eE(B);
    if (((H = eO(l, t)), (Z = J ? i && H.length >= T.$P : i && eg(r, B)), 0 === n.length && i === Z)) return !1;
    0 !== n.length && ((en = r), (er = [...er, ...n]));
}
class eT extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(h.default, g.A, s.A, u.A, f.A, d.Ay, m.A, N.A, j.A, A.A, _.A, b.Ay, E.A, O.Ay), null != e)) {
            var t, n, r, i, l, a, o;
            (U = null != (t = e.dehydratedItems) ? t : []).forEach((e) => {
                Y[e.id] = e;
            }),
                (q = null != (n = e.customGuildScores) ? n : {}),
                (z = null != (r = e.customChannelScoresByGuild) ? r : {}),
                (et = null != (i = e.numOpens) ? i : 0),
                (V = null != (l = e.lastOpened) ? l : 0),
                (ea = null != (a = e.lastJoinedRecommendedGuild) ? a : 0),
                (eh = null != (o = e.lastTakenICYMISurvey) ? o : 0);
        }
    }
    getVersion() {
        return Q;
    }
    getDehydratedItems() {
        return U;
    }
    getNewDehydratedItems() {
        return B;
    }
    getDehydratedItem(e) {
        var t;
        return null != (t = Y[e]) ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null != (t = K[e]) ? t : null;
    }
    getMessage(e) {
        let t = K[e];
        return null == t || t.type !== T.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return K;
    }
    getUnreadDisplayItems() {
        return en;
    }
    getNewUnreadDehydratedItems() {
        return H;
    }
    getReadDisplayItems() {
        return er;
    }
    getNextIndexToHydrate() {
        return ei;
    }
    getMissingItems() {
        return W;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === x.n$.MUTED || this.getCustomChannelScore(e, t) === x.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == z[e] || null == z[e][t] ? x.n$.UNKNOWN : (0, x.Wu)(z[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null != (t = q[e]) ? t : 0;
    }
    getCustomGuildScores() {
        return q;
    }
    hasNewContent() {
        return Z;
    }
    getCurrentStatusAttachments(e) {
        return null == $ || $[0] !== e ? [] : $[1];
    }
    getLoadId() {
        return G;
    }
    hasOpenedEnoughTimes() {
        return 5 === et;
    }
    hasOpened() {
        return J;
    }
    getDiscoverableGuilds() {
        return el;
    }
    videosMuted() {
        return es;
    }
    isRefreshing() {
        return eo;
    }
    isHydrating() {
        return ec.size > 0;
    }
    notificationItem() {
        return ee;
    }
    getIsTabFocused() {
        return eu;
    }
    isFirstPageHydrated() {
        return ed;
    }
    lastScrollEvent() {
        return ep;
    }
    lastTakenICYMISurvey() {
        return eh;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...en, ...er].findIndex((e) => e.type === T.Mm.RECOMMENDED_GUILDS)
            : [...en, ...er].filter((e) => null != K[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: U,
            numOpens: et,
            customGuildScores: q,
            customChannelScoresByGuild: z,
            lastOpened: V,
            lastJoinedRecommendedGuild: ea,
            lastTakenICYMISurvey: eh,
        };
    }
}
L(eT, "displayName", "ICYMIStore"), L(eT, "persistKey", "ICYMIStore");
let ej = new eT(a.h, {
    LOGOUT: function () {
        (U = []),
            (B = []),
            (H = []),
            (Y = {}),
            (F = {}),
            (K = {}),
            (W = {}),
            (G = null),
            (q = {}),
            (z = {}),
            (Q = 0),
            (X = !1),
            (Z = !1),
            (J = !1),
            (en = []),
            (er = []),
            (ei = 0),
            (V = 0),
            (ea = 0),
            (es = !0),
            (eo = !1),
            (ec = new Set()),
            (ee = null),
            (eu = !1),
            (ed = !1),
            ($ = null),
            (ep = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (ee = n), null != G && ((B = B.length > 0 ? B : [...U]), e_(), eb()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: T.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: P.rbe.GUILD_TEXT,
                },
            };
            if (
                ((Y[t.message.id] = e),
                (K[t.message.id] = D(R({}, e), {
                    message: (0, p.rh)(t.message),
                })),
                null == G && null == F)
            ) {
                let [t, n] = eE((U = [e, ...U]));
                (en = t), (er = n);
            } else (B = [e, ...B]), eb();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t, loadId: n, startTime: r, isInitialLoad: i, isReloading: l } = e;
        (B = (function (e) {
            let { contentGenerationEnabled: t } = (0, C.o$)("processRawItems", !1),
                n = N.A.onlyShowRecentGeneratedCandidates(),
                r = new Set(T.H8);
            n ? (r = new Set([T.Mm.GENERATED_CANDIDATE])) : t && r.add(T.Mm.GENERATED_CANDIDATE);
            let i = e.filter((e) => r.has(e.type)).filter(ef);
            return (
                n && i.sort((e, t) => v.default.extractTimestamp(t.id) - v.default.extractTimestamp(e.id)),
                i.map((e) => {
                    if (e.type === T.Mm.MESSAGE && null != e.data.message_context) {
                        let t = {};
                        null != e.data.message_context.reply_message_id &&
                            0 !== parseInt(e.data.message_context.reply_message_id) &&
                            (t.reply_message_id = e.data.message_context.reply_message_id),
                            null != e.data.message_context.before_message_id &&
                                0 !== parseInt(e.data.message_context.before_message_id) &&
                                (t.before_message_id = e.data.message_context.before_message_id),
                            null != e.data.message_context.after_message_id &&
                                0 !== parseInt(e.data.message_context.after_message_id) &&
                                (t.after_message_id = e.data.message_context.after_message_id),
                            null != e.data.message_context.external_content_application_id &&
                                0 !== parseInt(e.data.message_context.external_content_application_id) &&
                                (t.external_content_application_id =
                                    e.data.message_context.external_content_application_id),
                            null != e.data.message_context.reference_message_id &&
                                0 !== parseInt(e.data.message_context.reference_message_id) &&
                                (t.reference_message_id = e.data.message_context.reference_message_id),
                            (e.data.message_context = t);
                    }
                    return e;
                })
            );
        })(t)),
            e_(),
            (F = {
                load_id: n,
                load_time_millis: Date.now() - r,
                feed_item_ids: B.map((e) => e.id),
            });
        let [a, s] = eE(B);
        if (((H = eO(a)), !J || 0 === Q || i))
            (Q = 0),
                !eu && eg(a, B) ? ((Z = !0), (X = !0)) : (Z = !1),
                eb({
                    newUnread: a,
                    newRead: s,
                });
        else {
            Q > 0 && (ee = null);
            let e = H.length > T.$P;
            l || (Z = e), e && ((0, x.kx)([...a, ...s], 0, T.w5), a.length + s.length === 0 && (ed = !0));
        }
        S.k.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: Z,
            unreadFeedItems: a,
            readFeedItems: s,
            homeSessionId: eu ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            generatedCandidateItems: r,
            requestMessageItems: i,
            requestActivityItems: l,
            requestGeneratedCandidateItems: a,
            startingIndex: s,
            endingIndex: o,
        } = e;
        (ed = !0), (K = R({}, K));
        let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            u = n.reduce((e, t) => ((e[t.id] = t), e), {}),
            d = r.reduce((e, t) => ((e[t.content_id] = t), e), {});
        i.forEach((e) => {
            let t = c[e.message_id];
            if (null == t) {
                W[e.message_id] = !0;
                return;
            }
            let n = Y[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: T.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: P.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let r = A.A.getMessage(t.channel_id, t.message.id);
            if (null != r) {
                let e = (0, x.Rh)(t, n);
                K[t.message.id] = D(R({}, e), {
                    message: r,
                });
            } else K[t.message.id] = (0, x.Rh)(t, n);
        }),
            l.forEach((e) => {
                let t = u[e.content_id];
                if (null == t) {
                    W[e.content_id] = !0;
                    return;
                }
                let n = Y[e.content_id];
                if (null == n) {
                    W[e.content_id] = !0;
                    return;
                }
                K[t.id] = D(R({}, n), {
                    activity: t,
                });
            }),
            a.forEach((e) => {
                let t = d[e.content_id];
                if (null == t) {
                    W[e.content_id] = !0;
                    return;
                }
                let n = Y[e.content_id];
                if (null == n || n.type !== T.Mm.GENERATED_CANDIDATE) {
                    W[e.content_id] = !0;
                    return;
                }
                K[t.content_id] = D(R({}, n), {
                    candidate: (0, x.GM)(t),
                });
            }),
            s === ei && (ei = o),
            ec.delete((0, x.Vq)(s, o));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((q[e.guild_id] = e.guild_score),
            eS(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == z[e.guild_id] && (z[e.guild_id] = {}),
                    (z[e.guild_id][t] = e.custom_channel_scores[t]),
                    eI(t, e.custom_channel_scores[t]);
        (q = R({}, q)), (z = R({}, z));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (el = t.map((e) => (0, I.jE)(e.guild))), eA();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: r } = e;
        null != r && ((q[n] = r), eS(n, r), (q = R({}, q))),
            null == t ||
                t.forEach((e) => {
                    let { channelId: t, score: r } = e;
                    null == z[n] && (z[n] = {}), (z[n][t] = r), eI(t, r), (z = R({}, z));
                });
    },
    RELOAD_ICYMI: function () {
        if (0 === B.length) return !1;
        eb(), (Z = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (J = !0), (V = Date.now()), X && ((X = !1), (Z = !1)), et < 5 && et++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        et = 6;
    },
    MESSAGE_REACTION_ADD: eC,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            r = K[t];
        if (null == r || r.type !== T.Mm.MESSAGE) return !1;
        let i = h.default.getId();
        r.message = r.message.addReactionBatch(n, i);
    },
    MESSAGE_REACTION_REMOVE: eC,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = K[t];
        if (null == n || n.type !== T.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            r = K[t];
        if (null == r || r.type !== T.Mm.MESSAGE) return !1;
        r.message = r.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: eN,
    MESSAGE_ACK: eN,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        ea = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        es = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        eo = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        ec.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        ec.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        eu = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            $ = null;
            return;
        }
        $ = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        ep = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        eh = t;
    },
});

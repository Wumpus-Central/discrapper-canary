n.d(t, { A: () => ex }), n(321073);
var i = n(681154),
    r = n(311907),
    a = n(73153),
    l = n(99753),
    s = n(20805),
    o = n(583846),
    d = n(49463),
    c = n(698441),
    u = n(141468),
    A = n(961350),
    h = n(734057),
    _ = n(197305),
    m = n(71393),
    p = n(320501),
    g = n(576705),
    E = n(222823),
    f = n(994500),
    I = n(543465),
    C = n(927813),
    N = n(449054),
    T = n(661191),
    S = n(105971),
    x = n(335934),
    v = n(116127),
    b = n(596720),
    y = n(449e3),
    L = n(859524),
    O = n(652215),
    R = n(424994);
let P = +C.A.Millis.DAY,
    j = 3 * C.A.Millis.DAY,
    D = [],
    w = null,
    M = 0,
    U = [],
    G = [],
    k = {},
    V = {},
    B = {},
    H = {},
    F = {},
    Y = {},
    W = 0,
    q = !1,
    z = !1,
    K = !1,
    $ = null,
    Q = null,
    X = 0,
    Z = [],
    J = [],
    ee = 0,
    et = [],
    en = 0,
    ei = !0,
    er = !1,
    ea = new Set(),
    el = !1,
    es = !1,
    eo = 0,
    ed = 0;
function ec(e, t) {
    if (Date.now() - M > 6 * C.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function eu(e) {
    if (!v.A.filterStaffContent()) return !0;
    if ((0, L.xj)(e)) {
        if (e.data.guild_id === b.VL) return !0;
        let t = m.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(O.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eA(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function eh() {
    if (
        ((Z = Z.filter((e) => e.type !== b.Mm.RECOMMENDED_GUILDS)),
        (J = J.filter((e) => e.type !== b.Mm.RECOMMENDED_GUILDS)),
        0 === et.length)
    )
        return;
    let e = "recommendedGuilds",
        t = m.A.getGuildsArray().filter((e) => e.features.has(O.GuildFeatures.COMMUNITY)).length >= 5,
        n = y.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > P && Date.now() - n < j) return;
    let i = { id: e, type: b.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((B[i.id] = i), (V[i.id] = i), 0 === Z.length)) J = [i, ...J];
    else if ((!t && Z.length < 5) || (t && Z.length < 10)) Z = [...Z, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Z.splice(e, 0, i);
    } else Z.splice(5, 0, i);
}
function e_() {
    let e = new Set();
    if (
        (U.forEach((t) => {
            e.add(t.id);
        }),
        null != Q)
    )
        if (e.has(Q.id)) {
            let e = Q.id,
                t = Q.type,
                n = U.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((Q = U[n]), (U = U.filter((t) => t.id !== e)), (U = [Q, ...U]));
        } else (U = [Q, ...U]), e.add(Q.id);
    U.forEach((e) => {
        (V[e.id] = e),
            e.type === b.Mm.CUSTOM_STATUS &&
                (f.A.isBlockedOrIgnored(e.data.user_id) ? (H[e.id] = !0) : (B[e.id] = (0, L.YM)(e)));
    });
}
function em(e) {
    let t, n, r, a, d;
    if ((U.length > 0 && ((D = U), (U = []), (G = [])), W++, null != e)) (Z = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = ep(D);
        (Z = e), (J = t);
    }
    v.A.onlyShowRecentGeneratedCandidates() ||
        ((function () {
            let e = m.A.getGuildIds(),
                t = [];
            for (let n of e) {
                if (null != F[n] && F[n] < 0) continue;
                let e = c.Ay.getGuildScheduledEventsForGuild(n),
                    i = 0;
                for (let n of e)
                    if (!(0, c.AZ)(n)) {
                        if (null != n.channel_id) {
                            let e = h.A.getChannel(n.channel_id);
                            if (!g.A.can(O.xBc.VIEW_CHANNEL, e)) continue;
                        }
                        if (
                            ((0, c.W$)(n, 2 * C.A.Seconds.DAY) || (0, c.Fd)(n)) &&
                            (null == B[n.id] &&
                                (B[n.id] = { id: n.id, type: b.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                            t.push({
                                id: n.id,
                                type: b.Mm.GUILD_EVENT,
                                score: 10,
                                data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                            }),
                            ++i >= 1)
                        )
                            break;
                    }
            }
            t.sort((e, t) => {
                let n = _.A.getGuildAffinity(e.data.guild_id),
                    i = _.A.getGuildAffinity(t.data.guild_id);
                return (null != i ? i.score : 0) - (null != n ? n.score : 0);
            });
            let n = [],
                i = [];
            t.forEach((e) => {
                (V[e.id] = e), null != y.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
            }),
                (Z = eA(Z, n, b.Mm.GUILD_EVENT, 7)),
                (J = eA(J, i, b.Mm.GUILD_EVENT, 7));
        })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (a = []),
        (d = l.A.getFeed(R.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        d.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME) ||
                (0, o.I5)(e.content)
            )
                return;
            if ((0, s.zD)(e.content)) {
                if (
                    (null == n[e.content.author_id] && (n[e.content.author_id] = new Set()),
                    n[e.content.author_id].has(e.content.extra.application_id))
                )
                    return;
                n[e.content.author_id].add(e.content.extra.application_id);
            }
            null == B[e.content.id] &&
                (B[e.content.id] = { id: e.content.id, type: b.Mm.ACTIVITY, score: 15, activity: e.content });
            let l = {
                id: e.content.id,
                type: b.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (V[l.id] = l), null != y.A.getReadTimestamp(l.id) ? a.push(l) : r.push(l);
        }),
        (Z = eA(Z, r, b.Mm.ACTIVITY, 5)),
        (J = eA(J, a, b.Mm.ACTIVITY, 5)),
        eh()),
        null != k.load_id &&
            w !== k.load_id &&
            (S.k.trackFeedLoaded({
                newTrackingProps: k,
                hasNewContent: z,
                unreadFeedItems: Z,
                readFeedItems: J,
                homeSessionId: "gravity",
            }),
            (w = k.load_id ?? null),
            (k = {})),
        (ee = 0),
        Z.length + J.length === 0 && (es = !0),
        (0, L.kx)([...Z, ...J], 0, b.w5),
        (er = !1);
}
function ep(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != y.A.getReadTimestamp(e.id);
            e.type === b.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, L.$r)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === b.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, L.tI)(e.id, t.id))]
    );
}
function eg(e, t) {
    let n = [],
        i = new Set(D.map((e) => e.id));
    for (let r of e)
        !(r.type === b.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == y.A.getReadTimestamp(r.id) &&
            (r.type !== b.Mm.MESSAGE || ((0, L.$r)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function eE(e, t) {
    return e.filter((e) => !(0, L.xj)(e) || e.data.channel_id !== t);
}
function ef(e, t) {
    (0, L.Wu)(t) === L.n$.MUTED && ((D = eE(D, e)), (Z = eE(Z, e)), (J = eE(J, e)), (U = eE(U, e)), (G = eE(G, e)));
}
function eI(e, t) {
    return e.filter((e) => !(0, L.xj)(e) || e.data.guild_id !== t);
}
function eC(e, t) {
    (0, L.Wu)(t) === L.n$.MUTED && ((D = eI(D, e)), (Z = eI(Z, e)), (J = eI(J, e)), (U = eI(U, e)), (G = eI(G, e)));
}
function eN(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        l = B[n];
    if (null == l || l.type !== b.Mm.MESSAGE) return !1;
    let s = A.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (l.message = l.message.addReaction(r, s, e.colors, a))
        : (l.message = l.message.removeReaction(r, s, a));
}
function eT(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    Z.forEach((e, r) => {
        (r > ee || !K) && e.type === b.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = z,
        [a, l] = ep(U);
    if (((G = eg(a, t)), (z = K ? r && G.length >= b.$P : r && ec(i, U)), 0 === n.length && r === z)) return !1;
    0 !== n.length && ((Z = i), (J = [...J, ...n]));
}
class eS extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(A.default, h.A, l.A, d.A, _.A, c.Ay, m.A, v.A, y.A, p.A, g.A, E.Ay, f.A, I.Ay),
            null != e &&
                ((D = e.dehydratedItems ?? []).forEach((e) => {
                    V[e.id] = e;
                }),
                (F = e.customGuildScores ?? {}),
                (Y = e.customChannelScoresByGuild ?? {}),
                (X = e.numOpens ?? 0),
                (M = e.lastOpened ?? 0),
                (en = e.lastJoinedRecommendedGuild ?? 0),
                (ed = e.lastTakenICYMISurvey ?? 0));
    }
    getVersion() {
        return W;
    }
    getDehydratedItems() {
        return D;
    }
    getNewDehydratedItems() {
        return U;
    }
    getDehydratedItem(e) {
        return V[e] ?? null;
    }
    getHydratedItem(e) {
        return B[e] ?? null;
    }
    getMessage(e) {
        let t = B[e];
        return null == t || t.type !== b.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return B;
    }
    getUnreadDisplayItems() {
        return Z;
    }
    getNewUnreadDehydratedItems() {
        return G;
    }
    getReadDisplayItems() {
        return J;
    }
    getNextIndexToHydrate() {
        return ee;
    }
    getMissingItems() {
        return H;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === L.n$.MUTED || this.getCustomChannelScore(e, t) === L.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? L.n$.UNKNOWN : (0, L.Wu)(Y[e][t]);
    }
    getCustomGuildScore(e) {
        return F[e] ?? 0;
    }
    getCustomGuildScores() {
        return F;
    }
    hasNewContent() {
        return z;
    }
    getCurrentStatusAttachments(e) {
        return null == $ || $[0] !== e ? [] : $[1];
    }
    getLoadId() {
        return w;
    }
    hasOpenedEnoughTimes() {
        return 5 === X;
    }
    hasOpened() {
        return K;
    }
    getDiscoverableGuilds() {
        return et;
    }
    videosMuted() {
        return ei;
    }
    isRefreshing() {
        return er;
    }
    isHydrating() {
        return ea.size > 0;
    }
    notificationItem() {
        return Q;
    }
    getIsTabFocused() {
        return el;
    }
    isFirstPageHydrated() {
        return es;
    }
    lastScrollEvent() {
        return eo;
    }
    lastTakenICYMISurvey() {
        return ed;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...Z, ...J].findIndex((e) => e.type === b.Mm.RECOMMENDED_GUILDS)
            : [...Z, ...J].filter((e) => null != B[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: D,
            numOpens: X,
            customGuildScores: F,
            customChannelScoresByGuild: Y,
            lastOpened: M,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: ed,
        };
    }
}
let ex = new eS(a.h, {
    LOGOUT: function () {
        (D = []),
            (U = []),
            (G = []),
            (V = {}),
            (k = {}),
            (B = {}),
            (H = {}),
            (w = null),
            (F = {}),
            (Y = {}),
            (W = 0),
            (q = !1),
            (z = !1),
            (K = !1),
            (Z = []),
            (J = []),
            (ee = 0),
            (M = 0),
            (en = 0),
            (ei = !0),
            (er = !1),
            (ea = new Set()),
            (Q = null),
            (el = !1),
            (es = !1),
            ($ = null),
            (eo = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (Q = n), null != w && ((U = U.length > 0 ? U : [...D]), e_(), em()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: b.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: O.rbe.GUILD_TEXT,
                },
            };
            if (
                ((V[t.message.id] = e),
                (B[t.message.id] = { ...e, message: (0, u.rh)(t.message) }),
                null == w && null == k)
            ) {
                let [t, n] = ep((D = [e, ...D]));
                (Z = t), (J = n);
            } else (U = [e, ...U]), em();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t, loadId: n, startTime: i, isInitialLoad: r, isReloading: a } = e;
        (U = (function (e) {
            let { contentGenerationEnabled: t } = (0, x.o$)("processRawItems", !1),
                n = v.A.onlyShowRecentGeneratedCandidates(),
                i = new Set(b.H8);
            n ? (i = new Set([b.Mm.GENERATED_CANDIDATE])) : t && i.add(b.Mm.GENERATED_CANDIDATE);
            let r = e.filter((e) => i.has(e.type)).filter(eu);
            return (
                n && r.sort((e, t) => T.default.extractTimestamp(t.id) - T.default.extractTimestamp(e.id)),
                r.map((e) => {
                    if (e.type === b.Mm.MESSAGE && null != e.data.message_context) {
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
            (k = { load_id: n, load_time_millis: Date.now() - i, feed_item_ids: U.map((e) => e.id) });
        let [l, s] = ep(U);
        if (((G = eg(l)), !K || 0 === W || r))
            (W = 0), !el && ec(l, U) ? ((z = !0), (q = !0)) : (z = !1), em({ newUnread: l, newRead: s });
        else {
            W > 0 && (Q = null);
            let e = G.length > b.$P;
            a || (z = e), e && ((0, L.kx)([...l, ...s], 0, b.w5), l.length + s.length === 0 && (es = !0));
        }
        S.k.trackFeedLoaded({
            newTrackingProps: k,
            hasNewContent: z,
            unreadFeedItems: l,
            readFeedItems: s,
            homeSessionId: el ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            generatedCandidateItems: i,
            requestMessageItems: r,
            requestActivityItems: a,
            requestGeneratedCandidateItems: l,
            startingIndex: s,
            endingIndex: o,
        } = e;
        (es = !0), (B = { ...B });
        let d = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            c = n.reduce((e, t) => ((e[t.id] = t), e), {}),
            u = i.reduce((e, t) => ((e[t.content_id] = t), e), {});
        r.forEach((e) => {
            let t = d[e.message_id];
            if (null == t) {
                H[e.message_id] = !0;
                return;
            }
            let n = V[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: b.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: O.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = p.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, L.Rh)(t, n);
                B[t.message.id] = { ...e, message: i };
            } else B[t.message.id] = (0, L.Rh)(t, n);
        }),
            a.forEach((e) => {
                let t = c[e.content_id];
                if (null == t) {
                    H[e.content_id] = !0;
                    return;
                }
                let n = V[e.content_id];
                if (null == n) {
                    H[e.content_id] = !0;
                    return;
                }
                B[t.id] = { ...n, activity: t };
            }),
            l.forEach((e) => {
                let t = u[e.content_id];
                if (null == t) {
                    H[e.content_id] = !0;
                    return;
                }
                let n = V[e.content_id];
                if (null == n || n.type !== b.Mm.GENERATED_CANDIDATE) {
                    H[e.content_id] = !0;
                    return;
                }
                B[t.content_id] = { ...n, candidate: (0, L.GM)(t) };
            }),
            s === ee && (ee = o),
            ea.delete((0, L.Vq)(s, o));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((F[e.guild_id] = e.guild_score),
            eC(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == Y[e.guild_id] && (Y[e.guild_id] = {}),
                    (Y[e.guild_id][t] = e.custom_channel_scores[t]),
                    ef(t, e.custom_channel_scores[t]);
        (F = { ...F }), (Y = { ...Y });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (et = t.map((e) => (0, N.jE)(e.guild))), eh();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((F[n] = i), eC(n, i), (F = { ...F })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == Y[n] && (Y[n] = {}), (Y[n][t] = i), ef(t, i), (Y = { ...Y });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === U.length) return !1;
        em(), (z = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (K = !0), (M = Date.now()), q && ((q = !1), (z = !1)), X < 5 && X++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        X = 6;
    },
    MESSAGE_REACTION_ADD: eN,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = B[t];
        if (null == i || i.type !== b.Mm.MESSAGE) return !1;
        let r = A.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: eN,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = B[t];
        if (null == n || n.type !== b.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = B[t];
        if (null == i || i.type !== b.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: eT,
    MESSAGE_ACK: eT,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        en = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        ei = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        er = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        ea.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        ea.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        el = t;
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
        eo = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        ed = t;
    },
});

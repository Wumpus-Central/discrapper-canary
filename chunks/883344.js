n.d(t, { A: () => eS }), n(321073);
var i = n(681154),
    r = n(311907),
    a = n(73153),
    l = n(99753),
    s = n(20805),
    o = n(583846),
    d = n(49463),
    u = n(698441),
    c = n(141468),
    A = n(961350),
    h = n(734057),
    _ = n(197305),
    E = n(71393),
    p = n(320501),
    m = n(576705),
    g = n(222823),
    I = n(994500),
    C = n(543465),
    f = n(927813),
    T = n(449054),
    S = n(105971),
    N = n(116127),
    O = n(596720),
    L = n(449e3),
    y = n(859524),
    v = n(652215),
    b = n(424994);
let D = +f.A.Millis.DAY,
    R = 3 * f.A.Millis.DAY,
    P = [],
    w = null,
    M = 0,
    U = [],
    x = [],
    G = {},
    k = {},
    j = {},
    V = {},
    H = {},
    B = {},
    F = 0,
    Y = !1,
    K = !1,
    z = !1,
    W = null,
    $ = null,
    q = 0,
    X = [],
    Q = [],
    Z = 0,
    J = [],
    ee = 0,
    et = !0,
    en = !1,
    ei = new Set(),
    er = !1,
    ea = !1,
    el = 0,
    es = 0;
function eo(e, t) {
    if (Date.now() - M > 6 * f.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function ed(e) {
    if (!N.A.filterStaffContent()) return !0;
    if ((0, y.xj)(e)) {
        if (e.data.guild_id === O.VL) return !0;
        let t = E.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(v.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eu(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function ec() {
    if (
        ((X = X.filter((e) => e.type !== O.Mm.RECOMMENDED_GUILDS)),
        (Q = Q.filter((e) => e.type !== O.Mm.RECOMMENDED_GUILDS)),
        0 === J.length)
    )
        return;
    let e = "recommendedGuilds",
        t = E.A.getGuildsArray().filter((e) => e.features.has(v.GuildFeatures.COMMUNITY)).length >= 5,
        n = L.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - ee > D && Date.now() - n < R) return;
    let i = { id: e, type: O.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((j[i.id] = i), (k[i.id] = i), 0 === X.length)) Q = [i, ...Q];
    else if ((!t && X.length < 5) || (t && X.length < 10)) X = [...X, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        X.splice(e, 0, i);
    } else X.splice(5, 0, i);
}
function eA() {
    let e = new Set();
    if (
        (U.forEach((t) => {
            e.add(t.id);
        }),
        null != $)
    )
        if (e.has($.id)) {
            let e = $.id,
                t = $.type,
                n = U.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && (($ = U[n]), (U = U.filter((t) => t.id !== e)), (U = [$, ...U]));
        } else (U = [$, ...U]), e.add($.id);
    U.forEach((e) => {
        (k[e.id] = e),
            e.type === O.Mm.CUSTOM_STATUS &&
                (I.A.isBlockedOrIgnored(e.data.user_id) ? (V[e.id] = !0) : (j[e.id] = (0, y.YM)(e)));
    });
}
function eh(e) {
    let t, n, r, a, d;
    if ((U.length > 0 && ((P = U), (U = []), (x = [])), F++, null != e)) (X = e.newUnread), (Q = e.newRead);
    else {
        let [e, t] = e_(P);
        (X = e), (Q = t);
    }
    (function () {
        let e = E.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != H[n] && H[n] < 0) continue;
            let e = u.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, u.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = h.A.getChannel(n.channel_id);
                        if (!m.A.can(v.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, u.W$)(n, 2 * f.A.Seconds.DAY) || (0, u.Fd)(n)) &&
                        (null == j[n.id] && (j[n.id] = { id: n.id, type: O.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: O.Mm.GUILD_EVENT,
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
            (k[e.id] = e), null != L.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
        }),
            (X = eu(X, n, O.Mm.GUILD_EVENT, 7)),
            (Q = eu(Q, i, O.Mm.GUILD_EVENT, 7));
    })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (a = []),
        (d = l.A.getFeed(b.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
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
            null == j[e.content.id] &&
                (j[e.content.id] = { id: e.content.id, type: O.Mm.ACTIVITY, score: 15, activity: e.content });
            let l = {
                id: e.content.id,
                type: O.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (k[l.id] = l), null != L.A.getReadTimestamp(l.id) ? a.push(l) : r.push(l);
        }),
        (X = eu(X, r, O.Mm.ACTIVITY, 5)),
        (Q = eu(Q, a, O.Mm.ACTIVITY, 5)),
        ec(),
        null != G.load_id &&
            w !== G.load_id &&
            (S.k.trackFeedLoaded({
                newTrackingProps: G,
                hasNewContent: K,
                unreadFeedItems: X,
                readFeedItems: Q,
                homeSessionId: "gravity",
            }),
            (w = G.load_id ?? null),
            (G = {})),
        (Z = 0),
        X.length + Q.length === 0 && (ea = !0),
        (0, y.kx)([...X, ...Q], 0, O.w5),
        (en = !1);
}
function e_(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != L.A.getReadTimestamp(e.id);
            e.type === O.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, y.$r)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === O.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, y.tI)(e.id, t.id))]
    );
}
function eE(e, t) {
    let n = [],
        i = new Set(P.map((e) => e.id));
    for (let r of e)
        !(r.type === O.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == L.A.getReadTimestamp(r.id) &&
            (r.type !== O.Mm.MESSAGE || ((0, y.$r)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function ep(e, t) {
    return e.filter((e) => !(0, y.xj)(e) || e.data.channel_id !== t);
}
function em(e, t) {
    (0, y.Wu)(t) === y.n$.MUTED && ((P = ep(P, e)), (X = ep(X, e)), (Q = ep(Q, e)), (U = ep(U, e)), (x = ep(x, e)));
}
function eg(e, t) {
    return e.filter((e) => !(0, y.xj)(e) || e.data.guild_id !== t);
}
function eI(e, t) {
    (0, y.Wu)(t) === y.n$.MUTED && ((P = eg(P, e)), (X = eg(X, e)), (Q = eg(Q, e)), (U = eg(U, e)), (x = eg(x, e)));
}
function eC(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        l = j[n];
    if (null == l || l.type !== O.Mm.MESSAGE) return !1;
    let s = A.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (l.message = l.message.addReaction(r, s, e.colors, a))
        : (l.message = l.message.removeReaction(r, s, a));
}
function ef(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    X.forEach((e, r) => {
        (r > Z || !z) && e.type === O.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = K,
        [a, l] = e_(U);
    if (((x = eE(a, t)), (K = z ? r && x.length >= O.$P : r && eo(i, U)), 0 === n.length && r === K)) return !1;
    0 !== n.length && ((X = i), (Q = [...Q, ...n]));
}
class eT extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(A.default, h.A, l.A, d.A, _.A, u.Ay, E.A, N.A, L.A, p.A, m.A, g.Ay, I.A, C.Ay),
            null != e &&
                ((P = e.dehydratedItems ?? []).forEach((e) => {
                    k[e.id] = e;
                }),
                (H = e.customGuildScores ?? {}),
                (B = e.customChannelScoresByGuild ?? {}),
                (q = e.numOpens ?? 0),
                (M = e.lastOpened ?? 0),
                (ee = e.lastJoinedRecommendedGuild ?? 0),
                (es = e.lastTakenICYMISurvey ?? 0));
    }
    getVersion() {
        return F;
    }
    getDehydratedItems() {
        return P;
    }
    getNewDehydratedItems() {
        return U;
    }
    getDehydratedItem(e) {
        return k[e] ?? null;
    }
    getHydratedItem(e) {
        return j[e] ?? null;
    }
    getMessage(e) {
        let t = j[e];
        return null == t || t.type !== O.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return j;
    }
    getUnreadDisplayItems() {
        return X;
    }
    getNewUnreadDehydratedItems() {
        return x;
    }
    getReadDisplayItems() {
        return Q;
    }
    getNextIndexToHydrate() {
        return Z;
    }
    getMissingItems() {
        return V;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === y.n$.MUTED || this.getCustomChannelScore(e, t) === y.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == B[e] || null == B[e][t] ? y.n$.UNKNOWN : (0, y.Wu)(B[e][t]);
    }
    getCustomGuildScore(e) {
        return H[e] ?? 0;
    }
    getCustomGuildScores() {
        return H;
    }
    hasNewContent() {
        return K;
    }
    getCurrentStatusAttachments(e) {
        return null == W || W[0] !== e ? [] : W[1];
    }
    getLoadId() {
        return w;
    }
    hasOpenedEnoughTimes() {
        return 5 === q;
    }
    hasOpened() {
        return z;
    }
    getDiscoverableGuilds() {
        return J;
    }
    videosMuted() {
        return et;
    }
    isRefreshing() {
        return en;
    }
    isHydrating() {
        return ei.size > 0;
    }
    notificationItem() {
        return $;
    }
    getIsTabFocused() {
        return er;
    }
    isFirstPageHydrated() {
        return ea;
    }
    lastScrollEvent() {
        return el;
    }
    lastTakenICYMISurvey() {
        return es;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...X, ...Q].findIndex((e) => e.type === O.Mm.RECOMMENDED_GUILDS)
            : [...X, ...Q].filter((e) => null != j[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: P,
            numOpens: q,
            customGuildScores: H,
            customChannelScoresByGuild: B,
            lastOpened: M,
            lastJoinedRecommendedGuild: ee,
            lastTakenICYMISurvey: es,
        };
    }
}
let eS = new eT(a.h, {
    LOGOUT: function () {
        (P = []),
            (U = []),
            (x = []),
            (k = {}),
            (G = {}),
            (j = {}),
            (V = {}),
            (w = null),
            (H = {}),
            (B = {}),
            (F = 0),
            (Y = !1),
            (K = !1),
            (z = !1),
            (X = []),
            (Q = []),
            (Z = 0),
            (M = 0),
            (ee = 0),
            (et = !0),
            (en = !1),
            (ei = new Set()),
            ($ = null),
            (er = !1),
            (ea = !1),
            (W = null),
            (el = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return ($ = n), null != w && ((U = U.length > 0 ? U : [...P]), eA(), eh()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: O.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: v.rbe.GUILD_TEXT,
                },
            };
            if (
                ((k[t.message.id] = e),
                (j[t.message.id] = { ...e, message: (0, c.rh)(t.message) }),
                null == w && null == G)
            ) {
                let [t, n] = e_((P = [e, ...P]));
                (X = t), (Q = n);
            } else (U = [e, ...U]), eh();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: r, isInitialLoad: a, isReloading: l } = e;
        (t = new Set(O.H8)),
            (U = n
                .filter((e) => t.has(e.type))
                .filter(ed)
                .map((e) => {
                    if (e.type === O.Mm.MESSAGE && null != e.data.message_context) {
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
                })),
            eA(),
            (G = { load_id: i, load_time_millis: Date.now() - r, feed_item_ids: U.map((e) => e.id) });
        let [s, o] = e_(U);
        if (((x = eE(s)), !z || 0 === F || a))
            (F = 0), !er && eo(s, U) ? ((K = !0), (Y = !0)) : (K = !1), eh({ newUnread: s, newRead: o });
        else {
            F > 0 && ($ = null);
            let e = x.length > O.$P;
            l || (K = e), e && ((0, y.kx)([...s, ...o], 0, O.w5), s.length + o.length === 0 && (ea = !0));
        }
        S.k.trackFeedLoaded({
            newTrackingProps: G,
            hasNewContent: K,
            unreadFeedItems: s,
            readFeedItems: o,
            homeSessionId: er ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: r,
            startingIndex: a,
            endingIndex: l,
        } = e;
        (ea = !0), (j = { ...j });
        let s = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            o = n.reduce((e, t) => ((e[t.id] = t), e), {});
        i.forEach((e) => {
            let t = s[e.message_id];
            if (null == t) {
                V[e.message_id] = !0;
                return;
            }
            let n = k[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: O.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: v.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = p.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, y.Rh)(t, n);
                j[t.message.id] = { ...e, message: i };
            } else j[t.message.id] = (0, y.Rh)(t, n);
        }),
            r.forEach((e) => {
                let t = o[e.content_id];
                if (null == t) {
                    V[e.content_id] = !0;
                    return;
                }
                let n = k[e.content_id];
                if (null == n) {
                    V[e.content_id] = !0;
                    return;
                }
                j[t.id] = { ...n, activity: t };
            }),
            a === Z && (Z = l),
            ei.delete((0, y.Vq)(a, l));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((H[e.guild_id] = e.guild_score),
            eI(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == B[e.guild_id] && (B[e.guild_id] = {}),
                    (B[e.guild_id][t] = e.custom_channel_scores[t]),
                    em(t, e.custom_channel_scores[t]);
        (H = { ...H }), (B = { ...B });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (J = t.map((e) => (0, T.jE)(e.guild))), ec();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((H[n] = i), eI(n, i), (H = { ...H })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == B[n] && (B[n] = {}), (B[n][t] = i), em(t, i), (B = { ...B });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === U.length) return !1;
        eh(), (K = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (z = !0), (M = Date.now()), Y && ((Y = !1), (K = !1)), q < 5 && q++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        q = 6;
    },
    MESSAGE_REACTION_ADD: eC,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = j[t];
        if (null == i || i.type !== O.Mm.MESSAGE) return !1;
        let r = A.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: eC,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = j[t];
        if (null == n || n.type !== O.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = j[t];
        if (null == i || i.type !== O.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: ef,
    MESSAGE_ACK: ef,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        ee = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        et = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        en = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        ei.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        ei.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        er = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            W = null;
            return;
        }
        W = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        el = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        es = t;
    },
});

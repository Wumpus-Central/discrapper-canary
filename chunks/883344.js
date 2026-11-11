n(321073);
var i = n(681154),
    r = n(855986),
    a = n(73153),
    s = n(99753),
    l = n(20805),
    o = n(583846),
    d = n(343446),
    c = n(50258),
    u = n(698441),
    _ = n(813645),
    E = n(432005),
    A = n(841643),
    f = n(46653),
    h = n(734057),
    I = n(504047),
    p = n(71393),
    m = n(596344),
    T = n(576705),
    g = n(218461),
    S = n(994500),
    N = n(543465),
    C = n(287809),
    O = n(927813),
    R = n(449054),
    L = n(983253),
    y = n(435713),
    D = n(116127),
    b = n(596720),
    v = n(449e3),
    P = n(859524),
    M = n(522606),
    U = n(3030),
    w = n(733811),
    G = n(689554),
    x = n(652215),
    k = n(424994);
let F = +O.A.Millis.DAY,
    B = "icymi_store",
    V = 3 * O.A.Millis.DAY,
    H = [],
    j = null,
    W = 0,
    Y = [],
    K = [],
    $ = {},
    X = {},
    z = {},
    q = {},
    Q = {},
    J = {},
    Z = 0,
    ee = !1,
    et = !1,
    en = !1,
    ei = null,
    er = null,
    ea = 0,
    es = [],
    el = [],
    eo = 0,
    ed = [],
    ec = 0,
    eu = !0,
    e_ = !1,
    eE = new Set(),
    eA = !1,
    ef = !1,
    eh = 0,
    eI = 0,
    ep = L.lo,
    em = null;
function eT() {
    ((ep = L.lo), (em = null));
}
function eg() {
    (L.C2.resetSession(), eT());
}
function eS(e) {
    return (
        null != e.userId &&
        f.default.isAuthenticated() &&
        f.default.getId() === e.userId &&
        C.default.getCurrentUser()?.id === e.userId &&
        (f.default.getAuthSessionIdHash() ?? null) === e.authSessionIdHash
    );
}
function eN() {
    let e = L.C2.observeGate((0, A.SL)(B));
    return null == em || eS(em) ? !(!e && (null == em || L.C2.matches(em))) && (eT(), !0) : (eg(), !0);
}
function eC(e) {
    return eS(e) && L.C2.canApply(e, (0, A.SL)(B));
}
function eO(e, t) {
    if (Date.now() - W > 6 * O.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function eR(e) {
    if (!D.A.filterStaffContent()) return !0;
    if ((0, P.xj)(e)) {
        if (e.data.guild_id === b.VL) return !0;
        let t = p.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(x.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eL(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function ey() {
    if (
        ((es = es.filter((e) => e.type !== b.Mm.RECOMMENDED_GUILDS)),
        (el = el.filter((e) => e.type !== b.Mm.RECOMMENDED_GUILDS)),
        0 === ed.length)
    )
        return;
    let e = "recommendedGuilds",
        t = p.A.getGuildsArray().filter((e) => e.features.has(x.GuildFeatures.COMMUNITY)).length >= 5,
        n = v.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - ec > F && Date.now() - n < V) return;
    let i = { id: e, type: b.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((z[i.id] = i), (X[i.id] = i), 0 === es.length)) el = [i, ...el];
    else if ((!t && es.length < 5) || (t && es.length < 10)) es = [...es, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        es.splice(e, 0, i);
    } else es.splice(5, 0, i);
}
function eD() {
    let e = new Set();
    if (
        (Y.forEach((t) => {
            e.add(t.id);
        }),
        null != er)
    )
        if (e.has(er.id)) {
            let e = er.id,
                t = er.type,
                n = Y.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((er = Y[n]), (Y = Y.filter((t) => t.id !== e)), (Y = [er, ...Y]));
        } else ((Y = [er, ...Y]), e.add(er.id));
    Y.forEach((e) => {
        ((X[e.id] = e),
            e.type === b.Mm.CUSTOM_STATUS &&
                (S.A.isBlockedOrIgnored(e.data.user_id) ? (q[e.id] = !0) : (z[e.id] = (0, P.YM)(e))));
    });
}
function eb(e) {
    let t, n, r, a, d;
    if ((Y.length > 0 && ((H = Y), (Y = []), (K = [])), Z++, null != e)) ((es = e.newUnread), (el = e.newRead));
    else {
        let [e, t] = ev(H);
        ((es = e), (el = t));
    }
    ((function () {
        let e = p.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != Q[n] && Q[n] < 0) continue;
            let e = u.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, u.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = h.A.getChannel(n.channel_id);
                        if (!T.A.can(x.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, u.W$)(n, 2 * O.A.Seconds.DAY) || (0, u.Fd)(n)) &&
                        (null == z[n.id] && (z[n.id] = { id: n.id, type: b.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
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
            let n = I.A.getGuildAffinity(e.data.guild_id),
                i = I.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            ((X[e.id] = e), null != v.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (es = eL(es, n, b.Mm.GUILD_EVENT, 7)),
            (el = eL(el, i, b.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (a = []),
        (d = s.A.getFeed(k.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        d.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME) ||
                (0, o.I5)(e.content)
            )
                return;
            if ((0, l.zD)(e.content)) {
                if (
                    (null == n[e.content.author_id] && (n[e.content.author_id] = new Set()),
                    n[e.content.author_id].has(e.content.extra.application_id))
                )
                    return;
                n[e.content.author_id].add(e.content.extra.application_id);
            }
            null == z[e.content.id] &&
                (z[e.content.id] = { id: e.content.id, type: b.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: b.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), (X[s.id] = s), null != v.A.getReadTimestamp(s.id) ? a.push(s) : r.push(s));
        }),
        (es = eL(es, r, b.Mm.ACTIVITY, 5)),
        (el = eL(el, a, b.Mm.ACTIVITY, 5)),
        ey(),
        null != $.load_id &&
            j !== $.load_id &&
            ((0, G.h)({
                newTrackingProps: $,
                hasNewContent: et,
                unreadFeedItems: es,
                readFeedItems: el,
                homeSessionId: "gravity",
            }),
            (j = $.load_id ?? null),
            ($ = {})),
        (eo = 0),
        es.length + el.length === 0 && (ef = !0),
        (0, P.kx)([...es, ...el], 0, 15, z),
        (e_ = !1));
}
function ev(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != v.A.getReadTimestamp(e.id);
            (e.type === b.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, U.$)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === b.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [[...i, ...n], t.sort((e, t) => (0, P.tI)(e.id, t.id))]
    );
}
function eP(e, t) {
    let n = [],
        i = new Set(H.map((e) => e.id));
    for (let r of e)
        !(r.type === b.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == v.A.getReadTimestamp(r.id) &&
            (r.type !== b.Mm.MESSAGE || ((0, U.$)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function eM(e, t) {
    return e.filter((e) => !(0, P.xj)(e) || e.data.channel_id !== t);
}
function eU(e, t) {
    (0, P.Wu)(t) === P.n$.MUTED && ((H = eM(H, e)), (es = eM(es, e)), (el = eM(el, e)), (Y = eM(Y, e)), (K = eM(K, e)));
}
function ew(e, t) {
    return e.filter((e) => !(0, P.xj)(e) || e.data.guild_id !== t);
}
function eG(e, t) {
    (0, P.Wu)(t) === P.n$.MUTED && ((H = ew(H, e)), (es = ew(es, e)), (el = ew(el, e)), (Y = ew(Y, e)), (K = ew(K, e)));
}
function ex(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        s = z[n];
    if (null == s || s.type !== b.Mm.MESSAGE) return !1;
    let l = f.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (s.message = s.message.addReaction(r, l, { colors: e.colors, reactionType: a }))
        : (s.message = s.message.removeReaction(r, l, a));
}
function ek(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    es.forEach((e, r) => {
        (r > eo || !en) && e.type === b.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = et,
        [a, s] = ev(Y);
    if (((K = eP(a, t)), (et = en ? r && K.length >= 3 : r && eO(i, Y)), 0 === n.length && r === et)) return !1;
    0 !== n.length && ((es = i), (el = [...el, ...n]));
}
class eF extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(
            c.A,
            f.default,
            h.A,
            s.A,
            d.A,
            I.A,
            u.Ay,
            p.A,
            D.A,
            _.A,
            v.A,
            m.A,
            T.A,
            g.Ay,
            S.A,
            N.Ay,
            C.default,
        ),
            this.syncWith([c.A, f.default, _.A, C.default], eN),
            null != e &&
                ((H = e.dehydratedItems ?? []).forEach((e) => {
                    X[e.id] = e;
                }),
                (Q = e.customGuildScores ?? {}),
                (J = e.customChannelScoresByGuild ?? {}),
                (ea = e.numOpens ?? 0),
                (W = e.lastOpened ?? 0),
                (ec = e.lastJoinedRecommendedGuild ?? 0),
                (eI = e.lastTakenICYMISurvey ?? 0)));
    }
    getDiscoverSnapshot() {
        return null != em && eC(em) ? ep : L.lo;
    }
    getVersion() {
        return Z;
    }
    getDehydratedItems() {
        return H;
    }
    getNewDehydratedItems() {
        return Y;
    }
    getDehydratedItem(e) {
        return X[e] ?? null;
    }
    getHydratedItem(e) {
        return z[e] ?? null;
    }
    getMessage(e) {
        let t = z[e];
        return null == t || t.type !== b.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return z;
    }
    getUnreadDisplayItems() {
        return es;
    }
    getNewUnreadDehydratedItems() {
        return K;
    }
    getReadDisplayItems() {
        return el;
    }
    getNextIndexToHydrate() {
        return eo;
    }
    getMissingItems() {
        return q;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === P.n$.MUTED || this.getCustomChannelScore(e, t) === P.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == J[e] || null == J[e][t] ? P.n$.UNKNOWN : (0, P.Wu)(J[e][t]);
    }
    getCustomGuildScore(e) {
        return Q[e] ?? 0;
    }
    getCustomGuildScores() {
        return Q;
    }
    hasNewContent() {
        return et;
    }
    getCurrentStatusAttachments(e) {
        return null == ei || ei[0] !== e ? [] : ei[1];
    }
    getLoadId() {
        return j;
    }
    hasOpenedEnoughTimes() {
        return 5 === ea;
    }
    hasOpened() {
        return en;
    }
    getDiscoverableGuilds() {
        return ed;
    }
    videosMuted() {
        return eu;
    }
    isRefreshing() {
        return e_;
    }
    isHydrating() {
        return eE.size > 0;
    }
    notificationItem() {
        return er;
    }
    getIsTabFocused() {
        return eA;
    }
    isFirstPageHydrated() {
        return ef;
    }
    lastScrollEvent() {
        return eh;
    }
    lastTakenICYMISurvey() {
        return eI;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...es, ...el].findIndex((e) => e.type === b.Mm.RECOMMENDED_GUILDS)
            : [...es, ...el].filter((e) => null != z[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: H,
            numOpens: ea,
            customGuildScores: Q,
            customChannelScoresByGuild: J,
            lastOpened: W,
            lastJoinedRecommendedGuild: ec,
            lastTakenICYMISurvey: eI,
        };
    }
}
let eB = new eF(a.h, {
    LOGOUT: function () {
        (eg(),
            (H = []),
            (Y = []),
            (K = []),
            (X = {}),
            ($ = {}),
            (z = {}),
            (q = {}),
            (j = null),
            (Q = {}),
            (J = {}),
            (Z = 0),
            (ee = !1),
            (et = !1),
            (en = !1),
            (es = []),
            (el = []),
            (eo = 0),
            (W = 0),
            (ec = 0),
            (eu = !0),
            (e_ = !1),
            (eE = new Set()),
            (er = null),
            (eA = !1),
            (ef = !1),
            (ei = null),
            (eh = 0));
    },
    LOGIN_SUCCESS: eg,
    LOGIN_RESET: function (e) {
        let { isMultiAccount: t } = e;
        if (t) return !1;
        eg();
    },
    AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eg,
    CLOSE_SUSPENDED_USER: eg,
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        if (4004 !== t) return !1;
        eg();
    },
    CONNECTION_OPEN: eN,
    AUTH_SESSION_CHANGE: eN,
    LAB_FEATURE_TOGGLE: eN,
    CURRENT_USER_UPDATE: eN,
    USER_UPDATE: eN,
    CONNECTION_OPEN_STATE_UPDATE: eN,
    APEX_EXPERIMENT_OVERRIDE_CREATE: eN,
    APEX_EXPERIMENT_OVERRIDE_DELETE: eN,
    APEX_EXPERIMENT_OVERRIDE_CLEAR: eN,
    APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: eN,
    APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: eN,
    APEX_EXPERIMENT_CLEAR_FOR_TESTS: eN,
    APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: eN,
    APEX_EXPERIMENTS_FETCH_START: eN,
    APEX_EXPERIMENTS_FETCH_SUCCESS: eN,
    APEX_EXPERIMENTS_FETCH_FAILURE: eN,
    DISCOVER_PICKER_COMMIT: function (e) {
        let { identity: t } = e,
            n = (0, A.SL)(B);
        if ((L.C2.observeGate(n), !L.C2.matches(t) || !eS(t))) return !1;
        ((ep = (0, L.Sw)(ep, { type: "commit", enabled: n })), (em = t));
    },
    DISCOVER_REQUEST_STARTED: function (e) {
        let { identity: t } = e;
        if (!eC(t)) return !1;
        ((null != em && L.C2.matches(em)) || eT(), (ep = (0, L.Sw)(ep, { type: "start" })), (em = t));
    },
    DISCOVER_REQUEST_FAILED: function (e) {
        let { identity: t } = e;
        if (!eC(t)) return !1;
        ((ep = (0, L.Sw)(ep, { type: "error" })), (em = t));
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return ((er = n), null != j && ((Y = Y.length > 0 ? Y : [...H]), eD(), eb()), !0);
        if (null != t) {
            let e = {
                id: t.message.id,
                type: b.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: x.rbe.GUILD_TEXT,
                },
            };
            if (
                ((X[t.message.id] = e),
                (z[t.message.id] = { ...e, message: (0, E.rh)(t.message) }),
                null == j && null == $)
            ) {
                let [t, n] = ev((H = [e, ...H]));
                ((es = t), (el = n));
            } else ((Y = [e, ...Y]), eb());
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            n,
            i,
            { items: r, loadId: a, startTime: s, isInitialLoad: l, isReloading: o, discoverRequest: d } = e;
        if (null != d && !eC(d)) return !1;
        let c =
            ((t = new Set(b.H8)),
            (n = new Map()),
            (i = (0, A.SL)(B) ? (0, w.I)(r, (e, t) => n.set(e, t)) : []),
            {
                items: r
                    .filter((e) => t.has(e.type))
                    .filter((e) => {
                        if (e.type !== b.Mm.DISCOVER_ITEM) return !0;
                        let t = n.get(e);
                        return null != t && ((z[e.id] = t), !0);
                    })
                    .filter(eR)
                    .map((e) => {
                        if (e.type === b.Mm.MESSAGE && null != e.data.message_context) {
                            let t = {};
                            (null != e.data.message_context.reply_message_id &&
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
                                (e.data.message_context = t));
                        }
                        return e;
                    }),
                discoverItems: i,
            });
        ((Y = c.items),
            null != d && ((ep = (0, L.Sw)(ep, { type: "success", items: c.discoverItems, loadId: a })), (em = d)),
            eD(),
            ($ = {
                load_id: a,
                load_time_millis: Date.now() - s,
                feed_item_ids: Y.flatMap((e) => {
                    let t = (0, y.v)(e);
                    return null == t ? [] : [t];
                }),
            }));
        let [u, _] = ev(Y);
        if (((K = eP(u)), !en || 0 === Z || l))
            ((Z = 0), !eA && eO(u, Y) ? ((et = !0), (ee = !0)) : (et = !1), eb({ newUnread: u, newRead: _ }));
        else {
            Z > 0 && (er = null);
            let e = K.length > 3;
            (o || (et = e), e && ((0, P.kx)([...u, ..._], 0, 15, z), u.length + _.length === 0 && (ef = !0)));
        }
        (0, G.h)({
            newTrackingProps: $,
            hasNewContent: et,
            unreadFeedItems: u,
            readFeedItems: _,
            homeSessionId: eA ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: r,
            startingIndex: a,
            endingIndex: s,
        } = e;
        ((ef = !0), (z = { ...z }));
        let l = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            o = n.reduce((e, t) => ((e[t.id] = t), e), {});
        (i.forEach((e) => {
            let t = l[e.message_id];
            if (null == t) {
                q[e.message_id] = !0;
                return;
            }
            let n = X[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: b.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: x.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = m.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, P.Rh)(t, n);
                z[t.message.id] = { ...e, message: i };
            } else z[t.message.id] = (0, P.Rh)(t, n);
        }),
            r.forEach((e) => {
                let t = o[e.content_id];
                if (null == t) {
                    q[e.content_id] = !0;
                    return;
                }
                let n = X[e.content_id];
                if (null == n) {
                    q[e.content_id] = !0;
                    return;
                }
                z[t.id] = { ...n, activity: t };
            }),
            a === eo && (eo = s),
            eE.delete((0, M.V)(a, s)));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((Q[e.guild_id] = e.guild_score),
            eG(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                (null == J[e.guild_id] && (J[e.guild_id] = {}),
                    (J[e.guild_id][t] = e.custom_channel_scores[t]),
                    eU(t, e.custom_channel_scores[t]));
        ((Q = { ...Q }), (J = { ...J }));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        ((ed = t.map((e) => (0, R.jE)(e.guild))), ey());
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        (null != i && ((Q[n] = i), eG(n, i), (Q = { ...Q })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                (null == J[n] && (J[n] = {}), (J[n][t] = i), eU(t, i), (J = { ...J }));
            }));
    },
    RELOAD_ICYMI: function () {
        if (0 === Y.length) return !1;
        (eb(), (et = !1));
    },
    ICYMI_TAB_OPENED: function () {
        ((en = !0), (W = Date.now()), ee && ((ee = !1), (et = !1)), ea < 5 && ea++);
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        ea = 6;
    },
    MESSAGE_REACTION_ADD: ex,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = z[t];
        if (null == i || i.type !== b.Mm.MESSAGE) return !1;
        let r = f.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: ex,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = z[t];
        if (null == n || n.type !== b.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = z[t];
        if (null == i || i.type !== b.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: ek,
    MESSAGE_ACK: ek,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        ec = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        eu = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        e_ = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        eE.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        eE.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        eA = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            ei = null;
            return;
        }
        ei = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        eh = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        eI = t;
    },
});
n.d(t, {}, { A: eB });

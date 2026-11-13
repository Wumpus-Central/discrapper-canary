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
    _ = n(432005),
    E = n(841643),
    A = n(46653),
    f = n(734057),
    h = n(504047),
    I = n(71393),
    p = n(596344),
    m = n(576705),
    T = n(218461),
    g = n(994500),
    S = n(543465),
    N = n(287809),
    C = n(927813),
    O = n(449054),
    R = n(983253),
    L = n(435713),
    y = n(116127),
    D = n(596720),
    b = n(449e3),
    v = n(859524),
    P = n(522606),
    M = n(3030),
    U = n(733811),
    w = n(689554),
    G = n(652215),
    x = n(424994);
let k = +C.A.Millis.DAY,
    F = "icymi_store",
    B = 3 * C.A.Millis.DAY,
    V = [],
    H = null,
    j = 0,
    W = [],
    Y = [],
    K = {},
    $ = {},
    X = {},
    z = {},
    q = {},
    Q = {},
    J = 0,
    Z = !1,
    ee = !1,
    et = !1,
    en = null,
    ei = null,
    er = 0,
    ea = [],
    es = [],
    el = 0,
    eo = [],
    ed = 0,
    ec = !0,
    eu = !1,
    e_ = new Set(),
    eE = !1,
    eA = !1,
    ef = 0,
    eh = 0,
    eI = R.lo,
    ep = null;
function em() {
    ((eI = R.lo), (ep = null));
}
function eT() {
    (R.C2.resetSession(), em());
}
function eg(e) {
    return (
        null != e.userId &&
        A.default.isAuthenticated() &&
        A.default.getId() === e.userId &&
        N.default.getCurrentUser()?.id === e.userId &&
        (A.default.getAuthSessionIdHash() ?? null) === e.authSessionIdHash
    );
}
function eS() {
    let e = R.C2.observeGate((0, E.SL)(F));
    return null == ep || eg(ep) ? !(!e && (null == ep || R.C2.matches(ep))) && (em(), !0) : (eT(), !0);
}
function eN(e) {
    return eg(e) && R.C2.canApply(e, (0, E.SL)(F));
}
function eC(e, t) {
    if (Date.now() - j > 6 * C.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function eO(e) {
    if (!y.A.filterStaffContent()) return !0;
    if ((0, v.xj)(e)) {
        if (e.data.guild_id === D.VL) return !0;
        let t = I.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(G.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eR(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function eL() {
    if (
        ((ea = ea.filter((e) => e.type !== D.Mm.RECOMMENDED_GUILDS)),
        (es = es.filter((e) => e.type !== D.Mm.RECOMMENDED_GUILDS)),
        0 === eo.length)
    )
        return;
    let e = "recommendedGuilds",
        t = I.A.getGuildsArray().filter((e) => e.features.has(G.GuildFeatures.COMMUNITY)).length >= 5,
        n = b.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - ed > k && Date.now() - n < B) return;
    let i = { id: e, type: D.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((X[i.id] = i), ($[i.id] = i), 0 === ea.length)) es = [i, ...es];
    else if ((!t && ea.length < 5) || (t && ea.length < 10)) ea = [...ea, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        ea.splice(e, 0, i);
    } else ea.splice(5, 0, i);
}
function ey() {
    let e = new Set();
    if (
        (W.forEach((t) => {
            e.add(t.id);
        }),
        null != ei)
    )
        if (e.has(ei.id)) {
            let e = ei.id,
                t = ei.type,
                n = W.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((ei = W[n]), (W = W.filter((t) => t.id !== e)), (W = [ei, ...W]));
        } else ((W = [ei, ...W]), e.add(ei.id));
    W.forEach((e) => {
        (($[e.id] = e),
            e.type === D.Mm.CUSTOM_STATUS &&
                (g.A.isBlockedOrIgnored(e.data.user_id) ? (z[e.id] = !0) : (X[e.id] = (0, v.YM)(e))));
    });
}
function eD(e) {
    let t, n, r, a, d;
    if ((W.length > 0 && ((V = W), (W = []), (Y = [])), J++, null != e)) ((ea = e.newUnread), (es = e.newRead));
    else {
        let [e, t] = eb(V);
        ((ea = e), (es = t));
    }
    ((function () {
        let e = I.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != q[n] && q[n] < 0) continue;
            let e = u.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, u.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = f.A.getChannel(n.channel_id);
                        if (!m.A.can(G.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, u.W$)(n, 2 * C.A.Seconds.DAY) || (0, u.Fd)(n)) &&
                        (null == X[n.id] && (X[n.id] = { id: n.id, type: D.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: D.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = h.A.getGuildAffinity(e.data.guild_id),
                i = h.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            (($[e.id] = e), null != b.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (ea = eR(ea, n, D.Mm.GUILD_EVENT, 7)),
            (es = eR(es, i, D.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (a = []),
        (d = s.A.getFeed(x.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
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
            null == X[e.content.id] &&
                (X[e.content.id] = { id: e.content.id, type: D.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: D.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), ($[s.id] = s), null != b.A.getReadTimestamp(s.id) ? a.push(s) : r.push(s));
        }),
        (ea = eR(ea, r, D.Mm.ACTIVITY, 5)),
        (es = eR(es, a, D.Mm.ACTIVITY, 5)),
        eL(),
        null != K.load_id &&
            H !== K.load_id &&
            ((0, w.h)({
                newTrackingProps: K,
                hasNewContent: ee,
                unreadFeedItems: ea,
                readFeedItems: es,
                homeSessionId: "gravity",
            }),
            (H = K.load_id ?? null),
            (K = {})),
        (el = 0),
        ea.length + es.length === 0 && (eA = !0),
        (0, v.kx)([...ea, ...es], 0, 15, X),
        (eu = !1));
}
function eb(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != b.A.getReadTimestamp(e.id);
            (e.type === D.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, M.$)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === D.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [[...i, ...n], t.sort((e, t) => (0, v.tI)(e.id, t.id))]
    );
}
function ev(e, t) {
    let n = [],
        i = new Set(V.map((e) => e.id));
    for (let r of e)
        !(r.type === D.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == b.A.getReadTimestamp(r.id) &&
            (r.type !== D.Mm.MESSAGE || ((0, M.$)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function eP(e, t) {
    return e.filter((e) => !(0, v.xj)(e) || e.data.channel_id !== t);
}
function eM(e, t) {
    (0, v.Wu)(t) === v.n$.MUTED && ((V = eP(V, e)), (ea = eP(ea, e)), (es = eP(es, e)), (W = eP(W, e)), (Y = eP(Y, e)));
}
function eU(e, t) {
    return e.filter((e) => !(0, v.xj)(e) || e.data.guild_id !== t);
}
function ew(e, t) {
    (0, v.Wu)(t) === v.n$.MUTED && ((V = eU(V, e)), (ea = eU(ea, e)), (es = eU(es, e)), (W = eU(W, e)), (Y = eU(Y, e)));
}
function eG(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        s = X[n];
    if (null == s || s.type !== D.Mm.MESSAGE) return !1;
    let l = A.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (s.message = s.message.addReaction(r, l, { colors: e.colors, reactionType: a }))
        : (s.message = s.message.removeReaction(r, l, a));
}
function ex(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    ea.forEach((e, r) => {
        (r > el || !et) && e.type === D.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = ee,
        [a, s] = eb(W);
    if (((Y = ev(a, t)), (ee = et ? r && Y.length >= 3 : r && eC(i, W)), 0 === n.length && r === ee)) return !1;
    0 !== n.length && ((ea = i), (es = [...es, ...n]));
}
class ek extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(c.A, A.default, f.A, s.A, d.A, h.A, u.Ay, I.A, y.A, b.A, p.A, m.A, T.Ay, g.A, S.Ay, N.default),
            this.syncWith([c.A, A.default, N.default], eS),
            null != e &&
                ((V = e.dehydratedItems ?? []).forEach((e) => {
                    $[e.id] = e;
                }),
                (q = e.customGuildScores ?? {}),
                (Q = e.customChannelScoresByGuild ?? {}),
                (er = e.numOpens ?? 0),
                (j = e.lastOpened ?? 0),
                (ed = e.lastJoinedRecommendedGuild ?? 0),
                (eh = e.lastTakenICYMISurvey ?? 0)));
    }
    getDiscoverSnapshot() {
        return null != ep && eN(ep) ? eI : R.lo;
    }
    getVersion() {
        return J;
    }
    getDehydratedItems() {
        return V;
    }
    getNewDehydratedItems() {
        return W;
    }
    getDehydratedItem(e) {
        return $[e] ?? null;
    }
    getHydratedItem(e) {
        return X[e] ?? null;
    }
    getMessage(e) {
        let t = X[e];
        return null == t || t.type !== D.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return X;
    }
    getUnreadDisplayItems() {
        return ea;
    }
    getNewUnreadDehydratedItems() {
        return Y;
    }
    getReadDisplayItems() {
        return es;
    }
    getNextIndexToHydrate() {
        return el;
    }
    getMissingItems() {
        return z;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === v.n$.MUTED || this.getCustomChannelScore(e, t) === v.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == Q[e] || null == Q[e][t] ? v.n$.UNKNOWN : (0, v.Wu)(Q[e][t]);
    }
    getCustomGuildScore(e) {
        return q[e] ?? 0;
    }
    getCustomGuildScores() {
        return q;
    }
    hasNewContent() {
        return ee;
    }
    getCurrentStatusAttachments(e) {
        return null == en || en[0] !== e ? [] : en[1];
    }
    getLoadId() {
        return H;
    }
    hasOpenedEnoughTimes() {
        return 5 === er;
    }
    hasOpened() {
        return et;
    }
    getDiscoverableGuilds() {
        return eo;
    }
    videosMuted() {
        return ec;
    }
    isRefreshing() {
        return eu;
    }
    isHydrating() {
        return e_.size > 0;
    }
    notificationItem() {
        return ei;
    }
    getIsTabFocused() {
        return eE;
    }
    isFirstPageHydrated() {
        return eA;
    }
    lastScrollEvent() {
        return ef;
    }
    lastTakenICYMISurvey() {
        return eh;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...ea, ...es].findIndex((e) => e.type === D.Mm.RECOMMENDED_GUILDS)
            : [...ea, ...es].filter((e) => null != X[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: V,
            numOpens: er,
            customGuildScores: q,
            customChannelScoresByGuild: Q,
            lastOpened: j,
            lastJoinedRecommendedGuild: ed,
            lastTakenICYMISurvey: eh,
        };
    }
}
let eF = new ek(a.h, {
    LOGOUT: function () {
        (eT(),
            (V = []),
            (W = []),
            (Y = []),
            ($ = {}),
            (K = {}),
            (X = {}),
            (z = {}),
            (H = null),
            (q = {}),
            (Q = {}),
            (J = 0),
            (Z = !1),
            (ee = !1),
            (et = !1),
            (ea = []),
            (es = []),
            (el = 0),
            (j = 0),
            (ed = 0),
            (ec = !0),
            (eu = !1),
            (e_ = new Set()),
            (ei = null),
            (eE = !1),
            (eA = !1),
            (en = null),
            (ef = 0));
    },
    LOGIN_SUCCESS: eT,
    LOGIN_RESET: function (e) {
        let { isMultiAccount: t } = e;
        if (t) return !1;
        eT();
    },
    AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eT,
    CLOSE_SUSPENDED_USER: eT,
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        if (4004 !== t) return !1;
        eT();
    },
    CONNECTION_OPEN: eS,
    AUTH_SESSION_CHANGE: eS,
    CURRENT_USER_UPDATE: eS,
    USER_UPDATE: eS,
    CONNECTION_OPEN_STATE_UPDATE: eS,
    APEX_EXPERIMENT_OVERRIDE_CREATE: eS,
    APEX_EXPERIMENT_OVERRIDE_DELETE: eS,
    APEX_EXPERIMENT_OVERRIDE_CLEAR: eS,
    APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: eS,
    APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: eS,
    APEX_EXPERIMENT_CLEAR_FOR_TESTS: eS,
    APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: eS,
    APEX_EXPERIMENTS_FETCH_START: eS,
    APEX_EXPERIMENTS_FETCH_SUCCESS: eS,
    APEX_EXPERIMENTS_FETCH_FAILURE: eS,
    DISCOVER_PICKER_COMMIT: function (e) {
        let { identity: t } = e,
            n = (0, E.SL)(F);
        if ((R.C2.observeGate(n), !R.C2.matches(t) || !eg(t))) return !1;
        ((eI = (0, R.Sw)(eI, { type: "commit", enabled: n })), (ep = t));
    },
    DISCOVER_REQUEST_STARTED: function (e) {
        let { identity: t } = e;
        if (!eN(t)) return !1;
        ((null != ep && R.C2.matches(ep)) || em(), (eI = (0, R.Sw)(eI, { type: "start" })), (ep = t));
    },
    DISCOVER_REQUEST_FAILED: function (e) {
        let { identity: t, retryAfterAt: n } = e;
        if (!eN(t)) return !1;
        ((eI = (0, R.Sw)(eI, { type: "error", retryAfterAt: n })), (ep = t));
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return ((ei = n), null != H && ((W = W.length > 0 ? W : [...V]), ey(), eD()), !0);
        if (null != t) {
            let e = {
                id: t.message.id,
                type: D.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: G.rbe.GUILD_TEXT,
                },
            };
            if (
                (($[t.message.id] = e),
                (X[t.message.id] = { ...e, message: (0, _.rh)(t.message) }),
                null == H && null == K)
            ) {
                let [t, n] = eb((V = [e, ...V]));
                ((ea = t), (es = n));
            } else ((W = [e, ...W]), eD());
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            n,
            i,
            { items: r, loadId: a, startTime: s, isInitialLoad: l, isReloading: o, discoverRequest: d } = e;
        if (null != d && !eN(d)) return !1;
        let c =
            ((t = new Set(D.H8)),
            (n = new Map()),
            (i = (0, E.SL)(F) ? (0, U.I)(r, (e, t) => n.set(e, t)) : []),
            {
                items: r
                    .filter((e) => t.has(e.type))
                    .filter((e) => {
                        if (e.type !== D.Mm.DISCOVER_ITEM) return !0;
                        let t = n.get(e);
                        return null != t && ((X[e.id] = t), !0);
                    })
                    .filter(eO)
                    .map((e) => {
                        if (e.type === D.Mm.MESSAGE && null != e.data.message_context) {
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
        ((W = c.items),
            null != d && ((eI = (0, R.Sw)(eI, { type: "success", items: c.discoverItems, loadId: a })), (ep = d)),
            ey(),
            (K = {
                load_id: null != d && "none" === a && 0 === r.length ? null : a,
                load_time_millis: Date.now() - s,
                feed_item_ids: W.flatMap((e) => {
                    let t = (0, L.v)(e);
                    return null == t ? [] : [t];
                }),
            }));
        let [u, _] = eb(W);
        if (((Y = ev(u)), !et || 0 === J || l))
            ((J = 0), !eE && eC(u, W) ? ((ee = !0), (Z = !0)) : (ee = !1), eD({ newUnread: u, newRead: _ }));
        else {
            J > 0 && (ei = null);
            let e = Y.length > 3;
            (o || (ee = e), e && ((0, v.kx)([...u, ..._], 0, 15, X), u.length + _.length === 0 && (eA = !0)));
        }
        (0, w.h)({
            newTrackingProps: K,
            hasNewContent: ee,
            unreadFeedItems: u,
            readFeedItems: _,
            homeSessionId: eE ? "foreground_load" : "background_load",
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
        ((eA = !0), (X = { ...X }));
        let l = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            o = n.reduce((e, t) => ((e[t.id] = t), e), {});
        (i.forEach((e) => {
            let t = l[e.message_id];
            if (null == t) {
                z[e.message_id] = !0;
                return;
            }
            let n = $[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: D.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: G.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = p.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, v.Rh)(t, n);
                X[t.message.id] = { ...e, message: i };
            } else X[t.message.id] = (0, v.Rh)(t, n);
        }),
            r.forEach((e) => {
                let t = o[e.content_id];
                if (null == t) {
                    z[e.content_id] = !0;
                    return;
                }
                let n = $[e.content_id];
                if (null == n) {
                    z[e.content_id] = !0;
                    return;
                }
                X[t.id] = { ...n, activity: t };
            }),
            a === el && (el = s),
            e_.delete((0, P.V)(a, s)));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((q[e.guild_id] = e.guild_score),
            ew(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                (null == Q[e.guild_id] && (Q[e.guild_id] = {}),
                    (Q[e.guild_id][t] = e.custom_channel_scores[t]),
                    eM(t, e.custom_channel_scores[t]));
        ((q = { ...q }), (Q = { ...Q }));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        ((eo = t.map((e) => (0, O.jE)(e.guild))), eL());
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        (null != i && ((q[n] = i), ew(n, i), (q = { ...q })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                (null == Q[n] && (Q[n] = {}), (Q[n][t] = i), eM(t, i), (Q = { ...Q }));
            }));
    },
    RELOAD_ICYMI: function () {
        if (0 === W.length) return !1;
        (eD(), (ee = !1));
    },
    ICYMI_TAB_OPENED: function () {
        ((et = !0), (j = Date.now()), Z && ((Z = !1), (ee = !1)), er < 5 && er++);
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        er = 6;
    },
    MESSAGE_REACTION_ADD: eG,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = X[t];
        if (null == i || i.type !== D.Mm.MESSAGE) return !1;
        let r = A.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: eG,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = X[t];
        if (null == n || n.type !== D.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = X[t];
        if (null == i || i.type !== D.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: ex,
    MESSAGE_ACK: ex,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        ed = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        ec = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        eu = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        e_.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        e_.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        eE = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            en = null;
            return;
        }
        en = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        ef = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        eh = t;
    },
});
n.d(t, {}, { A: eF });

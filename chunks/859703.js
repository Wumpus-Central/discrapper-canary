"use strict";
let r, i, s, a, o, l, u, c, d, _, f, p, h, m, E, g, A, I, T, S, y, v, N, C, R, O, b, D, L;
n.d(t, { A: () => e5 });
var w = n(735438),
    M = n(412703),
    x = n(440703),
    P = n(311907),
    k = n(73153),
    U = n(927813),
    G = n(178540),
    F = n(341915),
    V = n(405670),
    B = n(302654),
    H = n(943849),
    j = n(710969),
    Y = n(229006),
    W = n(654487);
let K = 6 * U.A.Millis.HOUR,
    $ = new Map(),
    z = null,
    q = null,
    Z = !1,
    X = null,
    Q = new Map(),
    J = 5e3,
    ee = 864e6;
function et() {
    (r = !1),
        (i = !1),
        (s = new Map()),
        (a = !1),
        (o = !1),
        (l = new Map()),
        (u = new Map()),
        (c = new Map()),
        (d = new Map()),
        (_ = new Map()),
        (f = 0),
        (p = 0),
        (h = new Set()),
        (m = new Set()),
        (E = new Set()),
        (g = new Set()),
        (A = new Set()),
        ($ = new Map()),
        (T = new Map()),
        (S = new Map()),
        (y = new Map()),
        (v = null),
        (N = new Map()),
        (I = new Set()),
        (C = new Map()),
        (R = new Map()),
        (O = new Map()),
        eJ(),
        (b = null),
        (L = new Map()),
        (Q = new Map()),
        (D = new Map());
}
function en(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, w.isNil)(n) &&
                M.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? I.add(e) : n.heartbeat?.lastBeatAt == null && I.delete(e));
}
function er(e, t) {
    let n = (c = new Map(c)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
        if ((en(e, t), c.set(e, r), L.has(e))) {
            let n = L.get(e);
            null != n && (L = new Map(L)).set(e, { ...n, ...t });
        }
        for (let [n, r] of R) {
            let i = r.quests.get(e);
            if (i?.questWithUserStatus != null) {
                let s = new Map(r.quests);
                s.set(e, { ...i, questWithUserStatus: { ...i.questWithUserStatus, ...t } }),
                    (R = new Map(R)).set(n, { ...r, quests: s });
            }
        }
    }
}
function ei(e, t) {
    let n = new Map(T);
    n.set(e, t), (T = n);
}
function es(e, t) {
    ei(e, t);
    let n = c.get(e),
        r = n?.userStatus;
    null != r && null == r.claimedAt && er(e, { userStatus: { ...r, claimedAt: t.claimedAt } });
}
function ea(e) {
    let { entitlements: t } = e,
        n = t.items[0].tenantMetadata?.questRewards.reward;
    return n?.tag !== x.l.REWARD_CODE ? null : n.rewardCode;
}
function eo(e, t) {
    let n = new Map(S);
    n.set(e, t.items), (S = n);
    let r = c.get(e),
        i = r?.userStatus;
    if (null != i && null == i.claimedAt) {
        let n = ea({ entitlements: t });
        null != n && ei(e, n), er(e, { userStatus: { ...i, claimedAt: t.claimedAt, claimedTier: n?.tier ?? null } });
    }
}
function el(e) {
    null != y.get(e) && (y = new Map(y)).delete(e);
}
function eu() {
    eJ(), et(), V.Ay.getState().clearState(), G.A.getState().reset();
}
function ec() {
    r = !0;
}
function ed(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (f = Date.now()), (r = !1), (c = new Map()), (u = new Map());
    let s = new Map();
    for (let e of t)
        c.set(e.id, e),
            u.set(e.id, e.config),
            s.set(e.id, (0, j.Ic)(e)),
            e.targetedContent.includes(F.uF.QUEST_BAR) &&
                (0, H.L)({ location: W.rE.QUESTS_STORE }).log(`Delivered ${e.config.messages.questName} (${e.id})`);
    for (let e of ((d = new Map()), n)) d.set(e.id, e);
    for (let e of L?.values()) c.has(e.id) || (c.set(e.id, e), u.set(e.id, e.config), s.set(e.id, (0, j.Ic)(e)));
    (O = s), eQ(), (b = null != i ? new Date(i) : null);
}
function e_() {
    (f = 0), (r = !1);
}
function ef(e) {
    let { placement: t } = e;
    (i = !0), (s = new Map(s)).set(t, !0);
}
function ep(e) {
    let { questId: t } = e;
    (A = new Set(A)).add(t), (Q = new Map(Q)).delete(t);
}
function eh(e) {
    let { questId: t, quest: n } = e;
    (A = new Set(A)).delete(t),
        (L = new Map(L)).set(t, n),
        (c = new Map(c)).set(t, n),
        (u = new Map(u)).set(t, n.config),
        (Q = new Map(Q)).delete(t);
}
function em(e) {
    let { questId: t, error: n } = e;
    (A = new Set(A)).delete(t), (Q = new Map(Q)).set(t, n);
}
function eE() {
    a = !0;
}
function eg(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (_ = new Map()), t)) _.set(e.id, e);
}
function eA() {
    a = !1;
}
function eI(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    I.add(t), er(t, { userStatus: r }), null != n && el(n);
}
function eT(e) {
    let { questId: t, streamKey: n } = e;
    null != n && null == y.get(n) && (y = new Map(y)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
}
function eS(e) {
    let { streamKey: t } = e;
    el(t);
}
function ey(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function ev(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function eN(e) {
    let { enrolledQuestUserStatus: t } = e;
    er(t.questId, { userStatus: t }), ey(t.questId);
}
function eC(e) {
    let { questId: t } = e;
    ey(t);
}
function eR(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.add(t), (E = n);
}
function eO(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(E);
    r.delete(t), (E = r), es(t, n);
}
function eb(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.delete(t), (E = n);
}
function eD(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.add(t), (m = n);
}
function eL(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(m);
    r.delete(t), (m = r), eo(t, n);
}
function ew(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.delete(t), (m = n);
}
function eM(e) {
    let t = new Set(g);
    t.delete(e), (g = t);
}
function ex(e) {
    let { questId: t } = e,
        n = new Set(g);
    n.add(t), (g = n), v === t && (v = null);
}
function eP(e) {
    let { dismissedQuestUserStatus: t } = e;
    er(t.questId, { userStatus: t }), eM(t.questId);
}
function ek(e) {
    let { questId: t } = e;
    eM(t);
}
function eU(e) {
    let { streamKey: t } = e;
    el(t);
}
function eG(e) {
    let { user_status: t } = e,
        n = (0, H.L)({ location: W.rE.QUESTS_STORE });
    n.log(`Received user status update for ${t.quest_id}`, t);
    let r = (0, Y.tp)(t);
    er(t.quest_id, { userStatus: r });
    let i = c.get(t.quest_id);
    if (null != i) {
        let e = (0, j.Ic)(i);
        O.get(t.quest_id) !== e && (O = new Map(O).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        $.has(r.questId) &&
        (n.log(`Removing optimistic progress for ${r.questId}`), $.delete(r.questId));
}
function eF(e) {
    let { previewQuestUserStatus: t } = e;
    er(t.questId, { userStatus: t }),
        null == t.claimedAt && (T = new Map(T)).delete(t.questId),
        null == t.enrolledAt && ((N = new Map(N)).delete(t.questId), V.Ay.getState().resetQuest(t.questId));
    let n = c.get(t.questId);
    if (null != n) {
        let e = (0, j.Ic)(n);
        O.get(t.questId) !== e && (O = new Map(O).set(t.questId, e));
    }
}
function eV(e) {
    let { questId: t } = e;
    v = v === t ? null : t;
}
function eB(e) {
    let { questId: t, platform: n } = e;
    (N = new Map(N)), null == n ? N.delete(t) : N.set(t, n);
}
function eH(e) {
    let { questId: t, taskEventName: n, progress: r } = e,
        i = $.get(t) ?? new Map();
    i.set(n, r), $.set(t, i);
}
function ej(e) {
    let { questId: t } = e;
    $.has(t) && $.delete(t), V.Ay.getState().resetQuest(t);
}
function eY(e) {
    let {
        quest: t,
        placement: n,
        adDecisionData: r,
        adContext: a,
        responseTtlSeconds: o,
        metadataRaw: l,
        metadataSealed: u,
        trafficMetadataRaw: c,
        trafficMetadataSealed: d,
        fetchedAt: _,
    } = e;
    (p = Date.now()), (i = !1), (s = new Map(s)).set(n, !1);
    let { enableNewRequestBehavior: f } = B.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (f) {
        let e = {
            questId: t?.id ?? null,
            fetchedAt: _,
            ttlMillis: eW(o),
            adDecisionData: r,
            adContext: a,
            metadataRaw: l,
            metadataSealed: u,
            trafficMetadataRaw: c,
            trafficMetadataSealed: d,
        };
        (D = new Map(D)).set(n, e);
    } else
        null == t
            ? C.delete(n)
            : C.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: a,
                  metadataRaw: l,
                  metadataSealed: u,
                  trafficMetadataRaw: c,
                  trafficMetadataSealed: d,
              });
}
function eW(e) {
    if (null == e) return K;
    let t = 1e3 * e;
    return t < K && t > 0 ? t : K;
}
function eK(e) {
    let { placement: t } = e;
    C.delete(t), (p = Date.now()), (i = !1), (s = new Map(s)).set(t, !1);
}
function e$(e) {
    let { content: t } = e;
    (o = !0), (l = new Map(l)).set(t, !0);
}
function ez(e) {
    let { serverQuests: t, metadataRaw: n, content: r, fetchedAt: i, responseTtlSeconds: s } = e;
    (o = !1), (l = new Map(l)).set(r, !1);
    let a = eW(s),
        u = R.get(r),
        c = new Map(u?.quests);
    for (let [e, n] of t)
        c.set(e, { fetchedAt: i, ttlMillis: a, questWithUserStatus: null != n ? (0, Y.rO)(n) : null });
    R.set(r, { quests: c, metadataRaw: n });
}
function eq(e) {
    let { content: t } = e;
    (o = !1), (l = new Map(l)).set(t, !1);
}
function eZ() {
    let e = !1,
        t = new Map(O);
    c.forEach((n, r) => {
        !0 !== t.get(r) && ((0, j.Ic)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((O = t), e4.emitChange());
}
function eX() {
    eZ();
    let e = (0, j.v1)(Array.from(c.values()));
    if (null == e) return;
    let t = Math.max(J, e - Date.now() + 2e3);
    t > ee ||
        (z = setTimeout(() => {
            eX();
        }, t));
}
function eQ() {
    eJ(), eX();
}
function eJ() {
    null != z && (clearTimeout(z), (z = null));
}
function e0(e) {
    let { quest_enrollment_blocked_until: t } = e;
    b = null != t ? new Date(t) : null;
}
function e1() {
    Z = !0;
}
function e2(e) {
    (Z = !1), (q = Date.now()), (X = e.questHomeHero);
}
function e3() {
    Z = !1;
}
et();
class e6 extends P.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return c;
    }
    get excludedQuests() {
        return d;
    }
    get claimedQuests() {
        return _;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return a;
    }
    isFetchingQuestPreview(e) {
        return A.has(e);
    }
    get lastFetchedCurrentQuests() {
        return f;
    }
    get lastFetchedQuestToDeliver() {
        return p;
    }
    get isFetchingQuestToDeliver() {
        return i;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get questDeliveryOverride() {
        return c.get(v ?? "");
    }
    get questToDeliverForPlacement() {
        return C;
    }
    get questEnrollmentBlockedUntil() {
        return b;
    }
    get questAdDecisionByPlacement() {
        return D;
    }
    getFetchQuestPreviewError(e) {
        return Q.get(e);
    }
    isEnrolling(e) {
        return h.has(e);
    }
    isClaimingReward(e) {
        return m.has(e);
    }
    isFetchingRewardCode(e) {
        return E.has(e);
    }
    isDismissingContent(e) {
        return g.has(e);
    }
    getRewardCode(e) {
        return T.get(e);
    }
    getRewards(e) {
        return S.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return y.get(e);
    }
    getQuest(e) {
        return c.get(e);
    }
    getQuestConfig(e) {
        return u.get(e);
    }
    get questConfigs() {
        return u;
    }
    isProgressingOnDesktop(e) {
        return I.has(e);
    }
    selectedTaskPlatform(e) {
        return N.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return $.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return O;
    }
    isQuestExpired(e) {
        return O.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return L.get(e);
    }
    isFetchingQuestHomeHero() {
        return Z;
    }
    getQuestHomeHeroConfig() {
        return X;
    }
    getLastFetchedQuestHomeHero() {
        return q;
    }
    get isFetchingEarnedQuestToDeliver() {
        return o;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return l?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return R;
    }
}
let e4 = new e6(k.h, {
        LOGOUT: eu,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: ec,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: ed,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: e_,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eE,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eg,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eA,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: ef,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eY,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eK,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: e$,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: ez,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: eq,
        QUESTS_FETCH_PREVIEW_BEGIN: ep,
        QUESTS_FETCH_PREVIEW_SUCCESS: eh,
        QUESTS_FETCH_PREVIEW_FAILURE: em,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eI,
        QUESTS_SEND_HEARTBEAT_FAILURE: eT,
        QUESTS_ENROLL_BEGIN: ev,
        QUESTS_ENROLL_SUCCESS: eN,
        QUESTS_ENROLL_FAILURE: eC,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eR,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eO,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eb,
        QUESTS_CLAIM_REWARD_BEGIN: eD,
        QUESTS_CLAIM_REWARD_SUCCESS: eL,
        QUESTS_CLAIM_REWARD_FAILURE: ew,
        QUESTS_DISMISS_CONTENT_BEGIN: ex,
        QUESTS_DISMISS_CONTENT_SUCCESS: eP,
        QUESTS_DISMISS_CONTENT_FAILURE: ek,
        QUESTS_USER_STATUS_UPDATE: eG,
        STREAM_CLOSE: eS,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eU,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eF,
        QUESTS_DELIVERY_OVERRIDE: eV,
        QUESTS_SELECT_TASK_PLATFORM: eB,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eH,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: ej,
        QUESTS_USER_COMPLETION_UPDATE: e0,
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: e1,
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: e2,
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: e3,
    }),
    e5 = e4;

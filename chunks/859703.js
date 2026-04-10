"use strict";
let r, i, s, a, o, l, u, c, d, _, f, p, h, m, E, g, A, I, T, S, y, v, N, C, R, O, b, D;
n.d(t, { A: () => e9 });
var L = n(735438),
    w = n(412703),
    M = n(440703),
    x = n(311907),
    P = n(73153),
    k = n(927813),
    U = n(178540),
    G = n(341915),
    F = n(405670),
    V = n(302654),
    B = n(851936),
    H = n(710969),
    j = n(229006),
    Y = n(654487);
let W = 6 * k.A.Millis.HOUR,
    K = new Map(),
    $ = null,
    z = null,
    q = !1,
    Z = null,
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
        (_ = 0),
        (f = 0),
        (p = new Set()),
        (h = new Set()),
        (m = new Set()),
        (E = new Set()),
        (g = new Set()),
        (K = new Map()),
        (I = new Map()),
        (T = new Map()),
        (S = new Map()),
        (y = null),
        (v = new Map()),
        (A = new Set()),
        (N = new Map()),
        (C = new Map()),
        (R = new Map()),
        eJ(),
        (O = null),
        (D = new Map()),
        (Q = new Map()),
        (b = new Map()),
        (z = null),
        (Z = null),
        (X = null);
}
function en(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, L.isNil)(n) &&
                w.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? A.add(e) : n.heartbeat?.lastBeatAt == null && A.delete(e));
}
function er(e, t) {
    let n = (u = new Map(u)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
        if ((en(e, t), u.set(e, r), D.has(e))) {
            let n = D.get(e);
            null != n && (D = new Map(D)).set(e, { ...n, ...t });
        }
    }
}
function ei(e, t) {
    let n = new Map(I);
    n.set(e, t), (I = n);
}
function es(e, t) {
    ei(e, t);
    let n = u.get(e),
        r = n?.userStatus;
    null != r && null == r.claimedAt && er(e, { userStatus: { ...r, claimedAt: t.claimedAt } });
}
function ea(e) {
    let { entitlements: t } = e,
        n = t.items[0].tenantMetadata?.questRewards.reward;
    return n?.tag !== M.l.REWARD_CODE ? null : n.rewardCode;
}
function eo(e, t) {
    let n = new Map(T);
    n.set(e, t.items), (T = n);
    let r = u.get(e),
        i = r?.userStatus;
    if (null != i && null == i.claimedAt) {
        let n = ea({ entitlements: t });
        null != n && ei(e, n), er(e, { userStatus: { ...i, claimedAt: t.claimedAt, claimedTier: n?.tier ?? null } });
    }
}
function el(e) {
    null != S.get(e) && (S = new Map(S)).delete(e);
}
function eu() {
    eJ(), et(), F.Ay.getState().clearState(), U.A.getState().reset();
}
function ec() {
    r = !0;
}
function ed(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (_ = Date.now()), (r = !1), (u = new Map());
    let s = new Map();
    for (let e of t)
        u.set(e.id, e),
            s.set(e.id, (0, H.Ic)(e)),
            e.targetedContent.includes(G.uF.QUEST_BAR) &&
                (0, B.L)({ location: Y.rE.QUESTS_STORE }).log(`Delivered ${e.config.messages.questName} (${e.id})`);
    for (let e of ((c = new Map()), n)) c.set(e.id, e);
    for (let e of D?.values()) u.has(e.id) || (u.set(e.id, e), s.set(e.id, (0, H.Ic)(e)));
    (R = s), eQ(), (O = null != i ? new Date(i) : null);
}
function e_() {
    (_ = 0), (r = !1);
}
function ef(e) {
    let { placement: t } = e;
    (i = !0), (s = new Map(s)).set(t, !0);
}
function ep(e) {
    let { questId: t } = e;
    (g = new Set(g)).add(t), (Q = new Map(Q)).delete(t);
}
function eh(e) {
    let { questId: t, quest: n } = e;
    (g = new Set(g)).delete(t), (D = new Map(D)).set(t, n), (u = new Map(u)).set(t, n), (Q = new Map(Q)).delete(t);
}
function em(e) {
    let { questId: t, error: n } = e;
    (g = new Set(g)).delete(t), (Q = new Map(Q)).set(t, n);
}
function eE() {
    a = !0;
}
function eg(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (d = new Map()), t)) d.set(e.id, e);
}
function eA() {
    a = !1;
}
function eI(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    A.add(t), er(t, { userStatus: r }), null != n && el(n);
}
function eT(e) {
    let { questId: t, streamKey: n } = e;
    null != n && null == S.get(n) && (S = new Map(S)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
}
function eS(e) {
    let { streamKey: t } = e;
    el(t);
}
function ey(e) {
    let t = new Set(p);
    t.delete(e), (p = t);
}
function ev(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
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
        n = new Set(m);
    n.add(t), (m = n);
}
function eO(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(m);
    r.delete(t), (m = r), es(t, n);
}
function eb(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.delete(t), (m = n);
}
function eD(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function eL(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(h);
    r.delete(t), (h = r), eo(t, n);
}
function ew(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.delete(t), (h = n);
}
function eM(e) {
    let t = new Set(E);
    t.delete(e), (E = t);
}
function ex(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.add(t), (E = n), y === t && (y = null);
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
        n = (0, B.L)({ location: Y.rE.QUESTS_STORE });
    n.log(`Received user status update for ${t.quest_id}`, t);
    let r = (0, j.tp)(t);
    er(t.quest_id, { userStatus: r });
    let i = u.get(t.quest_id);
    if (null != i) {
        let e = (0, H.Ic)(i);
        R.get(t.quest_id) !== e && (R = new Map(R).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        K.has(r.questId) &&
        (n.log(`Removing optimistic progress for ${r.questId}`), K.delete(r.questId));
}
function eF(e) {
    let { previewQuestUserStatus: t } = e;
    er(t.questId, { userStatus: t }),
        null == t.claimedAt && (I = new Map(I)).delete(t.questId),
        null == t.enrolledAt && ((v = new Map(v)).delete(t.questId), F.Ay.getState().resetQuest(t.questId));
    let n = u.get(t.questId);
    if (null != n) {
        let e = (0, H.Ic)(n);
        R.get(t.questId) !== e && (R = new Map(R).set(t.questId, e));
    }
}
function eV(e) {
    let { questId: t } = e;
    y = y === t ? null : t;
}
function eB(e) {
    let { questId: t, platform: n } = e;
    (v = new Map(v)), null == n ? v.delete(t) : v.set(t, n);
}
function eH(e) {
    let { questId: t, taskEventName: n, progress: r } = e,
        i = K.get(t) ?? new Map();
    i.set(n, r), K.set(t, i);
}
function ej(e) {
    let { questId: t } = e;
    K.has(t) && K.delete(t), F.Ay.getState().resetQuest(t);
}
function eY(e) {
    let {
        quest: t,
        placement: n,
        adDecisionData: r,
        adContext: a,
        responseTtlSeconds: o,
        metadataSealed: l,
        trafficMetadataRaw: u,
        trafficMetadataSealed: c,
        fetchedAt: d,
    } = e;
    (f = Date.now()), (i = !1), (s = new Map(s)).set(n, !1);
    let { enableNewRequestBehavior: _ } = V.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (_) {
        let e = {
            questId: t?.id ?? null,
            fetchedAt: d,
            ttlMillis: eW(o),
            adDecisionData: r,
            adContext: a,
            metadataSealed: l,
            trafficMetadataRaw: u,
            trafficMetadataSealed: c,
        };
        (b = new Map(b)).set(n, e);
    } else
        null == t
            ? N.delete(n)
            : N.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: a,
                  metadataSealed: l,
                  trafficMetadataRaw: u,
                  trafficMetadataSealed: c,
              });
}
function eW(e) {
    if (null == e) return W;
    let t = 1e3 * e;
    return t < W && t > 0 ? t : W;
}
function eK(e) {
    let { placement: t } = e;
    N.delete(t), (f = Date.now()), (i = !1), (s = new Map(s)).set(t, !1);
}
function e$(e) {
    let { content: t } = e;
    (o = !0), (l = new Map(l)).set(t, !0);
}
function ez(e) {
    let { serverQuests: t, content: n, fetchedAt: r, responseTtlSeconds: i } = e;
    (o = !1), (l = new Map(l)).set(n, !1);
    let s = eW(i),
        a = C.get(n),
        c = new Map(a?.earnedDecisionByQuestId);
    for (let [e, n] of t)
        if ((c.set(e, { fetchedAt: r, ttlMillis: s, shouldDeliver: null != n }), null != n)) {
            let t = u.get(e),
                r = (0, j.rO)(n);
            null != t ? er(e, r) : ((u = new Map(u)).set(e, r), (R = new Map(R)).set(e, (0, H.Ic)(r)));
        }
    C.set(n, { earnedDecisionByQuestId: c });
}
function eq(e) {
    let { content: t } = e;
    (o = !1), (l = new Map(l)).set(t, !1);
}
function eZ() {
    let e = !1,
        t = new Map(R);
    u.forEach((n, r) => {
        !0 !== t.get(r) && ((0, H.Ic)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((R = t), e8.emitChange());
}
function eX() {
    eZ();
    let e = (0, H.v1)(Array.from(u.values()));
    if (null == e) return;
    let t = Math.max(J, e - Date.now() + 2e3);
    t > ee ||
        ($ = setTimeout(() => {
            eX();
        }, t));
}
function eQ() {
    eJ(), eX();
}
function eJ() {
    null != $ && (clearTimeout($), ($ = null));
}
function e0(e) {
    let { quest_enrollment_blocked_until: t } = e;
    O = null != t ? new Date(t) : null;
}
function e1() {
    q = !0;
}
function e2(e) {
    (q = !1), (z = Date.now()), (Z = e.questHomeHero);
}
function e3() {
    q = !1;
}
function e6(e) {
    (q = !1), (z = Date.now()), (s = new Map(s)).set(e.placement, !1), (X = e.questHomeHero);
    let t = {
        questId: null,
        fetchedAt: e.fetchedAt,
        ttlMillis: eW(e.responseTtlSeconds),
        adDecisionData: e.adDecisionData,
        adContext: e.adContext,
        metadataSealed: e.metadataSealed,
        trafficMetadataRaw: e.trafficMetadataRaw,
        trafficMetadataSealed: e.trafficMetadataSealed,
    };
    (b = new Map(b)).set(e.placement, t);
}
function e4(e) {
    let { placement: t } = e;
    (q = !0), (s = new Map(s)).set(t, !0);
}
function e5(e) {
    let { placement: t } = e;
    (q = !1), (s = new Map(s)).set(t, !1);
}
et();
class e7 extends x.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return u;
    }
    get excludedQuests() {
        return c;
    }
    get claimedQuests() {
        return d;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return a;
    }
    isFetchingQuestPreview(e) {
        return g.has(e);
    }
    get lastFetchedCurrentQuests() {
        return _;
    }
    get lastFetchedQuestToDeliver() {
        return f;
    }
    get isFetchingQuestToDeliver() {
        return i;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get questDeliveryOverride() {
        return u.get(y ?? "");
    }
    get questToDeliverForPlacement() {
        return N;
    }
    get questEnrollmentBlockedUntil() {
        return O;
    }
    get questAdDecisionByPlacement() {
        return b;
    }
    getFetchQuestPreviewError(e) {
        return Q.get(e);
    }
    isEnrolling(e) {
        return p.has(e);
    }
    isClaimingReward(e) {
        return h.has(e);
    }
    isFetchingRewardCode(e) {
        return m.has(e);
    }
    isDismissingContent(e) {
        return E.has(e);
    }
    getRewardCode(e) {
        return I.get(e);
    }
    getRewards(e) {
        return T.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return S.get(e);
    }
    getQuest(e) {
        return u.get(e);
    }
    getQuestConfig(e) {
        return this.getQuest(e)?.config;
    }
    isProgressingOnDesktop(e) {
        return A.has(e);
    }
    selectedTaskPlatform(e) {
        return v.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return K.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return R;
    }
    isQuestExpired(e) {
        return R.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return D.get(e);
    }
    isFetchingQuestHomeHero() {
        return q;
    }
    getQuestHomeHero() {
        return X ?? Z;
    }
    getLastFetchedQuestHomeHero() {
        return z;
    }
    get isFetchingEarnedQuestToDeliver() {
        return o;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return l?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return C;
    }
}
let e8 = new e7(P.h, {
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
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN: e4,
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS: e6,
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE: e5,
    }),
    e9 = e8;

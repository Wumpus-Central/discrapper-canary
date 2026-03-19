"use strict";
let r, i, s, a, o, l, u, c, d, _, f, p, h, m, E, g, A, I, T, S, y, v, N, C, R, O, b, D, L;
n.d(t, { A: () => e7 });
var w = n(735438),
    M = n(412703),
    x = n(440703),
    P = n(311907),
    k = n(73153),
    U = n(927813),
    G = n(178540),
    F = n(101292),
    V = n(341915),
    B = n(405670),
    H = n(302654),
    j = n(943849),
    Y = n(710969),
    W = n(229006),
    K = n(654487);
let $ = 6 * U.A.Millis.HOUR,
    z = new Map(),
    q = null,
    Z = null,
    X = !1,
    Q = null,
    J = new Map(),
    ee = 5e3,
    et = 864e6;
function en() {
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
        (z = new Map()),
        (T = new Map()),
        (S = new Map()),
        (y = new Map()),
        (v = null),
        (N = new Map()),
        (I = new Set()),
        (C = new Map()),
        (R = new Map()),
        (O = new Map()),
        e0(),
        (b = null),
        (L = new Map()),
        (J = new Map()),
        (D = new Map());
}
function er(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, w.isNil)(n) &&
                M.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? I.add(e) : n.heartbeat?.lastBeatAt == null && I.delete(e));
}
function ei(e, t) {
    let n = (c = new Map(c)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
        if ((er(e, t), c.set(e, r), L.has(e))) {
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
function es(e, t) {
    let n = new Map(T);
    n.set(e, t), (T = n);
}
function ea(e, t) {
    es(e, t);
    let n = c.get(e),
        r = n?.userStatus;
    null != r && null == r.claimedAt && ei(e, { userStatus: { ...r, claimedAt: t.claimedAt } });
}
function eo(e) {
    let { entitlements: t } = e,
        n = t.items[0].tenantMetadata?.questRewards.reward;
    return n?.tag !== x.l.REWARD_CODE ? null : n.rewardCode;
}
function el(e, t) {
    let n = new Map(S);
    n.set(e, t.items), (S = n);
    let r = c.get(e),
        i = r?.userStatus;
    if (null != i && null == i.claimedAt) {
        let n = eo({ entitlements: t });
        null != n && es(e, n), ei(e, { userStatus: { ...i, claimedAt: t.claimedAt, claimedTier: n?.tier ?? null } });
    }
}
function eu(e) {
    null != y.get(e) && (y = new Map(y)).delete(e);
}
function ec() {
    e0(), en(), B.Ay.getState().clearState(), F.q.getState().clearUserState(), G.A.getState().reset();
}
function ed() {
    r = !0;
}
function e_(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (f = Date.now()), (r = !1), (c = new Map()), (u = new Map());
    let s = new Map();
    for (let e of t)
        c.set(e.id, e),
            u.set(e.id, e.config),
            s.set(e.id, (0, Y.Ic)(e)),
            e.targetedContent.includes(V.uF.QUEST_BAR) &&
                (0, j.L)({ location: K.rE.QUESTS_STORE }).log(`Delivered ${e.config.messages.questName} (${e.id})`);
    for (let e of ((d = new Map()), n)) d.set(e.id, e);
    for (let e of L?.values()) c.has(e.id) || (c.set(e.id, e), u.set(e.id, e.config), s.set(e.id, (0, Y.Ic)(e)));
    (O = s), eJ(), (b = null != i ? new Date(i) : null);
}
function ef() {
    (f = 0), (r = !1);
}
function ep(e) {
    let { placement: t } = e;
    (i = !0), (s = new Map(s)).set(t, !0);
}
function eh(e) {
    let { questId: t } = e;
    (A = new Set(A)).add(t), (J = new Map(J)).delete(t);
}
function em(e) {
    let { questId: t, quest: n } = e;
    (A = new Set(A)).delete(t),
        (L = new Map(L)).set(t, n),
        (c = new Map(c)).set(t, n),
        (u = new Map(u)).set(t, n.config),
        (J = new Map(J)).delete(t);
}
function eE(e) {
    let { questId: t, error: n } = e;
    (A = new Set(A)).delete(t), (J = new Map(J)).set(t, n);
}
function eg() {
    a = !0;
}
function eA(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (_ = new Map()), t)) _.set(e.id, e);
}
function eI() {
    a = !1;
}
function eT(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    I.add(t), ei(t, { userStatus: r }), null != n && eu(n);
}
function eS(e) {
    let { questId: t, streamKey: n } = e;
    null != n && null == y.get(n) && (y = new Map(y)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
}
function ey(e) {
    let { streamKey: t } = e;
    eu(t);
}
function ev(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function eN(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function eC(e) {
    let { enrolledQuestUserStatus: t } = e;
    ei(t.questId, { userStatus: t }), ev(t.questId);
}
function eR(e) {
    let { questId: t } = e;
    ev(t);
}
function eO(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.add(t), (E = n);
}
function eb(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(E);
    r.delete(t), (E = r), ea(t, n);
}
function eD(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.delete(t), (E = n);
}
function eL(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.add(t), (m = n);
}
function ew(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(m);
    r.delete(t), (m = r), el(t, n);
}
function eM(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.delete(t), (m = n);
}
function ex(e) {
    let t = new Set(g);
    t.delete(e), (g = t);
}
function eP(e) {
    let { questId: t } = e,
        n = new Set(g);
    n.add(t), (g = n), v === t && (v = null);
}
function ek(e) {
    let { dismissedQuestUserStatus: t } = e;
    ei(t.questId, { userStatus: t }), ex(t.questId);
}
function eU(e) {
    let { questId: t } = e;
    ex(t);
}
function eG(e) {
    let { streamKey: t } = e;
    eu(t);
}
function eF(e) {
    let { user_status: t } = e,
        n = (0, j.L)({ location: K.rE.QUESTS_STORE });
    n.log(`Received user status update for ${t.quest_id}`, t);
    let r = (0, W.tp)(t);
    ei(t.quest_id, { userStatus: r });
    let i = c.get(t.quest_id);
    if (null != i) {
        let e = (0, Y.Ic)(i);
        O.get(t.quest_id) !== e && (O = new Map(O).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        z.has(r.questId) &&
        (n.log(`Removing optimistic progress for ${r.questId}`), z.delete(r.questId));
}
function eV(e) {
    let { previewQuestUserStatus: t } = e;
    ei(t.questId, { userStatus: t }),
        null == t.claimedAt && (T = new Map(T)).delete(t.questId),
        null == t.enrolledAt && ((N = new Map(N)).delete(t.questId), B.Ay.getState().resetQuest(t.questId));
    let n = c.get(t.questId);
    if (null != n) {
        let e = (0, Y.Ic)(n);
        O.get(t.questId) !== e && (O = new Map(O).set(t.questId, e));
    }
}
function eB(e) {
    let { questId: t } = e;
    v = v === t ? null : t;
}
function eH(e) {
    let { questId: t, platform: n } = e;
    (N = new Map(N)), null == n ? N.delete(t) : N.set(t, n);
}
function ej(e) {
    let { questId: t, taskEventName: n, progress: r } = e,
        i = z.get(t) ?? new Map();
    i.set(n, r), z.set(t, i);
}
function eY(e) {
    let { questId: t } = e;
    z.has(t) && z.delete(t), B.Ay.getState().resetQuest(t);
}
function eW(e) {
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
    let { enableNewRequestBehavior: f } = H.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (f) {
        let e = {
            questId: t?.id ?? null,
            fetchedAt: _,
            ttlMillis: eK(o),
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
function eK(e) {
    if (null == e) return $;
    let t = 1e3 * e;
    return t < $ && t > 0 ? t : $;
}
function e$(e) {
    let { placement: t } = e;
    C.delete(t), (p = Date.now()), (i = !1), (s = new Map(s)).set(t, !1);
}
function ez(e) {
    let { content: t } = e;
    (o = !0), (l = new Map(l)).set(t, !0);
}
function eq(e) {
    let { serverQuests: t, metadataRaw: n, content: r, fetchedAt: i, responseTtlSeconds: s } = e;
    (o = !1), (l = new Map(l)).set(r, !1);
    let a = eK(s),
        u = R.get(r),
        c = new Map(u?.quests);
    for (let [e, n] of t)
        c.set(e, { fetchedAt: i, ttlMillis: a, questWithUserStatus: null != n ? (0, W.rO)(n) : null });
    R.set(r, { quests: c, metadataRaw: n });
}
function eZ(e) {
    let { content: t } = e;
    (o = !1), (l = new Map(l)).set(t, !1);
}
function eX() {
    let e = !1,
        t = new Map(O);
    c.forEach((n, r) => {
        !0 !== t.get(r) && ((0, Y.Ic)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((O = t), e5.emitChange());
}
function eQ() {
    eX();
    let e = (0, Y.v1)(Array.from(c.values()));
    if (null == e) return;
    let t = Math.max(ee, e - Date.now() + 2e3);
    t > et ||
        (q = setTimeout(() => {
            eQ();
        }, t));
}
function eJ() {
    e0(), eQ();
}
function e0() {
    null != q && (clearTimeout(q), (q = null));
}
function e1(e) {
    let { quest_enrollment_blocked_until: t } = e;
    b = null != t ? new Date(t) : null;
}
function e2() {
    X = !0;
}
function e3(e) {
    (X = !1), (Z = Date.now()), (Q = e.questHomeHero);
}
function e6() {
    X = !1;
}
en();
class e4 extends P.Ay.Store {
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
        return J.get(e);
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
        return z.get(e)?.get(t);
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
        return X;
    }
    getQuestHomeHeroConfig() {
        return Q;
    }
    getLastFetchedQuestHomeHero() {
        return Z;
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
let e5 = new e4(k.h, {
        LOGOUT: ec,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: ed,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: e_,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ef,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eg,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eA,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eI,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: ep,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eW,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: e$,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: ez,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: eq,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: eZ,
        QUESTS_FETCH_PREVIEW_BEGIN: eh,
        QUESTS_FETCH_PREVIEW_SUCCESS: em,
        QUESTS_FETCH_PREVIEW_FAILURE: eE,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eT,
        QUESTS_SEND_HEARTBEAT_FAILURE: eS,
        QUESTS_ENROLL_BEGIN: eN,
        QUESTS_ENROLL_SUCCESS: eC,
        QUESTS_ENROLL_FAILURE: eR,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eO,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eb,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eD,
        QUESTS_CLAIM_REWARD_BEGIN: eL,
        QUESTS_CLAIM_REWARD_SUCCESS: ew,
        QUESTS_CLAIM_REWARD_FAILURE: eM,
        QUESTS_DISMISS_CONTENT_BEGIN: eP,
        QUESTS_DISMISS_CONTENT_SUCCESS: ek,
        QUESTS_DISMISS_CONTENT_FAILURE: eU,
        QUESTS_USER_STATUS_UPDATE: eF,
        STREAM_CLOSE: ey,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eG,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eV,
        QUESTS_DELIVERY_OVERRIDE: eB,
        QUESTS_SELECT_TASK_PLATFORM: eH,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: ej,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eY,
        QUESTS_USER_COMPLETION_UPDATE: e1,
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: e2,
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: e3,
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: e6,
    }),
    e7 = e5;

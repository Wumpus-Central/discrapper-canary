"use strict";
let r, i, a, s, o, l, u, c, d, _, f, h, p, g, E, A, I, T, y, S, v, C, b, N, R, O, D, L, w;
n.d(t, { A: () => e7 });
var x = n(735438),
    P = n(412703),
    M = n(440703),
    k = n(311907),
    U = n(73153),
    G = n(927813),
    F = n(101292),
    V = n(341915),
    B = n(405670),
    j = n(302654),
    H = n(943849),
    Y = n(710969),
    W = n(229006),
    K = n(654487);
let $ = 6 * G.A.Millis.HOUR,
    z = new Map(),
    q = null,
    X = null,
    Z = !1,
    Q = null,
    J = new Map(),
    ee = 5e3,
    et = 864e6;
function en() {
    (r = !1),
        (i = !1),
        (a = new Map()),
        (s = !1),
        (o = !1),
        (l = new Map()),
        (u = new Map()),
        (c = new Map()),
        (d = new Map()),
        (_ = new Map()),
        (f = 0),
        (h = 0),
        (p = new Set()),
        (g = new Set()),
        (E = new Set()),
        (A = new Set()),
        (I = new Set()),
        (z = new Map()),
        (y = new Map()),
        (S = new Map()),
        (v = new Map()),
        (C = null),
        (b = new Map()),
        (T = new Set()),
        (N = new Map()),
        (R = new Map()),
        (O = new Map()),
        e0(),
        (D = null),
        (w = new Map()),
        (J = new Map()),
        (L = new Map());
}
function er(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, x.isNil)(n) &&
                P.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? T.add(e) : n.heartbeat?.lastBeatAt == null && T.delete(e));
}
function ei(e, t) {
    let n = (c = new Map(c)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
        if ((er(e, t), c.set(e, r), w.has(e))) {
            let n = w.get(e);
            null != n && (w = new Map(w)).set(e, { ...n, ...t });
        }
    }
}
function ea(e, t) {
    let n = new Map(y);
    n.set(e, t), (y = n);
}
function es(e, t) {
    ea(e, t);
    let n = c.get(e),
        r = n?.userStatus;
    null != r && null == r.claimedAt && ei(e, { userStatus: { ...r, claimedAt: t.claimedAt } });
}
function eo(e) {
    let { entitlements: t } = e,
        n = t.items[0].tenantMetadata?.questRewards.reward;
    return n?.tag !== M.l.REWARD_CODE ? null : n.rewardCode;
}
function el(e, t) {
    let n = new Map(S);
    n.set(e, t.items), (S = n);
    let r = c.get(e),
        i = r?.userStatus;
    if (null != i && null == i.claimedAt) {
        let n = eo({ entitlements: t });
        null != n && ea(e, n), ei(e, { userStatus: { ...i, claimedAt: t.claimedAt, claimedTier: n?.tier ?? null } });
    }
}
function eu(e) {
    null != v.get(e) && (v = new Map(v)).delete(e);
}
function ec() {
    e0(), en(), B.Ay.getState().clearState(), F.q.getState().clearUserState();
}
function ed() {
    r = !0;
}
function e_(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (f = Date.now()), (r = !1), (c = new Map()), (u = new Map());
    let a = new Map();
    for (let e of t)
        c.set(e.id, e),
            u.set(e.id, e.config),
            a.set(e.id, (0, Y.Ic)(e)),
            e.targetedContent.includes(V.uF.QUEST_BAR) &&
                (0, H.L)({ location: K.rE.QUESTS_STORE }).log(`Delivered ${e.config.messages.questName} (${e.id})`);
    for (let e of ((d = new Map()), n)) d.set(e.id, e);
    for (let e of w?.values()) c.has(e.id) || (c.set(e.id, e), u.set(e.id, e.config), a.set(e.id, (0, Y.Ic)(e)));
    (O = a), eJ(), (D = null != i ? new Date(i) : null);
}
function ef() {
    (f = 0), (r = !1);
}
function eh(e) {
    let { placement: t } = e;
    (i = !0), (a = new Map(a)).set(t, !0);
}
function ep(e) {
    let { questId: t } = e;
    (I = new Set(I)).add(t), (J = new Map(J)).delete(t);
}
function em(e) {
    let { questId: t, quest: n } = e;
    (I = new Set(I)).delete(t),
        (w = new Map(w)).set(t, n),
        (c = new Map(c)).set(t, n),
        (u = new Map(u)).set(t, n.config),
        (J = new Map(J)).delete(t);
}
function eg(e) {
    let { questId: t, error: n } = e;
    (I = new Set(I)).delete(t), (J = new Map(J)).set(t, n);
}
function eE() {
    s = !0;
}
function eA(e) {
    let { quests: t } = e;
    for (let e of ((s = !1), (_ = new Map()), t)) _.set(e.id, e);
}
function eI() {
    s = !1;
}
function eT(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    T.add(t), ei(t, { userStatus: r }), null != n && eu(n);
}
function ey(e) {
    let { questId: t, streamKey: n } = e;
    null != n && null == v.get(n) && (v = new Map(v)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
}
function eS(e) {
    let { streamKey: t } = e;
    eu(t);
}
function ev(e) {
    let t = new Set(p);
    t.delete(e), (p = t);
}
function eC(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function eb(e) {
    let { enrolledQuestUserStatus: t } = e;
    ei(t.questId, { userStatus: t }), ev(t.questId);
}
function eN(e) {
    let { questId: t } = e;
    ev(t);
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
function eD(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.delete(t), (E = n);
}
function eL(e) {
    let { questId: t } = e,
        n = new Set(g);
    n.add(t), (g = n);
}
function ew(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(g);
    r.delete(t), (g = r), el(t, n);
}
function ex(e) {
    let { questId: t } = e,
        n = new Set(g);
    n.delete(t), (g = n);
}
function eP(e) {
    let t = new Set(A);
    t.delete(e), (A = t);
}
function eM(e) {
    let { questId: t } = e,
        n = new Set(A);
    n.add(t), (A = n), C === t && (C = null);
}
function ek(e) {
    let { dismissedQuestUserStatus: t } = e;
    ei(t.questId, { userStatus: t }), eP(t.questId);
}
function eU(e) {
    let { questId: t } = e;
    eP(t);
}
function eG(e) {
    let { streamKey: t } = e;
    eu(t);
}
function eF(e) {
    let { user_status: t } = e,
        n = (0, H.L)({ location: K.rE.QUESTS_STORE });
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
        null == t.claimedAt && (y = new Map(y)).delete(t.questId),
        null == t.enrolledAt && ((b = new Map(b)).delete(t.questId), B.Ay.getState().resetQuest(t.questId));
    let n = c.get(t.questId);
    if (null != n) {
        let e = (0, Y.Ic)(n);
        O.get(t.questId) !== e && (O = new Map(O).set(t.questId, e));
    }
}
function eB(e) {
    let { questId: t } = e;
    C = C === t ? null : t;
}
function ej(e) {
    let { questId: t, platform: n } = e;
    (b = new Map(b)), null == n ? b.delete(t) : b.set(t, n);
}
function eH(e) {
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
        adContext: s,
        responseTtlSeconds: o,
        metadataRaw: l,
        metadataSealed: u,
        trafficMetadataRaw: c,
        trafficMetadataSealed: d,
        fetchedAt: _,
    } = e;
    (h = Date.now()), (i = !1), (a = new Map(a)).set(n, !1);
    let { enableNewRequestBehavior: f } = j.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (f) {
        let e = {
            questId: t?.id ?? null,
            fetchedAt: _,
            ttlMillis: eK(o),
            adDecisionData: r,
            adContext: s,
            metadataRaw: l,
            metadataSealed: u,
            trafficMetadataRaw: c,
            trafficMetadataSealed: d,
        };
        (L = new Map(L)).set(n, e);
    } else
        null == t
            ? N.delete(n)
            : N.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: s,
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
    N.delete(t), (h = Date.now()), (i = !1), (a = new Map(a)).set(t, !1);
}
function ez(e) {
    let { content: t } = e;
    (o = !0), (l = new Map(l)).set(t, !0);
}
function eq(e) {
    let { quests: t, metadataRaw: n, content: r } = e;
    (o = !1), (l = new Map(l)).set(r, !1), 0 === t.size ? R.delete(r) : R.set(r, { quests: t, metadataRaw: n });
}
function eX(e) {
    let { content: t } = e;
    R.delete(t), (o = !1), (l = new Map(l)).set(t, !1);
}
function eZ() {
    let e = !1,
        t = new Map(O);
    c.forEach((n, r) => {
        !0 !== t.get(r) && ((0, Y.Ic)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((O = t), e5.emitChange());
}
function eQ() {
    eZ();
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
    D = null != t ? new Date(t) : null;
}
function e2() {
    Z = !0;
}
function e3(e) {
    (Z = !1), (X = Date.now()), (Q = e.takeover);
}
function e6() {
    Z = !1;
}
en();
class e4 extends k.Ay.Store {
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
        return s;
    }
    isFetchingQuestPreview(e) {
        return I.has(e);
    }
    get lastFetchedCurrentQuests() {
        return f;
    }
    get lastFetchedQuestToDeliver() {
        return h;
    }
    get isFetchingQuestToDeliver() {
        return i;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        return a?.get(e) ?? !1;
    }
    get questDeliveryOverride() {
        return c.get(C ?? "");
    }
    get questToDeliverForPlacement() {
        return N;
    }
    get questEnrollmentBlockedUntil() {
        return D;
    }
    get questAdDecisionByPlacement() {
        return L;
    }
    getFetchQuestPreviewError(e) {
        return J.get(e);
    }
    isEnrolling(e) {
        return p.has(e);
    }
    isClaimingReward(e) {
        return g.has(e);
    }
    isFetchingRewardCode(e) {
        return E.has(e);
    }
    isDismissingContent(e) {
        return A.has(e);
    }
    getRewardCode(e) {
        return y.get(e);
    }
    getRewards(e) {
        return S.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return v.get(e);
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
        return T.has(e);
    }
    selectedTaskPlatform(e) {
        return b.get(e) ?? null;
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
        return w.get(e);
    }
    isFetchingQuestHomeTakeover() {
        return Z;
    }
    getQuestHomeTakeoverConfig() {
        return Q;
    }
    getLastFetchedQuestHomeTakeover() {
        return X;
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
let e5 = new e4(U.h, {
        LOGOUT: ec,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: ed,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: e_,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ef,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eE,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eA,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eI,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: eh,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eW,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: e$,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: ez,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: eq,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: eX,
        QUESTS_FETCH_PREVIEW_BEGIN: ep,
        QUESTS_FETCH_PREVIEW_SUCCESS: em,
        QUESTS_FETCH_PREVIEW_FAILURE: eg,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eT,
        QUESTS_SEND_HEARTBEAT_FAILURE: ey,
        QUESTS_ENROLL_BEGIN: eC,
        QUESTS_ENROLL_SUCCESS: eb,
        QUESTS_ENROLL_FAILURE: eN,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eR,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eO,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eD,
        QUESTS_CLAIM_REWARD_BEGIN: eL,
        QUESTS_CLAIM_REWARD_SUCCESS: ew,
        QUESTS_CLAIM_REWARD_FAILURE: ex,
        QUESTS_DISMISS_CONTENT_BEGIN: eM,
        QUESTS_DISMISS_CONTENT_SUCCESS: ek,
        QUESTS_DISMISS_CONTENT_FAILURE: eU,
        QUESTS_USER_STATUS_UPDATE: eF,
        STREAM_CLOSE: eS,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eG,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eV,
        QUESTS_DELIVERY_OVERRIDE: eB,
        QUESTS_SELECT_TASK_PLATFORM: ej,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eH,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eY,
        QUESTS_USER_COMPLETION_UPDATE: e1,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: e2,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: e3,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e6,
    }),
    e7 = e5;

"use strict";
let r, i, a, s, o, l, u, c, d, _, f, p, h, m, g, E, A, I, T, y, S, v, C, b, N, R, O, D, L;
n.d(t, { A: () => e4 });
var w = n(735438),
    x = n(412703),
    P = n(440703),
    M = n(311907),
    k = n(73153),
    U = n(927813),
    G = n(341915),
    V = n(405670),
    F = n(302654),
    B = n(943849),
    j = n(710969),
    H = n(229006),
    Y = n(654487);
let W = 6 * U.A.Millis.HOUR,
    K = new Map(),
    z = null,
    $ = null,
    q = !1,
    Z = null,
    Q = new Map(),
    X = 5e3,
    J = 864e6;
function ee() {
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
        (p = 0),
        (h = new Set()),
        (m = new Set()),
        (g = new Set()),
        (E = new Set()),
        (A = new Set()),
        (K = new Map()),
        (T = new Map()),
        (y = new Map()),
        (S = new Map()),
        (v = null),
        (C = new Map()),
        (I = new Set()),
        (b = new Map()),
        (N = new Map()),
        (R = new Map()),
        eX(),
        (O = null),
        (L = new Map()),
        (Q = new Map()),
        (D = new Map());
}
function et(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, w.isNil)(n) &&
                x.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? I.add(e) : n.heartbeat?.lastBeatAt == null && I.delete(e));
}
function en(e, t) {
    let n = (c = new Map(c)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
        if ((et(e, t), c.set(e, r), L.has(e))) {
            let n = L.get(e);
            null != n && (L = new Map(L)).set(e, { ...n, ...t });
        }
    }
}
function er(e, t) {
    let n = new Map(T);
    n.set(e, t), (T = n);
}
function ei(e, t) {
    er(e, t);
    let n = c.get(e),
        r = n?.userStatus;
    null != r && null == r.claimedAt && en(e, { userStatus: { ...r, claimedAt: t.claimedAt } });
}
function ea(e) {
    let { entitlements: t } = e,
        n = t.items[0].tenantMetadata?.questRewards.reward;
    return n?.tag !== P.l.REWARD_CODE ? null : n.rewardCode;
}
function es(e, t) {
    let n = new Map(y);
    n.set(e, t.items), (y = n);
    let r = c.get(e),
        i = r?.userStatus;
    if (null != i && null == i.claimedAt) {
        let n = ea({ entitlements: t });
        null != n && er(e, n), en(e, { userStatus: { ...i, claimedAt: t.claimedAt, claimedTier: n?.tier ?? null } });
    }
}
function eo(e) {
    null != S.get(e) && (S = new Map(S)).delete(e);
}
function el() {
    eX(), ee(), V.Ay.getState().clearState();
}
function eu() {
    r = !0;
}
function ec(e) {
    let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
    (f = Date.now()), (r = !1), (c = new Map()), (u = new Map());
    let a = new Map();
    for (let e of t)
        c.set(e.id, e),
            u.set(e.id, e.config),
            a.set(e.id, (0, j.Ic)(e)),
            e.targetedContent.includes(G.uF.QUEST_BAR) &&
                (0, B.L)({ location: Y.rE.QUESTS_STORE }).log(`Delivered ${e.config.messages.questName} (${e.id})`);
    for (let e of ((d = new Map()), n)) d.set(e.id, e);
    for (let e of L?.values()) c.has(e.id) || (c.set(e.id, e), u.set(e.id, e.config), a.set(e.id, (0, j.Ic)(e)));
    (R = a), eQ(), (O = null != i ? new Date(i) : null);
}
function ed() {
    (f = 0), (r = !1);
}
function e_(e) {
    let { placement: t } = e;
    (i = !0), (a = new Map(a)).set(t, !0);
}
function ef(e) {
    let { questId: t } = e;
    (A = new Set(A)).add(t), (Q = new Map(Q)).delete(t);
}
function ep(e) {
    let { questId: t, quest: n } = e;
    (A = new Set(A)).delete(t),
        (L = new Map(L)).set(t, n),
        (c = new Map(c)).set(t, n),
        (u = new Map(u)).set(t, n.config),
        (Q = new Map(Q)).delete(t);
}
function eh(e) {
    let { questId: t, error: n } = e;
    (A = new Set(A)).delete(t), (Q = new Map(Q)).set(t, n);
}
function em() {
    s = !0;
}
function eg(e) {
    let { quests: t } = e;
    for (let e of ((s = !1), (_ = new Map()), t)) _.set(e.id, e);
}
function eE() {
    s = !1;
}
function eA(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    I.add(t), en(t, { userStatus: r }), null != n && eo(n);
}
function eI(e) {
    let { questId: t, streamKey: n } = e;
    null != n && null == S.get(n) && (S = new Map(S)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
}
function eT(e) {
    let { streamKey: t } = e;
    eo(t);
}
function ey(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function eS(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function ev(e) {
    let { enrolledQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }), ey(t.questId);
}
function eC(e) {
    let { questId: t } = e;
    ey(t);
}
function eb(e) {
    let { questId: t } = e,
        n = new Set(g);
    n.add(t), (g = n);
}
function eN(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(g);
    r.delete(t), (g = r), ei(t, n);
}
function eR(e) {
    let { questId: t } = e,
        n = new Set(g);
    n.delete(t), (g = n);
}
function eO(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.add(t), (m = n);
}
function eD(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(m);
    r.delete(t), (m = r), es(t, n);
}
function eL(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.delete(t), (m = n);
}
function ew(e) {
    let t = new Set(E);
    t.delete(e), (E = t);
}
function ex(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.add(t), (E = n), v === t && (v = null);
}
function eP(e) {
    let { dismissedQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }), ew(t.questId);
}
function eM(e) {
    let { questId: t } = e;
    ew(t);
}
function ek(e) {
    let { streamKey: t } = e;
    eo(t);
}
function eU(e) {
    let { user_status: t } = e,
        n = (0, B.L)({ location: Y.rE.QUESTS_STORE });
    n.log(`Received user status update for ${t.quest_id}`, t);
    let r = (0, H.tp)(t);
    en(t.quest_id, { userStatus: r });
    let i = c.get(t.quest_id);
    if (null != i) {
        let e = (0, j.Ic)(i);
        R.get(t.quest_id) !== e && (R = new Map(R).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        K.has(r.questId) &&
        (n.log(`Removing optimistic progress for ${r.questId}`), K.delete(r.questId));
}
function eG(e) {
    let { previewQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }),
        null == t.claimedAt && (T = new Map(T)).delete(t.questId),
        null == t.enrolledAt && ((C = new Map(C)).delete(t.questId), V.Ay.getState().resetQuest(t.questId));
    let n = c.get(t.questId);
    if (null != n) {
        let e = (0, j.Ic)(n);
        R.get(t.questId) !== e && (R = new Map(R).set(t.questId, e));
    }
}
function eV(e) {
    let { questId: t } = e;
    v = v === t ? null : t;
}
function eF(e) {
    let { questId: t, platform: n } = e;
    (C = new Map(C)), null == n ? C.delete(t) : C.set(t, n);
}
function eB(e) {
    let { questId: t, taskEventName: n, progress: r } = e,
        i = K.get(t) ?? new Map();
    i.set(n, r), K.set(t, i);
}
function ej(e) {
    let { questId: t } = e;
    K.has(t) && K.delete(t), V.Ay.getState().resetQuest(t);
}
function eH(e) {
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
    (p = Date.now()), (i = !1), (a = new Map(a)).set(n, !1);
    let { enableNewRequestBehavior: f } = F.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (f) {
        let e = {
            questId: t?.id ?? null,
            fetchedAt: _,
            ttlMillis: eY(o),
            adDecisionData: r,
            adContext: s,
            metadataRaw: l,
            metadataSealed: u,
            trafficMetadataRaw: c,
            trafficMetadataSealed: d,
        };
        (D = new Map(D)).set(n, e);
    } else
        null == t
            ? b.delete(n)
            : b.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: s,
                  metadataRaw: l,
                  metadataSealed: u,
                  trafficMetadataRaw: c,
                  trafficMetadataSealed: d,
              });
}
function eY(e) {
    if (null == e) return W;
    let t = 1e3 * e;
    return t < W && t > 0 ? t : W;
}
function eW(e) {
    let { placement: t } = e;
    b.delete(t), (p = Date.now()), (i = !1), (a = new Map(a)).set(t, !1);
}
function eK(e) {
    let { content: t } = e;
    (o = !0), (l = new Map(l)).set(t, !0);
}
function ez(e) {
    let { quests: t, metadataRaw: n, content: r } = e;
    (o = !1), (l = new Map(l)).set(r, !1), 0 === t.size ? N.delete(r) : N.set(r, { quests: t, metadataRaw: n });
}
function e$(e) {
    let { content: t } = e;
    N.delete(t), (o = !1), (l = new Map(l)).set(t, !1);
}
function eq() {
    let e = !1,
        t = new Map(R);
    c.forEach((n, r) => {
        !0 !== t.get(r) && ((0, j.Ic)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((R = t), e6.emitChange());
}
function eZ() {
    eq();
    let e = (0, j.v1)(Array.from(c.values()));
    if (null == e) return;
    let t = Math.max(X, e - Date.now() + 2e3);
    t > J ||
        (z = setTimeout(() => {
            eZ();
        }, t));
}
function eQ() {
    eX(), eZ();
}
function eX() {
    null != z && (clearTimeout(z), (z = null));
}
function eJ(e) {
    let { quest_enrollment_blocked_until: t } = e;
    O = null != t ? new Date(t) : null;
}
function e0() {
    q = !0;
}
function e1(e) {
    (q = !1), ($ = Date.now()), (Z = e.takeover);
}
function e2() {
    q = !1;
}
ee();
class e3 extends M.Ay.Store {
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
        return a?.get(e) ?? !1;
    }
    get questDeliveryOverride() {
        return c.get(v ?? "");
    }
    get questToDeliverForPlacement() {
        return b;
    }
    get questEnrollmentBlockedUntil() {
        return O;
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
        return g.has(e);
    }
    isDismissingContent(e) {
        return E.has(e);
    }
    getRewardCode(e) {
        return T.get(e);
    }
    getRewards(e) {
        return y.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return S.get(e);
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
        return C.get(e) ?? null;
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
        return L.get(e);
    }
    isFetchingQuestHomeTakeover() {
        return q;
    }
    getQuestHomeTakeoverConfig() {
        return Z;
    }
    getLastFetchedQuestHomeTakeover() {
        return $;
    }
    get isFetchingEarnedQuestToDeliver() {
        return o;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return l?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return N;
    }
}
let e6 = new e3(k.h, {
        LOGOUT: el,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: eu,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: ec,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ed,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: em,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eg,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eE,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: e_,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eH,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eW,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: eK,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: ez,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: e$,
        QUESTS_FETCH_PREVIEW_BEGIN: ef,
        QUESTS_FETCH_PREVIEW_SUCCESS: ep,
        QUESTS_FETCH_PREVIEW_FAILURE: eh,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eA,
        QUESTS_SEND_HEARTBEAT_FAILURE: eI,
        QUESTS_ENROLL_BEGIN: eS,
        QUESTS_ENROLL_SUCCESS: ev,
        QUESTS_ENROLL_FAILURE: eC,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eb,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eN,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eR,
        QUESTS_CLAIM_REWARD_BEGIN: eO,
        QUESTS_CLAIM_REWARD_SUCCESS: eD,
        QUESTS_CLAIM_REWARD_FAILURE: eL,
        QUESTS_DISMISS_CONTENT_BEGIN: ex,
        QUESTS_DISMISS_CONTENT_SUCCESS: eP,
        QUESTS_DISMISS_CONTENT_FAILURE: eM,
        QUESTS_USER_STATUS_UPDATE: eU,
        STREAM_CLOSE: eT,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ek,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eG,
        QUESTS_DELIVERY_OVERRIDE: eV,
        QUESTS_SELECT_TASK_PLATFORM: eF,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eB,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: ej,
        QUESTS_USER_COMPLETION_UPDATE: eJ,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: e0,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: e1,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e2,
    }),
    e4 = e6;

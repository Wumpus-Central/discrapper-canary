"use strict";
let r, i, s, a, o, l, u, c, d, _, f, p, h, m, E, g, A, I, T, S, y, v, N, C, R, O, b, D;
n.d(t, { A: () => e4 });
var L = n(735438),
    w = n(412703),
    M = n(440703),
    P = n(311907),
    x = n(73153),
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
    X = new Map(),
    Q = 5e3,
    J = 864e6;
function ee() {
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
        eQ(),
        (O = null),
        (D = new Map()),
        (X = new Map()),
        (b = new Map());
}
function et(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, L.isNil)(n) &&
                w.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? A.add(e) : n.heartbeat?.lastBeatAt == null && A.delete(e));
}
function en(e, t) {
    let n = (u = new Map(u)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
        if ((et(e, t), u.set(e, r), D.has(e))) {
            let n = D.get(e);
            null != n && (D = new Map(D)).set(e, { ...n, ...t });
        }
        for (let [n, r] of C) {
            let i = r.quests.get(e);
            if (i?.questWithUserStatus != null) {
                let s = new Map(r.quests);
                s.set(e, { ...i, questWithUserStatus: { ...i.questWithUserStatus, ...t } }),
                    (C = new Map(C)).set(n, { ...r, quests: s });
            }
        }
    }
}
function er(e, t) {
    let n = new Map(I);
    n.set(e, t), (I = n);
}
function ei(e, t) {
    er(e, t);
    let n = u.get(e),
        r = n?.userStatus;
    null != r && null == r.claimedAt && en(e, { userStatus: { ...r, claimedAt: t.claimedAt } });
}
function es(e) {
    let { entitlements: t } = e,
        n = t.items[0].tenantMetadata?.questRewards.reward;
    return n?.tag !== M.l.REWARD_CODE ? null : n.rewardCode;
}
function ea(e, t) {
    let n = new Map(T);
    n.set(e, t.items), (T = n);
    let r = u.get(e),
        i = r?.userStatus;
    if (null != i && null == i.claimedAt) {
        let n = es({ entitlements: t });
        null != n && er(e, n), en(e, { userStatus: { ...i, claimedAt: t.claimedAt, claimedTier: n?.tier ?? null } });
    }
}
function eo(e) {
    null != S.get(e) && (S = new Map(S)).delete(e);
}
function el() {
    eQ(), ee(), F.Ay.getState().clearState(), U.A.getState().reset();
}
function eu() {
    r = !0;
}
function ec(e) {
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
    (R = s), eX(), (O = null != i ? new Date(i) : null);
}
function ed() {
    (_ = 0), (r = !1);
}
function e_(e) {
    let { placement: t } = e;
    (i = !0), (s = new Map(s)).set(t, !0);
}
function ef(e) {
    let { questId: t } = e;
    (g = new Set(g)).add(t), (X = new Map(X)).delete(t);
}
function ep(e) {
    let { questId: t, quest: n } = e;
    (g = new Set(g)).delete(t), (D = new Map(D)).set(t, n), (u = new Map(u)).set(t, n), (X = new Map(X)).delete(t);
}
function eh(e) {
    let { questId: t, error: n } = e;
    (g = new Set(g)).delete(t), (X = new Map(X)).set(t, n);
}
function em() {
    a = !0;
}
function eE(e) {
    let { quests: t } = e;
    for (let e of ((a = !1), (d = new Map()), t)) d.set(e.id, e);
}
function eg() {
    a = !1;
}
function eA(e) {
    let { questId: t, streamKey: n, userStatus: r } = e;
    A.add(t), en(t, { userStatus: r }), null != n && eo(n);
}
function eI(e) {
    let { questId: t, streamKey: n } = e;
    null != n && null == S.get(n) && (S = new Map(S)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
}
function eT(e) {
    let { streamKey: t } = e;
    eo(t);
}
function eS(e) {
    let t = new Set(p);
    t.delete(e), (p = t);
}
function ey(e) {
    let { questId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function ev(e) {
    let { enrolledQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }), eS(t.questId);
}
function eN(e) {
    let { questId: t } = e;
    eS(t);
}
function eC(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.add(t), (m = n);
}
function eR(e) {
    let { questId: t, rewardCode: n } = e,
        r = new Set(m);
    r.delete(t), (m = r), ei(t, n);
}
function eO(e) {
    let { questId: t } = e,
        n = new Set(m);
    n.delete(t), (m = n);
}
function eb(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.add(t), (h = n);
}
function eD(e) {
    let { questId: t, entitlements: n } = e,
        r = new Set(h);
    r.delete(t), (h = r), ea(t, n);
}
function eL(e) {
    let { questId: t } = e,
        n = new Set(h);
    n.delete(t), (h = n);
}
function ew(e) {
    let t = new Set(E);
    t.delete(e), (E = t);
}
function eM(e) {
    let { questId: t } = e,
        n = new Set(E);
    n.add(t), (E = n), y === t && (y = null);
}
function eP(e) {
    let { dismissedQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }), ew(t.questId);
}
function ex(e) {
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
    let r = (0, j.tp)(t);
    en(t.quest_id, { userStatus: r });
    let i = u.get(t.quest_id);
    if (null != i) {
        let e = (0, H.Ic)(i);
        R.get(t.quest_id) !== e && (R = new Map(R).set(t.quest_id, e));
    }
    0 === Object.keys(r.progress).length &&
        K.has(r.questId) &&
        (n.log(`Removing optimistic progress for ${r.questId}`), K.delete(r.questId));
}
function eG(e) {
    let { previewQuestUserStatus: t } = e;
    en(t.questId, { userStatus: t }),
        null == t.claimedAt && (I = new Map(I)).delete(t.questId),
        null == t.enrolledAt && ((v = new Map(v)).delete(t.questId), F.Ay.getState().resetQuest(t.questId));
    let n = u.get(t.questId);
    if (null != n) {
        let e = (0, H.Ic)(n);
        R.get(t.questId) !== e && (R = new Map(R).set(t.questId, e));
    }
}
function eF(e) {
    let { questId: t } = e;
    y = y === t ? null : t;
}
function eV(e) {
    let { questId: t, platform: n } = e;
    (v = new Map(v)), null == n ? v.delete(t) : v.set(t, n);
}
function eB(e) {
    let { questId: t, taskEventName: n, progress: r } = e,
        i = K.get(t) ?? new Map();
    i.set(n, r), K.set(t, i);
}
function eH(e) {
    let { questId: t } = e;
    K.has(t) && K.delete(t), F.Ay.getState().resetQuest(t);
}
function ej(e) {
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
    (f = Date.now()), (i = !1), (s = new Map(s)).set(n, !1);
    let { enableNewRequestBehavior: p } = V.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
    if (p) {
        let e = {
            questId: t?.id ?? null,
            fetchedAt: _,
            ttlMillis: eY(o),
            adDecisionData: r,
            adContext: a,
            metadataRaw: l,
            metadataSealed: u,
            trafficMetadataRaw: c,
            trafficMetadataSealed: d,
        };
        (b = new Map(b)).set(n, e);
    } else
        null == t
            ? N.delete(n)
            : N.set(n, {
                  quest: t,
                  adDecisionData: r,
                  adContext: a,
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
    N.delete(t), (f = Date.now()), (i = !1), (s = new Map(s)).set(t, !1);
}
function eK(e) {
    let { content: t } = e;
    (o = !0), (l = new Map(l)).set(t, !0);
}
function e$(e) {
    let { serverQuests: t, metadataRaw: n, content: r, fetchedAt: i, responseTtlSeconds: s } = e;
    (o = !1), (l = new Map(l)).set(r, !1);
    let a = eY(s),
        u = C.get(r),
        c = new Map(u?.quests);
    for (let [e, n] of t)
        c.set(e, { fetchedAt: i, ttlMillis: a, questWithUserStatus: null != n ? (0, j.rO)(n) : null });
    C.set(r, { quests: c, metadataRaw: n });
}
function ez(e) {
    let { content: t } = e;
    (o = !1), (l = new Map(l)).set(t, !1);
}
function eq() {
    let e = !1,
        t = new Map(R);
    u.forEach((n, r) => {
        !0 !== t.get(r) && ((0, H.Ic)(n) ? (t.set(r, !0), (e = !0)) : t.has(r) || t.set(r, !1));
    }),
        e && ((R = t), e6.emitChange());
}
function eZ() {
    eq();
    let e = (0, H.v1)(Array.from(u.values()));
    if (null == e) return;
    let t = Math.max(Q, e - Date.now() + 2e3);
    t > J ||
        ($ = setTimeout(() => {
            eZ();
        }, t));
}
function eX() {
    eQ(), eZ();
}
function eQ() {
    null != $ && (clearTimeout($), ($ = null));
}
function eJ(e) {
    let { quest_enrollment_blocked_until: t } = e;
    O = null != t ? new Date(t) : null;
}
function e0() {
    q = !0;
}
function e1(e) {
    (q = !1), (z = Date.now()), (Z = e.questHomeHero);
}
function e2() {
    q = !1;
}
ee();
class e3 extends P.Ay.Store {
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
        return X.get(e);
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
    getQuestHomeHeroConfig() {
        return Z;
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
let e6 = new e3(x.h, {
        LOGOUT: el,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: eu,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: ec,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ed,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: em,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eE,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eg,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: e_,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: ej,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eW,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: eK,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: e$,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: ez,
        QUESTS_FETCH_PREVIEW_BEGIN: ef,
        QUESTS_FETCH_PREVIEW_SUCCESS: ep,
        QUESTS_FETCH_PREVIEW_FAILURE: eh,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eA,
        QUESTS_SEND_HEARTBEAT_FAILURE: eI,
        QUESTS_ENROLL_BEGIN: ey,
        QUESTS_ENROLL_SUCCESS: ev,
        QUESTS_ENROLL_FAILURE: eN,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eC,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eR,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eO,
        QUESTS_CLAIM_REWARD_BEGIN: eb,
        QUESTS_CLAIM_REWARD_SUCCESS: eD,
        QUESTS_CLAIM_REWARD_FAILURE: eL,
        QUESTS_DISMISS_CONTENT_BEGIN: eM,
        QUESTS_DISMISS_CONTENT_SUCCESS: eP,
        QUESTS_DISMISS_CONTENT_FAILURE: ex,
        QUESTS_USER_STATUS_UPDATE: eU,
        STREAM_CLOSE: eT,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ek,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eG,
        QUESTS_DELIVERY_OVERRIDE: eF,
        QUESTS_SELECT_TASK_PLATFORM: eV,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eB,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: eH,
        QUESTS_USER_COMPLETION_UPDATE: eJ,
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: e0,
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: e1,
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: e2,
    }),
    e4 = e6;

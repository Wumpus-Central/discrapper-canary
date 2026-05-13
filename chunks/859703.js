"use strict";
let i, r, s, a, o, l, u, c, d, _, f, h, p, E, m, g, A, I, T, S, N, y, C, v, O, R, b, D;
n.d(t, { A: () => el });
var L = n(735438),
    w = n(412703),
    M = n(440703),
    P = n(17928),
    x = n(228366),
    U = n(107195),
    k = n(38405),
    G = n(178540),
    F = n(507107),
    V = n(405670),
    B = n(302654),
    H = n(851936),
    j = n(710969),
    Y = n(319252),
    W = n(190107);
let K = new Map(),
    z = null,
    $ = null,
    q = !1,
    Z = null,
    X = null,
    Q = new Map();
function J() {
    (i = !1),
        (r = !1),
        (s = new Map()),
        (a = !1),
        (o = !1),
        (l = new Map()),
        (u = new Map()),
        (c = new Map()),
        (d = new Map()),
        (_ = 0),
        (f = 0),
        (h = new Set()),
        (p = new Set()),
        (E = new Set()),
        (m = new Set()),
        (g = new Set()),
        (K = new Map()),
        (I = new Map()),
        (T = new Map()),
        (S = new Map()),
        (N = null),
        (y = new Map()),
        (A = new Set()),
        (C = new Map()),
        (v = new Map()),
        (O = new Map()),
        es(),
        (R = null),
        (D = new Map()),
        (Q = new Map()),
        (b = new Map()),
        ($ = null),
        (Z = null),
        (X = null);
}
function ee(e, t) {
    let n = (u = new Map(u)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (
            (!(function (e, t) {
                if (null != t.userStatus)
                    for (let n of Object.values(t.userStatus?.progress ?? {}))
                        !(0, L.isNil)(n) &&
                            w.o.DESKTOP.has(n.eventName) &&
                            (n.heartbeat?.lastBeatAt != null
                                ? A.add(e)
                                : n.heartbeat?.lastBeatAt == null && A.delete(e));
            })(e, t),
            u.set(e, i),
            D.has(e))
        ) {
            let n = D.get(e);
            null != n && (D = new Map(D)).set(e, { ...n, ...t });
        }
    }
}
function et(e, t) {
    let n = new Map(I);
    n.set(e, t), (I = n);
}
function en(e) {
    null != S.get(e) && (S = new Map(S)).delete(e);
}
function ei(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function er(e) {
    let t = new Set(m);
    t.delete(e), (m = t);
}
function es() {
    null != z && (clearTimeout(z), (z = null));
}
J();
class ea extends P.Ay.Store {
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
        return i;
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
        return r;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get questDeliveryOverride() {
        return u.get(N ?? "");
    }
    get questToDeliverForPlacement() {
        return C;
    }
    get questEnrollmentBlockedUntil() {
        return R;
    }
    get questAdDecisionByPlacement() {
        return b;
    }
    getFetchQuestPreviewError(e) {
        return Q.get(e);
    }
    isEnrolling(e) {
        return h.has(e);
    }
    isClaimingReward(e) {
        return p.has(e);
    }
    isFetchingRewardCode(e) {
        return E.has(e);
    }
    isDismissingContent(e) {
        return m.has(e);
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
        return y.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return K.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return O;
    }
    isQuestExpired(e) {
        return O.get(e) ?? !1;
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
        return $;
    }
    get isFetchingEarnedQuestToDeliver() {
        return o;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return l?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return v;
    }
}
let eo = new ea(x.h, {
        LOGOUT: function () {
            es(), J(), V.Ay.getState().clearState(), G.A.getState().reset();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: r } = e,
                s = [...u.keys()],
                a = t.map((e) => e.id),
                o = s.filter((e) => !a.includes(e));
            o.length > 0 &&
                k.A.addBreadcrumb({
                    category: "quests.store",
                    message: `handleFetchCurrentQuestsSuccess: ${o.length} quest(s) removed during rebuild`,
                    data: { prevQuestIds: s, nextQuestIds: a, removedIds: o },
                }),
                (_ = Date.now()),
                (i = !1),
                (u = new Map());
            let l = new Map();
            for (let e of t)
                u.set(e.id, e),
                    l.set(e.id, (0, j.Ic)(e)),
                    e.targetedContent.includes(F.uF.QUEST_BAR) &&
                        (0, H.L)({ location: W.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((c = new Map()), n)) c.set(e.id, e);
            for (let e of D?.values()) u.has(e.id) || (u.set(e.id, e), l.set(e.id, (0, j.Ic)(e)));
            (O = l),
                es(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(O)),
                        u.forEach((e, i) => {
                            !0 !== n.get(i) && ((0, j.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                        }),
                        t && ((O = n), eo.emitChange());
                    let i = (0, j.v1)(Array.from(u.values()));
                    if (null == i) return;
                    let r = Math.max(5e3, i - Date.now() + 2e3);
                    r > 864e6 ||
                        (z = setTimeout(() => {
                            e();
                        }, r));
                })(),
                (R = null != r ? new Date(r) : null);
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (_ = 0), (i = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            a = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((a = !1), (d = new Map()), t)) d.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            a = !1;
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { placement: t } = e;
            (r = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let {
                quest: t,
                placement: n,
                adDecisionData: i,
                adContext: a,
                responseTtlSeconds: o,
                metadataSealed: l,
                trafficMetadataSealed: u,
                fetchedAt: c,
            } = e;
            (f = Date.now()), (r = !1), (s = new Map(s)).set(n, !1);
            let { enableNewRequestBehavior: d } = B.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
            if (d) {
                let e = {
                    questId: t?.id ?? null,
                    adCreativeId: t?.id ?? null,
                    fetchedAt: c,
                    ttlMillis: (0, U.Ce)(o),
                    adDecisionData: i,
                    adContext: a,
                    metadataSealed: l,
                    trafficMetadataSealed: u,
                };
                (b = new Map(b)).set(n, e);
            } else
                null == t
                    ? C.delete(n)
                    : C.set(n, {
                          quest: t,
                          adDecisionData: i,
                          adContext: a,
                          metadataSealed: l,
                          trafficMetadataSealed: u,
                      });
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { placement: t } = e;
            C.delete(t), (f = Date.now()), (r = !1), (s = new Map(s)).set(t, !1);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { content: t } = e;
            (o = !0), (l = new Map(l)).set(t, !0);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { serverQuests: t, content: n, fetchedAt: i, responseTtlSeconds: r } = e;
            (o = !1), (l = new Map(l)).set(n, !1);
            let s = (0, U.Ce)(r),
                a = v.get(n),
                c = new Map(a?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((c.set(e, { fetchedAt: i, ttlMillis: s, shouldDeliver: null != n }), null != n)) {
                    let t = u.get(e),
                        i = (0, Y.rO)(n);
                    null != t ? ee(e, i) : ((u = new Map(u)).set(e, i), (O = new Map(O)).set(e, (0, j.Ic)(i)));
                }
            v.set(n, { earnedDecisionByQuestId: c });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (o = !1), (l = new Map(l)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (g = new Set(g)).add(t), (Q = new Map(Q)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (g = new Set(g)).delete(t),
                (D = new Map(D)).set(t, n),
                (u = new Map(u)).set(t, n),
                (Q = new Map(Q)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (g = new Set(g)).delete(t), (Q = new Map(Q)).set(t, n);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: i } = e;
            A.add(t), ee(t, { userStatus: i }), null != n && en(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null != n &&
                null == S.get(n) &&
                (S = new Map(S)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(h);
            n.add(t), (h = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            ee(t.questId, { userStatus: t }), ei(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            ei(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(E);
            n.add(t), (E = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let t,
                n,
                { questId: i, rewardCode: r } = e,
                s = new Set(E);
            s.delete(i),
                (E = s),
                et(i, r),
                (t = u.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    ee(i, { userStatus: { ...n, claimedAt: r.claimedAt } });
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(E);
            n.delete(t), (E = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(p);
            n.add(t), (p = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                i = new Set(p);
            i.delete(t), (p = i);
            let r = new Map(T);
            r.set(t, n.items), (T = r);
            let s = u.get(t),
                a = s?.userStatus;
            if (null != a && null == a.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== M.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                null != e && et(t, e),
                    ee(t, { userStatus: { ...a, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } });
            }
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(p);
            n.delete(t), (p = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(m);
            n.add(t), (m = n), N === t && (N = null);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            ee(t.questId, { userStatus: t }), er(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            er(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, H.L)({ location: W.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, Y.tp)(t);
            ee(t.quest_id, { userStatus: i });
            let r = u.get(t.quest_id);
            if (null != r) {
                let e = (0, j.Ic)(r);
                O.get(t.quest_id) !== e && (O = new Map(O).set(t.quest_id, e));
            }
            0 === Object.keys(i.progress).length &&
                K.has(i.questId) &&
                (n.log(`Removing optimistic progress for ${i.questId}`), K.delete(i.questId));
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            en(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            en(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            ee(t.questId, { userStatus: t }),
                null == t.claimedAt && (I = new Map(I)).delete(t.questId),
                null == t.enrolledAt && ((y = new Map(y)).delete(t.questId), V.Ay.getState().resetQuest(t.questId));
            let n = u.get(t.questId);
            if (null != n) {
                let e = (0, j.Ic)(n);
                O.get(t.questId) !== e && (O = new Map(O).set(t.questId, e));
            }
        },
        QUESTS_DELIVERY_OVERRIDE: function (e) {
            let { questId: t } = e;
            N = N === t ? null : t;
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (y = new Map(y)), null == n ? y.delete(t) : y.set(t, n);
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t, taskEventName: n, progress: i } = e,
                r = K.get(t) ?? new Map();
            r.set(n, i), K.set(t, r);
        },
        QUESTS_RESET_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t } = e;
            K.has(t) && K.delete(t), V.Ay.getState().resetQuest(t);
        },
        QUESTS_USER_COMPLETION_UPDATE: function (e) {
            let { quest_enrollment_blocked_until: t } = e;
            R = null != t ? new Date(t) : null;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function () {
            q = !0;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
            (q = !1), ($ = Date.now()), (Z = e.questHomeHero);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function () {
            q = !1;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN: function (e) {
            let { placement: t } = e;
            (q = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS: function (e) {
            (q = !1), ($ = Date.now()), (s = new Map(s)).set(e.placement, !1), (X = e.questHomeHero);
            let t = {
                questId: null,
                adCreativeId: e.questHomeHero?.id ?? null,
                fetchedAt: e.fetchedAt,
                ttlMillis: (0, U.Ce)(e.responseTtlSeconds),
                adDecisionData: e.adDecisionData,
                adContext: e.adContext,
                metadataSealed: e.metadataSealed,
                trafficMetadataSealed: e.trafficMetadataSealed,
            };
            (b = new Map(b)).set(e.placement, t);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE: function (e) {
            let { placement: t } = e;
            (q = !1), (s = new Map(s)).set(t, !1);
        },
    }),
    el = eo;

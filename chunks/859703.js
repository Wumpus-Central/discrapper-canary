"use strict";
let i, r, s, a, o, l, d, _, u, c, E, h, m, f, g, p, A, I, T, S, N, C, R, O, y, v, D, L;
n.d(t, { A: () => ed });
var b = n(735438),
    w = n(412703),
    P = n(440703),
    k = n(17928),
    M = n(228366),
    U = n(927813),
    x = n(178540),
    G = n(507107),
    V = n(405670),
    F = n(302654),
    B = n(851936),
    H = n(710969),
    j = n(470307),
    W = n(654487);
let Y = 6 * U.A.Millis.HOUR,
    K = new Map(),
    z = null,
    $ = null,
    q = !1,
    X = null,
    Z = null,
    Q = new Map();
function J() {
    (i = !1),
        (r = !1),
        (s = new Map()),
        (a = !1),
        (o = !1),
        (l = new Map()),
        (d = new Map()),
        (_ = new Map()),
        (u = new Map()),
        (c = 0),
        (E = 0),
        (h = new Set()),
        (m = new Set()),
        (f = new Set()),
        (g = new Set()),
        (p = new Set()),
        (K = new Map()),
        (I = new Map()),
        (T = new Map()),
        (S = new Map()),
        (N = null),
        (C = new Map()),
        (A = new Set()),
        (R = new Map()),
        (O = new Map()),
        (y = new Map()),
        ea(),
        (v = null),
        (L = new Map()),
        (Q = new Map()),
        (D = new Map()),
        ($ = null),
        (X = null),
        (Z = null);
}
function ee(e, t) {
    let n = (d = new Map(d)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (
            (!(function (e, t) {
                if (null != t.userStatus)
                    for (let n of Object.values(t.userStatus?.progress ?? {}))
                        !(0, b.isNil)(n) &&
                            w.o.DESKTOP.has(n.eventName) &&
                            (n.heartbeat?.lastBeatAt != null
                                ? A.add(e)
                                : n.heartbeat?.lastBeatAt == null && A.delete(e));
            })(e, t),
            d.set(e, i),
            L.has(e))
        ) {
            let n = L.get(e);
            null != n && (L = new Map(L)).set(e, { ...n, ...t });
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
    let t = new Set(g);
    t.delete(e), (g = t);
}
function es(e) {
    if (null == e) return Y;
    let t = 1e3 * e;
    return t < Y && t > 0 ? t : Y;
}
function ea() {
    null != z && (clearTimeout(z), (z = null));
}
J();
class eo extends k.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return d;
    }
    get excludedQuests() {
        return _;
    }
    get claimedQuests() {
        return u;
    }
    get isFetchingCurrentQuests() {
        return i;
    }
    get isFetchingClaimedQuests() {
        return a;
    }
    isFetchingQuestPreview(e) {
        return p.has(e);
    }
    get lastFetchedCurrentQuests() {
        return c;
    }
    get lastFetchedQuestToDeliver() {
        return E;
    }
    get isFetchingQuestToDeliver() {
        return r;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get questDeliveryOverride() {
        return d.get(N ?? "");
    }
    get questToDeliverForPlacement() {
        return R;
    }
    get questEnrollmentBlockedUntil() {
        return v;
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
        return f.has(e);
    }
    isDismissingContent(e) {
        return g.has(e);
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
        return d.get(e);
    }
    getQuestConfig(e) {
        return this.getQuest(e)?.config;
    }
    isProgressingOnDesktop(e) {
        return A.has(e);
    }
    selectedTaskPlatform(e) {
        return C.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return K.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return y;
    }
    isQuestExpired(e) {
        return y.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return L.get(e);
    }
    isFetchingQuestHomeHero() {
        return q;
    }
    getQuestHomeHero() {
        return Z ?? X;
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
        return O;
    }
}
let el = new eo(M.h, {
        LOGOUT: function () {
            ea(), J(), V.Ay.getState().clearState(), x.A.getState().reset();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: r } = e;
            (c = Date.now()), (i = !1), (d = new Map());
            let s = new Map();
            for (let e of t)
                d.set(e.id, e),
                    s.set(e.id, (0, H.Ic)(e)),
                    e.targetedContent.includes(G.uF.QUEST_BAR) &&
                        (0, B.L)({ location: W.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((_ = new Map()), n)) _.set(e.id, e);
            for (let e of L?.values()) d.has(e.id) || (d.set(e.id, e), s.set(e.id, (0, H.Ic)(e)));
            (y = s),
                ea(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(y)),
                        d.forEach((e, i) => {
                            !0 !== n.get(i) && ((0, H.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                        }),
                        t && ((y = n), el.emitChange());
                    let i = (0, H.v1)(Array.from(d.values()));
                    if (null == i) return;
                    let r = Math.max(5e3, i - Date.now() + 2e3);
                    r > 864e6 ||
                        (z = setTimeout(() => {
                            e();
                        }, r));
                })(),
                (v = null != r ? new Date(r) : null);
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (c = 0), (i = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            a = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((a = !1), (u = new Map()), t)) u.set(e.id, e);
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
                trafficMetadataRaw: d,
                trafficMetadataSealed: _,
                fetchedAt: u,
            } = e;
            (E = Date.now()), (r = !1), (s = new Map(s)).set(n, !1);
            let { enableNewRequestBehavior: c } = F.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
            if (c) {
                let e = {
                    questId: t?.id ?? null,
                    adCreativeId: t?.id ?? null,
                    fetchedAt: u,
                    ttlMillis: es(o),
                    adDecisionData: i,
                    adContext: a,
                    metadataSealed: l,
                    trafficMetadataRaw: d,
                    trafficMetadataSealed: _,
                };
                (D = new Map(D)).set(n, e);
            } else
                null == t
                    ? R.delete(n)
                    : R.set(n, {
                          quest: t,
                          adDecisionData: i,
                          adContext: a,
                          metadataSealed: l,
                          trafficMetadataRaw: d,
                          trafficMetadataSealed: _,
                      });
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { placement: t } = e;
            R.delete(t), (E = Date.now()), (r = !1), (s = new Map(s)).set(t, !1);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { content: t } = e;
            (o = !0), (l = new Map(l)).set(t, !0);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { serverQuests: t, content: n, fetchedAt: i, responseTtlSeconds: r } = e;
            (o = !1), (l = new Map(l)).set(n, !1);
            let s = es(r),
                a = O.get(n),
                _ = new Map(a?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((_.set(e, { fetchedAt: i, ttlMillis: s, shouldDeliver: null != n }), null != n)) {
                    let t = d.get(e),
                        i = (0, j.rO)(n);
                    null != t ? ee(e, i) : ((d = new Map(d)).set(e, i), (y = new Map(y)).set(e, (0, H.Ic)(i)));
                }
            O.set(n, { earnedDecisionByQuestId: _ });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (o = !1), (l = new Map(l)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (p = new Set(p)).add(t), (Q = new Map(Q)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (p = new Set(p)).delete(t),
                (L = new Map(L)).set(t, n),
                (d = new Map(d)).set(t, n),
                (Q = new Map(Q)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (p = new Set(p)).delete(t), (Q = new Map(Q)).set(t, n);
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
                n = new Set(f);
            n.add(t), (f = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let t,
                n,
                { questId: i, rewardCode: r } = e,
                s = new Set(f);
            s.delete(i),
                (f = s),
                et(i, r),
                (t = d.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    ee(i, { userStatus: { ...n, claimedAt: r.claimedAt } });
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(f);
            n.delete(t), (f = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(m);
            n.add(t), (m = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                i = new Set(m);
            i.delete(t), (m = i);
            let r = new Map(T);
            r.set(t, n.items), (T = r);
            let s = d.get(t),
                a = s?.userStatus;
            if (null != a && null == a.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== P.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                null != e && et(t, e),
                    ee(t, { userStatus: { ...a, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } });
            }
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(m);
            n.delete(t), (m = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(g);
            n.add(t), (g = n), N === t && (N = null);
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
                n = (0, B.L)({ location: W.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, j.tp)(t);
            ee(t.quest_id, { userStatus: i });
            let r = d.get(t.quest_id);
            if (null != r) {
                let e = (0, H.Ic)(r);
                y.get(t.quest_id) !== e && (y = new Map(y).set(t.quest_id, e));
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
                null == t.enrolledAt && ((C = new Map(C)).delete(t.questId), V.Ay.getState().resetQuest(t.questId));
            let n = d.get(t.questId);
            if (null != n) {
                let e = (0, H.Ic)(n);
                y.get(t.questId) !== e && (y = new Map(y).set(t.questId, e));
            }
        },
        QUESTS_DELIVERY_OVERRIDE: function (e) {
            let { questId: t } = e;
            N = N === t ? null : t;
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (C = new Map(C)), null == n ? C.delete(t) : C.set(t, n);
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
            v = null != t ? new Date(t) : null;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function () {
            q = !0;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
            (q = !1), ($ = Date.now()), (X = e.questHomeHero);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function () {
            q = !1;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN: function (e) {
            let { placement: t } = e;
            (q = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS: function (e) {
            (q = !1), ($ = Date.now()), (s = new Map(s)).set(e.placement, !1), (Z = e.questHomeHero);
            let t = {
                questId: null,
                adCreativeId: e.questHomeHero?.id ?? null,
                fetchedAt: e.fetchedAt,
                ttlMillis: es(e.responseTtlSeconds),
                adDecisionData: e.adDecisionData,
                adContext: e.adContext,
                metadataSealed: e.metadataSealed,
                trafficMetadataRaw: e.trafficMetadataRaw,
                trafficMetadataSealed: e.trafficMetadataSealed,
            };
            (D = new Map(D)).set(e.placement, t);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE: function (e) {
            let { placement: t } = e;
            (q = !1), (s = new Map(s)).set(t, !1);
        },
    }),
    ed = el;

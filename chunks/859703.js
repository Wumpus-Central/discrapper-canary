"use strict";
let r, i, s, a, o, l, u, d, c, _, f, E, h, p, m, g, A, I, T, S, y, N, O, R, v, C, b, D;
n.d(t, { A: () => eu });
var L = n(735438),
    w = n(412703),
    M = n(440703),
    P = n(311907),
    U = n(73153),
    k = n(927813),
    x = n(178540),
    G = n(341915),
    V = n(405670),
    F = n(302654),
    B = n(851936),
    H = n(710969),
    Y = n(229006),
    W = n(654487);
let j = 6 * k.A.Millis.HOUR,
    K = new Map(),
    $ = null,
    z = null,
    q = !1,
    X = null,
    Q = null,
    J = new Map();
function Z() {
    (r = !1),
        (i = !1),
        (s = new Map()),
        (a = !1),
        (o = !1),
        (l = new Map()),
        (u = new Map()),
        (d = new Map()),
        (c = new Map()),
        (_ = 0),
        (f = 0),
        (E = new Set()),
        (h = new Set()),
        (p = new Set()),
        (m = new Set()),
        (g = new Set()),
        (K = new Map()),
        (I = new Map()),
        (T = new Map()),
        (S = new Map()),
        (y = null),
        (N = new Map()),
        (A = new Set()),
        (O = new Map()),
        (R = new Map()),
        (v = new Map()),
        ea(),
        (C = null),
        (D = new Map()),
        (J = new Map()),
        (b = new Map()),
        (z = null),
        (X = null),
        (Q = null);
}
function ee(e, t) {
    let n = (u = new Map(u)).get(e);
    if (null != n) {
        let r = { ...n, ...t };
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
            u.set(e, r),
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
function er(e) {
    let t = new Set(E);
    t.delete(e), (E = t);
}
function ei(e) {
    let t = new Set(m);
    t.delete(e), (m = t);
}
function es(e) {
    if (null == e) return j;
    let t = 1e3 * e;
    return t < j && t > 0 ? t : j;
}
function ea() {
    null != $ && (clearTimeout($), ($ = null));
}
Z();
class eo extends P.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return u;
    }
    get excludedQuests() {
        return d;
    }
    get claimedQuests() {
        return c;
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
        return O;
    }
    get questEnrollmentBlockedUntil() {
        return C;
    }
    get questAdDecisionByPlacement() {
        return b;
    }
    getFetchQuestPreviewError(e) {
        return J.get(e);
    }
    isEnrolling(e) {
        return E.has(e);
    }
    isClaimingReward(e) {
        return h.has(e);
    }
    isFetchingRewardCode(e) {
        return p.has(e);
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
        return N.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return K.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return v;
    }
    isQuestExpired(e) {
        return v.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return D.get(e);
    }
    isFetchingQuestHomeHero() {
        return q;
    }
    getQuestHomeHero() {
        return Q ?? X;
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
        return R;
    }
}
let el = new eo(U.h, {
        LOGOUT: function () {
            ea(), Z(), V.Ay.getState().clearState(), x.A.getState().reset();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            r = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: i } = e;
            (_ = Date.now()), (r = !1), (u = new Map());
            let s = new Map();
            for (let e of t)
                u.set(e.id, e),
                    s.set(e.id, (0, H.Ic)(e)),
                    e.targetedContent.includes(G.uF.QUEST_BAR) &&
                        (0, B.L)({ location: W.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((d = new Map()), n)) d.set(e.id, e);
            for (let e of D?.values()) u.has(e.id) || (u.set(e.id, e), s.set(e.id, (0, H.Ic)(e)));
            (v = s),
                ea(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(v)),
                        u.forEach((e, r) => {
                            !0 !== n.get(r) && ((0, H.Ic)(e) ? (n.set(r, !0), (t = !0)) : n.has(r) || n.set(r, !1));
                        }),
                        t && ((v = n), el.emitChange());
                    let r = (0, H.v1)(Array.from(u.values()));
                    if (null == r) return;
                    let i = Math.max(5e3, r - Date.now() + 2e3);
                    i > 864e6 ||
                        ($ = setTimeout(() => {
                            e();
                        }, i));
                })(),
                (C = null != i ? new Date(i) : null);
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (_ = 0), (r = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            a = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((a = !1), (c = new Map()), t)) c.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            a = !1;
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { placement: t } = e;
            (i = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let {
                quest: t,
                placement: n,
                adDecisionData: r,
                adContext: a,
                responseTtlSeconds: o,
                metadataSealed: l,
                trafficMetadataRaw: u,
                trafficMetadataSealed: d,
                fetchedAt: c,
            } = e;
            (f = Date.now()), (i = !1), (s = new Map(s)).set(n, !1);
            let { enableNewRequestBehavior: _ } = F.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
            if (_) {
                let e = {
                    questId: t?.id ?? null,
                    adCreativeId: t?.id ?? null,
                    fetchedAt: c,
                    ttlMillis: es(o),
                    adDecisionData: r,
                    adContext: a,
                    metadataSealed: l,
                    trafficMetadataRaw: u,
                    trafficMetadataSealed: d,
                };
                (b = new Map(b)).set(n, e);
            } else
                null == t
                    ? O.delete(n)
                    : O.set(n, {
                          quest: t,
                          adDecisionData: r,
                          adContext: a,
                          metadataSealed: l,
                          trafficMetadataRaw: u,
                          trafficMetadataSealed: d,
                      });
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { placement: t } = e;
            O.delete(t), (f = Date.now()), (i = !1), (s = new Map(s)).set(t, !1);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { content: t } = e;
            (o = !0), (l = new Map(l)).set(t, !0);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { serverQuests: t, content: n, fetchedAt: r, responseTtlSeconds: i } = e;
            (o = !1), (l = new Map(l)).set(n, !1);
            let s = es(i),
                a = R.get(n),
                d = new Map(a?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((d.set(e, { fetchedAt: r, ttlMillis: s, shouldDeliver: null != n }), null != n)) {
                    let t = u.get(e),
                        r = (0, Y.rO)(n);
                    null != t ? ee(e, r) : ((u = new Map(u)).set(e, r), (v = new Map(v)).set(e, (0, H.Ic)(r)));
                }
            R.set(n, { earnedDecisionByQuestId: d });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (o = !1), (l = new Map(l)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (g = new Set(g)).add(t), (J = new Map(J)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (g = new Set(g)).delete(t),
                (D = new Map(D)).set(t, n),
                (u = new Map(u)).set(t, n),
                (J = new Map(J)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (g = new Set(g)).delete(t), (J = new Map(J)).set(t, n);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: r } = e;
            A.add(t), ee(t, { userStatus: r }), null != n && en(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null != n &&
                null == S.get(n) &&
                (S = new Map(S)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(E);
            n.add(t), (E = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            ee(t.questId, { userStatus: t }), er(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            er(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(p);
            n.add(t), (p = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let t,
                n,
                { questId: r, rewardCode: i } = e,
                s = new Set(p);
            s.delete(r),
                (p = s),
                et(r, i),
                (t = u.get(r)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    ee(r, { userStatus: { ...n, claimedAt: i.claimedAt } });
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(p);
            n.delete(t), (p = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(h);
            n.add(t), (h = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                r = new Set(h);
            r.delete(t), (h = r);
            let i = new Map(T);
            i.set(t, n.items), (T = i);
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
                n = new Set(h);
            n.delete(t), (h = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(m);
            n.add(t), (m = n), y === t && (y = null);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            ee(t.questId, { userStatus: t }), ei(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            ei(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, B.L)({ location: W.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let r = (0, Y.tp)(t);
            ee(t.quest_id, { userStatus: r });
            let i = u.get(t.quest_id);
            if (null != i) {
                let e = (0, H.Ic)(i);
                v.get(t.quest_id) !== e && (v = new Map(v).set(t.quest_id, e));
            }
            0 === Object.keys(r.progress).length &&
                K.has(r.questId) &&
                (n.log(`Removing optimistic progress for ${r.questId}`), K.delete(r.questId));
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
                null == t.enrolledAt && ((N = new Map(N)).delete(t.questId), V.Ay.getState().resetQuest(t.questId));
            let n = u.get(t.questId);
            if (null != n) {
                let e = (0, H.Ic)(n);
                v.get(t.questId) !== e && (v = new Map(v).set(t.questId, e));
            }
        },
        QUESTS_DELIVERY_OVERRIDE: function (e) {
            let { questId: t } = e;
            y = y === t ? null : t;
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (N = new Map(N)), null == n ? N.delete(t) : N.set(t, n);
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t, taskEventName: n, progress: r } = e,
                i = K.get(t) ?? new Map();
            i.set(n, r), K.set(t, i);
        },
        QUESTS_RESET_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t } = e;
            K.has(t) && K.delete(t), V.Ay.getState().resetQuest(t);
        },
        QUESTS_USER_COMPLETION_UPDATE: function (e) {
            let { quest_enrollment_blocked_until: t } = e;
            C = null != t ? new Date(t) : null;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function () {
            q = !0;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
            (q = !1), (z = Date.now()), (X = e.questHomeHero);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function () {
            q = !1;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN: function (e) {
            let { placement: t } = e;
            (q = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS: function (e) {
            (q = !1), (z = Date.now()), (s = new Map(s)).set(e.placement, !1), (Q = e.questHomeHero);
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
            (b = new Map(b)).set(e.placement, t);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE: function (e) {
            let { placement: t } = e;
            (q = !1), (s = new Map(s)).set(t, !1);
        },
    }),
    eu = el;

"use strict";
let i, r, s, a, o, l, _, d, u, c, E, h, m, f, g, A, I, p, T, S, N, O, R, C, y, D, L, v;
n.d(t, { A: () => eo });
var w = n(735438),
    P = n(412703),
    b = n(440703),
    k = n(17928),
    U = n(228366),
    M = n(107195),
    G = n(178540),
    x = n(507107),
    V = n(405670),
    F = n(302654),
    B = n(851936),
    H = n(710969),
    Y = n(470307),
    W = n(654487);
let K = new Map(),
    j = null,
    $ = null,
    z = !1,
    q = null,
    X = null,
    Q = new Map();
function J() {
    (i = !1),
        (r = !1),
        (s = new Map()),
        (a = !1),
        (o = !1),
        (l = new Map()),
        (_ = new Map()),
        (d = new Map()),
        (u = new Map()),
        (c = 0),
        (E = 0),
        (h = new Set()),
        (m = new Set()),
        (f = new Set()),
        (g = new Set()),
        (A = new Set()),
        (K = new Map()),
        (p = new Map()),
        (T = new Map()),
        (S = new Map()),
        (N = null),
        (O = new Map()),
        (I = new Set()),
        (R = new Map()),
        (C = new Map()),
        (y = new Map()),
        er(),
        (D = null),
        (v = new Map()),
        (Q = new Map()),
        (L = new Map()),
        ($ = null),
        (q = null),
        (X = null);
}
function Z(e, t) {
    let n = (_ = new Map(_)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (
            (!(function (e, t) {
                if (null != t.userStatus)
                    for (let n of Object.values(t.userStatus?.progress ?? {}))
                        !(0, w.isNil)(n) &&
                            P.o.DESKTOP.has(n.eventName) &&
                            (n.heartbeat?.lastBeatAt != null
                                ? I.add(e)
                                : n.heartbeat?.lastBeatAt == null && I.delete(e));
            })(e, t),
            _.set(e, i),
            v.has(e))
        ) {
            let n = v.get(e);
            null != n && (v = new Map(v)).set(e, { ...n, ...t });
        }
    }
}
function ee(e, t) {
    let n = new Map(p);
    n.set(e, t), (p = n);
}
function et(e) {
    null != S.get(e) && (S = new Map(S)).delete(e);
}
function en(e) {
    let t = new Set(h);
    t.delete(e), (h = t);
}
function ei(e) {
    let t = new Set(g);
    t.delete(e), (g = t);
}
function er() {
    null != j && (clearTimeout(j), (j = null));
}
J();
class es extends k.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return _;
    }
    get excludedQuests() {
        return d;
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
        return A.has(e);
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
        return _.get(N ?? "");
    }
    get questToDeliverForPlacement() {
        return R;
    }
    get questEnrollmentBlockedUntil() {
        return D;
    }
    get questAdDecisionByPlacement() {
        return L;
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
        return p.get(e);
    }
    getRewards(e) {
        return T.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return S.get(e);
    }
    getQuest(e) {
        return _.get(e);
    }
    getQuestConfig(e) {
        return this.getQuest(e)?.config;
    }
    isProgressingOnDesktop(e) {
        return I.has(e);
    }
    selectedTaskPlatform(e) {
        return O.get(e) ?? null;
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
        return v.get(e);
    }
    isFetchingQuestHomeHero() {
        return z;
    }
    getQuestHomeHero() {
        return X ?? q;
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
        return C;
    }
}
let ea = new es(U.h, {
        LOGOUT: function () {
            er(), J(), V.Ay.getState().clearState(), G.A.getState().reset();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: r } = e;
            (c = Date.now()), (i = !1), (_ = new Map());
            let s = new Map();
            for (let e of t)
                _.set(e.id, e),
                    s.set(e.id, (0, H.Ic)(e)),
                    e.targetedContent.includes(x.uF.QUEST_BAR) &&
                        (0, B.L)({ location: W.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((d = new Map()), n)) d.set(e.id, e);
            for (let e of v?.values()) _.has(e.id) || (_.set(e.id, e), s.set(e.id, (0, H.Ic)(e)));
            (y = s),
                er(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(y)),
                        _.forEach((e, i) => {
                            !0 !== n.get(i) && ((0, H.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                        }),
                        t && ((y = n), ea.emitChange());
                    let i = (0, H.v1)(Array.from(_.values()));
                    if (null == i) return;
                    let r = Math.max(5e3, i - Date.now() + 2e3);
                    r > 864e6 ||
                        (j = setTimeout(() => {
                            e();
                        }, r));
                })(),
                (D = null != r ? new Date(r) : null);
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
                trafficMetadataRaw: _,
                trafficMetadataSealed: d,
                fetchedAt: u,
            } = e;
            (E = Date.now()), (r = !1), (s = new Map(s)).set(n, !1);
            let { enableNewRequestBehavior: c } = F.A.getConfig({ location: "handleFetchQuestToDeliverSuccess" });
            if (c) {
                let e = {
                    questId: t?.id ?? null,
                    adCreativeId: t?.id ?? null,
                    fetchedAt: u,
                    ttlMillis: (0, M.Ce)(o),
                    adDecisionData: i,
                    adContext: a,
                    metadataSealed: l,
                    trafficMetadataRaw: _,
                    trafficMetadataSealed: d,
                };
                (L = new Map(L)).set(n, e);
            } else
                null == t
                    ? R.delete(n)
                    : R.set(n, {
                          quest: t,
                          adDecisionData: i,
                          adContext: a,
                          metadataSealed: l,
                          trafficMetadataRaw: _,
                          trafficMetadataSealed: d,
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
            let s = (0, M.Ce)(r),
                a = C.get(n),
                d = new Map(a?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((d.set(e, { fetchedAt: i, ttlMillis: s, shouldDeliver: null != n }), null != n)) {
                    let t = _.get(e),
                        i = (0, Y.rO)(n);
                    null != t ? Z(e, i) : ((_ = new Map(_)).set(e, i), (y = new Map(y)).set(e, (0, H.Ic)(i)));
                }
            C.set(n, { earnedDecisionByQuestId: d });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (o = !1), (l = new Map(l)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (A = new Set(A)).add(t), (Q = new Map(Q)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (A = new Set(A)).delete(t),
                (v = new Map(v)).set(t, n),
                (_ = new Map(_)).set(t, n),
                (Q = new Map(Q)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (A = new Set(A)).delete(t), (Q = new Map(Q)).set(t, n);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: i } = e;
            I.add(t), Z(t, { userStatus: i }), null != n && et(n);
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
            Z(t.questId, { userStatus: t }), en(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            en(t);
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
                ee(i, r),
                (t = _.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    Z(i, { userStatus: { ...n, claimedAt: r.claimedAt } });
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
            let s = _.get(t),
                a = s?.userStatus;
            if (null != a && null == a.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== b.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                null != e && ee(t, e),
                    Z(t, { userStatus: { ...a, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } });
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
            Z(t.questId, { userStatus: t }), ei(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            ei(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, B.L)({ location: W.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, Y.tp)(t);
            Z(t.quest_id, { userStatus: i });
            let r = _.get(t.quest_id);
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
            et(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            et(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            Z(t.questId, { userStatus: t }),
                null == t.claimedAt && (p = new Map(p)).delete(t.questId),
                null == t.enrolledAt && ((O = new Map(O)).delete(t.questId), V.Ay.getState().resetQuest(t.questId));
            let n = _.get(t.questId);
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
            (O = new Map(O)), null == n ? O.delete(t) : O.set(t, n);
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
            D = null != t ? new Date(t) : null;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function () {
            z = !0;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
            (z = !1), ($ = Date.now()), (q = e.questHomeHero);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function () {
            z = !1;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN: function (e) {
            let { placement: t } = e;
            (z = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS: function (e) {
            (z = !1), ($ = Date.now()), (s = new Map(s)).set(e.placement, !1), (X = e.questHomeHero);
            let t = {
                questId: null,
                adCreativeId: e.questHomeHero?.id ?? null,
                fetchedAt: e.fetchedAt,
                ttlMillis: (0, M.Ce)(e.responseTtlSeconds),
                adDecisionData: e.adDecisionData,
                adContext: e.adContext,
                metadataSealed: e.metadataSealed,
                trafficMetadataRaw: e.trafficMetadataRaw,
                trafficMetadataSealed: e.trafficMetadataSealed,
            };
            (L = new Map(L)).set(e.placement, t);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE: function (e) {
            let { placement: t } = e;
            (z = !1), (s = new Map(s)).set(t, !1);
        },
    }),
    eo = ea;

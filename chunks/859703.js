"use strict";
let i, r, a, s, l, o, d, c, u, _, E, A, h, I, f, p, T, m, g, S, N, C, O, R, L, D, y, v, b, M, P;
n.d(t, { A: () => eh });
var U = n(435558),
    w = n(158390),
    G = n(412703),
    x = n(440703),
    k = n(17928),
    F = n(228366),
    V = n(107195),
    B = n(927813),
    H = n(38405),
    j = n(178540),
    W = n(24001),
    Y = n(405670),
    K = n(851936),
    $ = n(710969),
    z = n(319252),
    q = n(190107);
let Z = new Map(),
    X = null,
    Q = null,
    J = 30 * B.A.Millis.SECOND,
    ee = 10 * B.A.Millis.MINUTE,
    et = null,
    en = !1,
    ei = null,
    er = new Map();
function ea() {
    (i = !1),
        (r = !1),
        (a = new Map()),
        (s = !1),
        (l = !1),
        (o = new Map()),
        (d = new Map()),
        (c = new Map()),
        (u = new Map()),
        (_ = 0),
        (E = 0),
        (A = new Set()),
        (h = new Set()),
        (I = new Set()),
        (f = new Set()),
        (p = new Set()),
        (Z = new Map()),
        (m = new Map()),
        (g = new Map()),
        (S = new Map()),
        (N = new Map()),
        (C = new Map()),
        (T = new Set()),
        (O = new Map()),
        (R = new Map()),
        (L = new Map()),
        eu(),
        (D = null),
        (y = null),
        e_(),
        (P = new Map()),
        (er = new Map()),
        (v = new Map()),
        (b = new Map()),
        (M = new Map()),
        (et = null),
        (ei = null);
}
function es(e, t) {
    let n = (d = new Map(d)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (
            (!(function (e, t) {
                if (null != t.userStatus)
                    for (let n of Object.values(t.userStatus?.progress ?? {}))
                        !(0, U.isNil)(n) &&
                            G.o.DESKTOP.has(n.eventName) &&
                            (n.heartbeat?.lastBeatAt != null
                                ? T.add(e)
                                : n.heartbeat?.lastBeatAt == null && T.delete(e));
            })(e, t),
            d.set(e, i),
            P.has(e))
        ) {
            let n = P.get(e);
            null != n && (P = new Map(P)).set(e, { ...n, ...t });
        }
    }
}
function el(e, t) {
    let n = new Map(m);
    n.set(e, t), (m = n);
}
function eo(e) {
    null != S.get(e) && (S = new Map(S)).delete(e);
}
function ed(e) {
    let t = new Set(A);
    t.delete(e), (A = t);
}
function ec(e) {
    let t = new Set(f);
    t.delete(e), (f = t);
}
function eu() {
    null != X && (clearTimeout(X), (X = null));
}
function e_() {
    null != Q && (clearTimeout(Q), (Q = null));
}
ea();
class eE extends k.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return d;
    }
    get excludedQuests() {
        return c;
    }
    get claimedQuests() {
        return u;
    }
    get isFetchingCurrentQuests() {
        return i;
    }
    get isFetchingClaimedQuests() {
        return s;
    }
    isFetchingQuestPreview(e) {
        return p.has(e);
    }
    get lastFetchedCurrentQuests() {
        return _;
    }
    get lastFetchedQuestToDeliver() {
        return E;
    }
    get isFetchingQuestToDeliver() {
        return r;
    }
    isFetchingQuestToDeliverByPlacement(e) {
        return a?.get(e) ?? !1;
    }
    canRefreshAd(e) {
        let t = M?.get(e);
        return null == t || Date.now() >= t;
    }
    getQuestPreviewOverride(e) {
        let t = N.get(e);
        return null == t ? void 0 : d.get(t);
    }
    get questToDeliverForPlacement() {
        return O;
    }
    get questEnrollmentBlockedUntil() {
        return D;
    }
    get questAccessSuspendedUntil() {
        return y;
    }
    get isQuestAccessSuspended() {
        return null != y;
    }
    get questAdDecisionByPlacement() {
        return v;
    }
    getFetchQuestPreviewError(e) {
        return er.get(e);
    }
    isEnrolling(e) {
        return A.has(e);
    }
    isClaimingReward(e) {
        return h.has(e);
    }
    isFetchingRewardCode(e) {
        return I.has(e);
    }
    isDismissingContent(e) {
        return f.has(e);
    }
    getRewardCode(e) {
        return m.get(e);
    }
    getRewards(e) {
        return g.get(e);
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
        return T.has(e);
    }
    selectedTaskPlatform(e) {
        return C.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return Z.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return L;
    }
    isQuestExpired(e) {
        return L.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return P.get(e);
    }
    isFetchingQuestHomeHero() {
        return en;
    }
    getQuestHomeHero() {
        return ei;
    }
    getLastFetchedQuestHomeHero() {
        return et;
    }
    get isFetchingEarnedQuestToDeliver() {
        return l;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return o?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return R;
    }
}
let eA = new eE(F.h, {
        LOGOUT: function () {
            eu(), e_(), ea(), Y.Ay.getState().clearState(), j.A.getState().reset();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: r, questAccessSuspendedUntil: a } = e,
                s = [...d.keys()],
                l = t.map((e) => e.id),
                o = s.filter((e) => !l.includes(e));
            o.length > 0 &&
                H.A.addBreadcrumb({
                    category: "quests.store",
                    message: `handleFetchCurrentQuestsSuccess: ${o.length} quest(s) removed during rebuild`,
                    data: { prevQuestIds: s, nextQuestIds: l, removedIds: o },
                }),
                (_ = Date.now()),
                (i = !1),
                (d = new Map());
            let u = new Map();
            for (let e of t)
                d.set(e.id, e),
                    u.set(e.id, (0, $.Ic)(e)),
                    e.targetedContent.includes(W.uF.QUEST_BAR) &&
                        (0, K.L)({ location: q.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((c = new Map()), n)) c.set(e.id, e);
            for (let e of P?.values()) d.has(e.id) || (d.set(e.id, e), u.set(e.id, (0, $.Ic)(e)));
            (L = u),
                eu(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(L)),
                        d.forEach((e, i) => {
                            !0 !== n.get(i) && ((0, $.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                        }),
                        t && ((L = n), eA.emitChange());
                    let i = (0, $.v1)(Array.from(d.values()));
                    if (null == i) return;
                    let r = Math.max(5e3, i - Date.now() + 2e3);
                    r > 864e6 ||
                        (X = setTimeout(() => {
                            e();
                        }, r));
                })(),
                (D = null != r ? new Date(r) : null),
                (y = null != a ? new Date(a) : null),
                (function () {
                    if ((e_(), null == y)) return;
                    let e = y.getTime() - Date.now();
                    e > 864e6 ||
                        (Q = setTimeout(
                            () => {
                                (Q = null), (y = null), eA.emitChange();
                            },
                            Math.max(e, 0),
                        ));
                })();
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (_ = 0), (i = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            s = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((s = !1), (u = new Map()), t)) u.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            s = !1;
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { placement: t } = e;
            (r = !0), (a = new Map(a)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let {
                quest: t,
                placement: n,
                adDecisionData: i,
                adContext: s,
                responseTtlSeconds: l,
                metadataSealed: o,
                trafficMetadataSealed: d,
                fetchedAt: c,
            } = e;
            (E = Date.now()), (r = !1), (a = new Map(a)).set(n, !1), b.get(n)?.succeed(), M.delete(n);
            let u = {
                questId: t?.id ?? null,
                adCreativeId: t?.id ?? null,
                fetchedAt: c,
                ttlMillis: (0, V.Ce)(l),
                adDecisionData: i,
                adContext: s,
                metadataSealed: o,
                trafficMetadataSealed: d,
            };
            (v = new Map(v)).set(n, u);
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { placement: t } = e;
            O.delete(t), (E = Date.now()), (r = !1), (a = new Map(a)).set(t, !1);
            let n = b.get(t);
            null == n && ((n = new w.A(J, ee)), b.set(t, n)), M.set(t, Date.now() + n.fail());
        },
        QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function (e) {
            let { placement: t, responseTtlSeconds: n, fetchedAt: i } = e;
            (r = !1), (a = new Map(a)).set(t, !1);
            let s = { questId: null, adCreativeId: null, fetchedAt: i, ttlMillis: (0, V.Ce)(n) };
            (v = new Map(v)).set(t, s);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { content: t } = e;
            (l = !0), (o = new Map(o)).set(t, !0);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { serverQuests: t, content: n, fetchedAt: i, responseTtlSeconds: r } = e;
            (l = !1), (o = new Map(o)).set(n, !1);
            let a = (0, V.Ce)(r),
                s = R.get(n),
                c = new Map(s?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((c.set(e, { fetchedAt: i, ttlMillis: a, shouldDeliver: null != n }), null != n)) {
                    let t = d.get(e),
                        i = (0, z.rO)(n);
                    null != t ? es(e, i) : ((d = new Map(d)).set(e, i), (L = new Map(L)).set(e, (0, $.Ic)(i)));
                }
            R.set(n, { earnedDecisionByQuestId: c });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (l = !1), (o = new Map(o)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (p = new Set(p)).add(t), (er = new Map(er)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (p = new Set(p)).delete(t),
                (P = new Map(P)).set(t, n),
                (d = new Map(d)).set(t, n),
                (er = new Map(er)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (p = new Set(p)).delete(t), (er = new Map(er)).set(t, n);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: i } = e;
            T.add(t), es(t, { userStatus: i }), null != n && eo(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null != n &&
                null == S.get(n) &&
                (S = new Map(S)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(A);
            n.add(t), (A = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            es(t.questId, { userStatus: t }), ed(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            ed(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(I);
            n.add(t), (I = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let t,
                n,
                { questId: i, rewardCode: r } = e,
                a = new Set(I);
            a.delete(i),
                (I = a),
                el(i, r),
                (t = d.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    es(i, { userStatus: { ...n, claimedAt: r.claimedAt } });
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(I);
            n.delete(t), (I = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(h);
            n.add(t), (h = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                i = new Set(h);
            i.delete(t), (h = i);
            let r = new Map(g);
            r.set(t, n.items), (g = r);
            let a = d.get(t),
                s = a?.userStatus;
            if (null != s && null == s.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== x.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                null != e && el(t, e),
                    es(t, { userStatus: { ...s, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } });
            }
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(h);
            n.delete(t), (h = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(f);
            n.add(t), (f = n);
            let i = new Map(N),
                r = !1;
            for (let [e, n] of i) n === t && (i.delete(e), (r = !0));
            r && (N = i);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            es(t.questId, { userStatus: t }), ec(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            ec(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, K.L)({ location: q.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, z.tp)(t);
            es(t.quest_id, { userStatus: i });
            let r = d.get(t.quest_id);
            if (null != r) {
                let e = (0, $.Ic)(r);
                L.get(t.quest_id) !== e && (L = new Map(L).set(t.quest_id, e));
            }
            0 === Object.keys(i.progress).length &&
                Z.has(i.questId) &&
                (n.log(`Removing optimistic progress for ${i.questId}`), Z.delete(i.questId));
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            eo(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            eo(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            es(t.questId, { userStatus: t }),
                null == t.claimedAt && (m = new Map(m)).delete(t.questId),
                null == t.enrolledAt && ((C = new Map(C)).delete(t.questId), Y.Ay.getState().resetQuest(t.questId));
            let n = d.get(t.questId);
            if (null != n) {
                let e = (0, $.Ic)(n);
                L.get(t.questId) !== e && (L = new Map(L).set(t.questId, e));
            }
        },
        QUESTS_PREVIEW_OVERRIDE: function (e) {
            let { placement: t, questId: n } = e,
                i = new Map(N);
            i.get(t) === n ? i.delete(t) : i.set(t, n), (N = i);
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (C = new Map(C)), null == n ? C.delete(t) : C.set(t, n);
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t, taskEventName: n, progress: i } = e,
                r = Z.get(t) ?? new Map();
            r.set(n, i), Z.set(t, r);
        },
        QUESTS_RESET_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t } = e;
            Z.has(t) && Z.delete(t), Y.Ay.getState().resetQuest(t);
        },
        QUESTS_USER_COMPLETION_UPDATE: function (e) {
            let { quest_enrollment_blocked_until: t } = e;
            D = null != t ? new Date(t) : null;
        },
        QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function (e) {
            let { placement: t } = e;
            (en = !0), (a = new Map(a)).set(t, !0);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function (e) {
            (en = !1), (et = Date.now()), (a = new Map(a)).set(e.placement, !1), (ei = e.questHomeHero);
            let t = {
                questId: null,
                adCreativeId: e.questHomeHero?.id ?? null,
                fetchedAt: e.fetchedAt,
                ttlMillis: (0, V.Ce)(e.responseTtlSeconds),
                adDecisionData: e.adDecisionData,
                adContext: e.adContext,
                metadataSealed: e.metadataSealed,
                trafficMetadataSealed: e.trafficMetadataSealed,
            };
            (v = new Map(v)).set(e.placement, t);
        },
        QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function (e) {
            let { placement: t } = e;
            (en = !1), (a = new Map(a)).set(t, !1);
        },
    }),
    eh = eA;

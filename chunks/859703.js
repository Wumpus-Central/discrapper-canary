"use strict";
let i, r, a, s, l, o, d, c, u, _, E, A, h, I, f, p, T, m, g, S, N, C, O, R;
n.d(t, { A: () => et });
var L = n(435558),
    y = n(412703),
    D = n(440703),
    v = n(17928),
    b = n(228366),
    M = n(107195),
    P = n(38405),
    U = n(178540),
    w = n(738822),
    G = n(405670),
    x = n(851936),
    k = n(710969),
    F = n(319252),
    V = n(190107);
let B = new Map(),
    H = null,
    j = null,
    W = new Map();
function Y() {
    (i = !1),
        (r = !1),
        (a = !1),
        (s = new Map()),
        (l = new Map()),
        (o = new Map()),
        (d = new Map()),
        (c = 0),
        (u = new Set()),
        (_ = new Set()),
        (E = new Set()),
        (A = new Set()),
        (h = new Set()),
        (B = new Map()),
        (f = new Map()),
        (p = new Map()),
        (T = new Map()),
        (m = new Map()),
        (g = new Map()),
        (I = new Set()),
        (S = new Map()),
        (N = new Map()),
        X(),
        (C = null),
        (O = null),
        Q(),
        (R = new Map()),
        (W = new Map());
}
function K(e, t) {
    let n = (l = new Map(l)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (
            (!(function (e, t) {
                if (null != t.userStatus)
                    for (let n of Object.values(t.userStatus?.progress ?? {}))
                        !(0, L.isNil)(n) &&
                            y.o.DESKTOP.has(n.eventName) &&
                            (n.heartbeat?.lastBeatAt != null
                                ? I.add(e)
                                : n.heartbeat?.lastBeatAt == null && I.delete(e));
            })(e, t),
            l.set(e, i),
            R.has(e))
        ) {
            let n = R.get(e);
            null != n && (R = new Map(R)).set(e, { ...n, ...t });
        }
    }
}
function $(e, t) {
    let n = new Map(f);
    n.set(e, t), (f = n);
}
function z(e) {
    null != T.get(e) && (T = new Map(T)).delete(e);
}
function Z(e) {
    let t = new Set(u);
    t.delete(e), (u = t);
}
function q(e) {
    let t = new Set(A);
    t.delete(e), (A = t);
}
function X() {
    null != H && (clearTimeout(H), (H = null));
}
function Q() {
    null != j && (clearTimeout(j), (j = null));
}
Y();
class J extends v.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return l;
    }
    get excludedQuests() {
        return o;
    }
    get claimedQuests() {
        return d;
    }
    get isFetchingCurrentQuests() {
        return i;
    }
    get isFetchingClaimedQuests() {
        return r;
    }
    isFetchingQuestPreview(e) {
        return h.has(e);
    }
    get lastFetchedCurrentQuests() {
        return c;
    }
    getQuestPreviewOverride(e) {
        let t = m.get(e);
        return null == t ? void 0 : l.get(t);
    }
    get questEnrollmentBlockedUntil() {
        return C;
    }
    get questAccessSuspendedUntil() {
        return O;
    }
    get isQuestAccessSuspended() {
        return null != O;
    }
    getFetchQuestPreviewError(e) {
        return W.get(e);
    }
    isEnrolling(e) {
        return u.has(e);
    }
    isClaimingReward(e) {
        return _.has(e);
    }
    isFetchingRewardCode(e) {
        return E.has(e);
    }
    isDismissingContent(e) {
        return A.has(e);
    }
    getRewardCode(e) {
        return f.get(e);
    }
    getRewards(e) {
        return p.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return T.get(e);
    }
    getQuest(e) {
        return l.get(e);
    }
    getQuestConfig(e) {
        return this.getQuest(e)?.config;
    }
    isProgressingOnDesktop(e) {
        return I.has(e);
    }
    selectedTaskPlatform(e) {
        return g.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return B.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return N;
    }
    isQuestExpired(e) {
        return N.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return R.get(e);
    }
    get isFetchingEarnedQuestToDeliver() {
        return a;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return S;
    }
}
let ee = new J(b.h, {
        LOGOUT: function () {
            X(), Q(), Y(), G.Ay.getState().clearState(), U.A.getState().reset();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: r, questAccessSuspendedUntil: a } = e,
                s = [...l.keys()],
                d = t.map((e) => e.id),
                u = s.filter((e) => !d.includes(e));
            u.length > 0 &&
                P.A.addBreadcrumb({
                    category: "quests.store",
                    message: `handleFetchCurrentQuestsSuccess: ${u.length} quest(s) removed during rebuild`,
                    data: { prevQuestIds: s, nextQuestIds: d, removedIds: u },
                }),
                (c = Date.now()),
                (i = !1),
                (l = new Map());
            let _ = new Map();
            for (let e of t)
                l.set(e.id, e),
                    _.set(e.id, (0, k.Ic)(e)),
                    e.targetedContent.includes(w.uF.QUEST_BAR) &&
                        (0, x.L)({ location: V.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((o = new Map()), n)) o.set(e.id, e);
            for (let e of R?.values()) l.has(e.id) || (l.set(e.id, e), _.set(e.id, (0, k.Ic)(e)));
            (N = _),
                X(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(N)),
                        l.forEach((e, i) => {
                            !0 !== n.get(i) && ((0, k.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                        }),
                        t && ((N = n), ee.emitChange());
                    let i = (0, k.v1)(Array.from(l.values()));
                    if (null == i) return;
                    let r = Math.max(5e3, i - Date.now() + 2e3);
                    r > 864e6 ||
                        (H = setTimeout(() => {
                            e();
                        }, r));
                })(),
                (C = null != r ? new Date(r) : null),
                (O = null != a ? new Date(a) : null),
                (function () {
                    if ((Q(), null == O)) return;
                    let e = O.getTime() - Date.now();
                    e > 864e6 ||
                        (j = setTimeout(
                            () => {
                                (j = null), (O = null), ee.emitChange();
                            },
                            Math.max(e, 0),
                        ));
                })();
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (c = 0), (i = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            r = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((r = !1), (d = new Map()), t)) d.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            r = !1;
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { content: t } = e;
            (a = !0), (s = new Map(s)).set(t, !0);
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { serverQuests: t, content: n, fetchedAt: i, responseTtlSeconds: r } = e;
            (a = !1), (s = new Map(s)).set(n, !1);
            let o = (0, M.Ce)(r),
                d = S.get(n),
                c = new Map(d?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((c.set(e, { fetchedAt: i, ttlMillis: o, shouldDeliver: null != n }), null != n)) {
                    let t = l.get(e),
                        i = (0, F.rO)(n);
                    null != t ? K(e, i) : ((l = new Map(l)).set(e, i), (N = new Map(N)).set(e, (0, k.Ic)(i)));
                }
            S.set(n, { earnedDecisionByQuestId: c });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (a = !1), (s = new Map(s)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (h = new Set(h)).add(t), (W = new Map(W)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (h = new Set(h)).delete(t),
                (R = new Map(R)).set(t, n),
                (l = new Map(l)).set(t, n),
                (W = new Map(W)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (h = new Set(h)).delete(t), (W = new Map(W)).set(t, n);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: i } = e;
            I.add(t), K(t, { userStatus: i }), null != n && z(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null != n &&
                null == T.get(n) &&
                (T = new Map(T)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.add(t), (u = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            K(t.questId, { userStatus: t }), Z(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            Z(t);
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
                a = new Set(E);
            a.delete(i),
                (E = a),
                $(i, r),
                (t = l.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    K(i, { userStatus: { ...n, claimedAt: r.claimedAt } });
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(E);
            n.delete(t), (E = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(_);
            n.add(t), (_ = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                i = new Set(_);
            i.delete(t), (_ = i);
            let r = new Map(p);
            r.set(t, n.items), (p = r);
            let a = l.get(t),
                s = a?.userStatus;
            if (null != s && null == s.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== D.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                null != e && $(t, e),
                    K(t, { userStatus: { ...s, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } });
            }
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(_);
            n.delete(t), (_ = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(A);
            n.add(t), (A = n);
            let i = new Map(m),
                r = !1;
            for (let [e, n] of i) n === t && (i.delete(e), (r = !0));
            r && (m = i);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            K(t.questId, { userStatus: t }), q(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            q(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, x.L)({ location: V.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, F.tp)(t);
            K(t.quest_id, { userStatus: i });
            let r = l.get(t.quest_id);
            if (null != r) {
                let e = (0, k.Ic)(r);
                N.get(t.quest_id) !== e && (N = new Map(N).set(t.quest_id, e));
            }
            0 === Object.keys(i.progress).length &&
                B.has(i.questId) &&
                (n.log(`Removing optimistic progress for ${i.questId}`), B.delete(i.questId));
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            z(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            z(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            K(t.questId, { userStatus: t }),
                null == t.claimedAt && (f = new Map(f)).delete(t.questId),
                null == t.enrolledAt && ((g = new Map(g)).delete(t.questId), G.Ay.getState().resetQuest(t.questId));
            let n = l.get(t.questId);
            if (null != n) {
                let e = (0, k.Ic)(n);
                N.get(t.questId) !== e && (N = new Map(N).set(t.questId, e));
            }
        },
        QUESTS_PREVIEW_OVERRIDE: function (e) {
            let { placement: t, questId: n } = e,
                i = new Map(m);
            i.get(t) === n ? i.delete(t) : i.set(t, n), (m = i);
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (g = new Map(g)), null == n ? g.delete(t) : g.set(t, n);
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t, taskEventName: n, progress: i } = e,
                r = B.get(t) ?? new Map();
            r.set(n, i), B.set(t, r);
        },
        QUESTS_RESET_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t } = e;
            B.has(t) && B.delete(t), G.Ay.getState().resetQuest(t);
        },
        QUESTS_USER_COMPLETION_UPDATE: function (e) {
            let { quest_enrollment_blocked_until: t } = e;
            C = null != t ? new Date(t) : null;
        },
    }),
    et = ee;

"use strict";
let i, r, a, s, l, o, d, c, u, _, E, A, h, I, f, p, T, m, g, S, N, C, O, R, L;
n.d(t, { A: () => en });
var y = n(435558),
    D = n(412703),
    v = n(440703),
    b = n(17928),
    M = n(228366),
    P = n(107195),
    U = n(38405),
    w = n(178540),
    G = n(738822),
    x = n(405670),
    k = n(851936),
    F = n(710969),
    V = n(319252),
    B = n(190107);
let H = new Map(),
    j = null,
    W = null,
    Y = new Map();
function K() {
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
        (I = new Set()),
        (H = new Map()),
        (p = new Map()),
        (T = new Map()),
        (m = new Map()),
        (g = new Map()),
        (S = new Map()),
        (f = new Set()),
        (N = new Map()),
        (C = new Map()),
        Q(),
        (O = null),
        (R = null),
        J(),
        (L = new Map()),
        (Y = new Map());
}
function $(e, t) {
    let n = (l = new Map(l)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (
            (!(function (e, t) {
                if (null != t.userStatus)
                    for (let n of Object.values(t.userStatus?.progress ?? {}))
                        !(0, y.isNil)(n) &&
                            D.o.DESKTOP.has(n.eventName) &&
                            (n.heartbeat?.lastBeatAt != null
                                ? f.add(e)
                                : n.heartbeat?.lastBeatAt == null && f.delete(e));
            })(e, t),
            l.set(e, i),
            L.has(e))
        ) {
            let n = L.get(e);
            null != n && (L = new Map(L)).set(e, { ...n, ...t });
        }
    }
}
function z(e, t) {
    let n = new Map(p);
    n.set(e, t), (p = n);
}
function Z(e) {
    null != m.get(e) && (m = new Map(m)).delete(e);
}
function q(e) {
    let t = new Set(u);
    t.delete(e), (u = t);
}
function X(e) {
    let t = new Set(A);
    t.delete(e), (A = t);
}
function Q() {
    null != j && (clearTimeout(j), (j = null));
}
function J() {
    null != W && (clearTimeout(W), (W = null));
}
K();
class ee extends b.Ay.Store {
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
        return I.has(e);
    }
    get lastFetchedCurrentQuests() {
        return c;
    }
    getQuestPreviewOverride(e) {
        let t = g.get(e);
        return null == t ? void 0 : l.get(t);
    }
    get questEnrollmentBlockedUntil() {
        return O;
    }
    get questAccessSuspendedUntil() {
        return R;
    }
    get isQuestAccessSuspended() {
        return null != R;
    }
    getFetchQuestPreviewError(e) {
        return Y.get(e);
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
    isAdContentDismissed(e) {
        return h.has(e);
    }
    getRewardCode(e) {
        return p.get(e);
    }
    getRewards(e) {
        return T.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return m.get(e);
    }
    getQuest(e) {
        return l.get(e);
    }
    getQuestConfig(e) {
        return this.getQuest(e)?.config;
    }
    isProgressingOnDesktop(e) {
        return f.has(e);
    }
    selectedTaskPlatform(e) {
        return S.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return H.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return C;
    }
    isQuestExpired(e) {
        return C.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return L.get(e);
    }
    get isFetchingEarnedQuestToDeliver() {
        return a;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return N;
    }
}
let et = new ee(M.h, {
        LOGOUT: function () {
            Q(), J(), K(), x.Ay.getState().clearState(), w.A.getState().reset();
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
                U.A.addBreadcrumb({
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
                    _.set(e.id, (0, F.Ic)(e)),
                    e.targetedContent.includes(G.uF.QUEST_BAR) &&
                        (0, k.L)({ location: B.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        );
            for (let e of ((o = new Map()), n)) o.set(e.id, e);
            for (let e of L?.values()) l.has(e.id) || (l.set(e.id, e), _.set(e.id, (0, F.Ic)(e)));
            (C = _),
                Q(),
                (function e() {
                    let t, n;
                    (t = !1),
                        (n = new Map(C)),
                        l.forEach((e, i) => {
                            !0 !== n.get(i) && ((0, F.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                        }),
                        t && ((C = n), et.emitChange());
                    let i = (0, F.v1)(Array.from(l.values()));
                    if (null == i) return;
                    let r = Math.max(5e3, i - Date.now() + 2e3);
                    r > 864e6 ||
                        (j = setTimeout(() => {
                            e();
                        }, r));
                })(),
                (O = null != r ? new Date(r) : null),
                (R = null != a ? new Date(a) : null),
                (function () {
                    if ((J(), null == R)) return;
                    let e = R.getTime() - Date.now();
                    e > 864e6 ||
                        (W = setTimeout(
                            () => {
                                (W = null), (R = null), et.emitChange();
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
            let o = (0, P.Ce)(r),
                d = N.get(n),
                c = new Map(d?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((c.set(e, { fetchedAt: i, ttlMillis: o, shouldDeliver: null != n }), null != n)) {
                    let t = l.get(e),
                        i = (0, V.rO)(n);
                    null != t ? $(e, i) : ((l = new Map(l)).set(e, i), (C = new Map(C)).set(e, (0, F.Ic)(i)));
                }
            N.set(n, { earnedDecisionByQuestId: c });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            (a = !1), (s = new Map(s)).set(t, !1);
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            (I = new Set(I)).add(t), (Y = new Map(Y)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            (I = new Set(I)).delete(t),
                (L = new Map(L)).set(t, n),
                (l = new Map(l)).set(t, n),
                (Y = new Map(Y)).delete(t);
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            (I = new Set(I)).delete(t), (Y = new Map(Y)).set(t, n);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: i } = e;
            f.add(t), $(t, { userStatus: i }), null != n && Z(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null != n &&
                null == m.get(n) &&
                (m = new Map(m)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.add(t), (u = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            $(t.questId, { userStatus: t }), q(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            q(t);
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
                z(i, r),
                (t = l.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    $(i, { userStatus: { ...n, claimedAt: r.claimedAt } });
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
            let r = new Map(T);
            r.set(t, n.items), (T = r);
            let a = l.get(t),
                s = a?.userStatus;
            if (null != s && null == s.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== v.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                null != e && z(t, e),
                    $(t, { userStatus: { ...s, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } });
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
            let i = new Map(g),
                r = !1;
            for (let [e, n] of i) n === t && (i.delete(e), (r = !0));
            r && (g = i);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            $(t.questId, { userStatus: t }), X(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            X(t);
        },
        AD_CONTENT_DISMISS: function (e) {
            let { adCreativeId: t } = e,
                n = new Set(h);
            n.add(t), (h = n);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, k.L)({ location: B.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, V.tp)(t);
            $(t.quest_id, { userStatus: i });
            let r = l.get(t.quest_id);
            if (null != r) {
                let e = (0, F.Ic)(r);
                C.get(t.quest_id) !== e && (C = new Map(C).set(t.quest_id, e));
            }
            0 === Object.keys(i.progress).length &&
                H.has(i.questId) &&
                (n.log(`Removing optimistic progress for ${i.questId}`), H.delete(i.questId));
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            Z(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            Z(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            $(t.questId, { userStatus: t }),
                null == t.claimedAt && (p = new Map(p)).delete(t.questId),
                null == t.enrolledAt && ((S = new Map(S)).delete(t.questId), x.Ay.getState().resetQuest(t.questId));
            let n = l.get(t.questId);
            if (null != n) {
                let e = (0, F.Ic)(n);
                C.get(t.questId) !== e && (C = new Map(C).set(t.questId, e));
            }
        },
        QUESTS_PREVIEW_OVERRIDE: function (e) {
            let { placement: t, questId: n } = e,
                i = new Map(g);
            i.get(t) === n ? i.delete(t) : i.set(t, n), (g = i);
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (S = new Map(S)), null == n ? S.delete(t) : S.set(t, n);
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t, taskEventName: n, progress: i } = e,
                r = H.get(t) ?? new Map();
            r.set(n, i), H.set(t, r);
        },
        QUESTS_RESET_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t } = e;
            H.has(t) && H.delete(t), x.Ay.getState().resetQuest(t);
        },
        QUESTS_USER_COMPLETION_UPDATE: function (e) {
            let { quest_enrollment_blocked_until: t } = e;
            O = null != t ? new Date(t) : null;
        },
    }),
    en = et;

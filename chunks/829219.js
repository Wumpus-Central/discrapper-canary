"use strict";
n.d(t, {
    CV: () => k,
    Fr: () => en,
    Gn: () => J,
    Gt: () => q,
    HA: () => Q,
    N1: () => G,
    Oq: () => j,
    Ov: () => U,
    Oy: () => H,
    QG: () => ee,
    R2: () => F,
    UZ: () => z,
    WM: () => B,
    Yb: () => $,
    Yf: () => eu,
    Zb: () => ec,
    d6: () => Z,
    dQ: () => eo,
    g5: () => W,
    jh: () => Y,
    lk: () => K,
    lx: () => X,
    qY: () => es,
    r8: () => et,
    uI: () => ei,
    vD: () => P,
    xB: () => ea,
    yO: () => er,
}),
    n(323874),
    n(14289),
    n(35956);
var r = n(110259),
    i = n(323889),
    s = n(562465),
    a = n(73153),
    o = n(181658),
    l = n(881615),
    u = n(861638),
    c = n(577015),
    d = n(69114),
    _ = n(633965),
    f = n(310829),
    p = n(383394),
    h = n(711014),
    m = n(954571),
    E = n(927813),
    g = n(499785),
    A = n(681370),
    I = n(260364),
    T = n(869359),
    S = n(859703),
    y = n(341915),
    v = n(405670),
    N = n(245853),
    C = n(108757),
    R = n(579473),
    O = n(561844),
    b = n(710969),
    D = n(229006),
    L = n(654487),
    w = n(652215),
    M = n(985018);
let x = 5;
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: w.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            a.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, x) };
    } catch (n) {
        let e = new o.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: y.xv.RATE_LIMITED,
                        message: M.intl.string(M.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? M.intl.string(M.t.xSCvBf);
        return {
            errorHints: [{ type: y.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function k(e) {
    await s.Bo.post({ url: w.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function U() {
    await s.Bo.del({ url: w.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function G() {
    if (!S.A.isFetchingCurrentQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await s.Bo.get({ url: w.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, D.s2)(e)).map((e) => (0, D.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                i = e.body.excluded_quests.map((e) => (0, D._g)(e));
            a.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: i,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
async function F(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: s = !1 } = e;
    try {
        let e = await g.A.post({
            url: w.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: s },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: s,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, D.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new o.A(e), questId: t, streamKey: n });
    }
}
function V(e) {
    return (
        e instanceof c.CaptchaCancelError ||
        (null != e &&
            "object" == typeof e &&
            ((400 === e.status && e.body?.captcha_key != null) ||
                (null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0)) ||
                e.fields?.captcha_key != null ||
                !1))
    );
}
var B = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function H(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, O.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === L.Fw && (0, f.u)(),
        S.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    a.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, b.Li)(t.questContent),
            r = (0, b.L4)(t.questContent),
            i = (0, b.yI)(t.questContent, e),
            o = await s.Bo.post({
                url: w.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, b.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                    traffic_metadata_raw: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, D.tp)(o.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            V(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function j(e, t, n) {
    if (!S.A.isClaimingReward(e)) {
        a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, b.Li)(n),
                i = (0, b.L4)(n),
                o = (0, b.yI)(n, e),
                l = (0, b.Gp)(n, e),
                u = await s.Bo.post({
                    url: w.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, b.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_raw: null != o ? o : null,
                        traffic_metadata_sealed: null != l ? l : null,
                    },
                    rejectWithError: !1,
                }),
                c = (0, D.Dv)(u.body);
            return (
                0 === c.errors.length
                    ? a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: c })
                    : a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: c.errors, questId: e }),
                c
            );
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function Y(e) {
    if (!S.A.isFetchingRewardCode(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: w.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, D.Rd)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function W(e, t) {
    let n = S.A.isDismissingContent(e),
        r = (0, b.vy)(t);
    if (!n && r) {
        a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, b.yI)(t, e),
                r = (0, b.Gp)(t, e),
                i = await s.Bo.post({
                    url: w.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, b.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, D.tp)(i.body) });
        } catch (t) {
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new o.A(t), questId: e });
        }
    }
}
function K(e) {
    a.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: w.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, D.tp)(n.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function z(e) {
    try {
        let t = await s.Bo.del({ url: w.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, D.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function q(e) {
    try {
        a.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: w.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, D.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
function Z(e) {
    a.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function X(e, t) {
    a.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function Q() {
    if (!S.A.isFetchingClaimedQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: w.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, D.S)(e),
            );
            a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
function J(e, t, n) {
    a.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function ee(e) {
    a.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function et(e, t) {
    let n = Date.now();
    T.A.recordQuestRequestAttempt("/quests/decision", t, e),
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r,
            o = await (0, u.Ht)(),
            c = await (0, l.sN)(),
            f = C.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            E = (0, _.pc)(),
            g = null != E ? E() : [],
            A = h.Ay.getGuildsTree(),
            S = g
                .filter((e) => {
                    let t = A.getNode(e);
                    return t?.parentId == null || p.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            v = f.enabled ? S : void 0,
            R = new URLSearchParams({ placement: String(e) });
        o?.uuid != null && R.append("client_heartbeat_session_id", o.uuid),
            null != c.uuid && R.append("client_ad_session_id", c.uuid),
            null != v && v.forEach((e) => R.append("visible_guild_ids", e));
        let O = (await s.Bo.get({ url: `${w.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${R.toString()}`, rejectWithError: !1 }))
                .body,
            b = O.creative;
        if (N.TY.getConfig({ location: "fetchQuestToDeliver" }).enabled && null != b)
            b.creative_type === i.p.QUEST && (r = (0, D.Yn)(b.creative_content));
        else {
            let e = O.quest;
            r = null != e ? (0, D.Yn)(e) : void 0;
        }
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: r,
                adDecisionData: {
                    ad_id: O.ad_identifiers?.ad_id,
                    adset_id: O.ad_identifiers?.adset_id,
                    ad_set_id: O.ad_identifiers?.ad_set_id,
                    campaign_id: O.ad_identifiers?.campaign_id,
                    creative_id: O.ad_identifiers?.creative_id,
                    creative_type: O.ad_identifiers?.creative_type,
                    decision_id: O.request_id,
                    is_targeted: null != O.ad_identifiers,
                },
                metadataRaw: O.metadata_raw,
                metadataSealed: O.metadata_sealed,
                trafficMetadataRaw: O.traffic_metadata_raw,
                trafficMetadataSealed: O.traffic_metadata_sealed,
                adContext: O.ad_context,
                responseTtlSeconds: O.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            T.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(O.request_id),
                currentQuestId: r?.id ?? null,
                currentFetchedAt: n,
            }),
            null == r)
        )
            return;
        e === y.yW.DESKTOP_ACCOUNT_PANEL_AREA && I.A.startTracking(r.id),
            m.default.track(w.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, d.A)(),
                quest_id: r.id,
                caller_source: t,
                ad_request_id: String(O.request_id),
            });
    } catch (r) {
        T.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            m.default.track(w.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, d.A)(),
                reason: r?.message ?? null,
                api_error: new o.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new o.A(r), placement: e });
    }
}
function en(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function er(e, t, n) {
    if (S.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let r = S.A.earnedQuestForPlacement.get(t)?.quests,
        i = e.filter((e) => {
            let t = r?.get(e);
            return !(0, b.Oh)(t);
        });
    if (0 === i.length) return;
    let l = Date.now();
    A.A.recordEarnedRequestAttempt(t, n),
        a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, u.Ht)(),
            n = i.join(","),
            r = await s.Bo.get({ url: w.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            o = r.body.quests,
            c = r.body.response_ttl_seconds,
            d = r.body.metadata_raw,
            _ = new Map(
                i.map((e) => {
                    let t = o?.[e];
                    return [e, null != t && (0, D.s2)(t) ? t : null];
                }),
            );
        a.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: _,
            metadataRaw: d,
            content: t,
            fetchedAt: l,
            responseTtlSeconds: c,
        }),
            A.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: r.body.request_id ?? null,
                fetchedAt: l,
            });
    } catch (e) {
        A.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: l }),
            a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new o.A(e), content: t });
    }
}
async function ei(e, t) {
    await g.A.post({
        url: w.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, R.tW)(e, R.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.FAILURE });
    v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.FAILURE });
    }
}
async function ea(e) {
    let t = await s.Bo.get({ url: w.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, D.Yn)(t.body);
}
async function eo(e) {
    if (!S.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: w.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, D.rO)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
let el = 5 * E.A.Millis.MINUTE;
async function eu() {
    if (S.A.isFetchingQuestHomeHero()) return;
    let e = S.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= el)) {
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [y.gh.QUEST_HOME_BANNER],
                t = await s.Bo.get({
                    url: w.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: y.vg.WEB },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, D.Hi)(t.body) });
        } catch (e) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(e) }), e);
        }
    }
}
function ec(e) {
    a.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}

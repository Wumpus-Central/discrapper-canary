"use strict";
n.d(t, {
    CV: () => P,
    Fr: () => ee,
    Gn: () => Z,
    Gt: () => $,
    HA: () => X,
    N1: () => k,
    Oq: () => B,
    Ov: () => M,
    Oy: () => V,
    QG: () => Q,
    R2: () => U,
    Tb: () => eo,
    UZ: () => K,
    WM: () => F,
    Yb: () => W,
    d6: () => z,
    dQ: () => ea,
    g5: () => H,
    jh: () => j,
    lk: () => Y,
    lx: () => q,
    qY: () => er,
    r8: () => J,
    uI: () => en,
    vD: () => x,
    xB: () => ei,
    yO: () => et,
}),
    n(323874),
    n(14289),
    n(35956);
var r = n(110259),
    i = n(562465),
    a = n(73153),
    s = n(181658),
    o = n(881615),
    l = n(861638),
    u = n(577015),
    c = n(69114),
    d = n(253932),
    _ = n(310829),
    f = n(967198),
    h = n(954571),
    p = n(927813),
    g = n(499785),
    E = n(681370),
    A = n(260364),
    I = n(869359),
    T = n(859703),
    y = n(341915),
    S = n(405670),
    v = n(108757),
    C = n(579473),
    b = n(561844),
    N = n(710969),
    R = n(229006),
    O = n(654487),
    D = n(652215),
    L = n(985018);
let w = 5;
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.Bo.post({
                url: D.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            a.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, w) };
    } catch (n) {
        let e = new s.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: y.xv.RATE_LIMITED,
                        message: L.intl.string(L.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? L.intl.string(L.t.xSCvBf);
        return {
            errorHints: [{ type: y.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function P(e) {
    await i.Bo.post({ url: D.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function M() {
    await i.Bo.del({ url: D.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function k() {
    if (!T.A.isFetchingCurrentQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.Bo.get({ url: D.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, R.s2)(e)).map((e) => (0, R.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                s = e.body.excluded_quests.map((e) => (0, R._g)(e));
            a.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: s,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new s.A(e) });
        }
    }
}
async function U(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: o = !1 } = e;
    try {
        let e = await g.A.post({
            url: D.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: o },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: o,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, R.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new s.A(e), questId: t, streamKey: n });
    }
}
function G(e) {
    return (
        e instanceof u.CaptchaCancelError ||
        (null != e &&
            "object" == typeof e &&
            ((400 === e.status && e.body?.captcha_key != null) ||
                (null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0)) ||
                e.fields?.captcha_key != null ||
                !1))
    );
}
var F = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function V(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, b.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === O.Fw && (0, _.u)(),
        T.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    a.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, N.Li)(t.questContent),
            r = (0, N.L4)(t.questContent),
            s = (0, N.yI)(t.questContent, e),
            o = await i.Bo.post({
                url: D.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, N.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                    traffic_metadata_raw: null != s ? s : null,
                },
                rejectWithError: !0,
            });
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, R.tp)(o.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            G(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function B(e, t, n) {
    if (!T.A.isClaimingReward(e)) {
        a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, N.Li)(n),
                s = (0, N.L4)(n),
                o = (0, N.yI)(n, e),
                l = (0, N.Gp)(n, e),
                u = await i.Bo.post({
                    url: D.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, N.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != s ? s : null,
                        traffic_metadata_raw: null != o ? o : null,
                        traffic_metadata_sealed: null != l ? l : null,
                    },
                    rejectWithError: !1,
                }),
                c = (0, R.Dv)(u.body);
            return (
                0 === c.errors.length
                    ? a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: c })
                    : a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: c.errors, questId: e }),
                c
            );
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new s.A(t), questId: e }), t);
        }
    }
}
async function j(e) {
    if (!T.A.isFetchingRewardCode(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: D.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, R.Rd)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new s.A(t), questId: e }), t);
        }
    }
}
async function H(e, t) {
    let n = T.A.isDismissingContent(e),
        r = (0, N.vy)(t);
    if (!n && r) {
        a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, N.yI)(t, e),
                r = (0, N.Gp)(t, e),
                s = await i.Bo.post({
                    url: D.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, N.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, R.tp)(s.body) });
        } catch (t) {
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new s.A(t), questId: e });
        }
    }
}
function Y(e) {
    a.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({ url: D.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, R.tp)(n.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new s.A(t), questId: e });
    }
}
async function K(e) {
    try {
        let t = await i.Bo.del({ url: D.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, R.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new s.A(t), questId: e });
    }
}
async function $(e) {
    try {
        a.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.Bo.del({ url: D.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, R.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new s.A(t), questId: e });
    }
}
function z(e) {
    a.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function q(e, t) {
    a.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function X() {
    if (!T.A.isFetchingClaimedQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await i.Bo.get({ url: D.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, R.S)(e),
            );
            a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new s.A(e) });
        }
    }
}
function Z(e, t, n) {
    a.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function Q(e) {
    a.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function J(e, t) {
    let n = Date.now();
    I.A.recordQuestRequestAttempt("/quests/decision", t, e),
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r = await (0, l.Ht)(),
            s = await (0, o.sN)(),
            u = v.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            _ = d.H1.getSetting(),
            p = f.A.getGuildId(),
            g = u.enabled && _ && null != p ? p : void 0,
            E = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && E.append("client_heartbeat_session_id", r.uuid),
            null != s.uuid && E.append("client_ad_session_id", s.uuid),
            null != g && E.append("guild_id", g);
        let T = (await i.Bo.get({ url: `${D.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${E.toString()}`, rejectWithError: !1 }))
                .body,
            S = T.quest,
            C = null != S ? (0, R.Yn)(S) : void 0;
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: C,
                adDecisionData: {
                    ad_id: T.ad_identifiers?.ad_id,
                    adset_id: T.ad_identifiers?.adset_id,
                    ad_set_id: T.ad_identifiers?.ad_set_id,
                    campaign_id: T.ad_identifiers?.campaign_id,
                    creative_id: T.ad_identifiers?.creative_id,
                    creative_type: T.ad_identifiers?.creative_type,
                    decision_id: T.request_id,
                    is_targeted: null != T.ad_identifiers,
                },
                metadataRaw: T.metadata_raw,
                metadataSealed: T.metadata_sealed,
                trafficMetadataRaw: T.traffic_metadata_raw,
                trafficMetadataSealed: T.traffic_metadata_sealed,
                adContext: T.ad_context,
                responseTtlSeconds: T.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            I.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(T.request_id),
                currentQuestId: C?.id ?? null,
                currentFetchedAt: n,
            }),
            null == C)
        )
            return;
        e === y.yW.DESKTOP_ACCOUNT_PANEL_AREA && A.A.startTracking(C.id),
            h.default.track(D.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, c.A)(),
                quest_id: C.id,
                caller_source: t,
                ad_request_id: String(T.request_id),
            });
    } catch (r) {
        I.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            h.default.track(D.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, c.A)(),
                reason: r?.message ?? null,
                api_error: new s.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new s.A(r), placement: e });
    }
}
function ee(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function et(e, t, n) {
    let r = Date.now();
    E.A.recordEarnedRequestAttempt(t, n),
        a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let n = await (0, l.Ht)(),
            s = e.join(","),
            o = await i.Bo.get({ url: D.Rsh.QUEST_EARNED_DECISION(s, t, n?.uuid), rejectWithError: !1 }),
            u = o.body.quests,
            c = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, R.s2)(t) && c.set(e, (0, R.rO)(t));
        let d = o.body.metadata_raw;
        return (
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
                quests: c,
                metadataRaw: d,
                content: t,
            }),
            E.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: o.body.request_id ?? null,
                fetchedAt: r,
            }),
            { quests: c, metadataRaw: d }
        );
    } catch (e) {
        E.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: r }),
            a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new s.A(e), content: t });
    }
}
async function en(e, t) {
    await g.A.post({
        url: D.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, C.tW)(e, C.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.FAILURE });
    S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.FETCHING });
    try {
        let t = await i.Bo.get({ url: n.url, rejectWithError: !0 });
        S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.FAILURE });
    }
}
async function ei(e) {
    let t = await i.Bo.get({ url: D.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, R.Yn)(t.body);
}
async function ea(e) {
    if (!T.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: D.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, R.rO)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new s.A(t), questId: e }), t);
        }
    }
}
let es = 5 * p.A.Millis.MINUTE;
async function eo() {
    if (T.A.isFetchingQuestHomeTakeover()) return;
    let e = T.A.getLastFetchedQuestHomeTakeover();
    if (!(null != e && Date.now() - e <= es)) {
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN" });
        try {
            let e = [y.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: D.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: y.vg.WEB },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS", takeover: (0, R.Em)(t.body) });
        } catch (e) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE", error: new s.A(e) }), e);
        }
    }
}

"use strict";
n.d(t, {
    CV: () => x,
    Fr: () => J,
    Gn: () => Z,
    Gt: () => K,
    HA: () => q,
    N1: () => M,
    Oq: () => F,
    Ov: () => P,
    Oy: () => V,
    QG: () => Q,
    R2: () => k,
    Tb: () => es,
    UZ: () => W,
    WM: () => G,
    Yb: () => Y,
    d6: () => z,
    dQ: () => ei,
    g5: () => j,
    jh: () => B,
    lk: () => H,
    lx: () => $,
    qY: () => en,
    r8: () => X,
    uI: () => et,
    vD: () => w,
    xB: () => er,
    yO: () => ee,
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
    p = n(954571),
    h = n(927813),
    m = n(499785),
    g = n(681370),
    E = n(260364),
    A = n(869359),
    I = n(859703),
    T = n(341915),
    y = n(405670),
    S = n(108757),
    v = n(579473),
    C = n(561844),
    b = n(710969),
    N = n(229006),
    R = n(654487),
    O = n(652215),
    D = n(985018);
let L = 5;
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.Bo.post({
                url: O.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            a.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, L) };
    } catch (n) {
        let e = new s.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: T.xv.RATE_LIMITED,
                        message: D.intl.string(D.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? D.intl.string(D.t.xSCvBf);
        return {
            errorHints: [{ type: T.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function x(e) {
    await i.Bo.post({ url: O.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function P() {
    await i.Bo.del({ url: O.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function M() {
    if (!I.A.isFetchingCurrentQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.Bo.get({ url: O.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, N.s2)(e)).map((e) => (0, N.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                s = e.body.excluded_quests.map((e) => (0, N._g)(e));
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
async function k(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: o = !1 } = e;
    try {
        let e = await m.A.post({
            url: O.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, N.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new s.A(e), questId: t, streamKey: n });
    }
}
function U(e) {
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
var G = (function (e) {
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
            (0, C.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === R.Fw && (0, _.u)(),
        I.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    a.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, b.Li)(t.questContent),
            r = (0, b.L4)(t.questContent),
            s = await i.Bo.post({
                url: O.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, b.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                },
                rejectWithError: !0,
            });
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, N.tp)(s.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            U(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function F(e, t, n) {
    if (!I.A.isClaimingReward(e)) {
        a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, b.Li)(n),
                s = (0, b.L4)(n),
                o = await i.Bo.post({
                    url: O.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, b.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != s ? s : null,
                    },
                    rejectWithError: !1,
                }),
                l = (0, N.Dv)(o.body);
            return (
                0 === l.errors.length
                    ? a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: l })
                    : a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: l.errors, questId: e }),
                l
            );
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new s.A(t), questId: e }), t);
        }
    }
}
async function B(e) {
    if (!I.A.isFetchingRewardCode(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: O.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, N.Rd)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new s.A(t), questId: e }), t);
        }
    }
}
async function j(e, t) {
    let n = I.A.isDismissingContent(e),
        r = (0, b.vy)(t);
    if (!n && r) {
        a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = await i.Bo.post({
                url: O.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                body: { ...(0, b.Kc)(e, t) },
                rejectWithError: !1,
            });
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, N.tp)(n.body) });
        } catch (t) {
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new s.A(t), questId: e });
        }
    }
}
function H(e) {
    a.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({ url: O.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, N.tp)(n.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new s.A(t), questId: e });
    }
}
async function W(e) {
    try {
        let t = await i.Bo.del({ url: O.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, N.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new s.A(t), questId: e });
    }
}
async function K(e) {
    try {
        a.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.Bo.del({ url: O.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, N.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new s.A(t), questId: e });
    }
}
function z(e) {
    a.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function $(e, t) {
    a.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function q() {
    if (!I.A.isFetchingClaimedQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await i.Bo.get({ url: O.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, N.S)(e),
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
async function X(e, t) {
    let n = Date.now();
    A.A.recordQuestRequestAttempt("/quests/decision", t, e),
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r = await (0, l.Ht)(),
            s = await (0, o.sN)(),
            u = S.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            _ = d.H1.getSetting(),
            h = f.A.getGuildId(),
            m = u.enabled && _ && null != h ? h : void 0,
            g = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && g.append("client_heartbeat_session_id", r.uuid),
            null != s.uuid && g.append("client_ad_session_id", s.uuid),
            null != m && g.append("guild_id", m);
        let I = (await i.Bo.get({ url: `${O.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${g.toString()}`, rejectWithError: !1 }))
                .body,
            y = I.quest,
            v = null != y ? (0, N.Yn)(y) : void 0;
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: v,
                adDecisionData: {
                    ad_id: I.ad_identifiers?.ad_id,
                    adset_id: I.ad_identifiers?.adset_id,
                    ad_set_id: I.ad_identifiers?.ad_set_id,
                    campaign_id: I.ad_identifiers?.campaign_id,
                    creative_id: I.ad_identifiers?.creative_id,
                    creative_type: I.ad_identifiers?.creative_type,
                    decision_id: I.request_id,
                    is_targeted: null != I.ad_identifiers,
                },
                metadataRaw: I.metadata_raw,
                metadataSealed: I.metadata_sealed,
                trafficMetadataRaw: I.traffic_metadata_raw,
                trafficMetadataSealed: I.traffic_metadata_sealed,
                adContext: I.ad_context,
                responseTtlSeconds: I.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            A.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(I.request_id),
                currentQuestId: v?.id ?? null,
                currentFetchedAt: n,
            }),
            null == v)
        )
            return;
        e === T.yW.DESKTOP_ACCOUNT_PANEL_AREA && E.A.startTracking(v.id),
            p.default.track(O.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, c.A)(),
                quest_id: v.id,
                caller_source: t,
                ad_request_id: String(I.request_id),
            });
    } catch (r) {
        A.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            p.default.track(O.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, c.A)(),
                reason: r?.message ?? null,
                api_error: new s.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new s.A(r), placement: e });
    }
}
function J(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ee(e, t, n) {
    let r = Date.now();
    g.A.recordEarnedRequestAttempt(t, n),
        a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let n = await (0, l.Ht)(),
            s = e.join(","),
            o = await i.Bo.get({ url: O.Rsh.QUEST_EARNED_DECISION(s, t, n?.uuid), rejectWithError: !1 }),
            u = o.body.quests,
            c = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, N.s2)(t) && c.set(e, (0, N.rO)(t));
        let d = o.body.metadata_raw;
        return (
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
                quests: c,
                metadataRaw: d,
                content: t,
            }),
            g.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: o.body.request_id ?? null,
                fetchedAt: r,
            }),
            { quests: c, metadataRaw: d }
        );
    } catch (e) {
        g.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: r }),
            a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new s.A(e), content: t });
    }
}
async function et(e, t) {
    await m.A.post({
        url: O.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, v.tW)(e, v.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.FAILURE });
    y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.FETCHING });
    try {
        let t = await i.Bo.get({ url: n.url, rejectWithError: !0 });
        y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.FAILURE });
    }
}
async function er(e) {
    let t = await i.Bo.get({ url: O.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, N.Yn)(t.body);
}
async function ei(e) {
    if (!I.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: O.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, N.rO)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new s.A(t), questId: e }), t);
        }
    }
}
let ea = 5 * h.A.Millis.MINUTE;
async function es() {
    if (I.A.isFetchingQuestHomeTakeover()) return;
    let e = I.A.getLastFetchedQuestHomeTakeover();
    if (!(null != e && Date.now() - e <= ea)) {
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN" });
        try {
            let e = [T.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: O.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: T.vg.WEB },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS", takeover: (0, N.Em)(t.body) });
        } catch (e) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE", error: new s.A(e) }), e);
        }
    }
}

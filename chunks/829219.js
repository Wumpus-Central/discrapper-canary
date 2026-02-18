"use strict";
n.d(t, {
    CV: () => x,
    Fr: () => J,
    Gn: () => Z,
    Gt: () => K,
    HA: () => q,
    N1: () => P,
    Oq: () => V,
    Ov: () => M,
    Oy: () => F,
    QG: () => X,
    R2: () => k,
    UZ: () => W,
    WM: () => G,
    Yb: () => Y,
    Yf: () => ea,
    d6: () => z,
    dQ: () => ei,
    g5: () => H,
    jh: () => B,
    lk: () => j,
    lx: () => $,
    qY: () => en,
    r8: () => Q,
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
    s = n(73153),
    a = n(181658),
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
    E = n(681370),
    g = n(260364),
    A = n(869359),
    I = n(859703),
    T = n(341915),
    S = n(405670),
    y = n(108757),
    v = n(579473),
    N = n(561844),
    C = n(710969),
    b = n(229006),
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
            s.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, L) };
    } catch (n) {
        let e = new a.A(n);
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
async function M() {
    await i.Bo.del({ url: O.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function P() {
    if (!I.A.isFetchingCurrentQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.Bo.get({ url: O.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, b.s2)(e)).map((e) => (0, b.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                a = e.body.excluded_quests.map((e) => (0, b._g)(e));
            s.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: a,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            s.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new a.A(e) });
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
        s.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, b.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        s.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new a.A(e), questId: t, streamKey: n });
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
async function F(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, N.Y5)({
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
    s.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, C.Li)(t.questContent),
            r = (0, C.L4)(t.questContent),
            a = (0, C.yI)(t.questContent, e),
            o = await i.Bo.post({
                url: O.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, C.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                    traffic_metadata_raw: null != a ? a : null,
                },
                rejectWithError: !0,
            });
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, b.tp)(o.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            U(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function V(e, t, n) {
    if (!I.A.isClaimingReward(e)) {
        s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, C.Li)(n),
                a = (0, C.L4)(n),
                o = (0, C.yI)(n, e),
                l = (0, C.Gp)(n, e),
                u = await i.Bo.post({
                    url: O.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, C.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != a ? a : null,
                        traffic_metadata_raw: null != o ? o : null,
                        traffic_metadata_sealed: null != l ? l : null,
                    },
                    rejectWithError: !1,
                }),
                c = (0, b.Dv)(u.body);
            return (
                0 === c.errors.length
                    ? s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: c })
                    : s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: c.errors, questId: e }),
                c
            );
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
async function B(e) {
    if (!I.A.isFetchingRewardCode(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: O.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, b.Rd)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
async function H(e, t) {
    let n = I.A.isDismissingContent(e),
        r = (0, C.vy)(t);
    if (!n && r) {
        s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, C.yI)(t, e),
                r = (0, C.Gp)(t, e),
                a = await i.Bo.post({
                    url: O.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, C.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, b.tp)(a.body) });
        } catch (t) {
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new a.A(t), questId: e });
        }
    }
}
function j(e) {
    s.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({ url: O.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, b.tp)(n.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
async function W(e) {
    try {
        let t = await i.Bo.del({ url: O.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, b.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
async function K(e) {
    try {
        s.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.Bo.del({ url: O.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, b.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
function z(e) {
    s.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function $(e, t) {
    s.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function q() {
    if (!I.A.isFetchingClaimedQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await i.Bo.get({ url: O.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, b.S)(e),
            );
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new a.A(e) });
        }
    }
}
function Z(e, t, n) {
    s.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function X(e) {
    s.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function Q(e, t) {
    let n = Date.now();
    A.A.recordQuestRequestAttempt("/quests/decision", t, e),
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r = await (0, l.Ht)(),
            a = await (0, o.sN)(),
            u = y.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            _ = d.H1.getSetting(),
            h = f.A.getGuildId(),
            m = u.enabled && _ && null != h ? h : void 0,
            E = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && E.append("client_heartbeat_session_id", r.uuid),
            null != a.uuid && E.append("client_ad_session_id", a.uuid),
            null != m && E.append("guild_id", m);
        let I = (await i.Bo.get({ url: `${O.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${E.toString()}`, rejectWithError: !1 }))
                .body,
            S = I.quest,
            v = null != S ? (0, b.Yn)(S) : void 0;
        if (
            (s.h.dispatch({
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
        e === T.yW.DESKTOP_ACCOUNT_PANEL_AREA && g.A.startTracking(v.id),
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
                api_error: new a.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new a.A(r), placement: e });
    }
}
function J(e, t) {
    s.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ee(e, t, n) {
    let r = Date.now();
    E.A.recordEarnedRequestAttempt(t, n),
        s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let n = await (0, l.Ht)(),
            a = e.join(","),
            o = await i.Bo.get({ url: O.Rsh.QUEST_EARNED_DECISION(a, t, n?.uuid), rejectWithError: !1 }),
            u = o.body.quests,
            c = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, b.s2)(t) && c.set(e, (0, b.rO)(t));
        let d = o.body.metadata_raw;
        return (
            s.h.dispatch({
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
            s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new a.A(e), content: t });
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
    if (null == n) return void S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.FAILURE });
    S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.FETCHING });
    try {
        let t = await i.Bo.get({ url: n.url, rejectWithError: !0 });
        S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        S.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: S.Lx.FAILURE });
    }
}
async function er(e) {
    let t = await i.Bo.get({ url: O.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, b.Yn)(t.body);
}
async function ei(e) {
    if (!I.A.isFetchingQuestPreview(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: O.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, b.rO)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
let es = 5 * h.A.Millis.MINUTE;
async function ea() {
    if (I.A.isFetchingQuestHomeHero()) return;
    let e = I.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= es)) {
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [T.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: O.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: T.vg.WEB },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, b.Hi)(t.body) });
        } catch (e) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new a.A(e) }), e);
        }
    }
}

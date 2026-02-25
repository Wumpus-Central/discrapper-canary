"use strict";
n.d(t, {
    CV: () => P,
    Fr: () => et,
    Gn: () => Q,
    Gt: () => $,
    HA: () => X,
    N1: () => U,
    Oq: () => H,
    Ov: () => k,
    Oy: () => B,
    QG: () => J,
    R2: () => G,
    UZ: () => z,
    WM: () => V,
    Yb: () => K,
    Yf: () => el,
    Zb: () => eu,
    d6: () => q,
    dQ: () => ea,
    g5: () => Y,
    jh: () => j,
    lk: () => W,
    lx: () => Z,
    qY: () => ei,
    r8: () => ee,
    uI: () => er,
    vD: () => M,
    xB: () => es,
    yO: () => en,
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
    d = n(633965),
    _ = n(253932),
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
    N = n(108757),
    C = n(579473),
    b = n(561844),
    R = n(710969),
    O = n(229006),
    D = n(654487),
    L = n(652215),
    w = n(985018);
let x = 5;
async function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.Bo.post({
                url: L.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            s.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, x) };
    } catch (n) {
        let e = new a.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: y.xv.RATE_LIMITED,
                        message: w.intl.string(w.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? w.intl.string(w.t.xSCvBf);
        return {
            errorHints: [{ type: y.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function P(e) {
    await i.Bo.post({ url: L.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function k() {
    await i.Bo.del({ url: L.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function U() {
    if (!S.A.isFetchingCurrentQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.Bo.get({ url: L.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, O.s2)(e)).map((e) => (0, O.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                a = e.body.excluded_quests.map((e) => (0, O._g)(e));
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
async function G(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: o = !1 } = e;
    try {
        let e = await g.A.post({
            url: L.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, O.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        s.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new a.A(e), questId: t, streamKey: n });
    }
}
function F(e) {
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
var V = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function B(e, t) {
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
        e === D.Fw && (0, f.u)(),
        S.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    s.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, R.Li)(t.questContent),
            r = (0, R.L4)(t.questContent),
            a = (0, R.yI)(t.questContent, e),
            o = await i.Bo.post({
                url: L.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, R.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                    traffic_metadata_raw: null != a ? a : null,
                },
                rejectWithError: !0,
            });
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, O.tp)(o.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            F(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function H(e, t, n) {
    if (!S.A.isClaimingReward(e)) {
        s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, R.Li)(n),
                a = (0, R.L4)(n),
                o = (0, R.yI)(n, e),
                l = (0, R.Gp)(n, e),
                u = await i.Bo.post({
                    url: L.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, R.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != a ? a : null,
                        traffic_metadata_raw: null != o ? o : null,
                        traffic_metadata_sealed: null != l ? l : null,
                    },
                    rejectWithError: !1,
                }),
                c = (0, O.Dv)(u.body);
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
async function j(e) {
    if (!S.A.isFetchingRewardCode(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: L.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, O.Rd)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
async function Y(e, t) {
    let n = S.A.isDismissingContent(e),
        r = (0, R.vy)(t);
    if (!n && r) {
        s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, R.yI)(t, e),
                r = (0, R.Gp)(t, e),
                a = await i.Bo.post({
                    url: L.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, R.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, O.tp)(a.body) });
        } catch (t) {
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new a.A(t), questId: e });
        }
    }
}
function W(e) {
    s.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({ url: L.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, O.tp)(n.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
async function z(e) {
    try {
        let t = await i.Bo.del({ url: L.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, O.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
async function $(e) {
    try {
        s.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.Bo.del({ url: L.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, O.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
function q(e) {
    s.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function Z(e, t) {
    s.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function X() {
    if (!S.A.isFetchingClaimedQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await i.Bo.get({ url: L.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, O.S)(e),
            );
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new a.A(e) });
        }
    }
}
function Q(e, t, n) {
    s.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function J(e) {
    s.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function ee(e, t) {
    let n = Date.now();
    T.A.recordQuestRequestAttempt("/quests/decision", t, e),
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r = await (0, l.Ht)(),
            a = await (0, o.sN)(),
            u = N.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            f = _.H1.getSetting(),
            E = (0, d.pc)(),
            g = null != E ? E() : [],
            A = h.Ay.getGuildsTree(),
            S = g
                .filter((e) => {
                    let t = A.getNode(e);
                    return t?.parentId == null || p.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            v = u.enabled && f ? S : void 0,
            C = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && C.append("client_heartbeat_session_id", r.uuid),
            null != a.uuid && C.append("client_ad_session_id", a.uuid),
            null != v && v.forEach((e) => C.append("visible_guild_ids", e));
        let b = (await i.Bo.get({ url: `${L.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${C.toString()}`, rejectWithError: !1 }))
                .body,
            R = b.quest,
            D = null != R ? (0, O.Yn)(R) : void 0;
        if (
            (s.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: D,
                adDecisionData: {
                    ad_id: b.ad_identifiers?.ad_id,
                    adset_id: b.ad_identifiers?.adset_id,
                    ad_set_id: b.ad_identifiers?.ad_set_id,
                    campaign_id: b.ad_identifiers?.campaign_id,
                    creative_id: b.ad_identifiers?.creative_id,
                    creative_type: b.ad_identifiers?.creative_type,
                    decision_id: b.request_id,
                    is_targeted: null != b.ad_identifiers,
                },
                metadataRaw: b.metadata_raw,
                metadataSealed: b.metadata_sealed,
                trafficMetadataRaw: b.traffic_metadata_raw,
                trafficMetadataSealed: b.traffic_metadata_sealed,
                adContext: b.ad_context,
                responseTtlSeconds: b.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            T.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(b.request_id),
                currentQuestId: D?.id ?? null,
                currentFetchedAt: n,
            }),
            null == D)
        )
            return;
        e === y.yW.DESKTOP_ACCOUNT_PANEL_AREA && I.A.startTracking(D.id),
            m.default.track(L.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, c.A)(),
                quest_id: D.id,
                caller_source: t,
                ad_request_id: String(b.request_id),
            });
    } catch (r) {
        T.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            m.default.track(L.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, c.A)(),
                reason: r?.message ?? null,
                api_error: new a.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new a.A(r), placement: e });
    }
}
function et(e, t) {
    s.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function en(e, t, n) {
    if (S.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let r = Date.now();
    A.A.recordEarnedRequestAttempt(t, n),
        s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let n = await (0, l.Ht)(),
            a = e.join(","),
            o = await i.Bo.get({ url: L.Rsh.QUEST_EARNED_DECISION(a, t, n?.uuid), rejectWithError: !1 }),
            u = o.body.quests,
            c = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, O.s2)(t) && c.set(e, (0, O.rO)(t));
        let d = o.body.metadata_raw;
        return (
            s.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
                quests: c,
                metadataRaw: d,
                content: t,
            }),
            A.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: o.body.request_id ?? null,
                fetchedAt: r,
            }),
            { quests: c, metadataRaw: d }
        );
    } catch (e) {
        A.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: r }),
            s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new a.A(e), content: t });
    }
}
async function er(e, t) {
    await g.A.post({
        url: L.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, C.tW)(e, C.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.FAILURE });
    v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.FETCHING });
    try {
        let t = await i.Bo.get({ url: n.url, rejectWithError: !0 });
        v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        v.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: v.Lx.FAILURE });
    }
}
async function es(e) {
    let t = await i.Bo.get({ url: L.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, O.Yn)(t.body);
}
async function ea(e) {
    if (!S.A.isFetchingQuestPreview(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: L.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, O.rO)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
let eo = 5 * E.A.Millis.MINUTE;
async function el() {
    if (S.A.isFetchingQuestHomeHero()) return;
    let e = S.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= eo)) {
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [y.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: L.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: y.vg.WEB },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, O.Hi)(t.body) });
        } catch (e) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new a.A(e) }), e);
        }
    }
}
function eu(e) {
    s.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}

"use strict";
n.d(t, {
    CV: () => M,
    Fr: () => ee,
    Gn: () => X,
    Gt: () => z,
    HA: () => Z,
    N1: () => k,
    Oq: () => B,
    Ov: () => P,
    Oy: () => V,
    QG: () => Q,
    R2: () => U,
    UZ: () => K,
    WM: () => F,
    Yb: () => W,
    Yf: () => eo,
    Zb: () => el,
    d6: () => $,
    dQ: () => es,
    g5: () => j,
    jh: () => H,
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
    s = n(73153),
    a = n(181658),
    o = n(881615),
    l = n(861638),
    u = n(577015),
    c = n(69114),
    d = n(633965),
    _ = n(310829),
    f = n(383394),
    p = n(711014),
    h = n(954571),
    m = n(927813),
    E = n(499785),
    g = n(681370),
    A = n(260364),
    I = n(869359),
    T = n(859703),
    S = n(341915),
    y = n(405670),
    v = n(108757),
    N = n(579473),
    C = n(561844),
    b = n(710969),
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
            s.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, w) };
    } catch (n) {
        let e = new a.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: S.xv.RATE_LIMITED,
                        message: L.intl.string(L.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? L.intl.string(L.t.xSCvBf);
        return {
            errorHints: [{ type: S.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function M(e) {
    await i.Bo.post({ url: D.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function P() {
    await i.Bo.del({ url: D.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function k() {
    if (!T.A.isFetchingCurrentQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.Bo.get({ url: D.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, R.s2)(e)).map((e) => (0, R.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                a = e.body.excluded_quests.map((e) => (0, R._g)(e));
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
async function U(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: o = !1 } = e;
    try {
        let e = await E.A.post({
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
        s.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, R.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        s.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new a.A(e), questId: t, streamKey: n });
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
            (0, C.Y5)({
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
    s.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, b.Li)(t.questContent),
            r = (0, b.L4)(t.questContent),
            a = (0, b.yI)(t.questContent, e),
            o = await i.Bo.post({
                url: D.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, b.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                    traffic_metadata_raw: null != a ? a : null,
                },
                rejectWithError: !0,
            });
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, R.tp)(o.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            G(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function B(e, t, n) {
    if (!T.A.isClaimingReward(e)) {
        s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, b.Li)(n),
                a = (0, b.L4)(n),
                o = (0, b.yI)(n, e),
                l = (0, b.Gp)(n, e),
                u = await i.Bo.post({
                    url: D.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, b.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != a ? a : null,
                        traffic_metadata_raw: null != o ? o : null,
                        traffic_metadata_sealed: null != l ? l : null,
                    },
                    rejectWithError: !1,
                }),
                c = (0, R.Dv)(u.body);
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
async function H(e) {
    if (!T.A.isFetchingRewardCode(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: D.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, R.Rd)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
async function j(e, t) {
    let n = T.A.isDismissingContent(e),
        r = (0, b.vy)(t);
    if (!n && r) {
        s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, b.yI)(t, e),
                r = (0, b.Gp)(t, e),
                a = await i.Bo.post({
                    url: D.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, b.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, R.tp)(a.body) });
        } catch (t) {
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new a.A(t), questId: e });
        }
    }
}
function Y(e) {
    s.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({ url: D.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, R.tp)(n.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
async function K(e) {
    try {
        let t = await i.Bo.del({ url: D.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, R.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
async function z(e) {
    try {
        s.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.Bo.del({ url: D.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, R.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new a.A(t), questId: e });
    }
}
function $(e) {
    s.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function q(e, t) {
    s.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function Z() {
    if (!T.A.isFetchingClaimedQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await i.Bo.get({ url: D.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, R.S)(e),
            );
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new a.A(e) });
        }
    }
}
function X(e, t, n) {
    s.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function Q(e) {
    s.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function J(e, t) {
    let n = Date.now();
    I.A.recordQuestRequestAttempt("/quests/decision", t, e),
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r = await (0, l.Ht)(),
            a = await (0, o.sN)(),
            u = v.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            _ = (0, d.pc)(),
            m = null != _ ? _() : [],
            E = p.Ay.getGuildsTree(),
            g = m
                .filter((e) => {
                    let t = E.getNode(e);
                    return t?.parentId == null || f.A.isFolderExpanded(t.parentId);
                })
                .slice(0, 50),
            T = u.enabled ? g : void 0,
            y = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && y.append("client_heartbeat_session_id", r.uuid),
            null != a.uuid && y.append("client_ad_session_id", a.uuid),
            null != T && T.forEach((e) => y.append("visible_guild_ids", e));
        let N = (await i.Bo.get({ url: `${D.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${y.toString()}`, rejectWithError: !1 }))
                .body,
            C = N.quest,
            b = null != C ? (0, R.Yn)(C) : void 0;
        if (
            (s.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: b,
                adDecisionData: {
                    ad_id: N.ad_identifiers?.ad_id,
                    adset_id: N.ad_identifiers?.adset_id,
                    ad_set_id: N.ad_identifiers?.ad_set_id,
                    campaign_id: N.ad_identifiers?.campaign_id,
                    creative_id: N.ad_identifiers?.creative_id,
                    creative_type: N.ad_identifiers?.creative_type,
                    decision_id: N.request_id,
                    is_targeted: null != N.ad_identifiers,
                },
                metadataRaw: N.metadata_raw,
                metadataSealed: N.metadata_sealed,
                trafficMetadataRaw: N.traffic_metadata_raw,
                trafficMetadataSealed: N.traffic_metadata_sealed,
                adContext: N.ad_context,
                responseTtlSeconds: N.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            I.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(N.request_id),
                currentQuestId: b?.id ?? null,
                currentFetchedAt: n,
            }),
            null == b)
        )
            return;
        e === S.yW.DESKTOP_ACCOUNT_PANEL_AREA && A.A.startTracking(b.id),
            h.default.track(D.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, c.A)(),
                quest_id: b.id,
                caller_source: t,
                ad_request_id: String(N.request_id),
            });
    } catch (r) {
        I.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            h.default.track(D.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, c.A)(),
                reason: r?.message ?? null,
                api_error: new a.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new a.A(r), placement: e });
    }
}
function ee(e, t) {
    s.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function et(e, t, n) {
    if (T.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let r = Date.now();
    g.A.recordEarnedRequestAttempt(t, n),
        s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let n = await (0, l.Ht)(),
            a = e.join(","),
            o = await i.Bo.get({ url: D.Rsh.QUEST_EARNED_DECISION(a, t, n?.uuid), rejectWithError: !1 }),
            u = o.body.quests,
            c = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, R.s2)(t) && c.set(e, (0, R.rO)(t));
        let d = o.body.metadata_raw;
        return (
            s.h.dispatch({
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
            s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new a.A(e), content: t });
    }
}
async function en(e, t) {
    await E.A.post({
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
        n = (0, N.tW)(e, N.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.FAILURE });
    y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.FETCHING });
    try {
        let t = await i.Bo.get({ url: n.url, rejectWithError: !0 });
        y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        y.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: y.Lx.FAILURE });
    }
}
async function ei(e) {
    let t = await i.Bo.get({ url: D.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, R.Yn)(t.body);
}
async function es(e) {
    if (!T.A.isFetchingQuestPreview(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await i.Bo.get({ url: D.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, R.rO)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new a.A(t), questId: e }), t);
        }
    }
}
let ea = 5 * m.A.Millis.MINUTE;
async function eo() {
    if (T.A.isFetchingQuestHomeHero()) return;
    let e = T.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= ea)) {
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [S.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: D.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: S.vg.WEB },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, R.Hi)(t.body) });
        } catch (e) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new a.A(e) }), e);
        }
    }
}
function el(e) {
    s.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}

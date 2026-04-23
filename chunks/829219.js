"use strict";
n.d(t, {
    Am: () => ec,
    CV: () => U,
    Fr: () => en,
    Gn: () => J,
    Gt: () => q,
    HA: () => Z,
    N1: () => F,
    Oq: () => j,
    Ov: () => G,
    Oy: () => H,
    QG: () => ee,
    R2: () => V,
    UZ: () => z,
    WM: () => B,
    Yb: () => $,
    Yf: () => eu,
    Zb: () => ed,
    d6: () => X,
    dQ: () => eo,
    g5: () => W,
    jh: () => Y,
    lk: () => K,
    lx: () => Q,
    qV: () => ef,
    qY: () => es,
    r8: () => et,
    uI: () => ei,
    vD: () => k,
    xB: () => ea,
    yO: () => er,
    zh: () => e_,
}),
    n(323874),
    n(14289),
    n(35956);
var r,
    i = n(110259),
    s = n(323889),
    a = n(562465),
    o = n(73153),
    l = n(181658),
    u = n(925787),
    c = n(881615),
    d = n(861638),
    _ = n(577015),
    f = n(69114),
    p = n(633965),
    h = n(463347),
    E = n(310829),
    m = n(383394),
    g = n(711014),
    A = n(954571),
    I = n(927813),
    T = n(499785),
    S = n(681370),
    y = n(260364),
    N = n(869359),
    v = n(859703),
    C = n(341915),
    O = n(405670),
    R = n(108757),
    b = n(579473),
    D = n(561844),
    L = n(710969),
    w = n(229006),
    M = n(654487),
    P = n(652215),
    x = n(985018);
async function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await a.Bo.post({
                url: P.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            o.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (n) {
        let e = new l.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: C.xv.RATE_LIMITED,
                        message: x.intl.string(x.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? x.intl.string(x.t.xSCvBf);
        return {
            errorHints: [{ type: C.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function U(e) {
    await a.Bo.post({ url: P.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function G() {
    await a.Bo.del({ url: P.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function F() {
    if (!v.A.isFetchingCurrentQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await a.Bo.get({ url: P.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, w.s2)(e)).map((e) => (0, w.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                i = e.body.excluded_quests.map((e) => (0, w._g)(e));
            o.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: i,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
async function V(e) {
    let { questId: t, streamKey: n, applicationId: r, terminal: s = !1, executableFingerprint: a } = e;
    try {
        let e = await T.A.post({
            url: P.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: r, terminal: s, executable_fingerprint: a },
            trackedActionData: {
                event: i.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: r,
                    terminal: s,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        o.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, w.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        o.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new l.A(e), questId: t, streamKey: n });
    }
}
var B =
    (((r = {}).SUCCESS = "success"),
    (r.CAPTCHA_FAILED = "captcha_failed"),
    (r.UNKNOWN_ERROR = "unknown_error"),
    (r.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    r);
async function H(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, D.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === M.Fw && (0, E.u)(),
        v.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    o.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, L.L4)(t.questContent),
            r = (0, L.yI)(t.questContent, e),
            i = (0, L.Gp)(t.questContent, e),
            s = await a.Bo.post({
                url: P.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, L.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_raw: null != r ? r : null,
                    traffic_metadata_sealed: null != i ? i : null,
                },
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, w.tp)(s.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            o.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof _.CaptchaCancelError ||
            (null != n &&
                "object" == typeof n &&
                ((400 === n.status && n.body?.captcha_key != null) ||
                    (null != n.captchaFields && Object.keys(n.captchaFields).length > 0) ||
                    n.fields?.captcha_key != null))
                ? { type: "captcha_failed" }
                : { type: "unknown_error" }
        );
    }
}
async function j(e, t, n) {
    if (!v.A.isClaimingReward(e)) {
        o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, L.L4)(n),
                i = (0, L.yI)(n, e),
                s = (0, L.Gp)(n, e),
                l = await a.Bo.post({
                    url: P.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, L.Kc)(e, n),
                        metadata_sealed: null != r ? r : null,
                        traffic_metadata_raw: null != i ? i : null,
                        traffic_metadata_sealed: null != s ? s : null,
                    },
                    rejectWithError: !1,
                }),
                u = (0, w.Dv)(l.body);
            return (
                0 === u.errors.length
                    ? o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: u })
                    : o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: u.errors, questId: e }),
                u
            );
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function Y(e) {
    if (!v.A.isFetchingRewardCode(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: P.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, w.Rd)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function W(e, t) {
    let n = v.A.isDismissingContent(e),
        r = (0, L.vy)(t);
    if (!n && r) {
        o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, L.yI)(t, e),
                r = (0, L.Gp)(t, e),
                i = await a.Bo.post({
                    url: P.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, L.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, w.tp)(i.body) });
        } catch (t) {
            o.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new l.A(t), questId: e });
        }
    }
}
function K(e) {
    o.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await a.Bo.post({ url: P.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, w.tp)(n.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function z(e) {
    try {
        let t = await a.Bo.del({ url: P.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, w.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function q(e) {
    try {
        o.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await a.Bo.del({ url: P.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, w.tp)(t.body) });
    } catch (t) {
        o.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
function X(e) {
    o.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function Q(e, t) {
    o.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function Z() {
    if (!v.A.isFetchingClaimedQuests) {
        o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await a.Bo.get({ url: P.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, w.S)(e),
            );
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            o.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
function J(e, t, n) {
    o.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function ee(e) {
    o.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function et(e, t) {
    let n = Date.now();
    N.A.recordQuestRequestAttempt("/quests/decision", t, e),
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r,
            i = await (0, d.Ht)(),
            l = await (0, c.sN)(),
            u = R.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            _ = (0, p.pc)(),
            E = null != _ ? _() : [],
            I = g.Ay.getGuildsTree(),
            T = E.filter((e) => {
                if ((0, h.tZ)(e)) return !1;
                let t = I.getNode(e);
                return t?.parentId == null || m.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            S = u.enabled ? T : void 0,
            v = new URLSearchParams({ placement: String(e) });
        i?.uuid != null && v.append("client_heartbeat_session_id", i.uuid),
            null != l.uuid && v.append("client_ad_session_id", l.uuid),
            null != S && S.forEach((e) => v.append("visible_guild_ids", e));
        let O = (await a.Bo.get({ url: `${P.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${v.toString()}`, rejectWithError: !1 }))
                .body,
            b = O.creative;
        if (null != b) b.creative_type === s.p.QUEST && (r = (0, w.Yn)(b.creative_content));
        else {
            let e = O.quest;
            r = null != e ? (0, w.Yn)(e) : void 0;
        }
        if (
            (o.h.dispatch({
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
                metadataSealed: O.metadata_sealed,
                trafficMetadataRaw: O.traffic_metadata_raw,
                trafficMetadataSealed: O.traffic_metadata_sealed,
                adContext: O.ad_context,
                responseTtlSeconds: O.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            N.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(O.request_id),
                currentQuestId: r?.id ?? null,
                currentFetchedAt: n,
            }),
            null == r)
        )
            return;
        e === C.yW.DESKTOP_ACCOUNT_PANEL_AREA && y.A.startTracking(r.id),
            A.default.track(P.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, f.A)(),
                quest_id: r.id,
                caller_source: t,
                ad_request_id: String(O.request_id),
            });
    } catch (r) {
        N.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            A.default.track(P.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, f.A)(),
                reason: r?.message ?? null,
                api_error: new l.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new l.A(r), placement: e });
    }
}
function en(e, t) {
    o.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function er(e, t, n) {
    if (v.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let r = v.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        i = e.filter((e) => {
            let t = r?.get(e);
            return !(0, L.Oh)(t);
        });
    if (0 === i.length) return;
    let s = Date.now();
    S.A.recordEarnedRequestAttempt(t, n),
        o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, d.Ht)(),
            n = i.join(","),
            r = await a.Bo.get({ url: P.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            l = r.body.quests,
            u = r.body.response_ttl_seconds,
            c = new Map(
                i.map((e) => {
                    let t = l?.[e];
                    return [e, null != t && (0, w.s2)(t) ? t : null];
                }),
            );
        o.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: s,
            responseTtlSeconds: u,
        }),
            S.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: r.body.request_id ?? null,
                fetchedAt: s,
            });
    } catch (e) {
        S.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: s }),
            o.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new l.A(e), content: t });
    }
}
async function ei(e, t) {
    await T.A.post({
        url: P.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: i.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, b.tW)(e, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void O.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: O.Lx.FAILURE });
    O.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: O.Lx.FETCHING });
    try {
        let t = await a.Bo.get({ url: n.url, rejectWithError: !0 });
        O.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: O.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        O.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: O.Lx.FAILURE });
    }
}
async function ea(e) {
    let t = await a.Bo.get({ url: P.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, w.Yn)(t.body);
}
async function eo(e) {
    if (!v.A.isFetchingQuestPreview(e)) {
        o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await a.Bo.get({ url: P.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, w.rO)(t.body) });
        } catch (t) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
let el = 5 * I.A.Millis.MINUTE;
async function eu() {
    if (v.A.isFetchingQuestHomeHero()) return;
    let e = v.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= el)) {
        o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [C.gh.QUEST_HOME_BANNER],
                t = await a.Bo.get({
                    url: P.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: C.vg.WEB },
                    rejectWithError: !1,
                });
            o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, w.oc)(t.body) });
        } catch (e) {
            throw (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(e) }), e);
        }
    }
}
async function ec() {
    let e = C.yW.QUEST_HOME_BANNER_DESKTOP;
    if (v.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = v.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= el) return;
    let n = Date.now();
    o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: e });
    try {
        let t = await (0, d.Ht)(),
            r = await (0, c.sN)(),
            i = new URLSearchParams({ placement: String(e) });
        t?.uuid != null && i.append("client_heartbeat_session_id", t.uuid),
            null != r.uuid && i.append("client_ad_session_id", r.uuid);
        let l = (await a.Bo.get({ url: `${P.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${i.toString()}`, rejectWithError: !1 }))
                .body,
            _ = l.creative,
            f = null;
        null != _ && _.creative_type === s.p.QUEST_HOME_HERO && (f = (0, u.F)(_.creative_content)),
            o.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: f,
                adDecisionData: {
                    ad_id: l.ad_identifiers?.ad_id,
                    adset_id: l.ad_identifiers?.adset_id,
                    ad_set_id: l.ad_identifiers?.ad_set_id,
                    campaign_id: l.ad_identifiers?.campaign_id,
                    creative_id: l.ad_identifiers?.creative_id,
                    creative_type: l.ad_identifiers?.creative_type,
                    decision_id: l.request_id,
                    is_targeted: null != l.ad_identifiers,
                },
                metadataSealed: l.metadata_sealed,
                trafficMetadataRaw: l.traffic_metadata_raw,
                trafficMetadataSealed: l.traffic_metadata_sealed,
                adContext: l.ad_context,
                responseTtlSeconds: l.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            });
    } catch (t) {
        throw (
            (o.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE", error: new l.A(t), placement: e }),
            t)
        );
    }
}
function ed(e) {
    o.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function e_(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function ef(e, t) {
    o.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}

"use strict";
n.d(t, {
    Am: () => ed,
    CV: () => U,
    Fr: () => er,
    Gn: () => ee,
    Gt: () => Z,
    HA: () => J,
    N1: () => F,
    Oq: () => Y,
    Ov: () => G,
    Oy: () => j,
    QG: () => et,
    R2: () => V,
    UZ: () => q,
    WM: () => H,
    Yb: () => z,
    Yf: () => ec,
    Zb: () => e_,
    d6: () => X,
    dQ: () => el,
    g5: () => K,
    jh: () => W,
    lk: () => $,
    lx: () => Q,
    qV: () => ep,
    qY: () => ea,
    r8: () => en,
    uI: () => es,
    vD: () => k,
    xB: () => eo,
    yO: () => ei,
    zh: () => ef,
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
    f = n(463347),
    p = n(310829),
    h = n(383394),
    m = n(711014),
    E = n(954571),
    g = n(927813),
    A = n(499785),
    I = n(681370),
    T = n(260364),
    S = n(869359),
    y = n(859703),
    v = n(341915),
    N = n(405670),
    C = n(245853),
    R = n(108757),
    O = n(579473),
    b = n(561844),
    D = n(710969),
    L = n(229006),
    w = n(654487),
    M = n(652215),
    x = n(985018);
let P = 5;
async function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: M.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            a.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, P) };
    } catch (n) {
        let e = new o.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: v.xv.RATE_LIMITED,
                        message: x.intl.string(x.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? x.intl.string(x.t.xSCvBf);
        return {
            errorHints: [{ type: v.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function U(e) {
    await s.Bo.post({ url: M.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function G() {
    await s.Bo.del({ url: M.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function F() {
    if (!y.A.isFetchingCurrentQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await s.Bo.get({ url: M.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, L.s2)(e)).map((e) => (0, L.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                i = e.body.excluded_quests.map((e) => (0, L._g)(e));
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
async function V(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: s = !1 } = e;
    try {
        let e = await A.A.post({
            url: M.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, L.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new o.A(e), questId: t, streamKey: n });
    }
}
function B(e) {
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
var H = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function j(e, t) {
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
        e === w.Fw && (0, p.u)(),
        y.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    a.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, D.Li)(t.questContent),
            r = (0, D.L4)(t.questContent),
            i = (0, D.yI)(t.questContent, e),
            o = (0, D.Gp)(t.questContent, e),
            l = await s.Bo.post({
                url: M.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, D.Kc)(e, t.questContent),
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                    traffic_metadata_raw: null != i ? i : null,
                    traffic_metadata_sealed: null != o ? o : null,
                },
                rejectWithError: !0,
            });
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, L.tp)(l.body) }),
            { type: "success" }
        );
    } catch (t) {
        return (
            a.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            B(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function Y(e, t, n) {
    if (!y.A.isClaimingReward(e)) {
        a.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let r = (0, D.Li)(n),
                i = (0, D.L4)(n),
                o = (0, D.yI)(n, e),
                l = (0, D.Gp)(n, e),
                u = await s.Bo.post({
                    url: M.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, D.Kc)(e, n),
                        metadata_raw: null != r ? r : null,
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_raw: null != o ? o : null,
                        traffic_metadata_sealed: null != l ? l : null,
                    },
                    rejectWithError: !1,
                }),
                c = (0, L.Dv)(u.body);
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
async function W(e) {
    if (!y.A.isFetchingRewardCode(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: M.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, L.Rd)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function K(e, t) {
    let n = y.A.isDismissingContent(e),
        r = (0, D.vy)(t);
    if (!n && r) {
        a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, D.yI)(t, e),
                r = (0, D.Gp)(t, e),
                i = await s.Bo.post({
                    url: M.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, D.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, L.tp)(i.body) });
        } catch (t) {
            a.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new o.A(t), questId: e });
        }
    }
}
function $(e) {
    a.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: M.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, L.tp)(n.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function q(e) {
    try {
        let t = await s.Bo.del({ url: M.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, L.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function Z(e) {
    try {
        a.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: M.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, L.tp)(t.body) });
    } catch (t) {
        a.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
function X(e) {
    a.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function Q(e, t) {
    a.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function J() {
    if (!y.A.isFetchingClaimedQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: M.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, L.S)(e),
            );
            a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
function ee(e, t, n) {
    a.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function et(e) {
    a.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function en(e, t) {
    let n = Date.now();
    S.A.recordQuestRequestAttempt("/quests/decision", t, e),
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let r,
            o = await (0, u.Ht)(),
            c = await (0, l.sN)(),
            p = R.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            g = (0, _.pc)(),
            A = null != g ? g() : [],
            I = m.Ay.getGuildsTree(),
            y = A.filter((e) => {
                if ((0, f.tZ)(e)) return !1;
                let t = I.getNode(e);
                return t?.parentId == null || h.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            N = p.enabled ? y : void 0,
            O = new URLSearchParams({ placement: String(e) });
        o?.uuid != null && O.append("client_heartbeat_session_id", o.uuid),
            null != c.uuid && O.append("client_ad_session_id", c.uuid),
            null != N && N.forEach((e) => O.append("visible_guild_ids", e));
        let b = (await s.Bo.get({ url: `${M.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${O.toString()}`, rejectWithError: !1 }))
                .body,
            D = b.creative;
        if (C.TY.getConfig({ location: "fetchQuestToDeliver" }).enabled && null != D)
            D.creative_type === i.p.QUEST && (r = (0, L.Yn)(D.creative_content));
        else {
            let e = b.quest;
            r = null != e ? (0, L.Yn)(e) : void 0;
        }
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: r,
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
            S.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(b.request_id),
                currentQuestId: r?.id ?? null,
                currentFetchedAt: n,
            }),
            null == r)
        )
            return;
        e === v.yW.DESKTOP_ACCOUNT_PANEL_AREA && T.A.startTracking(r.id),
            E.default.track(M.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, d.A)(),
                quest_id: r.id,
                caller_source: t,
                ad_request_id: String(b.request_id),
            });
    } catch (r) {
        S.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            E.default.track(M.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, d.A)(),
                reason: r?.message ?? null,
                api_error: new o.A(r).getAnyErrorMessage(),
                caller_source: t,
            }),
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new o.A(r), placement: e });
    }
}
function er(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ei(e, t, n) {
    if (y.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let r = y.A.earnedQuestForPlacement.get(t)?.quests,
        i = e.filter((e) => {
            let t = r?.get(e);
            return !(0, D.Oh)(t);
        });
    if (0 === i.length) return;
    let l = Date.now();
    I.A.recordEarnedRequestAttempt(t, n),
        a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, u.Ht)(),
            n = i.join(","),
            r = await s.Bo.get({ url: M.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            o = r.body.quests,
            c = r.body.response_ttl_seconds,
            d = r.body.metadata_raw,
            _ = new Map(
                i.map((e) => {
                    let t = o?.[e];
                    return [e, null != t && (0, L.s2)(t) ? t : null];
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
            I.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: r.body.request_id ?? null,
                fetchedAt: l,
            });
    } catch (e) {
        I.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: l }),
            a.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new o.A(e), content: t });
    }
}
async function es(e, t) {
    await A.A.post({
        url: M.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, O.tW)(e, O.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void N.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: N.Lx.FAILURE });
    N.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: N.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        N.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: N.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        N.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: N.Lx.FAILURE });
    }
}
async function eo(e) {
    let t = await s.Bo.get({ url: M.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, L.Yn)(t.body);
}
async function el(e) {
    if (!y.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: M.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, L.rO)(t.body) });
        } catch (t) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
let eu = 5 * g.A.Millis.MINUTE;
async function ec() {
    if (y.A.isFetchingQuestHomeHero()) return;
    let e = y.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= eu)) {
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [v.gh.QUEST_HOME_BANNER],
                t = await s.Bo.get({
                    url: M.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: v.vg.WEB },
                    rejectWithError: !1,
                });
            a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, L.Wv)(t.body) });
        } catch (e) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(e) }), e);
        }
    }
}
async function ed() {
    if (y.A.isFetchingQuestHomeHero()) return;
    let e = y.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= eu)) {
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = await (0, u.Ht)(),
                t = await (0, l.sN)(),
                n = new URLSearchParams({ placement: String(v.yW.QUEST_HOME_BANNER_DESKTOP) });
            e?.uuid != null && n.append("client_heartbeat_session_id", e.uuid),
                null != t.uuid && n.append("client_ad_session_id", t.uuid);
            let r = (
                    await s.Bo.get({
                        url: `${M.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${n.toString()}`,
                        rejectWithError: !1,
                    })
                ).body.creative,
                o = null;
            null != r && r.creative_type === i.p.QUEST_HOME_HERO && (o = (0, L.Hi)(r.creative_content)),
                a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: o });
        } catch (e) {
            throw (a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(e) }), e);
        }
    }
}
function e_(e) {
    a.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function ef(e, t) {
    a.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function ep(e, t) {
    a.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}

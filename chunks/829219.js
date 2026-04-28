n.d(t, {
    Am: () => eE,
    CV: () => w,
    Fr: () => en,
    Gn: () => J,
    Gt: () => q,
    HA: () => Z,
    N1: () => V,
    Oq: () => Y,
    Ov: () => F,
    Oy: () => j,
    QG: () => ee,
    R2: () => H,
    UZ: () => Q,
    WM: () => k,
    Yb: () => $,
    Yf: () => eo,
    Zb: () => ed,
    d6: () => X,
    dQ: () => es,
    g5: () => x,
    jh: () => W,
    lk: () => K,
    lx: () => z,
    qV: () => eu,
    qY: () => er,
    r8: () => et,
    uI: () => ea,
    vD: () => B,
    xB: () => e_,
    yO: () => ei,
    zh: () => ec,
}),
    n(323874),
    n(14289),
    n(35956);
var i,
    a = n(110259),
    r = n(323889),
    _ = n(636537),
    s = n(228366),
    l = n(181658),
    o = n(124113),
    E = n(881615),
    d = n(861638),
    c = n(888548),
    u = n(69114),
    I = n(633965),
    T = n(463347),
    A = n(310829),
    S = n(383394),
    N = n(711014),
    O = n(954571),
    f = n(927813),
    R = n(499785),
    C = n(681370),
    D = n(260364),
    p = n(869359),
    L = n(859703),
    m = n(507107),
    h = n(405670),
    g = n(108757),
    b = n(859387),
    U = n(561844),
    P = n(710969),
    M = n(470307),
    G = n(654487),
    y = n(652215),
    v = n(985018);
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await _.Bo.post({
                url: y.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            s.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (n) {
        let e = new l.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: m.xv.RATE_LIMITED,
                        message: v.intl.string(v.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? v.intl.string(v.t.xSCvBf);
        return {
            errorHints: [{ type: m.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function w(e) {
    await _.Bo.post({ url: y.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function F() {
    await _.Bo.del({ url: y.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function V() {
    if (!L.A.isFetchingCurrentQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await _.Bo.get({ url: y.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, M.s2)(e)).map((e) => (0, M.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                i = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                a = e.body.excluded_quests.map((e) => (0, M._g)(e));
            s.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: i,
                excludedQuests: a,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            s.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
async function H(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: r = !1, executableFingerprint: _ } = e;
    try {
        let e = await R.A.post({
            url: y.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: r, executable_fingerprint: _ },
            trackedActionData: {
                event: a.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: r,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        s.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, M.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        s.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new l.A(e), questId: t, streamKey: n });
    }
}
var k =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function j(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, U.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === G.Fw && (0, A.u)(),
        L.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    s.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, P.L4)(t.questContent),
            i = (0, P.yI)(t.questContent, e),
            a = (0, P.Gp)(t.questContent, e),
            r = await _.Bo.post({
                url: y.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, P.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_raw: null != i ? i : null,
                    traffic_metadata_sealed: null != a ? a : null,
                },
                rejectWithError: !0,
            });
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, M.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            s.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof c.CaptchaCancelError ||
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
async function Y(e, t, n) {
    if (!L.A.isClaimingReward(e)) {
        s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, P.L4)(n),
                a = (0, P.yI)(n, e),
                r = (0, P.Gp)(n, e),
                l = await _.Bo.post({
                    url: y.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, P.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_raw: null != a ? a : null,
                        traffic_metadata_sealed: null != r ? r : null,
                    },
                    rejectWithError: !1,
                }),
                o = (0, M.Dv)(l.body);
            return (
                0 === o.errors.length
                    ? s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: o })
                    : s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: o.errors, questId: e }),
                o
            );
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function W(e) {
    if (!L.A.isFetchingRewardCode(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await _.Bo.get({ url: y.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, M.Rd)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function x(e, t) {
    let n = L.A.isDismissingContent(e),
        i = (0, P.vy)(t);
    if (!n && i) {
        s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, P.yI)(t, e),
                i = (0, P.Gp)(t, e),
                a = await _.Bo.post({
                    url: y.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, P.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != i ? i : null,
                    },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, M.tp)(a.body) });
        } catch (t) {
            s.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new l.A(t), questId: e });
        }
    }
}
function K(e) {
    s.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await _.Bo.post({ url: y.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, M.tp)(n.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function Q(e) {
    try {
        let t = await _.Bo.del({ url: y.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, M.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function q(e) {
    try {
        s.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await _.Bo.del({ url: y.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, M.tp)(t.body) });
    } catch (t) {
        s.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
function X(e) {
    s.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function z(e, t) {
    s.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function Z() {
    if (!L.A.isFetchingClaimedQuests) {
        s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await _.Bo.get({ url: y.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, M.S)(e),
            );
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            s.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
function J(e, t, n) {
    s.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function ee(e) {
    s.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function et(e, t) {
    let n = Date.now();
    p.A.recordQuestRequestAttempt("/quests/decision", t, e),
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            a = await (0, d.Ht)(),
            l = await (0, E.sN)(),
            o = g.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, I.pc)(),
            A = null != c ? c() : [],
            f = N.Ay.getGuildsTree(),
            R = A.filter((e) => {
                if ((0, T.tZ)(e)) return !1;
                let t = f.getNode(e);
                return t?.parentId == null || S.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            C = o.enabled ? R : void 0,
            L = new URLSearchParams({ placement: String(e) });
        a?.uuid != null && L.append("client_heartbeat_session_id", a.uuid),
            null != l.uuid && L.append("client_ad_session_id", l.uuid),
            null != C && C.forEach((e) => L.append("visible_guild_ids", e));
        let h = (await _.Bo.get({ url: `${y.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${L.toString()}`, rejectWithError: !1 }))
                .body,
            b = h.creative;
        if (null != b) b.creative_type === r.p.QUEST && (i = (0, M.Yn)(b.creative_content));
        else {
            let e = h.quest;
            i = null != e ? (0, M.Yn)(e) : void 0;
        }
        if (
            (s.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
                adDecisionData: {
                    ad_id: h.ad_identifiers?.ad_id,
                    adset_id: h.ad_identifiers?.adset_id,
                    ad_set_id: h.ad_identifiers?.ad_set_id,
                    campaign_id: h.ad_identifiers?.campaign_id,
                    creative_id: h.ad_identifiers?.creative_id,
                    creative_type: h.ad_identifiers?.creative_type,
                    decision_id: h.request_id,
                    is_targeted: null != h.ad_identifiers,
                },
                metadataSealed: h.metadata_sealed,
                trafficMetadataRaw: h.traffic_metadata_raw,
                trafficMetadataSealed: h.traffic_metadata_sealed,
                adContext: h.ad_context,
                responseTtlSeconds: h.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            p.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(h.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === m.yW.DESKTOP_ACCOUNT_PANEL_AREA && D.A.startTracking(i.id),
            O.default.track(y.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, u.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(h.request_id),
            });
    } catch (i) {
        p.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            O.default.track(y.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, u.A)(),
                reason: i?.message ?? null,
                api_error: new l.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new l.A(i), placement: e });
    }
}
function en(e, t) {
    s.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ei(e, t, n) {
    if (L.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = L.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        a = e.filter((e) => {
            let t = i?.get(e);
            return !(0, P.Oh)(t);
        });
    if (0 === a.length) return;
    let r = Date.now();
    C.A.recordEarnedRequestAttempt(t, n),
        s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, d.Ht)(),
            n = a.join(","),
            i = await _.Bo.get({ url: y.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            l = i.body.quests,
            o = i.body.response_ttl_seconds,
            E = new Map(
                a.map((e) => {
                    let t = l?.[e];
                    return [e, null != t && (0, M.s2)(t) ? t : null];
                }),
            );
        s.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: E,
            content: t,
            fetchedAt: r,
            responseTtlSeconds: o,
        }),
            C.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: r,
            });
    } catch (e) {
        C.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: r }),
            s.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new l.A(e), content: t });
    }
}
async function ea(e, t) {
    await R.A.post({
        url: y.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
        trackedActionData: {
            event: a.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: { quest_id: e, timestamp_sec: t.toString(), stack_trace: Error().stack ?? "" },
        },
        rejectWithError: !1,
    });
}
async function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, b.tW)(e, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.FAILURE });
    h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.FETCHING });
    try {
        let t = await _.Bo.get({ url: n.url, rejectWithError: !0 });
        h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.FAILURE });
    }
}
async function e_(e) {
    let t = await _.Bo.get({ url: y.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, M.Yn)(t.body);
}
async function es(e) {
    if (!L.A.isFetchingQuestPreview(e)) {
        s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await _.Bo.get({ url: y.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, M.rO)(t.body) });
        } catch (t) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
let el = 5 * f.A.Millis.MINUTE;
async function eo() {
    if (L.A.isFetchingQuestHomeHero()) return;
    let e = L.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= el)) {
        s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [m.gh.QUEST_HOME_BANNER],
                t = await _.Bo.get({
                    url: y.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: m.vg.WEB },
                    rejectWithError: !1,
                });
            s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, M.oc)(t.body) });
        } catch (e) {
            throw (s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(e) }), e);
        }
    }
}
async function eE() {
    let e = m.yW.QUEST_HOME_BANNER_DESKTOP;
    if (L.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = L.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= el) return;
    let n = Date.now();
    s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: e });
    try {
        let t = await (0, d.Ht)(),
            i = await (0, E.sN)(),
            a = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && a.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && a.append("client_ad_session_id", i.uuid);
        let l = (await _.Bo.get({ url: `${y.Rsh.QUESTS_GET_DECISIONS}?${a.toString()}`, rejectWithError: !1 })).body,
            c = l.decisions?.[0] ?? null,
            u = c?.creative ?? null,
            I = null;
        null != u && u.creative_type === r.p.QUEST_HOME_HERO && (I = (0, o.F)(u.creative_content)),
            s.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: I,
                adDecisionData: {
                    ad_id: c?.ad_identifiers?.ad_id,
                    ad_set_id: c?.ad_identifiers?.ad_set_id,
                    campaign_id: c?.ad_identifiers?.campaign_id,
                    creative_id: c?.ad_identifiers?.creative_id,
                    creative_type: c?.ad_identifiers?.creative_type,
                    decision_id: l.request_id,
                    is_targeted: c?.ad_identifiers != null,
                },
                metadataSealed: c?.metadata_sealed,
                trafficMetadataRaw: c?.traffic_metadata_raw,
                trafficMetadataSealed: c?.traffic_metadata_sealed,
                adContext: c?.ad_context,
                responseTtlSeconds: c?.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            });
    } catch (t) {
        throw (
            (s.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE", error: new l.A(t), placement: e }),
            t)
        );
    }
}
function ed(e) {
    s.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function ec(e, t) {
    s.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eu(e, t) {
    s.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}

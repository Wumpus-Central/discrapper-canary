n.d(t, {
    Am: () => ec,
    CV: () => x,
    Fr: () => en,
    Gn: () => J,
    Gt: () => q,
    HA: () => X,
    N1: () => B,
    Oq: () => j,
    Ov: () => V,
    Oy: () => H,
    QG: () => ee,
    R2: () => F,
    UZ: () => Z,
    WM: () => k,
    Yb: () => $,
    Yf: () => ed,
    Zb: () => e_,
    d6: () => Q,
    dQ: () => el,
    g5: () => W,
    jh: () => Y,
    lk: () => K,
    lx: () => z,
    qV: () => eu,
    qY: () => er,
    r8: () => et,
    uI: () => ea,
    vD: () => w,
    xB: () => es,
    yO: () => ei,
    zh: () => eE,
}),
    n(323874),
    n(14289),
    n(35956);
var i,
    a = n(110259),
    r = n(323889),
    s = n(636537),
    l = n(228366),
    o = n(181658),
    d = n(124113),
    c = n(881615),
    _ = n(861638),
    E = n(888548),
    u = n(69114),
    A = n(633965),
    I = n(463347),
    T = n(310829),
    h = n(383394),
    S = n(711014),
    N = n(954571),
    f = n(927813),
    p = n(499785),
    m = n(681370),
    O = n(260364),
    C = n(869359),
    R = n(859703),
    g = n(507107),
    L = n(405670),
    D = n(108757),
    b = n(859387),
    M = n(561844),
    P = n(710969),
    U = n(470307),
    v = n(654487),
    y = n(652215),
    G = n(985018);
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: y.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            l.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (n) {
        let e = new o.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: g.xv.RATE_LIMITED,
                        message: G.intl.string(G.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? G.intl.string(G.t.xSCvBf);
        return {
            errorHints: [{ type: g.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function x(e) {
    await s.Bo.post({ url: y.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function V() {
    await s.Bo.del({ url: y.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function B() {
    if (!R.A.isFetchingCurrentQuests) {
        l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await s.Bo.get({ url: y.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, U.s2)(e)).map((e) => (0, U.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                i = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                a = e.body.excluded_quests.map((e) => (0, U._g)(e));
            l.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: i,
                excludedQuests: a,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            l.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
async function F(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: r = !1, executableFingerprint: s } = e;
    try {
        let e = await p.A.post({
            url: y.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: r, executable_fingerprint: s },
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
        l.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, U.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        l.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new o.A(e), questId: t, streamKey: n });
    }
}
var k =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function H(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, M.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === v.Fw && (0, T.u)(),
        R.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    l.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, P.L4)(t.questContent),
            i = (0, P.yI)(t.questContent, e),
            a = (0, P.Gp)(t.questContent, e),
            r = await s.Bo.post({
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
            l.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, U.tp)(r.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            l.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
            (n = t) instanceof E.CaptchaCancelError ||
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
    if (!R.A.isClaimingReward(e)) {
        l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, P.L4)(n),
                a = (0, P.yI)(n, e),
                r = (0, P.Gp)(n, e),
                o = await s.Bo.post({
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
                d = (0, U.Dv)(o.body);
            return (
                0 === d.errors.length
                    ? l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: d })
                    : l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: d.errors, questId: e }),
                d
            );
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function Y(e) {
    if (!R.A.isFetchingRewardCode(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: y.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, U.Rd)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
async function W(e, t) {
    let n = R.A.isDismissingContent(e),
        i = (0, P.vy)(t);
    if (!n && i) {
        l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, P.yI)(t, e),
                i = (0, P.Gp)(t, e),
                a = await s.Bo.post({
                    url: y.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, P.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != i ? i : null,
                    },
                    rejectWithError: !1,
                });
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, U.tp)(a.body) });
        } catch (t) {
            l.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new o.A(t), questId: e });
        }
    }
}
function K(e) {
    l.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: y.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, U.tp)(n.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function Z(e) {
    try {
        let t = await s.Bo.del({ url: y.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, U.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
async function q(e) {
    try {
        l.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: y.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, U.tp)(t.body) });
    } catch (t) {
        l.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new o.A(t), questId: e });
    }
}
function Q(e) {
    l.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function z(e, t) {
    l.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function X() {
    if (!R.A.isFetchingClaimedQuests) {
        l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: y.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, U.S)(e),
            );
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            l.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new o.A(e) });
        }
    }
}
function J(e, t, n) {
    l.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function ee(e) {
    l.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function et(e, t) {
    let n = Date.now();
    C.A.recordQuestRequestAttempt("/quests/decision", t, e),
        l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            a = await (0, _.Ht)(),
            o = await (0, c.sN)(),
            d = D.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            E = (0, A.pc)(),
            T = null != E ? E() : [],
            f = S.Ay.getGuildsTree(),
            p = T.filter((e) => {
                if ((0, I.tZ)(e)) return !1;
                let t = f.getNode(e);
                return t?.parentId == null || h.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            m = d.enabled ? p : void 0,
            R = new URLSearchParams({ placement: String(e) });
        a?.uuid != null && R.append("client_heartbeat_session_id", a.uuid),
            null != o.uuid && R.append("client_ad_session_id", o.uuid),
            null != m && m.forEach((e) => R.append("visible_guild_ids", e));
        let L = (await s.Bo.get({ url: `${y.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${R.toString()}`, rejectWithError: !1 }))
                .body,
            b = L.creative;
        if (null != b) b.creative_type === r.p.QUEST && (i = (0, U.Yn)(b.creative_content));
        else {
            let e = L.quest;
            i = null != e ? (0, U.Yn)(e) : void 0;
        }
        if (
            (l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: i,
                adDecisionData: {
                    ad_id: L.ad_identifiers?.ad_id,
                    adset_id: L.ad_identifiers?.adset_id,
                    ad_set_id: L.ad_identifiers?.ad_set_id,
                    campaign_id: L.ad_identifiers?.campaign_id,
                    creative_id: L.ad_identifiers?.creative_id,
                    creative_type: L.ad_identifiers?.creative_type,
                    decision_id: L.request_id,
                    is_targeted: null != L.ad_identifiers,
                },
                metadataSealed: L.metadata_sealed,
                trafficMetadataRaw: L.traffic_metadata_raw,
                trafficMetadataSealed: L.traffic_metadata_sealed,
                adContext: L.ad_context,
                responseTtlSeconds: L.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            }),
            C.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(L.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === g.yW.DESKTOP_ACCOUNT_PANEL_AREA && O.A.startTracking(i.id),
            N.default.track(y.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, u.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(L.request_id),
            });
    } catch (i) {
        C.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            N.default.track(y.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, u.A)(),
                reason: i?.message ?? null,
                api_error: new o.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            l.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new o.A(i), placement: e });
    }
}
function en(e, t) {
    l.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ei(e, t, n) {
    if (R.A.isFetchingEarnedQuestToDeliverByPlacement(t)) return;
    let i = R.A.earnedQuestForPlacement.get(t)?.earnedDecisionByQuestId,
        a = e.filter((e) => {
            let t = i?.get(e);
            return !(0, P.Oh)(t);
        });
    if (0 === a.length) return;
    let r = Date.now();
    m.A.recordEarnedRequestAttempt(t, n),
        l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, _.Ht)(),
            n = a.join(","),
            i = await s.Bo.get({ url: y.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            o = i.body.quests,
            d = i.body.response_ttl_seconds,
            c = new Map(
                a.map((e) => {
                    let t = o?.[e];
                    return [e, null != t && (0, U.s2)(t) ? t : null];
                }),
            );
        l.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: c,
            content: t,
            fetchedAt: r,
            responseTtlSeconds: d,
        }),
            m.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: r,
            });
    } catch (e) {
        m.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: r }),
            l.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new o.A(e), content: t });
    }
}
async function ea(e, t) {
    await p.A.post({
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
    if (null == n) return void L.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: L.Lx.FAILURE });
    L.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: L.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        L.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: L.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        L.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: L.Lx.FAILURE });
    }
}
async function es(e) {
    let t = await s.Bo.get({ url: y.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, U.Yn)(t.body);
}
async function el(e) {
    if (!R.A.isFetchingQuestPreview(e)) {
        l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: y.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, U.rO)(t.body) });
        } catch (t) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new o.A(t), questId: e }), t);
        }
    }
}
let eo = 5 * f.A.Millis.MINUTE;
async function ed() {
    if (R.A.isFetchingQuestHomeHero()) return;
    let e = R.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= eo)) {
        l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [g.gh.QUEST_HOME_BANNER],
                t = await s.Bo.get({
                    url: y.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: g.vg.WEB },
                    rejectWithError: !1,
                });
            l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, U.oc)(t.body) });
        } catch (e) {
            throw (l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new o.A(e) }), e);
        }
    }
}
async function ec() {
    let e = g.yW.QUEST_HOME_BANNER_DESKTOP;
    if (R.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = R.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= eo) return;
    let n = Date.now();
    l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: e });
    try {
        let t = await (0, _.Ht)(),
            i = await (0, c.sN)(),
            a = new URLSearchParams({ placement: String(e), num_decisions_requested: "1" });
        t?.uuid != null && a.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && a.append("client_ad_session_id", i.uuid);
        let o = (await s.Bo.get({ url: `${y.Rsh.QUESTS_GET_DECISIONS}?${a.toString()}`, rejectWithError: !1 })).body,
            E = o.decisions?.[0] ?? null,
            u = E?.creative ?? null,
            A = null;
        null != u && u.creative_type === r.p.QUEST_HOME_HERO && (A = (0, d.F)(u.creative_content)),
            l.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: A,
                adDecisionData: {
                    ad_id: E?.ad_identifiers?.ad_id,
                    ad_set_id: E?.ad_identifiers?.ad_set_id,
                    campaign_id: E?.ad_identifiers?.campaign_id,
                    creative_id: E?.ad_identifiers?.creative_id,
                    creative_type: E?.ad_identifiers?.creative_type,
                    decision_id: o.request_id,
                    is_targeted: E?.ad_identifiers != null,
                },
                metadataSealed: E?.metadata_sealed,
                trafficMetadataRaw: E?.traffic_metadata_raw,
                trafficMetadataSealed: E?.traffic_metadata_sealed,
                adContext: E?.ad_context,
                responseTtlSeconds: E?.response_ttl_seconds,
                placement: e,
                fetchedAt: n,
            });
    } catch (t) {
        throw (
            (l.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE", error: new o.A(t), placement: e }),
            t)
        );
    }
}
function e_(e) {
    l.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function eE(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eu(e, t) {
    l.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}

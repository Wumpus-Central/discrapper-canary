n.d(t, {
    Am: () => eE,
    CV: () => w,
    Fr: () => en,
    Gn: () => Z,
    Gt: () => q,
    HA: () => J,
    N1: () => V,
    Oq: () => W,
    Ov: () => F,
    Oy: () => x,
    QG: () => ee,
    R2: () => H,
    UZ: () => Q,
    WM: () => k,
    Yb: () => $,
    Yf: () => eo,
    Zb: () => ed,
    d6: () => X,
    dQ: () => e_,
    g5: () => j,
    jh: () => Y,
    lk: () => K,
    lx: () => z,
    qV: () => eu,
    qY: () => ea,
    r8: () => et,
    uI: () => er,
    vD: () => B,
    xB: () => es,
    yO: () => ei,
    zh: () => ec,
}),
    n(323874),
    n(14289),
    n(35956);
var i,
    r = n(110259),
    a = n(323889),
    s = n(636537),
    _ = n(228366),
    l = n(181658),
    o = n(124113),
    E = n(881615),
    d = n(861638),
    c = n(888548),
    u = n(69114),
    I = n(633965),
    A = n(463347),
    T = n(310829),
    S = n(383394),
    N = n(711014),
    O = n(954571),
    R = n(927813),
    f = n(499785),
    C = n(681370),
    p = n(260364),
    m = n(869359),
    L = n(859703),
    D = n(507107),
    h = n(405670),
    g = n(108757),
    b = n(859387),
    U = n(561844),
    P = n(710969),
    M = n(470307),
    y = n(654487),
    G = n(652215),
    v = n(985018);
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await s.Bo.post({
                url: G.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            _.h.dispatch({ type: "QUESTS_USER_STATUS_UPDATE", user_status: n.quest_user_status });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (n) {
        let e = new l.A(n);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: D.xv.RATE_LIMITED,
                        message: v.intl.string(v.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = e.getAnyErrorMessage() ?? v.intl.string(v.t.xSCvBf);
        return {
            errorHints: [{ type: D.xv.GENERIC, message: t, connected_account_id: "", connected_account_type: "" }],
        };
    }
    return { errorHints: [] };
}
async function w(e) {
    await s.Bo.post({ url: G.Rsh.QUEST_ON_CONSOLE_STOP(e), rejectWithError: !1 });
}
async function F() {
    await s.Bo.del({ url: G.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: !1 });
}
async function V() {
    if (!L.A.isFetchingCurrentQuests) {
        _.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await s.Bo.get({ url: G.Rsh.QUESTS_CURRENT_QUESTS, rejectWithError: !1 }),
                t = e.body.quests.filter((e) => (0, M.s2)(e)).map((e) => (0, M.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                i = t.filter((e) => e.userStatus?.claimedAt != null || e.config.rewardsConfig.platforms.length > 0),
                r = e.body.excluded_quests.map((e) => (0, M._g)(e));
            _.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: i,
                excludedQuests: r,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            _.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
async function H(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: a = !1, executableFingerprint: s } = e;
    try {
        let e = await f.A.post({
            url: G.Rsh.QUESTS_HEARTBEAT(t),
            body: { stream_key: n, application_id: i, terminal: a, executable_fingerprint: s },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: a,
                    is_overlay: __OVERLAY__,
                    stack_trace: Error().stack ?? "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        _.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, M.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        _.h.dispatch({ type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: new l.A(e), questId: t, streamKey: n });
    }
}
var k =
    (((i = {}).SUCCESS = "success"),
    (i.CAPTCHA_FAILED = "captcha_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    (i.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
    i);
async function x(e, t) {
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
        e === y.Fw && (0, T.u)(),
        L.A.isEnrolling(e))
    )
        return { type: "previous_in_flight_request" };
    _.h.dispatch({ type: "QUESTS_ENROLL_BEGIN", questId: e });
    try {
        let n = (0, P.L4)(t.questContent),
            i = (0, P.yI)(t.questContent, e),
            r = (0, P.Gp)(t.questContent, e),
            a = await s.Bo.post({
                url: G.Rsh.QUESTS_ENROLL(e),
                body: {
                    location: t.questContent,
                    ...(0, P.Kc)(e, t.questContent),
                    metadata_sealed: null != n ? n : null,
                    traffic_metadata_raw: null != i ? i : null,
                    traffic_metadata_sealed: null != r ? r : null,
                },
                rejectWithError: !0,
            });
        return (
            _.h.dispatch({ type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: (0, M.tp)(a.body) }),
            { type: "success" }
        );
    } catch (t) {
        var n;
        return (
            _.h.dispatch({ type: "QUESTS_ENROLL_FAILURE", questId: e }),
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
async function W(e, t, n) {
    if (!L.A.isClaimingReward(e)) {
        _.h.dispatch({ type: "QUESTS_CLAIM_REWARD_BEGIN", questId: e });
        try {
            let i = (0, P.L4)(n),
                r = (0, P.yI)(n, e),
                a = (0, P.Gp)(n, e),
                l = await s.Bo.post({
                    url: G.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n,
                        ...(0, P.Kc)(e, n),
                        metadata_sealed: null != i ? i : null,
                        traffic_metadata_raw: null != r ? r : null,
                        traffic_metadata_sealed: null != a ? a : null,
                    },
                    rejectWithError: !1,
                }),
                o = (0, M.Dv)(l.body);
            return (
                0 === o.errors.length
                    ? _.h.dispatch({ type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: e, entitlements: o })
                    : _.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: o.errors, questId: e }),
                o
            );
        } catch (t) {
            throw (_.h.dispatch({ type: "QUESTS_CLAIM_REWARD_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function Y(e) {
    if (!L.A.isFetchingRewardCode(e)) {
        _.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: G.Rsh.QUESTS_REWARD_CODE(e), rejectWithError: !1 });
            _.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: e, rewardCode: (0, M.Rd)(t.body) });
        } catch (t) {
            throw (_.h.dispatch({ type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
async function j(e, t) {
    let n = L.A.isDismissingContent(e),
        i = (0, P.vy)(t);
    if (!n && i) {
        _.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: e, content: t });
        try {
            let n = (0, P.yI)(t, e),
                i = (0, P.Gp)(t, e),
                r = await s.Bo.post({
                    url: G.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                    body: {
                        ...(0, P.Kc)(e, t),
                        traffic_metadata_raw: null != n ? n : null,
                        traffic_metadata_sealed: null != i ? i : null,
                    },
                    rejectWithError: !1,
                });
            _.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: (0, M.tp)(r.body) });
        } catch (t) {
            _.h.dispatch({ type: "QUESTS_DISMISS_CONTENT_FAILURE", error: new l.A(t), questId: e });
        }
    }
}
function K(e) {
    _.h.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey: e });
}
async function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await s.Bo.post({ url: G.Rsh.QUESTS_PREVIEW_COMPLETE(e), body: { percent: t }, rejectWithError: !1 });
        _.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, M.tp)(n.body) });
    } catch (t) {
        _.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function Q(e) {
    try {
        let t = await s.Bo.del({ url: G.Rsh.QUESTS_PREVIEW_STATUS(e), body: {}, rejectWithError: !1 });
        _.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, M.tp)(t.body) });
    } catch (t) {
        _.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
async function q(e) {
    try {
        _.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await s.Bo.del({ url: G.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e), body: {}, rejectWithError: !1 });
        _.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: (0, M.tp)(t.body) });
    } catch (t) {
        _.h.dispatch({ type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: new l.A(t), questId: e });
    }
}
function X(e) {
    _.h.dispatch({ type: "QUESTS_DELIVERY_OVERRIDE", questId: e });
}
function z(e, t) {
    _.h.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId: e, platform: t });
}
async function J() {
    if (!L.A.isFetchingClaimedQuests) {
        _.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (await s.Bo.get({ url: G.Rsh.QUESTS_CLAIMED_QUESTS, rejectWithError: !1 })).body.quests.map((e) =>
                (0, M.S)(e),
            );
            _.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: e });
        } catch (e) {
            _.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: new l.A(e) });
        }
    }
}
function Z(e, t, n) {
    _.h.dispatch({ type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: e, taskEventName: t, progress: n });
}
function ee(e) {
    _.h.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId: e });
}
async function et(e, t) {
    let n = Date.now();
    m.A.recordQuestRequestAttempt("/quests/decision", t, e),
        _.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: e });
    try {
        let i,
            r = await (0, d.Ht)(),
            l = await (0, E.sN)(),
            o = g.r.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" }),
            c = (0, I.pc)(),
            T = null != c ? c() : [],
            R = N.Ay.getGuildsTree(),
            f = T.filter((e) => {
                if ((0, A.tZ)(e)) return !1;
                let t = R.getNode(e);
                return t?.parentId == null || S.A.isFolderExpanded(t.parentId);
            }).slice(0, 50),
            C = o.enabled ? f : void 0,
            L = new URLSearchParams({ placement: String(e) });
        r?.uuid != null && L.append("client_heartbeat_session_id", r.uuid),
            null != l.uuid && L.append("client_ad_session_id", l.uuid),
            null != C && C.forEach((e) => L.append("visible_guild_ids", e));
        let h = (await s.Bo.get({ url: `${G.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${L.toString()}`, rejectWithError: !1 }))
                .body,
            b = h.creative;
        if (null != b) b.creative_type === a.p.QUEST && (i = (0, M.Yn)(b.creative_content));
        else {
            let e = h.quest;
            i = null != e ? (0, M.Yn)(e) : void 0;
        }
        if (
            (_.h.dispatch({
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
            m.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(h.request_id),
                currentQuestId: i?.id ?? null,
                currentFetchedAt: n,
            }),
            null == i)
        )
            return;
        e === D.yW.DESKTOP_ACCOUNT_PANEL_AREA && p.A.startTracking(i.id),
            O.default.track(G.HAw.QUEST_DECISION_RECEIVED, {
                ...(0, u.A)(),
                quest_id: i.id,
                caller_source: t,
                ad_request_id: String(h.request_id),
            });
    } catch (i) {
        m.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1, currentFetchedAt: n }),
            O.default.track(G.HAw.QUEST_DECISION_ROUNDTRIP_ERROR, {
                ...(0, u.A)(),
                reason: i?.message ?? null,
                api_error: new l.A(i).getAnyErrorMessage(),
                caller_source: t,
            }),
            _.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: new l.A(i), placement: e });
    }
}
function en(e, t) {
    _.h.dispatch({
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
        r = e.filter((e) => {
            let t = i?.get(e);
            return !(0, P.Oh)(t);
        });
    if (0 === r.length) return;
    let a = Date.now();
    C.A.recordEarnedRequestAttempt(t, n),
        _.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: t });
    try {
        let e = await (0, d.Ht)(),
            n = r.join(","),
            i = await s.Bo.get({ url: G.Rsh.QUEST_EARNED_DECISION(n, t, e?.uuid), rejectWithError: !1 }),
            l = i.body.quests,
            o = i.body.response_ttl_seconds,
            E = new Map(
                r.map((e) => {
                    let t = l?.[e];
                    return [e, null != t && (0, M.s2)(t) ? t : null];
                }),
            );
        _.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
            serverQuests: E,
            content: t,
            fetchedAt: a,
            responseTtlSeconds: o,
        }),
            C.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: i.body.request_id ?? null,
                fetchedAt: a,
            });
    } catch (e) {
        C.A.recordEarnedRequestApiResponse(t, { wasSuccessful: !1, fetchedAt: a }),
            _.h.dispatch({ type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: new l.A(e), content: t });
    }
}
async function er(e, t) {
    await f.A.post({
        url: G.Rsh.QUESTS_VIDEO_PROGRESS(e),
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
        n = (0, b.tW)(e, b.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n) return void h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.FAILURE });
    h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.FETCHING });
    try {
        let t = await s.Bo.get({ url: n.url, rejectWithError: !0 });
        h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.SUCCESS, text: t.text, url: n.url });
    } catch (t) {
        h.Ay.getState().setTranscriptAsset({ questId: e.id, fetchStatus: h.Lx.FAILURE });
    }
}
async function es(e) {
    let t = await s.Bo.get({ url: G.Rsh.QUEST(e), rejectWithError: !1 });
    return (0, M.Yn)(t.body);
}
async function e_(e) {
    if (!L.A.isFetchingQuestPreview(e)) {
        _.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: e });
        try {
            let t = await s.Bo.get({ url: G.Rsh.QUEST_PREVIEW(e), rejectWithError: !1 });
            _.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: e, quest: (0, M.rO)(t.body) });
        } catch (t) {
            throw (_.h.dispatch({ type: "QUESTS_FETCH_PREVIEW_FAILURE", error: new l.A(t), questId: e }), t);
        }
    }
}
let el = 5 * R.A.Millis.MINUTE;
async function eo() {
    if (L.A.isFetchingQuestHomeHero()) return;
    let e = L.A.getLastFetchedQuestHomeHero();
    if (!(null != e && Date.now() - e <= el)) {
        _.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN" });
        try {
            let e = [D.gh.QUEST_HOME_BANNER],
                t = await s.Bo.get({
                    url: G.Rsh.QUEST_PLACEMENT,
                    query: { placements: e, platform: D.vg.WEB },
                    rejectWithError: !1,
                });
            _.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: (0, M.oc)(t.body) });
        } catch (e) {
            throw (_.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: new l.A(e) }), e);
        }
    }
}
async function eE() {
    let e = D.yW.QUEST_HOME_BANNER_DESKTOP;
    if (L.A.isFetchingQuestToDeliverByPlacement(e)) return;
    let t = L.A.getLastFetchedQuestHomeHero();
    if (null != t && Date.now() - t <= el) return;
    let n = Date.now();
    _.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_BEGIN", placement: e });
    try {
        let t = await (0, d.Ht)(),
            i = await (0, E.sN)(),
            r = new URLSearchParams({ placement: String(e) });
        t?.uuid != null && r.append("client_heartbeat_session_id", t.uuid),
            null != i.uuid && r.append("client_ad_session_id", i.uuid);
        let l = (await s.Bo.get({ url: `${G.Rsh.QUEST_FETCH_QUEST_TO_DELIVER}?${r.toString()}`, rejectWithError: !1 }))
                .body,
            c = l.creative,
            u = null;
        null != c && c.creative_type === a.p.QUEST_HOME_HERO && (u = (0, o.F)(c.creative_content)),
            _.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_SUCCESS",
                questHomeHero: u,
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
            (_.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_HERO_DECISION_FAILURE", error: new l.A(t), placement: e }),
            t)
        );
    }
}
function ed(e) {
    _.h.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: e });
}
function ec(e, t) {
    _.h.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: e, contentIds: t });
}
function eu(e, t) {
    _.h.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: e, contentIds: t });
}

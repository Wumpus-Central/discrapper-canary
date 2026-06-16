"use strict";
let i;
n.d(t, { iG: () => eh, Ay: () => ef, Pd: () => ed, DV: () => e_ });
var r = n(835245),
    s = n(636537),
    a = n(228366),
    o = n(367513),
    l = n(155718),
    u = n(272355),
    c = n(793574),
    d = n(240591),
    _ = n(627363),
    h = n(313961),
    f = n(655087),
    p = n(95701),
    E = n(495544),
    m = n(734057),
    g = n(763827),
    A = n(309010),
    I = n(287809),
    T = n(174459),
    S = n(625494),
    y = n(723702),
    C = n(240248),
    N = n(17928);
function v() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let R = v();
class O extends N.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        R = { ...v(), ...(e ?? {}) };
    }
    getState() {
        return R;
    }
}
let b = new O(a.h, {
    LOGOUT: function () {
        R = v();
    },
});
var D = n(795816),
    L = n(933958),
    w = n(692957),
    M = n(956518),
    P = n(157559),
    x = n(192552),
    k = n(395671),
    U = n(71393),
    G = n(576705),
    F = n(977997),
    V = n(62583),
    B = n(170148),
    j = n(550151),
    H = n(375708);
async function Y(e) {
    let {
            channelId: t,
            applicationId: n,
            launchId: i,
            inputApplication: r,
            analyticsLocations: s,
            launchingComponentId: a,
            sectionName: o,
            inviterUserId: l,
        } = e,
        u = L.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == i || e.launchId === i),
        ),
        c = r;
    if (null == c) {
        let e = await _.Ay.fetchApplication(n);
        c = k.Ay.createFromServer(e);
    }
    if (null == u || null == c) return;
    let d = I.default.getCurrentUser();
    async function h() {
        null != u &&
            (await (0, V.A)({
                applicationId: u.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: s,
                componentId: a,
                sectionName: o,
                inviterUserId: l,
            }));
    }
    !(function (e) {
        let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
        switch (t) {
            case j.Gy.CAN_JOIN:
                n?.();
                break;
            case j.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, x.i)();
                break;
            case j.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                P.A.show({ title: H.intl.string(H.t.PtobXW), body: H.intl.string(H.t.UXoQTp), hideActionSheet: !1 });
                break;
            case j.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                P.A.show({ title: H.intl.string(H.t.PtobXW), body: H.intl.string(H.t.uGDCcw), hideActionSheet: !1 });
                break;
            case j.Gy.ACTIVITY_AGE_GATED:
                P.A.show({ title: H.intl.string(H.t.PtobXW), body: H.intl.string(H.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case j.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case j.Gy.CHANNEL_FULL:
            case j.Gy.NO_CHANNEL:
            case j.Gy.NO_USER:
                P.A.show({ title: H.intl.string(H.t.PtobXW), body: H.intl.string(H.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, j.Ay)({
            userId: d?.id,
            application: c,
            channelId: t,
            currentUser: d,
            isActivitiesEnabledForCurrentPlatform: (0, B.A)(),
            ChannelStore: m.A,
            VoiceStateStore: F.A,
            PermissionStore: G.A,
            GuildStore: U.A,
        }),
        handleCanJoin: h,
    });
}
var W = n(956549),
    K = n(907645),
    $ = n(969151),
    z = n(847381),
    q = n(166352),
    Z = n(108959),
    X = n(582776),
    Q = n(400115),
    J = n(859007),
    ee = n(652215);
let et = {},
    en = {},
    ei = {};
function er(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, z.A)((0, y.getOS)())].release_phase };
}
function es(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((en[t] = { nonce: n, locations: i, source: r }), !0);
}
function ea(e, t) {
    let n = en[e];
    if (null != n && n.nonce === t) return delete en[e], n;
}
function eo(e, t) {
    setTimeout(() => ea(e, t), 2e3);
}
function el(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    es({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function eu(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = L.Ay.getEmbeddedActivityDurationMs(n.id, t),
        a = E.default.getSessionId();
    null != i &&
        null != a &&
        (await s.Bo.post({
            url: ee.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: a },
            retries: 2,
            rejectWithError: !1,
        }));
    let o = et[t],
        l = (0, $.H)(n),
        u = (0, $.D)(n),
        c = m.A.getChannel(l),
        d = I.default.getCurrentUser();
    if (null == o || null == d || null != o.connectedSince) return;
    let _ = L.Ay.getShelfActivities(u),
        h = (0, w.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: p } = er(h),
        g = f.A.getRawThermalState();
    T.default.track(ee.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: l,
        guild_id: u,
        media_session_id: o.mediaSessionIds[0],
        activity_session_id: o.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: d.premiumType,
        raw_thermal_state: g,
        release_phase: p,
        shelf_rank: h?.activity?.shelf_rank,
        activity_user_session_id: o.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: o.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        T.default.track(ee.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: l,
            guild_id: u,
            application_id: t,
            instance_ids: null != o.launchId ? [o.launchId] : void 0,
            media_session_ids: o.mediaSessionIds,
            activity_user_session_id: o.activityUserSessionId,
            raw_thermal_state: g,
            duration_ms: r,
            embedded_activity_location_kind: n.kind,
        }),
        delete et[t];
}
function ec(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: s,
        embeddedActivity: a,
        location: l,
        inviterUserId: u,
    } = e;
    if (((0, X.Q)(), (0, J.y)({ applicationId: t })))
        return void (0, Q.j$)(t, {
            isStart: i,
            inviterUserId: u,
            channelId: (0, $.H)(l),
            guildId: (0, $.D)(l),
            locationKind: l.kind,
            launchId: a.launchId,
            compositeInstanceId: a.compositeInstanceId,
            activitiesInfraVersion: "location" in a ? 2 : 1,
        });
    let c = E.default.getId(),
        _ = s.find((e) => e.userId === c),
        p = (0, $.H)(l),
        A = (0, $.D)(l),
        S = m.A.getChannel(p);
    if ((i && null != S && S.isPrivate() && n && null == _ && o.A.selectParticipant(S.id, null), null == _)) return;
    let y = g.A.getMediaSessionId(),
        N = a.compositeInstanceId,
        v = null == y && S?.isVocal() === !0 && S?.isPrivate() === !1;
    if (null == N || v) return;
    let R = (0, r.A)(),
        O = "location" in a ? 2 : 1,
        D = I.default.getCurrentUser();
    if (null == D) return;
    let M = L.Ay.getShelfActivities(A),
        P = b.getState().shelfOrder,
        x = (0, w.A)({ applicationId: t, activityConfigs: M }),
        k = 1 + P.findIndex((e) => e === t),
        { releasePhase: U } = er(x),
        G = f.A.getRawThermalState(),
        F = null != y ? [y] : [],
        V = {
            activitySessionId: N,
            activityUserSessionId: R,
            launchId: a.launchId,
            mediaSessionIds: F,
            activitiesInfraVersion: O,
        };
    et[t] = V;
    let B = en[t];
    (0, C.uJ)(_.nonce) || _.nonce === B?.nonce || (B = void 0),
        T.default.track(ee.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: p,
            guild_id: A,
            media_session_id: F[0],
            activity_session_id: N,
            application_id: t,
            location_stack: B?.locations,
            user_premium_tier: D.premiumType,
            raw_thermal_state: G,
            n_participants: null != S ? h.A.getUserParticipantCount(S.id) : null,
            is_activity_start: i,
            release_phase: U,
            shelf_rank: x?.activity?.shelf_rank,
            shelf_sorted_rank: k > 0 ? k : null,
            activity_user_session_id: R,
            channel_type: S?.type,
            source: B?.source,
            command_context_type: null != S ? (0, d.ud)(S, t) : null,
            invite_inviter_id: u,
            interaction_id: B?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        T.default.track(ee.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: B?.locations,
            channel_id: p,
            channel_type: S?.type,
            guild_id: A,
            application_id: t,
            instance_id: a.launchId,
            initial_media_session_id: F[0],
            activity_user_session_id: R,
            raw_thermal_state: G,
            is_activity_start: i,
            shelf_rank: x?.activity?.shelf_rank,
            shelf_sorted_rank: k > 0 ? k : null,
            activities_infra_version: O,
            embedded_activity_location_kind: l.kind,
        });
}
function ed(e) {
    let t = (0, Q.Sr)(e);
    if (null == t) return;
    let {
            isStart: n,
            inviterUserId: i,
            channelId: s,
            guildId: a,
            locationKind: o,
            launchId: l,
            compositeInstanceId: u,
            activitiesInfraVersion: c,
        } = t,
        _ = I.default.getCurrentUser();
    if (null == _) return;
    let p = null != s ? m.A.getChannel(s) : null,
        E = g.A.getMediaSessionId(),
        A = null != E ? [E] : [],
        S = (0, r.A)();
    et[e] = {
        activitySessionId: u,
        activityUserSessionId: S,
        launchId: l,
        mediaSessionIds: A,
        activitiesInfraVersion: c,
        connectedSince: Date.now(),
        frameChannelId: s,
        frameGuildId: a,
        frameLocationKind: o,
    };
    let y = L.Ay.getShelfActivities(a),
        C = b.getState().shelfOrder,
        N = (0, w.A)({ applicationId: e, activityConfigs: y }),
        v = 1 + C.findIndex((t) => t === e),
        { releasePhase: R } = er(N),
        O = f.A.getRawThermalState(),
        D = en[e];
    T.default.track(ee.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: s,
        guild_id: a,
        media_session_id: A[0],
        activity_session_id: u,
        application_id: e,
        location_stack: D?.locations,
        user_premium_tier: _.premiumType,
        raw_thermal_state: O,
        n_participants: null != p ? h.A.getUserParticipantCount(p.id) : null,
        is_activity_start: n,
        release_phase: R,
        shelf_rank: N?.activity?.shelf_rank,
        shelf_sorted_rank: v > 0 ? v : null,
        activity_user_session_id: S,
        channel_type: p?.type,
        source: D?.source,
        command_context_type: null != p ? (0, d.ud)(p, e) : null,
        invite_inviter_id: i,
        interaction_id: D?.interactionId,
        embedded_activity_location_kind: o,
    }),
        T.default.track(ee.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: D?.locations,
            channel_id: s,
            channel_type: p?.type,
            guild_id: a,
            application_id: e,
            instance_id: l,
            initial_media_session_id: A[0],
            activity_user_session_id: S,
            raw_thermal_state: O,
            is_activity_start: n,
            shelf_rank: N?.activity?.shelf_rank,
            shelf_sorted_rank: v > 0 ? v : null,
            activities_infra_version: c,
            embedded_activity_location_kind: o,
        });
}
function e_(e) {
    return et[e];
}
function eh(e) {
    let t = et[e],
        n = I.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        s = null != i ? m.A.getChannel(i) : null,
        a = L.Ay.getShelfActivities(r),
        o = (0, w.A)({ applicationId: e, activityConfigs: a }),
        { releasePhase: l } = er(o),
        u = f.A.getRawThermalState(),
        c = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    T.default.track(ee.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: i,
        guild_id: r,
        media_session_id: t.mediaSessionIds[0],
        activity_session_id: t.activitySessionId,
        application_id: e,
        duration_ms: c,
        user_premium_tier: n.premiumType,
        raw_thermal_state: u,
        release_phase: l,
        shelf_rank: o?.activity?.shelf_rank,
        activity_user_session_id: t.activityUserSessionId,
        channel_type: s?.type,
        media_session_ids: t.mediaSessionIds,
        embedded_activity_location_kind: t.frameLocationKind,
    }),
        T.default.track(ee.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: i,
            guild_id: r,
            application_id: e,
            instance_ids: null != t.launchId ? [t.launchId] : void 0,
            media_session_ids: t.mediaSessionIds,
            activity_user_session_id: t.activityUserSessionId,
            raw_thermal_state: u,
            duration_ms: c,
            embedded_activity_location_kind: t.frameLocationKind,
        }),
        delete et[e];
}
class ef extends u.A {
    _initialize() {
        A.A.addChangeListener(this.handleSelectedChannelUpdate),
            S._.subscribe(ee.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.subscribe(ee.jej.OPEN_EMBEDDED_ACTIVITY, ec),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", el),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            a.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", eu),
            a.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            a.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            a.h.subscribe("CALL_DELETE", this.handleCallDelete),
            a.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            a.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            a.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            a.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            a.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            a.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            a.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    _terminate() {
        A.A.removeChangeListener(this.handleSelectedChannelUpdate),
            S._.unsubscribe(ee.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.unsubscribe(ee.jej.OPEN_EMBEDDED_ACTIVITY, ec),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", el),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", eu),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            a.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            a.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            a.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            a.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            a.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            a.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            a.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            a.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            a.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    handleSelectedChannelUpdate = () => {
        let e = A.A.getVoiceChannelId();
        for (let { location: t, applicationId: n } of L.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, $.H)(t);
            null != i && (0, Z.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = L.Ay.getEmbeddedActivitiesForChannel(e),
                n = E.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, $.H)(e.location),
                        n = L.Ay.getSelfEmbeddedActivityForChannel(t);
                    null == n
                        ? this.leaveActivity({ location: e.location, applicationId: e.applicationId })
                        : null == i && this.hidePIPEmbed({ location: n.location, applicationId: n.applicationId });
                }
            });
        }
        i = e ?? void 0;
    };
    handleActivityWebViewRelease = () => {
        this.releaseWebView();
    };
    handleActivityLaunchSuccess = (e) => {
        let { nonce: t, applicationId: n } = e;
        eo(n, t), (0, M.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: s, isStart: a, locationKind: o } = e,
            l = ea(s, n),
            u = await (0, K.f)(t, s);
        this.showLaunchErrorModal(u.message);
        let c = m.A.getChannel(i),
            d = f.A.getRawThermalState();
        T.default.track(ee.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
            channel_id: i,
            guild_id: r ?? c?.getGuildId(),
            application_id: s,
            raw_thermal_state: d,
            is_activity_start: a,
            channel_type: c?.type,
            location_stack: l?.locations,
            error_type: u.errorType,
            error_status: u.errorStatus,
            error_code: u.errorCode,
            source: l?.source,
            embedded_activity_location_kind: o,
        });
    };
    handleActivityLaunchCancel = (e) => {
        let { nonce: t, applicationId: n } = e;
        ea(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of L.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== ee.YI$.CLOSE_NORMAL &&
                (T.default.track(ee.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = A.A.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== ee.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = L.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: s } = e,
            a = m.A.getChannel(t);
        if (void 0 === a || (p.OU.has(a?.type) && A.A.getVoiceChannelId() !== t)) return;
        let o = L.Ay.getSelfEmbeddedActivityForChannel(t);
        if (o?.applicationId === n) return;
        let l = await _.Ay.fetchApplication(n);
        if (!(0, B.A)()) return void this.showLaunchErrorModal(H.intl.string(H.t.UXoQTp));
        if (!(0, q.A)(l?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(H.intl.string(H.t.uGDCcw));
        let u = a?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: d } = await (0, D.LV)({ guildId: u });
        if (null == (0, w.A)({ applicationId: n, activityConfigs: c, applications: d })) {
            let e = await (0, D.LV)({ guildId: u, force: !0 });
            (0, w.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let h = L.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (h?.userIds.size ?? 0) > 0
            ? await Y({
                  channelId: t,
                  applicationId: n,
                  launchId: h?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: s,
              })
            : await (0, W.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: s,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        L.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, $.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = L.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == en[n.applicationId]) {
            let e;
            n.interactionType === l.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === l.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === l.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                es({ applicationId: n.applicationId, nonce: t, locations: e }) && (ei[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = ei[t];
        if (null == i) return;
        let r = en[i];
        null != r && (r.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = ei[t];
        null != n && (delete ei[t], eo(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = ei[t];
        null != n && (delete ei[t], ea(n, t));
    };
}

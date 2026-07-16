"use strict";
let i;
n.d(t, { iG: () => eE, Ay: () => eA, Pd: () => eu, DV: () => e_ });
var r = n(132500),
    a = n(636537),
    s = n(228366),
    l = n(367513),
    o = n(155718),
    d = n(272355),
    c = n(793574),
    u = n(240591),
    _ = n(627363),
    E = n(313961),
    A = n(655087),
    h = n(95701),
    I = n(280450),
    f = n(734057),
    p = n(763827),
    T = n(309010),
    m = n(287809),
    g = n(174459),
    S = n(625494),
    N = n(723702),
    C = n(240248),
    R = n(17928);
function O() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let L = O();
class y extends R.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        L = { ...O(), ...(e ?? {}) };
    }
    getState() {
        return L;
    }
}
let D = new y(s.h, {
    LOGOUT: function () {
        L = O();
    },
});
var v = n(795816),
    b = n(933958),
    M = n(692957),
    P = n(956518),
    U = n(157559),
    w = n(192552),
    G = n(395671),
    x = n(71393),
    k = n(576705),
    F = n(977997),
    V = n(62583),
    B = n(170148),
    H = n(550151),
    j = n(375708);
async function W(e) {
    let {
            channelId: t,
            applicationId: n,
            launchId: i,
            inputApplication: r,
            analyticsLocations: a,
            launchingComponentId: s,
            sectionName: l,
            inviterUserId: o,
        } = e,
        d = b.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == i || e.launchId === i),
        ),
        c = r;
    if (null == c) {
        let e = await _.Ay.fetchApplication(n);
        c = G.Ay.createFromServer(e);
    }
    if (null == d || null == c) return;
    let u = m.default.getCurrentUser();
    async function E() {
        null != d &&
            (await (0, V.A)({
                applicationId: d.applicationId,
                activityChannelId: t,
                locationObject: {},
                analyticsLocations: a,
                componentId: s,
                sectionName: l,
                inviterUserId: o,
            }));
    }
    !(function (e) {
        let { embeddedActivityJoinability: t, handleCanJoin: n } = e;
        switch (t) {
            case H.Gy.CAN_JOIN:
                n?.();
                break;
            case H.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, w.i)();
                break;
            case H.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                U.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t.UXoQTp), hideActionSheet: !1 });
                break;
            case H.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                U.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t.uGDCcw), hideActionSheet: !1 });
                break;
            case H.Gy.ACTIVITY_AGE_GATED:
                U.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case H.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case H.Gy.CHANNEL_FULL:
            case H.Gy.NO_CHANNEL:
            case H.Gy.NO_USER:
                U.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, H.Ay)({
            userId: u?.id,
            application: c,
            channelId: t,
            currentUser: u,
            isActivitiesEnabledForCurrentPlatform: (0, B.A)(),
            ChannelStore: f.A,
            VoiceStateStore: F.A,
            PermissionStore: k.A,
            GuildStore: x.A,
        }),
        handleCanJoin: E,
    });
}
var Y = n(956549),
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
    return { releasePhase: e?.activity?.client_platform_config[(0, z.A)((0, N.getOS)())].release_phase };
}
function ea(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((en[t] = { nonce: n, locations: i, source: r }), !0);
}
function es(e, t) {
    let n = en[e];
    if (null != n && n.nonce === t) return delete en[e], n;
}
function el(e, t) {
    setTimeout(() => es(e, t), 2e3);
}
function eo(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    ea({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function ed(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = b.Ay.getEmbeddedActivityDurationMs(n.id, t),
        s = I.default.getSessionId();
    null != i &&
        null != s &&
        (await a.Bo.post({
            url: ee.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = et[t],
        o = (0, $.H)(n),
        d = (0, $.D)(n),
        c = f.A.getChannel(o),
        u = m.default.getCurrentUser();
    if (null == l || null == u || null != l.connectedSince) return;
    let _ = b.Ay.getShelfActivities(d),
        E = (0, M.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: h } = er(E),
        p = A.A.getRawThermalState();
    g.default.track(ee.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: o,
        guild_id: d,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: u.premiumType,
        raw_thermal_state: p,
        release_phase: h,
        shelf_rank: E?.activity?.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        g.default.track(ee.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: o,
            guild_id: d,
            application_id: t,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: p,
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
        participants: a,
        embeddedActivity: s,
        location: o,
        inviterUserId: d,
    } = e;
    if (((0, X.Q)(), (0, J.y)({ applicationId: t })))
        return void (0, Q.j$)(t, {
            isStart: i,
            inviterUserId: d,
            channelId: (0, $.H)(o),
            guildId: (0, $.D)(o),
            locationKind: o.kind,
            launchId: s.launchId,
            compositeInstanceId: s.compositeInstanceId,
            activitiesInfraVersion: "location" in s ? 2 : 1,
        });
    let c = I.default.getId(),
        _ = a.find((e) => e.userId === c),
        h = (0, $.H)(o),
        T = (0, $.D)(o),
        S = f.A.getChannel(h);
    if ((i && null != S && S.isPrivate() && n && null == _ && l.A.selectParticipant(S.id, null), null == _)) return;
    let N = p.A.getMediaSessionId(),
        R = s.compositeInstanceId,
        O = null == N && S?.isVocal() === !0 && S?.isPrivate() === !1;
    if (null == R || O) return;
    let L = (0, r.A)(),
        y = "location" in s ? 2 : 1,
        v = m.default.getCurrentUser();
    if (null == v) return;
    let P = b.Ay.getShelfActivities(T),
        U = D.getState().shelfOrder,
        w = (0, M.A)({ applicationId: t, activityConfigs: P }),
        G = 1 + U.findIndex((e) => e === t),
        { releasePhase: x } = er(w),
        k = A.A.getRawThermalState(),
        F = null != N ? [N] : [],
        V = {
            activitySessionId: R,
            activityUserSessionId: L,
            launchId: s.launchId,
            mediaSessionIds: F,
            activitiesInfraVersion: y,
        };
    et[t] = V;
    let B = en[t];
    (0, C.uJ)(_.nonce) || _.nonce === B?.nonce || (B = void 0),
        g.default.track(ee.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: h,
            guild_id: T,
            media_session_id: F[0],
            activity_session_id: R,
            application_id: t,
            location_stack: B?.locations,
            user_premium_tier: v.premiumType,
            raw_thermal_state: k,
            n_participants: null != S ? E.A.getUserParticipantCount(S.id) : null,
            is_activity_start: i,
            release_phase: x,
            shelf_rank: w?.activity?.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: L,
            channel_type: S?.type,
            source: B?.source,
            command_context_type: null != S ? (0, u.ud)(S, t) : null,
            invite_inviter_id: d,
            interaction_id: B?.interactionId,
            embedded_activity_location_kind: o.kind,
        }),
        g.default.track(ee.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: B?.locations,
            channel_id: h,
            channel_type: S?.type,
            guild_id: T,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: F[0],
            activity_user_session_id: L,
            raw_thermal_state: k,
            is_activity_start: i,
            shelf_rank: w?.activity?.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: y,
            embedded_activity_location_kind: o.kind,
        });
}
function eu(e) {
    let t = (0, Q.Sr)(e);
    if (null == t) return;
    let {
            isStart: n,
            inviterUserId: i,
            channelId: a,
            guildId: s,
            locationKind: l,
            launchId: o,
            compositeInstanceId: d,
            activitiesInfraVersion: c,
        } = t,
        _ = m.default.getCurrentUser();
    if (null == _) return;
    let h = null != a ? f.A.getChannel(a) : null,
        I = p.A.getMediaSessionId(),
        T = null != I ? [I] : [],
        S = (0, r.A)();
    et[e] = {
        activitySessionId: d,
        activityUserSessionId: S,
        launchId: o,
        mediaSessionIds: T,
        activitiesInfraVersion: c,
        connectedSince: Date.now(),
        frameChannelId: a,
        frameGuildId: s,
        frameLocationKind: l,
    };
    let N = b.Ay.getShelfActivities(s),
        C = D.getState().shelfOrder,
        R = (0, M.A)({ applicationId: e, activityConfigs: N }),
        O = 1 + C.findIndex((t) => t === e),
        { releasePhase: L } = er(R),
        y = A.A.getRawThermalState(),
        v = en[e];
    g.default.track(ee.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: a,
        guild_id: s,
        media_session_id: T[0],
        activity_session_id: d,
        application_id: e,
        location_stack: v?.locations,
        user_premium_tier: _.premiumType,
        raw_thermal_state: y,
        n_participants: null != h ? E.A.getUserParticipantCount(h.id) : null,
        is_activity_start: n,
        release_phase: L,
        shelf_rank: R?.activity?.shelf_rank,
        shelf_sorted_rank: O > 0 ? O : null,
        activity_user_session_id: S,
        channel_type: h?.type,
        source: v?.source,
        command_context_type: null != h ? (0, u.ud)(h, e) : null,
        invite_inviter_id: i,
        interaction_id: v?.interactionId,
        embedded_activity_location_kind: l,
    }),
        g.default.track(ee.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: v?.locations,
            channel_id: a,
            channel_type: h?.type,
            guild_id: s,
            application_id: e,
            instance_id: o,
            initial_media_session_id: T[0],
            activity_user_session_id: S,
            raw_thermal_state: y,
            is_activity_start: n,
            shelf_rank: R?.activity?.shelf_rank,
            shelf_sorted_rank: O > 0 ? O : null,
            activities_infra_version: c,
            embedded_activity_location_kind: l,
        });
}
function e_(e) {
    return et[e];
}
function eE(e) {
    let t = et[e],
        n = m.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        a = null != i ? f.A.getChannel(i) : null,
        s = b.Ay.getShelfActivities(r),
        l = (0, M.A)({ applicationId: e, activityConfigs: s }),
        { releasePhase: o } = er(l),
        d = A.A.getRawThermalState(),
        c = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    g.default.track(ee.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: i,
        guild_id: r,
        media_session_id: t.mediaSessionIds[0],
        activity_session_id: t.activitySessionId,
        application_id: e,
        duration_ms: c,
        user_premium_tier: n.premiumType,
        raw_thermal_state: d,
        release_phase: o,
        shelf_rank: l?.activity?.shelf_rank,
        activity_user_session_id: t.activityUserSessionId,
        channel_type: a?.type,
        media_session_ids: t.mediaSessionIds,
        embedded_activity_location_kind: t.frameLocationKind,
    }),
        g.default.track(ee.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: i,
            guild_id: r,
            application_id: e,
            instance_ids: null != t.launchId ? [t.launchId] : void 0,
            media_session_ids: t.mediaSessionIds,
            activity_user_session_id: t.activityUserSessionId,
            raw_thermal_state: d,
            duration_ms: c,
            embedded_activity_location_kind: t.frameLocationKind,
        }),
        delete et[e];
}
class eA extends d.A {
    _initialize() {
        T.Ay.addChangeListener(this.handleSelectedChannelUpdate),
            S._.subscribe(ee.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.subscribe(ee.jej.OPEN_EMBEDDED_ACTIVITY, ec),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eo),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            s.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", ed),
            s.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            s.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            s.h.subscribe("CALL_DELETE", this.handleCallDelete),
            s.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            s.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            s.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            s.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            s.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            s.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            s.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    _terminate() {
        T.Ay.removeChangeListener(this.handleSelectedChannelUpdate),
            S._.unsubscribe(ee.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.unsubscribe(ee.jej.OPEN_EMBEDDED_ACTIVITY, ec),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eo),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", ed),
            s.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            s.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            s.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            s.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            s.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            s.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            s.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            s.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            s.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            s.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
    }
    handleSelectedChannelUpdate = () => {
        let e = T.Ay.getVoiceChannelId();
        for (let { location: t, applicationId: n } of b.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, $.H)(t);
            null != i && (0, Z.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = b.Ay.getEmbeddedActivitiesForChannel(e),
                n = I.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, $.H)(e.location),
                        n = b.Ay.getSelfEmbeddedActivityForChannel(t);
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
        el(n, t), (0, P.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: a, isStart: s, locationKind: l } = e,
            o = es(a, n),
            d = await (0, K.f)(t, a);
        this.showLaunchErrorModal(d.message);
        let c = f.A.getChannel(i),
            u = A.A.getRawThermalState();
        g.default.track(ee.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
            channel_id: i,
            guild_id: r ?? c?.getGuildId(),
            application_id: a,
            raw_thermal_state: u,
            is_activity_start: s,
            channel_type: c?.type,
            location_stack: o?.locations,
            error_type: d.errorType,
            error_status: d.errorStatus,
            error_code: d.errorCode,
            source: o?.source,
            embedded_activity_location_kind: l,
        });
    };
    handleActivityLaunchCancel = (e) => {
        let { nonce: t, applicationId: n } = e;
        es(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of b.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== ee.YI$.CLOSE_NORMAL &&
                (g.default.track(ee.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = T.Ay.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== ee.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = b.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: a } = e,
            s = f.A.getChannel(t);
        if (void 0 === s || (h.OU.has(s?.type) && T.Ay.getVoiceChannelId() !== t)) return;
        let l = b.Ay.getSelfEmbeddedActivityForChannel(t);
        if (l?.applicationId === n) return;
        let o = await _.Ay.fetchApplication(n);
        if (!(0, B.A)()) return void this.showLaunchErrorModal(j.intl.string(j.t.UXoQTp));
        if (!(0, q.A)(o?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(j.intl.string(j.t.uGDCcw));
        let d = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: u } = await (0, v.LV)({ guildId: d });
        if (null == (0, M.A)({ applicationId: n, activityConfigs: c, applications: u })) {
            let e = await (0, v.LV)({ guildId: d, force: !0 });
            (0, M.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let E = b.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (E?.userIds.size ?? 0) > 0
            ? await W({
                  channelId: t,
                  applicationId: n,
                  launchId: E?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: a,
              })
            : await (0, Y.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        b.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, $.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = b.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == en[n.applicationId]) {
            let e;
            n.interactionType === o.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === o.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === o.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                ea({ applicationId: n.applicationId, nonce: t, locations: e }) && (ei[t] = n.applicationId);
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
        null != n && (delete ei[t], el(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = ei[t];
        null != n && (delete ei[t], es(n, t));
    };
}

"use strict";
let i;
n.d(t, { iG: () => eE, Ay: () => eA, Pd: () => eu, DV: () => e_ });
var r = n(132500),
    a = n(562465),
    s = n(228366),
    l = n(367513),
    o = n(155718),
    d = n(272355),
    c = n(793574),
    u = n(240591),
    _ = n(627363),
    E = n(313961),
    A = n(655087),
    h = n(625180),
    I = n(95701),
    f = n(280450),
    p = n(734057),
    T = n(763827),
    m = n(309010),
    g = n(287809),
    S = n(174459),
    N = n(625494),
    C = n(723702),
    O = n(240248),
    R = n(17928);
function L() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let D = L();
class y extends R.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        D = { ...L(), ...(e ?? {}) };
    }
    getState() {
        return D;
    }
}
let v = new y(s.h, {
    LOGOUT: function () {
        D = L();
    },
});
var b = n(795816),
    M = n(933958),
    P = n(692957),
    U = n(956518),
    w = n(157559),
    G = n(192552),
    x = n(395671),
    k = n(71393),
    F = n(576705),
    V = n(977997),
    B = n(62583),
    H = n(170148),
    j = n(550151),
    W = n(375708);
async function Y(e) {
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
        d = M.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == i || e.launchId === i),
        ),
        c = r;
    if (null == c) {
        let e = await _.Ay.fetchApplication(n);
        c = x.Ay.createFromServer(e);
    }
    if (null == d || null == c) return;
    let u = g.default.getCurrentUser();
    async function E() {
        null != d &&
            (await (0, B.A)({
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
            case j.Gy.CAN_JOIN:
                n?.();
                break;
            case j.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, G.i)();
                break;
            case j.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                w.A.show({ title: W.intl.string(W.t.PtobXW), body: W.intl.string(W.t.UXoQTp), hideActionSheet: !1 });
                break;
            case j.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                w.A.show({ title: W.intl.string(W.t.PtobXW), body: W.intl.string(W.t.uGDCcw), hideActionSheet: !1 });
                break;
            case j.Gy.ACTIVITY_AGE_GATED:
                w.A.show({ title: W.intl.string(W.t.PtobXW), body: W.intl.string(W.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case j.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case j.Gy.CHANNEL_FULL:
            case j.Gy.NO_CHANNEL:
            case j.Gy.NO_USER:
                w.A.show({ title: W.intl.string(W.t.PtobXW), body: W.intl.string(W.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, j.Ay)({
            userId: u?.id,
            application: c,
            channelId: t,
            currentUser: u,
            isActivitiesEnabledForCurrentPlatform: (0, H.A)(),
            ChannelStore: p.A,
            VoiceStateStore: V.A,
            PermissionStore: F.A,
            GuildStore: k.A,
        }),
        handleCanJoin: E,
    });
}
var K = n(956549),
    $ = n(907645),
    z = n(969151),
    q = n(847381),
    Z = n(166352),
    X = n(108959),
    Q = n(400115),
    J = n(859007),
    ee = n(652215);
let et = {},
    en = {},
    ei = {};
function er(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, q.A)((0, C.getOS)())].release_phase };
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
        r = M.Ay.getEmbeddedActivityDurationMs(n.id, t),
        s = f.default.getSessionId();
    null != i &&
        null != s &&
        (await a.Bo.post({
            url: ee.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: s },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = et[t],
        o = (0, z.H)(n),
        d = (0, z.D)(n),
        c = p.A.getChannel(o),
        u = g.default.getCurrentUser();
    if (null == l || null == u || null != l.connectedSince) return;
    let _ = M.Ay.getShelfActivities(d),
        E = (0, P.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: h } = er(E),
        I = A.A.getRawThermalState();
    S.default.track(ee.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: o,
        guild_id: d,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: u.premiumType,
        raw_thermal_state: I,
        release_phase: h,
        shelf_rank: E?.activity?.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        S.default.track(ee.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: o,
            guild_id: d,
            application_id: t,
            instance_ids: null != l.launchId ? [l.launchId] : void 0,
            media_session_ids: l.mediaSessionIds,
            activity_user_session_id: l.activityUserSessionId,
            raw_thermal_state: I,
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
    if ((h.A.clearMainFrameSlot(), (0, J.y)({ applicationId: t })))
        return void (0, Q.j$)(t, {
            isStart: i,
            inviterUserId: d,
            channelId: (0, z.H)(o),
            guildId: (0, z.D)(o),
            locationKind: o.kind,
            launchId: s.launchId,
            compositeInstanceId: s.compositeInstanceId,
            activitiesInfraVersion: "location" in s ? 2 : 1,
        });
    let c = f.default.getId(),
        _ = a.find((e) => e.userId === c),
        I = (0, z.H)(o),
        m = (0, z.D)(o),
        N = p.A.getChannel(I);
    if ((i && null != N && N.isPrivate() && n && null == _ && l.A.selectParticipant(N.id, null), null == _)) return;
    let C = T.A.getMediaSessionId(),
        R = s.compositeInstanceId,
        L = null == C && N?.isVocal() === !0 && N?.isPrivate() === !1;
    if (null == R || L) return;
    let D = (0, r.A)(),
        y = "location" in s ? 2 : 1,
        b = g.default.getCurrentUser();
    if (null == b) return;
    let U = M.Ay.getShelfActivities(m),
        w = v.getState().shelfOrder,
        G = (0, P.A)({ applicationId: t, activityConfigs: U }),
        x = 1 + w.findIndex((e) => e === t),
        { releasePhase: k } = er(G),
        F = A.A.getRawThermalState(),
        V = null != C ? [C] : [],
        B = {
            activitySessionId: R,
            activityUserSessionId: D,
            launchId: s.launchId,
            mediaSessionIds: V,
            activitiesInfraVersion: y,
        };
    et[t] = B;
    let H = en[t];
    (0, O.uJ)(_.nonce) || _.nonce === H?.nonce || (H = void 0),
        S.default.track(ee.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: I,
            guild_id: m,
            media_session_id: V[0],
            activity_session_id: R,
            application_id: t,
            location_stack: H?.locations,
            user_premium_tier: b.premiumType,
            raw_thermal_state: F,
            n_participants: null != N ? E.A.getUserParticipantCount(N.id) : null,
            is_activity_start: i,
            release_phase: k,
            shelf_rank: G?.activity?.shelf_rank,
            shelf_sorted_rank: x > 0 ? x : null,
            activity_user_session_id: D,
            channel_type: N?.type,
            source: H?.source,
            command_context_type: null != N ? (0, u.ud)(N, t) : null,
            invite_inviter_id: d,
            interaction_id: H?.interactionId,
            embedded_activity_location_kind: o.kind,
        }),
        S.default.track(ee.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: H?.locations,
            channel_id: I,
            channel_type: N?.type,
            guild_id: m,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: V[0],
            activity_user_session_id: D,
            raw_thermal_state: F,
            is_activity_start: i,
            shelf_rank: G?.activity?.shelf_rank,
            shelf_sorted_rank: x > 0 ? x : null,
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
        _ = g.default.getCurrentUser();
    if (null == _) return;
    let h = null != a ? p.A.getChannel(a) : null,
        I = T.A.getMediaSessionId(),
        f = null != I ? [I] : [],
        m = (0, r.A)();
    et[e] = {
        activitySessionId: d,
        activityUserSessionId: m,
        launchId: o,
        mediaSessionIds: f,
        activitiesInfraVersion: c,
        connectedSince: Date.now(),
        frameChannelId: a,
        frameGuildId: s,
        frameLocationKind: l,
    };
    let N = M.Ay.getShelfActivities(s),
        C = v.getState().shelfOrder,
        O = (0, P.A)({ applicationId: e, activityConfigs: N }),
        R = 1 + C.findIndex((t) => t === e),
        { releasePhase: L } = er(O),
        D = A.A.getRawThermalState(),
        y = en[e];
    S.default.track(ee.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: a,
        guild_id: s,
        media_session_id: f[0],
        activity_session_id: d,
        application_id: e,
        location_stack: y?.locations,
        user_premium_tier: _.premiumType,
        raw_thermal_state: D,
        n_participants: null != h ? E.A.getUserParticipantCount(h.id) : null,
        is_activity_start: n,
        release_phase: L,
        shelf_rank: O?.activity?.shelf_rank,
        shelf_sorted_rank: R > 0 ? R : null,
        activity_user_session_id: m,
        channel_type: h?.type,
        source: y?.source,
        command_context_type: null != h ? (0, u.ud)(h, e) : null,
        invite_inviter_id: i,
        interaction_id: y?.interactionId,
        embedded_activity_location_kind: l,
    }),
        S.default.track(ee.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: y?.locations,
            channel_id: a,
            channel_type: h?.type,
            guild_id: s,
            application_id: e,
            instance_id: o,
            initial_media_session_id: f[0],
            activity_user_session_id: m,
            raw_thermal_state: D,
            is_activity_start: n,
            shelf_rank: O?.activity?.shelf_rank,
            shelf_sorted_rank: R > 0 ? R : null,
            activities_infra_version: c,
            embedded_activity_location_kind: l,
        });
}
function e_(e) {
    return et[e];
}
function eE(e) {
    let t = et[e],
        n = g.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        a = null != i ? p.A.getChannel(i) : null,
        s = M.Ay.getShelfActivities(r),
        l = (0, P.A)({ applicationId: e, activityConfigs: s }),
        { releasePhase: o } = er(l),
        d = A.A.getRawThermalState(),
        c = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    S.default.track(ee.HAw.ACTIVITY_SESSION_LEFT, {
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
        S.default.track(ee.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        m.Ay.addChangeListener(this.handleSelectedChannelUpdate),
            N._.subscribe(ee.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            N._.subscribe(ee.jej.OPEN_EMBEDDED_ACTIVITY, ec),
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
        m.Ay.removeChangeListener(this.handleSelectedChannelUpdate),
            N._.unsubscribe(ee.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            N._.unsubscribe(ee.jej.OPEN_EMBEDDED_ACTIVITY, ec),
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
        let e = m.Ay.getVoiceChannelId();
        for (let { location: t, applicationId: n } of M.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, z.H)(t);
            null != i && (0, X.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = M.Ay.getEmbeddedActivitiesForChannel(e),
                n = f.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, z.H)(e.location),
                        n = M.Ay.getSelfEmbeddedActivityForChannel(t);
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
        el(n, t), (0, U.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: a, isStart: s, locationKind: l } = e,
            o = es(a, n),
            d = await (0, $.f)(t, a);
        this.showLaunchErrorModal(d.message);
        let c = p.A.getChannel(i),
            u = A.A.getRawThermalState();
        S.default.track(ee.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
            for (let { applicationId: e, location: t } of M.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== ee.YI$.CLOSE_NORMAL &&
                (S.default.track(ee.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = m.Ay.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== ee.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = M.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: a } = e,
            s = p.A.getChannel(t);
        if (void 0 === s || (I.OU.has(s?.type) && m.Ay.getVoiceChannelId() !== t)) return;
        let l = M.Ay.getSelfEmbeddedActivityForChannel(t);
        if (l?.applicationId === n) return;
        let o = await _.Ay.fetchApplication(n);
        if (!(0, H.A)()) return void this.showLaunchErrorModal(W.intl.string(W.t.UXoQTp));
        if (!(0, Z.A)(o?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(W.intl.string(W.t.uGDCcw));
        let d = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: u } = await (0, b.LV)({ guildId: d });
        if (null == (0, P.A)({ applicationId: n, activityConfigs: c, applications: u })) {
            let e = await (0, b.LV)({ guildId: d, force: !0 });
            (0, P.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let E = M.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (E?.userIds.size ?? 0) > 0
            ? await Y({
                  channelId: t,
                  applicationId: n,
                  launchId: E?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: a,
              })
            : await (0, K.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        M.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, z.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = M.Ay.getSelfEmbeddedActivityForChannel(t.id);
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

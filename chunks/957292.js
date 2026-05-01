"use strict";
let i;
n.d(t, { A: () => ed, D: () => ec });
var r = n(835245),
    s = n(636537),
    a = n(228366),
    o = n(367513),
    l = n(155718),
    u = n(272355),
    c = n(793574),
    d = n(240591),
    _ = n(627363),
    f = n(313961),
    h = n(655087),
    p = n(95701),
    E = n(495544),
    m = n(734057),
    g = n(763827),
    A = n(309010),
    I = n(287809),
    T = n(174459),
    S = n(625494),
    N = n(723702),
    y = n(240248),
    C = n(17928);
function v() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let O = v();
class R extends C.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        O = { ...v(), ...(e ?? {}) };
    }
    getState() {
        return O;
    }
}
let b = new R(a.h, {
    LOGOUT: function () {
        O = v();
    },
});
var D = n(795816),
    L = n(933958),
    w = n(692957),
    M = n(956518),
    P = n(157559),
    x = n(192552),
    U = n(395671),
    k = n(71393),
    G = n(576705),
    F = n(977997),
    V = n(62583),
    B = n(170148),
    H = n(550151),
    j = n(375708);
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
        c = U.Ay.createFromServer(e);
    }
    if (null == u || null == c) return;
    let d = I.default.getCurrentUser();
    async function f() {
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
            case H.Gy.CAN_JOIN:
                n?.();
                break;
            case H.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, x.i)();
                break;
            case H.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                P.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t.UXoQTp), hideActionSheet: !1 });
                break;
            case H.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                P.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t.uGDCcw), hideActionSheet: !1 });
                break;
            case H.Gy.ACTIVITY_AGE_GATED:
                P.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case H.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case H.Gy.CHANNEL_FULL:
            case H.Gy.NO_CHANNEL:
            case H.Gy.NO_USER:
                P.A.show({ title: j.intl.string(j.t.PtobXW), body: j.intl.string(j.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, H.Ay)({
            userId: d?.id,
            application: c,
            channelId: t,
            currentUser: d,
            isActivitiesEnabledForCurrentPlatform: (0, B.A)(),
            ChannelStore: m.A,
            VoiceStateStore: F.A,
            PermissionStore: G.A,
            GuildStore: k.A,
        }),
        handleCanJoin: f,
    });
}
var W = n(956549),
    K = n(907645),
    z = n(969151),
    $ = n(847381),
    q = n(166352),
    Z = n(108959),
    X = n(582776),
    Q = n(859007),
    J = n(652215);
let ee = {},
    et = {},
    en = {};
function ei(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, $.A)((0, N.getOS)())].release_phase };
}
function er(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((et[t] = { nonce: n, locations: i, source: r }), !0);
}
function es(e, t) {
    let n = et[e];
    if (null != n && n.nonce === t) return delete et[e], n;
}
function ea(e, t) {
    setTimeout(() => es(e, t), 2e3);
}
function eo(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    er({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function el(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = L.Ay.getEmbeddedActivityDurationMs(n.id, t),
        a = E.default.getSessionId();
    null != i &&
        null != a &&
        (await s.Bo.post({
            url: J.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: a },
            retries: 2,
            rejectWithError: !1,
        }));
    let o = ee[t],
        l = (0, z.H)(n),
        u = (0, z.D)(n),
        c = m.A.getChannel(l),
        d = I.default.getCurrentUser();
    if (null == o || null == d) return;
    let _ = L.Ay.getShelfActivities(u),
        f = (0, w.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: p } = ei(f),
        g = h.A.getRawThermalState();
    T.default.track(J.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: l,
        guild_id: u,
        media_session_id: o.mediaSessionIds[0],
        activity_session_id: o.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: d.premiumType,
        raw_thermal_state: g,
        release_phase: p,
        shelf_rank: f?.activity?.shelf_rank,
        activity_user_session_id: o.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: o.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        T.default.track(J.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete ee[t];
}
function eu(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: s,
        embeddedActivity: a,
        location: l,
        inviterUserId: u,
    } = e;
    if (((0, X.Q)(), (0, Q.y)({ applicationId: t }))) return;
    let c = E.default.getId(),
        _ = s.find((e) => e.userId === c),
        p = (0, z.H)(l),
        A = (0, z.D)(l),
        S = m.A.getChannel(p);
    if ((i && null != S && S.isPrivate() && n && null == _ && o.A.selectParticipant(S.id, null), null == _)) return;
    let N = g.A.getMediaSessionId(),
        C = a.compositeInstanceId,
        v = null == N && S?.isVocal() === !0 && S?.isPrivate() === !1;
    if (null == C || v) return;
    let O = (0, r.A)(),
        R = "location" in a ? 2 : 1,
        D = I.default.getCurrentUser();
    if (null == D) return;
    let M = L.Ay.getShelfActivities(A),
        P = b.getState().shelfOrder,
        x = (0, w.A)({ applicationId: t, activityConfigs: M }),
        U = 1 + P.findIndex((e) => e === t),
        { releasePhase: k } = ei(x),
        G = h.A.getRawThermalState(),
        F = null != N ? [N] : [],
        V = {
            activitySessionId: C,
            activityUserSessionId: O,
            launchId: a.launchId,
            mediaSessionIds: F,
            activitiesInfraVersion: R,
        };
    ee[t] = V;
    let B = et[t];
    (0, y.uJ)(_.nonce) || _.nonce === B?.nonce || (B = void 0),
        T.default.track(J.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: p,
            guild_id: A,
            media_session_id: F[0],
            activity_session_id: C,
            application_id: t,
            location_stack: B?.locations,
            user_premium_tier: D.premiumType,
            raw_thermal_state: G,
            n_participants: null != S ? f.A.getUserParticipantCount(S.id) : null,
            is_activity_start: i,
            release_phase: k,
            shelf_rank: x?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activity_user_session_id: O,
            channel_type: S?.type,
            source: B?.source,
            command_context_type: null != S ? (0, d.ud)(S, t) : null,
            invite_inviter_id: u,
            interaction_id: B?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        T.default.track(J.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: B?.locations,
            channel_id: p,
            channel_type: S?.type,
            guild_id: A,
            application_id: t,
            instance_id: a.launchId,
            initial_media_session_id: F[0],
            activity_user_session_id: O,
            raw_thermal_state: G,
            is_activity_start: i,
            shelf_rank: x?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activities_infra_version: R,
            embedded_activity_location_kind: l.kind,
        });
}
function ec(e) {
    return ee[e];
}
class ed extends u.A {
    _initialize() {
        A.A.addChangeListener(this.handleSelectedChannelUpdate),
            S._.subscribe(J.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.subscribe(J.jej.OPEN_EMBEDDED_ACTIVITY, eu),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eo),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            a.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            a.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", el),
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
            S._.unsubscribe(J.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            S._.unsubscribe(J.jej.OPEN_EMBEDDED_ACTIVITY, eu),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eo),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            a.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", el),
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
            let i = (0, z.H)(t);
            null != i && (0, Z.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = L.Ay.getEmbeddedActivitiesForChannel(e),
                n = E.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, z.H)(e.location),
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
        ea(n, t), (0, M.sF)() && this.showDevShelfOverrideEnabled();
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: s, isStart: a, locationKind: o } = e,
            l = es(s, n),
            u = await (0, K.f)(t, s);
        this.showLaunchErrorModal(u.message);
        let c = m.A.getChannel(i),
            d = h.A.getRawThermalState();
        T.default.track(J.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
        es(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of L.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== J.YI$.CLOSE_NORMAL &&
                (T.default.track(J.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
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
        if (e.state !== J.S7L.DISCONNECTED) return;
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
        if (!(0, B.A)()) return void this.showLaunchErrorModal(j.intl.string(j.t.UXoQTp));
        if (!(0, q.A)(l?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(j.intl.string(j.t.uGDCcw));
        let u = a?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: d } = await (0, D.LV)({ guildId: u });
        if (null == (0, w.A)({ applicationId: n, activityConfigs: c, applications: d })) {
            let e = await (0, D.LV)({ guildId: u, force: !0 });
            (0, w.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let f = L.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (f?.userIds.size ?? 0) > 0
            ? await Y({
                  channelId: t,
                  applicationId: n,
                  launchId: f?.launchId,
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
                r = (0, z.D)(n);
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
        if (null == et[n.applicationId]) {
            let e;
            n.interactionType === l.G4.APPLICATION_COMMAND
                ? (e = [c.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === l.G4.MESSAGE_COMPONENT
                  ? (e = [c.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === l.G4.MODAL_SUBMIT && (e = [c.A.INTERACTION_MODAL_SUBMIT]),
                er({ applicationId: n.applicationId, nonce: t, locations: e }) && (en[t] = n.applicationId);
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = en[t];
        if (null == i) return;
        let r = et[i];
        null != r && (r.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = en[t];
        null != n && (delete en[t], ea(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = en[t];
        null != n && (delete en[t], es(n, t));
    };
}

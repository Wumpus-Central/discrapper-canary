let i;
n.d(t, { ms: () => eh, iG: () => eI, Ay: () => ef, Pd: () => eE, DV: () => eA });
var r = n(132500),
    a = n(344351),
    s = n(636537),
    l = n(228366),
    o = n(367513),
    d = n(155718),
    c = n(272355),
    u = n(793574),
    _ = n(240591),
    E = n(627363),
    A = n(198052),
    h = n(655087),
    I = n(625180),
    f = n(95701),
    p = n(280450),
    T = n(734057),
    g = n(763827),
    m = n(309010),
    S = n(287809),
    N = n(174459),
    C = n(625494),
    O = n(723702),
    R = n(240248),
    L = n(17928);
function y() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let D = y();
class v extends L.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        D = { ...y(), ...(e ?? {}) };
    }
    getState() {
        return D;
    }
}
let b = new v(l.h, {
    LOGOUT: function () {
        D = y();
    },
});
var M = n(795816),
    P = n(933958),
    U = n(692957),
    w = n(956518),
    G = n(157559),
    x = n(192552),
    k = n(395671),
    F = n(71393),
    B = n(576705),
    V = n(977997),
    H = n(62583),
    j = n(170148),
    W = n(550151),
    Y = n(375708);
async function K(e) {
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
        d = P.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == i || e.launchId === i),
        ),
        c = r;
    if (null == c) {
        let e = await E.Ay.fetchApplication(n);
        c = k.Ay.createFromServer(e);
    }
    if (null == d || null == c) return;
    let u = S.default.getCurrentUser();
    async function _() {
        null != d &&
            (await (0, H.A)({
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
            case W.Gy.CAN_JOIN:
                n?.();
                break;
            case W.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, x.i)();
                break;
            case W.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                G.A.show({ title: Y.intl.string(Y.t.PtobXW), body: Y.intl.string(Y.t.UXoQTp), hideActionSheet: !1 });
                break;
            case W.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                G.A.show({ title: Y.intl.string(Y.t.PtobXW), body: Y.intl.string(Y.t.uGDCcw), hideActionSheet: !1 });
                break;
            case W.Gy.ACTIVITY_AGE_GATED:
                G.A.show({ title: Y.intl.string(Y.t.PtobXW), body: Y.intl.string(Y.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case W.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case W.Gy.CHANNEL_FULL:
            case W.Gy.NO_CHANNEL:
            case W.Gy.NO_USER:
                G.A.show({ title: Y.intl.string(Y.t.PtobXW), body: Y.intl.string(Y.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, W.Ay)({
            userId: u?.id,
            application: c,
            channelId: t,
            currentUser: u,
            isActivitiesEnabledForCurrentPlatform: (0, j.A)(),
            ChannelStore: T.A,
            VoiceStateStore: V.A,
            PermissionStore: B.A,
            GuildStore: F.A,
        }),
        handleCanJoin: _,
    });
}
var $ = n(956549),
    z = n(907645),
    X = n(969151),
    q = n(847381),
    Z = n(166352),
    Q = n(108959),
    J = n(400115),
    ee = n(859007),
    et = n(652215);
let en = {},
    ei = {},
    er = {};
function ea(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, q.A)((0, O.getOS)())].release_phase };
}
function es(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((ei[t] = { nonce: n, locations: i, source: r }), !0);
}
function el(e, t) {
    let n = ei[e];
    if (null != n && n.nonce === t) return (delete ei[e], n);
}
function eo(e, t) {
    setTimeout(() => el(e, t), 2e3);
}
function ed(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    es({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function ec(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = P.Ay.getEmbeddedActivityDurationMs(n.id, t),
        a = p.default.getSessionId();
    null != i &&
        null != a &&
        (await s.Bo.post({
            url: et.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: a },
            retries: 2,
            rejectWithError: !1,
        }));
    let l = en[t],
        o = (0, X.H)(n),
        d = (0, X.D)(n),
        c = T.A.getChannel(o),
        u = S.default.getCurrentUser();
    if (null == l || null == u || null != l.connectedSince) return;
    let _ = P.Ay.getShelfActivities(d),
        E = (0, U.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: A } = ea(E),
        I = h.A.getRawThermalState();
    (N.default.track(et.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: o,
        guild_id: d,
        media_session_id: l.mediaSessionIds[0],
        activity_session_id: l.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: u.premiumType,
        raw_thermal_state: I,
        release_phase: A,
        shelf_rank: E?.activity?.shelf_rank,
        activity_user_session_id: l.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: l.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        N.default.track(et.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete en[t]);
}
function eu(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: a,
        embeddedActivity: s,
        location: l,
        inviterUserId: d,
    } = e;
    if ((!0 !== s.renderInFramePool && I.A.clearMainFrameSlot(), (0, ee.y)({ applicationId: t })))
        return void (0, J.j)(t, {
            isStart: i,
            inviterUserId: d,
            channelId: (0, X.H)(l),
            guildId: (0, X.D)(l),
            locationKind: l.kind,
            launchId: s.launchId,
            compositeInstanceId: s.compositeInstanceId,
            activitiesInfraVersion: "location" in s ? 2 : 1,
        });
    let c = p.default.getId(),
        u = a.find((e) => e.userId === c),
        E = (0, X.H)(l),
        f = (0, X.D)(l),
        m = T.A.getChannel(E);
    if ((i && null != m && m.isPrivate() && n && null == u && o.A.selectParticipant(m.id, null), null == u)) return;
    let C = g.A.getMediaSessionId(),
        O = s.compositeInstanceId,
        L = null == C && m?.isVocal() === !0 && m?.isPrivate() === !1;
    if (null == O || L) return;
    let y = (0, r.A)(),
        D = "location" in s ? 2 : 1,
        v = S.default.getCurrentUser();
    if (null == v) return;
    let M = P.Ay.getShelfActivities(f),
        w = b.getState().shelfOrder,
        G = (0, U.A)({ applicationId: t, activityConfigs: M }),
        x = 1 + w.findIndex((e) => e === t),
        { releasePhase: k } = ea(G),
        F = h.A.getRawThermalState(),
        B = null != C ? [C] : [],
        V = {
            activitySessionId: O,
            activityUserSessionId: y,
            launchId: s.launchId,
            mediaSessionIds: B,
            activitiesInfraVersion: D,
        };
    en[t] = V;
    let H = ei[t];
    ((0, R.uJ)(u.nonce) || u.nonce === H?.nonce || (H = void 0),
        N.default.track(et.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: E,
            guild_id: f,
            media_session_id: B[0],
            activity_session_id: O,
            application_id: t,
            location_stack: H?.locations,
            user_premium_tier: v.premiumType,
            raw_thermal_state: F,
            n_participants: null != m ? A.A.getUserParticipantCount(m.id) : null,
            is_activity_start: i,
            release_phase: k,
            shelf_rank: G?.activity?.shelf_rank,
            shelf_sorted_rank: x > 0 ? x : null,
            activity_user_session_id: y,
            channel_type: m?.type,
            source: H?.source,
            command_context_type: null != m ? (0, _.ud)(m, t) : null,
            invite_inviter_id: d,
            interaction_id: H?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        N.default.track(et.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: H?.locations,
            channel_id: E,
            channel_type: m?.type,
            guild_id: f,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: B[0],
            activity_user_session_id: y,
            raw_thermal_state: F,
            is_activity_start: i,
            shelf_rank: G?.activity?.shelf_rank,
            shelf_sorted_rank: x > 0 ? x : null,
            activities_infra_version: D,
            embedded_activity_location_kind: l.kind,
        }));
}
function e_(e, t) {
    let n = (0, J.S)(e),
        i = t ?? n;
    if (null == i) return;
    let r = ei[e];
    return {
        ...i,
        analyticsLocations: i.analyticsLocations ?? r?.locations,
        source: i.source ?? r?.source,
        interactionId: i.interactionId ?? r?.interactionId,
    };
}
function eE(e, t) {
    let n = e_(e, t);
    if (null == n) return;
    let {
            isStart: i,
            inviterUserId: s,
            channelId: l,
            launchId: o,
            compositeInstanceId: d,
            activitiesInfraVersion: c,
            analyticsLocations: u,
            source: E,
            interactionId: I,
        } = n,
        f = S.default.getCurrentUser();
    if (null == f) return;
    let p = null != l ? T.A.getChannel(l) : null,
        m = n.guildId ?? p?.getGuildId() ?? null,
        C = n.locationKind ?? (null == p ? void 0 : null != m ? a.T.GUILD_CHANNEL : a.T.PRIVATE_CHANNEL),
        O = g.A.getMediaSessionId(),
        R = null != O ? [O] : [],
        L = (0, r.A)();
    en[e] = {
        activitySessionId: d,
        activityUserSessionId: L,
        launchId: o,
        mediaSessionIds: R,
        activitiesInfraVersion: c,
        connectedSince: Date.now(),
        frameChannelId: l,
        frameGuildId: m,
        frameLocationKind: C,
    };
    let y = P.Ay.getShelfActivities(m),
        D = b.getState().shelfOrder,
        v = (0, U.A)({ applicationId: e, activityConfigs: y }),
        M = 1 + D.findIndex((t) => t === e),
        { releasePhase: w } = ea(v),
        G = h.A.getRawThermalState();
    (N.default.track(et.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: l,
        guild_id: m,
        media_session_id: R[0],
        activity_session_id: d,
        application_id: e,
        location_stack: u,
        user_premium_tier: f.premiumType,
        raw_thermal_state: G,
        n_participants: null != p ? A.A.getUserParticipantCount(p.id) : null,
        is_activity_start: i,
        release_phase: w,
        shelf_rank: v?.activity?.shelf_rank,
        shelf_sorted_rank: M > 0 ? M : null,
        activity_user_session_id: L,
        channel_type: p?.type,
        source: E,
        command_context_type: null != p ? (0, _.ud)(p, e) : null,
        invite_inviter_id: s,
        interaction_id: I,
        embedded_activity_location_kind: C,
    }),
        N.default.track(et.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: u,
            channel_id: l,
            channel_type: p?.type,
            guild_id: m,
            application_id: e,
            instance_id: o,
            initial_media_session_id: R[0],
            activity_user_session_id: L,
            raw_thermal_state: G,
            is_activity_start: i,
            shelf_rank: v?.activity?.shelf_rank,
            shelf_sorted_rank: M > 0 ? M : null,
            activities_infra_version: c,
            embedded_activity_location_kind: C,
        }));
}
function eA(e) {
    return en[e];
}
async function eh(e, t, n) {
    let i = e_(e, n);
    if (null == i) return;
    let { isStart: r, channelId: a, guildId: s, locationKind: l, analyticsLocations: o, source: d } = i,
        c = null != a ? T.A.getChannel(a) : null,
        u = await (0, z.f)(t, e);
    N.default.track(et.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: a,
        guild_id: s ?? c?.getGuildId(),
        application_id: e,
        raw_thermal_state: h.A.getRawThermalState(),
        is_activity_start: r,
        channel_type: c?.type,
        location_stack: o,
        error_type: u.errorType,
        error_status: u.errorStatus,
        error_code: u.errorCode,
        source: d,
        embedded_activity_location_kind: l,
    });
}
function eI(e) {
    let t = en[e],
        n = S.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        a = null != i ? T.A.getChannel(i) : null,
        s = P.Ay.getShelfActivities(r),
        l = (0, U.A)({ applicationId: e, activityConfigs: s }),
        { releasePhase: o } = ea(l),
        d = h.A.getRawThermalState(),
        c = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    (N.default.track(et.HAw.ACTIVITY_SESSION_LEFT, {
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
        N.default.track(et.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete en[e]);
}
class ef extends c.A {
    _initialize() {
        (m.Ay.addChangeListener(this.handleSelectedChannelUpdate),
            C._.subscribe(et.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            C._.subscribe(et.jej.OPEN_EMBEDDED_ACTIVITY, eu),
            l.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", ed),
            l.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            l.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            l.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            l.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", ec),
            l.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            l.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            l.h.subscribe("CALL_DELETE", this.handleCallDelete),
            l.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            l.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            l.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            l.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            l.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            l.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            l.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure));
    }
    _terminate() {
        (m.Ay.removeChangeListener(this.handleSelectedChannelUpdate),
            C._.unsubscribe(et.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            C._.unsubscribe(et.jej.OPEN_EMBEDDED_ACTIVITY, eu),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", ed),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", ec),
            l.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            l.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            l.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            l.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            l.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            l.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            l.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            l.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            l.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            l.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure));
    }
    handleSelectedChannelUpdate = () => {
        let e = m.Ay.getVoiceChannelId();
        for (let { location: t, applicationId: n } of P.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, X.H)(t);
            null != i && (0, Q.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = P.Ay.getEmbeddedActivitiesForChannel(e),
                n = p.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, X.H)(e.location),
                        n = P.Ay.getSelfEmbeddedActivityForChannel(t);
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
        (eo(n, t), (0, w.sF)() && this.showDevShelfOverrideEnabled());
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: a, isStart: s, locationKind: l } = e,
            o = el(a, n),
            d = await (0, z.f)(t, a);
        this.showLaunchErrorModal(d.message);
        let c = T.A.getChannel(i),
            u = h.A.getRawThermalState();
        N.default.track(et.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
        el(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of P.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== et.YI$.CLOSE_NORMAL &&
                (N.default.track(et.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
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
        if (e.state !== et.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = P.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: a } = e,
            s = T.A.getChannel(t);
        if (void 0 === s || (f.OU.has(s?.type) && m.Ay.getVoiceChannelId() !== t)) return;
        let l = P.Ay.getSelfEmbeddedActivityForChannel(t);
        if (l?.applicationId === n) return;
        let o = await E.Ay.fetchApplication(n);
        if (!(0, j.A)()) return void this.showLaunchErrorModal(Y.intl.string(Y.t.UXoQTp));
        if (!(0, Z.A)(o?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(Y.intl.string(Y.t.uGDCcw));
        let d = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: u } = await (0, M.LV)({ guildId: d });
        if (null == (0, U.A)({ applicationId: n, activityConfigs: c, applications: u })) {
            let e = await (0, M.LV)({ guildId: d, force: !0 });
            (0, U.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let _ = P.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (_?.userIds.size ?? 0) > 0
            ? await K({
                  channelId: t,
                  applicationId: n,
                  launchId: _?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: a,
              })
            : await (0, $.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        P.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, X.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = P.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == ei[n.applicationId]) {
            let e;
            (n.interactionType === d.G4.APPLICATION_COMMAND
                ? (e = [u.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === d.G4.MESSAGE_COMPONENT
                  ? (e = [u.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === d.G4.MODAL_SUBMIT && (e = [u.A.INTERACTION_MODAL_SUBMIT]),
                es({ applicationId: n.applicationId, nonce: t, locations: e }) && (er[t] = n.applicationId));
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = er[t];
        if (null == i) return;
        let r = ei[i];
        null != r && (r.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = er[t];
        null != n && (delete er[t], eo(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = er[t];
        null != n && (delete er[t], el(n, t));
    };
}

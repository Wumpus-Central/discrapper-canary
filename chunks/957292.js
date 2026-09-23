let i;
(n.d(t, { ms: () => em, iG: () => eg, Ay: () => eS, Pd: () => ep, DV: () => eT }), n(321073));
var r = n(132500),
    a = n(344351),
    s = n(731738),
    l = n(636537),
    o = n(228366),
    d = n(367513),
    c = n(155718),
    u = n(272355),
    _ = n(793574),
    E = n(240591),
    A = n(627363),
    h = n(198052),
    I = n(655087),
    f = n(625180),
    p = n(807393),
    T = n(859703),
    m = n(639214),
    g = n(95701),
    S = n(280450),
    N = n(734057),
    C = n(763827),
    O = n(309010),
    R = n(287809),
    L = n(174459),
    y = n(625494),
    D = n(723702),
    v = n(240248),
    b = n(17928);
function M() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let P = M();
class U extends b.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        P = { ...M(), ...(e ?? {}) };
    }
    getState() {
        return P;
    }
}
let w = new U(o.h, {
    LOGOUT: function () {
        P = M();
    },
});
var G = n(795816),
    x = n(933958),
    k = n(692957),
    F = n(956518),
    B = n(157559),
    V = n(192552),
    H = n(395671),
    j = n(71393),
    W = n(576705),
    Y = n(977997),
    K = n(62583),
    $ = n(170148),
    z = n(550151),
    X = n(375708);
async function q(e) {
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
        d = x.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == i || e.launchId === i),
        ),
        c = r;
    if (null == c) {
        let e = await A.Ay.fetchApplication(n);
        c = H.Ay.createFromServer(e);
    }
    if (null == d || null == c) return;
    let u = R.default.getCurrentUser();
    async function _() {
        null != d &&
            (await (0, K.A)({
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
            case z.Gy.CAN_JOIN:
                n?.();
                break;
            case z.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, V.i)();
                break;
            case z.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                B.A.show({ title: X.intl.string(X.t.PtobXW), body: X.intl.string(X.t.UXoQTp), hideActionSheet: !1 });
                break;
            case z.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                B.A.show({ title: X.intl.string(X.t.PtobXW), body: X.intl.string(X.t.uGDCcw), hideActionSheet: !1 });
                break;
            case z.Gy.ACTIVITY_AGE_GATED:
                B.A.show({ title: X.intl.string(X.t.PtobXW), body: X.intl.string(X.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case z.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case z.Gy.CHANNEL_FULL:
            case z.Gy.NO_CHANNEL:
            case z.Gy.NO_USER:
                B.A.show({ title: X.intl.string(X.t.PtobXW), body: X.intl.string(X.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, z.Ay)({
            userId: u?.id,
            application: c,
            channelId: t,
            currentUser: u,
            isActivitiesEnabledForCurrentPlatform: (0, $.A)(),
            ChannelStore: N.A,
            VoiceStateStore: Y.A,
            PermissionStore: W.A,
            GuildStore: j.A,
        }),
        handleCanJoin: _,
    });
}
var Z = n(956549),
    Q = n(907645),
    J = n(969151),
    ee = n(847381),
    et = n(166352),
    en = n(108959),
    ei = n(400115),
    er = n(859007),
    ea = n(652215);
let es = {},
    el = {},
    eo = {};
function ed(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, ee.A)((0, D.getOS)())].release_phase };
}
function ec(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((el[t] = { nonce: n, locations: i, source: r }), !0);
}
function eu(e, t) {
    let n = el[e];
    if (null != n && n.nonce === t) return (delete el[e], n);
}
function e_(e, t) {
    setTimeout(() => eu(e, t), 2e3);
}
function eE(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    ec({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function eA(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = x.Ay.getEmbeddedActivityDurationMs(n.id, t),
        a = S.default.getSessionId();
    null != i &&
        null != a &&
        (await l.Bo.post({
            url: ea.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: a },
            retries: 2,
            rejectWithError: !1,
        }));
    let s = es[t],
        o = (0, J.H)(n),
        d = (0, J.D)(n),
        c = N.A.getChannel(o),
        u = R.default.getCurrentUser();
    if (null == s || null == u || null != s.connectedSince) return;
    let _ = x.Ay.getShelfActivities(d),
        E = (0, k.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: A } = ed(E),
        h = I.A.getRawThermalState();
    (L.default.track(ea.HAw.ACTIVITY_SESSION_LEFT, {
        channel_id: o,
        guild_id: d,
        media_session_id: s.mediaSessionIds[0],
        activity_session_id: s.activitySessionId,
        application_id: t,
        duration_ms: r,
        user_premium_tier: u.premiumType,
        raw_thermal_state: h,
        release_phase: A,
        shelf_rank: E?.activity?.shelf_rank,
        activity_user_session_id: s.activityUserSessionId,
        channel_type: c?.type,
        media_session_ids: s.mediaSessionIds,
        embedded_activity_location_kind: n.kind,
    }),
        L.default.track(ea.HAw.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: o,
            guild_id: d,
            application_id: t,
            instance_ids: null != s.launchId ? [s.launchId] : void 0,
            media_session_ids: s.mediaSessionIds,
            activity_user_session_id: s.activityUserSessionId,
            raw_thermal_state: h,
            duration_ms: r,
            embedded_activity_location_kind: n.kind,
        }),
        delete es[t]);
}
function eh(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: a,
        embeddedActivity: s,
        location: l,
        inviterUserId: o,
    } = e;
    if ((!0 !== s.renderInFramePool && f.A.clearMainFrameSlot(), (0, er.y)({ applicationId: t })))
        return void (0, ei.j)(t, {
            isStart: i,
            inviterUserId: o,
            channelId: (0, J.H)(l),
            guildId: (0, J.D)(l),
            locationKind: l.kind,
            launchId: s.launchId,
            compositeInstanceId: s.compositeInstanceId,
            activitiesInfraVersion: "location" in s ? 2 : 1,
        });
    let c = S.default.getId(),
        u = a.find((e) => e.userId === c),
        _ = (0, J.H)(l),
        A = (0, J.D)(l),
        p = N.A.getChannel(_);
    if ((i && null != p && p.isPrivate() && n && null == u && d.A.selectParticipant(p.id, null), null == u)) return;
    let T = C.A.getMediaSessionId(),
        m = s.compositeInstanceId,
        g = null == T && p?.isVocal() === !0 && p?.isPrivate() === !1;
    if (null == m || g) return;
    let O = (0, r.A)(),
        y = "location" in s ? 2 : 1,
        D = R.default.getCurrentUser();
    if (null == D) return;
    let b = x.Ay.getShelfActivities(A),
        M = w.getState().shelfOrder,
        P = (0, k.A)({ applicationId: t, activityConfigs: b }),
        U = 1 + M.findIndex((e) => e === t),
        { releasePhase: G } = ed(P),
        F = I.A.getRawThermalState(),
        B = null != T ? [T] : [],
        V = {
            activitySessionId: m,
            activityUserSessionId: O,
            launchId: s.launchId,
            mediaSessionIds: B,
            activitiesInfraVersion: y,
        };
    es[t] = V;
    let H = el[t];
    ((0, v.uJ)(u.nonce) || u.nonce === H?.nonce || (H = void 0),
        L.default.track(ea.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: _,
            guild_id: A,
            media_session_id: B[0],
            activity_session_id: m,
            application_id: t,
            location_stack: H?.locations,
            user_premium_tier: D.premiumType,
            raw_thermal_state: F,
            n_participants: null != p ? h.A.getUserParticipantCount(p.id) : null,
            is_activity_start: i,
            release_phase: G,
            shelf_rank: P?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activity_user_session_id: O,
            channel_type: p?.type,
            source: H?.source,
            command_context_type: null != p ? (0, E.ud)(p, t) : null,
            invite_inviter_id: o,
            interaction_id: H?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        L.default.track(ea.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: H?.locations,
            channel_id: _,
            channel_type: p?.type,
            guild_id: A,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: B[0],
            activity_user_session_id: O,
            raw_thermal_state: F,
            is_activity_start: i,
            shelf_rank: P?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activities_infra_version: y,
            embedded_activity_location_kind: l.kind,
        }));
}
function eI(e, t) {
    let n = (0, ei.S)(e),
        i = t ?? n;
    if (null == i) return;
    let r = el[e];
    return {
        ...i,
        analyticsLocations: i.analyticsLocations ?? r?.locations,
        source: i.source ?? r?.source,
        interactionId: i.interactionId ?? r?.interactionId,
    };
}
function ef(e, t) {
    let n = (0, m.jm)(T.A.quests, e, !0);
    if (n.length > 0) {
        let i = [`application_id:${e}`],
            r = n.find((e) => e.userStatus?.enrolledAt != null)?.id;
        (null != r && i.push(`quest_id:${r}`), p.A.increment({ name: t, tags: i }));
    }
}
function ep(e, t) {
    let n = eI(e, t);
    if (null == n) return;
    let {
            isStart: i,
            inviterUserId: l,
            channelId: o,
            launchId: d,
            compositeInstanceId: c,
            activitiesInfraVersion: u,
            analyticsLocations: _,
            source: A,
            interactionId: f,
        } = n,
        p = R.default.getCurrentUser();
    if (null == p) return;
    let T = null != o ? N.A.getChannel(o) : null,
        m = n.guildId ?? T?.getGuildId() ?? null,
        g = n.locationKind ?? (null == T ? void 0 : null != m ? a.T.GUILD_CHANNEL : a.T.PRIVATE_CHANNEL),
        S = C.A.getMediaSessionId(),
        O = null != S ? [S] : [],
        y = (0, r.A)();
    es[e] = {
        activitySessionId: c,
        activityUserSessionId: y,
        launchId: d,
        mediaSessionIds: O,
        activitiesInfraVersion: u,
        connectedSince: Date.now(),
        frameChannelId: o,
        frameGuildId: m,
        frameLocationKind: g,
    };
    let D = x.Ay.getShelfActivities(m),
        v = w.getState().shelfOrder,
        b = (0, k.A)({ applicationId: e, activityConfigs: D }),
        M = 1 + v.findIndex((t) => t === e),
        { releasePhase: P } = ed(b),
        U = I.A.getRawThermalState();
    (L.default.track(ea.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: o,
        guild_id: m,
        media_session_id: O[0],
        activity_session_id: c,
        application_id: e,
        location_stack: _,
        user_premium_tier: p.premiumType,
        raw_thermal_state: U,
        n_participants: null != T ? h.A.getUserParticipantCount(T.id) : null,
        is_activity_start: i,
        release_phase: P,
        shelf_rank: b?.activity?.shelf_rank,
        shelf_sorted_rank: M > 0 ? M : null,
        activity_user_session_id: y,
        channel_type: T?.type,
        source: A,
        command_context_type: null != T ? (0, E.ud)(T, e) : null,
        invite_inviter_id: l,
        interaction_id: f,
        embedded_activity_location_kind: g,
    }),
        ef(e, s.K.FRAME_SESSION_JOIN),
        L.default.track(ea.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: _,
            channel_id: o,
            channel_type: T?.type,
            guild_id: m,
            application_id: e,
            instance_id: d,
            initial_media_session_id: O[0],
            activity_user_session_id: y,
            raw_thermal_state: U,
            is_activity_start: i,
            shelf_rank: b?.activity?.shelf_rank,
            shelf_sorted_rank: M > 0 ? M : null,
            activities_infra_version: u,
            embedded_activity_location_kind: g,
        }));
}
function eT(e) {
    return es[e];
}
async function em(e, t, n) {
    let i = eI(e, n);
    if (null == i) return;
    let { isStart: r, channelId: a, guildId: l, locationKind: o, analyticsLocations: d, source: c } = i,
        u = null != a ? N.A.getChannel(a) : null,
        _ = await (0, Q.f)(t, e);
    (L.default.track(ea.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: a,
        guild_id: l ?? u?.getGuildId(),
        application_id: e,
        raw_thermal_state: I.A.getRawThermalState(),
        is_activity_start: r,
        channel_type: u?.type,
        location_stack: d,
        error_type: _.errorType,
        error_status: _.errorStatus,
        error_code: _.errorCode,
        source: c,
        embedded_activity_location_kind: o,
    }),
        ef(e, s.K.FRAME_SESSION_JOIN_FAILED));
}
function eg(e) {
    let t = es[e],
        n = R.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        a = null != i ? N.A.getChannel(i) : null,
        s = x.Ay.getShelfActivities(r),
        l = (0, k.A)({ applicationId: e, activityConfigs: s }),
        { releasePhase: o } = ed(l),
        d = I.A.getRawThermalState(),
        c = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    (L.default.track(ea.HAw.ACTIVITY_SESSION_LEFT, {
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
        L.default.track(ea.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete es[e]);
}
class eS extends u.A {
    _initialize() {
        (O.Ay.addChangeListener(this.handleSelectedChannelUpdate),
            y._.subscribe(ea.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            y._.subscribe(ea.jej.OPEN_EMBEDDED_ACTIVITY, eh),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eE),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", eA),
            o.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            o.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            o.h.subscribe("CALL_DELETE", this.handleCallDelete),
            o.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            o.h.subscribe("GUILD_DELETE", this.handleGuildDelete),
            o.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete),
            o.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            o.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            o.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            o.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure));
    }
    _terminate() {
        (O.Ay.removeChangeListener(this.handleSelectedChannelUpdate),
            y._.unsubscribe(ea.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            y._.unsubscribe(ea.jej.OPEN_EMBEDDED_ACTIVITY, eh),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eE),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", eA),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen),
            o.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect),
            o.h.unsubscribe("CALL_DELETE", this.handleCallDelete),
            o.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState),
            o.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete),
            o.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete),
            o.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue),
            o.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate),
            o.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess),
            o.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure));
    }
    handleSelectedChannelUpdate = () => {
        let e = O.Ay.getVoiceChannelId();
        for (let { location: t, applicationId: n } of x.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, J.H)(t);
            null != i && (0, en.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = x.Ay.getEmbeddedActivitiesForChannel(e),
                n = S.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, J.H)(e.location),
                        n = x.Ay.getSelfEmbeddedActivityForChannel(t);
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
        (e_(n, t), (0, F.sF)() && this.showDevShelfOverrideEnabled());
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: a, isStart: s, locationKind: l } = e,
            o = eu(a, n),
            d = await (0, Q.f)(t, a);
        this.showLaunchErrorModal(d.message);
        let c = N.A.getChannel(i),
            u = I.A.getRawThermalState();
        L.default.track(ea.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
        eu(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of x.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== ea.YI$.CLOSE_NORMAL &&
                (L.default.track(ea.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = O.Ay.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== ea.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = x.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: a } = e,
            s = N.A.getChannel(t);
        if (void 0 === s || (g.OU.has(s?.type) && O.Ay.getVoiceChannelId() !== t)) return;
        let l = x.Ay.getSelfEmbeddedActivityForChannel(t);
        if (l?.applicationId === n) return;
        let o = await A.Ay.fetchApplication(n);
        if (!(0, $.A)()) return void this.showLaunchErrorModal(X.intl.string(X.t.UXoQTp));
        if (!(0, et.A)(o?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(X.intl.string(X.t.uGDCcw));
        let d = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: u } = await (0, G.LV)({ guildId: d });
        if (null == (0, k.A)({ applicationId: n, activityConfigs: c, applications: u })) {
            let e = await (0, G.LV)({ guildId: d, force: !0 });
            (0, k.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let _ = x.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (_?.userIds.size ?? 0) > 0
            ? await q({
                  channelId: t,
                  applicationId: n,
                  launchId: _?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: a,
              })
            : await (0, Z.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        x.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, J.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = x.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == el[n.applicationId]) {
            let e;
            (n.interactionType === c.G4.APPLICATION_COMMAND
                ? (e = [_.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === c.G4.MESSAGE_COMPONENT
                  ? (e = [_.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === c.G4.MODAL_SUBMIT && (e = [_.A.INTERACTION_MODAL_SUBMIT]),
                ec({ applicationId: n.applicationId, nonce: t, locations: e }) && (eo[t] = n.applicationId));
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = eo[t];
        if (null == i) return;
        let r = el[i];
        null != r && (r.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = eo[t];
        null != n && (delete eo[t], e_(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = eo[t];
        null != n && (delete eo[t], eu(n, t));
    };
}

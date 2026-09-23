let i;
(n.d(t, { ms: () => eS, iG: () => eN, Ay: () => eC, Pd: () => em, DV: () => eg }), n(321073));
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
    h = n(587895),
    I = n(20015),
    f = n(198052),
    p = n(655087),
    T = n(625180),
    m = n(807393),
    g = n(859703),
    S = n(639214),
    N = n(95701),
    C = n(280450),
    O = n(734057),
    R = n(763827),
    L = n(309010),
    y = n(287809),
    D = n(174459),
    v = n(625494),
    b = n(723702),
    M = n(240248),
    P = n(17928);
function U() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let w = U();
class G extends P.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        w = { ...U(), ...(e ?? {}) };
    }
    getState() {
        return w;
    }
}
let x = new G(o.h, {
    LOGOUT: function () {
        w = U();
    },
});
var k = n(795816),
    F = n(933958),
    B = n(692957),
    V = n(956518),
    H = n(157559),
    j = n(192552),
    W = n(395671),
    Y = n(71393),
    K = n(576705),
    $ = n(977997),
    z = n(62583),
    X = n(170148),
    q = n(550151),
    Z = n(375708);
async function Q(e) {
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
        d = F.Ay.getEmbeddedActivitiesForChannel(t).find(
            (e) => e.applicationId === n && (null == i || e.launchId === i),
        ),
        c = r;
    if (null == c) {
        let e = await A.Ay.fetchApplication(n);
        c = W.Ay.createFromServer(e);
    }
    if (null == d || null == c) return;
    let u = y.default.getCurrentUser();
    async function _() {
        null != d &&
            (await (0, z.A)({
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
            case q.Gy.CAN_JOIN:
                n?.();
                break;
            case q.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                (0, j.i)();
                break;
            case q.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                H.A.show({ title: Z.intl.string(Z.t.PtobXW), body: Z.intl.string(Z.t.UXoQTp), hideActionSheet: !1 });
                break;
            case q.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                H.A.show({ title: Z.intl.string(Z.t.PtobXW), body: Z.intl.string(Z.t.uGDCcw), hideActionSheet: !1 });
                break;
            case q.Gy.ACTIVITY_AGE_GATED:
                H.A.show({ title: Z.intl.string(Z.t.PtobXW), body: Z.intl.string(Z.t["4WuFRE"]), hideActionSheet: !1 });
                break;
            case q.Gy.NO_CHANNEL_CONNECT_PERMISSION:
            case q.Gy.CHANNEL_FULL:
            case q.Gy.NO_CHANNEL:
            case q.Gy.NO_USER:
                H.A.show({ title: Z.intl.string(Z.t.PtobXW), body: Z.intl.string(Z.t.FUCQco), hideActionSheet: !1 });
        }
    })({
        embeddedActivityJoinability: (0, q.Ay)({
            userId: u?.id,
            application: c,
            channelId: t,
            currentUser: u,
            isActivitiesEnabledForCurrentPlatform: (0, X.A)(),
            ChannelStore: O.A,
            VoiceStateStore: $.A,
            PermissionStore: K.A,
            GuildStore: Y.A,
        }),
        handleCanJoin: _,
    });
}
var J = n(956549),
    ee = n(907645),
    et = n(969151),
    en = n(847381),
    ei = n(166352),
    er = n(108959),
    ea = n(400115),
    es = n(859007),
    el = n(652215);
let eo = {},
    ed = {},
    ec = {};
function eu(e) {
    return { releasePhase: e?.activity?.client_platform_config[(0, en.A)((0, b.getOS)())].release_phase };
}
function e_(e) {
    let { applicationId: t, nonce: n, locations: i, source: r } = e;
    return (null != i || null != r) && ((ed[t] = { nonce: n, locations: i, source: r }), !0);
}
function eE(e, t) {
    let n = ed[e];
    if (null != n && n.nonce === t) return (delete ed[e], n);
}
function eA(e, t) {
    setTimeout(() => eE(e, t), 2e3);
}
function eh(e) {
    let { applicationId: t, nonce: n, analyticsLocations: i, source: r } = e;
    e_({ applicationId: t, nonce: n, locations: i, source: r ?? void 0 });
}
async function eI(e) {
    let { applicationId: t, location: n, instanceId: i } = e,
        r = F.Ay.getEmbeddedActivityDurationMs(n.id, t),
        a = C.default.getSessionId();
    null != i &&
        null != a &&
        (await l.Bo.post({
            url: el.Rsh.ACTIVITY_LEAVE(t, n.id, i),
            body: { session_id: a },
            retries: 2,
            rejectWithError: !1,
        }));
    let s = eo[t],
        o = (0, et.H)(n),
        d = (0, et.D)(n),
        c = O.A.getChannel(o),
        u = y.default.getCurrentUser();
    if (null == s || null == u || null != s.connectedSince) return;
    let _ = F.Ay.getShelfActivities(d),
        E = (0, B.A)({ applicationId: t, activityConfigs: _ }),
        { releasePhase: A } = eu(E),
        h = p.A.getRawThermalState();
    (D.default.track(el.HAw.ACTIVITY_SESSION_LEFT, {
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
        D.default.track(el.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete eo[t]);
}
function ef(e) {
    let {
        applicationId: t,
        isFirstActivityInChannel: n,
        isStart: i,
        participants: a,
        embeddedActivity: s,
        location: l,
        inviterUserId: o,
    } = e;
    if ((!0 !== s.renderInFramePool && T.A.clearMainFrameSlot(), (0, es.y)({ applicationId: t })))
        return void (0, ea.j)(t, {
            isStart: i,
            inviterUserId: o,
            channelId: (0, et.H)(l),
            guildId: (0, et.D)(l),
            locationKind: l.kind,
            launchId: s.launchId,
            compositeInstanceId: s.compositeInstanceId,
            activitiesInfraVersion: "location" in s ? 2 : 1,
        });
    let c = C.default.getId(),
        u = a.find((e) => e.userId === c),
        _ = (0, et.H)(l),
        A = (0, et.D)(l),
        h = O.A.getChannel(_);
    if ((i && null != h && h.isPrivate() && n && null == u && d.A.selectParticipant(h.id, null), null == u)) return;
    let I = R.A.getMediaSessionId(),
        m = s.compositeInstanceId,
        g = null == I && h?.isVocal() === !0 && h?.isPrivate() === !1;
    if (null == m || g) return;
    let S = (0, r.A)(),
        N = "location" in s ? 2 : 1,
        L = y.default.getCurrentUser();
    if (null == L) return;
    let v = F.Ay.getShelfActivities(A),
        b = x.getState().shelfOrder,
        P = (0, B.A)({ applicationId: t, activityConfigs: v }),
        U = 1 + b.findIndex((e) => e === t),
        { releasePhase: w } = eu(P),
        G = p.A.getRawThermalState(),
        k = null != I ? [I] : [],
        V = {
            activitySessionId: m,
            activityUserSessionId: S,
            launchId: s.launchId,
            mediaSessionIds: k,
            activitiesInfraVersion: N,
        };
    eo[t] = V;
    let H = ed[t];
    ((0, M.uJ)(u.nonce) || u.nonce === H?.nonce || (H = void 0),
        D.default.track(el.HAw.ACTIVITY_SESSION_JOINED, {
            channel_id: _,
            guild_id: A,
            media_session_id: k[0],
            activity_session_id: m,
            application_id: t,
            location_stack: H?.locations,
            user_premium_tier: L.premiumType,
            raw_thermal_state: G,
            n_participants: null != h ? f.A.getUserParticipantCount(h.id) : null,
            is_activity_start: i,
            release_phase: w,
            shelf_rank: P?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activity_user_session_id: S,
            channel_type: h?.type,
            source: H?.source,
            command_context_type: null != h ? (0, E.ud)(h, t) : null,
            invite_inviter_id: o,
            interaction_id: H?.interactionId,
            embedded_activity_location_kind: l.kind,
        }),
        D.default.track(el.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: H?.locations,
            channel_id: _,
            channel_type: h?.type,
            guild_id: A,
            application_id: t,
            instance_id: s.launchId,
            initial_media_session_id: k[0],
            activity_user_session_id: S,
            raw_thermal_state: G,
            is_activity_start: i,
            shelf_rank: P?.activity?.shelf_rank,
            shelf_sorted_rank: U > 0 ? U : null,
            activities_infra_version: N,
            embedded_activity_location_kind: l.kind,
        }));
}
function ep(e, t) {
    let n = (0, ea.S)(e),
        i = t ?? n;
    if (null == i) return;
    let r = ed[e];
    return {
        ...i,
        analyticsLocations: i.analyticsLocations ?? r?.locations,
        source: i.source ?? r?.source,
        interactionId: i.interactionId ?? r?.interactionId,
    };
}
function eT(e, t) {
    let n = h.A.getApplication(e);
    if (!(0, I.n)(n, el.gfo.QUEST)) return;
    let i = (0, S.jm)(g.A.quests, e, !0);
    if (i.length > 0) {
        let n = [`application_id:${e}`],
            r = i.find((e) => e.userStatus?.enrolledAt != null)?.id;
        (null != r && n.push(`quest_id:${r}`), m.A.increment({ name: t, tags: n }));
    }
}
function em(e, t) {
    let n = ep(e, t);
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
            interactionId: h,
        } = n,
        I = y.default.getCurrentUser();
    if (null == I) return;
    let T = null != o ? O.A.getChannel(o) : null,
        m = n.guildId ?? T?.getGuildId() ?? null,
        g = n.locationKind ?? (null == T ? void 0 : null != m ? a.T.GUILD_CHANNEL : a.T.PRIVATE_CHANNEL),
        S = R.A.getMediaSessionId(),
        N = null != S ? [S] : [],
        C = (0, r.A)();
    eo[e] = {
        activitySessionId: c,
        activityUserSessionId: C,
        launchId: d,
        mediaSessionIds: N,
        activitiesInfraVersion: u,
        connectedSince: Date.now(),
        frameChannelId: o,
        frameGuildId: m,
        frameLocationKind: g,
    };
    let L = F.Ay.getShelfActivities(m),
        v = x.getState().shelfOrder,
        b = (0, B.A)({ applicationId: e, activityConfigs: L }),
        M = 1 + v.findIndex((t) => t === e),
        { releasePhase: P } = eu(b),
        U = p.A.getRawThermalState();
    (D.default.track(el.HAw.ACTIVITY_SESSION_JOINED, {
        channel_id: o,
        guild_id: m,
        media_session_id: N[0],
        activity_session_id: c,
        application_id: e,
        location_stack: _,
        user_premium_tier: I.premiumType,
        raw_thermal_state: U,
        n_participants: null != T ? f.A.getUserParticipantCount(T.id) : null,
        is_activity_start: i,
        release_phase: P,
        shelf_rank: b?.activity?.shelf_rank,
        shelf_sorted_rank: M > 0 ? M : null,
        activity_user_session_id: C,
        channel_type: T?.type,
        source: A,
        command_context_type: null != T ? (0, E.ud)(T, e) : null,
        invite_inviter_id: l,
        interaction_id: h,
        embedded_activity_location_kind: g,
    }),
        eT(e, s.K.FRAME_SESSION_JOIN),
        D.default.track(el.HAw.ACTIVITY_IFRAME_MOUNT, {
            location_stack: _,
            channel_id: o,
            channel_type: T?.type,
            guild_id: m,
            application_id: e,
            instance_id: d,
            initial_media_session_id: N[0],
            activity_user_session_id: C,
            raw_thermal_state: U,
            is_activity_start: i,
            shelf_rank: b?.activity?.shelf_rank,
            shelf_sorted_rank: M > 0 ? M : null,
            activities_infra_version: u,
            embedded_activity_location_kind: g,
        }));
}
function eg(e) {
    return eo[e];
}
async function eS(e, t, n) {
    let i = ep(e, n);
    if (null == i) return;
    let { isStart: r, channelId: a, guildId: l, locationKind: o, analyticsLocations: d, source: c } = i,
        u = null != a ? O.A.getChannel(a) : null,
        _ = await (0, ee.f)(t, e);
    (D.default.track(el.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: a,
        guild_id: l ?? u?.getGuildId(),
        application_id: e,
        raw_thermal_state: p.A.getRawThermalState(),
        is_activity_start: r,
        channel_type: u?.type,
        location_stack: d,
        error_type: _.errorType,
        error_status: _.errorStatus,
        error_code: _.errorCode,
        source: c,
        embedded_activity_location_kind: o,
    }),
        eT(e, s.K.FRAME_SESSION_JOIN_FAILED));
}
function eN(e) {
    let t = eo[e],
        n = y.default.getCurrentUser();
    if (null == t || null == n) return;
    let i = t.frameChannelId ?? null,
        r = t.frameGuildId ?? null,
        a = null != i ? O.A.getChannel(i) : null,
        s = F.Ay.getShelfActivities(r),
        l = (0, B.A)({ applicationId: e, activityConfigs: s }),
        { releasePhase: o } = eu(l),
        d = p.A.getRawThermalState(),
        c = null != t.connectedSince ? Date.now() - t.connectedSince : null;
    (D.default.track(el.HAw.ACTIVITY_SESSION_LEFT, {
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
        D.default.track(el.HAw.ACTIVITY_IFRAME_UNMOUNT, {
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
        delete eo[e]);
}
class eC extends u.A {
    _initialize() {
        (L.Ay.addChangeListener(this.handleSelectedChannelUpdate),
            v._.subscribe(el.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v._.subscribe(el.jej.OPEN_EMBEDDED_ACTIVITY, ef),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eh),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", eI),
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
        (L.Ay.removeChangeListener(this.handleSelectedChannelUpdate),
            v._.unsubscribe(el.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
            v._.unsubscribe(el.jej.OPEN_EMBEDDED_ACTIVITY, ef),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", eh),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel),
            o.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", eI),
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
        let e = L.Ay.getVoiceChannelId();
        for (let { location: t, applicationId: n } of F.Ay.getSelfEmbeddedActivities().values()) {
            let i = (0, et.H)(t);
            null != i && (0, er.A)(i) && i !== e && this.leaveActivity({ location: t, applicationId: n });
        }
        if (null != e) {
            let t = F.Ay.getEmbeddedActivitiesForChannel(e),
                n = C.default.getId();
            t.forEach((e) => {
                if (e.userIds.has(n)) {
                    let t = (0, et.H)(e.location),
                        n = F.Ay.getSelfEmbeddedActivityForChannel(t);
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
        (eA(n, t), (0, V.sF)() && this.showDevShelfOverrideEnabled());
    };
    handleActivityLaunchFail = async (e) => {
        let { error: t, nonce: n, channelId: i, guildId: r, applicationId: a, isStart: s, locationKind: l } = e,
            o = eE(a, n),
            d = await (0, ee.f)(t, a);
        this.showLaunchErrorModal(d.message);
        let c = O.A.getChannel(i),
            u = p.A.getRawThermalState();
        D.default.track(el.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
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
        eE(n, t);
    };
    superHandleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null != i && null != t) {
            for (let { applicationId: e, location: t } of F.Ay.getSelfEmbeddedActivities().values())
                e === i && this.leaveActivity({ location: t, applicationId: i });
            t.code !== el.YI$.CLOSE_NORMAL &&
                (D.default.track(el.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showErrorModal(t, i));
        }
    };
    handleCallDelete = (e) => {
        let { channelId: t } = e,
            n = L.Ay.getVoiceChannelId();
        null != n && n === t && this.handleCallEnded(t);
    };
    handleRTCConnectionState = (e) => {
        if (e.state !== el.S7L.DISCONNECTED) return;
        let t = e.channelId;
        this.handleCallEnded(t);
    };
    handleCallEnded = (e) => {
        let t = F.Ay.getSelfEmbeddedActivityForChannel(e);
        null != t && this.leaveActivity({ location: t.location, applicationId: t.applicationId });
    };
    handleDeferredOpen = async (e) => {
        let { channelId: t, applicationId: n, analyticsLocations: i, commandOrigin: r, inviterUserId: a } = e,
            s = O.A.getChannel(t);
        if (void 0 === s || (N.OU.has(s?.type) && L.Ay.getVoiceChannelId() !== t)) return;
        let l = F.Ay.getSelfEmbeddedActivityForChannel(t);
        if (l?.applicationId === n) return;
        let o = await A.Ay.fetchApplication(n);
        if (!(0, X.A)()) return void this.showLaunchErrorModal(Z.intl.string(Z.t.UXoQTp));
        if (!(0, ei.A)(o?.embedded_activity_config?.supported_platforms))
            return void this.showLaunchErrorModal(Z.intl.string(Z.t.uGDCcw));
        let d = s?.getGuildId() ?? void 0,
            { activityConfigs: c, applications: u } = await (0, k.LV)({ guildId: d });
        if (null == (0, B.A)({ applicationId: n, activityConfigs: c, applications: u })) {
            let e = await (0, k.LV)({ guildId: d, force: !0 });
            (0, B.A)({ applicationId: n, activityConfigs: e.activityConfigs, applications: e.applications });
        }
        let _ = F.Ay.getEmbeddedActivitiesForChannel(t).find((e) => e.applicationId === n);
        (_?.userIds.size ?? 0) > 0
            ? await Q({
                  channelId: t,
                  applicationId: n,
                  launchId: _?.launchId,
                  inputApplication: null,
                  analyticsLocations: i,
                  inviterUserId: a,
              })
            : await (0, J.A)({
                  targetApplicationId: n,
                  channelId: t,
                  analyticsLocations: i,
                  commandOrigin: r,
                  inviterUserId: a,
              });
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        F.Ay.getSelfEmbeddedActivities().forEach((e) => {
            let { location: n, applicationId: i } = e,
                r = (0, et.D)(n);
            t.id === r && this.leaveActivity({ location: n, applicationId: i });
        });
    };
    handleChannelDelete = (e) => {
        let { channel: t } = e,
            n = F.Ay.getSelfEmbeddedActivityForChannel(t.id);
        null != n && this.leaveActivity({ location: n.location, applicationId: n.applicationId });
    };
    handleInteractionQueue = (e) => {
        let { nonce: t, data: n } = e;
        if (null == ed[n.applicationId]) {
            let e;
            (n.interactionType === c.G4.APPLICATION_COMMAND
                ? (e = [_.A.INTERACTION_APPLICATION_COMMAND])
                : n.interactionType === c.G4.MESSAGE_COMPONENT
                  ? (e = [_.A.INTERACTION_MESSAGE_COMPONENT])
                  : n.interactionType === c.G4.MODAL_SUBMIT && (e = [_.A.INTERACTION_MODAL_SUBMIT]),
                e_({ applicationId: n.applicationId, nonce: t, locations: e }) && (ec[t] = n.applicationId));
        }
    };
    handleInteractionCreate = (e) => {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return;
        let i = ec[t];
        if (null == i) return;
        let r = ed[i];
        null != r && (r.interactionId = n);
    };
    handleInteractionSuccess = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = ec[t];
        null != n && (delete ec[t], eA(n, t));
    };
    handleInteractionFailure = (e) => {
        let { nonce: t } = e;
        if (null == t) return;
        let n = ec[t];
        null != n && (delete ec[t], eE(n, t));
    };
}

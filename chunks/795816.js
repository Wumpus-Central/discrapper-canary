"use strict";
n.d(t, {
    CS: () => ef,
    D2: () => eS,
    Ir: () => eA,
    LK: () => eE,
    LV: () => ep,
    SE: () => e_,
    Ue: () => eg,
    _H: () => ed,
    gk: () => eI,
    i5: () => eT,
    jp: () => ey,
    od: () => ev,
    rW: () => es,
    su: () => eo,
    tk: () => em,
});
var r = n(110259),
    i = n(344351),
    a = n(562465),
    s = n(554146),
    o = n(73153),
    l = n(157559),
    u = n(308528),
    c = n(367513),
    d = n(846293),
    _ = n(843472),
    f = n(181658),
    h = n(155718),
    p = n(264322),
    g = n(545152),
    E = n(361926),
    A = n(587895),
    I = n(972995),
    T = n(20015),
    y = n(568598),
    S = n(313961),
    v = n(367727),
    C = n(744230),
    b = n(113267),
    N = n(207371),
    R = n(451909),
    O = n(195880),
    D = n(87001),
    L = n(192552),
    w = n(611010),
    x = n(961350),
    P = n(734057),
    M = n(71393),
    k = n(576705),
    U = n(287809),
    G = n(977997),
    F = n(954571),
    V = n(403362),
    B = n(499785),
    j = n(811024),
    H = n(933958),
    Y = n(383497),
    W = n(969151),
    K = n(817636),
    $ = n(782091),
    z = n(108959),
    q = n(448739),
    X = n(90804),
    Z = n(946255),
    Q = n(859007),
    J = n(360469),
    ee = n(5867),
    et = n(652215),
    en = n(705751),
    er = n(49999),
    ei = n(172799),
    ea = n(985018);
function es(e) {
    let t = H.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && ed({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function eo(e) {
    let {
            channelId: t,
            applicationId: r,
            isStart: a,
            analyticsLocations: s,
            locationObject: l,
            embeddedActivitiesManager: u,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            source: h,
            onExecutedCallback: p,
            referrerId: g,
            customId: E,
            inviterUserId: I,
            onConfirmActivityLaunchChecksAlertOpen: T,
        } = e,
        y = P.A.getChannel(t),
        S = y?.getGuildId() ?? void 0;
    if (null == S && !y?.isPrivate()) return !1;
    let v = A.A.getApplication(r),
        R = null != v && (0, N.x)(v),
        L = (0, O.m)();
    try {
        if (D.A.getWindowOpen(et.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(et.MLl.ACTIVITY_POPOUT);
        }
        if (((0, q.Q)(), (0, Q.y)({ applicationId: r }))) return !0;
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: L,
            applicationId: r,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: s,
            source: h,
            commandOrigin: d,
            inviterUserId: I,
            launchParams: { customId: E, referrerId: g },
        });
        let e = await eS(r, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: r,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let i = U.default.getCurrentUser();
        if (
            (null != i &&
                (0, Z.A)({
                    type: a ? et.UqL.LAUNCH : et.UqL.JOIN,
                    userId: i?.id,
                    guildId: S,
                    channelId: t,
                    channelType: y?.type,
                    applicationId: r,
                    locationObject: l,
                    analyticsLocations: s ?? [],
                    source: h,
                    referrerId: g,
                    inviterUserId: I,
                }),
            a)
        ) {
            if (null == t || !el(r, y)) throw new C.A(C.A.Reasons.INVALID_CHANNEL);
            let e = await eu({
                applicationId: r,
                nonce: L,
                channelId: t,
                guildId: S,
                commandOrigin: d,
                sectionName: _,
                source: h,
                onExecutedCallback: p,
                onConfirmActivityLaunchChecksAlertOpen: T,
                embeddedActivitiesManager: u,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        o.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: L,
                            applicationId: r,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new C.A(C.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ec({ applicationId: r, channelId: t, embeddedActivitiesManager: u, isStart: a, guildId: S });
            if ((p?.(), "failure" === e.result))
                throw new C.A(C.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: L, applicationId: r, channelId: t ?? null });
    } catch (n) {
        if (R) return !1;
        let e = null != S ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: L,
                applicationId: r,
                channelId: t ?? null,
                guildId: S ?? null,
                isStart: a,
                error: n instanceof C.A || n instanceof f.A || n instanceof b.A ? n : new f.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function el(e, t) {
    let n = t?.type === et.rbe.GUILD_VOICE,
        r = A.A.getApplication(e),
        i = (0, T.n)(r, et.gfo.EMBEDDED),
        a = (0, j.AX)(t);
    return (n && i) || a;
}
async function eu(e) {
    let {
            applicationId: t,
            nonce: n,
            channelId: r,
            guildId: i,
            commandOrigin: a,
            sectionName: s,
            source: o,
            onExecutedCallback: l,
            onConfirmActivityLaunchChecksAlertOpen: u,
            embeddedActivitiesManager: c,
        } = e,
        d = null;
    try {
        d = await (0, E.Ay)(r, t);
    } catch (e) {
        if (e.message === E.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let _ = d.handler !== h.Ys.APP_HANDLER;
    if (!(_ || en.TR.includes(t))) {
        null != r && (await (0, p.Zn)({ type: "channel", channelId: r })), await (0, p.Zn)({ type: "user" });
        let e = P.A.getChannel(r),
            { isAuthorized: n } = await (0, I.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let T = P.A.getChannel(r),
        y = null != i ? M.A.getGuild(i) : null;
    if (null == T) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = A.A.getApplication(t),
            r = H.Ay.getCurrentEmbeddedActivity();
        r?.applicationId != null && (e = A.A.getApplication(r?.applicationId));
        let i = U.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, Y.O)({
                applicationId: t,
                application: n,
                channel: T,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: c,
                user: i,
                onConfirmActivityLaunchChecksAlertOpen: u,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, u) => {
            (0, g.A)({
                command: d,
                optionValues: {},
                context: { channel: T, guild: y },
                commandOrigin: a,
                sectionName: s,
                source: o,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        l?.(), e();
                    },
                    onFailure: (e, n, a, s) => {
                        l?.(),
                            F.default.track(et.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: T?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: o,
                            }),
                            null != e && null != n && null != a
                                ? u(new f.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in b.A.ReasonCodes
                                  ? u(new b.A(s))
                                  : u(new b.A(b.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function ec(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: s, guildId: o } = e,
        u = x.default.getSessionId(),
        c = U.default.getCurrentUser(),
        d = n;
    if (null == d) return { result: "failure", reason: 1 };
    let _ = await (0, K.A)(d, i);
    if (null == c || null == _) return { result: "failure", reason: 2 };
    if (null == i) return { result: "failure", reason: 3 };
    let f = P.A.getChannel(i);
    if (null == f) return { result: "failure", reason: 3 };
    let h = (0, $.JH)({ channelId: i, ChannelStore: P.A, GuildStore: M.A, PermissionStore: k.A, VoiceStateStore: G.A });
    if (h !== $.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            h === $.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, L.i)())
                : h === $.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.A.show({
                      title: ea.intl.string(ea.t["IOy+I5"]),
                      body: ea.intl.string(ea.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let p = H.Ay.getCurrentEmbeddedActivity();
    if (
        (p?.applicationId != null && (t = A.A.getApplication(p?.applicationId)),
        !(
            !s ||
            (await (0, Y.O)({
                applicationId: n,
                application: _,
                channel: f,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: c,
            }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != f) {
        let e = (0, z.A)(f.id),
            n = J.lk.includes(f.type);
        if (e) {
            if (!(await (0, X.A)({ channelId: f.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, j.pE)(f) || !n) return { result: "failure", reason: 9 };
    }
    let g = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: o, channel_id: i, application_id: n, session_id: u },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != i
        ? (await B.A.post({
              url: et.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
              body: { session_id: u, guild_id: o ?? void 0 },
              ...g,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function ed(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = H.Ay.getSelfEmbeddedActivityForLocation(t);
    o.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: i?.launchId,
        showFeedback: r,
    });
    let a = (0, W.H)(t);
    if (null != a) {
        let e = S.A.getSelectedParticipantId(a),
            t = U.default.getCurrentUser()?.id,
            r = H.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e === (0, y.Qt)({ applicationId: n, instanceId: r?.compositeInstanceId }) && c.A.selectParticipant(a, null);
    }
}
async function e_() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await a.Bo.get({
                url: et.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => w.Ay.createFromServer(e));
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t });
    } catch (e) {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function ef(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = null != t ? { channel_id: t } : void 0,
            i = await a.Bo.post({
                url: et.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
                query: r,
                attachments: [{ name: "file", file: n }],
                rejectWithError: !0,
            });
        return (
            o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new f.A(e);
    }
}
let eh = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ep(e) {
    let { guildId: t, force: n = !1 } = e,
        i = H.Ay.getShelfActivities(t),
        a = i.map((e) => A.A.getApplication(e.application_id)).filter(V.Vq);
    if (!n && !H.Ay.shouldFetchShelf(t)) {
        if (H.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                r = new Promise((n) => {
                    (e = eh.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                i = new Promise((e) => {
                    (n = eh.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([r, i]),
                null != e && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != n && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = null));
        }
        return { activityConfigs: i, applications: a };
    }
    try {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await B.A.get({
                url: et.Rsh.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: t },
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            i = n.body.activities ?? [],
            a = n.body.applications ?? [],
            s = n.body.assets ?? {};
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: i,
                applications: a,
                assets: s,
            }),
            a.length > 0 && o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: a }),
            { activityConfigs: i, applications: a.map((e) => w.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: i, applications: a }
        );
    }
}
async function em(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        s = await d.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: r }, i);
    null != P.A.getChannel(n) && _.A.sendInvite(n, s.code, i, a);
}
async function eg(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        o = await d.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: n }, i);
    await u.A.ensurePrivateChannel(r).then((e) => {
        let t,
            n = P.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = R.Ay.parse(n, s).content), _.A.sendInvite(e, o.code, i, a, t);
    });
}
function eE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er.i.INDIRECT_ACTION;
    (0, v.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eA(e) {
    let t = et.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await a.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eI(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eT(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function ey() {
    eI(ee.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eS(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await a.Bo.post({ url: et.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function ev(e, t) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await eS(e, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: e, proxyTicket: n });
    } catch (s) {
        let n = P.A.getChannel(t),
            r = n?.guild_id ?? null,
            a = null != r ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, O.m)(),
                applicationId: e,
                channelId: t,
                guildId: r,
                locationKind: a,
                error: s instanceof C.A || s instanceof f.A || s instanceof b.A ? s : new f.A(s),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

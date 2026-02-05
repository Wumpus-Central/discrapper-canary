"use strict";
n.d(t, {
    CS: () => e_,
    D2: () => ey,
    Ir: () => eE,
    LK: () => eg,
    LV: () => ep,
    SE: () => ed,
    Ue: () => em,
    _H: () => ec,
    gk: () => eA,
    i5: () => eI,
    jp: () => eT,
    od: () => eS,
    rW: () => ea,
    su: () => es,
    tk: () => eh,
}),
    n(938796);
var r = n(110259),
    i = n(344351),
    a = n(665260),
    s = n(562465),
    o = n(554146),
    l = n(73153),
    u = n(157559),
    c = n(308528),
    d = n(367513),
    _ = n(846293),
    f = n(843472),
    p = n(181658),
    h = n(155718),
    m = n(264322),
    g = n(545152),
    E = n(361926),
    A = n(587895),
    I = n(972995),
    T = n(568598),
    y = n(313961),
    S = n(367727),
    v = n(744230),
    C = n(113267),
    b = n(207371),
    N = n(451909),
    R = n(195880),
    O = n(87001),
    D = n(192552),
    L = n(611010),
    w = n(961350),
    x = n(734057),
    P = n(71393),
    M = n(576705),
    k = n(287809),
    U = n(977997),
    G = n(954571),
    V = n(403362),
    F = n(499785),
    B = n(811024),
    j = n(933958),
    H = n(383497),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    z = n(108959),
    $ = n(448739),
    q = n(90804),
    Z = n(946255),
    Q = n(859007),
    X = n(360469),
    J = n(5867),
    ee = n(652215),
    et = n(705751),
    en = n(49999),
    er = n(172799),
    ei = n(985018);
function ea(e) {
    let t = j.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && ec({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function es(e) {
    let {
            channelId: t,
            applicationId: r,
            isStart: a,
            analyticsLocations: s,
            locationObject: o,
            embeddedActivitiesManager: u,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            source: f,
            onExecutedCallback: h,
            referrerId: m,
            customId: g,
            inviterUserId: E,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        T = x.A.getChannel(t),
        y = T?.getGuildId() ?? void 0;
    if (null == y && !T?.isPrivate()) return !1;
    let S = A.A.getApplication(r),
        N = null != S && (0, b.x)(S),
        D = (0, R.m)();
    try {
        if (O.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (((0, $.Q)(), (0, Q.y)({ applicationId: r }))) return !0;
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: D,
            applicationId: r,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: s,
            source: f,
            commandOrigin: d,
            inviterUserId: E,
            launchParams: { customId: g, referrerId: m },
        });
        let e = await ey(r, t ?? void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: r,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let i = k.default.getCurrentUser();
        if (
            (null != i &&
                (0, Z.A)({
                    type: a ? ee.UqL.LAUNCH : ee.UqL.JOIN,
                    userId: i?.id,
                    guildId: y,
                    channelId: t,
                    channelType: T?.type,
                    applicationId: r,
                    locationObject: o,
                    analyticsLocations: s ?? [],
                    source: f,
                    referrerId: m,
                    inviterUserId: E,
                }),
            a)
        ) {
            if (null == t || !eo(r, T)) throw new v.A(v.A.Reasons.INVALID_CHANNEL);
            let e = await el({
                applicationId: r,
                nonce: D,
                channelId: t,
                guildId: y,
                commandOrigin: d,
                sectionName: _,
                source: f,
                onExecutedCallback: h,
                onConfirmActivityLaunchChecksAlertOpen: I,
                embeddedActivitiesManager: u,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        l.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: D,
                            applicationId: r,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new v.A(v.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({ applicationId: r, channelId: t, embeddedActivitiesManager: u, isStart: a, guildId: y });
            if ((h?.(), "failure" === e.result))
                throw new v.A(v.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: D, applicationId: r, channelId: t ?? null });
    } catch (n) {
        if (N) return !1;
        let e = null != y ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: D,
                applicationId: r,
                channelId: t ?? null,
                guildId: y ?? null,
                isStart: a,
                error: n instanceof v.A || n instanceof p.A || n instanceof C.A ? n : new p.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function eo(e, t) {
    let n = t?.type === ee.rbe.GUILD_VOICE,
        r = A.A.getApplication(e),
        i = null != r && (0, a.Lt)(r.flags, ee.gfo.EMBEDDED),
        s = (0, B.AX)(t);
    return (n && i) || s;
}
async function el(e) {
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
    if (!(_ || et.TR.includes(t))) {
        null != r && (await (0, m.Zn)({ type: "channel", channelId: r })), await (0, m.Zn)({ type: "user" });
        let e = x.A.getChannel(r),
            { isAuthorized: n } = await (0, I.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let f = x.A.getChannel(r),
        T = null != i ? P.A.getGuild(i) : null;
    if (null == f) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = A.A.getApplication(t),
            r = j.Ay.getCurrentEmbeddedActivity();
        r?.applicationId != null && (e = A.A.getApplication(r?.applicationId));
        let i = k.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, H.O)({
                applicationId: t,
                application: n,
                channel: f,
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
                context: { channel: f, guild: T },
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
                            G.default.track(ee.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: f?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: o,
                            }),
                            null != e && null != n && null != a
                                ? u(new p.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in C.A.ReasonCodes
                                  ? u(new C.A(s))
                                  : u(new C.A(C.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function eu(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: s, guildId: o } = e,
        l = w.default.getSessionId(),
        c = k.default.getCurrentUser(),
        d = n;
    if (null == d) return { result: "failure", reason: 1 };
    let _ = await (0, W.A)(d, i);
    if (null == c || null == _) return { result: "failure", reason: 2 };
    if (null == i) return { result: "failure", reason: 3 };
    let f = x.A.getChannel(i);
    if (null == f) return { result: "failure", reason: 3 };
    let p = (0, K.JH)({ channelId: i, ChannelStore: x.A, GuildStore: P.A, PermissionStore: M.A, VoiceStateStore: U.A });
    if (p !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, D.i)())
                : p === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  u.A.show({
                      title: ei.intl.string(ei.t["IOy+I5"]),
                      body: ei.intl.string(ei.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let h = j.Ay.getCurrentEmbeddedActivity();
    if (
        (h?.applicationId != null && (t = A.A.getApplication(h?.applicationId)),
        !(
            !s ||
            (await (0, H.O)({
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
            n = X.lk.includes(f.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: f.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, B.pE)(f) || !n) return { result: "failure", reason: 9 };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: o, channel_id: i, application_id: n, session_id: l },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != i
        ? (await F.A.post({
              url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
              body: { session_id: l, guild_id: o ?? void 0 },
              ...m,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function ec(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = j.Ay.getSelfEmbeddedActivityForLocation(t);
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: i?.launchId,
        showFeedback: r,
    });
    let a = (0, Y.H)(t);
    if (null != a) {
        let e = y.A.getSelectedParticipantId(a),
            t = k.default.getCurrentUser()?.id,
            r = j.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e === (0, T.Qt)({ applicationId: n, instanceId: r?.compositeInstanceId }) && d.A.selectParticipant(a, null);
    }
}
async function ed() {
    try {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: ee.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => L.Ay.createFromServer(e));
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            l.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t });
    } catch (e) {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function e_(e, t, n) {
    try {
        l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = null != t ? { channel_id: t } : void 0,
            i = await s.Bo.post({
                url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
                query: r,
                attachments: [{ name: "file", file: n }],
                rejectWithError: !0,
            });
        return (
            l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new p.A(e);
    }
}
let ef = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ep(e) {
    let { guildId: t, force: n = !1 } = e,
        i = j.Ay.getShelfActivities(t),
        a = i.map((e) => A.A.getApplication(e.application_id)).filter(V.Vq);
    if (!n && !j.Ay.shouldFetchShelf(t)) {
        if (j.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                r = new Promise((n) => {
                    (e = ef.bind(null, t, n)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                i = new Promise((e) => {
                    (n = ef.bind(null, t, e)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([r, i]),
                null != e && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != n && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = null));
        }
        return { activityConfigs: i, applications: a };
    }
    try {
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await F.A.get({
                url: ee.Rsh.ACTIVITY_SHELF,
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
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: i,
                applications: a,
                assets: s,
            }),
            a.length > 0 && l.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: a }),
            { activityConfigs: i, applications: a.map((e) => L.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            l.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: i, applications: a }
        );
    }
}
async function eh(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        s = await _.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: r }, i);
    null != x.A.getChannel(n) && f.A.sendInvite(n, s.code, i, a);
}
async function em(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        o = await _.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: n }, i);
    await c.A.ensurePrivateChannel(r).then((e) => {
        let t,
            n = x.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = N.Ay.parse(n, s).content), f.A.sendInvite(e, o.code, i, a, t);
    });
}
function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, S.$l)(o.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eE(e) {
    let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eA(e) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eI(e) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eT() {
    eA(J.Gd.ACTIVITY_POPOUT_WINDOW), l.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function ey(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await s.Bo.post({ url: ee.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function eS(e, t) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await ey(e, t ?? void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            l.h.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: e, proxyTicket: n });
    } catch (s) {
        let n = x.A.getChannel(t),
            r = n?.guild_id ?? null,
            a = null != r ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, R.m)(),
                applicationId: e,
                channelId: t,
                guildId: r,
                locationKind: a,
                error: s instanceof v.A || s instanceof p.A || s instanceof C.A ? s : new p.A(s),
            }),
            !1
        );
    } finally {
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

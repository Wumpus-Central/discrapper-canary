"use strict";
n.d(t, {
    CS: () => ec,
    D2: () => eT,
    Ir: () => em,
    LK: () => ep,
    LV: () => ef,
    SE: () => ed,
    Ue: () => eh,
    _H: () => eu,
    gk: () => eg,
    i5: () => eA,
    jp: () => eI,
    od: () => eS,
    rW: () => es,
    su: () => ea,
    tk: () => eE,
});
var r = n(110259),
    i = n(344351),
    s = n(562465),
    a = n(554146),
    o = n(73153),
    l = n(157559),
    u = n(308528),
    d = n(367513),
    c = n(846293),
    _ = n(843472),
    f = n(181658),
    E = n(155718),
    h = n(264322),
    p = n(545152),
    m = n(361926),
    g = n(587895),
    A = n(972995),
    I = n(20015),
    T = n(568598),
    S = n(313961),
    y = n(367727),
    N = n(744230),
    O = n(113267),
    R = n(207371),
    v = n(451909),
    C = n(195880),
    b = n(87001),
    D = n(192552),
    L = n(611010),
    w = n(961350),
    M = n(734057),
    P = n(71393),
    U = n(576705),
    k = n(287809),
    x = n(977997),
    G = n(954571),
    V = n(403362),
    F = n(499785),
    B = n(811024),
    H = n(933958),
    Y = n(383497),
    W = n(969151),
    j = n(817636),
    K = n(782091),
    $ = n(108959),
    z = n(448739),
    q = n(90804),
    X = n(946255),
    Q = n(859007),
    J = n(360469),
    Z = n(5867),
    ee = n(652215),
    et = n(705751),
    en = n(49999),
    er = n(172799),
    ei = n(985018);
function es(e) {
    let t = H.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && eu({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function ea(e) {
    let {
            channelId: t,
            applicationId: r,
            isStart: s,
            analyticsLocations: a,
            locationObject: l,
            embeddedActivitiesManager: u,
            componentId: d,
            commandOrigin: c,
            sectionName: _,
            source: E,
            onExecutedCallback: h,
            referrerId: p,
            customId: m,
            inviterUserId: A,
            onConfirmActivityLaunchChecksAlertOpen: T,
        } = e,
        S = M.A.getChannel(t),
        y = S?.getGuildId() ?? void 0;
    if (null == y && !S?.isPrivate()) return !1;
    let v = g.A.getApplication(r),
        D = null != v && (0, R.x)(v),
        L = (0, C.m)();
    try {
        if (b.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (((0, z.Q)(), (0, Q.y)({ applicationId: r }))) return !0;
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: L,
            applicationId: r,
            channelId: t ?? null,
            componentId: d,
            analyticsLocations: a,
            source: E,
            commandOrigin: c,
            inviterUserId: A,
            launchParams: { customId: m, referrerId: p },
        });
        let e = await eT(r, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: r,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let i = k.default.getCurrentUser();
        if (
            (null != i &&
                (0, X.A)({
                    type: s ? ee.UqL.LAUNCH : ee.UqL.JOIN,
                    userId: i?.id,
                    guildId: y,
                    channelId: t,
                    channelType: S?.type,
                    applicationId: r,
                    locationObject: l,
                    analyticsLocations: a ?? [],
                    source: E,
                    referrerId: p,
                    inviterUserId: A,
                }),
            s)
        ) {
            var w, P;
            let e, n, i, s;
            if (
                null == t ||
                ((w = r),
                (P = S),
                (e = P?.type === ee.rbe.GUILD_VOICE),
                (n = g.A.getApplication(w)),
                (i = (0, I.n)(n, ee.gfo.EMBEDDED)),
                (s = (0, B.AX)(P)),
                (!e || !i) && !s)
            )
                throw new N.A(N.A.Reasons.INVALID_CHANNEL);
            let a = await eo({
                applicationId: r,
                nonce: L,
                channelId: t,
                guildId: y,
                commandOrigin: c,
                sectionName: _,
                source: E,
                onExecutedCallback: h,
                onConfirmActivityLaunchChecksAlertOpen: T,
                embeddedActivitiesManager: u,
            });
            if ("failure" === a.result)
                if (4 === a.reason)
                    return (
                        o.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: L,
                            applicationId: r,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new N.A(N.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await el({ applicationId: r, channelId: t, embeddedActivitiesManager: u, isStart: s, guildId: y });
            if ((h?.(), "failure" === e.result))
                throw new N.A(N.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: L, applicationId: r, channelId: t ?? null });
    } catch (n) {
        if (D) return !1;
        let e = null != y ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: L,
                applicationId: r,
                channelId: t ?? null,
                guildId: y ?? null,
                isStart: s,
                error: n instanceof N.A || n instanceof f.A || n instanceof O.A ? n : new f.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
async function eo(e) {
    let {
            applicationId: t,
            nonce: n,
            channelId: r,
            guildId: i,
            commandOrigin: s,
            sectionName: a,
            source: o,
            onExecutedCallback: l,
            onConfirmActivityLaunchChecksAlertOpen: u,
            embeddedActivitiesManager: d,
        } = e,
        c = null;
    try {
        c = await (0, m.Ay)(r, t);
    } catch (e) {
        if (e.message === m.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let _ = c.handler !== E.Ys.APP_HANDLER;
    if (!(_ || et.TR.includes(t))) {
        null != r && (await (0, h.Zn)({ type: "channel", channelId: r })), await (0, h.Zn)({ type: "user" });
        let e = M.A.getChannel(r),
            { isAuthorized: n } = await (0, A.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: c.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let I = M.A.getChannel(r),
        T = null != i ? P.A.getGuild(i) : null;
    if (null == I) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = g.A.getApplication(t),
            r = H.Ay.getCurrentEmbeddedActivity();
        r?.applicationId != null && (e = g.A.getApplication(r?.applicationId));
        let i = k.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, Y.O)({
                applicationId: t,
                application: n,
                channel: I,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: d,
                user: i,
                onConfirmActivityLaunchChecksAlertOpen: u,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, u) => {
            (0, p.A)({
                command: c,
                optionValues: {},
                context: { channel: I, guild: T },
                commandOrigin: s,
                sectionName: a,
                source: o,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        l?.(), e();
                    },
                    onFailure: (e, n, s, a) => {
                        l?.(),
                            G.default.track(ee.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: I?.type,
                                error_code: e,
                                error_message: n,
                                error_status: s,
                                error_reason_code: a,
                                source: o,
                            }),
                            null != e && null != n && null != s
                                ? u(new f.A({ status: s, body: { message: n, code: e } }))
                                : null != a && a in O.A.ReasonCodes
                                  ? u(new O.A(a))
                                  : u(new O.A(O.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function el(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: s, isStart: a, guildId: o } = e,
        u = w.default.getSessionId(),
        d = k.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let c = await (0, j.A)(n, i);
    if (null == d || null == c) return { result: "failure", reason: 2 };
    if (null == i) return { result: "failure", reason: 3 };
    let _ = M.A.getChannel(i);
    if (null == _) return { result: "failure", reason: 3 };
    let f = (0, K.JH)({ channelId: i, ChannelStore: M.A, GuildStore: P.A, PermissionStore: U.A, VoiceStateStore: x.A });
    if (f !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            f === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, D.i)())
                : f === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.A.show({
                      title: ei.intl.string(ei.t["IOy+I5"]),
                      body: ei.intl.string(ei.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let E = H.Ay.getCurrentEmbeddedActivity();
    if (
        (E?.applicationId != null && (t = g.A.getApplication(E?.applicationId)),
        !(
            !a ||
            (await (0, Y.O)({
                applicationId: n,
                application: c,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: s,
                user: d,
            }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != _) {
        let e = (0, $.A)(_.id),
            n = J.lk.includes(_.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: _.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, B.pE)(_) || !n) return { result: "failure", reason: 9 };
    }
    let h = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: o, channel_id: i, application_id: n, session_id: u },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != i
        ? (await F.A.post({
              url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
              body: { session_id: u, guild_id: o ?? void 0 },
              ...h,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function eu(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = H.Ay.getSelfEmbeddedActivityForLocation(t);
    o.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: i?.launchId,
        showFeedback: r,
    });
    let s = (0, W.H)(t);
    if (null != s) {
        let e = S.A.getSelectedParticipantId(s),
            t = k.default.getCurrentUser()?.id,
            r = H.Ay.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e === (0, T.Qt)({ applicationId: n, instanceId: r?.compositeInstanceId }) && d.A.selectParticipant(s, null);
    }
}
async function ed() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: ee.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => L.Ay.createFromServer(e));
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t });
    } catch (e) {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function ec(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = await s.Bo.post({
            url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: r.body.attachment }),
            r.body.attachment
        );
    } catch (e) {
        return o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new f.A(e);
    }
}
let e_ = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ef(e) {
    let { guildId: t, force: n = !1 } = e,
        i = H.Ay.getShelfActivities(t),
        s = i.map((e) => g.A.getApplication(e.application_id)).filter(V.Vq);
    if (!n && !H.Ay.shouldFetchShelf(t)) {
        if (H.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                r = new Promise((n) => {
                    (e = e_.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                i = new Promise((e) => {
                    (n = e_.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([r, i]),
                null != e && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != n && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = null));
        }
        return { activityConfigs: i, applications: s };
    }
    try {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
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
            s = n.body.applications ?? [],
            a = n.body.assets ?? {};
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: i,
                applications: s,
                assets: a,
            }),
            s.length > 0 && o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: s }),
            { activityConfigs: i, applications: s.map((e) => L.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: i, applications: s }
        );
    }
}
async function eE(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: s } = e,
        a = await c.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: r }, i);
    null != M.A.getChannel(n) && _.A.sendInvite(n, a.code, i, s);
}
async function eh(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: s, prefixedContent: a } = e,
        o = await c.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: n }, i);
    await u.A.ensurePrivateChannel(r).then((e) => {
        let t,
            n = M.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != a && (t = v.Ay.parse(n, a).content), _.A.sendInvite(e, o.code, i, s, t);
    });
}
function ep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, y.$l)(a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function em(e) {
    let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eg(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eA(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eI() {
    eg(Z.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eT(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await s.Bo.post({ url: ee.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function eS(e, t) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await eT(e, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: e, proxyTicket: n });
    } catch (a) {
        let n = M.A.getChannel(t),
            r = n?.guild_id ?? null,
            s = null != r ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, C.m)(),
                applicationId: e,
                channelId: t,
                guildId: r,
                locationKind: s,
                error: a instanceof N.A || a instanceof f.A || a instanceof O.A ? a : new f.A(a),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

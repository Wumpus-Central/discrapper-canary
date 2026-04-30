"use strict";
n.d(t, {
    CS: () => ed,
    D2: () => eT,
    Ir: () => em,
    LK: () => eE,
    LV: () => ef,
    SE: () => ec,
    Ue: () => ep,
    _H: () => eu,
    gk: () => eg,
    i5: () => eA,
    jp: () => eI,
    od: () => eS,
    rW: () => es,
    su: () => ea,
    tk: () => eh,
});
var i = n(562708),
    r = n(344351),
    s = n(636537),
    a = n(554146),
    o = n(228366),
    l = n(157559),
    u = n(308528),
    c = n(367513),
    d = n(376728),
    _ = n(720149),
    f = n(181658),
    h = n(155718),
    p = n(264322),
    E = n(545152),
    m = n(361926),
    g = n(587895),
    A = n(972995),
    I = n(20015),
    T = n(568598),
    S = n(313961),
    N = n(281678),
    y = n(744230),
    C = n(113267),
    v = n(375802),
    O = n(451909),
    R = n(195880),
    b = n(567249),
    D = n(192552),
    L = n(395671),
    w = n(495544),
    M = n(734057),
    P = n(71393),
    x = n(576705),
    U = n(287809),
    k = n(977997),
    G = n(174459),
    F = n(403362),
    V = n(499785),
    B = n(811024),
    H = n(933958),
    j = n(799061),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    z = n(108959),
    $ = n(582776),
    q = n(90804),
    Z = n(946255),
    X = n(859007),
    Q = n(360469),
    J = n(5867),
    ee = n(652215),
    et = n(705751),
    en = n(49999),
    ei = n(172799),
    er = n(375708);
function es(e) {
    let t = H.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && eu({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function ea(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: s,
            analyticsLocations: a,
            locationObject: l,
            embeddedActivitiesManager: u,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            source: h,
            onExecutedCallback: p,
            referrerId: E,
            customId: m,
            inviterUserId: A,
            onConfirmActivityLaunchChecksAlertOpen: T,
        } = e,
        S = M.A.getChannel(t),
        N = S?.getGuildId() ?? void 0;
    if (null == N && !S?.isPrivate()) return !1;
    let O = g.A.getApplication(i),
        D = null != O && (0, v.x)(O),
        L = (0, R.m)();
    try {
        if (b.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (((0, $.Q)(), (0, X.y)({ applicationId: i }))) return !0;
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: L,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: a,
            source: h,
            commandOrigin: d,
            inviterUserId: A,
            launchParams: { customId: m, referrerId: E },
        });
        let e = await eT(i, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let r = U.default.getCurrentUser();
        if (
            (null != r &&
                (0, Z.A)({
                    type: s ? ee.UqL.LAUNCH : ee.UqL.JOIN,
                    userId: r?.id,
                    guildId: N,
                    channelId: t,
                    channelType: S?.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: a ?? [],
                    source: h,
                    referrerId: E,
                    inviterUserId: A,
                }),
            s)
        ) {
            var w, P;
            let e, n, r, s;
            if (
                null == t ||
                ((w = i),
                (P = S),
                (e = P?.type === ee.rbe.GUILD_VOICE),
                (n = g.A.getApplication(w)),
                (r = (0, I.n)(n, ee.gfo.EMBEDDED)),
                (s = (0, B.AX)(P)),
                (!e || !r) && !s)
            )
                throw new y.A(y.A.Reasons.INVALID_CHANNEL);
            let a = await eo({
                applicationId: i,
                nonce: L,
                channelId: t,
                guildId: N,
                commandOrigin: d,
                sectionName: _,
                source: h,
                onExecutedCallback: p,
                onConfirmActivityLaunchChecksAlertOpen: T,
                embeddedActivitiesManager: u,
            });
            if ("failure" === a.result)
                if (4 === a.reason)
                    return (
                        o.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: L,
                            applicationId: i,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new y.A(y.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await el({ applicationId: i, channelId: t, embeddedActivitiesManager: u, isStart: s, guildId: N });
            if ((p?.(), "failure" === e.result))
                throw new y.A(y.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: L, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (D) return !1;
        let e = null != N ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: L,
                applicationId: i,
                channelId: t ?? null,
                guildId: N ?? null,
                isStart: s,
                error: n instanceof y.A || n instanceof f.A || n instanceof C.A ? n : new f.A(n),
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
            channelId: i,
            guildId: r,
            commandOrigin: s,
            sectionName: a,
            source: o,
            onExecutedCallback: l,
            onConfirmActivityLaunchChecksAlertOpen: u,
            embeddedActivitiesManager: c,
        } = e,
        d = null;
    try {
        d = await (0, m.Ay)(i, t);
    } catch (e) {
        if (e.message === m.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let _ = d.handler !== h.Ys.APP_HANDLER;
    if (!(_ || et.TR.includes(t))) {
        null != i && (await (0, p.Zn)({ type: "channel", channelId: i })), await (0, p.Zn)({ type: "user" });
        let e = M.A.getChannel(i),
            { isAuthorized: n } = await (0, A.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let I = M.A.getChannel(i),
        T = null != r ? P.A.getGuild(r) : null;
    if (null == I) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = g.A.getApplication(t),
            i = H.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = g.A.getApplication(i?.applicationId));
        let r = U.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, j.O)({
                applicationId: t,
                application: n,
                channel: I,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: c,
                user: r,
                onConfirmActivityLaunchChecksAlertOpen: u,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, u) => {
            (0, E.A)({
                command: d,
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
                                channel_id: i,
                                guild_id: r,
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
                                : null != a && a in C.A.ReasonCodes
                                  ? u(new C.A(a))
                                  : u(new C.A(C.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function el(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: s, isStart: a, guildId: o } = e,
        u = w.default.getSessionId(),
        c = U.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let d = await (0, W.A)(n, r);
    if (null == c || null == d) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let _ = M.A.getChannel(r);
    if (null == _) return { result: "failure", reason: 3 };
    let f = (0, K.JH)({ channelId: r, ChannelStore: M.A, GuildStore: P.A, PermissionStore: x.A, VoiceStateStore: k.A });
    if (f !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            f === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, D.i)())
                : f === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.A.show({
                      title: er.intl.string(er.t["IOy+I5"]),
                      body: er.intl.string(er.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let h = H.Ay.getCurrentEmbeddedActivity();
    if (
        (h?.applicationId != null && (t = g.A.getApplication(h?.applicationId)),
        !(
            !a ||
            (await (0, j.O)({
                applicationId: n,
                application: d,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: s,
                user: c,
            }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != _) {
        let e = (0, z.A)(_.id),
            n = Q.lk.includes(_.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: _.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, B.pE)(_) || !n) return { result: "failure", reason: 9 };
    }
    let p = {
        trackedActionData: {
            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: o, channel_id: r, application_id: n, session_id: u },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != r
        ? (await V.A.post({
              url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: u, guild_id: o ?? void 0 },
              ...p,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function eu(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = H.Ay.getSelfEmbeddedActivityForLocation(t);
    o.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: r?.launchId,
        showFeedback: i,
    });
    let s = (0, Y.H)(t);
    if (null != s) {
        let e = S.A.getSelectedParticipantId(s),
            t = U.default.getCurrentUser()?.id,
            i = H.Ay.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, T.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && c.A.selectParticipant(s, null);
    }
}
async function ec() {
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
async function ed(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await s.Bo.post({
            url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
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
let e_ = (e, t, n) => {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
};
async function ef(e) {
    let { guildId: t, force: n = !1 } = e,
        r = H.Ay.getShelfActivities(t),
        s = r.map((e) => g.A.getApplication(e.application_id)).filter(F.Vq);
    if (!n && !H.Ay.shouldFetchShelf(t)) {
        if (H.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    (e = e_.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (n = e_.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([i, r]),
                null != e && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != n && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = null));
        }
        return { activityConfigs: r, applications: s };
    }
    try {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await V.A.get({
                url: ee.Rsh.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: t },
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            r = n.body.activities ?? [],
            s = n.body.applications ?? [],
            a = n.body.assets ?? {};
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: r,
                applications: s,
                assets: a,
            }),
            s.length > 0 && o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: s }),
            { activityConfigs: r, applications: s.map((e) => L.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: r, applications: s }
        );
    }
}
async function eh(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: s } = e,
        a = await d.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != M.A.getChannel(n) && _.A.sendInvite(n, a.code, r, s);
}
async function ep(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: s, prefixedContent: a } = e,
        o = await d.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await u.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = M.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != a && (t = O.Ay.parse(n, a).content), _.A.sendInvite(e, o.code, r, s, t);
    });
}
function eE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, N.$l)(a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
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
    eg(J.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
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
            i = n?.guild_id ?? null,
            s = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, R.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: s,
                error: a instanceof y.A || a instanceof f.A || a instanceof C.A ? a : new f.A(a),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

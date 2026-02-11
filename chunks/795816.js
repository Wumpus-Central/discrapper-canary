"use strict";
n.d(t, {
    CS: () => e_,
    D2: () => eS,
    Ir: () => eE,
    LK: () => eg,
    LV: () => ep,
    SE: () => ed,
    Ue: () => em,
    _H: () => ec,
    gk: () => eA,
    i5: () => eI,
    jp: () => eT,
    od: () => ey,
    rW: () => ea,
    su: () => es,
    tk: () => eh,
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
    p = n(155718),
    h = n(264322),
    m = n(545152),
    g = n(361926),
    E = n(587895),
    A = n(972995),
    I = n(20015),
    T = n(568598),
    S = n(313961),
    y = n(367727),
    v = n(744230),
    C = n(113267),
    N = n(207371),
    b = n(451909),
    R = n(195880),
    O = n(87001),
    D = n(192552),
    L = n(611010),
    w = n(961350),
    x = n(734057),
    M = n(71393),
    P = n(576705),
    k = n(287809),
    U = n(977997),
    G = n(954571),
    F = n(403362),
    V = n(499785),
    B = n(811024),
    j = n(933958),
    H = n(383497),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    $ = n(108959),
    z = n(448739),
    q = n(90804),
    Z = n(946255),
    X = n(859007),
    Q = n(360469),
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
            locationObject: l,
            embeddedActivitiesManager: u,
            componentId: c,
            commandOrigin: d,
            sectionName: _,
            source: p,
            onExecutedCallback: h,
            referrerId: m,
            customId: g,
            inviterUserId: A,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        T = x.A.getChannel(t),
        S = T?.getGuildId() ?? void 0;
    if (null == S && !T?.isPrivate()) return !1;
    let y = E.A.getApplication(r),
        b = null != y && (0, N.x)(y),
        D = (0, R.m)();
    try {
        if (O.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (((0, z.Q)(), (0, X.y)({ applicationId: r }))) return !0;
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: D,
            applicationId: r,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: s,
            source: p,
            commandOrigin: d,
            inviterUserId: A,
            launchParams: { customId: g, referrerId: m },
        });
        let e = await eS(r, t ?? void 0);
        o.h.dispatch({
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
                    guildId: S,
                    channelId: t,
                    channelType: T?.type,
                    applicationId: r,
                    locationObject: l,
                    analyticsLocations: s ?? [],
                    source: p,
                    referrerId: m,
                    inviterUserId: A,
                }),
            a)
        ) {
            if (null == t || !eo(r, T)) throw new v.A(v.A.Reasons.INVALID_CHANNEL);
            let e = await el({
                applicationId: r,
                nonce: D,
                channelId: t,
                guildId: S,
                commandOrigin: d,
                sectionName: _,
                source: p,
                onExecutedCallback: h,
                onConfirmActivityLaunchChecksAlertOpen: I,
                embeddedActivitiesManager: u,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        o.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: D,
                            applicationId: r,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new v.A(v.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({ applicationId: r, channelId: t, embeddedActivitiesManager: u, isStart: a, guildId: S });
            if ((h?.(), "failure" === e.result))
                throw new v.A(v.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: D, applicationId: r, channelId: t ?? null });
    } catch (n) {
        if (b) return !1;
        let e = null != S ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: D,
                applicationId: r,
                channelId: t ?? null,
                guildId: S ?? null,
                isStart: a,
                error: n instanceof v.A || n instanceof f.A || n instanceof C.A ? n : new f.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function eo(e, t) {
    let n = t?.type === ee.rbe.GUILD_VOICE,
        r = E.A.getApplication(e),
        i = (0, I.n)(r, ee.gfo.EMBEDDED),
        a = (0, B.AX)(t);
    return (n && i) || a;
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
        d = await (0, g.Ay)(r, t);
    } catch (e) {
        if (e.message === g.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let _ = d.handler !== p.Ys.APP_HANDLER;
    if (!(_ || et.TR.includes(t))) {
        null != r && (await (0, h.Zn)({ type: "channel", channelId: r })), await (0, h.Zn)({ type: "user" });
        let e = x.A.getChannel(r),
            { isAuthorized: n } = await (0, A.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let I = x.A.getChannel(r),
        T = null != i ? M.A.getGuild(i) : null;
    if (null == I) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = E.A.getApplication(t),
            r = j.Ay.getCurrentEmbeddedActivity();
        r?.applicationId != null && (e = E.A.getApplication(r?.applicationId));
        let i = k.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, H.O)({
                applicationId: t,
                application: n,
                channel: I,
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
            (0, m.A)({
                command: d,
                optionValues: {},
                context: { channel: I, guild: T },
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
                                channel_type: I?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: o,
                            }),
                            null != e && null != n && null != a
                                ? u(new f.A({ status: a, body: { message: n, code: e } }))
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
        u = w.default.getSessionId(),
        c = k.default.getCurrentUser(),
        d = n;
    if (null == d) return { result: "failure", reason: 1 };
    let _ = await (0, W.A)(d, i);
    if (null == c || null == _) return { result: "failure", reason: 2 };
    if (null == i) return { result: "failure", reason: 3 };
    let f = x.A.getChannel(i);
    if (null == f) return { result: "failure", reason: 3 };
    let p = (0, K.JH)({ channelId: i, ChannelStore: x.A, GuildStore: M.A, PermissionStore: P.A, VoiceStateStore: U.A });
    if (p !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, D.i)())
                : p === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.A.show({
                      title: ei.intl.string(ei.t["IOy+I5"]),
                      body: ei.intl.string(ei.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let h = j.Ay.getCurrentEmbeddedActivity();
    if (
        (h?.applicationId != null && (t = E.A.getApplication(h?.applicationId)),
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
        let e = (0, $.A)(f.id),
            n = Q.lk.includes(f.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: f.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, B.pE)(f) || !n) return { result: "failure", reason: 9 };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: o, channel_id: i, application_id: n, session_id: u },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != i
        ? (await V.A.post({
              url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
              body: { session_id: u, guild_id: o ?? void 0 },
              ...m,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function ec(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = j.Ay.getSelfEmbeddedActivityForLocation(t);
    o.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: i?.launchId,
        showFeedback: r,
    });
    let a = (0, Y.H)(t);
    if (null != a) {
        let e = S.A.getSelectedParticipantId(a),
            t = k.default.getCurrentUser()?.id,
            r = j.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e === (0, T.Qt)({ applicationId: n, instanceId: r?.compositeInstanceId }) && c.A.selectParticipant(a, null);
    }
}
async function ed() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await a.Bo.get({
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
async function e_(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = null != t ? { channel_id: t } : void 0,
            i = await a.Bo.post({
                url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let ef = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ep(e) {
    let { guildId: t, force: n = !1 } = e,
        i = j.Ay.getShelfActivities(t),
        a = i.map((e) => E.A.getApplication(e.application_id)).filter(F.Vq);
    if (!n && !j.Ay.shouldFetchShelf(t)) {
        if (j.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                r = new Promise((n) => {
                    (e = ef.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                i = new Promise((e) => {
                    (n = ef.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
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
            n = await V.A.get({
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
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: i,
                applications: a,
                assets: s,
            }),
            a.length > 0 && o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: a }),
            { activityConfigs: i, applications: a.map((e) => L.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: i, applications: a }
        );
    }
}
async function eh(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        s = await d.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: r }, i);
    null != x.A.getChannel(n) && _.A.sendInvite(n, s.code, i, a);
}
async function em(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        o = await d.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: n }, i);
    await u.A.ensurePrivateChannel(r).then((e) => {
        let t,
            n = x.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = b.Ay.parse(n, s).content), _.A.sendInvite(e, o.code, i, a, t);
    });
}
function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, y.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eE(e) {
    let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await a.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eA(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eI(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eT() {
    eA(J.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eS(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await a.Bo.post({ url: ee.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function ey(e, t) {
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
        let n = x.A.getChannel(t),
            r = n?.guild_id ?? null,
            a = null != r ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, R.m)(),
                applicationId: e,
                channelId: t,
                guildId: r,
                locationKind: a,
                error: s instanceof v.A || s instanceof f.A || s instanceof C.A ? s : new f.A(s),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

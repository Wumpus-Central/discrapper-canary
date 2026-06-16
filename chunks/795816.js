"use strict";
n.d(t, {
    CS: () => e_,
    D2: () => eS,
    Ir: () => eg,
    LK: () => em,
    LV: () => ef,
    SE: () => ed,
    Ue: () => eE,
    _H: () => ec,
    gk: () => eA,
    i5: () => eI,
    jp: () => eT,
    od: () => ey,
    rW: () => ea,
    su: () => eo,
    tk: () => ep,
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
    h = n(181658),
    f = n(155718),
    p = n(264322),
    E = n(545152),
    m = n(361926),
    g = n(587895),
    A = n(972995),
    I = n(20015),
    T = n(568598),
    S = n(313961),
    y = n(367727),
    C = n(744230),
    N = n(113267),
    v = n(207371),
    R = n(451909),
    O = n(195880),
    b = n(567249),
    D = n(192552),
    L = n(395671),
    w = n(495544),
    M = n(734057),
    P = n(71393),
    x = n(576705),
    k = n(287809),
    U = n(977997),
    G = n(174459),
    F = n(403362),
    V = n(499785),
    B = n(811024),
    j = n(933958),
    H = n(799061),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    $ = n(108959),
    z = n(582776),
    q = n(400115),
    Z = n(90804),
    X = n(946255),
    Q = n(859007),
    J = n(360469),
    ee = n(5867),
    et = n(652215),
    en = n(705751),
    ei = n(49999),
    er = n(172799),
    es = n(375708);
function ea(e) {
    let t = j.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && ec({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function eo(e) {
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
            source: f,
            onExecutedCallback: p,
            referrerId: E,
            customId: m,
            inviterUserId: A,
            onConfirmActivityLaunchChecksAlertOpen: T,
        } = e,
        S = M.A.getChannel(t),
        y = S?.getGuildId() ?? void 0;
    if (null == y && !S?.isPrivate()) return !1;
    let R = g.A.getApplication(i),
        D = null != R && (0, v.x)(R),
        L = (0, O.m)();
    try {
        if (b.A.getWindowOpen(et.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(et.MLl.ACTIVITY_POPOUT);
        }
        if (((0, z.Q)(), (0, Q.y)({ applicationId: i })))
            return (
                (0, q.j$)(i, {
                    isStart: s,
                    inviterUserId: A,
                    channelId: t ?? null,
                    guildId: y ?? null,
                    locationKind: null != y ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL,
                }),
                !0
            );
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: L,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: a,
            source: f,
            commandOrigin: d,
            inviterUserId: A,
            launchParams: { customId: m, referrerId: E },
        });
        let e = await eS(i, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let h = k.default.getCurrentUser();
        if (
            (null != h &&
                (0, X.A)({
                    type: s ? et.UqL.LAUNCH : et.UqL.JOIN,
                    userId: h?.id,
                    guildId: y,
                    channelId: t,
                    channelType: S?.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: a ?? [],
                    source: f,
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
                (e = P?.type === et.rbe.GUILD_VOICE),
                (n = g.A.getApplication(w)),
                (r = (0, I.n)(n, et.gfo.EMBEDDED)),
                (s = (0, B.AX)(P)),
                (!e || !r) && !s)
            )
                throw new C.A(C.A.Reasons.INVALID_CHANNEL);
            let a = await el({
                applicationId: i,
                nonce: L,
                channelId: t,
                guildId: y,
                commandOrigin: d,
                sectionName: _,
                source: f,
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
                else throw new C.A(C.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({ applicationId: i, channelId: t, embeddedActivitiesManager: u, isStart: s, guildId: y });
            if ((p?.(), "failure" === e.result))
                throw new C.A(C.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: L, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (D) return !1;
        let e = null != y ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: L,
                applicationId: i,
                channelId: t ?? null,
                guildId: y ?? null,
                isStart: s,
                error: n instanceof C.A || n instanceof h.A || n instanceof N.A ? n : new h.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
async function el(e) {
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
    let _ = d.handler !== f.Ys.APP_HANDLER;
    if (!(_ || en.TR.includes(t))) {
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
            i = j.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = g.A.getApplication(i?.applicationId));
        let r = k.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, H.O)({
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
                            G.default.track(et.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
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
                                ? u(new h.A({ status: s, body: { message: n, code: e } }))
                                : null != a && a in N.A.ReasonCodes
                                  ? u(new N.A(a))
                                  : u(new N.A(N.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function eu(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: s, isStart: a, guildId: o } = e,
        u = w.default.getSessionId(),
        c = k.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let d = await (0, W.A)(n, r);
    if (null == c || null == d) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let _ = M.A.getChannel(r);
    if (null == _) return { result: "failure", reason: 3 };
    let h = (0, K.JH)({ channelId: r, ChannelStore: M.A, GuildStore: P.A, PermissionStore: x.A, VoiceStateStore: U.A });
    if (h !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            h === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, D.i)())
                : h === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.A.show({
                      title: es.intl.string(es.t["IOy+I5"]),
                      body: es.intl.string(es.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let f = j.Ay.getCurrentEmbeddedActivity();
    if (
        (f?.applicationId != null && (t = g.A.getApplication(f?.applicationId)),
        !(
            !a ||
            (await (0, H.O)({
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
        let e = (0, $.A)(_.id),
            n = J.lk.includes(_.type);
        if (e) {
            if (!(await (0, Z.A)({ channelId: _.id, bypassChangeModal: null != t })))
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
              url: et.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: u, guild_id: o ?? void 0 },
              ...p,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function ec(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = j.Ay.getSelfEmbeddedActivityForLocation(t);
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
            t = k.default.getCurrentUser()?.id,
            i = j.Ay.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, T.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && c.A.selectParticipant(s, null);
    }
}
async function ed() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: et.Rsh.APPLICATIONS_WITH_ASSETS,
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
        let i = await s.Bo.post({
            url: et.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new h.A(e);
    }
}
let eh = (e, t, n) => {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
};
async function ef(e) {
    let { guildId: t, force: n = !1 } = e,
        r = j.Ay.getShelfActivities(t),
        s = r.map((e) => g.A.getApplication(e.application_id)).filter(F.Vq);
    if (!n && !j.Ay.shouldFetchShelf(t)) {
        if (j.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    (e = eh.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (n = eh.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([i, r]),
                null != e && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = void 0)),
                null != n && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = void 0));
        }
        return { activityConfigs: r, applications: s };
    }
    try {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await V.A.get({
                url: et.Rsh.ACTIVITY_SHELF,
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
async function ep(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: s } = e,
        a = await d.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != M.A.getChannel(n) && _.A.sendInvite(n, a.code, r, s);
}
async function eE(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: s, prefixedContent: a } = e,
        o = await d.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await u.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = M.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != a && (t = R.Ay.parse(n, a).content), _.A.sendInvite(e, o.code, r, s, t);
    });
}
function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei.i.INDIRECT_ACTION;
    (0, y.$l)(a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eg(e) {
    let t = et.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
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
    eA(ee.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eS(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await s.Bo.post({ url: et.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
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
    } catch (a) {
        let n = M.A.getChannel(t),
            i = n?.guild_id ?? null,
            s = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, O.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: s,
                error: a instanceof C.A || a instanceof h.A || a instanceof N.A ? a : new h.A(a),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

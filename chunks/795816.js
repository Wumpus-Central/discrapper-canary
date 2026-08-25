"use strict";
n.d(t, {
    CS: () => e_,
    D2: () => eS,
    Ir: () => ep,
    LK: () => ef,
    LV: () => eA,
    SE: () => eu,
    Ue: () => eI,
    _H: () => ec,
    gk: () => eT,
    i5: () => em,
    jp: () => eg,
    od: () => eN,
    rW: () => es,
    su: () => el,
    tk: () => eh,
});
var i = n(562708),
    r = n(344351),
    a = n(636537),
    s = n(554146),
    l = n(228366),
    o = n(157559),
    d = n(308528),
    c = n(367513),
    u = n(376728),
    _ = n(148494),
    E = n(181658),
    A = n(155718),
    h = n(264322),
    I = n(545152),
    f = n(361926),
    p = n(587895),
    T = n(972995),
    m = n(20015),
    g = n(568598),
    S = n(198052),
    N = n(367727),
    C = n(744230),
    R = n(113267),
    O = n(625180),
    L = n(207371),
    y = n(451909),
    D = n(195880),
    v = n(567249),
    b = n(192552),
    M = n(395671),
    P = n(280450),
    U = n(734057),
    w = n(71393),
    G = n(576705),
    x = n(287809),
    k = n(977997),
    F = n(174459),
    V = n(403362),
    B = n(499785),
    H = n(811024),
    j = n(933958),
    W = n(799061),
    Y = n(969151),
    K = n(817636),
    $ = n(782091),
    z = n(108959),
    Z = n(400115),
    q = n(90804),
    X = n(946255),
    Q = n(859007),
    J = n(360469),
    ee = n(5867),
    et = n(652215),
    en = n(705751),
    ei = n(49999),
    er = n(172799),
    ea = n(375708);
function es(e) {
    let t = j.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && ec({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function el(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: a,
            analyticsLocations: s,
            locationObject: o,
            embeddedActivitiesManager: d,
            componentId: c,
            commandOrigin: u,
            sectionName: _,
            source: A,
            onExecutedCallback: h,
            referrerId: I,
            customId: f,
            inviterUserId: T,
            renderInFramePool: g,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        N = U.A.getChannel(t),
        y = N?.getGuildId() ?? void 0;
    if (null == y && !N?.isPrivate()) return !1;
    let b = p.A.getApplication(i),
        M = null != b && (0, L.x)(b),
        P = (0, D.m)();
    try {
        if (v.A.getWindowOpen(et.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(et.MLl.ACTIVITY_POPOUT);
        }
        if ((!0 !== g && O.A.clearMainFrameSlot(), (0, Q.y)({ applicationId: i })))
            return (
                (0, Z.j$)(i, {
                    isStart: a,
                    inviterUserId: T,
                    channelId: t ?? null,
                    guildId: y ?? null,
                    locationKind: null != y ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL,
                }),
                !0
            );
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: P,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: s,
            source: A,
            commandOrigin: u,
            inviterUserId: T,
            launchParams: { customId: f, referrerId: I, renderInFramePool: g },
        });
        let e = await eS(i, t ?? void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let E = x.default.getCurrentUser();
        if (
            (null != E &&
                (0, X.A)({
                    type: a ? et.UqL.LAUNCH : et.UqL.JOIN,
                    userId: E?.id,
                    guildId: y,
                    channelId: t,
                    channelType: N?.type,
                    applicationId: i,
                    locationObject: o,
                    analyticsLocations: s ?? [],
                    source: A,
                    referrerId: I,
                    inviterUserId: T,
                }),
            a)
        ) {
            var w, G;
            let e, n, r, a;
            if (
                null == t ||
                ((w = i),
                (G = N),
                (e = G?.type === et.rbe.GUILD_VOICE),
                (n = p.A.getApplication(w)),
                (r = (0, m.n)(n, et.gfo.EMBEDDED)),
                (a = (0, H.AX)(G)),
                (!e || !r) && !a)
            )
                throw new C.A(C.A.Reasons.INVALID_CHANNEL);
            let s = await eo({
                applicationId: i,
                nonce: P,
                channelId: t,
                guildId: y,
                commandOrigin: u,
                sectionName: _,
                source: A,
                onExecutedCallback: h,
                onConfirmActivityLaunchChecksAlertOpen: S,
                embeddedActivitiesManager: d,
            });
            if ("failure" === s.result)
                if (4 === s.reason)
                    return (
                        l.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: P,
                            applicationId: i,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new C.A(C.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ed({ applicationId: i, channelId: t, embeddedActivitiesManager: d, isStart: a, guildId: y });
            if ((h?.(), "failure" === e.result))
                throw new C.A(C.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: P, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (M) return !1;
        let e = null != y ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: P,
                applicationId: i,
                channelId: t ?? null,
                guildId: y ?? null,
                isStart: a,
                error: n instanceof C.A || n instanceof E.A || n instanceof R.A ? n : new E.A(n),
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
            commandOrigin: a,
            sectionName: s,
            source: l,
            onExecutedCallback: o,
            onConfirmActivityLaunchChecksAlertOpen: d,
            embeddedActivitiesManager: c,
        } = e,
        u = null;
    try {
        u = await (0, f.Ay)(i, t);
    } catch (e) {
        if (e.message === f.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let _ = u.handler !== A.Ys.APP_HANDLER;
    if (!(_ || en.TR.includes(t))) {
        null != i && (await (0, h.Zn)({ type: "channel", channelId: i })), await (0, h.Zn)({ type: "user" });
        let e = U.A.getChannel(i),
            { isAuthorized: n } = await (0, T.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: u.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let m = U.A.getChannel(i),
        g = null != r ? w.A.getGuild(r) : null;
    if (null == m) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = p.A.getApplication(t),
            i = j.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = p.A.getApplication(i?.applicationId));
        let r = x.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, W.O)({
                applicationId: t,
                application: n,
                channel: m,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: c,
                user: r,
                onConfirmActivityLaunchChecksAlertOpen: d,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, d) => {
            (0, I.A)({
                command: u,
                optionValues: {},
                context: { channel: m, guild: g },
                commandOrigin: a,
                sectionName: s,
                source: l,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        o?.(), e();
                    },
                    onFailure: (e, n, a, s) => {
                        o?.(),
                            F.default.track(et.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: i,
                                guild_id: r,
                                application_id: t,
                                channel_type: m?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: l,
                            }),
                            null != e && null != n && null != a
                                ? d(new E.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in R.A.ReasonCodes
                                  ? d(new R.A(s))
                                  : d(new R.A(R.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function ed(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: a, isStart: s, guildId: l } = e,
        d = P.default.getSessionId(),
        c = x.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let u = await (0, K.A)(n, r);
    if (null == c || null == u) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let _ = U.A.getChannel(r);
    if (null == _) return { result: "failure", reason: 3 };
    let E = (0, $.JH)({ channelId: r, ChannelStore: U.A, GuildStore: w.A, PermissionStore: G.A, VoiceStateStore: k.A });
    if (E !== $.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            E === $.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, b.i)())
                : E === $.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  o.A.show({
                      title: ea.intl.string(ea.t["IOy+I5"]),
                      body: ea.intl.string(ea.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let A = j.Ay.getCurrentEmbeddedActivity();
    if (
        (A?.applicationId != null && (t = p.A.getApplication(A?.applicationId)),
        !(
            !s ||
            (await (0, W.O)({
                applicationId: n,
                application: u,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: c,
            }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != _) {
        let e = (0, z.A)(_.id),
            n = J.lk.includes(_.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: _.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, H.pE)(_) || !n) return { result: "failure", reason: 9 };
    }
    let h = {
        trackedActionData: {
            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: l, channel_id: r, application_id: n, session_id: d },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != r
        ? (await B.A.post({
              url: et.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: d, guild_id: l ?? void 0 },
              ...h,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function ec(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = j.Ay.getSelfEmbeddedActivityForLocation(t);
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: r?.launchId,
        showFeedback: i,
    });
    let a = (0, Y.H)(t);
    if (null != a) {
        let e = S.A.getSelectedParticipantId(a),
            t = x.default.getCurrentUser()?.id,
            i = j.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, g.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && c.A.selectParticipant(a, null);
    }
}
async function eu() {
    try {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await a.Bo.get({
                url: et.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => M.Ay.createFromServer(e));
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            l.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t });
    } catch (e) {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function e_(e, t, n) {
    try {
        l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await a.Bo.post({
            url: et.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new E.A(e);
    }
}
function eE(e, t, n) {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
}
async function eA(e) {
    let { guildId: t, force: n = !1 } = e,
        r = j.Ay.getShelfActivities(t),
        a = r.map((e) => p.A.getApplication(e.application_id)).filter(V.Vq);
    if (!n && !j.Ay.shouldFetchShelf(t)) {
        if (j.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    (e = eE.bind(null, t, n)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (n = eE.bind(null, t, e)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([i, r]),
                null != e && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = void 0)),
                null != n && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = void 0));
        }
        return { activityConfigs: r, applications: a };
    }
    try {
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await B.A.get({
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
            a = n.body.applications ?? [],
            s = n.body.assets ?? {};
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: r,
                applications: a,
                assets: s,
            }),
            a.length > 0 && l.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: a }),
            { activityConfigs: r, applications: a.map((e) => M.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            l.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: r, applications: a }
        );
    }
}
async function eh(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: a } = e,
        s = await u.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != U.A.getChannel(n) && _.A.sendInvite(n, s.code, r, a);
}
async function eI(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        l = await u.Ay.createInvite(t, { target_type: er.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await d.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = U.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = y.Ay.parse(n, s).content), _.A.sendInvite(e, l.code, r, a, t);
    });
}
function ef() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei.i.INDIRECT_ACTION;
    (0, N.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function ep(e) {
    let t = et.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await a.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eT(e) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function em(e) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eg() {
    eT(ee.Gd.ACTIVITY_POPOUT_WINDOW), l.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eS(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await a.Bo.post({ url: et.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function eN(e, t) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await eS(e, t ?? void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            l.h.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: e, proxyTicket: n });
    } catch (s) {
        let n = U.A.getChannel(t),
            i = n?.guild_id ?? null,
            a = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, D.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof C.A || s instanceof E.A || s instanceof R.A ? s : new E.A(s),
            }),
            !1
        );
    } finally {
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

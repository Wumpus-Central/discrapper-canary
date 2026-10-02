n.d(t, {
    CS: () => eE,
    D2: () => eN,
    Ir: () => eT,
    LK: () => ep,
    LV: () => eh,
    SE: () => e_,
    Ue: () => ef,
    _H: () => eu,
    gk: () => em,
    i5: () => eg,
    jp: () => eS,
    od: () => eC,
    rW: () => el,
    su: () => eo,
    tk: () => eI,
});
var i = n(562708),
    r = n(344351),
    a = n(991690),
    s = n(636537),
    l = n(554146),
    o = n(73153),
    d = n(157559),
    c = n(308528),
    u = n(367513),
    _ = n(376728),
    E = n(148494),
    A = n(181658),
    h = n(155718),
    I = n(264322),
    f = n(545152),
    p = n(361926),
    T = n(587895),
    m = n(972995),
    g = n(878014),
    S = n(568598),
    N = n(198052),
    C = n(501419),
    O = n(744230),
    R = n(113267),
    L = n(625180),
    y = n(25451),
    D = n(451909),
    v = n(195880),
    b = n(567249),
    M = n(192552),
    P = n(395671),
    U = n(280450),
    w = n(734057),
    G = n(71393),
    x = n(576705),
    k = n(287809),
    F = n(977997),
    B = n(174459),
    V = n(403362),
    H = n(499785),
    j = n(811024),
    W = n(933958),
    Y = n(799061),
    K = n(969151),
    $ = n(817636),
    z = n(782091),
    X = n(108959),
    Z = n(400115),
    q = n(90804),
    Q = n(946255),
    J = n(859007),
    ee = n(818023),
    et = n(5867),
    en = n(652215),
    ei = n(705751),
    er = n(49999),
    ea = n(172799),
    es = n(375708);
function el(e) {
    let t = W.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && eu({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function eo(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: s,
            analyticsLocations: l,
            locationObject: d,
            embeddedActivitiesManager: c,
            componentId: u,
            commandOrigin: _,
            sectionName: E,
            source: h,
            onExecutedCallback: I,
            referrerId: f,
            customId: p,
            inviterUserId: m,
            renderInFramePool: S,
            onConfirmActivityLaunchChecksAlertOpen: N,
        } = e,
        C = w.A.getChannel(t),
        D = C?.getGuildId() ?? void 0;
    if (null == D && !C?.isPrivate()) return !1;
    let M = T.A.getApplication(i),
        P = null != M && (0, y.X)(M),
        U = (0, v.m)();
    try {
        if (b.A.getWindowOpen(en.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(en.MLl.ACTIVITY_POPOUT);
        }
        if ((!0 !== S && L.A.clearMainFrameSlot(), (0, J.y)({ applicationId: i, customId: p, referrerId: f })))
            return (
                (0, Z.j)(i, {
                    isStart: s,
                    inviterUserId: m,
                    channelId: t ?? null,
                    guildId: D ?? null,
                    locationKind: null != D ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL,
                }),
                !0
            );
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: U,
            applicationId: i,
            channelId: t ?? null,
            componentId: u,
            analyticsLocations: l,
            source: h,
            commandOrigin: _,
            inviterUserId: m,
            launchParams: { customId: p, referrerId: f, renderInFramePool: S },
        });
        let e = await eN(i, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let A = k.default.getCurrentUser();
        if (
            (null != A &&
                (0, Q.A)({
                    type: s ? en.UqL.LAUNCH : en.UqL.JOIN,
                    userId: A?.id,
                    guildId: D,
                    channelId: t,
                    channelType: C?.type,
                    applicationId: i,
                    locationObject: d,
                    analyticsLocations: l ?? [],
                    source: h,
                    referrerId: f,
                    inviterUserId: m,
                }),
            s)
        ) {
            var G, x;
            let e, n, r, s;
            if (
                null == t ||
                ((G = i),
                (x = C),
                (e = x?.type === en.rbe.GUILD_VOICE),
                (n = T.A.getApplication(G)),
                (r = (0, g.W)(n, a.U.MAIN)),
                (s = (0, j.AX)(x)),
                (!e || !r) && !s)
            )
                throw new O.A(O.A.Reasons.INVALID_CHANNEL);
            let l = await ed({
                applicationId: i,
                nonce: U,
                channelId: t,
                guildId: D,
                commandOrigin: _,
                sectionName: E,
                source: h,
                onExecutedCallback: I,
                onConfirmActivityLaunchChecksAlertOpen: N,
                embeddedActivitiesManager: c,
            });
            if ("failure" === l.result)
                if (4 === l.reason)
                    return (
                        o.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: U,
                            applicationId: i,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new O.A(O.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ec({ applicationId: i, channelId: t, embeddedActivitiesManager: c, isStart: s, guildId: D });
            if ((I?.(), "failure" === e.result))
                throw new O.A(O.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: U, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (P) return !1;
        let e = null != D ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: U,
                applicationId: i,
                channelId: t ?? null,
                guildId: D ?? null,
                isStart: s,
                error: n instanceof O.A || n instanceof A.A || n instanceof R.A ? n : new A.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
async function ed(e) {
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
        u = await (0, p.Ay)(i, t);
    } catch (e) {
        if (e.message === p.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let _ = u.handler !== h.Ys.APP_HANDLER;
    if (!(_ || ei.TR.includes(t))) {
        (null != i && (await (0, I.Zn)({ type: "channel", channelId: i })), await (0, I.Zn)({ type: "user" }));
        let e = w.A.getChannel(i),
            { isAuthorized: n } = await (0, m.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: u.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let E = w.A.getChannel(i),
        g = null != r ? G.A.getGuild(r) : null;
    if (null == E) return { result: "failure", reason: 3 };
    if (_) {
        let e,
            n = T.A.getApplication(t),
            i = W.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = T.A.getApplication(i?.applicationId));
        let r = k.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, Y.O)({
                applicationId: t,
                application: n,
                channel: E,
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
            (0, f.A)({
                command: u,
                optionValues: {},
                context: { channel: E, guild: g },
                commandOrigin: a,
                sectionName: s,
                source: l,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        (o?.(), e());
                    },
                    onFailure: (e, n, a, s) => {
                        (o?.(),
                            B.default.track(en.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: i,
                                guild_id: r,
                                application_id: t,
                                channel_type: E?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: l,
                            }),
                            null != e && null != n && null != a
                                ? d(new A.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in R.A.ReasonCodes
                                  ? d(new R.A(s))
                                  : d(new R.A(R.A.ReasonCodes.UNKNOWN)));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function ec(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: a, isStart: s, guildId: l } = e,
        o = U.default.getSessionId(),
        c = k.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let u = await (0, $.A)(n, r);
    if (null == c || null == u) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let _ = w.A.getChannel(r);
    if (null == _) return { result: "failure", reason: 3 };
    let E = (0, z.JH)({ channelId: r, ChannelStore: w.A, GuildStore: G.A, PermissionStore: x.A, VoiceStateStore: F.A });
    if (E !== z.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            E === z.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, M.i)())
                : E === z.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  d.A.show({
                      title: es.intl.string(es.t["IOy+I5"]),
                      body: es.intl.string(es.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let A = W.Ay.getCurrentEmbeddedActivity();
    if (
        (A?.applicationId != null && (t = T.A.getApplication(A?.applicationId)),
        !(
            !s ||
            (await (0, Y.O)({
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
        let e = (0, X.A)(_.id),
            n = ee.lk.includes(_.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: _.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, j.pE)(_) || !n) return { result: "failure", reason: 9 };
    }
    let h = {
        trackedActionData: {
            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: l, channel_id: r, application_id: n, session_id: o },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != r
        ? (await H.A.post({
              url: en.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: o, guild_id: l ?? void 0 },
              ...h,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function eu(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = W.Ay.getSelfEmbeddedActivityForLocation(t);
    o.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: r?.launchId,
        showFeedback: i,
    });
    let a = (0, K.H)(t);
    if (null != a) {
        let e = N.A.getSelectedParticipantId(a),
            t = k.default.getCurrentUser()?.id,
            i = W.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, S.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && u.A.selectParticipant(a, null);
    }
}
async function e_() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: en.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => P.Ay.createFromServer(e));
        (o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t }));
    } catch (e) {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function eE(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await s.Bo.post({
            url: en.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return (o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new A.A(e));
    }
}
function eA(e, t, n) {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
}
async function eh(e) {
    let { guildId: t, force: n = !1 } = e,
        r = W.Ay.getShelfActivities(t),
        a = r.map((e) => T.A.getApplication(e.application_id)).filter(V.Vq);
    if (!n && !W.Ay.shouldFetchShelf(t)) {
        if (W.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    ((e = eA.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e));
                }),
                r = new Promise((e) => {
                    ((n = eA.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n));
                });
            (await Promise.race([i, r]),
                null != e && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = void 0)),
                null != n && (o.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = void 0)));
        }
        return { activityConfigs: r, applications: a };
    }
    try {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await H.A.get({
                url: en.Rsh.ACTIVITY_SHELF,
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
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: r,
                applications: a,
                assets: s,
            }),
            a.length > 0 && o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: a }),
            { activityConfigs: r, applications: a.map((e) => P.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: r, applications: a }
        );
    }
}
async function eI(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: a } = e,
        s = await _.Ay.createInvite(t, { target_type: ea.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != w.A.getChannel(n) && E.A.sendInvite(n, s.code, r, a);
}
async function ef(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        l = await _.Ay.createInvite(t, { target_type: ea.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await c.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = w.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        (null != s && (t = D.Ay.parse(n, s).content), E.A.sendInvite(e, l.code, r, a, t));
    });
}
function ep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er.i.INDIRECT_ACTION;
    (0, C.$l)(l.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eT(e) {
    let t = en.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0);
    } catch (e) {
        return !1;
    }
}
function em(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eg(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eS() {
    (em(et.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
}
async function eN(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await s.Bo.post({ url: en.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function eC(e, t) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await eN(e, t ?? void 0);
        (o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
                applicationId: e,
                proxyTicket: n,
            }));
    } catch (s) {
        let n = w.A.getChannel(t),
            i = n?.guild_id ?? null,
            a = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, v.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof O.A || s instanceof A.A || s instanceof R.A ? s : new A.A(s),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

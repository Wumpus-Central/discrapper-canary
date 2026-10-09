n.d(t, {
    CS: () => eh,
    D2: () => eO,
    Ir: () => eg,
    LK: () => em,
    LV: () => eI,
    SE: () => eA,
    Ue: () => eT,
    _H: () => eE,
    gk: () => eS,
    i5: () => eN,
    jp: () => eC,
    od: () => eR,
    rW: () => ed,
    su: () => ec,
    tk: () => ep,
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
    f = n(323073),
    I = n(264322),
    p = n(545152),
    T = n(361926),
    m = n(587895),
    g = n(972995),
    S = n(878014),
    N = n(568598),
    C = n(198052),
    O = n(577483),
    R = n(501419),
    L = n(744230),
    y = n(113267),
    D = n(625180),
    v = n(25451),
    b = n(451909),
    M = n(195880),
    P = n(567249),
    U = n(192552),
    w = n(395671),
    G = n(280450),
    x = n(734057),
    k = n(71393),
    F = n(576705),
    B = n(287809),
    V = n(977997),
    H = n(174459),
    j = n(403362),
    W = n(499785),
    Y = n(811024),
    K = n(933958),
    $ = n(799061),
    z = n(969151),
    X = n(817636),
    Z = n(782091),
    q = n(108959),
    Q = n(400115),
    J = n(90804),
    ee = n(946255),
    et = n(859007),
    en = n(818023),
    ei = n(5867),
    er = n(652215),
    ea = n(705751),
    es = n(49999),
    el = n(172799),
    eo = n(660183);
function ed(e) {
    let t = K.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && eE({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function ec(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: s,
            analyticsLocations: l,
            locationObject: d,
            componentId: c,
            commandOrigin: u,
            sectionName: _,
            source: E,
            onExecutedCallback: h,
            referrerId: f,
            customId: I,
            inviterUserId: p,
            renderInFramePool: T,
            onConfirmActivityLaunchChecksAlertOpen: g,
        } = e,
        N = x.A.getChannel(t),
        C = N?.getGuildId() ?? void 0;
    if (null == C && !N?.isPrivate()) return !1;
    let R = m.A.getApplication(i),
        b = null != R && (0, v.X)(R),
        U = (0, M.m)();
    try {
        if (P.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(er.MLl.ACTIVITY_POPOUT);
        }
        if (
            (!0 !== T && D.A.clearMainFrameSlot(),
            b && (0, O.A)(t),
            (0, et.y)({ applicationId: i, launch: { customId: I, referrerId: f } }))
        )
            return (
                (0, Q.j)(i, {
                    isStart: s,
                    inviterUserId: p,
                    channelId: t ?? null,
                    guildId: C ?? null,
                    locationKind: null != C ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL,
                }),
                !0
            );
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: U,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: l,
            source: E,
            commandOrigin: u,
            inviterUserId: p,
            launchParams: { customId: I, referrerId: f, renderInFramePool: T },
        });
        let e = await eO(i, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let A = B.default.getCurrentUser();
        if (
            (null != A &&
                (0, ee.A)({
                    type: s ? er.UqL.LAUNCH : er.UqL.JOIN,
                    userId: A?.id,
                    guildId: C,
                    channelId: t,
                    channelType: N?.type,
                    applicationId: i,
                    locationObject: d,
                    analyticsLocations: l ?? [],
                    source: E,
                    referrerId: f,
                    inviterUserId: p,
                }),
            s)
        ) {
            var w, G;
            let e, n, r, s;
            if (
                null == t ||
                ((w = i),
                (G = N),
                (e = G?.type === er.rbe.GUILD_VOICE),
                (n = m.A.getApplication(w)),
                (r = (0, S.W)(n, a.U.MAIN)),
                (s = (0, Y.AX)(G)),
                (!e || !r) && !s)
            )
                throw new L.A(L.A.Reasons.INVALID_CHANNEL);
            let l = await eu({
                applicationId: i,
                nonce: U,
                channelId: t,
                guildId: C,
                commandOrigin: u,
                sectionName: _,
                source: E,
                onExecutedCallback: h,
                onConfirmActivityLaunchChecksAlertOpen: g,
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
                else throw new L.A(L.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await e_({ applicationId: i, channelId: t, isStart: s, guildId: C });
            if ((h?.(), "failure" === e.result))
                throw new L.A(L.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: U, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (b) return !1;
        let e = null != C ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: U,
                applicationId: i,
                channelId: t ?? null,
                guildId: C ?? null,
                isStart: s,
                error: n instanceof L.A || n instanceof A.A || n instanceof y.A ? n : new A.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
async function eu(e) {
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
        } = e,
        c = null;
    try {
        c = await (0, T.Ay)(i, t);
    } catch (e) {
        if (e.message === T.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let u = c.handler !== h.Ys.APP_HANDLER;
    if (!(u || ea.TR.includes(t))) {
        (null != i && (await (0, I.Zn)({ type: "channel", channelId: i })), await (0, I.Zn)({ type: "user" }));
        let e = x.A.getChannel(i),
            { isAuthorized: n } = await (0, g.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: c.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let _ = x.A.getChannel(i),
        E = null != r ? k.A.getGuild(r) : null;
    if (null == _) return { result: "failure", reason: 3 };
    if (u) {
        let e,
            n = m.A.getApplication(t),
            i = K.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = m.A.getApplication(i?.applicationId));
        let r = B.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, $.O)({
                applicationId: t,
                application: n,
                channel: _,
                currentEmbeddedApplication: e,
                user: r,
                onConfirmActivityLaunchChecksAlertOpen: d,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, d) => {
            (0, p.A)({
                command: c,
                optionValues: {},
                context: { channel: _, guild: E },
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
                            H.default.track(er.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: i,
                                guild_id: r,
                                application_id: t,
                                channel_type: _?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: l,
                            }),
                            null != e && null != n && null != a
                                ? d(new A.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in y.A.ReasonCodes
                                  ? d(new y.A(s))
                                  : d(new y.A(y.A.ReasonCodes.UNKNOWN)));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function e_(e) {
    let t,
        { applicationId: n, channelId: r, isStart: a, guildId: s } = e,
        l = G.default.getSessionId(),
        o = B.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let c = await (0, X.A)(n, r);
    if (null == o || null == c) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let u = x.A.getChannel(r);
    if (null == u) return { result: "failure", reason: 3 };
    let _ = (0, Z.JH)({
        channelId: r,
        isContentGated: (0, f.qR)(u),
        ChannelStore: x.A,
        GuildStore: k.A,
        PermissionStore: F.A,
        VoiceStateStore: V.A,
    });
    if (_ !== Z.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === Z.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, U.i)())
                : _ === Z.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS
                  ? ((e = 6),
                    d.A.show({
                        title: eo.intl.string(eo.t["IOy+I5"]),
                        body: eo.intl.string(eo.t.UXoQTp),
                        hideActionSheet: !1,
                    }))
                  : _ === Z.xy.CHANNEL_CONTENT_GATED &&
                    ((e = 10),
                    d.A.show({
                        title: eo.intl.string(eo.t["IOy+I5"]),
                        body: eo.intl.string(eo.t.pKLV22),
                        hideActionSheet: !1,
                    })),
            { result: "failure", reason: e }
        );
    }
    let E = K.Ay.getCurrentEmbeddedActivity();
    if (
        (E?.applicationId != null && (t = m.A.getApplication(E?.applicationId)),
        !(
            !a ||
            (await (0, $.O)({ applicationId: n, application: c, channel: u, currentEmbeddedApplication: t, user: o }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != u) {
        let e = (0, q.A)(u.id),
            n = en.lk.includes(u.type);
        if (e) {
            if (!(await (0, J.A)({ channelId: u.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, Y.pE)(u) || !n) return { result: "failure", reason: 9 };
    }
    let A = {
        trackedActionData: {
            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: s, channel_id: r, application_id: n, session_id: l },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != r
        ? (await W.A.post({
              url: er.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: l, guild_id: s ?? void 0 },
              ...A,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function eE(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = K.Ay.getSelfEmbeddedActivityForLocation(t);
    o.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: r?.launchId,
        showFeedback: i,
    });
    let a = (0, z.H)(t);
    if (null != a) {
        let e = C.A.getSelectedParticipantId(a),
            t = B.default.getCurrentUser()?.id,
            i = K.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, N.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && u.A.selectParticipant(a, null);
    }
}
async function eA() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: er.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => w.Ay.createFromServer(e));
        (o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t }));
    } catch (e) {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function eh(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await s.Bo.post({
            url: er.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
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
function ef(e, t, n) {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
}
async function eI(e) {
    let { guildId: t, force: n = !1 } = e,
        r = K.Ay.getShelfActivities(t),
        a = r.map((e) => m.A.getApplication(e.application_id)).filter(j.Vq);
    if (!n && !K.Ay.shouldFetchShelf(t)) {
        if (K.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    ((e = ef.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e));
                }),
                r = new Promise((e) => {
                    ((n = ef.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n));
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
            n = await W.A.get({
                url: er.Rsh.ACTIVITY_SHELF,
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
            { activityConfigs: r, applications: a.map((e) => w.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            o.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: r, applications: a }
        );
    }
}
async function ep(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: a } = e,
        s = await _.Ay.createInvite(t, { target_type: el.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != x.A.getChannel(n) && E.A.sendInvite(n, s.code, r, a);
}
async function eT(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        l = await _.Ay.createInvite(t, { target_type: el.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await c.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = x.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        (null != s && (t = b.Ay.parse(n, s).content), E.A.sendInvite(e, l.code, r, a, t));
    });
}
function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es.i.INDIRECT_ACTION;
    (0, R.$l)(l.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eg(e) {
    let t = er.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0);
    } catch (e) {
        return !1;
    }
}
function eS(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eN(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eC() {
    (eS(ei.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
}
async function eO(e, t, n) {
    let i = { use_stateless_ticket: !0 };
    return (
        null != t && (i.channel_id = t),
        null != n && (i.surface = n),
        (await s.Bo.post({ url: er.Rsh.APPLICATION_PROXY_TICKET(e), body: i, rejectWithError: !0 })).body.ticket
    );
}
async function eR(e, t) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await eO(e, t ?? void 0);
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
        let n = x.A.getChannel(t),
            i = n?.guild_id ?? null,
            a = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, M.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof L.A || s instanceof A.A || s instanceof y.A ? s : new A.A(s),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

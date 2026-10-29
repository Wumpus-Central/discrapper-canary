n.d(t, {
    CS: () => eE,
    Ir: () => eI,
    LK: () => ef,
    Ue: () => eh,
    _H: () => e_,
    gk: () => ep,
    i5: () => eT,
    od: () => em,
    rW: () => eo,
    su: () => ed,
    tk: () => eA,
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
    L = n(982844),
    y = n(744230),
    D = n(113267),
    v = n(625180),
    b = n(25451),
    M = n(451909),
    P = n(195880),
    U = n(567249),
    w = n(192552),
    G = n(280450),
    x = n(734057),
    k = n(71393),
    F = n(576705),
    B = n(287809),
    V = n(977997),
    H = n(174459),
    j = n(499785),
    W = n(811024),
    Y = n(933958),
    K = n(730602),
    $ = n(799061),
    z = n(969151),
    X = n(817636),
    q = n(782091),
    Z = n(108959),
    Q = n(400115),
    J = n(90804),
    ee = n(946255),
    et = n(717971),
    en = n(818023),
    ei = n(652215),
    er = n(705751),
    ea = n(49999),
    es = n(172799),
    el = n(105292);
function eo(e) {
    let t = Y.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && e_({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function ed(e) {
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
        M = null != R && (0, b.X)(R),
        w = (0, P.m)();
    try {
        if (U.A.getWindowOpen(ei.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ei.MLl.ACTIVITY_POPOUT);
        }
        if (
            (!0 !== T && v.A.clearMainFrameSlot(),
            M && (0, O.A)(t),
            (0, et.y)({ applicationId: i, launch: { customId: I, referrerId: f } }))
        ) {
            if (!M) return !0;
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
        }
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: w,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: l,
            source: E,
            commandOrigin: u,
            inviterUserId: p,
            launchParams: { customId: I, referrerId: f, renderInFramePool: T },
        });
        let [e] = await Promise.all([(0, K.D2)(i, t ?? void 0), (0, L.A)(i)]);
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
                    type: s ? ei.UqL.LAUNCH : ei.UqL.JOIN,
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
            var G, k;
            let e, n, r, s;
            if (
                null == t ||
                ((G = i),
                (k = N),
                (e = k?.type === ei.rbe.GUILD_VOICE),
                (n = m.A.getApplication(G)),
                (r = (0, S.W)(n, a.U.MAIN)),
                (s = (0, W.AX)(k)),
                (!e || !r) && !s)
            )
                throw new y.A(y.A.Reasons.INVALID_CHANNEL);
            let l = await ec({
                applicationId: i,
                nonce: w,
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
                            nonce: w,
                            applicationId: i,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new y.A(y.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({ applicationId: i, channelId: t, isStart: s, guildId: C });
            if ((h?.(), "failure" === e.result))
                throw new y.A(y.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: w, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (M) return !1;
        let e = null != C ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: w,
                applicationId: i,
                channelId: t ?? null,
                guildId: C ?? null,
                isStart: s,
                error: n instanceof y.A || n instanceof A.A || n instanceof D.A ? n : new A.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
async function ec(e) {
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
    if (!(u || er.TR.includes(t))) {
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
            i = Y.Ay.getCurrentEmbeddedActivity();
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
                            H.default.track(ei.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
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
                                : null != s && s in D.A.ReasonCodes
                                  ? d(new D.A(s))
                                  : d(new D.A(D.A.ReasonCodes.UNKNOWN)));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function eu(e) {
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
    let _ = (0, q.JH)({
        channelId: r,
        isContentGated: (0, f.qR)(u),
        ChannelStore: x.A,
        GuildStore: k.A,
        PermissionStore: F.A,
        VoiceStateStore: V.A,
    });
    if (_ !== q.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === q.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, w.i)())
                : _ === q.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS
                  ? ((e = 6),
                    d.A.show({
                        title: el.intl.string(el.t["IOy+I5"]),
                        body: el.intl.string(el.t.UXoQTp),
                        hideActionSheet: !1,
                    }))
                  : _ === q.xy.CHANNEL_CONTENT_GATED &&
                    ((e = 10),
                    d.A.show({
                        title: el.intl.string(el.t["IOy+I5"]),
                        body: el.intl.string(el.t.pKLV22),
                        hideActionSheet: !1,
                    })),
            { result: "failure", reason: e }
        );
    }
    let E = Y.Ay.getCurrentEmbeddedActivity();
    if (
        (E?.applicationId != null && (t = m.A.getApplication(E?.applicationId)),
        !(
            !a ||
            (await (0, $.O)({ applicationId: n, application: c, channel: u, currentEmbeddedApplication: t, user: o }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != u) {
        let e = (0, Z.A)(u.id),
            n = en.lk.includes(u.type);
        if (e) {
            if (!(await (0, J.A)({ channelId: u.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, W.pE)(u) || !n) return { result: "failure", reason: 9 };
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
        ? (await j.A.post({
              url: ei.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: l, guild_id: s ?? void 0 },
              ...A,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function e_(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = Y.Ay.getSelfEmbeddedActivityForLocation(t);
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
            i = Y.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, N.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && u.A.selectParticipant(a, null);
    }
}
async function eE(e, t, n) {
    try {
        o.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await s.Bo.post({
            url: ei.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
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
async function eA(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: a } = e,
        s = await _.Ay.createInvite(t, { target_type: es.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != x.A.getChannel(n) && E.A.sendInvite(n, s.code, r, a);
}
async function eh(e) {
    let t,
        { channelId: n, applicationId: i, userId: r, location: a, inviteAnalyticsMetadata: s, prefixedContent: l } = e,
        o = await _.Ay.createInvite(n, { target_type: es.yV.EMBEDDED_APPLICATION, target_application_id: i }, a),
        d = await c.A.ensurePrivateChannel(r),
        u = x.A.getChannel(d);
    if (null == u) throw Error("Private channel not found");
    (null != l && (t = M.Ay.parse(u, l).content), E.A.sendInvite(d, o.code, a, s, t));
}
function ef() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea.i.INDIRECT_ACTION;
    (0, R.$l)(l.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eI(e) {
    let t = ei.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0);
    } catch (e) {
        return !1;
    }
}
function ep(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eT(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
async function em(e, t) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await (0, K.D2)(e, t ?? void 0);
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
                nonce: (0, P.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof y.A || s instanceof A.A || s instanceof D.A ? s : new A.A(s),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

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
    s = n(294630),
    l = n(636537),
    o = n(554146),
    d = n(73153),
    c = n(157559),
    u = n(308528),
    _ = n(367513),
    E = n(376728),
    A = n(148494),
    h = n(181658),
    f = n(155718),
    I = n(323073),
    p = n(264322),
    T = n(545152),
    m = n(361926),
    g = n(587895),
    S = n(972995),
    N = n(878014),
    C = n(568598),
    O = n(198052),
    R = n(577483),
    L = n(501419),
    y = n(982844),
    D = n(744230),
    v = n(113267),
    b = n(625180),
    P = n(25451),
    M = n(451909),
    U = n(195880),
    w = n(567249),
    G = n(192552),
    x = n(280450),
    k = n(734057),
    F = n(71393),
    B = n(576705),
    V = n(287809),
    H = n(977997),
    j = n(174459),
    W = n(499785),
    Y = n(811024),
    K = n(933958),
    $ = n(730602),
    z = n(799061),
    X = n(969151),
    q = n(817636),
    Z = n(782091),
    Q = n(108959),
    J = n(400115),
    ee = n(90804),
    et = n(946255),
    en = n(717971),
    ei = n(818023),
    er = n(652215),
    ea = n(705751),
    es = n(49999),
    el = n(105292);
function eo(e) {
    let t = K.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && e_({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function ed(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: s,
            analyticsLocations: l,
            locationObject: o,
            componentId: c,
            commandOrigin: u,
            sectionName: _,
            source: E,
            onExecutedCallback: A,
            referrerId: f,
            customId: I,
            inviterUserId: p,
            renderInFramePool: T,
            onConfirmActivityLaunchChecksAlertOpen: m,
        } = e,
        S = k.A.getChannel(t),
        C = S?.getGuildId() ?? void 0;
    if (null == C && !S?.isPrivate()) return !1;
    let O = g.A.getApplication(i),
        L = null != O && (0, P.X)(O),
        M = (0, U.m)();
    try {
        if (w.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(er.MLl.ACTIVITY_POPOUT);
        }
        if (
            (!0 !== T && b.A.clearMainFrameSlot(),
            L && (0, R.A)(t),
            (0, en.y)({ applicationId: i, launch: { customId: I, referrerId: f } }))
        ) {
            if (!L) return !0;
            return (
                (0, J.j)(i, {
                    isStart: s,
                    inviterUserId: p,
                    channelId: t ?? null,
                    guildId: C ?? null,
                    locationKind: null != C ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL,
                }),
                !0
            );
        }
        d.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: M,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: l,
            source: E,
            commandOrigin: u,
            inviterUserId: p,
            launchParams: { customId: I, referrerId: f, renderInFramePool: T },
        });
        let [e] = await Promise.all([(0, $.D2)(i, t ?? void 0), (0, y.A)(i)]);
        d.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let h = V.default.getCurrentUser();
        if (
            (null != h &&
                (0, et.A)({
                    type: s ? er.UqL.LAUNCH : er.UqL.JOIN,
                    userId: h?.id,
                    guildId: C,
                    channelId: t,
                    channelType: S?.type,
                    applicationId: i,
                    locationObject: o,
                    analyticsLocations: l ?? [],
                    source: E,
                    referrerId: f,
                    inviterUserId: p,
                }),
            s)
        ) {
            var G, x;
            let e, n, r, s;
            if (
                null == t ||
                ((G = i),
                (x = S),
                (e = x?.type === er.rbe.GUILD_VOICE),
                (n = g.A.getApplication(G)),
                (r = (0, N.W)(n, a.U.MAIN)),
                (s = (0, Y.AX)(x)),
                (!e || !r) && !s)
            )
                throw new D.A(D.A.Reasons.INVALID_CHANNEL);
            let l = await ec({
                applicationId: i,
                nonce: M,
                channelId: t,
                guildId: C,
                commandOrigin: u,
                sectionName: _,
                source: E,
                onExecutedCallback: A,
                onConfirmActivityLaunchChecksAlertOpen: m,
            });
            if ("failure" === l.result)
                if (4 === l.reason)
                    return (
                        d.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: M,
                            applicationId: i,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new D.A(D.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({ applicationId: i, channelId: t, isStart: s, guildId: C });
            if ((A?.(), "failure" === e.result))
                throw new D.A(D.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        d.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: M, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (L) return !1;
        let e = null != C ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            d.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: M,
                applicationId: i,
                channelId: t ?? null,
                guildId: C ?? null,
                isStart: s,
                error: n instanceof D.A || n instanceof h.A || n instanceof v.A ? n : new h.A(n),
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
        c = await (0, m.Ay)(i, t);
    } catch (e) {
        if (e.message === m.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let u = c.handler !== f.Ys.APP_HANDLER;
    if (!(u || ea.TR.includes(t))) {
        (null != i && (await (0, p.Zn)({ type: "channel", channelId: i })), await (0, p.Zn)({ type: "user" }));
        let e = k.A.getChannel(i),
            { isAuthorized: n } = await (0, S.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: c.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let _ = k.A.getChannel(i),
        E = null != r ? F.A.getGuild(r) : null;
    if (null == _) return { result: "failure", reason: 3 };
    if (u) {
        let e,
            n = g.A.getApplication(t),
            i = K.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = g.A.getApplication(i?.applicationId));
        let r = V.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, z.O)({
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
            (0, T.A)({
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
                            j.default.track(er.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
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
                                ? d(new h.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in v.A.ReasonCodes
                                  ? d(new v.A(s))
                                  : d(new v.A(v.A.ReasonCodes.UNKNOWN)));
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
        l = x.default.getSessionId(),
        o = V.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let d = await (0, q.A)(n, r);
    if (null == o || null == d) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let u = k.A.getChannel(r);
    if (null == u) return { result: "failure", reason: 3 };
    let _ = (0, Z.JH)({
        channelId: r,
        isContentGated: (0, I.qR)(u),
        ChannelStore: k.A,
        GuildStore: F.A,
        PermissionStore: B.A,
        VoiceStateStore: H.A,
    });
    if (_ !== Z.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === Z.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, G.i)())
                : _ === Z.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS
                  ? ((e = 6),
                    c.A.show({
                        title: el.intl.string(el.t["IOy+I5"]),
                        body: el.intl.string(el.t.UXoQTp),
                        hideActionSheet: !1,
                    }))
                  : _ === Z.xy.CHANNEL_CONTENT_GATED &&
                    ((e = 10),
                    c.A.show({
                        title: el.intl.string(el.t["IOy+I5"]),
                        body: el.intl.string(el.t.pKLV22),
                        hideActionSheet: !1,
                    })),
            { result: "failure", reason: e }
        );
    }
    let E = K.Ay.getCurrentEmbeddedActivity();
    if (
        (E?.applicationId != null && (t = g.A.getApplication(E?.applicationId)),
        !(
            !a ||
            (await (0, z.O)({ applicationId: n, application: d, channel: u, currentEmbeddedApplication: t, user: o }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != u) {
        let e = (0, Q.A)(u.id),
            n = ei.lk.includes(u.type);
        if (e) {
            if (!(await (0, ee.A)({ channelId: u.id, bypassChangeModal: null != t })))
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
function e_(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = K.Ay.getSelfEmbeddedActivityForLocation(t);
    d.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: r?.launchId,
        showFeedback: i,
    });
    let a = (0, X.H)(t);
    if (null != a) {
        let e = O.A.getSelectedParticipantId(a),
            t = V.default.getCurrentUser()?.id,
            i = K.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, C.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && _.A.selectParticipant(a, null);
    }
}
async function eE(e, t, n) {
    try {
        d.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await l.Bo.post({
            url: er.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            d.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return (d.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new h.A(e));
    }
}
async function eA(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: a } = e,
        l = await E.Ay.createInvite(t, { target_type: s.y.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != k.A.getChannel(n) && A.A.sendInvite(n, l.code, r, a);
}
async function eh(e) {
    let t,
        { channelId: n, applicationId: i, userId: r, location: a, inviteAnalyticsMetadata: l, prefixedContent: o } = e,
        d = await E.Ay.createInvite(n, { target_type: s.y.EMBEDDED_APPLICATION, target_application_id: i }, a),
        c = await u.A.ensurePrivateChannel(r),
        _ = k.A.getChannel(c);
    if (null == _) throw Error("Private channel not found");
    (null != o && (t = M.Ay.parse(_, o).content), A.A.sendInvite(c, d.code, a, l, t));
}
function ef() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es.i.INDIRECT_ACTION;
    (0, L.$l)(o.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eI(e) {
    let t = er.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (await l.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0);
    } catch (e) {
        return !1;
    }
}
function ep(e) {
    d.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eT(e) {
    d.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
async function em(e, t) {
    d.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await (0, $.D2)(e, t ?? void 0);
        (d.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            d.h.dispatch({
                type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
                applicationId: e,
                proxyTicket: n,
            }));
    } catch (s) {
        let n = k.A.getChannel(t),
            i = n?.guild_id ?? null,
            a = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            d.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, U.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof D.A || s instanceof h.A || s instanceof v.A ? s : new h.A(s),
            }),
            !1
        );
    } finally {
        d.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

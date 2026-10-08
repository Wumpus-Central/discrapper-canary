n.d(t, {
    CS: () => eA,
    D2: () => eC,
    Ir: () => em,
    LK: () => eT,
    LV: () => ef,
    SE: () => eE,
    Ue: () => ep,
    _H: () => e_,
    gk: () => eg,
    i5: () => eS,
    jp: () => eN,
    od: () => eO,
    rW: () => eo,
    su: () => ed,
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
    f = n(264322),
    I = n(545152),
    p = n(361926),
    T = n(587895),
    m = n(972995),
    g = n(878014),
    S = n(568598),
    N = n(198052),
    C = n(577483),
    O = n(501419),
    R = n(744230),
    L = n(113267),
    y = n(625180),
    D = n(25451),
    v = n(451909),
    b = n(195880),
    M = n(567249),
    P = n(192552),
    U = n(395671),
    w = n(280450),
    G = n(734057),
    x = n(71393),
    k = n(576705),
    F = n(287809),
    B = n(977997),
    V = n(174459),
    H = n(403362),
    j = n(499785),
    W = n(811024),
    Y = n(933958),
    K = n(799061),
    $ = n(969151),
    z = n(817636),
    X = n(782091),
    Z = n(108959),
    q = n(400115),
    Q = n(90804),
    J = n(946255),
    ee = n(859007),
    et = n(818023),
    en = n(5867),
    ei = n(652215),
    er = n(705751),
    ea = n(49999),
    es = n(172799),
    el = n(660183);
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
            renderInFramePool: m,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        N = G.A.getChannel(t),
        O = N?.getGuildId() ?? void 0;
    if (null == O && !N?.isPrivate()) return !1;
    let v = T.A.getApplication(i),
        P = null != v && (0, D.X)(v),
        U = (0, b.m)();
    try {
        if (M.A.getWindowOpen(ei.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ei.MLl.ACTIVITY_POPOUT);
        }
        if (
            (!0 !== m && y.A.clearMainFrameSlot(),
            P && (0, C.A)(t),
            (0, ee.y)({ applicationId: i, launch: { customId: I, referrerId: f } }))
        )
            return (
                (0, q.j)(i, {
                    isStart: s,
                    inviterUserId: p,
                    channelId: t ?? null,
                    guildId: O ?? null,
                    locationKind: null != O ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL,
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
            launchParams: { customId: I, referrerId: f, renderInFramePool: m },
        });
        let e = await eC(i, t ?? void 0);
        o.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let A = F.default.getCurrentUser();
        if (
            (null != A &&
                (0, J.A)({
                    type: s ? ei.UqL.LAUNCH : ei.UqL.JOIN,
                    userId: A?.id,
                    guildId: O,
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
            var w, x;
            let e, n, r, s;
            if (
                null == t ||
                ((w = i),
                (x = N),
                (e = x?.type === ei.rbe.GUILD_VOICE),
                (n = T.A.getApplication(w)),
                (r = (0, g.W)(n, a.U.MAIN)),
                (s = (0, W.AX)(x)),
                (!e || !r) && !s)
            )
                throw new R.A(R.A.Reasons.INVALID_CHANNEL);
            let l = await ec({
                applicationId: i,
                nonce: U,
                channelId: t,
                guildId: O,
                commandOrigin: u,
                sectionName: _,
                source: E,
                onExecutedCallback: h,
                onConfirmActivityLaunchChecksAlertOpen: S,
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
                else throw new R.A(R.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({ applicationId: i, channelId: t, isStart: s, guildId: O });
            if ((h?.(), "failure" === e.result))
                throw new R.A(R.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: U, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (P) return !1;
        let e = null != O ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: U,
                applicationId: i,
                channelId: t ?? null,
                guildId: O ?? null,
                isStart: s,
                error: n instanceof R.A || n instanceof A.A || n instanceof L.A ? n : new A.A(n),
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
        c = await (0, p.Ay)(i, t);
    } catch (e) {
        if (e.message === p.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let u = c.handler !== h.Ys.APP_HANDLER;
    if (!(u || er.TR.includes(t))) {
        (null != i && (await (0, f.Zn)({ type: "channel", channelId: i })), await (0, f.Zn)({ type: "user" }));
        let e = G.A.getChannel(i),
            { isAuthorized: n } = await (0, m.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: c.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let _ = G.A.getChannel(i),
        E = null != r ? x.A.getGuild(r) : null;
    if (null == _) return { result: "failure", reason: 3 };
    if (u) {
        let e,
            n = T.A.getApplication(t),
            i = Y.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = T.A.getApplication(i?.applicationId));
        let r = F.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, K.O)({
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
            (0, I.A)({
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
                            V.default.track(ei.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
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
                                : null != s && s in L.A.ReasonCodes
                                  ? d(new L.A(s))
                                  : d(new L.A(L.A.ReasonCodes.UNKNOWN)));
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
        l = w.default.getSessionId(),
        o = F.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let c = await (0, z.A)(n, r);
    if (null == o || null == c) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let u = G.A.getChannel(r);
    if (null == u) return { result: "failure", reason: 3 };
    let _ = (0, X.JH)({ channelId: r, ChannelStore: G.A, GuildStore: x.A, PermissionStore: k.A, VoiceStateStore: B.A });
    if (_ !== X.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === X.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, P.i)())
                : _ === X.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  d.A.show({
                      title: el.intl.string(el.t["IOy+I5"]),
                      body: el.intl.string(el.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let E = Y.Ay.getCurrentEmbeddedActivity();
    if (
        (E?.applicationId != null && (t = T.A.getApplication(E?.applicationId)),
        !(
            !a ||
            (await (0, K.O)({ applicationId: n, application: c, channel: u, currentEmbeddedApplication: t, user: o }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != u) {
        let e = (0, Z.A)(u.id),
            n = et.lk.includes(u.type);
        if (e) {
            if (!(await (0, Q.A)({ channelId: u.id, bypassChangeModal: null != t })))
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
    let a = (0, $.H)(t);
    if (null != a) {
        let e = N.A.getSelectedParticipantId(a),
            t = F.default.getCurrentUser()?.id,
            i = Y.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, S.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && u.A.selectParticipant(a, null);
    }
}
async function eE() {
    try {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: ei.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => U.Ay.createFromServer(e));
        (o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            o.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t }));
    } catch (e) {
        o.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function eA(e, t, n) {
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
function eh(e, t, n) {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
}
async function ef(e) {
    let { guildId: t, force: n = !1 } = e,
        r = Y.Ay.getShelfActivities(t),
        a = r.map((e) => T.A.getApplication(e.application_id)).filter(H.Vq);
    if (!n && !Y.Ay.shouldFetchShelf(t)) {
        if (Y.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    ((e = eh.bind(null, t, n)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e));
                }),
                r = new Promise((e) => {
                    ((n = eh.bind(null, t, e)), o.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n));
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
            n = await j.A.get({
                url: ei.Rsh.ACTIVITY_SHELF,
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
            { activityConfigs: r, applications: a.map((e) => U.Ay.createFromServer(e)) }
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
        s = await _.Ay.createInvite(t, { target_type: es.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != G.A.getChannel(n) && E.A.sendInvite(n, s.code, r, a);
}
async function ep(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        l = await _.Ay.createInvite(t, { target_type: es.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await c.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = G.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        (null != s && (t = v.Ay.parse(n, s).content), E.A.sendInvite(e, l.code, r, a, t));
    });
}
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea.i.INDIRECT_ACTION;
    (0, O.$l)(l.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function em(e) {
    let t = ei.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (await s.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0);
    } catch (e) {
        return !1;
    }
}
function eg(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eS(e) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eN() {
    (eg(en.Gd.ACTIVITY_POPOUT_WINDOW), o.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
}
async function eC(e, t, n) {
    let i = { use_stateless_ticket: !0 };
    return (
        null != t && (i.channel_id = t),
        null != n && (i.surface = n),
        (await s.Bo.post({ url: ei.Rsh.APPLICATION_PROXY_TICKET(e), body: i, rejectWithError: !0 })).body.ticket
    );
}
async function eO(e, t) {
    o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await eC(e, t ?? void 0);
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
        let n = G.A.getChannel(t),
            i = n?.guild_id ?? null,
            a = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            o.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, b.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof R.A || s instanceof A.A || s instanceof L.A ? s : new A.A(s),
            }),
            !1
        );
    } finally {
        o.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

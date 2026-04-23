n.d(t, {
    CS: () => ed,
    D2: () => ef,
    Ir: () => eS,
    LK: () => eT,
    LV: () => eu,
    SE: () => eE,
    Ue: () => eA,
    _H: () => eo,
    gk: () => eN,
    i5: () => eO,
    jp: () => eR,
    od: () => eC,
    rW: () => ea,
    su: () => es,
    tk: () => eI,
});
var i = n(110259),
    r = n(344351),
    a = n(636537),
    s = n(554146),
    _ = n(228366),
    l = n(157559),
    o = n(308528),
    E = n(367513),
    d = n(376728),
    c = n(720149),
    u = n(181658),
    I = n(155718),
    A = n(264322),
    T = n(545152),
    S = n(361926),
    N = n(587895),
    O = n(972995),
    R = n(20015),
    f = n(568598),
    C = n(313961),
    p = n(367727),
    m = n(744230),
    L = n(113267),
    D = n(375802),
    h = n(451909),
    g = n(195880),
    b = n(567249),
    U = n(192552),
    P = n(395671),
    M = n(495544),
    y = n(734057),
    G = n(71393),
    v = n(576705),
    B = n(287809),
    w = n(977997),
    F = n(954571),
    V = n(403362),
    H = n(499785),
    k = n(811024),
    x = n(933958),
    W = n(799061),
    Y = n(969151),
    j = n(817636),
    K = n(782091),
    $ = n(108959),
    Q = n(582776),
    q = n(90804),
    X = n(946255),
    z = n(859007),
    J = n(360469),
    Z = n(5867),
    ee = n(652215),
    et = n(705751),
    en = n(49999),
    ei = n(172799),
    er = n(985018);
function ea(e) {
    let t = x.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && eo({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function es(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: a,
            analyticsLocations: s,
            locationObject: l,
            embeddedActivitiesManager: o,
            componentId: E,
            commandOrigin: d,
            sectionName: c,
            source: I,
            onExecutedCallback: A,
            referrerId: T,
            customId: S,
            inviterUserId: O,
            onConfirmActivityLaunchChecksAlertOpen: f,
        } = e,
        C = y.A.getChannel(t),
        p = C?.getGuildId() ?? void 0;
    if (null == p && !C?.isPrivate()) return !1;
    let h = N.A.getApplication(i),
        U = null != h && (0, D.x)(h),
        P = (0, g.m)();
    try {
        if (b.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (((0, Q.Q)(), (0, z.y)({ applicationId: i }))) return !0;
        _.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: P,
            applicationId: i,
            channelId: t ?? null,
            componentId: E,
            analyticsLocations: s,
            source: I,
            commandOrigin: d,
            inviterUserId: O,
            launchParams: { customId: S, referrerId: T },
        });
        let e = await ef(i, t ?? void 0);
        _.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let r = B.default.getCurrentUser();
        if (
            (null != r &&
                (0, X.A)({
                    type: a ? ee.UqL.LAUNCH : ee.UqL.JOIN,
                    userId: r?.id,
                    guildId: p,
                    channelId: t,
                    channelType: C?.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: s ?? [],
                    source: I,
                    referrerId: T,
                    inviterUserId: O,
                }),
            a)
        ) {
            var M, G;
            let e, n, r, a;
            if (
                null == t ||
                ((M = i),
                (G = C),
                (e = G?.type === ee.rbe.GUILD_VOICE),
                (n = N.A.getApplication(M)),
                (r = (0, R.n)(n, ee.gfo.EMBEDDED)),
                (a = (0, k.AX)(G)),
                (!e || !r) && !a)
            )
                throw new m.A(m.A.Reasons.INVALID_CHANNEL);
            let s = await e_({
                applicationId: i,
                nonce: P,
                channelId: t,
                guildId: p,
                commandOrigin: d,
                sectionName: c,
                source: I,
                onExecutedCallback: A,
                onConfirmActivityLaunchChecksAlertOpen: f,
                embeddedActivitiesManager: o,
            });
            if ("failure" === s.result)
                if (4 === s.reason)
                    return (
                        _.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: P,
                            applicationId: i,
                            channelId: t ?? null,
                        }),
                        !1
                    );
                else throw new m.A(m.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await el({ applicationId: i, channelId: t, embeddedActivitiesManager: o, isStart: a, guildId: p });
            if ((A?.(), "failure" === e.result))
                throw new m.A(m.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        _.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: P, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (U) return !1;
        let e = null != p ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            _.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: P,
                applicationId: i,
                channelId: t ?? null,
                guildId: p ?? null,
                isStart: a,
                error: n instanceof m.A || n instanceof u.A || n instanceof L.A ? n : new u.A(n),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
async function e_(e) {
    let {
            applicationId: t,
            nonce: n,
            channelId: i,
            guildId: r,
            commandOrigin: a,
            sectionName: s,
            source: _,
            onExecutedCallback: l,
            onConfirmActivityLaunchChecksAlertOpen: o,
            embeddedActivitiesManager: E,
        } = e,
        d = null;
    try {
        d = await (0, S.Ay)(i, t);
    } catch (e) {
        if (e.message === S.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let c = d.handler !== I.Ys.APP_HANDLER;
    if (!(c || et.TR.includes(t))) {
        null != i && (await (0, A.Zn)({ type: "channel", channelId: i })), await (0, A.Zn)({ type: "user" });
        let e = y.A.getChannel(i),
            { isAuthorized: n } = await (0, O.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let R = y.A.getChannel(i),
        f = null != r ? G.A.getGuild(r) : null;
    if (null == R) return { result: "failure", reason: 3 };
    if (c) {
        let e,
            n = N.A.getApplication(t),
            i = x.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = N.A.getApplication(i?.applicationId));
        let r = B.default.getCurrentUser();
        if (
            null != r &&
            !(await (0, W.O)({
                applicationId: t,
                application: n,
                channel: R,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: E,
                user: r,
                onConfirmActivityLaunchChecksAlertOpen: o,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, o) => {
            (0, T.A)({
                command: d,
                optionValues: {},
                context: { channel: R, guild: f },
                commandOrigin: a,
                sectionName: s,
                source: _,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        l?.(), e();
                    },
                    onFailure: (e, n, a, s) => {
                        l?.(),
                            F.default.track(ee.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: i,
                                guild_id: r,
                                application_id: t,
                                channel_type: R?.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: _,
                            }),
                            null != e && null != n && null != a
                                ? o(new u.A({ status: a, body: { message: n, code: e } }))
                                : null != s && s in L.A.ReasonCodes
                                  ? o(new L.A(s))
                                  : o(new L.A(L.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function el(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: a, isStart: s, guildId: _ } = e,
        o = M.default.getSessionId(),
        E = B.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let d = await (0, j.A)(n, r);
    if (null == E || null == d) return { result: "failure", reason: 2 };
    if (null == r) return { result: "failure", reason: 3 };
    let c = y.A.getChannel(r);
    if (null == c) return { result: "failure", reason: 3 };
    let u = (0, K.JH)({ channelId: r, ChannelStore: y.A, GuildStore: G.A, PermissionStore: v.A, VoiceStateStore: w.A });
    if (u !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            u === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, U.i)())
                : u === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.A.show({
                      title: er.intl.string(er.t["IOy+I5"]),
                      body: er.intl.string(er.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let I = x.Ay.getCurrentEmbeddedActivity();
    if (
        (I?.applicationId != null && (t = N.A.getApplication(I?.applicationId)),
        !(
            !s ||
            (await (0, W.O)({
                applicationId: n,
                application: d,
                channel: c,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: E,
            }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != c) {
        let e = (0, $.A)(c.id),
            n = J.lk.includes(c.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: c.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, k.pE)(c) || !n) return { result: "failure", reason: 9 };
    }
    let A = {
        trackedActionData: {
            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: _, channel_id: r, application_id: n, session_id: o },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != r
        ? (await H.A.post({
              url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: { session_id: o, guild_id: _ ?? void 0 },
              ...A,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function eo(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = x.Ay.getSelfEmbeddedActivityForLocation(t);
    _.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: r?.launchId,
        showFeedback: i,
    });
    let a = (0, Y.H)(t);
    if (null != a) {
        let e = C.A.getSelectedParticipantId(a),
            t = B.default.getCurrentUser()?.id,
            i = x.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, f.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && E.A.selectParticipant(a, null);
    }
}
async function eE() {
    try {
        _.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await a.Bo.get({
                url: ee.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => P.Ay.createFromServer(e));
        _.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            _.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t });
    } catch (e) {
        _.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function ed(e, t, n) {
    try {
        _.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await a.Bo.post({
            url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            _.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return _.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new u.A(e);
    }
}
let ec = (e, t, n) => {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
};
async function eu(e) {
    let { guildId: t, force: n = !1 } = e,
        r = x.Ay.getShelfActivities(t),
        a = r.map((e) => N.A.getApplication(e.application_id)).filter(V.Vq);
    if (!n && !x.Ay.shouldFetchShelf(t)) {
        if (x.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    (e = ec.bind(null, t, n)), _.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (n = ec.bind(null, t, e)), _.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([i, r]),
                null != e && (_.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != n && (_.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = null));
        }
        return { activityConfigs: r, applications: a };
    }
    try {
        _.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await H.A.get({
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
            a = n.body.applications ?? [],
            s = n.body.assets ?? {};
        return (
            _.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: r,
                applications: a,
                assets: s,
            }),
            a.length > 0 && _.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: a }),
            { activityConfigs: r, applications: a.map((e) => P.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            _.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: r, applications: a }
        );
    }
}
async function eI(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r, inviteAnalyticsMetadata: a } = e,
        s = await d.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: i }, r);
    null != y.A.getChannel(n) && c.A.sendInvite(n, s.code, r, a);
}
async function eA(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        _ = await d.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: n }, r);
    await o.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = y.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = h.Ay.parse(n, s).content), c.A.sendInvite(e, _.code, r, a, t);
    });
}
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, p.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eS(e) {
    let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await a.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eN(e) {
    _.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eO(e) {
    _.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function eR() {
    eN(Z.Gd.ACTIVITY_POPOUT_WINDOW), _.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function ef(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await a.Bo.post({ url: ee.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function eC(e, t) {
    _.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await ef(e, t ?? void 0);
        _.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            _.h.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: e, proxyTicket: n });
    } catch (s) {
        let n = y.A.getChannel(t),
            i = n?.guild_id ?? null,
            a = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        return (
            _.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, g.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: a,
                error: s instanceof m.A || s instanceof u.A || s instanceof L.A ? s : new u.A(s),
            }),
            !1
        );
    } finally {
        _.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

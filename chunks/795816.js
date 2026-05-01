n.d(t, {
    CS: () => e_,
    D2: () => ep,
    Ir: () => eh,
    LK: () => eT,
    LV: () => eu,
    SE: () => ec,
    Ue: () => eI,
    _H: () => ed,
    gk: () => eS,
    i5: () => eN,
    jp: () => ef,
    od: () => em,
    rW: () => er,
    su: () => es,
    tk: () => eA,
});
var i = n(110259),
    a = n(344351),
    r = n(636537),
    s = n(554146),
    l = n(228366),
    o = n(157559),
    d = n(308528),
    c = n(367513),
    _ = n(376728),
    E = n(720149),
    u = n(181658),
    A = n(155718),
    I = n(264322),
    T = n(545152),
    h = n(361926),
    S = n(587895),
    N = n(972995),
    f = n(20015),
    p = n(568598),
    m = n(313961),
    O = n(367727),
    C = n(744230),
    R = n(113267),
    g = n(375802),
    L = n(451909),
    D = n(195880),
    b = n(567249),
    M = n(192552),
    P = n(395671),
    U = n(495544),
    v = n(734057),
    y = n(71393),
    G = n(576705),
    w = n(287809),
    x = n(977997),
    V = n(954571),
    B = n(403362),
    F = n(499785),
    k = n(811024),
    H = n(933958),
    j = n(799061),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    $ = n(108959),
    Z = n(582776),
    q = n(90804),
    Q = n(946255),
    z = n(859007),
    X = n(360469),
    J = n(5867),
    ee = n(652215),
    et = n(705751),
    en = n(49999),
    ei = n(172799),
    ea = n(985018);
function er(e) {
    let t = H.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t && ed({ location: t.location, applicationId: t.applicationId, showFeedback: !1 });
}
async function es(e) {
    let {
            channelId: t,
            applicationId: i,
            isStart: r,
            analyticsLocations: s,
            locationObject: o,
            embeddedActivitiesManager: d,
            componentId: c,
            commandOrigin: _,
            sectionName: E,
            source: A,
            onExecutedCallback: I,
            referrerId: T,
            customId: h,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: p,
        } = e,
        m = v.A.getChannel(t),
        O = m?.getGuildId() ?? void 0;
    if (null == O && !m?.isPrivate()) return !1;
    let L = S.A.getApplication(i),
        M = null != L && (0, g.x)(L),
        P = (0, D.m)();
    try {
        if (b.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (((0, Z.Q)(), (0, z.y)({ applicationId: i }))) return !0;
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: P,
            applicationId: i,
            channelId: t ?? null,
            componentId: c,
            analyticsLocations: s,
            source: A,
            commandOrigin: _,
            inviterUserId: N,
            launchParams: { customId: h, referrerId: T },
        });
        let e = await ep(i, t ?? void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: i,
            channelId: t ?? null,
            proxyTicket: e,
        });
        let a = w.default.getCurrentUser();
        if (
            (null != a &&
                (0, Q.A)({
                    type: r ? ee.UqL.LAUNCH : ee.UqL.JOIN,
                    userId: a?.id,
                    guildId: O,
                    channelId: t,
                    channelType: m?.type,
                    applicationId: i,
                    locationObject: o,
                    analyticsLocations: s ?? [],
                    source: A,
                    referrerId: T,
                    inviterUserId: N,
                }),
            r)
        ) {
            var U, y;
            let e, n, a, r;
            if (
                null == t ||
                ((U = i),
                (y = m),
                (e = y?.type === ee.rbe.GUILD_VOICE),
                (n = S.A.getApplication(U)),
                (a = (0, f.n)(n, ee.gfo.EMBEDDED)),
                (r = (0, k.AX)(y)),
                (!e || !a) && !r)
            )
                throw new C.A(C.A.Reasons.INVALID_CHANNEL);
            let s = await el({
                applicationId: i,
                nonce: P,
                channelId: t,
                guildId: O,
                commandOrigin: _,
                sectionName: E,
                source: A,
                onExecutedCallback: I,
                onConfirmActivityLaunchChecksAlertOpen: p,
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
            let e = await eo({ applicationId: i, channelId: t, embeddedActivitiesManager: d, isStart: r, guildId: O });
            if ((I?.(), "failure" === e.result))
                throw new C.A(C.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", nonce: P, applicationId: i, channelId: t ?? null });
    } catch (n) {
        if (M) return !1;
        let e = null != O ? a.T.GUILD_CHANNEL : a.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: P,
                applicationId: i,
                channelId: t ?? null,
                guildId: O ?? null,
                isStart: r,
                error: n instanceof C.A || n instanceof u.A || n instanceof R.A ? n : new u.A(n),
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
            guildId: a,
            commandOrigin: r,
            sectionName: s,
            source: l,
            onExecutedCallback: o,
            onConfirmActivityLaunchChecksAlertOpen: d,
            embeddedActivitiesManager: c,
        } = e,
        _ = null;
    try {
        _ = await (0, h.Ay)(i, t);
    } catch (e) {
        if (e.message === h.c5) return { result: "failure", reason: 1 };
        throw e;
    }
    let E = _.handler !== A.Ys.APP_HANDLER;
    if (!(E || et.TR.includes(t))) {
        null != i && (await (0, I.Zn)({ type: "channel", channelId: i })), await (0, I.Zn)({ type: "user" });
        let e = v.A.getChannel(i),
            { isAuthorized: n } = await (0, N.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: _.integration_types,
            });
        if (!n) return { result: "failure", reason: 2 };
    }
    let f = v.A.getChannel(i),
        p = null != a ? y.A.getGuild(a) : null;
    if (null == f) return { result: "failure", reason: 3 };
    if (E) {
        let e,
            n = S.A.getApplication(t),
            i = H.Ay.getCurrentEmbeddedActivity();
        i?.applicationId != null && (e = S.A.getApplication(i?.applicationId));
        let a = w.default.getCurrentUser();
        if (
            null != a &&
            !(await (0, j.O)({
                applicationId: t,
                application: n,
                channel: f,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: c,
                user: a,
                onConfirmActivityLaunchChecksAlertOpen: d,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return { result: "failure", reason: 4 };
    }
    return (
        await new Promise((e, d) => {
            (0, T.A)({
                command: _,
                optionValues: {},
                context: { channel: f, guild: p },
                commandOrigin: r,
                sectionName: s,
                source: l,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        o?.(), e();
                    },
                    onFailure: (e, n, r, s) => {
                        o?.(),
                            V.default.track(ee.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: i,
                                guild_id: a,
                                application_id: t,
                                channel_type: f?.type,
                                error_code: e,
                                error_message: n,
                                error_status: r,
                                error_reason_code: s,
                                source: l,
                            }),
                            null != e && null != n && null != r
                                ? d(new u.A({ status: r, body: { message: n, code: e } }))
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
async function eo(e) {
    let t,
        { applicationId: n, channelId: a, embeddedActivitiesManager: r, isStart: s, guildId: l } = e,
        d = U.default.getSessionId(),
        c = w.default.getCurrentUser();
    if (null == n) return { result: "failure", reason: 1 };
    let _ = await (0, W.A)(n, a);
    if (null == c || null == _) return { result: "failure", reason: 2 };
    if (null == a) return { result: "failure", reason: 3 };
    let E = v.A.getChannel(a);
    if (null == E) return { result: "failure", reason: 3 };
    let u = (0, K.JH)({ channelId: a, ChannelStore: v.A, GuildStore: y.A, PermissionStore: G.A, VoiceStateStore: x.A });
    if (u !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            u === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, M.i)())
                : u === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  o.A.show({
                      title: ea.intl.string(ea.t["IOy+I5"]),
                      body: ea.intl.string(ea.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            { result: "failure", reason: e }
        );
    }
    let A = H.Ay.getCurrentEmbeddedActivity();
    if (
        (A?.applicationId != null && (t = S.A.getApplication(A?.applicationId)),
        !(
            !s ||
            (await (0, j.O)({
                applicationId: n,
                application: _,
                channel: E,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: r,
                user: c,
            }))
        ))
    )
        return { result: "failure", reason: 7 };
    if (null != E) {
        let e = (0, $.A)(E.id),
            n = X.lk.includes(E.type);
        if (e) {
            if (!(await (0, q.A)({ channelId: E.id, bypassChangeModal: null != t })))
                return { result: "failure", reason: 8 };
        } else if (!(0, k.pE)(E) || !n) return { result: "failure", reason: 9 };
    }
    let I = {
        trackedActionData: {
            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: { guild_id: l, channel_id: a, application_id: n, session_id: d },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != a
        ? (await F.A.post({
              url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(a, n),
              body: { session_id: d, guild_id: l ?? void 0 },
              ...I,
          }),
          { result: "success" })
        : { result: "failure", reason: 0 };
}
function ed(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        a = H.Ay.getSelfEmbeddedActivityForLocation(t);
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: a?.launchId,
        showFeedback: i,
    });
    let r = (0, Y.H)(t);
    if (null != r) {
        let e = m.A.getSelectedParticipantId(r),
            t = w.default.getCurrentUser()?.id,
            i = H.Ay.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === n);
        if (null == i || null == t || "" === t) return;
        e === (0, p.Qt)({ applicationId: n, instanceId: i?.compositeInstanceId }) && c.A.selectParticipant(r, null);
    }
}
async function ec() {
    try {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await r.Bo.get({
                url: ee.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => P.Ay.createFromServer(e));
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications: n, assets: e.body.assets }),
            l.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: t });
    } catch (e) {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function e_(e, t, n) {
    try {
        l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let i = await r.Bo.post({
            url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: null != t ? { channel_id: t } : void 0,
            attachments: [{ name: "file", file: n }],
            rejectWithError: !0,
        });
        return (
            l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS", attachment: i.body.attachment }),
            i.body.attachment
        );
    } catch (e) {
        return l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new u.A(e);
    }
}
let eE = (e, t, n) => {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
};
async function eu(e) {
    let { guildId: t, force: n = !1 } = e,
        a = H.Ay.getShelfActivities(t),
        r = a.map((e) => S.A.getApplication(e.application_id)).filter(B.Vq);
    if (!n && !H.Ay.shouldFetchShelf(t)) {
        if (H.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    (e = eE.bind(null, t, n)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                a = new Promise((e) => {
                    (n = eE.bind(null, t, e)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n);
                });
            await Promise.race([i, a]),
                null != e && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != n && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = null));
        }
        return { activityConfigs: a, applications: r };
    }
    try {
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await F.A.get({
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
            a = n.body.activities ?? [],
            r = n.body.applications ?? [],
            s = n.body.assets ?? {};
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: a,
                applications: r,
                assets: s,
            }),
            r.length > 0 && l.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: r }),
            { activityConfigs: a, applications: r.map((e) => P.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            l.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: a, applications: r }
        );
    }
}
async function eA(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: a, inviteAnalyticsMetadata: r } = e,
        s = await _.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: i }, a);
    null != v.A.getChannel(n) && E.A.sendInvite(n, s.code, a, r);
}
async function eI(e) {
    let { channelId: t, applicationId: n, userId: i, location: a, inviteAnalyticsMetadata: r, prefixedContent: s } = e,
        l = await _.Ay.createInvite(t, { target_type: ei.yV.EMBEDDED_APPLICATION, target_application_id: n }, a);
    await d.A.ensurePrivateChannel(i).then((e) => {
        let t,
            n = v.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = L.Ay.parse(n, s).content), E.A.sendInvite(e, l.code, a, r, t);
    });
}
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, O.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), { dismissAction: e });
}
async function eh(e) {
    let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return await r.Bo.get({ url: t, oldFormErrors: !0, rejectWithError: !0 }), !0;
    } catch (e) {
        return !1;
    }
}
function eS(e) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: e });
}
function eN(e) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout: e });
}
function ef() {
    eS(J.Gd.ACTIVITY_POPOUT_WINDOW), l.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function ep(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (await r.Bo.post({ url: ee.Rsh.APPLICATION_PROXY_TICKET(e), body: n, rejectWithError: !0 })).body.ticket
    );
}
async function em(e, t) {
    l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !0 });
    try {
        let n = await ep(e, t ?? void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            l.h.dispatch({ type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET", applicationId: e, proxyTicket: n });
    } catch (s) {
        let n = v.A.getChannel(t),
            i = n?.guild_id ?? null,
            r = null != i ? a.T.GUILD_CHANNEL : a.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, D.m)(),
                applicationId: e,
                channelId: t,
                guildId: i,
                locationKind: r,
                error: s instanceof C.A || s instanceof u.A || s instanceof R.A ? s : new u.A(s),
            }),
            !1
        );
    } finally {
        l.h.dispatch({ type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", applicationId: e, refreshing: !1 });
    }
    return !0;
}

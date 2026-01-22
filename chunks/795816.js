n.d(t, {
    CS: () => ep,
    D2: () => ev,
    Ir: () => eb,
    LK: () => eE,
    LV: () => eh,
    SE: () => ef,
    Ue: () => eg,
    _H: () => ed,
    gk: () => ey,
    i5: () => eO,
    jp: () => eA,
    od: () => eS,
    rW: () => es,
    su: () => eo,
    tk: () => em,
}),
    n(938796),
    n(896048),
    n(65821);
var r = n(110259),
    i = n(344351),
    a = n(665260),
    s = n(562465),
    o = n(554146),
    l = n(73153),
    c = n(157559),
    u = n(308528),
    d = n(367513),
    f = n(846293),
    p = n(843472),
    _ = n(181658),
    h = n(155718),
    m = n(264322),
    g = n(545152),
    E = n(361926),
    b = n(587895),
    y = n(972995),
    O = n(568598),
    A = n(313961),
    v = n(367727),
    S = n(744230),
    I = n(113267),
    T = n(207371),
    C = n(451909),
    N = n(195880),
    R = n(87001),
    w = n(192552),
    P = n(611010),
    D = n(961350),
    x = n(734057),
    L = n(71393),
    j = n(576705),
    M = n(287809),
    k = n(977997),
    U = n(954571),
    G = n(403362),
    V = n(499785),
    F = n(811024),
    B = n(933958),
    H = n(383497),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    z = n(108959),
    q = n(90804),
    X = n(946255),
    Z = n(859007),
    Q = n(360469),
    $ = n(5867),
    J = n(652215),
    ee = n(705751),
    et = n(49999),
    en = n(172799),
    er = n(985018);
function ei(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function es(e) {
    let t = B.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ed({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1,
        });
}
async function eo(e) {
    var t, r;
    let {
            channelId: a,
            applicationId: s,
            isStart: o,
            analyticsLocations: c,
            locationObject: u,
            embeddedActivitiesManager: d,
            componentId: f,
            commandOrigin: p,
            sectionName: h,
            source: m,
            onExecutedCallback: g,
            referrerId: E,
            customId: y,
            inviterUserId: O,
            onConfirmActivityLaunchChecksAlertOpen: A,
        } = e,
        v = x.A.getChannel(a),
        C = null != (t = null == v ? void 0 : v.getGuildId()) ? t : void 0;
    if (null == C && !(null != (r = null == v ? void 0 : v.isPrivate()) && r)) return !1;
    let w = b.A.getApplication(s),
        P = null != w && (0, T.x)(w),
        D = (0, N.m)();
    try {
        if (R.A.getWindowOpen(J.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(J.MLl.ACTIVITY_POPOUT);
        }
        if ((0, Z.y)({ applicationId: s })) return !0;
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: D,
            applicationId: s,
            channelId: null != a ? a : null,
            componentId: f,
            analyticsLocations: c,
            source: m,
            commandOrigin: p,
            inviterUserId: O,
            launchParams: {
                customId: y,
                referrerId: E,
            },
        });
        let e = await ev(s, null != a ? a : void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: s,
            channelId: null != a ? a : null,
            proxyTicket: e,
        });
        let t = M.default.getCurrentUser();
        if (
            (null != t &&
                (0, X.A)({
                    type: o ? J.UqL.LAUNCH : J.UqL.JOIN,
                    userId: null == t ? void 0 : t.id,
                    guildId: C,
                    channelId: a,
                    channelType: null == v ? void 0 : v.type,
                    applicationId: s,
                    locationObject: u,
                    analyticsLocations: null != c ? c : [],
                    source: m,
                    referrerId: E,
                    inviterUserId: O,
                }),
            o)
        ) {
            if (null == a || !el(s, v)) throw new S.A(S.A.Reasons.INVALID_CHANNEL);
            let e = await ec({
                applicationId: s,
                nonce: D,
                channelId: a,
                guildId: C,
                commandOrigin: p,
                sectionName: h,
                source: m,
                onExecutedCallback: g,
                onConfirmActivityLaunchChecksAlertOpen: A,
                embeddedActivitiesManager: d,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        l.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: D,
                            applicationId: s,
                            channelId: null != a ? a : null,
                        }),
                        !1
                    );
                else throw new S.A(S.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({
                applicationId: s,
                channelId: a,
                embeddedActivitiesManager: d,
                isStart: o,
                guildId: C,
            });
            if ((null == g || g(), "failure" === e.result))
                throw new S.A(S.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
            nonce: D,
            applicationId: s,
            channelId: null != a ? a : null,
        });
    } catch (t) {
        if (P) return !1;
        let e = null != C ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: D,
                applicationId: s,
                channelId: null != a ? a : null,
                guildId: null != C ? C : null,
                isStart: o,
                error: t instanceof S.A || t instanceof _.A || t instanceof I.A ? t : new _.A(t),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function el(e, t) {
    let n = (null == t ? void 0 : t.type) === J.rbe.GUILD_VOICE,
        r = b.A.getApplication(e),
        i = null != r && (0, a.Lt)(r.flags, J.gfo.EMBEDDED),
        s = (0, F.AX)(t);
    return (n && i) || s;
}
async function ec(e) {
    let {
            applicationId: t,
            nonce: n,
            channelId: r,
            guildId: i,
            commandOrigin: a,
            sectionName: s,
            source: o,
            onExecutedCallback: l,
            onConfirmActivityLaunchChecksAlertOpen: c,
            embeddedActivitiesManager: u,
        } = e,
        d = null;
    try {
        d = await (0, E.Ay)(r, t);
    } catch (e) {
        if (e.message === E.c5)
            return {
                result: "failure",
                reason: 1,
            };
        throw e;
    }
    let f = d.handler !== h.Ys.APP_HANDLER;
    if (!(f || ee.TR.includes(t))) {
        null != r &&
            (await (0, m.Zn)({
                type: "channel",
                channelId: r,
            })),
            await (0, m.Zn)({ type: "user" });
        let e = x.A.getChannel(r),
            { isAuthorized: n } = await (0, y.q)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n)
            return {
                result: "failure",
                reason: 2,
            };
    }
    let p = x.A.getChannel(r),
        O = null != i ? L.A.getGuild(i) : null;
    if (null == p)
        return {
            result: "failure",
            reason: 3,
        };
    if (f) {
        let e,
            n = b.A.getApplication(t),
            r = B.Ay.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null &&
            (e = b.A.getApplication(null == r ? void 0 : r.applicationId));
        let i = M.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, H.O)({
                applicationId: t,
                application: n,
                channel: p,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: u,
                user: i,
                onConfirmActivityLaunchChecksAlertOpen: c,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return {
                result: "failure",
                reason: 4,
            };
    }
    return (
        await new Promise((e, c) => {
            (0, g.A)({
                command: d,
                optionValues: {},
                context: {
                    channel: p,
                    guild: O,
                },
                commandOrigin: a,
                sectionName: s,
                source: o,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, a, s) => {
                        null == l || l(),
                            U.default.track(J.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == p ? void 0 : p.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: s,
                                source: o,
                            }),
                            null != e && null != n && null != a
                                ? c(
                                      new _.A({
                                          status: a,
                                          body: {
                                              message: n,
                                              code: e,
                                          },
                                      }),
                                  )
                                : null != s && s in I.A.ReasonCodes
                                  ? c(new I.A(s))
                                  : c(new I.A(I.A.ReasonCodes.UNKNOWN));
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
        l = D.default.getSessionId(),
        u = M.default.getCurrentUser(),
        d = n;
    if (null == d)
        return {
            result: "failure",
            reason: 1,
        };
    let f = await (0, W.A)(d, i);
    if (null == u || null == f)
        return {
            result: "failure",
            reason: 2,
        };
    if (null == i)
        return {
            result: "failure",
            reason: 3,
        };
    let p = x.A.getChannel(i);
    if (null == p)
        return {
            result: "failure",
            reason: 3,
        };
    let _ = (0, K.JH)({
        channelId: i,
        ChannelStore: x.A,
        GuildStore: L.A,
        PermissionStore: j.A,
        VoiceStateStore: k.A,
    });
    if (_ !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, w.i)())
                : _ === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  c.A.show({
                      title: er.intl.string(er.t["IOy+I5"]),
                      body: er.intl.string(er.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            {
                result: "failure",
                reason: e,
            }
        );
    }
    let h = B.Ay.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null &&
            (t = b.A.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !s ||
            (await (0, H.O)({
                applicationId: n,
                application: f,
                channel: p,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: u,
            }))
        ))
    )
        return {
            result: "failure",
            reason: 7,
        };
    if (null != p) {
        let e = (0, z.A)(p.id),
            n = Q.lk.includes(p.type);
        if (e) {
            if (
                !(await (0, q.A)({
                    channelId: p.id,
                    bypassChangeModal: null != t,
                }))
            )
                return {
                    result: "failure",
                    reason: 8,
                };
        } else if (!(0, F.pE)(p) || !n)
            return {
                result: "failure",
                reason: 9,
            };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: o,
                channel_id: i,
                application_id: n,
                session_id: l,
            },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != i
        ? (await V.A.post(
              ea(
                  {
                      url: J.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
                      body: {
                          session_id: l,
                          guild_id: null != o ? o : void 0,
                      },
                  },
                  m,
              ),
          ),
          { result: "success" })
        : {
              result: "failure",
              reason: 0,
          };
}
function ed(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = B.Ay.getSelfEmbeddedActivityForLocation(t);
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r,
    });
    let a = (0, Y.H)(t);
    if (null != a) {
        var s;
        let e = A.A.getSelectedParticipantId(a),
            t = null == (s = M.default.getCurrentUser()) ? void 0 : s.id,
            r = B.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e ===
            (0, O.Qt)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId,
            }) && d.A.selectParticipant(a, null);
    }
}
async function ef() {
    try {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await s.Bo.get({
                url: J.Rsh.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => P.Ay.createFromServer(e));
        l.h.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
            applications: n,
            assets: e.body.assets,
        }),
            l.h.dispatch({
                type: "APPLICATIONS_FETCH_SUCCESS",
                applications: t,
            });
    } catch (e) {
        l.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function ep(e, t, n) {
    try {
        l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = null != t ? { channel_id: t } : void 0,
            i = await s.Bo.post({
                url: J.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
                query: r,
                attachments: [
                    {
                        name: "file",
                        file: n,
                    },
                ],
                rejectWithError: !0,
            });
        return (
            l.h.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                attachment: i.body.attachment,
            }),
            i.body.attachment
        );
    } catch (e) {
        return l.h.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new _.A(e);
    }
}
let e_ = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function eh(e) {
    var t, n, i, a;
    let { guildId: s, force: o = !1 } = e,
        c = B.Ay.getShelfActivities(s),
        u = c.map((e) => b.A.getApplication(e.application_id)).filter(G.Vq);
    if (!o && !B.Ay.shouldFetchShelf(s)) {
        if (null == (t = B.Ay.getShelfFetchStatus(s)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = e_.bind(null, s, t)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (t = e_.bind(null, s, e)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t);
                });
            await Promise.race([n, r]),
                null != e && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != t && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), (t = null));
        }
        return {
            activityConfigs: c,
            applications: u,
        };
    }
    try {
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
            guildId: s,
        });
        let e = void 0 !== s && "" !== s ? { guild_id: s } : void 0,
            t = await V.A.get({
                url: J.Rsh.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: s },
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            o = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (a = t.body.assets) ? a : {};
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: s,
                activities: o,
                applications: c,
                assets: u,
            }),
            c.length > 0 &&
                l.h.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: c,
                }),
            {
                activityConfigs: o,
                applications: c.map((e) => P.Ay.createFromServer(e)),
            }
        );
    } catch (e) {
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                guildId: s,
            }),
            {
                activityConfigs: c,
                applications: u,
            }
        );
    }
}
async function em(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        s = await f.Ay.createInvite(
            t,
            {
                target_type: en.yV.EMBEDDED_APPLICATION,
                target_application_id: r,
            },
            i,
        );
    null != x.A.getChannel(n) && p.A.sendInvite(n, s.code, i, a);
}
async function eg(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: s } = e,
        o = await f.Ay.createInvite(
            t,
            {
                target_type: en.yV.EMBEDDED_APPLICATION,
                target_application_id: n,
            },
            i,
        );
    await u.A.ensurePrivateChannel(r).then((e) => {
        let t,
            n = x.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != s && (t = C.Ay.parse(n, s).content), p.A.sendInvite(e, o.code, i, a, t);
    });
}
function eE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et.i.INDIRECT_ACTION;
    (0, v.$l)(o.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: e });
}
async function eb(e) {
    let t = J.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await s.Bo.get({
                url: t,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function ey(e) {
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}
function eO(e) {
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
        focusedActivityLayout: e,
    });
}
function eA() {
    ey($.Gd.ACTIVITY_POPOUT_WINDOW), l.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function ev(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (
            await s.Bo.post({
                url: J.Rsh.APPLICATION_PROXY_TICKET(e),
                body: n,
                rejectWithError: !0,
            })
        ).body.ticket
    );
}
async function eS(e, t) {
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
        applicationId: e,
        refreshing: !0,
    });
    try {
        let n = await ev(e, null != t ? t : void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
                applicationId: e,
                proxyTicket: n,
            });
    } catch (o) {
        var n;
        let r = x.A.getChannel(t),
            a = null != (n = null == r ? void 0 : r.guild_id) ? n : null,
            s = null != a ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, N.m)(),
                applicationId: e,
                channelId: t,
                guildId: a,
                locationKind: s,
                error: o instanceof S.A || o instanceof _.A || o instanceof I.A ? o : new _.A(o),
            }),
            !1
        );
    } finally {
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
            applicationId: e,
            refreshing: !1,
        });
    }
    return !0;
}

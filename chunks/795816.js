n.d(t, {
    CS: () => e_,
    D2: () => eI,
    Ir: () => eb,
    LK: () => ey,
    LV: () => em,
    SE: () => ep,
    Ue: () => eE,
    _H: () => ef,
    gk: () => eO,
    i5: () => ev,
    jp: () => eA,
    od: () => eS,
    rW: () => es,
    su: () => el,
    tk: () => eg,
}),
    n(938796),
    n(896048),
    n(65821);
var r = n(110259),
    i = n(344351),
    a = n(665260),
    o = n(562465),
    s = n(554146),
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
    y = n(587895),
    b = n(972995),
    O = n(568598),
    v = n(313961),
    A = n(367727),
    I = n(744230),
    S = n(113267),
    T = n(207371),
    C = n(451909),
    N = n(195880),
    w = n(87001),
    R = n(192552),
    P = n(611010),
    D = n(961350),
    L = n(734057),
    x = n(71393),
    M = n(576705),
    j = n(287809),
    k = n(977997),
    U = n(954571),
    G = n(403362),
    F = n(499785),
    V = n(811024),
    B = n(933958),
    H = n(383497),
    Y = n(969151),
    W = n(817636),
    K = n(782091),
    z = n(108959),
    q = n(448739),
    Z = n(90804),
    Q = n(946255),
    X = n(859007),
    J = n(360469),
    $ = n(5867),
    ee = n(652215),
    et = n(705751),
    en = n(49999),
    er = n(172799),
    ei = n(985018);

function ea(e, t, n) {
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

function eo(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}

function es(e) {
    let t = B.Ay.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ef({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1,
        });
}
async function el(e) {
    var t, r;
    let {
            channelId: a,
            applicationId: o,
            isStart: s,
            analyticsLocations: c,
            locationObject: u,
            embeddedActivitiesManager: d,
            componentId: f,
            commandOrigin: p,
            sectionName: h,
            source: m,
            onExecutedCallback: g,
            referrerId: E,
            customId: b,
            inviterUserId: O,
            onConfirmActivityLaunchChecksAlertOpen: v,
        } = e,
        A = L.A.getChannel(a),
        C = null != (t = null == A ? void 0 : A.getGuildId()) ? t : void 0;
    if (null == C && !(null != (r = null == A ? void 0 : A.isPrivate()) && r)) return !1;
    let R = y.A.getApplication(o),
        P = null != R && (0, T.x)(R),
        D = (0, N.m)();
    try {
        if (w.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
            let { close: e } = n(574172);
            e(ee.MLl.ACTIVITY_POPOUT);
        }
        if (
            ((0, q.Q)(),
            (0, X.y)({
                applicationId: o,
            }))
        )
            return !0;
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: D,
            applicationId: o,
            channelId: null != a ? a : null,
            componentId: f,
            analyticsLocations: c,
            source: m,
            commandOrigin: p,
            inviterUserId: O,
            launchParams: {
                customId: b,
                referrerId: E,
            },
        });
        let e = await eI(o, null != a ? a : void 0);
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: o,
            channelId: null != a ? a : null,
            proxyTicket: e,
        });
        let t = j.default.getCurrentUser();
        if (
            (null != t &&
                (0, Q.A)({
                    type: s ? ee.UqL.LAUNCH : ee.UqL.JOIN,
                    userId: null == t ? void 0 : t.id,
                    guildId: C,
                    channelId: a,
                    channelType: null == A ? void 0 : A.type,
                    applicationId: o,
                    locationObject: u,
                    analyticsLocations: null != c ? c : [],
                    source: m,
                    referrerId: E,
                    inviterUserId: O,
                }),
            s)
        ) {
            if (null == a || !ec(o, A)) throw new I.A(I.A.Reasons.INVALID_CHANNEL);
            let e = await eu({
                applicationId: o,
                nonce: D,
                channelId: a,
                guildId: C,
                commandOrigin: p,
                sectionName: h,
                source: m,
                onExecutedCallback: g,
                onConfirmActivityLaunchChecksAlertOpen: v,
                embeddedActivitiesManager: d,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        l.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: D,
                            applicationId: o,
                            channelId: null != a ? a : null,
                        }),
                        !1
                    );
                else throw new I.A(I.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ed({
                applicationId: o,
                channelId: a,
                embeddedActivitiesManager: d,
                isStart: s,
                guildId: C,
            });
            if ((null == g || g(), "failure" === e.result))
                throw new I.A(I.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
            nonce: D,
            applicationId: o,
            channelId: null != a ? a : null,
        });
    } catch (t) {
        if (P) return !1;
        let e = null != C ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: D,
                applicationId: o,
                channelId: null != a ? a : null,
                guildId: null != C ? C : null,
                isStart: s,
                error: t instanceof I.A || t instanceof _.A || t instanceof S.A ? t : new _.A(t),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}

function ec(e, t) {
    let n = (null == t ? void 0 : t.type) === ee.rbe.GUILD_VOICE,
        r = y.A.getApplication(e),
        i = null != r && (0, a.Lt)(r.flags, ee.gfo.EMBEDDED),
        o = (0, V.AX)(t);
    return (n && i) || o;
}
async function eu(e) {
    let {
            applicationId: t,
            nonce: n,
            channelId: r,
            guildId: i,
            commandOrigin: a,
            sectionName: o,
            source: s,
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
    if (!(f || et.TR.includes(t))) {
        null != r &&
            (await (0, m.Zn)({
                type: "channel",
                channelId: r,
            })),
            await (0, m.Zn)({
                type: "user",
            });
        let e = L.A.getChannel(r),
            { isAuthorized: n } = await (0, b.q)({
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
    let p = L.A.getChannel(r),
        O = null != i ? x.A.getGuild(i) : null;
    if (null == p)
        return {
            result: "failure",
            reason: 3,
        };
    if (f) {
        let e,
            n = y.A.getApplication(t),
            r = B.Ay.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null &&
            (e = y.A.getApplication(null == r ? void 0 : r.applicationId));
        let i = j.default.getCurrentUser();
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
                sectionName: o,
                source: s,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, a, o) => {
                        null == l || l(),
                            U.default.track(ee.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == p ? void 0 : p.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: o,
                                source: s,
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
                                : null != o && o in S.A.ReasonCodes
                                  ? c(new S.A(o))
                                  : c(new S.A(S.A.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        {
            result: "success",
        }
    );
}
async function ed(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: s } = e,
        l = D.default.getSessionId(),
        u = j.default.getCurrentUser(),
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
    let p = L.A.getChannel(i);
    if (null == p)
        return {
            result: "failure",
            reason: 3,
        };
    let _ = (0, K.JH)({
        channelId: i,
        ChannelStore: L.A,
        GuildStore: x.A,
        PermissionStore: M.A,
        VoiceStateStore: k.A,
    });
    if (_ !== K.xy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, R.i)())
                : _ === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  c.A.show({
                      title: ei.intl.string(ei.t["IOy+I5"]),
                      body: ei.intl.string(ei.t.UXoQTp),
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
            (t = y.A.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
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
            n = J.lk.includes(p.type);
        if (e) {
            if (
                !(await (0, Z.A)({
                    channelId: p.id,
                    bypassChangeModal: null != t,
                }))
            )
                return {
                    result: "failure",
                    reason: 8,
                };
        } else if (!(0, V.pE)(p) || !n)
            return {
                result: "failure",
                reason: 9,
            };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: s,
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
        ? (await F.A.post(
              eo(
                  {
                      url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
                      body: {
                          session_id: l,
                          guild_id: null != s ? s : void 0,
                      },
                  },
                  m,
              ),
          ),
          {
              result: "success",
          })
        : {
              result: "failure",
              reason: 0,
          };
}

function ef(e) {
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
        var o;
        let e = v.A.getSelectedParticipantId(a),
            t = null == (o = j.default.getCurrentUser()) ? void 0 : o.id,
            r = B.Ay.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e ===
            (0, O.Qt)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId,
            }) && d.A.selectParticipant(a, null);
    }
}
async function ep() {
    try {
        l.h.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START",
        });
        let e = await o.Bo.get({
                url: ee.Rsh.APPLICATIONS_WITH_ASSETS,
                query: {
                    with_team_applications: !0,
                },
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
        l.h.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL",
        });
    }
}
async function e_(e, t, n) {
    try {
        l.h.dispatch({
            type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START",
        });
        let r =
                null != t
                    ? {
                          channel_id: t,
                      }
                    : void 0,
            i = await o.Bo.post({
                url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
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
        return (
            l.h.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL",
            }),
            new _.A(e)
        );
    }
}
let eh = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function em(e) {
    var t, n, i, a;
    let { guildId: o, force: s = !1 } = e,
        c = B.Ay.getShelfActivities(o),
        u = c.map((e) => y.A.getApplication(e.application_id)).filter(G.Vq);
    if (!s && !B.Ay.shouldFetchShelf(o)) {
        if (null == (t = B.Ay.getShelfFetchStatus(o)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = eh.bind(null, o, t)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (t = eh.bind(null, o, e)), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t);
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
            guildId: o,
        });
        let e =
                void 0 !== o && "" !== o
                    ? {
                          guild_id: o,
                      }
                    : void 0,
            t = await F.A.get({
                url: ee.Rsh.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: {
                        guild_id: o,
                    },
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            s = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (a = t.body.assets) ? a : {};
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: o,
                activities: s,
                applications: c,
                assets: u,
            }),
            c.length > 0 &&
                l.h.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: c,
                }),
            {
                activityConfigs: s,
                applications: c.map((e) => P.Ay.createFromServer(e)),
            }
        );
    } catch (e) {
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                guildId: o,
            }),
            {
                activityConfigs: c,
                applications: u,
            }
        );
    }
}
async function eg(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        o = await f.Ay.createInvite(
            t,
            {
                target_type: er.yV.EMBEDDED_APPLICATION,
                target_application_id: r,
            },
            i,
        );
    null != L.A.getChannel(n) && p.A.sendInvite(n, o.code, i, a);
}
async function eE(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: o } = e,
        s = await f.Ay.createInvite(
            t,
            {
                target_type: er.yV.EMBEDDED_APPLICATION,
                target_application_id: n,
            },
            i,
        );
    await u.A.ensurePrivateChannel(r).then((e) => {
        let t,
            n = L.A.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != o && (t = C.Ay.parse(n, o).content), p.A.sendInvite(e, s.code, i, a, t);
    });
}

function ey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
    (0, A.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), {
        dismissAction: e,
    });
}
async function eb(e) {
    let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await o.Bo.get({
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

function eO(e) {
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}

function ev(e) {
    l.h.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
        focusedActivityLayout: e,
    });
}

function eA() {
    eO($.Gd.ACTIVITY_POPOUT_WINDOW),
        l.h.dispatch({
            type: "ACTIVITY_POPOUT_WINDOW_OPEN",
        });
}
async function eI(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (
            await o.Bo.post({
                url: ee.Rsh.APPLICATION_PROXY_TICKET(e),
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
        let n = await eI(e, null != t ? t : void 0);
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
    } catch (s) {
        var n;
        let r = L.A.getChannel(t),
            a = null != (n = null == r ? void 0 : r.guild_id) ? n : null,
            o = null != a ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        return (
            l.h.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, N.m)(),
                applicationId: e,
                channelId: t,
                guildId: a,
                locationKind: o,
                error: s instanceof I.A || s instanceof _.A || s instanceof S.A ? s : new _.A(s),
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

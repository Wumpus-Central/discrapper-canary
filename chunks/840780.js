n.d(t, { Z: () => ew }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(907331),
    u = n(442837),
    d = n(704215),
    f = n(198168),
    h = n(907862),
    p = n(481060),
    g = n(570140),
    b = n(24124),
    m = n(475179),
    y = n(925549),
    O = n(438139),
    v = n(730749),
    j = n(110924),
    C = n(607070),
    x = n(636449),
    E = n(566620),
    S = n(317381),
    I = n(889441),
    _ = n(736409),
    P = n(906732),
    N = n(524995),
    Z = n(835473),
    w = n(413523),
    T = n(522651),
    A = n(933557),
    R = n(194082),
    D = n(550532),
    M = n(436774),
    L = n(243778),
    k = n(48131),
    G = n(591472),
    U = n(594190),
    B = n(925329),
    F = n(102172),
    V = n(74299),
    H = n(914923),
    z = n(165393),
    W = n(989941),
    K = n(690221),
    Y = n(522474),
    q = n(231664),
    Q = n(759198),
    X = n(659302),
    J = n(131704),
    $ = n(199902),
    ee = n(314897),
    et = n(592125),
    en = n(984933),
    er = n(430824),
    ei = n(131951),
    el = n(496675),
    ea = n(158776),
    eo = n(699516),
    es = n(944486),
    ec = n(594174),
    eu = n(449224),
    ed = n(626135),
    ef = n(63063),
    eh = n(358085),
    ep = n(689678),
    eg = n(345243),
    eb = n(115530),
    em = n(339144),
    ey = n(441248),
    eO = n(981631),
    ev = n(918559),
    ej = n(921944),
    eC = n(408491),
    ex = n(324805),
    eE = n(388032),
    eS = n(436323);
function eI(e, t, n) {
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
function e_(e) {
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
                eI(e, t, n[t]);
            });
    }
    return e;
}
function eP(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eN = (0, O.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(eg.Z, { children: t });
});
class eZ extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)("div", {
            className: eS.sparkleContainer,
            children: (0, r.jsx)(p.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: eS.sparkles,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(em.J, eP(e_({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
    }
    renderAccountLinkPopover() {
        let {
                hasAlreadyLinked: e,
                accountLinkCopyConfig: t,
                blockAccountLinkDismissibleContent: n,
                application: i,
                activity: l,
                embeddedActivity: a,
                analyticsContext: o,
                runningGame: c,
                parentAnalyticsLocation: u,
                analyticsLocations: p,
                canStartAuthorization: g,
                accountLinkButtonRef: m,
                startAuthorization: y,
                didStartAuthorization: O,
            } = this.props,
            v = (0, em.y)(i, l, a),
            j = [];
        return n
            ? null
            : (e && O
                  ? v && null == a
                      ? j.push(d.z.ACCOUNT_LINK_INVITE_FRIENDS)
                      : j.push(d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : g && null != i && j.push(d.z.ACCOUNT_LINK_PROMPT),
              (0, r.jsx)(L.ZP, {
                  contentTypes: j,
                  groupName: ej.R.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: n, markAsDismissed: a } = e;
                      return n === d.z.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(h.J2, {
                                title: eE.intl.string(eE.t["0l2pEt"]),
                                body: eE.intl.string(eE.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => a(ej.L.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eE.intl.string(eE.t.YdkBCH),
                                        onClick: () => {
                                            var e;
                                            a(ej.L.TAKE_ACTION),
                                                s()(null != l, "Received null activity"),
                                                ed.default.track(eO.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, T.v)(u, T.d.INVITE),
                                                ed.default.track(eO.rMx.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: l.application_id,
                                                    location: o.location,
                                                }),
                                                (0, b.h7)(l, !1);
                                        },
                                    },
                                ],
                            })
                          : n === d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, r.jsx)(h.J2, {
                                  title: eE.intl.string(eE.t.MxAlrB),
                                  body: eE.intl.string(eE.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: eE.intl.string(eE.t.aRIFWD),
                                          onClick: () => {
                                              a(ej.L.TAKE_ACTION),
                                                  window.open(ef.Z.getArticleURL(eO.BhN.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => a(ej.L.USER_DISMISS),
                              })
                            : n === d.z.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(h.J2, {
                                    graphic: {
                                        type: "dynamic",
                                        component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: i },
                                    },
                                    title: eE.intl.formatToPlainString(t.altTitle ? eE.t.hUbQT2 : eE.t["lo6H6+"], {
                                        gameName: i.name,
                                    }),
                                    body: eE.intl.string(t.altBody ? eE.t["JKqu+4"] : eE.t.qYAzOp),
                                    targetElementRef: m,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => a(ej.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: eE.intl.string(t.altCta ? eE.t.jynBQ5 : eE.t.lw71Nf),
                                            onClick: () => {
                                                a(ej.L.TAKE_ACTION), y({ analyticsLocations: p });
                                            },
                                        },
                                    ],
                                })
                              : void 0;
                  },
              }));
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: l,
        } = this.props;
        return (0, r.jsx)(ey.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => l(!0),
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: l,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: l } = (0, H.Z)(t);
        return (0, r.jsxs)("div", {
            className: eS.gameWrapper,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, r.jsx)(z.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon,
                      })
                    : (0, r.jsx)(R.ZP, {
                          look: R.ZP.Looks.GRAY,
                          size: R.ZP.Sizes.SMALL,
                          className: eS.liveIndicator,
                      }),
                (0, r.jsxs)("div", {
                    className: eS.info,
                    children: [
                        (0, r.jsx)(eb.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: eS.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(p.SrA, {
                                        size: "xxs",
                                        color: M.JX.PREMIUM_TIER_2,
                                    }),
                                    (0, r.jsx)(Q.Z, {
                                        className: eS.perksDemoText,
                                        variant: "text-xxs/semibold",
                                        children: n,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    renderEmbeddedActivity() {
        let e,
            {
                application: t,
                embeddedActivity: n,
                channel: i,
                channelName: l,
                guildForConnectedChannel: a,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: s,
            } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            u = l;
        null != a && null != i
            ? ((e = eO.Z5c.CHANNEL(a.id, i.id)), (u = "".concat(u, " / ").concat(a.name)))
            : null != i && (e = eO.Z5c.CHANNEL(eO.ME, i.id));
        let d = (0, r.jsx)(K.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eg.Z, {
                    className: eS.channel,
                    children: u,
                }),
            }),
            f = (0, r.jsx)(K.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(eb.Z, {
                    className: eS.underlineOnHover,
                    children: t.name,
                }),
            }),
            h = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(B.Z, {
                        className: eS.gameIcon,
                        game: t,
                        size: B.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(_.j, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: o,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: eS.info,
                            children: [f, null != i && (0, J.Qm)(i.type) ? d : (0, r.jsx)(eN, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eS.gameWrapper,
            children: h,
        });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            i = (0, r.jsx)(p.P3F, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eS.frameApplicationNameTitleClickable,
                children: (0, r.jsx)(eb.Z, {
                    className: eS.underlineOnHover,
                    children: e.name,
                }),
            }),
            l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(B.Z, {
                        className: eS.gameIcon,
                        game: e,
                        size: B.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsxs)("div", {
                        className: eS.info,
                        children: [i, (0, r.jsx)(eN, { timestamps: n })],
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eS.gameWrapper,
            children: l,
        });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: i,
            isStreaming: l,
            streamMetadata: o,
            application: s,
            activity: c,
            className: u,
        } = this.props;
        if (
            !l &&
            ((!(0, em.y)(s, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({
                    application: s,
                    frame: n,
                }) &&
                !e) ||
                (null == i && null == t && null == n))
        )
            return null;
        let d = () =>
            null == i || (l && (null == o ? void 0 : o.pid) == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, r.jsx)("div", {
            className: a()(eS.panel, u),
            ref: this.activityPopoutTargetRef,
            children: (0, r.jsxs)("div", {
                className: eS.body,
                children: [d(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            eI(this, "activityPopoutTargetRef", i.createRef()),
            eI(this, "accountLinkUpsellTargetRef", i.createRef()),
            eI(this, "inviteButtonRef", i.createRef()),
            eI(this, "handleApplicationLinkClick", () => {
                let { isActivityPopoutOpen: e } = this.props;
                this.handleChannelLinkClick(), e && g.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            eI(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                s()(null != n, "Activity cannot be null during navigation click"),
                    s()(null != t, "Channel cannot be null during navigation click"),
                    y.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eO.ME, t.id),
                    !r &&
                        ((0, J.vd)(t.type) &&
                            m.Z.selectParticipant(
                                t.id,
                                (0, w.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, J.Qm)(t.type) && (0, E.tg)(ev.Ez.PANEL));
            }),
            eI(this, "handleFrameLinkClick", () => {
                let { frame: e } = this.props;
                s()(null != e, "Frame cannot be null during navigation click"),
                    k.Z.updateFrameLayoutMode({
                        applicationId: e.applicationId,
                        layoutMode: eC.U.FOCUSED,
                    });
            });
    }
}
let ew = (0, v.Z)(function (e) {
    var t,
        { guildId: n } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["guildId"]);
    let a = (0, u.e7)([ee.default], () => ee.default.getId()),
        o = (0, u.e7)([U.ZP, eu.Z], () => (0, W.Z)(U.ZP, eu.Z)),
        s = (0, u.e7)([es.Z, et.Z], () => et.Z.getChannel(es.Z.getVoiceChannelId())),
        d = (0, u.e7)([S.ZP], () => S.ZP.getConnectedActivityChannelId()),
        f = (0, u.e7)([et.Z], () => et.Z.getChannel(d)),
        h = (0, u.e7)([er.Z], () => er.Z.getGuild(null == f ? void 0 : f.guild_id)),
        [p, g] = (0, u.Wu)([$.Z], () => [$.Z.getCurrentUserActiveStream(), $.Z.getStreamerActiveStreamMetadata()]),
        b = (0, u.e7)([C.Z], () => C.Z.useReducedMotion),
        m = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        y = (0, u.e7)([G.Z], () => G.Z.getConnectedFrame()),
        O = (0, u.e7)([er.Z, el.Z, en.ZP], () =>
            null != s ? F.JL(s, er.Z, el.Z, !1) : null != n && F.h_(en.ZP.getChannels(n), er.Z, el.Z).length > 0,
        ),
        [v] = (0, Z.Z)([
            null !=
            (t =
                null != g && null != g.id
                    ? g.id
                    : null != o && null != o.id
                      ? o.id
                      : null != m
                        ? m.applicationId
                        : null != y
                          ? y.applicationId
                          : void 0)
                ? t
                : "",
        ]),
        E = (0, u.e7)([D.Z], () => D.Z.getFakeGameData()),
        _ = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        w = (0, I.Z)() && null != _ && (0, x.R)(),
        T = (0, u.e7)([ei.Z], () => (0, V.Z)(ei.Z) && (0, eh.isWindows)()),
        R = (0, u.e7)([ea.Z], () => (null != a ? ea.Z.findActivity(a, (e) => e.type === eO.IIU.PLAYING) : null)),
        M = null != p && p.ownerId === a && p.state !== eO.jm8.ENDED,
        L = (0, u.e7)([ec.default, eo.Z], () => (null != f ? (0, A.F6)(f, ec.default, eo.Z) : void 0)),
        k = (0, q.Z)(),
        [B, H] = i.useState(!1),
        z = (0, u.e7)([Y.Z], () => Y.Z.getWindowOpen(eO.KJ3.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: K,
            canStartAuthorization: Q,
            connectionApp: J,
            startAuthorization: ef,
        } = (0, N.F)(v, {
            allowedFlows: [N.r.RPC, N.r.WEB],
        }),
        [eg, eb] = i.useState(!1),
        em = (0, j.Z)(null == v ? void 0 : v.id);
    i.useEffect(() => {
        em !== (null == v ? void 0 : v.id) && eb(!1);
    }, [v, em]);
    let { isQuestBarEmpty: ey, hasLoadedQuestBar: ev } = (0, X.Ws)({ location: ex.dr.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: ej, analyticsLocations: eC } = (0, P.ZP)(),
        eE = ep.Z.useConfig({ location: "ActivityPanelGameCard" }),
        eS = (0, c.O)((e) => {
            if (e && null != J) {
                var t;
                ed.default.track(eO.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == o ? void 0 : o.id) ? t : null,
                    application_id: J.id,
                });
            }
        });
    return (0, r.jsx)(
        eZ,
        eP(e_({}, l), {
            guildId: n,
            canGoLive: T || w || void 0 !== E,
            activity: R,
            embeddedActivity: m,
            frame: y,
            userId: a,
            runningGame: null != E ? E : o,
            application: v,
            useReducedMotion: b,
            isStreaming: M,
            channel: f,
            canStream: O,
            stream: p,
            streamMetadata: g,
            channelName: L,
            guildForConnectedChannel: h,
            streamQualityIndicator: k,
            isForceShowSharingPopout: B,
            setIsForceShowSharingPopout: H,
            isActivityPopoutOpen: z,
            hasAlreadyLinked: K,
            blockAccountLinkDismissibleContent: !ev || !ey,
            accountLinkCopyConfig: eE,
            parentAnalyticsLocation: ej,
            analyticsLocations: eC,
            canStartAuthorization: Q,
            accountLinkButtonRef: eS,
            startAuthorization: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return eb(!0), ef(...t);
            },
            didStartAuthorization: eg,
            connectionApp: J,
        }),
    );
});

n.d(t, { Z: () => eZ }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(907331),
    u = n(442837),
    d = n(704215),
    p = n(198168),
    f = n(907862),
    h = n(481060),
    g = n(570140),
    m = n(24124),
    b = n(475179),
    _ = n(925549),
    y = n(438139),
    O = n(730749),
    v = n(607070),
    j = n(636449),
    x = n(566620),
    C = n(317381),
    E = n(889441),
    S = n(736409),
    I = n(906732),
    P = n(535139),
    N = n(835473),
    Z = n(413523),
    w = n(522651),
    T = n(933557),
    A = n(194082),
    R = n(550532),
    D = n(436774),
    L = n(243778),
    M = n(48131),
    k = n(591472),
    G = n(594190),
    U = n(925329),
    B = n(102172),
    F = n(74299),
    V = n(914923),
    H = n(662304),
    z = n(989941),
    W = n(690221),
    K = n(522474),
    Y = n(231664),
    q = n(759198),
    X = n(667105),
    Q = n(131704),
    J = n(199902),
    $ = n(314897),
    ee = n(592125),
    et = n(984933),
    en = n(430824),
    er = n(131951),
    ei = n(496675),
    el = n(158776),
    eo = n(699516),
    ea = n(944486),
    es = n(594174),
    ec = n(449224),
    eu = n(626135),
    ed = n(63063),
    ep = n(358085),
    ef = n(381096),
    eh = n(345243),
    eg = n(115530),
    em = n(339144),
    eb = n(441248),
    e_ = n(981631),
    ey = n(918559),
    eO = n(921944),
    ev = n(408491),
    ej = n(46140),
    ex = n(388032),
    eC = n(800339);
function eE(e, t, n) {
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
function eS(e) {
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
                eE(e, t, n[t]);
            });
    }
    return e;
}
function eI(e, t) {
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
let eP = (0, y.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(eh.Z, { children: t });
});
class eN extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)("div", {
            className: eC.sparkleContainer,
            children: (0, r.jsx)(h.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: eC.sparkles,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(em.J, eI(eS({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
    }
    renderAccountLinkPopover() {
        let {
                accountLinkExperimentEnabled: e,
                hasAlreadyLinked: t,
                blockAccountLinkDismissibleContent: n,
                application: i,
                activity: l,
                embeddedActivity: o,
                analyticsContext: a,
                runningGame: c,
                parentAnalyticsLocation: u,
                canStartAuthorization: h,
                accountLinkButtonRef: g,
                startAuthorization: b,
            } = this.props,
            _ = (0, em.y)(i, l, o),
            y = [];
        return n || !e
            ? null
            : (t
                  ? _ && null == o
                      ? y.push(d.z.ACCOUNT_LINK_INVITE_FRIENDS)
                      : y.push(d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : h && null != i && y.push(d.z.ACCOUNT_LINK_PROMPT),
              (0, r.jsx)(L.ZP, {
                  contentTypes: y,
                  groupName: eO.R.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === d.z.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(f.J2, {
                                title: ex.intl.string(ex.t["0l2pEt"]),
                                body: ex.intl.string(ex.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => n(eO.L.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: ex.intl.string(ex.t.YdkBCH),
                                        onClick: () => {
                                            var e;
                                            n(eO.L.TAKE_ACTION),
                                                s()(null != l, "Received null activity"),
                                                eu.default.track(e_.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, w.v)(u, w.d.INVITE),
                                                eu.default.track(e_.rMx.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: l.application_id,
                                                    location: a.location,
                                                }),
                                                (0, m.h7)(l, !1);
                                        },
                                    },
                                ],
                            })
                          : t === d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, r.jsx)(f.J2, {
                                  title: ex.intl.string(ex.t.MxAlrB),
                                  body: ex.intl.string(ex.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: ex.intl.string(ex.t.aRIFWD),
                                          onClick: () => {
                                              n(eO.L.TAKE_ACTION),
                                                  window.open(ed.Z.getArticleURL(e_.BhN.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => n(eO.L.USER_DISMISS),
                              })
                            : t === d.z.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(f.J2, {
                                    graphic: {
                                        type: "dynamic",
                                        component: p.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: i },
                                    },
                                    title: ex.intl.formatToPlainString(ex.t["lo6H6+"], { gameName: i.name }),
                                    body: ex.intl.string(ex.t.qYAzOp),
                                    targetElementRef: g,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => n(eO.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: ex.intl.string(ex.t.lw71Nf),
                                            onClick: () => {
                                                n(eO.L.TAKE_ACTION), b();
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
        return (0, r.jsx)(eb.k, {
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
            { title: i, sanitizedTitle: l } = (0, V.Z)(t);
        return (0, r.jsxs)("div", {
            className: eC.gameWrapper,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, r.jsx)(H.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon,
                      })
                    : (0, r.jsx)(A.ZP, {
                          look: A.ZP.Looks.GRAY,
                          size: A.ZP.Sizes.SMALL,
                          className: eC.liveIndicator,
                      }),
                (0, r.jsxs)("div", {
                    className: eC.info,
                    children: [
                        (0, r.jsx)(eg.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: eC.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(h.SrA, {
                                        size: "xxs",
                                        color: D.JX.PREMIUM_TIER_2,
                                    }),
                                    (0, r.jsx)(q.Z, {
                                        className: eC.perksDemoText,
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
                guildForConnectedChannel: o,
                isForceShowSharingPopout: a,
                setIsForceShowSharingPopout: s,
            } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            u = l;
        null != o && null != i
            ? ((e = e_.Z5c.CHANNEL(o.id, i.id)), (u = "".concat(u, " / ").concat(o.name)))
            : null != i && (e = e_.Z5c.CHANNEL(e_.ME, i.id));
        let d = (0, r.jsx)(W.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eh.Z, {
                    className: eC.channel,
                    children: u,
                }),
            }),
            p = (0, r.jsx)(W.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(eg.Z, {
                    className: eC.underlineOnHover,
                    children: t.name,
                }),
            }),
            f = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(U.Z, {
                        className: eC.gameIcon,
                        game: t,
                        size: U.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(S.j, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: eC.info,
                            children: [p, null != i && (0, Q.Qm)(i.type) ? d : (0, r.jsx)(eP, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eC.gameWrapper,
            children: f,
        });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            i = (0, r.jsx)(h.P3F, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eC.frameApplicationNameTitleClickable,
                children: (0, r.jsx)(eg.Z, {
                    className: eC.underlineOnHover,
                    children: e.name,
                }),
            }),
            l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(U.Z, {
                        className: eC.gameIcon,
                        game: e,
                        size: U.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsxs)("div", {
                        className: eC.info,
                        children: [i, (0, r.jsx)(eP, { timestamps: n })],
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eC.gameWrapper,
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
            streamMetadata: a,
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
            null == i || (l && (null == a ? void 0 : a.pid) == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, r.jsx)("div", {
            className: o()(eC.panel, u),
            ref: this.activityPopoutTargetRef,
            children: (0, r.jsxs)("div", {
                className: eC.body,
                children: [d(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            eE(this, "activityPopoutTargetRef", i.createRef()),
            eE(this, "accountLinkUpsellTargetRef", i.createRef()),
            eE(this, "inviteButtonRef", i.createRef()),
            eE(this, "handleApplicationLinkClick", () => {
                let { isActivityPopoutOpen: e } = this.props;
                this.handleChannelLinkClick(), e && g.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            eE(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                s()(null != n, "Activity cannot be null during navigation click"),
                    s()(null != t, "Channel cannot be null during navigation click"),
                    _.Z.channelListScrollTo(null != (e = t.guild_id) ? e : e_.ME, t.id),
                    !r &&
                        ((0, Q.vd)(t.type) &&
                            b.Z.selectParticipant(
                                t.id,
                                (0, Z.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, Q.Qm)(t.type) && (0, x.tg)(ey.Ez.PANEL));
            }),
            eE(this, "handleFrameLinkClick", () => {
                let { frame: e } = this.props;
                s()(null != e, "Frame cannot be null during navigation click"),
                    M.Z.updateFrameLayoutMode({
                        applicationId: e.applicationId,
                        layoutMode: ev.U.FOCUSED,
                    });
            });
    }
}
let eZ = (0, O.Z)(function (e) {
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
    let o = (0, u.e7)([$.default], () => $.default.getId()),
        a = (0, u.e7)([G.ZP, ec.Z], () => (0, z.Z)(G.ZP, ec.Z)),
        s = (0, u.e7)([ea.Z, ee.Z], () => ee.Z.getChannel(ea.Z.getVoiceChannelId())),
        d = (0, u.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        p = (0, u.e7)([ee.Z], () => ee.Z.getChannel(d)),
        f = (0, u.e7)([en.Z], () => en.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [h, g] = (0, u.Wu)([J.Z], () => [J.Z.getCurrentUserActiveStream(), J.Z.getStreamerActiveStreamMetadata()]),
        m = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        b = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        _ = (0, u.e7)([k.Z], () => k.Z.getConnectedFrame()),
        y = (0, u.e7)([en.Z, ei.Z, et.ZP], () =>
            null != s ? B.JL(s, en.Z, ei.Z, !1) : null != n && B.h_(et.ZP.getChannels(n), en.Z, ei.Z).length > 0,
        ),
        [O] = (0, N.Z)([
            null !=
            (t =
                null != g && null != g.id
                    ? g.id
                    : null != a && null != a.id
                      ? a.id
                      : null != b
                        ? b.applicationId
                        : null != _
                          ? _.applicationId
                          : void 0)
                ? t
                : "",
        ]),
        x = (0, u.e7)([R.Z], () => R.Z.getFakeGameData()),
        S = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        Z = (0, E.Z)() && null != S && (0, j.R)(),
        w = (0, u.e7)([er.Z], () => (0, F.Z)(er.Z) && (0, ep.isWindows)()),
        A = (0, u.e7)([el.Z], () => (null != o ? el.Z.findActivity(o, (e) => e.type === e_.IIU.PLAYING) : null)),
        D = null != h && h.ownerId === o && h.state !== e_.jm8.ENDED,
        L = (0, u.e7)([es.default, eo.Z], () => (null != p ? (0, T.F6)(p, es.default, eo.Z) : void 0)),
        M = (0, Y.Z)(),
        [U, V] = i.useState(!1),
        H = (0, u.e7)([K.Z], () => K.Z.getWindowOpen(e_.KJ3.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: q,
            connectionApp: Q,
            startAuthorization: ed,
        } = (0, P.F)(O, {
            allowedFlows: [P.r.RPC, P.r.WEB],
        }),
        { isQuestBarEmpty: eh, hasLoadedQuestBar: eg } = (0, X.Ws)({ location: ej.dr.CONFLICT_CHECKS }),
        em = ef.Z.useConfig({ location: "RunningGameCard" }).enabled,
        { parentAnalyticsLocation: eb } = (0, I.ZP)(),
        ey = (0, c.O)((e) => {
            if (e && null != Q) {
                var t;
                eu.default.track(e_.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == a ? void 0 : a.id) ? t : null,
                    application_id: Q.id,
                });
            }
        });
    return (0, r.jsx)(
        eN,
        eI(eS({}, l), {
            guildId: n,
            canGoLive: w || Z || void 0 !== x,
            activity: A,
            embeddedActivity: b,
            frame: _,
            userId: o,
            runningGame: null != x ? x : a,
            application: O,
            useReducedMotion: m,
            isStreaming: D,
            channel: p,
            canStream: y,
            stream: h,
            streamMetadata: g,
            channelName: L,
            guildForConnectedChannel: f,
            streamQualityIndicator: M,
            isForceShowSharingPopout: U,
            setIsForceShowSharingPopout: V,
            isActivityPopoutOpen: H,
            hasAlreadyLinked: W,
            blockAccountLinkDismissibleContent: !eg || !eh,
            accountLinkExperimentEnabled: em,
            parentAnalyticsLocation: eb,
            canStartAuthorization: q,
            accountLinkButtonRef: ey,
            startAuthorization: ed,
        }),
    );
});

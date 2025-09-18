n.d(t, { Z: () => ew }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(1561),
    p = n(198168),
    f = n(907862),
    h = n(481060),
    g = n(570140),
    m = n(24124),
    b = n(475179),
    O = n(925549),
    y = n(438139),
    _ = n(730749),
    v = n(434650),
    j = n(607070),
    x = n(636449),
    C = n(566620),
    E = n(317381),
    S = n(889441),
    P = n(736409),
    I = n(906732),
    N = n(20471),
    Z = n(835473),
    w = n(413523),
    T = n(522651),
    A = n(933557),
    R = n(194082),
    D = n(550532),
    L = n(436774),
    M = n(243778),
    k = n(48131),
    U = n(591472),
    G = n(594190),
    B = n(925329),
    V = n(102172),
    F = n(74299),
    H = n(914923),
    z = n(662304),
    W = n(989941),
    K = n(690221),
    Y = n(522474),
    q = n(231664),
    X = n(759198),
    Q = n(667105),
    J = n(131704),
    $ = n(199902),
    ee = n(314897),
    et = n(592125),
    en = n(984933),
    er = n(430824),
    ei = n(131951),
    el = n(496675),
    eo = n(158776),
    ea = n(699516),
    es = n(944486),
    ec = n(594174),
    eu = n(449224),
    ed = n(626135),
    ep = n(63063),
    ef = n(358085),
    eh = n(381096),
    eg = n(345243),
    em = n(115530),
    eb = n(339144),
    eO = n(441248),
    ey = n(981631),
    e_ = n(918559),
    ev = n(921944),
    ej = n(408491),
    ex = n(46140),
    eC = n(388032),
    eE = n(800339);
function eS(e, t, n) {
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
function eP(e) {
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
                eS(e, t, n[t]);
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
let eN = (0, y.Z)(function (e) {
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
            className: eE.sparkleContainer,
            children: (0, r.jsx)(h.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: eE.sparkles,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(eb.J, eI(eP({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
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
                parentAnalyticsLocation: d,
                canStartAuthorization: h,
                accountLinkButtonRef: g,
                startAuthorization: b,
            } = this.props,
            O = (0, eb.y)(i, l, o),
            y = [];
        return n || !e
            ? null
            : (t
                  ? O && null == o
                      ? y.push(u.z.ACCOUNT_LINK_INVITE_FRIENDS)
                      : y.push(u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : h && null != i && y.push(u.z.ACCOUNT_LINK_PROMPT),
              (0, r.jsx)(M.ZP, {
                  contentTypes: y,
                  groupName: ev.R.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === u.z.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(f.J2, {
                                title: eC.intl.string(eC.t["0l2pEh"]),
                                body: eC.intl.string(eC.t.DSZUKy),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => n(ev.L.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eC.intl.string(eC.t.YdkBCA),
                                        onClick: () => {
                                            var e;
                                            n(ev.L.TAKE_ACTION),
                                                s()(null != l, "Received null activity"),
                                                ed.default.track(ey.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, T.v)(d, T.d.INVITE),
                                                ed.default.track(ey.rMx.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: l.application_id,
                                                    location: a.location,
                                                }),
                                                (0, m.h7)(l, !1);
                                        },
                                    },
                                ],
                            })
                          : t === u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, r.jsx)(f.J2, {
                                  title: eC.intl.string(eC.t.MxAlrK),
                                  body: eC.intl.string(eC.t["/UTTEh"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: eC.intl.string(eC.t.aRIFWF),
                                          onClick: () => {
                                              n(ev.L.TAKE_ACTION),
                                                  window.open(ep.Z.getArticleURL(ey.BhN.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => n(ev.L.USER_DISMISS),
                              })
                            : t === u.z.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(f.J2, {
                                    graphic: {
                                        type: "dynamic",
                                        component: p.P3.ACCOUNT_LINK_DISPLAY,
                                        props: { application: i },
                                    },
                                    title: eC.intl.formatToPlainString(eC.t["lo6H6+"], { gameName: i.name }),
                                    body: eC.intl.string(eC.t.qYAzOj),
                                    targetElementRef: g,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => n(ev.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: eC.intl.string(eC.t.lw71NT),
                                            onClick: () => {
                                                n(ev.L.TAKE_ACTION), b();
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
        return (0, r.jsx)(eO.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => l(!0),
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: l,
            ref: this.accountLinkUpsellTargetRef,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: l } = (0, H.Z)(t);
        return (0, r.jsxs)("div", {
            className: eE.gameWrapper,
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
                          className: eE.liveIndicator,
                      }),
                (0, r.jsxs)("div", {
                    className: eE.info,
                    children: [
                        (0, r.jsx)(em.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: eE.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(h.SrA, {
                                        size: "xxs",
                                        color: L.JX.PREMIUM_TIER_2,
                                    }),
                                    (0, r.jsx)(X.Z, {
                                        className: eE.perksDemoText,
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
            ? ((e = ey.Z5c.CHANNEL(o.id, i.id)), (u = "".concat(u, " / ").concat(o.name)))
            : null != i && (e = ey.Z5c.CHANNEL(ey.ME, i.id));
        let d = (0, r.jsx)(K.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eg.Z, {
                    className: eE.channel,
                    children: u,
                }),
            }),
            p = (0, r.jsx)(K.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(em.Z, {
                    className: eE.underlineOnHover,
                    children: t.name,
                }),
            }),
            f = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(B.Z, {
                        className: eE.gameIcon,
                        game: t,
                        size: B.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(P.j, {
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: eE.info,
                            children: [p, null != i && (0, J.Qm)(i.type) ? d : (0, r.jsx)(eN, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eE.gameWrapper,
            children: f,
        });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            i = (0, r.jsx)(d.P, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eE.frameApplicationNameTitleClickable,
                children: (0, r.jsx)(em.Z, {
                    className: eE.underlineOnHover,
                    children: e.name,
                }),
            }),
            l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(B.Z, {
                        className: eE.gameIcon,
                        game: e,
                        size: B.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsxs)("div", {
                        className: eE.info,
                        children: [i, (0, r.jsx)(eN, { timestamps: n })],
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eE.gameWrapper,
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
            ((!(0, eb.y)(s, c, t) &&
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
            className: o()(eE.panel, u),
            children: (0, r.jsxs)("div", {
                className: eE.body,
                children: [d(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            eS(this, "activityPopoutTargetRef", i.createRef()),
            eS(this, "accountLinkUpsellTargetRef", i.createRef()),
            eS(this, "inviteButtonRef", i.createRef()),
            eS(this, "handleApplicationLinkClick", () => {
                let { isActivityPopoutOpen: e } = this.props;
                this.handleChannelLinkClick(), e && g.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            eS(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                s()(null != n, "Activity cannot be null during navigation click"),
                    s()(null != t, "Channel cannot be null during navigation click"),
                    O.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ey.ME, t.id),
                    !r &&
                        ((0, J.vd)(t.type) &&
                            b.Z.selectParticipant(
                                t.id,
                                (0, w.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, J.Qm)(t.type) && (0, C.tg)(e_.Ez.PANEL));
            }),
            eS(this, "handleFrameLinkClick", () => {
                let { frame: e } = this.props;
                s()(null != e, "Frame cannot be null during navigation click"),
                    k.Z.updateFrameLayoutMode({
                        applicationId: e.applicationId,
                        layoutMode: ej.U.FOCUSED,
                    });
            });
    }
}
let ew = (0, _.Z)(function (e) {
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
    let o = (0, c.e7)([ee.default], () => ee.default.getId()),
        a = (0, c.e7)([G.ZP, eu.Z], () => (0, W.Z)(G.ZP, eu.Z)),
        s = (0, c.e7)([es.Z, et.Z], () => et.Z.getChannel(es.Z.getVoiceChannelId())),
        u = (0, c.e7)([E.ZP], () => E.ZP.getConnectedActivityChannelId()),
        d = (0, c.e7)([et.Z], () => et.Z.getChannel(u)),
        p = (0, c.e7)([er.Z], () => er.Z.getGuild(null == d ? void 0 : d.guild_id)),
        [f, h] = (0, c.Wu)([$.Z], () => [$.Z.getCurrentUserActiveStream(), $.Z.getStreamerActiveStreamMetadata()]),
        g = (0, c.e7)([j.Z], () => j.Z.useReducedMotion),
        m = (0, c.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
        b = (0, c.e7)([U.Z], () => U.Z.getConnectedFrame()),
        O = (0, c.e7)([er.Z, el.Z, en.ZP], () =>
            null != s ? V.JL(s, er.Z, el.Z, !1) : null != n && V.h_(en.ZP.getChannels(n), er.Z, el.Z).length > 0,
        ),
        [y] = (0, Z.Z)([
            null !=
            (t =
                null != h && null != h.id
                    ? h.id
                    : null != a && null != a.id
                      ? a.id
                      : null != m
                        ? m.applicationId
                        : null != b
                          ? b.applicationId
                          : void 0)
                ? t
                : "",
        ]),
        _ = (0, c.e7)([D.Z], () => D.Z.getFakeGameData()),
        C = (0, c.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
        P = (0, S.Z)() && null != C && (0, x.R)(),
        w = (0, c.e7)([ei.Z], () => (0, F.Z)(ei.Z) && (0, ef.isWindows)()),
        T = (0, c.e7)([eo.Z], () => (null != o ? eo.Z.findActivity(o, (e) => e.type === ey.IIU.PLAYING) : null)),
        R = null != f && f.ownerId === o && f.state !== ey.jm8.ENDED,
        L = (0, c.e7)([ec.default, ea.Z], () => (null != d ? (0, A.F6)(d, ec.default, ea.Z) : void 0)),
        M = (0, q.Z)(),
        [k, B] = i.useState(!1),
        H = (0, c.e7)([Y.Z], () => Y.Z.getWindowOpen(ey.KJ3.ACTIVITY_POPOUT)),
        { hasAlreadyLinked: z, canStartAuthorization: K, connectionApp: X, startAuthorization: J } = (0, N.F)(y),
        { isQuestBarEmpty: ep, hasLoadedQuestBar: eg } = (0, Q.Ws)({ location: ex.dr.CONFLICT_CHECKS }),
        em = eh.Z.useConfig({ location: "RunningGameCard" }).enabled,
        { parentAnalyticsLocation: eb } = (0, I.ZP)(),
        eO = (0, v.O)((e) => {
            if (e && null != X) {
                var t;
                ed.default.track(ey.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == a ? void 0 : a.id) ? t : null,
                    application_id: X.id,
                });
            }
        });
    return (0, r.jsx)(
        eZ,
        eI(eP({}, l), {
            guildId: n,
            canGoLive: w || P || void 0 !== _,
            activity: T,
            embeddedActivity: m,
            frame: b,
            userId: o,
            runningGame: null != _ ? _ : a,
            application: y,
            useReducedMotion: g,
            isStreaming: R,
            channel: d,
            canStream: O,
            stream: f,
            streamMetadata: h,
            channelName: L,
            guildForConnectedChannel: p,
            streamQualityIndicator: M,
            isForceShowSharingPopout: k,
            setIsForceShowSharingPopout: B,
            isActivityPopoutOpen: H,
            hasAlreadyLinked: z,
            blockAccountLinkDismissibleContent: !eg || !ep,
            accountLinkExperimentEnabled: em,
            parentAnalyticsLocation: eb,
            canStartAuthorization: K,
            accountLinkButtonRef: eO,
            startAuthorization: J,
        }),
    );
});

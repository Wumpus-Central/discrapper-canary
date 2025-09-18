n.d(t, { Z: () => eZ }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(198168),
    p = n(907862),
    f = n(481060),
    h = n(570140),
    g = n(24124),
    m = n(475179),
    b = n(925549),
    O = n(438139),
    y = n(730749),
    _ = n(434650),
    v = n(607070),
    j = n(636449),
    x = n(566620),
    C = n(317381),
    E = n(889441),
    S = n(736409),
    P = n(906732),
    I = n(20471),
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
    U = n(594190),
    G = n(925329),
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
    eO = n(981631),
    ey = n(918559),
    e_ = n(921944),
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
let eI = (0, O.Z)(function (e) {
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
            children: (0, r.jsx)(f.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: eC.sparkles,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(em.J, eP(eS({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
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
                parentAnalyticsLocation: f,
                canStartAuthorization: h,
                accountLinkButtonRef: m,
                startAuthorization: b,
            } = this.props,
            O = (0, em.y)(i, l, o),
            y = [];
        return n || !e
            ? null
            : (t
                  ? O && null == o
                      ? y.push(u.z.ACCOUNT_LINK_INVITE_FRIENDS)
                      : y.push(u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : h && null != i && y.push(u.z.ACCOUNT_LINK_PROMPT),
              (0, r.jsx)(L.ZP, {
                  contentTypes: y,
                  groupName: e_.R.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === u.z.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(p.J2, {
                                title: ex.intl.string(ex.t["0l2pEh"]),
                                body: ex.intl.string(ex.t.DSZUKy),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => n(e_.L.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: ex.intl.string(ex.t.YdkBCA),
                                        onClick: () => {
                                            var e;
                                            n(e_.L.TAKE_ACTION),
                                                s()(null != l, "Received null activity"),
                                                eu.default.track(eO.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, w.v)(f, w.d.INVITE),
                                                eu.default.track(eO.rMx.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: l.application_id,
                                                    location: a.location,
                                                }),
                                                (0, g.h7)(l, !1);
                                        },
                                    },
                                ],
                            })
                          : t === u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, r.jsx)(p.J2, {
                                  title: ex.intl.string(ex.t.MxAlrK),
                                  body: ex.intl.string(ex.t["/UTTEh"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: ex.intl.string(ex.t.aRIFWF),
                                          onClick: () => {
                                              n(e_.L.TAKE_ACTION),
                                                  window.open(ed.Z.getArticleURL(eO.BhN.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => n(e_.L.USER_DISMISS),
                              })
                            : t === u.z.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(p.J2, {
                                    graphic: {
                                        type: "dynamic",
                                        component: d.P3.ACCOUNT_LINK_DISPLAY,
                                        props: { application: i },
                                    },
                                    title: ex.intl.formatToPlainString(ex.t["lo6H6+"], { gameName: i.name }),
                                    body: ex.intl.string(ex.t.qYAzOj),
                                    targetElementRef: m,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => n(e_.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: ex.intl.string(ex.t.lw71NT),
                                            onClick: () => {
                                                n(e_.L.TAKE_ACTION), b();
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
                                    (0, r.jsx)(f.SrA, {
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
            ? ((e = eO.Z5c.CHANNEL(o.id, i.id)), (u = "".concat(u, " / ").concat(o.name)))
            : null != i && (e = eO.Z5c.CHANNEL(eO.ME, i.id));
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
                    (0, r.jsx)(G.Z, {
                        className: eC.gameIcon,
                        game: t,
                        size: G.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(S.j, {
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: eC.info,
                            children: [p, null != i && (0, Q.Qm)(i.type) ? d : (0, r.jsx)(eI, { timestamps: c })],
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
            i = (0, r.jsx)(f.P3F, {
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
                    (0, r.jsx)(G.Z, {
                        className: eC.gameIcon,
                        game: e,
                        size: G.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsxs)("div", {
                        className: eC.info,
                        children: [i, (0, r.jsx)(eI, { timestamps: n })],
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
                this.handleChannelLinkClick(), e && h.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            eE(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                s()(null != n, "Activity cannot be null during navigation click"),
                    s()(null != t, "Channel cannot be null during navigation click"),
                    b.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eO.ME, t.id),
                    !r &&
                        ((0, Q.vd)(t.type) &&
                            m.Z.selectParticipant(
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
let eZ = (0, y.Z)(function (e) {
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
    let o = (0, c.e7)([$.default], () => $.default.getId()),
        a = (0, c.e7)([U.ZP, ec.Z], () => (0, z.Z)(U.ZP, ec.Z)),
        s = (0, c.e7)([ea.Z, ee.Z], () => ee.Z.getChannel(ea.Z.getVoiceChannelId())),
        u = (0, c.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        d = (0, c.e7)([ee.Z], () => ee.Z.getChannel(u)),
        p = (0, c.e7)([en.Z], () => en.Z.getGuild(null == d ? void 0 : d.guild_id)),
        [f, h] = (0, c.Wu)([J.Z], () => [J.Z.getCurrentUserActiveStream(), J.Z.getStreamerActiveStreamMetadata()]),
        g = (0, c.e7)([v.Z], () => v.Z.useReducedMotion),
        m = (0, c.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        b = (0, c.e7)([k.Z], () => k.Z.getConnectedFrame()),
        O = (0, c.e7)([en.Z, ei.Z, et.ZP], () =>
            null != s ? B.JL(s, en.Z, ei.Z, !1) : null != n && B.h_(et.ZP.getChannels(n), en.Z, ei.Z).length > 0,
        ),
        [y] = (0, N.Z)([
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
        x = (0, c.e7)([R.Z], () => R.Z.getFakeGameData()),
        S = (0, c.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        Z = (0, E.Z)() && null != S && (0, j.R)(),
        w = (0, c.e7)([er.Z], () => (0, F.Z)(er.Z) && (0, ep.isWindows)()),
        A = (0, c.e7)([el.Z], () => (null != o ? el.Z.findActivity(o, (e) => e.type === eO.IIU.PLAYING) : null)),
        D = null != f && f.ownerId === o && f.state !== eO.jm8.ENDED,
        L = (0, c.e7)([es.default, eo.Z], () => (null != d ? (0, T.F6)(d, es.default, eo.Z) : void 0)),
        M = (0, Y.Z)(),
        [G, V] = i.useState(!1),
        H = (0, c.e7)([K.Z], () => K.Z.getWindowOpen(eO.KJ3.ACTIVITY_POPOUT)),
        { hasAlreadyLinked: W, canStartAuthorization: q, connectionApp: Q, startAuthorization: ed } = (0, I.F)(y),
        { isQuestBarEmpty: eh, hasLoadedQuestBar: eg } = (0, X.Ws)({ location: ej.dr.CONFLICT_CHECKS }),
        em = ef.Z.useConfig({ location: "RunningGameCard" }).enabled,
        { parentAnalyticsLocation: eb } = (0, P.ZP)(),
        ey = (0, _.O)((e) => {
            if (e && null != Q) {
                var t;
                eu.default.track(eO.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == a ? void 0 : a.id) ? t : null,
                    application_id: Q.id,
                });
            }
        });
    return (0, r.jsx)(
        eN,
        eP(eS({}, l), {
            guildId: n,
            canGoLive: w || Z || void 0 !== x,
            activity: A,
            embeddedActivity: m,
            frame: b,
            userId: o,
            runningGame: null != x ? x : a,
            application: y,
            useReducedMotion: g,
            isStreaming: D,
            channel: d,
            canStream: O,
            stream: f,
            streamMetadata: h,
            channelName: L,
            guildForConnectedChannel: p,
            streamQualityIndicator: M,
            isForceShowSharingPopout: G,
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

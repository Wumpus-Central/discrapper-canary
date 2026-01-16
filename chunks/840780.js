n.d(t, { Z: () => eN }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(907331),
    u = n(442837),
    d = n(704215),
    p = n(198168),
    f = n(907862),
    h = n(481060),
    g = n(570140),
    m = n(24124),
    b = n(475179),
    y = n(925549),
    v = n(438139),
    O = n(730749),
    j = n(110924),
    x = n(607070),
    C = n(636449),
    E = n(566620),
    S = n(317381),
    _ = n(889441),
    I = n(736409),
    P = n(906732),
    Z = n(524995),
    N = n(835473),
    T = n(413523),
    A = n(522651),
    w = n(933557),
    R = n(194082),
    D = n(550532),
    M = n(436774),
    k = n(243778),
    L = n(48131),
    U = n(591472),
    G = n(594190),
    B = n(925329),
    F = n(102172),
    H = n(74299),
    V = n(914923),
    z = n(165393),
    W = n(989941),
    K = n(690221),
    Y = n(522474),
    q = n(231664),
    X = n(759198),
    Q = n(659302),
    J = n(131704),
    $ = n(199902),
    ee = n(314897),
    et = n(592125),
    en = n(430824),
    er = n(131951),
    ei = n(496675),
    el = n(158776),
    ea = n(699516),
    eo = n(944486),
    es = n(594174),
    ec = n(449224),
    eu = n(626135),
    ed = n(63063),
    ep = n(358085),
    ef = n(689678),
    eh = n(345243),
    eg = n(115530),
    em = n(339144),
    eb = n(441248),
    ey = n(981631),
    ev = n(918559),
    eO = n(921944),
    ej = n(408491),
    ex = n(324805),
    eC = n(388032),
    eE = n(436323);
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
let eP = (0, v.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(eh.Z, { children: t });
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
        return (0, r.jsx)(em.J, eI(e_({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
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
                analyticsLocations: h,
                canStartAuthorization: g,
                accountLinkButtonRef: b,
                startAuthorization: y,
                didStartAuthorization: v,
            } = this.props,
            O = (0, em.y)(i, l, a),
            j = [];
        return n
            ? null
            : (e && v
                  ? O && null == a
                      ? j.push(d.z.ACCOUNT_LINK_INVITE_FRIENDS)
                      : j.push(d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : g && null != i && j.push(d.z.ACCOUNT_LINK_PROMPT),
              (0, r.jsx)(k.ZP, {
                  contentTypes: j,
                  groupName: eO.R.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: n, markAsDismissed: a } = e;
                      return n === d.z.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(f.J2, {
                                title: eC.intl.string(eC.t["0l2pEt"]),
                                body: eC.intl.string(eC.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => a(eO.L.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eC.intl.string(eC.t.YdkBCH),
                                        onClick: () => {
                                            var e;
                                            a(eO.L.TAKE_ACTION),
                                                s()(null != l, "Received null activity"),
                                                eu.default.track(ey.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, A.v)(u, A.d.INVITE),
                                                eu.default.track(ey.rMx.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: l.application_id,
                                                    location: o.location,
                                                }),
                                                (0, m.h7)(l, !1);
                                        },
                                    },
                                ],
                            })
                          : n === d.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, r.jsx)(f.J2, {
                                  title: eC.intl.string(eC.t.MxAlrB),
                                  body: eC.intl.string(eC.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: eC.intl.string(eC.t.aRIFWD),
                                          onClick: () => {
                                              a(eO.L.TAKE_ACTION),
                                                  window.open(ed.Z.getArticleURL(ey.BhN.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => a(eO.L.USER_DISMISS),
                              })
                            : n === d.z.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(f.J2, {
                                    graphic: {
                                        type: "dynamic",
                                        component: p.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: i },
                                    },
                                    title: eC.intl.formatToPlainString(t.altTitle ? eC.t.hUbQT2 : eC.t["lo6H6+"], {
                                        gameName: i.name,
                                    }),
                                    body: eC.intl.string(t.altBody ? eC.t["JKqu+4"] : eC.t.qYAzOp),
                                    targetElementRef: b,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => a(eO.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: eC.intl.string(t.altCta ? eC.t.jynBQ5 : eC.t.lw71Nf),
                                            onClick: () => {
                                                a(eO.L.TAKE_ACTION), y({ analyticsLocations: h });
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
                        (0, r.jsx)(eg.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: eE.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(h.SrA, {
                                        size: "xxs",
                                        color: M.JX.PREMIUM_TIER_2,
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
                guildForConnectedChannel: a,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: s,
            } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            u = l;
        null != a && null != i
            ? ((e = ey.Z5c.CHANNEL(a.id, i.id)), (u = "".concat(u, " / ").concat(a.name)))
            : null != i && (e = ey.Z5c.CHANNEL(ey.ME, i.id));
        let d = (0, r.jsx)(K.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eh.Z, {
                    className: eE.channel,
                    children: u,
                }),
            }),
            p = (0, r.jsx)(K.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(eg.Z, {
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
                    (0, r.jsx)(I.j, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: o,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: eE.info,
                            children: [p, null != i && (0, J.Qm)(i.type) ? d : (0, r.jsx)(eP, { timestamps: c })],
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
            i = (0, r.jsx)(h.P3F, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eE.frameApplicationNameTitleClickable,
                children: (0, r.jsx)(eg.Z, {
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
                        children: [i, (0, r.jsx)(eP, { timestamps: n })],
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
            className: a()(eE.panel, u),
            ref: this.activityPopoutTargetRef,
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
                    y.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ey.ME, t.id),
                    !r &&
                        ((0, J.vd)(t.type) &&
                            b.Z.selectParticipant(
                                t.id,
                                (0, T.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, J.Qm)(t.type) && (0, E.tg)(ev.Ez.PANEL));
            }),
            eS(this, "handleFrameLinkClick", () => {
                let { frame: e, isActivityPopoutOpen: t } = this.props;
                if ((s()(null != e, "Frame cannot be null during navigation click"), t))
                    return void g.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                L.Z.updateFrameLayoutMode({
                    applicationId: e.applicationId,
                    layoutMode: ej.U.FOCUSED,
                });
            });
    }
}
let eN = (0, O.Z)(function (e) {
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
        o = (0, u.e7)([G.ZP, ec.Z], () => (0, W.Z)(G.ZP, ec.Z)),
        s = (0, u.e7)([eo.Z, et.Z], () => et.Z.getChannel(eo.Z.getVoiceChannelId())),
        d = (0, u.e7)([S.ZP], () => S.ZP.getConnectedActivityChannelId()),
        p = (0, u.e7)([et.Z], () => et.Z.getChannel(d)),
        f = (0, u.e7)([en.Z], () => en.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [h, g] = (0, u.Wu)([$.Z], () => [$.Z.getCurrentUserActiveStream(), $.Z.getStreamerActiveStreamMetadata()]),
        m = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
        b = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        y = (0, u.e7)([U.Z], () => U.Z.getConnectedFrame()),
        v = (0, u.e7)([en.Z, ei.Z], () => null == s || F.JL(s, en.Z, ei.Z, !1)),
        [O] = (0, N.Z)([
            null !=
            (t =
                null != g && null != g.id
                    ? g.id
                    : null != o && null != o.id
                      ? o.id
                      : null != b
                        ? b.applicationId
                        : null != y
                          ? y.applicationId
                          : void 0)
                ? t
                : "",
        ]),
        E = (0, u.e7)([D.Z], () => D.Z.getFakeGameData()),
        I = (0, u.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        T = (0, _.Z)() && null != I && (0, C.R)(),
        A = (0, u.e7)([er.Z], () => (0, H.Z)(er.Z) && (0, ep.isWindows)()),
        R = (0, u.e7)([el.Z], () => (null != a ? el.Z.findActivity(a, (e) => e.type === ey.IIU.PLAYING) : null)),
        M = null != h && h.ownerId === a && h.state !== ey.jm8.ENDED,
        k = (0, u.e7)([es.default, ea.Z], () => (null != p ? (0, w.F6)(p, es.default, ea.Z) : void 0)),
        L = (0, q.Z)(),
        [B, V] = i.useState(!1),
        z = (0, u.e7)([Y.Z], () => Y.Z.getWindowOpen(ey.KJ3.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: K,
            canStartAuthorization: X,
            connectionApp: J,
            startAuthorization: ed,
        } = (0, Z.FG)(O, {
            allowedFlows: [Z.ro.RPC, Z.ro.WEB],
        }),
        [eh, eg] = i.useState(!1),
        em = (0, j.Z)(null == O ? void 0 : O.id);
    i.useEffect(() => {
        em !== (null == O ? void 0 : O.id) && eg(!1);
    }, [O, em]);
    let { isQuestBarEmpty: eb, hasLoadedQuestBar: ev } = (0, Q.Ws)({ location: ex.dr.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: eO, analyticsLocations: ej } = (0, P.ZP)(),
        eC = ef.Z.useConfig({ location: "ActivityPanelGameCard" }),
        eE = (0, c.O)((e) => {
            if (e && null != J) {
                var t;
                eu.default.track(ey.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == o ? void 0 : o.id) ? t : null,
                    application_id: J.id,
                });
            }
        });
    return (0, r.jsx)(
        eZ,
        eI(e_({}, l), {
            guildId: n,
            canGoLive: A || T || void 0 !== E,
            activity: R,
            embeddedActivity: b,
            frame: y,
            userId: a,
            runningGame: null != E ? E : o,
            application: O,
            useReducedMotion: m,
            isStreaming: M,
            channel: p,
            canStream: v,
            stream: h,
            streamMetadata: g,
            channelName: k,
            guildForConnectedChannel: f,
            streamQualityIndicator: L,
            isForceShowSharingPopout: B,
            setIsForceShowSharingPopout: V,
            isActivityPopoutOpen: z,
            hasAlreadyLinked: K,
            blockAccountLinkDismissibleContent: !ev || !eb,
            accountLinkCopyConfig: eC,
            parentAnalyticsLocation: eO,
            analyticsLocations: ej,
            canStartAuthorization: X,
            accountLinkButtonRef: eE,
            startAuthorization: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return eg(!0), ed(...t);
            },
            didStartAuthorization: eh,
            connectionApp: J,
        }),
    );
});

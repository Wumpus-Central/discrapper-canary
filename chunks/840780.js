n.d(t, { Z: () => eP }), n(539854), n(388685);
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
    M = n(594190),
    k = n(925329),
    U = n(102172),
    G = n(74299),
    B = n(914923),
    V = n(662304),
    F = n(989941),
    H = n(690221),
    z = n(522474),
    W = n(231664),
    K = n(759198),
    Y = n(667105),
    q = n(131704),
    X = n(199902),
    Q = n(314897),
    J = n(592125),
    $ = n(984933),
    ee = n(430824),
    et = n(131951),
    en = n(496675),
    er = n(158776),
    ei = n(699516),
    el = n(944486),
    eo = n(594174),
    ea = n(449224),
    es = n(626135),
    ec = n(63063),
    eu = n(358085),
    ed = n(381096),
    ep = n(345243),
    ef = n(115530),
    eh = n(339144),
    eg = n(441248),
    em = n(981631),
    eb = n(918559),
    eO = n(921944),
    ey = n(46140),
    e_ = n(388032),
    ev = n(800339);
function ej(e, t, n) {
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
function ex(e) {
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
                ej(e, t, n[t]);
            });
    }
    return e;
}
function eC(e, t) {
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
let eE = (0, O.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(ep.Z, { children: t });
});
class eS extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)("div", {
            className: ev.sparkleContainer,
            children: (0, r.jsx)(f.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: ev.sparkles,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(eh.J, eC(ex({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
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
            O = (0, eh.y)(i, l, o),
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
                  groupName: eO.R.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === u.z.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(p.J2, {
                                title: e_.intl.string(e_.t["0l2pEh"]),
                                body: e_.intl.string(e_.t.DSZUKy),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => n(eO.L.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: e_.intl.string(e_.t.YdkBCA),
                                        onClick: () => {
                                            var e;
                                            n(eO.L.TAKE_ACTION),
                                                s()(null != l, "Received null activity"),
                                                es.default.track(em.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, w.v)(f, w.d.INVITE),
                                                es.default.track(em.rMx.OPEN_MODAL, {
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
                                  title: e_.intl.string(e_.t.MxAlrK),
                                  body: e_.intl.string(e_.t["/UTTEh"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: e_.intl.string(e_.t.aRIFWF),
                                          onClick: () => {
                                              n(eO.L.TAKE_ACTION),
                                                  window.open(ec.Z.getArticleURL(em.BhN.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => n(eO.L.USER_DISMISS),
                              })
                            : t === u.z.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(p.J2, {
                                    graphic: {
                                        type: "dynamic",
                                        component: d.P3.ACCOUNT_LINK_DISPLAY,
                                        props: { application: i },
                                    },
                                    title: e_.intl.formatToPlainString(e_.t["lo6H6+"], { gameName: i.name }),
                                    body: e_.intl.string(e_.t.qYAzOj),
                                    targetElementRef: m,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => n(eO.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: e_.intl.string(e_.t.lw71NT),
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
        return (0, r.jsx)(eg.k, {
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
            { title: i, sanitizedTitle: l } = (0, B.Z)(t);
        return (0, r.jsxs)("div", {
            className: ev.gameWrapper,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, r.jsx)(V.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon,
                      })
                    : (0, r.jsx)(A.ZP, {
                          look: A.ZP.Looks.GRAY,
                          size: A.ZP.Sizes.SMALL,
                          className: ev.liveIndicator,
                      }),
                (0, r.jsxs)("div", {
                    className: ev.info,
                    children: [
                        (0, r.jsx)(ef.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: ev.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(f.SrA, {
                                        size: "xxs",
                                        color: D.JX.PREMIUM_TIER_2,
                                    }),
                                    (0, r.jsx)(K.Z, {
                                        className: ev.perksDemoText,
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
            ? ((e = em.Z5c.CHANNEL(o.id, i.id)), (u = "".concat(u, " / ").concat(o.name)))
            : null != i && (e = em.Z5c.CHANNEL(em.ME, i.id));
        let d = (0, r.jsx)(H.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(ep.Z, {
                    className: ev.channel,
                    children: u,
                }),
            }),
            p = (0, r.jsx)(H.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(ef.Z, {
                    className: ev.underlineOnHover,
                    children: t.name,
                }),
            }),
            f = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(k.Z, {
                        className: ev.gameIcon,
                        game: t,
                        size: k.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(S.j, {
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: ev.info,
                            children: [p, null != i && (0, q.Qm)(i.type) ? d : (0, r.jsx)(eE, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: ev.gameWrapper,
            children: f,
        });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            runningGame: n,
            isStreaming: i,
            streamMetadata: l,
            application: a,
            activity: s,
            className: c,
        } = this.props;
        if (!i && ((!(0, eh.y)(a, s, t) && !e) || (null == n && null == t))) return null;
        let u = () =>
            null == n || (i && (null == l ? void 0 : l.pid) == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : this.renderScreenshare()
                : this.renderGame();
        return (0, r.jsx)("div", {
            className: o()(ev.panel, c),
            children: (0, r.jsxs)("div", {
                className: ev.body,
                children: [u(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            ej(this, "activityPopoutTargetRef", i.createRef()),
            ej(this, "accountLinkUpsellTargetRef", i.createRef()),
            ej(this, "inviteButtonRef", i.createRef()),
            ej(this, "handleApplicationLinkClick", () => {
                let { isActivityPopoutOpen: e } = this.props;
                this.handleChannelLinkClick(), e && h.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            ej(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                s()(null != n, "Activity cannot be null during navigation click"),
                    s()(null != t, "Channel cannot be null during navigation click"),
                    b.Z.channelListScrollTo(null != (e = t.guild_id) ? e : em.ME, t.id),
                    !r &&
                        ((0, q.vd)(t.type) &&
                            m.Z.selectParticipant(
                                t.id,
                                (0, Z.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, q.Qm)(t.type) && (0, x.tg)(eb.Ez.PANEL));
            });
    }
}
let eP = (0, y.Z)(function (e) {
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
    let o = (0, c.e7)([Q.default], () => Q.default.getId()),
        a = (0, c.e7)([M.ZP, ea.Z], () => (0, F.Z)(M.ZP, ea.Z)),
        s = (0, c.e7)([el.Z, J.Z], () => J.Z.getChannel(el.Z.getVoiceChannelId())),
        u = (0, c.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        d = (0, c.e7)([J.Z], () => J.Z.getChannel(u)),
        p = (0, c.e7)([ee.Z], () => ee.Z.getGuild(null == d ? void 0 : d.guild_id)),
        [f, h] = (0, c.Wu)([X.Z], () => [X.Z.getCurrentUserActiveStream(), X.Z.getStreamerActiveStreamMetadata()]),
        g = (0, c.e7)([v.Z], () => v.Z.useReducedMotion),
        m = (0, c.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        b = (0, c.e7)([ee.Z, en.Z, $.ZP], () =>
            null != s ? U.JL(s, ee.Z, en.Z, !1) : null != n && U.h_($.ZP.getChannels(n), ee.Z, en.Z).length > 0,
        ),
        [O] = (0, N.Z)([
            null !=
            (t =
                null != h && null != h.id
                    ? h.id
                    : null != a && null != a.id
                      ? a.id
                      : null != m
                        ? m.applicationId
                        : void 0)
                ? t
                : "",
        ]),
        y = (0, c.e7)([R.Z], () => R.Z.getFakeGameData()),
        x = (0, c.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        S = (0, E.Z)() && null != x && (0, j.R)(),
        Z = (0, c.e7)([et.Z], () => (0, G.Z)(et.Z) && (0, eu.isWindows)()),
        w = (0, c.e7)([er.Z], () => (null != o ? er.Z.findActivity(o, (e) => e.type === em.IIU.PLAYING) : null)),
        A = null != f && f.ownerId === o && f.state !== em.jm8.ENDED,
        D = (0, c.e7)([eo.default, ei.Z], () => (null != d ? (0, T.F6)(d, eo.default, ei.Z) : void 0)),
        L = (0, W.Z)(),
        [k, B] = i.useState(!1),
        V = (0, c.e7)([z.Z], () => z.Z.getWindowOpen(em.KJ3.ACTIVITY_POPOUT)),
        { hasAlreadyLinked: H, canStartAuthorization: K, connectionApp: q, startAuthorization: ec } = (0, I.F)(O),
        { isQuestBarEmpty: ep, hasLoadedQuestBar: ef } = (0, Y.Ws)({ location: ey.dr.CONFLICT_CHECKS }),
        eh = ed.Z.useConfig({ location: "RunningGameCard" }).enabled,
        { parentAnalyticsLocation: eg } = (0, P.ZP)(),
        eb = (0, _.O)((e) => {
            if (e && null != q) {
                var t;
                es.default.track(em.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == a ? void 0 : a.id) ? t : null,
                    application_id: q.id,
                });
            }
        });
    return (0, r.jsx)(
        eS,
        eC(ex({}, l), {
            guildId: n,
            canGoLive: Z || S || void 0 !== y,
            activity: w,
            embeddedActivity: m,
            userId: o,
            runningGame: null != y ? y : a,
            application: O,
            useReducedMotion: g,
            isStreaming: A,
            channel: d,
            canStream: b,
            stream: f,
            streamMetadata: h,
            channelName: D,
            guildForConnectedChannel: p,
            streamQualityIndicator: L,
            isForceShowSharingPopout: k,
            setIsForceShowSharingPopout: B,
            isActivityPopoutOpen: V,
            hasAlreadyLinked: H,
            blockAccountLinkDismissibleContent: !ef || !ep,
            accountLinkExperimentEnabled: eh,
            parentAnalyticsLocation: eg,
            canStartAuthorization: K,
            accountLinkButtonRef: eb,
            startAuthorization: ec,
        }),
    );
});

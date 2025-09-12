n.d(t, { Z: () => e_ }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(907862),
    p = n(481060),
    f = n(570140),
    h = n(475179),
    g = n(925549),
    m = n(438139),
    b = n(730749),
    O = n(607070),
    y = n(636449),
    _ = n(566620),
    v = n(317381),
    j = n(889441),
    x = n(736409),
    C = n(20471),
    E = n(835473),
    S = n(413523),
    P = n(933557),
    I = n(194082),
    N = n(550532),
    Z = n(436774),
    w = n(243778),
    T = n(594190),
    A = n(925329),
    R = n(102172),
    D = n(74299),
    M = n(914923),
    L = n(662304),
    k = n(989941),
    U = n(690221),
    G = n(522474),
    B = n(231664),
    V = n(759198),
    F = n(667105),
    H = n(131704),
    z = n(199902),
    W = n(314897),
    K = n(592125),
    Y = n(984933),
    q = n(430824),
    X = n(131951),
    Q = n(496675),
    J = n(158776),
    $ = n(699516),
    ee = n(944486),
    et = n(594174),
    en = n(449224),
    er = n(63063),
    ei = n(358085),
    el = n(381096),
    eo = n(345243),
    ea = n(115530),
    es = n(339144),
    ec = n(441248),
    eu = n(981631),
    ed = n(918559),
    ep = n(921944),
    ef = n(46140),
    eh = n(388032),
    eg = n(800339);
function em(e, t, n) {
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
function eb(e) {
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
                em(e, t, n[t]);
            });
    }
    return e;
}
let eO = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(eo.Z, { children: t });
});
class ey extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)("div", {
            className: eg.sparkleContainer,
            children: (0, r.jsx)(p.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: eg.sparkles,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(es.J, eb({}, this.props));
    }
    renderPostAccountLinkPopover() {
        let {
                accountLinkExperimentEnabled: e,
                hasAlreadyLinked: t,
                blockAccountLinkDismissibleContent: n,
            } = this.props,
            i = [];
        return (
            e && t && !n && i.push(u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER),
            (0, r.jsx)(w.ZP, {
                contentTypes: i,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === u.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                        return (0, r.jsx)(d.J2, {
                            title: eh.intl.string(eh.t.MxAlrK),
                            body: eh.intl.string(eh.t["/UTTEh"]),
                            targetElementRef: this.accountLinkUpsellTargetRef,
                            position: "top",
                            align: "left",
                            caretConfig: { align: "start" },
                            actions: [
                                {
                                    text: eh.intl.string(eh.t.aRIFWF),
                                    onClick: () => {
                                        n(ep.L.TAKE_ACTION),
                                            window.open(er.Z.getArticleURL(eu.BhN.IN_GAME_FEATURES), "_blank");
                                    },
                                },
                            ],
                            shouldShow: !0,
                            onRequestClose: () => n(ep.L.USER_DISMISS),
                        });
                },
            })
        );
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: l,
        } = this.props;
        return (0, r.jsx)(ec.k, {
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
            { title: i, sanitizedTitle: l } = (0, M.Z)(t);
        return (0, r.jsxs)("div", {
            className: eg.gameWrapper,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, r.jsx)(L.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon,
                      })
                    : (0, r.jsx)(I.ZP, {
                          look: I.ZP.Looks.GRAY,
                          size: I.ZP.Sizes.SMALL,
                          className: eg.liveIndicator,
                      }),
                (0, r.jsxs)("div", {
                    className: eg.info,
                    children: [
                        (0, r.jsx)(ea.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: eg.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(p.SrA, {
                                        size: "xxs",
                                        color: Z.JX.PREMIUM_TIER_2,
                                    }),
                                    (0, r.jsx)(V.Z, {
                                        className: eg.perksDemoText,
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
            ? ((e = eu.Z5c.CHANNEL(o.id, i.id)), (u = "".concat(u, " / ").concat(o.name)))
            : null != i && (e = eu.Z5c.CHANNEL(eu.ME, i.id));
        let d = (0, r.jsx)(U.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eo.Z, {
                    className: eg.channel,
                    children: u,
                }),
            }),
            p = (0, r.jsx)(U.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(ea.Z, {
                    className: eg.underlineOnHover,
                    children: t.name,
                }),
            }),
            f = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A.Z, {
                        className: eg.gameIcon,
                        game: t,
                        size: A.A.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(x.j, {
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)("div", {
                            className: eg.info,
                            children: [p, null != i && (0, H.Qm)(i.type) ? d : (0, r.jsx)(eO, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eg.gameWrapper,
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
        if (!i && ((!(0, es.y)(a, s, t) && !e) || (null == n && null == t))) return null;
        let u = () =>
            null == n || (i && (null == l ? void 0 : l.pid) == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : this.renderScreenshare()
                : this.renderGame();
        return (0, r.jsx)("div", {
            className: o()(eg.panel, c),
            children: (0, r.jsxs)("div", {
                className: eg.body,
                children: [u(), this.renderActions(), this.renderPostAccountLinkPopover()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            em(this, "activityPopoutTargetRef", i.createRef()),
            em(this, "accountLinkUpsellTargetRef", i.createRef()),
            em(this, "handleApplicationLinkClick", () => {
                let { isActivityPopoutOpen: e } = this.props;
                this.handleChannelLinkClick(), e && f.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            em(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                s()(null != n, "Activity cannot be null during navigation click"),
                    s()(null != t, "Channel cannot be null during navigation click"),
                    g.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eu.ME, t.id),
                    !r &&
                        ((0, H.vd)(t.type) &&
                            h.Z.selectParticipant(
                                t.id,
                                (0, S.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, H.Qm)(t.type) && (0, _.tg)(ed.Ez.PANEL));
            });
    }
}
let e_ = (0, b.Z)(function (e) {
    var t,
        n,
        l,
        { guildId: o } = e,
        a = (function (e, t) {
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
    let s = (0, c.e7)([W.default], () => W.default.getId()),
        u = (0, c.e7)([T.ZP, en.Z], () => (0, k.Z)(T.ZP, en.Z)),
        d = (0, c.e7)([ee.Z, K.Z], () => K.Z.getChannel(ee.Z.getVoiceChannelId())),
        p = (0, c.e7)([v.ZP], () => v.ZP.getConnectedActivityChannelId()),
        f = (0, c.e7)([K.Z], () => K.Z.getChannel(p)),
        h = (0, c.e7)([q.Z], () => q.Z.getGuild(null == f ? void 0 : f.guild_id)),
        [g, m] = (0, c.Wu)([z.Z], () => [z.Z.getCurrentUserActiveStream(), z.Z.getStreamerActiveStreamMetadata()]),
        b = (0, c.e7)([O.Z], () => O.Z.useReducedMotion),
        _ = (0, c.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        x = (0, c.e7)([q.Z, Q.Z, Y.ZP], () =>
            null != d ? R.JL(d, q.Z, Q.Z, !1) : null != o && R.h_(Y.ZP.getChannels(o), q.Z, Q.Z).length > 0,
        ),
        [S] = (0, E.Z)([
            null !=
            (l =
                null != m && null != m.id
                    ? m.id
                    : null != u && null != u.id
                      ? u.id
                      : null != _
                        ? _.applicationId
                        : void 0)
                ? l
                : "",
        ]),
        I = (0, c.e7)([N.Z], () => N.Z.getFakeGameData()),
        Z = (0, c.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        w = (0, j.Z)() && null != Z && (0, y.R)(),
        A = (0, c.e7)([X.Z], () => (0, D.Z)(X.Z) && (0, ei.isWindows)()),
        M = (0, c.e7)([J.Z], () => (null != s ? J.Z.findActivity(s, (e) => e.type === eu.IIU.PLAYING) : null)),
        L = null != g && g.ownerId === s && g.state !== eu.jm8.ENDED,
        U = (0, c.e7)([et.default, $.Z], () => (null != f ? (0, P.F6)(f, et.default, $.Z) : void 0)),
        V = (0, B.Z)(),
        [H, er] = i.useState(!1),
        eo = (0, c.e7)([G.Z], () => G.Z.getWindowOpen(eu.KJ3.ACTIVITY_POPOUT)),
        { hasAlreadyLinked: ea } = (0, C.F)(S),
        { isQuestBarEmpty: es, hasLoadedQuestBar: ec } = (0, F.Ws)({ location: ef.dr.CONFLICT_CHECKS }),
        ed = el.Z.useConfig({ location: "RunningGameCard" }).enabled;
    return (0, r.jsx)(
        ey,
        ((t = eb({}, a)),
        (n = n =
            {
                guildId: o,
                canGoLive: A || w || void 0 !== I,
                activity: M,
                embeddedActivity: _,
                userId: s,
                runningGame: null != I ? I : u,
                application: S,
                useReducedMotion: b,
                isStreaming: L,
                channel: f,
                canStream: x,
                stream: g,
                streamMetadata: m,
                channelName: U,
                guildForConnectedChannel: h,
                streamQualityIndicator: V,
                isForceShowSharingPopout: H,
                setIsForceShowSharingPopout: er,
                isActivityPopoutOpen: eo,
                hasAlreadyLinked: ea,
                blockAccountLinkDismissibleContent: !ec || !es,
                accountLinkExperimentEnabled: ed,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
});

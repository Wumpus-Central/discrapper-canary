n.d(t, { Z: () => ev }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(252258),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(570140),
    f = n(475179),
    g = n(925549),
    m = n(438139),
    b = n(730749),
    y = n(607070),
    _ = n(636449),
    v = n(214629),
    O = n(566620),
    j = n(317381),
    x = n(736409),
    C = n(367907),
    S = n(835473),
    P = n(413523),
    I = n(933557),
    N = n(194082),
    Z = n(550532),
    w = n(436774),
    E = n(605236),
    T = n(243778),
    A = n(594190),
    D = n(925329),
    R = n(668519),
    L = n(102172),
    k = n(74299),
    M = n(914923),
    G = n(165393),
    B = n(989941),
    U = n(690221),
    W = n(231664),
    V = n(759198),
    F = n(970731),
    H = n(131704),
    z = n(199902),
    Y = n(314897),
    q = n(592125),
    Q = n(984933),
    K = n(430824),
    J = n(131951),
    X = n(496675),
    $ = n(158776),
    ee = n(699516),
    et = n(944486),
    en = n(594174),
    er = n(449224),
    ei = n(451478),
    el = n(358085),
    eo = n(345243),
    ea = n(115530),
    es = n(339144),
    ec = n(441248),
    eu = n(981631),
    ed = n(918559),
    ep = n(921944),
    eh = n(388032),
    ef = n(864989);
function eg(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function em(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eg(e, t, n[t]);
            });
    }
    return e;
}
function eb(e, t) {
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
let ey = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(eo.Z, { children: t });
});
class e_ extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)('div', {
            className: ef.sparkleContainer,
            children: (0, r.jsx)(p.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: ef.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(es.J, em({}, this.props));
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n, setIsForceShowSharingPopout: i } = this.props;
        return (0, r.jsx)(ec.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => i(!0)
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: l } = (0, M.Z)(t);
        return (0, r.jsxs)('div', {
            className: ef.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(G.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon
                      })
                    : (0, r.jsx)(N.ZP, {
                          look: N.ZP.Looks.GRAY,
                          size: N.ZP.Sizes.SMALL,
                          className: ef.liveIndicator
                      }),
                (0, r.jsxs)('div', {
                    className: ef.info,
                    children: [
                        (0, r.jsx)(ea.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: ef.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(p.SrA, {
                                        size: 'xxs',
                                        color: w.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(V.Z, {
                                        className: ef.perksDemoText,
                                        variant: 'text-xxs/semibold',
                                        children: n
                                    })
                                ]
                            })
                    ]
                })
            ]
        });
    }
    renderEmbeddedActivity() {
        let e,
            t,
            { application: n, embeddedActivity: i, channel: l, channelName: a, guildForConnectedChannel: s, showsActivityPopoutQuickRefocusNUX: u, markActivityPopoutQuickRefocusNUXAsDismissed: d } = this.props;
        if (null == i || null == n) return null;
        let f = { start: i.connectedSince },
            g = (0, _.R)({ isContextless: i.location.kind === c.E.CONTEXTLESS }),
            m = a;
        null != s && null != l ? ((e = eu.Z5c.CHANNEL(s.id, l.id)), (m = ''.concat(m, ' / ').concat(s.name))) : null != l && (e = eu.Z5c.CHANNEL(eu.ME, l.id));
        let b = (0, r.jsx)(U.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(eo.Z, {
                className: ef.channel,
                children: m
            })
        });
        t = g
            ? (0, r.jsx)(ea.Z, { children: n.name })
            : (0, r.jsx)(U.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(ea.Z, {
                      className: ef.underlineOnHover,
                      children: n.name
                  })
              });
        let y = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    className: ef.gameIcon,
                    game: n,
                    size: D.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: ef.info,
                    children: [t, null != l && (0, H.Qm)(l.type) ? b : (0, r.jsx)(ey, { timestamps: f })]
                })
            ]
        });
        return g
            ? (0, r.jsx)(p.yRy, {
                  position: 'top',
                  align: 'center',
                  spacing: 16,
                  shouldShow: u,
                  renderPopout: () =>
                      (0, r.jsx)(F.ZP, {
                          color: F.BD.PRIMARY,
                          header: eh.NW.string(eh.t.ON4pBg),
                          content: eh.NW.string(eh.t['8PAfND']),
                          buttonCTA: eh.NW.string(eh.t.WAI6xs),
                          buttonProps: {
                              color: p.zxk.Colors.PRIMARY,
                              look: p.zxk.Looks.LINK,
                              size: p.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              d(ep.L.USER_DISMISS);
                          },
                          caretPosition: F.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          p.P3F,
                          eb(em({}, e), {
                              className: o()(ef.gameWrapper, ef.clickableGameWrapper, { [ef.clickableGameWrapperForceHover]: u }),
                              onClick: () => {
                                  h.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), u && d(ep.L.TAKE_ACTION), (0, C.yw)(eu.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
                              },
                              children: y
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: ef.gameWrapper,
                  children: y
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: a, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, es.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(x.j, {
                  isForceShowSharingPopout: u,
                  setIsForceShowSharingPopout: d,
                  children: (0, r.jsx)('div', {
                      className: o()(ef.panel, c),
                      children: (0, r.jsxs)('div', {
                          className: ef.body,
                          children: [null == n || (i && (null == l ? void 0 : l.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            eg(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'),
                    s()(null != n, 'Activity null during navigation click'),
                    g.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eu.ME, t.id),
                    !(0, _.R)({ isContextless: n.location.kind === c.E.CONTEXTLESS }) &&
                        ((0, H.vd)(t.type) &&
                            f.Z.selectParticipant(
                                t.id,
                                (0, P.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, H.Qm)(t.type) && (0, O.tg)(ed.Ez.PANEL));
            });
    }
}
let ev = (0, b.Z)(function (e) {
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId']);
    let o = (0, u.e7)([Y.default], () => Y.default.getId()),
        a = (0, u.e7)([A.ZP, er.Z], () => (0, B.Z)(A.ZP, er.Z)),
        s = (0, u.e7)([et.Z, q.Z], () => q.Z.getChannel(et.Z.getVoiceChannelId())),
        p = (0, u.e7)([j.ZP], () => j.ZP.getConnectedActivityChannelId()),
        h = (0, u.e7)([q.Z], () => q.Z.getChannel(p)),
        f = (0, u.e7)([K.Z], () => K.Z.getGuild(null == h ? void 0 : h.guild_id)),
        [g, m] = (0, u.Wu)([z.Z], () => [z.Z.getCurrentUserActiveStream(), z.Z.getStreamerActiveStreamMetadata()]),
        b = (0, u.e7)([y.Z], () => y.Z.useReducedMotion),
        O = (0, u.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        { showRefreshedGoLiveModal: x } = (0, R.a)({
            location: 'ActivityPanelGameCard',
            autoTrackExposure: !1
        }),
        C = (0, u.e7)([K.Z, X.Z, Q.ZP], () => (null != s ? L.JL(s, K.Z, X.Z, !1) : !!x || (null != n && L.h_(Q.ZP.getChannels(n), K.Z, X.Z).length > 0))),
        [P] = (0, S.Z)([null != (t = null != m && null != m.id ? m.id : null != a && null != a.id ? a.id : null != O ? O.applicationId : void 0) ? t : '']),
        N = (0, u.e7)([Z.Z], () => Z.Z.getFakeGameData()),
        w = (0, u.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        D = (0, v.Z0)() && null != w && (0, _.R)({ isContextless: w.location.kind === c.E.CONTEXTLESS }),
        M = (0, u.e7)([J.Z], () => (0, k.Z)(J.Z) && (0, el.isWindows)()),
        G = (0, u.e7)([$.Z], () => (null != o ? $.Z.findActivity(o, (e) => e.type === eu.IIU.PLAYING) : null)),
        U = null != g && g.ownerId === o && g.state !== eu.jm8.ENDED,
        V = (0, u.e7)([en.default, ee.Z], () => (null != h ? (0, I.F6)(h, en.default, ee.Z) : void 0)),
        F = (0, W.Z)(),
        [H, eo] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: ea, markActivityPopoutQuickRefocusNUXAsDismissed: es } = (function (e) {
            let { embeddedActivity: t } = e,
                n = [],
                r = (0, E.wE)(d.z.ACTIVITY_POPOUT_NUX_MODAL),
                i = (0, u.e7)([ei.Z], () => ei.Z.isFocused());
            (0, _.R)({ isContextless: (null == t ? void 0 : t.location.kind) === c.E.CONTEXTLESS }) && r && i && n.push(d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [l, o] = (0, T.US)(n);
            return {
                showsActivityPopoutQuickRefocusNUX: l === d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: o
            };
        })({ embeddedActivity: O });
    return (0, r.jsx)(
        e_,
        eb(em({}, l), {
            guildId: n,
            canGoLive: M || D || void 0 !== N,
            activity: G,
            embeddedActivity: O,
            userId: o,
            runningGame: null != N ? N : a,
            application: P,
            useReducedMotion: b,
            isStreaming: U,
            channel: h,
            canStream: C,
            stream: g,
            streamMetadata: m,
            channelName: V,
            guildForConnectedChannel: f,
            streamQualityIndicator: F,
            isForceShowSharingPopout: H,
            setIsForceShowSharingPopout: eo,
            showsActivityPopoutQuickRefocusNUX: ea,
            markActivityPopoutQuickRefocusNUXAsDismissed: es
        })
    );
});

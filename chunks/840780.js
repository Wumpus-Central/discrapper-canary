n.d(t, { Z: () => ev }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(252258),
    u = n(442837),
    d = n(704215),
    h = n(481060),
    p = n(570140),
    f = n(475179),
    g = n(925549),
    m = n(438139),
    b = n(730749),
    y = n(607070),
    _ = n(636449),
    v = n(214629),
    O = n(566620),
    C = n(317381),
    S = n(736409),
    j = n(367907),
    E = n(835473),
    x = n(413523),
    N = n(933557),
    I = n(194082),
    P = n(550532),
    w = n(436774),
    Z = n(605236),
    T = n(243778),
    A = n(594190),
    R = n(925329),
    D = n(668519),
    L = n(102172),
    k = n(74299),
    M = n(914923),
    U = n(165393),
    G = n(989941),
    B = n(690221),
    W = n(231664),
    V = n(759198),
    H = n(970731),
    F = n(131704),
    z = n(199902),
    Y = n(314897),
    K = n(592125),
    q = n(984933),
    Q = n(430824),
    X = n(131951),
    J = n(496675),
    $ = n(158776),
    ee = n(699516),
    et = n(944486),
    en = n(594174),
    er = n(449224),
    ei = n(451478),
    el = n(358085),
    eo = n(345243),
    es = n(115530),
    ea = n(339144),
    ec = n(441248),
    eu = n(981631),
    ed = n(918559),
    eh = n(921944),
    ep = n(388032),
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
            children: (0, r.jsx)(h.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: ef.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(ea.J, em({}, this.props));
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
                    ? (0, r.jsx)(U.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon
                      })
                    : (0, r.jsx)(I.ZP, {
                          look: I.ZP.Looks.GRAY,
                          size: I.ZP.Sizes.SMALL,
                          className: ef.liveIndicator
                      }),
                (0, r.jsxs)('div', {
                    className: ef.info,
                    children: [
                        (0, r.jsx)(es.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: ef.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(h.SrA, {
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
            { application: n, embeddedActivity: i, channel: l, channelName: s, guildForConnectedChannel: a, showsActivityPopoutQuickRefocusNUX: u, markActivityPopoutQuickRefocusNUXAsDismissed: d } = this.props;
        if (null == i || null == n) return null;
        let f = { start: i.connectedSince },
            g = (0, _.R)({ isContextless: i.location.kind === c.E.CONTEXTLESS }),
            m = s;
        null != a && null != l ? ((e = eu.Z5c.CHANNEL(a.id, l.id)), (m = ''.concat(m, ' / ').concat(a.name))) : null != l && (e = eu.Z5c.CHANNEL(eu.ME, l.id));
        let b = (0, r.jsx)(B.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(eo.Z, {
                className: ef.channel,
                children: m
            })
        });
        t = g
            ? (0, r.jsx)(es.Z, { children: n.name })
            : (0, r.jsx)(B.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(es.Z, {
                      className: ef.underlineOnHover,
                      children: n.name
                  })
              });
        let y = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R.Z, {
                    className: ef.gameIcon,
                    game: n,
                    size: R.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: ef.info,
                    children: [t, null != l && (0, F.Qm)(l.type) ? b : (0, r.jsx)(ey, { timestamps: f })]
                })
            ]
        });
        return g
            ? (0, r.jsx)(h.yRy, {
                  position: 'top',
                  align: 'center',
                  spacing: 16,
                  shouldShow: u,
                  renderPopout: () =>
                      (0, r.jsx)(H.ZP, {
                          color: H.BD.PRIMARY,
                          header: ep.NW.string(ep.t.ON4pBg),
                          content: ep.NW.string(ep.t['8PAfND']),
                          buttonCTA: ep.NW.string(ep.t.WAI6xs),
                          buttonProps: {
                              color: h.zxk.Colors.PRIMARY,
                              look: h.zxk.Looks.LINK,
                              size: h.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              d(eh.L.USER_DISMISS);
                          },
                          caretPosition: H.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          h.P3F,
                          eb(em({}, e), {
                              className: o()(ef.gameWrapper, ef.clickableGameWrapper, { [ef.clickableGameWrapperForceHover]: u }),
                              onClick: () => {
                                  p.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), u && d(eh.L.TAKE_ACTION), (0, j.yw)(eu.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
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
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: s, activity: a, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, ea.y)(s, a, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(S.j, {
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
                a()(null != t, 'Channel is null during navigation click'),
                    a()(null != n, 'Activity null during navigation click'),
                    g.Z.channelListScrollTo(null != (e = t.guild_id) ? e : eu.ME, t.id),
                    !(0, _.R)({ isContextless: n.location.kind === c.E.CONTEXTLESS }) &&
                        ((0, F.vd)(t.type) &&
                            f.Z.selectParticipant(
                                t.id,
                                (0, x.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, F.Qm)(t.type) && (0, O.tg)(ed.Ez.PANEL));
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
        s = (0, u.e7)([A.ZP, er.Z], () => (0, G.Z)(A.ZP, er.Z)),
        a = (0, u.e7)([et.Z, K.Z], () => K.Z.getChannel(et.Z.getVoiceChannelId())),
        h = (0, u.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        p = (0, u.e7)([K.Z], () => K.Z.getChannel(h)),
        f = (0, u.e7)([Q.Z], () => Q.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [g, m] = (0, u.Wu)([z.Z], () => [z.Z.getCurrentUserActiveStream(), z.Z.getStreamerActiveStreamMetadata()]),
        b = (0, u.e7)([y.Z], () => y.Z.useReducedMotion),
        O = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        { showRefreshedGoLiveModal: S } = (0, D.a)({
            location: 'ActivityPanelGameCard',
            autoTrackExposure: !1
        }),
        j = (0, u.e7)([Q.Z, J.Z, q.ZP], () => (null != a ? L.JL(a, Q.Z, J.Z, !1) : !!S || (null != n && L.h_(q.ZP.getChannels(n), Q.Z, J.Z).length > 0))),
        [x] = (0, E.Z)([null != (t = null != m && null != m.id ? m.id : null != s && null != s.id ? s.id : null != O ? O.applicationId : void 0) ? t : '']),
        I = (0, u.e7)([P.Z], () => P.Z.getFakeGameData()),
        w = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        R = (0, v.Z0)() && null != w && (0, _.R)({ isContextless: w.location.kind === c.E.CONTEXTLESS }),
        M = (0, u.e7)([X.Z], () => (0, k.Z)(X.Z) && (0, el.isWindows)()),
        U = (0, u.e7)([$.Z], () => (null != o ? $.Z.findActivity(o, (e) => e.type === eu.IIU.PLAYING) : null)),
        B = null != g && g.ownerId === o && g.state !== eu.jm8.ENDED,
        V = (0, u.e7)([en.default, ee.Z], () => (null != p ? (0, N.F6)(p, en.default, ee.Z) : void 0)),
        H = (0, W.Z)(),
        [F, eo] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: es, markActivityPopoutQuickRefocusNUXAsDismissed: ea } = (function (e) {
            let { embeddedActivity: t } = e,
                n = [],
                r = (0, Z.wE)(d.z.ACTIVITY_POPOUT_NUX_MODAL),
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
            canGoLive: M || R || void 0 !== I,
            activity: U,
            embeddedActivity: O,
            userId: o,
            runningGame: null != I ? I : s,
            application: x,
            useReducedMotion: b,
            isStreaming: B,
            channel: p,
            canStream: j,
            stream: g,
            streamMetadata: m,
            channelName: V,
            guildForConnectedChannel: f,
            streamQualityIndicator: H,
            isForceShowSharingPopout: F,
            setIsForceShowSharingPopout: eo,
            showsActivityPopoutQuickRefocusNUX: es,
            markActivityPopoutQuickRefocusNUXAsDismissed: ea
        })
    );
});

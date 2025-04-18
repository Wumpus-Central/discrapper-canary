n.d(t, { Z: () => e_ }), n(388685), n(539854);
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
    I = n(933557),
    N = n(194082),
    P = n(550532),
    w = n(436774),
    Z = n(605236),
    T = n(243778),
    A = n(594190),
    R = n(925329),
    D = n(102172),
    L = n(74299),
    k = n(914923),
    M = n(165393),
    U = n(989941),
    G = n(690221),
    B = n(231664),
    W = n(759198),
    V = n(970731),
    H = n(131704),
    F = n(199902),
    z = n(314897),
    Y = n(592125),
    K = n(984933),
    q = n(430824),
    Q = n(131951),
    X = n(496675),
    J = n(158776),
    $ = n(699516),
    ee = n(944486),
    et = n(594174),
    en = n(449224),
    er = n(451478),
    ei = n(358085),
    el = n(345243),
    eo = n(115530),
    es = n(339144),
    ea = n(441248),
    ec = n(981631),
    eu = n(918559),
    ed = n(921944),
    eh = n(388032),
    ep = n(541331);
function ef(e, t, n) {
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
function eg(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}
function em(e, t) {
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
let eb = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(el.Z, { children: t });
});
class ey extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)('div', {
            className: ep.sparkleContainer,
            children: (0, r.jsx)(h.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: ep.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(es.J, eg({}, this.props));
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n, setIsForceShowSharingPopout: i } = this.props;
        return (0, r.jsx)(ea.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => i(!0)
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: l } = (0, k.Z)(t);
        return (0, r.jsxs)('div', {
            className: ep.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(M.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon
                      })
                    : (0, r.jsx)(N.ZP, {
                          look: N.ZP.Looks.GRAY,
                          size: N.ZP.Sizes.SMALL,
                          className: ep.liveIndicator
                      }),
                (0, r.jsxs)('div', {
                    className: ep.info,
                    children: [
                        (0, r.jsx)(eo.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: ep.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(h.SrA, {
                                        size: 'xxs',
                                        color: w.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(W.Z, {
                                        className: ep.perksDemoText,
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
        null != a && null != l ? ((e = ec.Z5c.CHANNEL(a.id, l.id)), (m = ''.concat(m, ' / ').concat(a.name))) : null != l && (e = ec.Z5c.CHANNEL(ec.ME, l.id));
        let b = (0, r.jsx)(G.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(el.Z, {
                className: ep.channel,
                children: m
            })
        });
        t = g
            ? (0, r.jsx)(eo.Z, { children: n.name })
            : (0, r.jsx)(G.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(eo.Z, {
                      className: ep.underlineOnHover,
                      children: n.name
                  })
              });
        let y = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R.Z, {
                    className: ep.gameIcon,
                    game: n,
                    size: R.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: ep.info,
                    children: [t, null != l && (0, H.Qm)(l.type) ? b : (0, r.jsx)(eb, { timestamps: f })]
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
                      (0, r.jsx)(V.ZP, {
                          color: V.BD.PRIMARY,
                          header: eh.NW.string(eh.t.ON4pBg),
                          content: eh.NW.string(eh.t['8PAfND']),
                          buttonCTA: eh.NW.string(eh.t.WAI6xs),
                          buttonProps: {
                              color: h.zxk.Colors.PRIMARY,
                              look: h.zxk.Looks.LINK,
                              size: h.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              d(ed.L.USER_DISMISS);
                          },
                          caretPosition: V.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          h.P3F,
                          em(eg({}, e), {
                              className: o()(ep.gameWrapper, ep.clickableGameWrapper, { [ep.clickableGameWrapperForceHover]: u }),
                              onClick: () => {
                                  p.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), u && d(ed.L.TAKE_ACTION), (0, j.yw)(ec.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
                              },
                              children: y
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: ep.gameWrapper,
                  children: y
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: s, activity: a, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, es.y)(s, a, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(S.j, {
                  isForceShowSharingPopout: u,
                  setIsForceShowSharingPopout: d,
                  children: (0, r.jsx)('div', {
                      className: o()(ep.panel, c),
                      children: (0, r.jsxs)('div', {
                          className: ep.body,
                          children: [null == n || (i && (null == l ? void 0 : l.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            ef(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                a()(null != t, 'Channel is null during navigation click'),
                    a()(null != n, 'Activity null during navigation click'),
                    g.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ec.ME, t.id),
                    !(0, _.R)({ isContextless: n.location.kind === c.E.CONTEXTLESS }) &&
                        ((0, H.vd)(t.type) &&
                            f.Z.selectParticipant(
                                t.id,
                                (0, x.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, H.Qm)(t.type) && (0, O.tg)(eu.Ez.PANEL));
            });
    }
}
let e_ = (0, b.Z)(function (e) {
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
    let o = (0, u.e7)([z.default], () => z.default.getId()),
        s = (0, u.e7)([A.ZP, en.Z], () => (0, U.Z)(A.ZP, en.Z)),
        a = (0, u.e7)([ee.Z, Y.Z], () => Y.Z.getChannel(ee.Z.getVoiceChannelId())),
        h = (0, u.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        p = (0, u.e7)([Y.Z], () => Y.Z.getChannel(h)),
        f = (0, u.e7)([q.Z], () => q.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [g, m] = (0, u.Wu)([F.Z], () => [F.Z.getCurrentUserActiveStream(), F.Z.getStreamerActiveStreamMetadata()]),
        b = (0, u.e7)([y.Z], () => y.Z.useReducedMotion),
        O = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        S = (0, u.e7)([q.Z, X.Z, K.ZP], () => (null != a ? D.JL(a, q.Z, X.Z, !1) : null != n && D.h_(K.ZP.getChannels(n), q.Z, X.Z).length > 0)),
        [j] = (0, E.Z)([null != (t = null != m && null != m.id ? m.id : null != s && null != s.id ? s.id : null != O ? O.applicationId : void 0) ? t : '']),
        x = (0, u.e7)([P.Z], () => P.Z.getFakeGameData()),
        N = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        w = (0, v.Z0)() && null != N && (0, _.R)({ isContextless: N.location.kind === c.E.CONTEXTLESS }),
        R = (0, u.e7)([Q.Z], () => (0, L.Z)(Q.Z) && (0, ei.isWindows)()),
        k = (0, u.e7)([J.Z], () => (null != o ? J.Z.findActivity(o, (e) => e.type === ec.IIU.PLAYING) : null)),
        M = null != g && g.ownerId === o && g.state !== ec.jm8.ENDED,
        G = (0, u.e7)([et.default, $.Z], () => (null != p ? (0, I.F6)(p, et.default, $.Z) : void 0)),
        W = (0, B.Z)(),
        [V, H] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: el, markActivityPopoutQuickRefocusNUXAsDismissed: eo } = (function (e) {
            let { embeddedActivity: t } = e,
                n = [],
                r = (0, Z.wE)(d.z.ACTIVITY_POPOUT_NUX_MODAL),
                i = (0, u.e7)([er.Z], () => er.Z.isFocused());
            (0, _.R)({ isContextless: (null == t ? void 0 : t.location.kind) === c.E.CONTEXTLESS }) && r && i && n.push(d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [l, o] = (0, T.US)(n);
            return {
                showsActivityPopoutQuickRefocusNUX: l === d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: o
            };
        })({ embeddedActivity: O });
    return (0, r.jsx)(
        ey,
        em(eg({}, l), {
            guildId: n,
            canGoLive: R || w || void 0 !== x,
            activity: k,
            embeddedActivity: O,
            userId: o,
            runningGame: null != x ? x : s,
            application: j,
            useReducedMotion: b,
            isStreaming: M,
            channel: p,
            canStream: S,
            stream: g,
            streamMetadata: m,
            channelName: G,
            guildForConnectedChannel: f,
            streamQualityIndicator: W,
            isForceShowSharingPopout: V,
            setIsForceShowSharingPopout: H,
            showsActivityPopoutQuickRefocusNUX: el,
            markActivityPopoutQuickRefocusNUXAsDismissed: eo
        })
    );
});

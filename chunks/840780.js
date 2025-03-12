n.d(t, { Z: () => e_ }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(512722),
    s = n.n(a),
    c = n(115911),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(570140),
    f = n(475179),
    g = n(925549),
    m = n(438139),
    b = n(730749),
    v = n(607070),
    y = n(636449),
    _ = n(214629),
    O = n(566620),
    j = n(317381),
    C = n(736409),
    x = n(367907),
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
    eo = n(358085),
    el = n(345243),
    ea = n(115530),
    es = n(339144),
    ec = n(441248),
    eu = n(981631),
    ed = n(918559),
    ep = n(921944),
    eh = n(388032),
    ef = n(396706);
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
let ev = (0, m.Z)(function (e) {
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
            { title: i, sanitizedTitle: o } = (0, M.Z)(t);
        return (0, r.jsxs)('div', {
            className: ef.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(G.Z, {
                          title: o,
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
        let e, t;
        let { application: n, embeddedActivity: i, channel: o, channelName: a, guildForConnectedChannel: s, showsActivityPopoutQuickRefocusNUX: u, markActivityPopoutQuickRefocusNUXAsDismissed: d } = this.props;
        if (null == i || null == n) return null;
        let f = { start: i.connectedSince },
            g = (0, y.R)({ isContextless: i.location.kind === c.X.CONTEXTLESS }),
            m = a;
        null != s && null != o ? ((e = eu.Z5c.CHANNEL(s.id, o.id)), (m = ''.concat(m, ' / ').concat(s.name))) : null != o && (e = eu.Z5c.CHANNEL(eu.ME, o.id));
        let b = (0, r.jsx)(U.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(el.Z, {
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
        let v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    className: ef.gameIcon,
                    game: n,
                    size: D.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: ef.info,
                    children: [t, null != o && (0, H.Qm)(o.type) ? b : (0, r.jsx)(ev, { timestamps: f })]
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
                              className: l()(ef.gameWrapper, ef.clickableGameWrapper, { [ef.clickableGameWrapperForceHover]: u }),
                              onClick: () => {
                                  h.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), u && d(ep.L.TAKE_ACTION), (0, x.yw)(eu.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
                              },
                              children: v
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: ef.gameWrapper,
                  children: v
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: o, application: a, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, es.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(C.j, {
                  isForceShowSharingPopout: u,
                  setIsForceShowSharingPopout: d,
                  children: (0, r.jsx)('div', {
                      className: l()(ef.panel, c),
                      children: (0, r.jsxs)('div', {
                          className: ef.body,
                          children: [null == n || (i && (null == o ? void 0 : o.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
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
                    g.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eu.ME, t.id),
                    !(0, y.R)({ isContextless: n.location.kind === c.X.CONTEXTLESS }) &&
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
let e_ = (0, b.Z)(function (e) {
    var t,
        { guildId: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId']);
    let l = (0, u.e7)([Y.default], () => Y.default.getId()),
        a = (0, u.e7)([A.ZP, er.Z], () => (0, B.Z)(A.ZP, er.Z)),
        s = (0, u.e7)([et.Z, q.Z], () => q.Z.getChannel(et.Z.getVoiceChannelId())),
        p = (0, u.e7)([j.ZP], () => j.ZP.getConnectedActivityChannelId()),
        h = (0, u.e7)([q.Z], () => q.Z.getChannel(p)),
        f = (0, u.e7)([K.Z], () => K.Z.getGuild(null == h ? void 0 : h.guild_id)),
        [g, m] = (0, u.Wu)([z.Z], () => [z.Z.getCurrentUserActiveStream(), z.Z.getStreamerActiveStreamMetadata()]),
        b = (0, u.e7)([v.Z], () => v.Z.useReducedMotion),
        O = (0, u.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        { showRefreshedGoLiveModal: C } = (0, R.a)({
            location: 'ActivityPanelGameCard',
            autoTrackExposure: !1
        }),
        x = (0, u.e7)([K.Z, X.Z, Q.ZP], () => (null != s ? L.JL(s, K.Z, X.Z, !1) : !!C || (null != n && L.h_(Q.ZP.getChannels(n), K.Z, X.Z).length > 0))),
        [P] = (0, S.Z)([null !== (t = null != m && null != m.id ? m.id : null != a && null != a.id ? a.id : null != O ? O.applicationId : void 0) && void 0 !== t ? t : '']),
        N = (0, u.e7)([Z.Z], () => Z.Z.getFakeGameData()),
        w = (0, u.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        D = (0, _.Z0)() && null != w && (0, y.R)({ isContextless: w.location.kind === c.X.CONTEXTLESS }),
        M = (0, u.e7)([J.Z], () => (0, k.Z)(J.Z) && (0, eo.isWindows)()),
        G = (0, u.e7)([$.Z], () => (null != l ? $.Z.findActivity(l, (e) => e.type === eu.IIU.PLAYING) : null)),
        U = null != g && g.ownerId === l && g.state !== eu.jm8.ENDED,
        V = (0, u.e7)([en.default, ee.Z], () => (null != h ? (0, I.F6)(h, en.default, ee.Z) : void 0)),
        F = (0, W.Z)(),
        [H, el] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: ea, markActivityPopoutQuickRefocusNUXAsDismissed: es } = (function (e) {
            let { embeddedActivity: t } = e,
                n = [],
                r = (0, E.wE)(d.z.ACTIVITY_POPOUT_NUX_MODAL),
                i = (0, u.e7)([ei.Z], () => ei.Z.isFocused());
            (0, y.R)({ isContextless: (null == t ? void 0 : t.location.kind) === c.X.CONTEXTLESS }) && r && i && n.push(d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [o, l] = (0, T.US)(n);
            return {
                showsActivityPopoutQuickRefocusNUX: o === d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: l
            };
        })({ embeddedActivity: O });
    return (0, r.jsx)(
        ey,
        eb(em({}, o), {
            guildId: n,
            canGoLive: M || D || void 0 !== N,
            activity: G,
            embeddedActivity: O,
            userId: l,
            runningGame: null != N ? N : a,
            application: P,
            useReducedMotion: b,
            isStreaming: U,
            channel: h,
            canStream: x,
            stream: g,
            streamMetadata: m,
            channelName: V,
            guildForConnectedChannel: f,
            streamQualityIndicator: F,
            isForceShowSharingPopout: H,
            setIsForceShowSharingPopout: el,
            showsActivityPopoutQuickRefocusNUX: ea,
            markActivityPopoutQuickRefocusNUXAsDismissed: es
        })
    );
});

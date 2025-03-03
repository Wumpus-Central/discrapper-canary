n.d(t, { Z: () => ey }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    p = n(570140),
    h = n(475179),
    f = n(925549),
    g = n(438139),
    m = n(730749),
    b = n(607070),
    v = n(636449),
    y = n(214629),
    _ = n(566620),
    O = n(317381),
    j = n(736409),
    C = n(367907),
    x = n(835473),
    P = n(413523),
    S = n(933557),
    I = n(194082),
    N = n(550532),
    Z = n(436774),
    w = n(605236),
    E = n(243778),
    T = n(594190),
    A = n(925329),
    D = n(668519),
    R = n(102172),
    L = n(74299),
    k = n(914923),
    M = n(165393),
    G = n(989941),
    B = n(690221),
    U = n(231664),
    W = n(759198),
    V = n(970731),
    F = n(131704),
    H = n(199902),
    z = n(314897),
    Y = n(592125),
    q = n(984933),
    Q = n(430824),
    K = n(131951),
    J = n(496675),
    X = n(158776),
    $ = n(699516),
    ee = n(944486),
    et = n(594174),
    en = n(449224),
    er = n(451478),
    ei = n(358085),
    el = n(345243),
    eo = n(115530),
    ea = n(339144),
    es = n(441248),
    ec = n(981631),
    eu = n(918559),
    ed = n(921944),
    ep = n(388032),
    eh = n(396706);
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
let eb = (0, g.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(el.Z, { children: t });
});
class ev extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)('div', {
            className: eh.sparkleContainer,
            children: (0, r.jsx)(d.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: eh.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(ea.J, eg({}, this.props));
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n, setIsForceShowSharingPopout: i } = this.props;
        return (0, r.jsx)(es.k, {
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
            className: eh.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(M.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon
                      })
                    : (0, r.jsx)(I.ZP, {
                          look: I.ZP.Looks.GRAY,
                          size: I.ZP.Sizes.SMALL,
                          className: eh.liveIndicator
                      }),
                (0, r.jsxs)('div', {
                    className: eh.info,
                    children: [
                        (0, r.jsx)(eo.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: eh.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(d.SrA, {
                                        size: 'xxs',
                                        color: Z.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(W.Z, {
                                        className: eh.perksDemoText,
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
        let { application: n, embeddedActivity: i, channel: l, channelName: a, guildForConnectedChannel: s, showsActivityPopoutQuickRefocusNUX: c, markActivityPopoutQuickRefocusNUXAsDismissed: u } = this.props;
        if (null == i || null == n) return null;
        let h = { start: i.connectedSince },
            f = a;
        null != s && null != l ? ((e = ec.Z5c.CHANNEL(s.id, l.id)), (f = ''.concat(f, ' / ').concat(s.name))) : null != l && (e = ec.Z5c.CHANNEL(ec.ME, l.id));
        let g = (0, r.jsx)(B.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(el.Z, {
                className: eh.channel,
                children: f
            })
        });
        t = (0, v.R)()
            ? (0, r.jsx)(eo.Z, { children: n.name })
            : (0, r.jsx)(B.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(eo.Z, {
                      className: eh.underlineOnHover,
                      children: n.name
                  })
              });
        let m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(A.Z, {
                    className: eh.gameIcon,
                    game: n,
                    size: A.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: eh.info,
                    children: [t, null != l && (0, F.Qm)(l.type) ? g : (0, r.jsx)(eb, { timestamps: h })]
                })
            ]
        });
        return (0, v.R)()
            ? (0, r.jsx)(d.yRy, {
                  position: 'top',
                  align: 'center',
                  spacing: 16,
                  shouldShow: c,
                  renderPopout: () =>
                      (0, r.jsx)(V.ZP, {
                          color: V.BD.PRIMARY,
                          header: ep.NW.string(ep.t.ON4pBg),
                          content: ep.NW.string(ep.t['8PAfND']),
                          buttonCTA: ep.NW.string(ep.t.WAI6xs),
                          buttonProps: {
                              color: d.zxk.Colors.PRIMARY,
                              look: d.zxk.Looks.LINK,
                              size: d.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              u(ed.L.USER_DISMISS);
                          },
                          caretPosition: V.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          d.P3F,
                          em(eg({}, e), {
                              className: o()(eh.gameWrapper, eh.clickableGameWrapper, { [eh.clickableGameWrapperForceHover]: c }),
                              onClick: () => {
                                  p.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), c && u(ed.L.TAKE_ACTION), (0, C.yw)(ec.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
                              },
                              children: m
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: eh.gameWrapper,
                  children: m
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: a, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, ea.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(j.j, {
                  isForceShowSharingPopout: u,
                  setIsForceShowSharingPopout: d,
                  children: (0, r.jsx)('div', {
                      className: o()(eh.panel, c),
                      children: (0, r.jsxs)('div', {
                          className: eh.body,
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
                s()(null != t, 'Channel is null during navigation click'),
                    s()(null != n, 'Activity null during navigation click'),
                    f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : ec.ME, t.id),
                    !(0, v.R)() &&
                        ((0, F.vd)(t.type) &&
                            h.Z.selectParticipant(
                                t.id,
                                (0, P.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, F.Qm)(t.type) && (0, _.tg)(eu.Ez.PANEL));
            });
    }
}
let ey = (0, m.Z)(function (e) {
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
    let o = (0, c.e7)([z.default], () => z.default.getId()),
        a = (0, c.e7)([T.ZP, en.Z], () => (0, G.Z)(T.ZP, en.Z)),
        s = (0, c.e7)([ee.Z, Y.Z], () => Y.Z.getChannel(ee.Z.getVoiceChannelId())),
        d = (0, c.e7)([O.ZP], () => O.ZP.getConnectedActivityChannelId()),
        p = (0, c.e7)([Y.Z], () => Y.Z.getChannel(d)),
        h = (0, c.e7)([Q.Z], () => Q.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [f, g] = (0, c.Wu)([H.Z], () => [H.Z.getCurrentUserActiveStream(), H.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([b.Z], () => b.Z.useReducedMotion),
        _ = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
        { showRefreshedGoLiveModal: j } = (0, D.a)({
            location: 'ActivityPanelGameCard',
            autoTrackExposure: !1
        }),
        C = (0, c.e7)([Q.Z, J.Z, q.ZP], () => (null != s ? R.JL(s, Q.Z, J.Z, !1) : !!j || (null != n && R.h_(q.ZP.getChannels(n), Q.Z, J.Z).length > 0))),
        [P] = (0, x.Z)([null !== (t = null != g && null != g.id ? g.id : null != a && null != a.id ? a.id : null != _ ? _.applicationId : void 0) && void 0 !== t ? t : '']),
        I = (0, c.e7)([N.Z], () => N.Z.getFakeGameData()),
        Z = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
        A = (0, y.Z0)() && null != Z && (0, v.R)(),
        k = (0, c.e7)([K.Z], () => (0, L.Z)(K.Z) && (0, ei.isWindows)()),
        M = (0, c.e7)([X.Z], () => (null != o ? X.Z.findActivity(o, (e) => e.type === ec.IIU.PLAYING) : null)),
        B = null != f && f.ownerId === o && f.state !== ec.jm8.ENDED,
        W = (0, c.e7)([et.default, $.Z], () => (null != p ? (0, S.F6)(p, et.default, $.Z) : void 0)),
        V = (0, U.Z)(),
        [F, el] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: eo, markActivityPopoutQuickRefocusNUXAsDismissed: ea } = (function () {
            let e = [],
                t = (0, w.wE)(u.z.ACTIVITY_POPOUT_NUX_MODAL),
                n = (0, c.e7)([er.Z], () => er.Z.isFocused());
            (0, v.R)() && t && n && e.push(u.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [r, i] = (0, E.US)(e);
            return {
                showsActivityPopoutQuickRefocusNUX: r === u.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: i
            };
        })();
    return (0, r.jsx)(
        ev,
        em(eg({}, l), {
            guildId: n,
            canGoLive: k || A || void 0 !== I,
            activity: M,
            embeddedActivity: _,
            userId: o,
            runningGame: null != I ? I : a,
            application: P,
            useReducedMotion: m,
            isStreaming: B,
            channel: p,
            canStream: C,
            stream: f,
            streamMetadata: g,
            channelName: W,
            guildForConnectedChannel: h,
            streamQualityIndicator: V,
            isForceShowSharingPopout: F,
            setIsForceShowSharingPopout: el,
            showsActivityPopoutQuickRefocusNUX: eo,
            markActivityPopoutQuickRefocusNUXAsDismissed: ea
        })
    );
});

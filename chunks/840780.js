n.d(t, { Z: () => ey }), n(388685), n(539854);
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
    _ = n(607070),
    y = n(636449),
    O = n(214629),
    v = n(566620),
    C = n(317381),
    j = n(736409),
    S = n(367907),
    E = n(835473),
    x = n(413523),
    P = n(933557),
    I = n(194082),
    w = n(550532),
    N = n(436774),
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
    V = n(759198),
    H = n(970731),
    F = n(131704),
    z = n(199902),
    W = n(314897),
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
    ep = n(864989);
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
class e_ extends i.PureComponent {
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
        let { isStreaming: e, application: t, runningGame: n, isForceShowSharingPopout: i, setIsForceShowSharingPopout: l } = this.props;
        return (0, r.jsx)(ea.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => l(!0),
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: l
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
                    : (0, r.jsx)(I.ZP, {
                          look: I.ZP.Looks.GRAY,
                          size: I.ZP.Sizes.SMALL,
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
                                        color: N.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(V.Z, {
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
            { application: n, embeddedActivity: i, channel: l, channelName: s, guildForConnectedChannel: a, showsActivityPopoutQuickRefocusNUX: c, markActivityPopoutQuickRefocusNUXAsDismissed: u, isForceShowSharingPopout: d, setIsForceShowSharingPopout: f } = this.props;
        if (null == i || null == n) return null;
        let g = { start: i.connectedSince },
            m = (0, y.R)(),
            b = s;
        null != a && null != l ? ((e = ec.Z5c.CHANNEL(a.id, l.id)), (b = ''.concat(b, ' / ').concat(a.name))) : null != l && (e = ec.Z5c.CHANNEL(ec.ME, l.id));
        let _ = (0, r.jsx)(G.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(el.Z, {
                className: ep.channel,
                children: b
            })
        });
        t = m
            ? (0, r.jsx)(eo.Z, { children: n.name })
            : (0, r.jsx)(G.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(eo.Z, {
                      className: ep.underlineOnHover,
                      children: n.name
                  })
              });
        let O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R.Z, {
                    className: ep.gameIcon,
                    game: n,
                    size: R.Z.Sizes.SMALL
                }),
                (0, r.jsx)(j.j, {
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: f,
                    children: (0, r.jsxs)('div', {
                        className: ep.info,
                        children: [t, null != l && (0, F.Qm)(l.type) ? _ : (0, r.jsx)(eb, { timestamps: g })]
                    })
                })
            ]
        });
        return m
            ? (0, r.jsx)(h.yRy, {
                  position: 'top',
                  align: 'center',
                  spacing: 16,
                  shouldShow: c,
                  renderPopout: () =>
                      (0, r.jsx)(H.ZP, {
                          color: H.BD.PRIMARY,
                          header: eh.intl.string(eh.t.ON4pBg),
                          content: eh.intl.string(eh.t['8PAfND']),
                          buttonCTA: eh.intl.string(eh.t.WAI6xs),
                          buttonProps: {
                              color: h.zxk.Colors.PRIMARY,
                              look: h.zxk.Looks.LINK,
                              size: h.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              u(ed.L.USER_DISMISS);
                          },
                          caretPosition: H.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          h.P3F,
                          em(eg({}, e), {
                              className: o()(ep.gameWrapper, ep.clickableGameWrapper, { [ep.clickableGameWrapperForceHover]: c }),
                              onClick: () => {
                                  p.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), c && u(ed.L.TAKE_ACTION), (0, S.yw)(ec.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
                              },
                              children: O
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: ep.gameWrapper,
                  children: O
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: s, activity: a, className: c } = this.props;
        return i || (((0, es.y)(s, a, t) || e) && (null != n || null != t))
            ? (0, r.jsx)('div', {
                  className: o()(ep.panel, c),
                  children: (0, r.jsxs)('div', {
                      className: ep.body,
                      children: [null == n || (i && (null == l ? void 0 : l.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            ef(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                a()(null != n, 'Activity cannot be null during navigation click');
                let r = n.location.kind === c.E.CONTEXTLESS;
                if (!(0, y.R)() && r) return void (0, v.tg)(eu.Ez.PANEL);
                a()(null != t, 'Channel cannot be null during navigation click'),
                    g.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ec.ME, t.id),
                    !(0, y.R)() &&
                        ((0, F.vd)(t.type) &&
                            f.Z.selectParticipant(
                                t.id,
                                (0, x.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, F.Qm)(t.type) && (0, v.tg)(eu.Ez.PANEL));
            });
    }
}
let ey = (0, b.Z)(function (e) {
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
    let o = (0, u.e7)([W.default], () => W.default.getId()),
        s = (0, u.e7)([A.ZP, en.Z], () => (0, U.Z)(A.ZP, en.Z)),
        a = (0, u.e7)([ee.Z, Y.Z], () => Y.Z.getChannel(ee.Z.getVoiceChannelId())),
        c = (0, u.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        h = (0, u.e7)([Y.Z], () => Y.Z.getChannel(c)),
        p = (0, u.e7)([q.Z], () => q.Z.getGuild(null == h ? void 0 : h.guild_id)),
        [f, g] = (0, u.Wu)([z.Z], () => [z.Z.getCurrentUserActiveStream(), z.Z.getStreamerActiveStreamMetadata()]),
        m = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
        b = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        v = (0, u.e7)([q.Z, X.Z, K.ZP], () => (null != a ? D.JL(a, q.Z, X.Z, !1) : null != n && D.h_(K.ZP.getChannels(n), q.Z, X.Z).length > 0)),
        [j] = (0, E.Z)([null != (t = null != g && null != g.id ? g.id : null != s && null != s.id ? s.id : null != b ? b.applicationId : void 0) ? t : '']),
        S = (0, u.e7)([w.Z], () => w.Z.getFakeGameData()),
        x = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        I = (0, O.Z0)() && null != x && (0, y.R)(),
        N = (0, u.e7)([Q.Z], () => (0, L.Z)(Q.Z) && (0, ei.isWindows)()),
        R = (0, u.e7)([J.Z], () => (null != o ? J.Z.findActivity(o, (e) => e.type === ec.IIU.PLAYING) : null)),
        k = null != f && f.ownerId === o && f.state !== ec.jm8.ENDED,
        M = (0, u.e7)([et.default, $.Z], () => (null != h ? (0, P.F6)(h, et.default, $.Z) : void 0)),
        G = (0, B.Z)(),
        [V, H] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: F, markActivityPopoutQuickRefocusNUXAsDismissed: el } = (function () {
            let e = [],
                t = (0, Z.wE)(d.z.ACTIVITY_POPOUT_NUX_MODAL),
                n = (0, u.e7)([er.Z], () => er.Z.isFocused());
            (0, y.R)() && t && n && e.push(d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [r, i] = (0, T.US)(e);
            return {
                showsActivityPopoutQuickRefocusNUX: r === d.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: i
            };
        })();
    return (0, r.jsx)(
        e_,
        em(eg({}, l), {
            guildId: n,
            canGoLive: N || I || void 0 !== S,
            activity: R,
            embeddedActivity: b,
            userId: o,
            runningGame: null != S ? S : s,
            application: j,
            useReducedMotion: m,
            isStreaming: k,
            channel: h,
            canStream: v,
            stream: f,
            streamMetadata: g,
            channelName: M,
            guildForConnectedChannel: p,
            streamQualityIndicator: G,
            isForceShowSharingPopout: V,
            setIsForceShowSharingPopout: H,
            showsActivityPopoutQuickRefocusNUX: F,
            markActivityPopoutQuickRefocusNUXAsDismissed: el
        })
    );
});

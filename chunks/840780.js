n.d(t, { Z: () => ey }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(570140),
    p = n(475179),
    f = n(925549),
    g = n(438139),
    m = n(730749),
    b = n(607070),
    y = n(636449),
    _ = n(214629),
    O = n(566620),
    v = n(317381),
    C = n(736409),
    j = n(367907),
    x = n(835473),
    S = n(413523),
    E = n(933557),
    I = n(194082),
    P = n(550532),
    w = n(436774),
    N = n(605236),
    Z = n(243778),
    T = n(594190),
    A = n(925329),
    R = n(102172),
    D = n(74299),
    L = n(914923),
    k = n(165393),
    M = n(989941),
    U = n(690221),
    G = n(231664),
    B = n(759198),
    V = n(970731),
    F = n(131704),
    H = n(199902),
    z = n(314897),
    W = n(592125),
    Y = n(984933),
    K = n(430824),
    q = n(131951),
    Q = n(496675),
    X = n(158776),
    J = n(699516),
    $ = n(944486),
    ee = n(594174),
    et = n(449224),
    en = n(451478),
    er = n(358085),
    ei = n(345243),
    el = n(115530),
    eo = n(339144),
    es = n(441248),
    ea = n(981631),
    ec = n(918559),
    eu = n(921944),
    ed = n(388032),
    eh = n(864989);
function ep(e, t, n) {
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
function ef(e) {
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
                ep(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
let em = (0, g.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(ei.Z, { children: t });
});
class eb extends i.PureComponent {
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
        return (0, r.jsx)(eo.J, ef({}, this.props));
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
            { title: i, sanitizedTitle: l } = (0, L.Z)(t);
        return (0, r.jsxs)('div', {
            className: eh.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(k.Z, {
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
                        (0, r.jsx)(el.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: eh.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(d.SrA, {
                                        size: 'xxs',
                                        color: w.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(B.Z, {
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
        let e,
            t,
            { application: n, embeddedActivity: i, channel: l, channelName: s, guildForConnectedChannel: a, showsActivityPopoutQuickRefocusNUX: c, markActivityPopoutQuickRefocusNUXAsDismissed: u } = this.props;
        if (null == i || null == n) return null;
        let p = { start: i.connectedSince },
            f = (0, y.R)(),
            g = s;
        null != a && null != l ? ((e = ea.Z5c.CHANNEL(a.id, l.id)), (g = ''.concat(g, ' / ').concat(a.name))) : null != l && (e = ea.Z5c.CHANNEL(ea.ME, l.id));
        let m = (0, r.jsx)(U.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(ei.Z, {
                className: eh.channel,
                children: g
            })
        });
        t = f
            ? (0, r.jsx)(el.Z, { children: n.name })
            : (0, r.jsx)(U.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(el.Z, {
                      className: eh.underlineOnHover,
                      children: n.name
                  })
              });
        let b = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(A.Z, {
                    className: eh.gameIcon,
                    game: n,
                    size: A.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: eh.info,
                    children: [t, null != l && (0, F.Qm)(l.type) ? m : (0, r.jsx)(em, { timestamps: p })]
                })
            ]
        });
        return f
            ? (0, r.jsx)(d.yRy, {
                  position: 'top',
                  align: 'center',
                  spacing: 16,
                  shouldShow: c,
                  renderPopout: () =>
                      (0, r.jsx)(V.ZP, {
                          color: V.BD.PRIMARY,
                          header: ed.intl.string(ed.t.ON4pBg),
                          content: ed.intl.string(ed.t['8PAfND']),
                          buttonCTA: ed.intl.string(ed.t.WAI6xs),
                          buttonProps: {
                              color: d.zxk.Colors.PRIMARY,
                              look: d.zxk.Looks.LINK,
                              size: d.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              u(eu.L.USER_DISMISS);
                          },
                          caretPosition: V.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          d.P3F,
                          eg(ef({}, e), {
                              className: o()(eh.gameWrapper, eh.clickableGameWrapper, { [eh.clickableGameWrapperForceHover]: c }),
                              onClick: () => {
                                  h.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), c && u(eu.L.TAKE_ACTION), (0, j.yw)(ea.rMx.ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED);
                              },
                              children: b
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: eh.gameWrapper,
                  children: b
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: s, activity: a, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, eo.y)(s, a, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(C.j, {
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
            ep(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                a()(null != t, 'Channel is null during navigation click'),
                    a()(null != n, 'Activity null during navigation click'),
                    f.Z.channelListScrollTo(null != (e = t.guild_id) ? e : ea.ME, t.id),
                    !(0, y.R)() &&
                        ((0, F.vd)(t.type) &&
                            p.Z.selectParticipant(
                                t.id,
                                (0, S.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, F.Qm)(t.type) && (0, O.tg)(ec.Ez.PANEL));
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
        s = (0, c.e7)([T.ZP, et.Z], () => (0, M.Z)(T.ZP, et.Z)),
        a = (0, c.e7)([$.Z, W.Z], () => W.Z.getChannel($.Z.getVoiceChannelId())),
        d = (0, c.e7)([v.ZP], () => v.ZP.getConnectedActivityChannelId()),
        h = (0, c.e7)([W.Z], () => W.Z.getChannel(d)),
        p = (0, c.e7)([K.Z], () => K.Z.getGuild(null == h ? void 0 : h.guild_id)),
        [f, g] = (0, c.Wu)([H.Z], () => [H.Z.getCurrentUserActiveStream(), H.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([b.Z], () => b.Z.useReducedMotion),
        O = (0, c.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        C = (0, c.e7)([K.Z, Q.Z, Y.ZP], () => (null != a ? R.JL(a, K.Z, Q.Z, !1) : null != n && R.h_(Y.ZP.getChannels(n), K.Z, Q.Z).length > 0)),
        [j] = (0, x.Z)([null != (t = null != g && null != g.id ? g.id : null != s && null != s.id ? s.id : null != O ? O.applicationId : void 0) ? t : '']),
        S = (0, c.e7)([P.Z], () => P.Z.getFakeGameData()),
        I = (0, c.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        w = (0, _.Z0)() && null != I && (0, y.R)(),
        A = (0, c.e7)([q.Z], () => (0, D.Z)(q.Z) && (0, er.isWindows)()),
        L = (0, c.e7)([X.Z], () => (null != o ? X.Z.findActivity(o, (e) => e.type === ea.IIU.PLAYING) : null)),
        k = null != f && f.ownerId === o && f.state !== ea.jm8.ENDED,
        U = (0, c.e7)([ee.default, J.Z], () => (null != h ? (0, E.F6)(h, ee.default, J.Z) : void 0)),
        B = (0, G.Z)(),
        [V, F] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: ei, markActivityPopoutQuickRefocusNUXAsDismissed: el } = (function () {
            let e = [],
                t = (0, N.wE)(u.z.ACTIVITY_POPOUT_NUX_MODAL),
                n = (0, c.e7)([en.Z], () => en.Z.isFocused());
            (0, y.R)() && t && n && e.push(u.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [r, i] = (0, Z.US)(e);
            return {
                showsActivityPopoutQuickRefocusNUX: r === u.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: i
            };
        })();
    return (0, r.jsx)(
        eb,
        eg(ef({}, l), {
            guildId: n,
            canGoLive: A || w || void 0 !== S,
            activity: L,
            embeddedActivity: O,
            userId: o,
            runningGame: null != S ? S : s,
            application: j,
            useReducedMotion: m,
            isStreaming: k,
            channel: h,
            canStream: C,
            stream: f,
            streamMetadata: g,
            channelName: U,
            guildForConnectedChannel: p,
            streamQualityIndicator: B,
            isForceShowSharingPopout: V,
            setIsForceShowSharingPopout: F,
            showsActivityPopoutQuickRefocusNUX: ei,
            markActivityPopoutQuickRefocusNUXAsDismissed: el
        })
    );
});

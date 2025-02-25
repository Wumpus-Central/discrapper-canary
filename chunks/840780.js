n.d(t, { Z: () => ev }), n(47120), n(653041);
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
    O = n(566620),
    j = n(317381),
    _ = n(736409),
    C = n(835473),
    x = n(413523),
    P = n(933557),
    N = n(194082),
    S = n(550532),
    I = n(436774),
    Z = n(605236),
    w = n(243778),
    E = n(594190),
    T = n(925329),
    D = n(668519),
    A = n(102172),
    R = n(74299),
    L = n(914923),
    k = n(165393),
    M = n(989941),
    G = n(690221),
    B = n(231664),
    U = n(759198),
    W = n(970731),
    V = n(131704),
    F = n(199902),
    H = n(314897),
    z = n(592125),
    q = n(984933),
    Y = n(430824),
    Q = n(131951),
    K = n(496675),
    J = n(158776),
    X = n(699516),
    $ = n(944486),
    ee = n(594174),
    et = n(449224),
    en = n(451478),
    er = n(358085),
    ei = n(345243),
    el = n(115530),
    eo = n(339144),
    ea = n(441248),
    es = n(981631),
    ec = n(918559),
    eu = n(921944),
    ed = n(388032),
    ep = n(767955);
function eh(e, t, n) {
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
                eh(e, t, n[t]);
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
            className: ep.sparkleContainer,
            children: (0, r.jsx)(d.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: ep.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(eo.J, ef({}, this.props));
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
            { title: i, sanitizedTitle: l } = (0, L.Z)(t);
        return (0, r.jsxs)('div', {
            className: ep.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(k.Z, {
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
                        (0, r.jsx)(el.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: ep.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(d.SrA, {
                                        size: 'xxs',
                                        color: I.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(U.Z, {
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
        let e, t;
        let { application: n, embeddedActivity: i, channel: l, channelName: a, guildForConnectedChannel: s, showsActivityPopoutQuickRefocusNUX: c, markActivityPopoutQuickRefocusNUXAsDismissed: u } = this.props;
        if (null == i || null == n) return null;
        let h = { start: i.connectedSince },
            f = a;
        null != s && null != l ? ((e = es.Z5c.CHANNEL(s.id, l.id)), (f = ''.concat(f, ' / ').concat(s.name))) : null != l && (e = es.Z5c.CHANNEL(es.ME, l.id));
        let g = (0, r.jsx)(G.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(ei.Z, {
                className: ep.channel,
                children: f
            })
        });
        t = (0, v.R)()
            ? (0, r.jsx)(el.Z, { children: n.name })
            : (0, r.jsx)(G.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(el.Z, {
                      className: ep.underlineOnHover,
                      children: n.name
                  })
              });
        let m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(T.Z, {
                    className: ep.gameIcon,
                    game: n,
                    size: T.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: ep.info,
                    children: [t, null != l && (0, V.Qm)(l.type) ? g : (0, r.jsx)(em, { timestamps: h })]
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
                      (0, r.jsx)(W.ZP, {
                          color: W.BD.PRIMARY,
                          header: ed.NW.string(ed.t.ON4pBg),
                          content: ed.NW.string(ed.t['8PAfND']),
                          buttonCTA: ed.NW.string(ed.t.WAI6xs),
                          buttonProps: {
                              color: d.zxk.Colors.PRIMARY,
                              look: d.zxk.Looks.LINK,
                              size: d.zxk.Sizes.TINY
                          },
                          onClick: () => {
                              u(eu.L.USER_DISMISS);
                          },
                          caretPosition: W.DF.BOTTOM_CENTER
                      }),
                  children: (e) =>
                      (0, r.jsx)(
                          d.P3F,
                          eg(ef({}, e), {
                              className: o()(ep.gameWrapper, ep.clickableGameWrapper, { [ep.clickableGameWrapperForceHover]: c }),
                              onClick: () => {
                                  p.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }), c && u(eu.L.TAKE_ACTION);
                              },
                              children: m
                          })
                      )
              })
            : (0, r.jsx)('div', {
                  className: ep.gameWrapper,
                  children: m
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: a, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, eo.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(_.j, {
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
            eh(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'),
                    s()(null != n, 'Activity null during navigation click'),
                    f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : es.ME, t.id),
                    !(0, v.R)() &&
                        ((0, V.vd)(t.type) &&
                            h.Z.selectParticipant(
                                t.id,
                                (0, x.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, V.Qm)(t.type) && (0, O.tg)(ec.Ez.PANEL));
            });
    }
}
let ev = (0, m.Z)(function (e) {
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
    let o = (0, c.e7)([H.default], () => H.default.getId()),
        a = (0, c.e7)([E.ZP, et.Z], () => (0, M.Z)(E.ZP, et.Z)),
        s = (0, c.e7)([$.Z, z.Z], () => z.Z.getChannel($.Z.getVoiceChannelId())),
        d = (0, c.e7)([j.ZP], () => j.ZP.getConnectedActivityChannelId()),
        p = (0, c.e7)([z.Z], () => z.Z.getChannel(d)),
        h = (0, c.e7)([Y.Z], () => Y.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [f, g] = (0, c.Wu)([F.Z], () => [F.Z.getCurrentUserActiveStream(), F.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([b.Z], () => b.Z.useReducedMotion),
        O = (0, c.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        { showRefreshedGoLiveModal: _ } = (0, D.a)({
            location: 'ActivityPanelGameCard',
            autoTrackExposure: !1
        }),
        x = (0, c.e7)([Y.Z, K.Z, q.ZP], () => (null != s ? A.JL(s, Y.Z, K.Z, !1) : !!_ || (null != n && A.h_(q.ZP.getChannels(n), Y.Z, K.Z).length > 0))),
        [N] = (0, C.Z)([null !== (t = null != g && null != g.id ? g.id : null != a && null != a.id ? a.id : null != O ? O.applicationId : void 0) && void 0 !== t ? t : '']),
        I = (0, c.e7)([S.Z], () => S.Z.getFakeGameData()),
        T = (0, c.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        L = (0, y.Z0)() && null != T && (0, v.R)(),
        k = (0, c.e7)([Q.Z], () => (0, R.Z)(Q.Z) && (0, er.isWindows)()),
        G = (0, c.e7)([J.Z], () => (null != o ? J.Z.findActivity(o, (e) => e.type === es.IIU.PLAYING) : null)),
        U = null != f && f.ownerId === o && f.state !== es.jm8.ENDED,
        W = (0, c.e7)([ee.default, X.Z], () => (null != p ? (0, P.F6)(p, ee.default, X.Z) : void 0)),
        V = (0, B.Z)(),
        [ei, el] = i.useState(!1),
        { showsActivityPopoutQuickRefocusNUX: eo, markActivityPopoutQuickRefocusNUXAsDismissed: ea } = (function () {
            let e = [],
                t = (0, Z.wE)(u.z.ACTIVITY_POPOUT_NUX_MODAL),
                n = (0, c.e7)([en.Z], () => en.Z.isFocused());
            (0, v.R)() && t && n && e.push(u.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP);
            let [r, i] = (0, w.US)(e);
            return {
                showsActivityPopoutQuickRefocusNUX: r === u.z.ACTIVITY_POPOUT_NUX_QUICK_REFOCUS_TOOLTIP,
                markActivityPopoutQuickRefocusNUXAsDismissed: i
            };
        })();
    return (0, r.jsx)(
        eb,
        eg(ef({}, l), {
            guildId: n,
            canGoLive: k || L || void 0 !== I,
            activity: G,
            embeddedActivity: O,
            userId: o,
            runningGame: null != I ? I : a,
            application: N,
            useReducedMotion: m,
            isStreaming: U,
            channel: p,
            canStream: x,
            stream: f,
            streamMetadata: g,
            channelName: W,
            guildForConnectedChannel: h,
            streamQualityIndicator: V,
            isForceShowSharingPopout: ei,
            setIsForceShowSharingPopout: el,
            showsActivityPopoutQuickRefocusNUX: eo,
            markActivityPopoutQuickRefocusNUXAsDismissed: ea
        })
    );
});

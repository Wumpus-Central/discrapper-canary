n.d(t, { Z: () => eu }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(475179),
    h = n(925549),
    f = n(438139),
    g = n(730749),
    m = n(607070),
    b = n(636449),
    v = n(214629),
    y = n(566620),
    O = n(317381),
    j = n(736409),
    _ = n(835473),
    x = n(413523),
    C = n(933557),
    P = n(194082),
    S = n(550532),
    N = n(436774),
    Z = n(594190),
    I = n(925329),
    w = n(668519),
    E = n(102172),
    T = n(74299),
    D = n(914923),
    A = n(165393),
    R = n(989941),
    L = n(690221),
    M = n(231664),
    k = n(759198),
    G = n(131704),
    B = n(199902),
    U = n(314897),
    W = n(592125),
    V = n(984933),
    F = n(430824),
    H = n(131951),
    z = n(496675),
    q = n(158776),
    Y = n(699516),
    Q = n(944486),
    K = n(594174),
    J = n(449224),
    X = n(358085),
    $ = n(345243),
    ee = n(115530),
    et = n(339144),
    en = n(441248),
    er = n(981631),
    ei = n(918559),
    el = n(767955);
function eo(e, t, n) {
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
function ea(e) {
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
                eo(e, t, n[t]);
            });
    }
    return e;
}
let es = (0, f.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)($.Z, { children: t });
});
class ec extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)('div', {
            className: el.sparkleContainer,
            children: (0, r.jsx)(u.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: el.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(et.J, ea({}, this.props));
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n, setIsForceShowSharingPopout: i } = this.props;
        return (0, r.jsx)(en.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => i(!0)
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: l } = (0, D.Z)(t);
        return (0, r.jsxs)('div', {
            className: el.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(A.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon
                      })
                    : (0, r.jsx)(P.ZP, {
                          look: P.ZP.Looks.GRAY,
                          size: P.ZP.Sizes.SMALL,
                          className: el.liveIndicator
                      }),
                (0, r.jsxs)('div', {
                    className: el.info,
                    children: [
                        (0, r.jsx)(ee.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: el.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(u.SrA, {
                                        size: 'xxs',
                                        color: N.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(k.Z, {
                                        className: el.perksDemoText,
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
        let { application: n, embeddedActivity: i, channel: l, channelName: a, guildForConnectedChannel: s } = this.props;
        if (null == i || null == n) return null;
        let c = { start: i.connectedSince },
            p = a;
        null != s && null != l ? ((e = er.Z5c.CHANNEL(s.id, l.id)), (p = ''.concat(p, ' / ').concat(s.name))) : null != l && (e = er.Z5c.CHANNEL(er.ME, l.id));
        let h = (0, r.jsx)(L.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)($.Z, {
                className: el.channel,
                children: p
            })
        });
        t = (0, b.R)()
            ? (0, r.jsx)(ee.Z, { children: n.name })
            : (0, r.jsx)(L.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)(ee.Z, {
                      className: el.underlineOnHover,
                      children: n.name
                  })
              });
        let f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.Z, {
                    className: el.gameIcon,
                    game: n,
                    size: I.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: el.info,
                    children: [t, null != l && (0, G.Qm)(l.type) ? h : (0, r.jsx)(es, { timestamps: c })]
                })
            ]
        });
        return (0, b.R)()
            ? (0, r.jsx)(u.P3F, {
                  className: o()(el.gameWrapper, el.clickableGameWrapper),
                  onClick: () => {
                      d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
                  },
                  children: f
              })
            : (0, r.jsx)('div', {
                  className: el.gameWrapper,
                  children: f
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: a, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, et.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(j.j, {
                  isForceShowSharingPopout: u,
                  setIsForceShowSharingPopout: d,
                  children: (0, r.jsx)('div', {
                      className: o()(el.panel, c),
                      children: (0, r.jsxs)('div', {
                          className: el.body,
                          children: [null == n || (i && (null == l ? void 0 : l.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            eo(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'),
                    s()(null != n, 'Activity null during navigation click'),
                    h.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : er.ME, t.id),
                    !(0, b.R)() &&
                        ((0, G.vd)(t.type) &&
                            p.Z.selectParticipant(
                                t.id,
                                (0, x.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, G.Qm)(t.type) && (0, y.tg)(ei.Ez.PANEL));
            });
    }
}
let eu = (0, g.Z)(function (e) {
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId']);
    let s = (0, c.e7)([U.default], () => U.default.getId()),
        u = (0, c.e7)([Z.ZP, J.Z], () => (0, R.Z)(Z.ZP, J.Z)),
        d = (0, c.e7)([Q.Z, W.Z], () => W.Z.getChannel(Q.Z.getVoiceChannelId())),
        p = (0, c.e7)([O.ZP], () => O.ZP.getConnectedActivityChannelId()),
        h = (0, c.e7)([W.Z], () => W.Z.getChannel(p)),
        f = (0, c.e7)([F.Z], () => F.Z.getGuild(null == h ? void 0 : h.guild_id)),
        [g, y] = (0, c.Wu)([B.Z], () => [B.Z.getCurrentUserActiveStream(), B.Z.getStreamerActiveStreamMetadata()]),
        j = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        x = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
        { showRefreshedGoLiveModal: P } = (0, w.a)({
            location: 'ActivityPanelGameCard',
            autoTrackExposure: !1
        }),
        N = (0, c.e7)([F.Z, z.Z, V.ZP], () => (null != d ? E.JL(d, F.Z, z.Z, !1) : !!P || (null != o && E.h_(V.ZP.getChannels(o), F.Z, z.Z).length > 0))),
        [I] = (0, _.Z)([null !== (l = null != y && null != y.id ? y.id : null != u && null != u.id ? u.id : null != x ? x.applicationId : void 0) && void 0 !== l ? l : '']),
        D = (0, c.e7)([S.Z], () => S.Z.getFakeGameData()),
        A = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
        L = (0, v.Z0)() && null != A && (0, b.R)(),
        k = (0, c.e7)([H.Z], () => (0, T.Z)(H.Z) && (0, X.isWindows)()),
        G = (0, c.e7)([q.Z], () => (null != s ? q.Z.findActivity(s, (e) => e.type === er.IIU.PLAYING) : null)),
        $ = null != g && g.ownerId === s && g.state !== er.jm8.ENDED,
        ee = (0, c.e7)([K.default, Y.Z], () => (null != h ? (0, C.F6)(h, K.default, Y.Z) : void 0)),
        et = (0, M.Z)(),
        [en, ei] = i.useState(!1);
    return (0, r.jsx)(
        ec,
        ((t = ea({}, a)),
        (n = n =
            {
                guildId: o,
                canGoLive: k || L || void 0 !== D,
                activity: G,
                embeddedActivity: x,
                userId: s,
                runningGame: null != D ? D : u,
                application: I,
                useReducedMotion: j,
                isStreaming: $,
                channel: h,
                canStream: N,
                stream: g,
                streamMetadata: y,
                channelName: ee,
                guildForConnectedChannel: f,
                streamQualityIndicator: et,
                isForceShowSharingPopout: en,
                setIsForceShowSharingPopout: ei
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
        t)
    );
});

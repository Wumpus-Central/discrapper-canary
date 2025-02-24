n.d(t, { Z: () => ec }), n(47120);
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
    _ = n(317381),
    O = n(736409),
    j = n(835473),
    x = n(413523),
    C = n(933557),
    S = n(194082),
    P = n(550532),
    N = n(436774),
    I = n(594190),
    Z = n(925329),
    w = n(102172),
    E = n(74299),
    T = n(914923),
    A = n(165393),
    D = n(989941),
    R = n(690221),
    L = n(231664),
    k = n(759198),
    M = n(131704),
    G = n(199902),
    B = n(314897),
    U = n(592125),
    W = n(984933),
    V = n(430824),
    F = n(131951),
    H = n(496675),
    z = n(158776),
    q = n(699516),
    Y = n(944486),
    Q = n(594174),
    J = n(449224),
    K = n(358085),
    X = n(345243),
    $ = n(115530),
    ee = n(339144),
    et = n(441248),
    en = n(981631),
    er = n(918559),
    ei = n(767955);
function el(e, t, n) {
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
function eo(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
let ea = (0, f.Z)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(X.Z, { children: t });
});
class es extends i.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, r.jsx)('div', {
            className: ei.sparkleContainer,
            children: (0, r.jsx)(u.Fmz, {
                importData: t,
                shouldAnimate: !e,
                className: ei.sparkles
            })
        });
    }
    renderActions() {
        return (0, r.jsx)(ee.J, eo({}, this.props));
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n, setIsForceShowSharingPopout: i } = this.props;
        return (0, r.jsx)(et.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => i(!0)
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: l } = (0, T.Z)(t);
        return (0, r.jsxs)('div', {
            className: ei.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(A.Z, { title: l })
                    : (0, r.jsx)(S.ZP, {
                          look: S.ZP.Looks.GRAY,
                          size: S.ZP.Sizes.SMALL,
                          className: ei.liveIndicator
                      }),
                (0, r.jsxs)('div', {
                    className: ei.info,
                    children: [
                        (0, r.jsx)($.Z, { children: i }),
                        null != n &&
                            (0, r.jsxs)('div', {
                                className: ei.perksDemoContainer,
                                children: [
                                    (0, r.jsx)(u.SrA, {
                                        size: 'xxs',
                                        color: N.JX.PREMIUM_TIER_2
                                    }),
                                    (0, r.jsx)(k.Z, {
                                        className: ei.perksDemoText,
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
        if (null == i || null == l || null == n) return null;
        let c = { start: i.connectedSince },
            p = a;
        null != s ? ((e = en.Z5c.CHANNEL(s.id, l.id)), (p = ''.concat(p, ' / ').concat(s.name))) : (e = en.Z5c.CHANNEL(en.ME, l.id));
        let h = (0, r.jsx)(R.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, r.jsx)(X.Z, {
                className: ei.channel,
                children: p
            })
        });
        t = (0, b.R)()
            ? (0, r.jsx)($.Z, { children: n.name })
            : (0, r.jsx)(R.Z, {
                  href: e,
                  onClick: this.handleApplicationOrChannelLinkClick,
                  children: (0, r.jsx)($.Z, {
                      className: ei.underlineOnHover,
                      children: n.name
                  })
              });
        let f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Z.Z, {
                    className: ei.gameIcon,
                    game: n,
                    size: Z.Z.Sizes.SMALL
                }),
                (0, r.jsxs)('div', {
                    className: ei.info,
                    children: [t, (0, M.Qm)(l.type) ? h : (0, r.jsx)(ea, { timestamps: c })]
                })
            ]
        });
        return (0, b.R)()
            ? (0, r.jsx)(u.P3F, {
                  className: o()(ei.gameWrapper, ei.clickableGameWrapper),
                  onClick: () => {
                      d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
                  },
                  children: f
              })
            : (0, r.jsx)('div', {
                  className: ei.gameWrapper,
                  children: f
              });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: a, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return i || (((0, ee.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)(O.j, {
                  isForceShowSharingPopout: u,
                  setIsForceShowSharingPopout: d,
                  children: (0, r.jsx)('div', {
                      className: o()(ei.panel, c),
                      children: (0, r.jsxs)('div', {
                          className: ei.body,
                          children: [null == n || (i && (null == l ? void 0 : l.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            el(this, 'handleApplicationOrChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'),
                    s()(null != n, 'Activity null during navigation click'),
                    h.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : en.ME, t.id),
                    !(0, b.R)() &&
                        ((0, M.vd)(t.type) &&
                            p.Z.selectParticipant(
                                t.id,
                                (0, x.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, M.Qm)(t.type) && (0, y.tg)(er.Ez.PANEL));
            });
    }
}
let ec = (0, g.Z)(function (e) {
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
    let s = (0, c.e7)([B.default], () => B.default.getId()),
        u = (0, c.e7)([I.ZP, J.Z], () => (0, D.Z)(I.ZP, J.Z)),
        d = (0, c.e7)([Y.Z, U.Z], () => U.Z.getChannel(Y.Z.getVoiceChannelId())),
        p = (0, c.e7)([_.ZP], () => _.ZP.getConnectedActivityChannelId()),
        h = (0, c.e7)([U.Z], () => U.Z.getChannel(p)),
        f = (0, c.e7)([V.Z], () => V.Z.getGuild(null == h ? void 0 : h.guild_id)),
        [g, y] = (0, c.Wu)([G.Z], () => [G.Z.getCurrentUserActiveStream(), G.Z.getStreamerActiveStreamMetadata()]),
        O = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        x = (0, c.e7)([_.ZP], () => (null != h ? _.ZP.getSelfEmbeddedActivityForChannel(h.id) : null)),
        S = (0, c.e7)([V.Z, H.Z, W.ZP], () => (null != d ? w.JL(d, V.Z, H.Z, !1) : null != o && w.h_(W.ZP.getChannels(o), V.Z, H.Z).length > 0)),
        [N] = (0, j.Z)([null !== (l = null != y && null != y.id ? y.id : null != u && null != u.id ? u.id : null != x ? x.applicationId : void 0) && void 0 !== l ? l : '']),
        Z = (0, c.e7)([P.Z], () => P.Z.getFakeGameData()),
        T = (0, c.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        A = (0, v.Z0)() && null != T && (0, b.R)(),
        R = (0, c.e7)([F.Z], () => (0, E.Z)(F.Z) && (0, K.isWindows)()),
        k = (0, c.e7)([z.Z], () => (null != s ? z.Z.findActivity(s, (e) => e.type === en.IIU.PLAYING) : null)),
        M = null != g && g.ownerId === s && g.state !== en.jm8.ENDED,
        X = (0, c.e7)([Q.default, q.Z], () => (null != h ? (0, C.F6)(h, Q.default, q.Z) : void 0)),
        $ = (0, L.Z)(),
        [ee, et] = i.useState(!1);
    return (0, r.jsx)(
        es,
        ((t = eo({}, a)),
        (n = n =
            {
                guildId: o,
                canGoLive: R || A || void 0 !== Z,
                activity: k,
                embeddedActivity: x,
                userId: s,
                runningGame: null != Z ? Z : u,
                application: N,
                useReducedMotion: O,
                isStreaming: M,
                channel: h,
                canStream: S,
                stream: g,
                streamMetadata: y,
                channelName: X,
                guildForConnectedChannel: f,
                streamQualityIndicator: $,
                isForceShowSharingPopout: ee,
                setIsForceShowSharingPopout: et
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

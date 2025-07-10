(n.d(t, { Z: () => eu }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    p = n(925549),
    f = n(438139),
    g = n(730749),
    m = n(607070),
    b = n(636449),
    _ = n(566620),
    O = n(317381),
    y = n(889441),
    v = n(736409),
    C = n(835473),
    j = n(413523),
    E = n(933557),
    S = n(194082),
    x = n(550532),
    I = n(436774),
    P = n(594190),
    N = n(925329),
    w = n(102172),
    Z = n(74299),
    T = n(914923),
    A = n(165393),
    R = n(989941),
    D = n(690221),
    L = n(522474),
    M = n(231664),
    k = n(759198),
    U = n(131704),
    G = n(199902),
    B = n(314897),
    V = n(592125),
    F = n(984933),
    H = n(430824),
    z = n(131951),
    W = n(496675),
    K = n(158776),
    Y = n(699516),
    q = n(944486),
    X = n(594174),
    Q = n(449224),
    J = n(358085),
    $ = n(345243),
    ee = n(115530),
    et = n(339144),
    en = n(441248),
    er = n(981631),
    ei = n(918559),
    el = n(864989);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eo(e, t, n[t]);
            }));
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
        let { isStreaming: e, application: t, runningGame: n, isForceShowSharingPopout: i, setIsForceShowSharingPopout: l } = this.props;
        return (0, r.jsx)(en.k, {
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
            { title: i, sanitizedTitle: l } = (0, T.Z)(t);
        return (0, r.jsxs)('div', {
            className: el.gameWrapper,
            children: [
                e
                    ? (0, r.jsx)(A.Z, {
                          title: l,
                          icon: null == t ? void 0 : t.sourceIcon
                      })
                    : (0, r.jsx)(S.ZP, {
                          look: S.ZP.Looks.GRAY,
                          size: S.ZP.Sizes.SMALL,
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
                                        color: I.JX.PREMIUM_TIER_2
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
        let e,
            { application: t, embeddedActivity: n, channel: i, channelName: l, guildForConnectedChannel: o, isForceShowSharingPopout: a, setIsForceShowSharingPopout: s } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            u = l;
        null != o && null != i ? ((e = er.Z5c.CHANNEL(o.id, i.id)), (u = ''.concat(u, ' / ').concat(o.name))) : null != i && (e = er.Z5c.CHANNEL(er.ME, i.id));
        let d = (0, r.jsx)(D.Z, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)($.Z, {
                    className: el.channel,
                    children: u
                })
            }),
            h = (0, r.jsx)(D.Z, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(ee.Z, {
                    className: el.underlineOnHover,
                    children: t.name
                })
            }),
            p = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(N.Z, {
                        className: el.gameIcon,
                        game: t,
                        size: N.Z.Sizes.SMALL
                    }),
                    (0, r.jsx)(v.j, {
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: s,
                        children: (0, r.jsxs)('div', {
                            className: el.info,
                            children: [h, null != i && (0, U.Qm)(i.type) ? d : (0, r.jsx)(es, { timestamps: c })]
                        })
                    })
                ]
            });
        return (0, r.jsx)('div', {
            className: el.gameWrapper,
            children: p
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: i, streamMetadata: l, application: a, activity: s, className: c } = this.props;
        return i || (((0, et.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, r.jsx)('div', {
                  className: o()(el.panel, c),
                  children: (0, r.jsxs)('div', {
                      className: el.body,
                      children: [null == n || (i && (null == l ? void 0 : l.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                  })
              })
            : null;
    }
    constructor(...e) {
        (super(...e),
            eo(this, 'activityPopoutTargetRef', i.createRef()),
            eo(this, 'handleApplicationLinkClick', () => {
                let { isActivityPopoutOpen: e } = this.props;
                (this.handleChannelLinkClick(), e && d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }));
            }),
            eo(this, 'handleChannelLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                (s()(null != n, 'Activity cannot be null during navigation click'),
                    s()(null != t, 'Channel cannot be null during navigation click'),
                    p.Z.channelListScrollTo(null != (e = t.guild_id) ? e : er.ME, t.id),
                    !r &&
                        ((0, U.vd)(t.type) &&
                            h.Z.selectParticipant(
                                t.id,
                                (0, j.gN)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId
                                })
                            ),
                        (0, U.Qm)(t.type) && (0, _.tg)(ei.Ez.PANEL)));
            }));
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['guildId']);
    let s = (0, c.e7)([B.default], () => B.default.getId()),
        u = (0, c.e7)([P.ZP, Q.Z], () => (0, R.Z)(P.ZP, Q.Z)),
        d = (0, c.e7)([q.Z, V.Z], () => V.Z.getChannel(q.Z.getVoiceChannelId())),
        h = (0, c.e7)([O.ZP], () => O.ZP.getConnectedActivityChannelId()),
        p = (0, c.e7)([V.Z], () => V.Z.getChannel(h)),
        f = (0, c.e7)([H.Z], () => H.Z.getGuild(null == p ? void 0 : p.guild_id)),
        [g, _] = (0, c.Wu)([G.Z], () => [G.Z.getCurrentUserActiveStream(), G.Z.getStreamerActiveStreamMetadata()]),
        v = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        j = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
        S = (0, c.e7)([H.Z, W.Z, F.ZP], () => (null != d ? w.JL(d, H.Z, W.Z, !1) : null != o && w.h_(F.ZP.getChannels(o), H.Z, W.Z).length > 0)),
        [I] = (0, C.Z)([null != (l = null != _ && null != _.id ? _.id : null != u && null != u.id ? u.id : null != j ? j.applicationId : void 0) ? l : '']),
        N = (0, c.e7)([x.Z], () => x.Z.getFakeGameData()),
        T = (0, c.e7)([O.ZP], () => O.ZP.getCurrentEmbeddedActivity()),
        A = (0, y.Z)() && null != T && (0, b.R)(),
        D = (0, c.e7)([z.Z], () => (0, Z.Z)(z.Z) && (0, J.isWindows)()),
        k = (0, c.e7)([K.Z], () => (null != s ? K.Z.findActivity(s, (e) => e.type === er.IIU.PLAYING) : null)),
        U = null != g && g.ownerId === s && g.state !== er.jm8.ENDED,
        $ = (0, c.e7)([X.default, Y.Z], () => (null != p ? (0, E.F6)(p, X.default, Y.Z) : void 0)),
        ee = (0, M.Z)(),
        [et, en] = i.useState(!1),
        ei = (0, c.e7)([L.Z], () => L.Z.getWindowOpen(er.KJ3.ACTIVITY_POPOUT));
    return (0, r.jsx)(
        ec,
        ((t = ea({}, a)),
        (n = n =
            {
                guildId: o,
                canGoLive: D || A || void 0 !== N,
                activity: k,
                embeddedActivity: j,
                userId: s,
                runningGame: null != N ? N : u,
                application: I,
                useReducedMotion: v,
                isStreaming: U,
                channel: p,
                canStream: S,
                stream: g,
                streamMetadata: _,
                channelName: $,
                guildForConnectedChannel: f,
                streamQualityIndicator: ee,
                isForceShowSharingPopout: et,
                setIsForceShowSharingPopout: en,
                isActivityPopoutOpen: ei
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

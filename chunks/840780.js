n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    p = n(925549),
    m = n(438139),
    f = n(730749),
    g = n(607070),
    v = n(636449),
    C = n(214629),
    x = n(566620),
    I = n(317381),
    _ = n(736409),
    Z = n(835473),
    b = n(413523),
    S = n(933557),
    N = n(194082),
    E = n(550532),
    y = n(436774),
    j = n(594190),
    T = n(925329),
    P = n(102172),
    A = n(74299),
    w = n(914923),
    M = n(165393),
    L = n(989941),
    R = n(690221),
    D = n(231664),
    G = n(759198),
    k = n(131704),
    B = n(199902),
    U = n(314897),
    O = n(592125),
    V = n(984933),
    H = n(430824),
    F = n(131951),
    z = n(496675),
    W = n(158776),
    q = n(699516),
    Y = n(944486),
    Q = n(594174),
    K = n(449224),
    J = n(358085),
    X = n(345243),
    $ = n(115530),
    ee = n(339144),
    et = n(441248),
    en = n(981631),
    ei = n(918559),
    el = n(395144);
let er = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(X.Z, { children: t });
});
class ea extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: el.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: el.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)(ee.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)(et.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, w.Z)(t);
        return (0, i.jsxs)('div', {
            className: el.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(M.Z, { title: r })
                    : (0, i.jsx)(N.ZP, {
                          look: N.ZP.Looks.GRAY,
                          size: N.ZP.Sizes.SMALL,
                          className: el.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: el.info,
                    children: [
                        (0, i.jsx)($.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: el.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: y.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(G.Z, {
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
        let e;
        let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: a } = this.props;
        if (null == n || null == l || null == t) return null;
        let o = { start: n.connectedSince },
            s = r;
        null != a ? ((e = en.Z5c.CHANNEL(a.id, l.id)), (s = ''.concat(s, ' / ').concat(a.name))) : (e = en.Z5c.CHANNEL(en.ME, l.id));
        let c = (0, i.jsx)(R.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(X.Z, {
                className: el.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: el.gameWrapper,
            children: [
                (0, i.jsx)(T.Z, {
                    className: el.gameIcon,
                    game: t,
                    size: T.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: el.info,
                    children: [
                        (0, i.jsx)(R.Z, {
                            href: e,
                            onClick: this.handleApplicationOrChannelLinkClick,
                            children: (0, i.jsx)($.Z, {
                                className: el.activityName,
                                children: t.name
                            })
                        }),
                        (0, k.Qm)(l.type) ? c : (0, i.jsx)(er, { timestamps: o })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = this.props;
        return l || (((0, ee.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(_.j, {
                          isForceShowSharingPopout: u,
                          setIsForceShowSharingPopout: d
                      }),
                      (0, i.jsx)('div', {
                          className: a()(el.panel, c),
                          children: (0, i.jsxs)('div', {
                              className: el.body,
                              children: [(() => (null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame()))(), this.renderActions()]
                          })
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleApplicationOrChannelLinkClick'),
            (i = () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : en.ME, t.id), (0, v.R)() ? d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, k.vd)(t.type) && h.Z.selectParticipant(t.id, (0, b.oW)(n.applicationId)), (0, k.Qm)(t.type) && (0, x.tg)(ei.Ez.PANEL));
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = (0, f.Z)(function (e) {
    var t;
    let { guildId: n, ...r } = e,
        a = (0, c.e7)([U.default], () => U.default.getId()),
        o = (0, c.e7)([j.ZP, K.Z], () => (0, L.Z)(j.ZP, K.Z)),
        s = (0, c.e7)([Y.Z, O.Z], () => O.Z.getChannel(Y.Z.getVoiceChannelId())),
        u = (0, c.e7)([I.ZP], () => I.ZP.getConnectedActivityChannelId()),
        d = (0, c.e7)([O.Z], () => O.Z.getChannel(u)),
        h = (0, c.e7)([H.Z], () => H.Z.getGuild(null == d ? void 0 : d.guild_id)),
        [p, m] = (0, c.Wu)([B.Z], () => [B.Z.getCurrentUserActiveStream(), B.Z.getStreamerActiveStreamMetadata()]),
        f = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
        x = (0, c.e7)([I.ZP], () => (null != d ? I.ZP.getSelfEmbeddedActivityForChannel(d.id) : null)),
        _ = (0, c.e7)([H.Z, z.Z, V.ZP], () => (null != s ? P.JL(s, H.Z, z.Z, !1) : null != n && P.h_(V.ZP.getChannels(n), H.Z, z.Z).length > 0)),
        [b] = (0, Z.Z)([
            null !==
                (t = (function () {
                    if (null != m && null != m.id) return m.id;
                    if (null != o && null != o.id) return o.id;
                    if (null != x) return x.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        N = (0, c.e7)([E.Z], () => E.Z.getFakeGameData()),
        y = (0, c.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
        T = (0, C.Z0)() && null != y && (0, v.R)(),
        w = (0, c.e7)([F.Z], () => (0, A.Z)(F.Z) && (0, J.isWindows)()),
        M = (0, c.e7)([W.Z], () => (null != a ? W.Z.findActivity(a, (e) => e.type === en.IIU.PLAYING) : null)),
        R = null != p && p.ownerId === a && p.state !== en.jm8.ENDED,
        G = (0, c.e7)([Q.default, q.Z], () => (null != d ? (0, S.F6)(d, Q.default, q.Z) : void 0)),
        k = (0, D.Z)(),
        [X, $] = l.useState(!1);
    return (0, i.jsx)(ea, {
        ...r,
        guildId: n,
        canGoLive: w || T || void 0 !== N,
        activity: M,
        embeddedActivity: x,
        userId: a,
        runningGame: null != N ? N : o,
        application: b,
        useReducedMotion: f,
        isStreaming: R,
        channel: d,
        canStream: _,
        stream: p,
        streamMetadata: m,
        channelName: G,
        guildForConnectedChannel: h,
        streamQualityIndicator: k,
        isForceShowSharingPopout: X,
        setIsForceShowSharingPopout: $
    });
});

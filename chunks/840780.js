n.d(t, { Z: () => eo }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(475179),
    p = n(925549),
    m = n(438139),
    g = n(730749),
    f = n(607070),
    _ = n(636449),
    v = n(214629),
    C = n(566620),
    x = n(317381),
    Z = n(736409),
    I = n(835473),
    b = n(413523),
    S = n(933557),
    N = n(194082),
    E = n(550532),
    j = n(436774),
    y = n(594190),
    P = n(925329),
    A = n(102172),
    T = n(74299),
    w = n(914923),
    R = n(165393),
    L = n(989941),
    M = n(690221),
    D = n(231664),
    G = n(759198),
    k = n(131704),
    B = n(199902),
    O = n(314897),
    U = n(592125),
    V = n(984933),
    F = n(430824),
    H = n(131951),
    z = n(496675),
    W = n(158776),
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
    ei = n(918559),
    el = n(966272);
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
            children: (0, i.jsx)(d.Fmz, {
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
        let { isStreaming: e, application: t, runningGame: n, setIsForceShowSharingPopout: l } = this.props;
        return (0, i.jsx)(et.k, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => l(!0)
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, w.Z)(t);
        return (0, i.jsxs)('div', {
            className: el.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(R.Z, { title: r })
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
                                    (0, i.jsx)(d.SrA, {
                                        size: 'xxs',
                                        color: j.JX.PREMIUM_TIER_2
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
        let c = (0, i.jsx)(M.Z, {
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
                (0, i.jsx)(P.Z, {
                    className: el.gameIcon,
                    game: t,
                    size: P.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: el.info,
                    children: [
                        (0, i.jsx)(M.Z, {
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
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c, isForceShowSharingPopout: d, setIsForceShowSharingPopout: u } = this.props;
        return l || (((0, ee.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)(Z.j, {
                  isForceShowSharingPopout: d,
                  setIsForceShowSharingPopout: u,
                  children: (0, i.jsx)('div', {
                      className: a()(el.panel, c),
                      children: (0, i.jsxs)('div', {
                          className: el.body,
                          children: [null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame(), this.renderActions()]
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleApplicationOrChannelLinkClick'),
            (n = () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : en.ME, t.id), (0, _.R)() ? u.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, k.vd)(t.type) && h.Z.selectParticipant(t.id, (0, b.oW)(n.applicationId)), (0, k.Qm)(t.type) && (0, C.tg)(ei.Ez.PANEL));
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let eo = (0, g.Z)(function (e) {
    var t;
    let { guildId: n, ...r } = e,
        a = (0, c.e7)([O.default], () => O.default.getId()),
        o = (0, c.e7)([y.ZP, J.Z], () => (0, L.Z)(y.ZP, J.Z)),
        s = (0, c.e7)([Y.Z, U.Z], () => U.Z.getChannel(Y.Z.getVoiceChannelId())),
        d = (0, c.e7)([x.ZP], () => x.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([U.Z], () => U.Z.getChannel(d)),
        h = (0, c.e7)([F.Z], () => F.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [p, m] = (0, c.Wu)([B.Z], () => [B.Z.getCurrentUserActiveStream(), B.Z.getStreamerActiveStreamMetadata()]),
        g = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        C = (0, c.e7)([x.ZP], () => (null != u ? x.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        Z = (0, c.e7)([F.Z, z.Z, V.ZP], () => (null != s ? A.JL(s, F.Z, z.Z, !1) : null != n && A.h_(V.ZP.getChannels(n), F.Z, z.Z).length > 0)),
        [b] = (0, I.Z)([null !== (t = null != m && null != m.id ? m.id : null != o && null != o.id ? o.id : null != C ? C.applicationId : void 0) && void 0 !== t ? t : '']),
        N = (0, c.e7)([E.Z], () => E.Z.getFakeGameData()),
        j = (0, c.e7)([x.ZP], () => x.ZP.getCurrentEmbeddedActivity()),
        P = (0, v.Z0)() && null != j && (0, _.R)(),
        w = (0, c.e7)([H.Z], () => (0, T.Z)(H.Z) && (0, K.isWindows)()),
        R = (0, c.e7)([W.Z], () => (null != a ? W.Z.findActivity(a, (e) => e.type === en.IIU.PLAYING) : null)),
        M = null != p && p.ownerId === a && p.state !== en.jm8.ENDED,
        G = (0, c.e7)([Q.default, q.Z], () => (null != u ? (0, S.F6)(u, Q.default, q.Z) : void 0)),
        k = (0, D.Z)(),
        [X, $] = l.useState(!1);
    return (0, i.jsx)(ea, {
        ...r,
        guildId: n,
        canGoLive: w || P || void 0 !== N,
        activity: R,
        embeddedActivity: C,
        userId: a,
        runningGame: null != N ? N : o,
        application: b,
        useReducedMotion: g,
        isStreaming: M,
        channel: u,
        canStream: Z,
        stream: p,
        streamMetadata: m,
        channelName: G,
        guildForConnectedChannel: h,
        streamQualityIndicator: k,
        isForceShowSharingPopout: X,
        setIsForceShowSharingPopout: $
    });
});

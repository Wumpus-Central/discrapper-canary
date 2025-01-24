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
    _ = n(835473),
    Z = n(413523),
    b = n(933557),
    S = n(194082),
    N = n(550532),
    E = n(436774),
    y = n(594190),
    j = n(925329),
    T = n(102172),
    A = n(74299),
    P = n(914923),
    w = n(165393),
    M = n(989941),
    L = n(690221),
    R = n(231664),
    D = n(759198),
    G = n(131704),
    k = n(199902),
    B = n(314897),
    U = n(592125),
    O = n(984933),
    V = n(430824),
    H = n(131951),
    F = n(496675),
    W = n(158776),
    z = n(699516),
    q = n(944486),
    Y = n(594174),
    Q = n(449224),
    J = n(358085),
    K = n(345243),
    X = n(115530),
    $ = n(339144),
    ee = n(441248),
    et = n(981631),
    en = n(918559),
    ei = n(395144);
let el = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(K.Z, { children: t });
});
class er extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: ei.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: ei.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)($.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)(ee.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, P.Z)(t);
        return (0, i.jsxs)('div', {
            className: ei.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(w.Z, { title: r })
                    : (0, i.jsx)(S.ZP, {
                          look: S.ZP.Looks.GRAY,
                          size: S.ZP.Sizes.SMALL,
                          className: ei.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: ei.info,
                    children: [
                        (0, i.jsx)(X.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: ei.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: E.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(D.Z, {
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
        let e;
        let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: a } = this.props;
        if (null == n || null == l || null == t) return null;
        let o = { start: n.connectedSince },
            s = r;
        null != a ? ((e = et.Z5c.CHANNEL(a.id, l.id)), (s = ''.concat(s, ' / ').concat(a.name))) : (e = et.Z5c.CHANNEL(et.ME, l.id));
        let c = (0, i.jsx)(L.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(K.Z, {
                className: ei.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: ei.gameWrapper,
            children: [
                (0, i.jsx)(j.Z, {
                    className: ei.gameIcon,
                    game: t,
                    size: j.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: ei.info,
                    children: [
                        (0, i.jsx)(L.Z, {
                            href: e,
                            onClick: this.handleApplicationOrChannelLinkClick,
                            children: (0, i.jsx)(X.Z, {
                                className: ei.activityName,
                                children: t.name
                            })
                        }),
                        (0, G.Qm)(l.type) ? c : (0, i.jsx)(el, { timestamps: o })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c } = this.props;
        return l || (((0, $.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(ei.panel, c),
                  children: (0, i.jsxs)('div', {
                      className: ei.body,
                      children: [(() => (null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame()))(), this.renderActions()]
                  })
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
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : et.ME, t.id), (0, v.R)() ? d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, G.vd)(t.type) && h.Z.selectParticipant(t.id, (0, Z.oW)(n.applicationId)), (0, G.Qm)(t.type) && (0, x.tg)(en.Ez.PANEL));
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
    let { guildId: n, ...l } = e,
        r = (0, c.e7)([B.default], () => B.default.getId()),
        a = (0, c.e7)([y.ZP, Q.Z], () => (0, M.Z)(y.ZP, Q.Z)),
        o = (0, c.e7)([q.Z, U.Z], () => U.Z.getChannel(q.Z.getVoiceChannelId())),
        s = (0, c.e7)([I.ZP], () => I.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([U.Z], () => U.Z.getChannel(s)),
        d = (0, c.e7)([V.Z], () => V.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([k.Z], () => [k.Z.getCurrentUserActiveStream(), k.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
        f = (0, c.e7)([I.ZP], () => (null != u ? I.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        x = (0, c.e7)([V.Z, F.Z, O.ZP], () => (null != o ? T.JL(o, V.Z, F.Z, !1) : null != n && T.h_(O.ZP.getChannels(n), V.Z, F.Z).length > 0)),
        [Z] = (0, _.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != f) return f.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        S = (0, c.e7)([N.Z], () => N.Z.getFakeGameData()),
        E = (0, c.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
        j = (0, C.Z0)() && null != E && (0, v.R)(),
        P = (0, c.e7)([H.Z], () => (0, A.Z)(H.Z) && (0, J.isWindows)()),
        w = (0, c.e7)([W.Z], () => (null != r ? W.Z.findActivity(r, (e) => e.type === et.IIU.PLAYING) : null)),
        L = null != h && h.ownerId === r && h.state !== et.jm8.ENDED,
        D = (0, c.e7)([Y.default, z.Z], () => (null != u ? (0, b.F6)(u, Y.default, z.Z) : void 0)),
        G = (0, R.Z)();
    return (0, i.jsx)(er, {
        ...l,
        guildId: n,
        canGoLive: P || j || void 0 !== S,
        activity: w,
        embeddedActivity: f,
        userId: r,
        runningGame: null != S ? S : a,
        application: Z,
        useReducedMotion: m,
        isStreaming: L,
        channel: u,
        canStream: x,
        stream: h,
        streamMetadata: p,
        channelName: D,
        guildForConnectedChannel: d,
        streamQualityIndicator: G
    });
});

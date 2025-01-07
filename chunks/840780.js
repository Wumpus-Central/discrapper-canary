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
    f = n(438139),
    m = n(730749),
    g = n(607070),
    v = n(636449),
    C = n(214629),
    x = n(566620),
    I = n(317381),
    _ = n(835473),
    Z = n(933557),
    b = n(194082),
    S = n(436774),
    N = n(594190),
    E = n(925329),
    y = n(102172),
    j = n(74299),
    T = n(914923),
    P = n(165393),
    A = n(989941),
    w = n(690221),
    M = n(231664),
    L = n(759198),
    R = n(131704),
    D = n(199902),
    G = n(314897),
    B = n(592125),
    k = n(984933),
    U = n(430824),
    O = n(131951),
    V = n(496675),
    H = n(158776),
    F = n(699516),
    W = n(944486),
    z = n(594174),
    q = n(449224),
    Y = n(358085),
    Q = n(345243),
    J = n(115530),
    K = n(339144),
    X = n(441248),
    $ = n(981631),
    ee = n(918559),
    et = n(395144);
let en = (0, f.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(Q.Z, { children: t });
});
class ei extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: et.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: et.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)(K.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)(X.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, T.Z)(t);
        return (0, i.jsxs)('div', {
            className: et.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(P.Z, { title: r })
                    : (0, i.jsx)(b.ZP, {
                          look: b.ZP.Looks.GRAY,
                          size: b.ZP.Sizes.SMALL,
                          className: et.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: et.info,
                    children: [
                        (0, i.jsx)(J.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: et.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: S.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(L.Z, {
                                        className: et.perksDemoText,
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
        null != a ? ((e = $.Z5c.CHANNEL(a.id, l.id)), (s = ''.concat(s, ' / ').concat(a.name))) : (e = $.Z5c.CHANNEL($.ME, l.id));
        let c = (0, i.jsx)(w.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(Q.Z, {
                className: et.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: et.gameWrapper,
            children: [
                (0, i.jsx)(E.Z, {
                    className: et.gameIcon,
                    game: t,
                    size: E.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: et.info,
                    children: [
                        (0, i.jsx)(w.Z, {
                            href: e,
                            onClick: this.handleApplicationOrChannelLinkClick,
                            children: (0, i.jsx)(J.Z, {
                                className: et.activityName,
                                children: t.name
                            })
                        }),
                        (0, R.Qm)(l.type) ? c : (0, i.jsx)(en, { timestamps: o })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c } = this.props;
        return l || (((0, K.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(et.panel, c),
                  children: (0, i.jsxs)('div', {
                      className: et.body,
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
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : $.ME, t.id), (0, v.R)() ? d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, R.vd)(t.type) && h.Z.selectParticipant(t.id, n.applicationId), (0, R.Qm)(t.type) && (0, x.tg)(ee.Ez.PANEL));
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
t.Z = (0, m.Z)(function (e) {
    var t;
    let { guildId: n, ...l } = e,
        r = (0, c.e7)([G.default], () => G.default.getId()),
        a = (0, c.e7)([N.ZP, q.Z], () => (0, A.Z)(N.ZP, q.Z)),
        o = (0, c.e7)([W.Z, B.Z], () => B.Z.getChannel(W.Z.getVoiceChannelId())),
        s = (0, c.e7)([I.ZP], () => I.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([B.Z], () => B.Z.getChannel(s)),
        d = (0, c.e7)([U.Z], () => U.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([D.Z], () => [D.Z.getCurrentUserActiveStream(), D.Z.getStreamerActiveStreamMetadata()]),
        f = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
        m = (0, c.e7)([I.ZP], () => (null != u ? I.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        x = (0, c.e7)([U.Z, V.Z, k.ZP], () => (null != o ? y.JL(o, U.Z, V.Z, !1) : null != n && y.h_(k.ZP.getChannels(n), U.Z, V.Z).length > 0)),
        [b] = (0, _.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != m) return m.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        S = (0, c.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
        E = (0, C.Z0)() && null != S && (0, v.R)(),
        T = (0, c.e7)([O.Z], () => (0, j.Z)(O.Z) && (0, Y.isWindows)()),
        P = (0, c.e7)([H.Z], () => (null != r ? H.Z.findActivity(r, (e) => e.type === $.IIU.PLAYING) : null)),
        w = null != h && h.ownerId === r && h.state !== $.jm8.ENDED,
        L = (0, c.e7)([z.default, F.Z], () => (null != u ? (0, Z.F6)(u, z.default, F.Z) : void 0)),
        R = (0, M.Z)();
    return (0, i.jsx)(ei, {
        ...l,
        guildId: n,
        canGoLive: T || E,
        activity: P,
        embeddedActivity: m,
        userId: r,
        runningGame: a,
        application: b,
        useReducedMotion: f,
        isStreaming: w,
        channel: u,
        canStream: x,
        stream: h,
        streamMetadata: p,
        channelName: L,
        guildForConnectedChannel: d,
        streamQualityIndicator: R
    });
});

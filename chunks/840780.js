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
    N = n(436774),
    E = n(594190),
    y = n(925329),
    j = n(102172),
    T = n(74299),
    A = n(914923),
    P = n(165393),
    w = n(989941),
    M = n(690221),
    L = n(231664),
    R = n(759198),
    D = n(131704),
    G = n(199902),
    k = n(314897),
    B = n(592125),
    U = n(984933),
    O = n(430824),
    V = n(131951),
    H = n(496675),
    F = n(158776),
    W = n(699516),
    z = n(944486),
    q = n(594174),
    Y = n(449224),
    Q = n(358085),
    J = n(345243),
    K = n(115530),
    X = n(339144),
    $ = n(441248),
    ee = n(981631),
    et = n(918559),
    en = n(395144);
let ei = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(J.Z, { children: t });
});
class el extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: en.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: en.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)(X.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)($.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, A.Z)(t);
        return (0, i.jsxs)('div', {
            className: en.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(P.Z, { title: r })
                    : (0, i.jsx)(S.ZP, {
                          look: S.ZP.Looks.GRAY,
                          size: S.ZP.Sizes.SMALL,
                          className: en.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: en.info,
                    children: [
                        (0, i.jsx)(K.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: en.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: N.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(R.Z, {
                                        className: en.perksDemoText,
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
        null != a ? ((e = ee.Z5c.CHANNEL(a.id, l.id)), (s = ''.concat(s, ' / ').concat(a.name))) : (e = ee.Z5c.CHANNEL(ee.ME, l.id));
        let c = (0, i.jsx)(M.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(J.Z, {
                className: en.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: en.gameWrapper,
            children: [
                (0, i.jsx)(y.Z, {
                    className: en.gameIcon,
                    game: t,
                    size: y.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: en.info,
                    children: [
                        (0, i.jsx)(M.Z, {
                            href: e,
                            onClick: this.handleApplicationOrChannelLinkClick,
                            children: (0, i.jsx)(K.Z, {
                                className: en.activityName,
                                children: t.name
                            })
                        }),
                        (0, D.Qm)(l.type) ? c : (0, i.jsx)(ei, { timestamps: o })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c } = this.props;
        return l || (((0, X.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(en.panel, c),
                  children: (0, i.jsxs)('div', {
                      className: en.body,
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
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : ee.ME, t.id), (0, v.R)() ? d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, D.vd)(t.type) && h.Z.selectParticipant(t.id, (0, Z.oW)(n.applicationId)), (0, D.Qm)(t.type) && (0, x.tg)(et.Ez.PANEL));
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
        r = (0, c.e7)([k.default], () => k.default.getId()),
        a = (0, c.e7)([E.ZP, Y.Z], () => (0, w.Z)(E.ZP, Y.Z)),
        o = (0, c.e7)([z.Z, B.Z], () => B.Z.getChannel(z.Z.getVoiceChannelId())),
        s = (0, c.e7)([I.ZP], () => I.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([B.Z], () => B.Z.getChannel(s)),
        d = (0, c.e7)([O.Z], () => O.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([G.Z], () => [G.Z.getCurrentUserActiveStream(), G.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
        f = (0, c.e7)([I.ZP], () => (null != u ? I.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        x = (0, c.e7)([O.Z, H.Z, U.ZP], () => (null != o ? j.JL(o, O.Z, H.Z, !1) : null != n && j.h_(U.ZP.getChannels(n), O.Z, H.Z).length > 0)),
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
        S = (0, c.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
        N = (0, C.Z0)() && null != S && (0, v.R)(),
        y = (0, c.e7)([V.Z], () => (0, T.Z)(V.Z) && (0, Q.isWindows)()),
        A = (0, c.e7)([F.Z], () => (null != r ? F.Z.findActivity(r, (e) => e.type === ee.IIU.PLAYING) : null)),
        P = null != h && h.ownerId === r && h.state !== ee.jm8.ENDED,
        M = (0, c.e7)([q.default, W.Z], () => (null != u ? (0, b.F6)(u, q.default, W.Z) : void 0)),
        R = (0, L.Z)();
    return (0, i.jsx)(el, {
        ...l,
        guildId: n,
        canGoLive: y || N,
        activity: A,
        embeddedActivity: f,
        userId: r,
        runningGame: a,
        application: Z,
        useReducedMotion: m,
        isStreaming: P,
        channel: u,
        canStream: x,
        stream: h,
        streamMetadata: p,
        channelName: M,
        guildForConnectedChannel: d,
        streamQualityIndicator: R
    });
});

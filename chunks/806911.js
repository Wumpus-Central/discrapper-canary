"use strict";
n.d(t, { A: () => eu });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(205693),
    d = n(834730),
    _ = n(778712),
    f = n(827343),
    p = n(367513),
    h = n(951001),
    E = n(398590),
    m = n(793574),
    g = n(58149),
    A = n(313961),
    I = n(520698),
    T = n(525788),
    S = n(384059),
    y = n(47167),
    N = n(958713),
    v = n(525505),
    C = n(652896),
    O = n(880144),
    R = n(638480),
    b = n(338771),
    D = n(991701),
    L = n(574172),
    w = n(976860),
    M = n(461782),
    P = n(447404),
    x = n(271195),
    k = n(905216),
    U = n(128286),
    G = n(528057),
    F = n(352018),
    V = n(616356),
    B = n(961350),
    H = n(430452),
    j = n(994500),
    Y = n(287809),
    W = n(788318),
    K = n(803301),
    $ = n(531685),
    z = n(954571),
    q = n(562153),
    X = n(427262),
    Q = n(712577),
    Z = n(566331),
    J = n(768088),
    ee = n(256195),
    et = n(729365),
    en = n(566566),
    er = n(222692),
    ei = n(652215),
    es = n(806931),
    ea = n(82850),
    eo = n(604949);
class el extends i.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = i.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, es.Ay)(e),
            i = null != e && e.type !== es.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: (e?.type === es.lp.STREAM || e?.type === es.lp.USER) && n.type !== ei.rbe.DM,
            canDisconnect: !r,
            isSelf: i,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, C._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, es.Ay)(e) ? t.find((t) => (0, C._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, es.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, R.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        z.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, g.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        z.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: A.A.getLayout(e.id), ...(0, g.QS)(e.id) });
    }
    handleVideo = (e) => {
        f.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, er.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, E.bz)();
        let t = e.getGuildId() ?? ei.ME;
        (0, w.uh)(t, e.id), h.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && p.A.selectParticipant(n.channelId, (0, C._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        a()((0, es.Ay)(e), "cannot stop stream for non streamer"),
            (0, S.X)(m.A.VIDEO_PIP, S.O.STREAM, !1),
            (0, b.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, S.X)(m.A.VIDEO_PIP, S.O.POPOUT, !0), L.openChannelCallPopout(e);
    };
    renderBottomLeftControls = () => {
        let { canSeeParticipantName: e } = this.viewProperties;
        return e ? this.renderParticipantName() : null;
    };
    renderBottomRightControls = () => {
        let {
            canSettings: e,
            canPopout: t,
            canDisconnect: n,
            canStopStream: i,
            canSeeViewers: s,
        } = this.viewProperties;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                s ? this.renderViewersIcon() : null,
                e ? this.renderSettingsIcon() : null,
                t ? this.renderPopoutIcon() : null,
                i ? this.renderStopStreamButton() : null,
                n ? this.renderDisconnectButton() : null,
            ],
        });
    };
    renderDisconnectButton = () =>
        (0, r.jsx)(k.A, { className: ea.iq, onClick: () => (0, S.X)(m.A.VIDEO_PIP, S.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, r.jsx)(G.A, { isSelfStream: e, className: ea.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            a()(
                (0, es.Ay)(e) || e?.type === es.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, r.jsx)(P.A, {
                children: (0, r.jsx)(T.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: ea.iq,
                    participant: e,
                    compact: !0,
                }),
            })
        );
    };
    renderPopoutIcon = () =>
        (0, r.jsx)(U.A, {
            className: ea.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: ei.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        a()((0, es.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, C._z)(t) === e.id);
        return null == n || n.state === ei.XYD.ENDED
            ? null
            : (0, r.jsx)(F.A, { stream: n, className: ea.iq, appContext: ei.BRT.APP, location: m.A.VIDEO_PIP });
    };
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: i,
                videoStreamError: s,
                cameraEncodeError: a,
            } = this.props;
        if (null != s && null == a) {
            if (t?.type === es.lp.STREAM) return (0, r.jsx)(J.A, { stream: t.stream, width: n, avError: s });
            else if (t?.type === es.lp.USER) return (0, r.jsx)(en.A, { userId: t.user.id, width: n, avError: s });
        }
        switch (!0) {
            case e?.state === ei.XYD.ENDED:
                return (0, r.jsx)(Z.A, { stream: e, width: n });
            case e?.state === ei.XYD.FAILED:
                return (0, r.jsx)(J.A, { stream: e, width: n });
            case t?.type === es.lp.HIDDEN_STREAM:
                return (0, r.jsx)(ee.A, { participant: t, width: n });
            case i:
                return (0, r.jsx)(et.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === es.lp.STREAM || t?.type === es.lp.USER) {
            let n = q.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? X.Ay.getName(t.user);
            return (0, r.jsx)(d.E, {
                variant: "text-md/normal",
                color: "always-white",
                className: ea.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: s } = this.props,
            a = (0, y.m1)(e, Y.default, j.A),
            o = n?.id === B.default.getId() && i,
            l = this.renderStreamState(),
            u = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== es.lp.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : (n?.type === es.lp.USER || n?.type === es.lp.STREAM) &&
                      (c = (0, r.jsx)(Q.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: H.Ay.getVideoComponent(),
                          mirror: o,
                          children: (0, r.jsx)(D.A, {
                              size: _._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, r.jsx)(M.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, r.jsx)(x.A, {
                        title: a,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: P.A,
                        width: s,
                        className: eo.a8,
                        videoControlsClassName: u?.state === ei.XYD.ENDED ? ea._v : void 0,
                        ...e,
                        children: c,
                    }),
            })
        );
    }
}
function eu(e) {
    let { channel: t, width: n } = e,
        i = (0, u.bG)([W.A], () => W.A.getSpeaker(t.id)),
        s = (0, u.bG)([A.A], () => A.A.getParticipant(t.id, i), [t.id, i]),
        a = (0, u.bG)([H.Ay], () => l()(H.Ay.getVideoDevices()).values().first()),
        o = (0, u.bG)(
            [K.A],
            () =>
                null != s && s.type !== es.lp.ACTIVITY && s.type !== es.lp.HIDDEN_STREAM
                    ? K.A.getStreamId(s.user.id, t.getGuildId(), (0, I.A)(s.type))
                    : null,
            [s, t],
        ),
        d = null == a || a.disabled,
        _ = !d,
        f = (0, u.bG)([H.Ay], () => !d && H.Ay.isVideoEnabled(), [d]),
        p = (0, u.bG)([H.Ay], () => (0, O.A)(H.Ay)),
        h = (0, u.bG)([B.default], () => B.default.getId()),
        E = (0, u.bG)([V.A], () => V.A.getCurrentUserActiveStream()),
        m = null != s && "user" in s ? s.user.id : "",
        g = (0, v.A)(s?.type === es.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, m),
        T = (0, N.A)(m),
        S = (0, u.yK)([V.A], () => V.A.getAllActiveStreams());
    return (0, r.jsx)(el, {
        channel: t,
        streamId: o,
        participantOnScreen: s,
        isVideoAvailable: _,
        isVideoEnabled: f,
        canGoLive: p,
        currentUserId: h,
        activeStreams: S,
        activeSelfStream: E,
        isMainWindowFocused: $.A.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: g,
        cameraEncodeError: T,
    });
}

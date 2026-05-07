"use strict";
n.d(t, { A: () => ec });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(17928),
    c = n(459838),
    d = n(834730),
    _ = n(778712),
    f = n(827343),
    h = n(367513),
    p = n(951001),
    E = n(398590),
    m = n(793574),
    g = n(95561),
    A = n(313961),
    I = n(520698),
    T = n(525788),
    S = n(384059),
    N = n(47167),
    y = n(958713),
    C = n(525505),
    v = n(899e3),
    O = n(652896),
    R = n(880144),
    b = n(638480),
    D = n(338771),
    L = n(334557),
    w = n(574172),
    M = n(976860),
    P = n(461782),
    x = n(447404),
    U = n(271195),
    k = n(905216),
    G = n(128286),
    F = n(528057),
    V = n(352018),
    B = n(616356),
    H = n(495544),
    j = n(235058),
    Y = n(994500),
    W = n(287809),
    K = n(788318),
    z = n(803301),
    $ = n(531685),
    q = n(174459),
    Z = n(562153),
    X = n(427262),
    Q = n(712577),
    J = n(566331),
    ee = n(768088),
    et = n(256195),
    en = n(729365),
    ei = n(566566),
    er = n(222692),
    es = n(652215),
    ea = n(806931),
    eo = n(82850),
    el = n(604949);
class eu extends r.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = r.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            i = (0, ea.Ay)(e),
            r = null != e && e.type !== ea.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: i && !r,
            canSettings: i && r,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: (e?.type === ea.lp.STREAM || e?.type === ea.lp.USER) && n.type !== es.rbe.DM,
            canDisconnect: !i,
            isSelf: r,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, O._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ea.Ay)(e) ? t.find((t) => (0, O._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ea.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, b.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        q.default.track(es.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, g.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        q.default.track(es.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: A.A.getLayout(e.id), ...(0, g.QS)(e.id) });
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
        let t = e.getGuildId() ?? es.ME;
        (0, M.uh)(t, e.id), p.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && h.A.selectParticipant(n.channelId, (0, O._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        a()((0, ea.Ay)(e), "cannot stop stream for non streamer"),
            (0, S.X)(m.A.VIDEO_PIP, S.O.STREAM, !1),
            (0, D.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, S.X)(m.A.VIDEO_PIP, S.O.POPOUT, !0), w.openChannelCallPopout(e);
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
            canStopStream: r,
            canSeeViewers: s,
        } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                s ? this.renderViewersIcon() : null,
                e ? this.renderSettingsIcon() : null,
                t ? this.renderPopoutIcon() : null,
                r ? this.renderStopStreamButton() : null,
                n ? this.renderDisconnectButton() : null,
            ],
        });
    };
    renderDisconnectButton = () =>
        (0, i.jsx)(k.A, { className: eo.iq, onClick: () => (0, S.X)(m.A.VIDEO_PIP, S.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, i.jsx)(F.A, { isSelfStream: e, className: eo.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            a()(
                (0, ea.Ay)(e) || e?.type === ea.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, i.jsx)(x.A, {
                children: (0, i.jsx)(T.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: eo.iq,
                    participant: e,
                    compact: !0,
                }),
            })
        );
    };
    renderPopoutIcon = () =>
        (0, i.jsx)(G.A, {
            className: eo.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: es.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        a()((0, ea.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, O._z)(t) === e.id);
        return null == n || n.state === es.XYD.ENDED
            ? null
            : (0, i.jsx)(V.A, { stream: n, className: eo.iq, appContext: es.BRT.APP, location: m.A.VIDEO_PIP });
    };
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: r,
                videoStreamError: s,
                cameraEncodeError: a,
            } = this.props;
        if (null != s && null == a) {
            if (t?.type === ea.lp.STREAM) return (0, i.jsx)(ee.A, { stream: t.stream, width: n, avError: s });
            else if (t?.type === ea.lp.USER) return (0, i.jsx)(ei.A, { userId: t.user.id, width: n, avError: s });
        }
        switch (!0) {
            case e?.state === es.XYD.ENDED:
                return (0, i.jsx)(J.A, { stream: e, width: n });
            case e?.state === es.XYD.FAILED:
                return (0, i.jsx)(ee.A, { stream: e, width: n });
            case t?.type === ea.lp.HIDDEN_STREAM:
                return (0, i.jsx)(et.A, { participant: t, width: n });
            case r:
                return (0, i.jsx)(en.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === ea.lp.STREAM || t?.type === ea.lp.USER) {
            let n = Z.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? X.Ay.getName(t.user);
            return (0, i.jsx)(d.E, {
                variant: "text-md/normal",
                color: "always-white",
                className: eo.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: r, width: s } = this.props,
            a = (0, N.m1)(e, W.default, Y.A),
            o = n?.id === H.default.getId() && r,
            l = this.renderStreamState(),
            u = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== ea.lp.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : (n?.type === ea.lp.USER || n?.type === ea.lp.STREAM) &&
                      (c = (0, i.jsx)(Q.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: j.Ay.getVideoComponent(),
                          mirror: o,
                          children: (0, i.jsx)(L.A, {
                              size: _._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, i.jsx)(P.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, i.jsx)(U.A, {
                        title: a,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: x.A,
                        width: s,
                        className: el.a8,
                        videoControlsClassName: u?.state === es.XYD.ENDED ? eo._v : void 0,
                        ...e,
                        children: c,
                    }),
            })
        );
    }
}
function ec(e) {
    let { channel: t, width: n } = e,
        r = (0, u.bG)([K.A], () => K.A.getSpeaker(t.id)),
        s = (0, u.bG)([A.A], () => A.A.getParticipant(t.id, r), [t.id, r]),
        a = (0, u.bG)([j.Ay], () => l()(j.Ay.getVideoDevices()).values().first()),
        o = (0, u.bG)(
            [z.A],
            () =>
                null != s && s.type !== ea.lp.ACTIVITY && s.type !== ea.lp.HIDDEN_STREAM
                    ? z.A.getStreamId(s.user.id, t.getGuildId(), (0, I.A)(s.type))
                    : null,
            [s, t],
        ),
        d = null == a || a.disabled,
        _ = !d,
        f = (0, u.bG)([j.Ay], () => !d && j.Ay.isVideoEnabled(), [d]),
        h = (0, u.bG)([j.Ay], () => (0, R.A)(j.Ay)),
        p = (0, u.bG)([H.default], () => H.default.getId()),
        E = (0, u.bG)([B.A], () => B.A.getCurrentUserActiveStream()),
        m = null != s && "user" in s ? s.user.id : "",
        g = (0, C.A)(s?.type === ea.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, m),
        T = (0, y.A)(m),
        S = (0, u.yK)([B.A], () => B.A.getAllActiveStreams()),
        N = (0, u.bG)([$.A], () => $.A.isFocused()),
        O = (0, v.Qu)();
    return (0, i.jsx)(eu, {
        channel: t,
        streamId: o,
        participantOnScreen: s,
        isVideoAvailable: _,
        isVideoEnabled: f,
        canGoLive: h,
        currentUserId: p,
        activeStreams: S,
        activeSelfStream: E,
        isMainWindowFocused: N || O,
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: g,
        cameraEncodeError: T,
    });
}

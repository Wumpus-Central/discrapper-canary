"use strict";
n.d(t, { A: () => ec });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(17928),
    c = n(459838),
    u = n(834730),
    _ = n(778712),
    E = n(827343),
    A = n(367513),
    h = n(951001),
    I = n(398590),
    f = n(793574),
    p = n(95561),
    T = n(313961),
    m = n(94247),
    g = n(520698),
    S = n(525788),
    N = n(384059),
    C = n(47167),
    R = n(958713),
    O = n(525505),
    L = n(899e3),
    D = n(652896),
    y = n(880144),
    v = n(638480),
    b = n(338771),
    M = n(766761),
    P = n(574172),
    U = n(976860),
    w = n(461782),
    G = n(447404),
    x = n(271195),
    k = n(905216),
    F = n(128286),
    V = n(528057),
    B = n(352018),
    H = n(616356),
    j = n(280450),
    W = n(451409),
    Y = n(994500),
    K = n(287809),
    $ = n(803301),
    z = n(531685),
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
    ea = n(652215),
    es = n(806931),
    el = n(82850),
    eo = n(604949);
class ed extends r.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = r.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            i = (0, es.Ay)(e),
            r = null != e && e.type !== es.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: i && !r,
            canSettings: i && r,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: (e?.type === es.lp.STREAM || e?.type === es.lp.USER) && n.type !== ea.rbe.DM,
            canDisconnect: !i,
            isSelf: r,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, D._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, es.Ay)(e) ? t.find((t) => (0, D._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, es.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, v.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        q.default.track(ea.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, p.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        q.default.track(ea.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: T.A.getLayout(e.id), ...(0, p.QS)(e.id) });
    }
    handleVideo = (e) => {
        E.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, er.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, I.bz)();
        let t = e.getGuildId() ?? ea.ME;
        (0, U.uh)(t, e.id), h.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && A.A.selectParticipant(n.channelId, (0, D._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        s()((0, es.Ay)(e), "cannot stop stream for non streamer"),
            (0, N.X)(f.A.VIDEO_PIP, N.O.STREAM, !1),
            (0, b.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, N.X)(f.A.VIDEO_PIP, N.O.POPOUT, !0), P.openChannelCallPopout(e);
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
            canSeeViewers: a,
        } = this.viewProperties;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                a ? this.renderViewersIcon() : null,
                e ? this.renderSettingsIcon() : null,
                t ? this.renderPopoutIcon() : null,
                r ? this.renderStopStreamButton() : null,
                n ? this.renderDisconnectButton() : null,
            ],
        });
    };
    renderDisconnectButton = () =>
        (0, i.jsx)(k.A, { className: el.iq, onClick: () => (0, N.X)(f.A.VIDEO_PIP, N.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, i.jsx)(V.A, { isSelfStream: e, className: el.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            s()(
                (0, es.Ay)(e) || e?.type === es.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, i.jsx)(G.A, {
                children: (0, i.jsx)(S.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: el.iq,
                    participant: e,
                    compact: !0,
                }),
            })
        );
    };
    renderPopoutIcon = () =>
        (0, i.jsx)(F.A, {
            className: el.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: ea.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        s()((0, es.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, D._z)(t) === e.id);
        return null == n || n.state === ea.XYD.ENDED
            ? null
            : (0, i.jsx)(B.A, { stream: n, className: el.iq, appContext: ea.BRT.APP, location: f.A.VIDEO_PIP });
    };
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: r,
                videoStreamError: a,
                cameraEncodeError: s,
            } = this.props;
        if (null != a && null == s) {
            if (t?.type === es.lp.STREAM) return (0, i.jsx)(ee.A, { stream: t.stream, width: n, avError: a });
            else if (t?.type === es.lp.USER) return (0, i.jsx)(ei.A, { userId: t.user.id, width: n, avError: a });
        }
        switch (!0) {
            case e?.state === ea.XYD.ENDED:
                return (0, i.jsx)(J.A, { stream: e, width: n });
            case e?.state === ea.XYD.FAILED:
                return (0, i.jsx)(ee.A, { stream: e, width: n });
            case t?.type === es.lp.HIDDEN_STREAM:
                return (0, i.jsx)(et.A, { participant: t, width: n });
            case r:
                return (0, i.jsx)(en.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === es.lp.STREAM || t?.type === es.lp.USER) {
            let n = Z.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? X.Ay.getName(t.user);
            return (0, i.jsx)(u.E, {
                variant: "text-md/normal",
                color: "text-overlay-light",
                className: el.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: r, width: a } = this.props,
            s = (0, C.m1)(e, K.default, Y.A),
            l = n?.id === j.default.getId() && r,
            o = this.renderStreamState(),
            d = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== es.lp.ACTIVITY &&
                (null != o
                    ? (c = o)
                    : (n?.type === es.lp.USER || n?.type === es.lp.STREAM) &&
                      (c = (0, i.jsx)(Q.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: W.Ay.getVideoComponent(),
                          mirror: l,
                          children: (0, i.jsx)(M.A, {
                              size: _._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, i.jsx)(w.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, i.jsx)(x.A, {
                        title: s,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == o ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: G.A,
                        width: a,
                        className: eo.a8,
                        videoControlsClassName: d?.state === ea.XYD.ENDED ? el._v : void 0,
                        ...e,
                        children: c,
                    }),
            })
        );
    }
}
function ec(e) {
    let { channel: t, width: n } = e,
        r = (0, d.bG)([m.A], () => m.A.getSpeaker(t.id)),
        a = (0, d.bG)([T.A], () => T.A.getParticipant(t.id, r), [t.id, r]),
        s = (0, d.bG)([W.Ay], () => o()(W.Ay.getVideoDevices()).values().first()),
        l = (0, d.bG)(
            [$.A],
            () =>
                null != a && a.type !== es.lp.ACTIVITY && a.type !== es.lp.HIDDEN_STREAM
                    ? $.A.getStreamId(a.user.id, t.getGuildId(), (0, g.A)(a.type))
                    : null,
            [a, t],
        ),
        u = null == s || s.disabled,
        _ = !u,
        E = (0, d.bG)([W.Ay], () => !u && W.Ay.isVideoEnabled(), [u]),
        A = (0, d.bG)([W.Ay], () => (0, y.A)(W.Ay)),
        h = (0, d.bG)([j.default], () => j.default.getId()),
        I = (0, d.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        f = null != a && "user" in a ? a.user.id : "",
        p = (0, O.A)(a?.type === es.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, f),
        S = (0, R.A)(f),
        N = (0, d.yK)([H.A], () => H.A.getAllActiveStreams()),
        C = (0, d.bG)([z.A], () => z.A.isFocused()),
        D = (0, L.Qu)();
    return (0, i.jsx)(ed, {
        channel: t,
        streamId: l,
        participantOnScreen: a,
        isVideoAvailable: _,
        isVideoEnabled: E,
        canGoLive: A,
        currentUserId: h,
        activeStreams: N,
        activeSelfStream: I,
        isMainWindowFocused: C || D,
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: p,
        cameraEncodeError: S,
    });
}

n.d(t, { A: () => eu });
var i = n(477900),
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(17928),
    c = n(205693),
    u = n(834730),
    _ = n(778712),
    E = n(827343),
    A = n(367513),
    h = n(951001),
    f = n(398590),
    I = n(793574),
    p = n(666860),
    T = n(198052),
    m = n(94247),
    g = n(520698),
    S = n(525788),
    N = n(384059),
    C = n(47167),
    O = n(958713),
    R = n(525505),
    L = n(652896),
    y = n(880144),
    D = n(638480),
    v = n(338771),
    b = n(72755),
    P = n(574172),
    M = n(976860),
    U = n(114129),
    w = n(442325),
    G = n(461782),
    x = n(447404),
    k = n(271195),
    F = n(905216),
    B = n(128286),
    V = n(528057),
    H = n(352018),
    j = n(616356),
    W = n(280450),
    Y = n(999926),
    K = n(994500),
    $ = n(287809),
    z = n(803301),
    X = n(531685),
    q = n(174459),
    Z = n(562153),
    Q = n(427262),
    J = n(712577),
    ee = n(566331),
    et = n(768088),
    en = n(256195),
    ei = n(729365),
    er = n(566566),
    ea = n(222692),
    es = n(652215),
    el = n(806931),
    eo = n(211269),
    ed = n(969426);
class ec extends r.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = r.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            i = (0, el.Ay)(e),
            r = null != e && e.type !== el.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: i && !r,
            canSettings: i && r,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: (e?.type === el.lp.STREAM || e?.type === el.lp.USER) && n.type !== es.rbe.DM,
            canDisconnect: !i,
            isSelf: r,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, L._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, el.Ay)(e) ? t.find((t) => (0, L._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, el.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, D.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        q.default.track(es.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, p.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        q.default.track(es.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: T.A.getLayout(e.id), ...(0, p.QS)(e.id) });
    }
    handleVideo = (e) => {
        E.default.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, ea.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, f.bz)();
        let t = e.getGuildId() ?? es.ME,
            n = w.A.isEnabled() ? w.A.getTabForChannel(e.id) : null;
        (null != n ? (0, U.ZD)(n.id, !0) : (0, M.uh)(t, e.id), h.A.channelListScrollTo(t, e.id));
        let i = this.activeStreamForSelectedParticipant;
        null != i && A.A.selectParticipant(i.channelId, (0, L._z)(i));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        (s()((0, el.Ay)(e), "cannot stop stream for non streamer"),
            (0, N.X)(I.A.VIDEO_PIP, N.O.STREAM, !1),
            (0, v.A)(e.stream));
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        ((0, N.X)(I.A.VIDEO_PIP, N.O.POPOUT, !0), P.openChannelCallPopout(e));
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
        (0, i.jsx)(F.A, { className: eo.iq, onClick: () => (0, N.X)(I.A.VIDEO_PIP, N.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, i.jsx)(V.A, { isSelfStream: e, className: eo.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            s()(
                (0, el.Ay)(e) || e?.type === el.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, i.jsx)(x.A, {
                children: (0, i.jsx)(S.A, {
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
        (0, i.jsx)(B.A, {
            className: eo.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: es.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        s()((0, el.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, L._z)(t) === e.id);
        return null == n || n.state === es.XYD.ENDED
            ? null
            : (0, i.jsx)(H.A, { stream: n, className: eo.iq, appContext: es.BRT.APP, location: I.A.VIDEO_PIP });
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
            if (t?.type === el.lp.STREAM) return (0, i.jsx)(et.A, { stream: t.stream, width: n, avError: a });
            else if (t?.type === el.lp.USER) return (0, i.jsx)(er.A, { userId: t.user.id, width: n, avError: a });
        }
        switch (!0) {
            case e?.state === es.XYD.ENDED:
                return (0, i.jsx)(ee.A, { stream: e, width: n });
            case e?.state === es.XYD.FAILED:
                return (0, i.jsx)(et.A, { stream: e, width: n });
            case t?.type === el.lp.HIDDEN_STREAM:
                return (0, i.jsx)(en.A, { participant: t, width: n });
            case r:
                return (0, i.jsx)(ei.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === el.lp.STREAM || t?.type === el.lp.USER) {
            let n = Z.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? Q.Ay.getName(t.user);
            return (0, i.jsx)(u.E, {
                variant: "text-md/normal",
                color: "text-overlay-light",
                className: eo.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: r, width: a } = this.props,
            s = (0, C.m1)(e, $.default, K.A),
            l = n?.id === W.default.getId() && r,
            o = this.renderStreamState(),
            d = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== el.lp.ACTIVITY &&
                (null != o
                    ? (c = o)
                    : (n?.type === el.lp.USER || n?.type === el.lp.STREAM) &&
                      (c = (0, i.jsx)(J.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: Y.Ay.getVideoComponent(),
                          mirror: l,
                          children: (0, i.jsx)(b.A, {
                              size: _._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, i.jsx)(G.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, i.jsx)(k.A, {
                        title: s,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == o ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: x.A,
                        width: a,
                        className: ed.a8,
                        videoControlsClassName: d?.state === es.XYD.ENDED ? eo._v : void 0,
                        ...e,
                        children: c,
                    }),
            })
        );
    }
}
function eu(e) {
    let { channel: t, width: n } = e,
        r = (0, d.bG)([m.A], () => m.A.getSpeaker(t.id)),
        a = (0, d.bG)([T.A], () => T.A.getParticipant(t.id, r), [t.id, r]),
        s = (0, d.bG)([Y.Ay], () => o()(Y.Ay.getVideoDevices()).values().first()),
        l = (0, d.bG)(
            [z.A],
            () =>
                null != a && a.type !== el.lp.ACTIVITY && a.type !== el.lp.HIDDEN_STREAM
                    ? z.A.getStreamId(a.user.id, t.getGuildId(), (0, g.A)(a.type))
                    : null,
            [a, t],
        ),
        u = null == s || s.disabled,
        _ = !u,
        E = (0, d.bG)([Y.Ay], () => !u && Y.Ay.isVideoEnabled(), [u]),
        A = (0, d.bG)([Y.Ay], () => (0, y.A)(Y.Ay)),
        h = (0, d.bG)([W.default], () => W.default.getId()),
        f = (0, d.bG)([j.A], () => j.A.getCurrentUserActiveStream()),
        I = null != a && "user" in a ? a.user.id : "",
        p = (0, R.A)(a?.type === el.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, I),
        S = (0, O.A)(I),
        N = (0, d.yK)([j.A], () => j.A.getAllActiveStreams()),
        C = (0, d.bG)([X.A], () => X.A.isFocused());
    return (0, i.jsx)(ec, {
        channel: t,
        streamId: l,
        participantOnScreen: a,
        isVideoAvailable: _,
        isVideoEnabled: E,
        canGoLive: A,
        currentUserId: h,
        activeStreams: N,
        activeSelfStream: f,
        isMainWindowFocused: C,
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: p,
        cameraEncodeError: S,
    });
}

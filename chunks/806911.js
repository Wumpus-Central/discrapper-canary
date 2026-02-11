"use strict";
n.d(t, { A: () => eu });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(205693),
    d = n(397927),
    _ = n(827343),
    f = n(367513),
    h = n(951001),
    p = n(398590),
    g = n(793574),
    E = n(58149),
    A = n(313961),
    I = n(520698),
    T = n(525788),
    y = n(384059),
    S = n(47167),
    v = n(958713),
    C = n(525505),
    b = n(652896),
    N = n(880144),
    R = n(638480),
    O = n(338771),
    D = n(991701),
    L = n(574172),
    w = n(976860),
    x = n(461782),
    P = n(447404),
    M = n(271195),
    k = n(905216),
    U = n(128286),
    G = n(528057),
    F = n(352018),
    V = n(616356),
    B = n(961350),
    j = n(430452),
    H = n(994500),
    Y = n(287809),
    W = n(788318),
    K = n(803301),
    $ = n(531685),
    z = n(954571),
    q = n(562153),
    X = n(427262),
    Z = n(712577),
    Q = n(566331),
    J = n(768088),
    ee = n(256195),
    et = n(729365),
    en = n(566566),
    er = n(222692),
    ei = n(652215),
    ea = n(806931),
    es = n(612071),
    eo = n(976092);
class el extends i.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = i.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, ea.Ay)(e),
            i = null != e && e.type !== ea.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: (e?.type === ea.lp.STREAM || e?.type === ea.lp.USER) && n.type !== ei.rbe.DM,
            canDisconnect: !r,
            isSelf: i,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, b._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ea.Ay)(e) ? t.find((t) => (0, b._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ea.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, R.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        z.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, E.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        z.default.track(ei.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: A.A.getLayout(e.id), ...(0, E.QS)(e.id) });
    }
    handleVideo = (e) => {
        _.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, er.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, p.bz)();
        let t = e.getGuildId() ?? ei.ME;
        (0, w.uh)(t, e.id), h.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && f.A.selectParticipant(n.channelId, (0, b._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        s()((0, ea.Ay)(e), "cannot stop stream for non streamer"),
            (0, y.X)(g.A.VIDEO_PIP, y.O.STREAM, !1),
            (0, O.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, y.X)(g.A.VIDEO_PIP, y.O.POPOUT, !0), L.openChannelCallPopout(e);
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
            canSeeViewers: a,
        } = this.viewProperties;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                a ? this.renderViewersIcon() : null,
                e ? this.renderSettingsIcon() : null,
                t ? this.renderPopoutIcon() : null,
                i ? this.renderStopStreamButton() : null,
                n ? this.renderDisconnectButton() : null,
            ],
        });
    };
    renderDisconnectButton = () =>
        (0, r.jsx)(k.A, { className: es.iq, onClick: () => (0, y.X)(g.A.VIDEO_PIP, y.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, r.jsx)(G.A, { isSelfStream: e, className: es.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            s()(
                (0, ea.Ay)(e) || e?.type === ea.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, r.jsx)(P.A, {
                children: (0, r.jsx)(T.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: es.iq,
                    participant: e,
                    compact: !0,
                }),
            })
        );
    };
    renderPopoutIcon = () =>
        (0, r.jsx)(U.A, {
            className: es.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: ei.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        s()((0, ea.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, b._z)(t) === e.id);
        return null == n || n.state === ei.XYD.ENDED
            ? null
            : (0, r.jsx)(F.A, { stream: n, className: es.iq, appContext: ei.BRT.APP, location: g.A.VIDEO_PIP });
    };
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: i,
                videoStreamError: a,
                cameraEncodeError: s,
            } = this.props;
        if (null != a && null == s) {
            if (t?.type === ea.lp.STREAM) return (0, r.jsx)(J.A, { stream: t.stream, width: n, avError: a });
            else if (t?.type === ea.lp.USER) return (0, r.jsx)(en.A, { userId: t.user.id, width: n, avError: a });
        }
        switch (!0) {
            case e?.state === ei.XYD.ENDED:
                return (0, r.jsx)(Q.A, { stream: e, width: n });
            case e?.state === ei.XYD.FAILED:
                return (0, r.jsx)(J.A, { stream: e, width: n });
            case t?.type === ea.lp.HIDDEN_STREAM:
                return (0, r.jsx)(ee.A, { participant: t, width: n });
            case i:
                return (0, r.jsx)(et.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === ea.lp.STREAM || t?.type === ea.lp.USER) {
            let n = q.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? X.Ay.getName(t.user);
            return (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "always-white",
                className: es.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: a } = this.props,
            s = (0, S.m1)(e, Y.default, H.A),
            o = n?.id === B.default.getId() && i,
            l = this.renderStreamState(),
            u = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== ea.lp.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : (n?.type === ea.lp.USER || n?.type === ea.lp.STREAM) &&
                      (c = (0, r.jsx)(Z.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: j.A.getVideoComponent(),
                          mirror: o,
                          children: (0, r.jsx)(D.A, {
                              size: d._3J.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, r.jsx)(x.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, r.jsx)(M.A, {
                        title: s,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: P.A,
                        width: a,
                        className: eo.a8,
                        videoControlsClassName: u?.state === ei.XYD.ENDED ? es._v : void 0,
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
        a = (0, u.bG)([A.A], () => A.A.getParticipant(t.id, i), [t.id, i]),
        s = (0, u.bG)([j.A], () => l()(j.A.getVideoDevices()).values().first()),
        o = (0, u.bG)(
            [K.A],
            () =>
                null != a && a.type !== ea.lp.ACTIVITY && a.type !== ea.lp.HIDDEN_STREAM
                    ? K.A.getStreamId(a.user.id, t.getGuildId(), (0, I.A)(a.type))
                    : null,
            [a, t],
        ),
        d = null == s || s.disabled,
        _ = !d,
        f = (0, u.bG)([j.A], () => !d && j.A.isVideoEnabled(), [d]),
        h = (0, u.bG)([j.A], () => (0, N.A)(j.A)),
        p = (0, u.bG)([B.default], () => B.default.getId()),
        g = (0, u.bG)([V.A], () => V.A.getCurrentUserActiveStream()),
        E = null != a && "user" in a ? a.user.id : "",
        T = (0, C.A)(a?.type === ea.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, E),
        y = (0, v.A)(E),
        S = (0, u.yK)([V.A], () => V.A.getAllActiveStreams());
    return (0, r.jsx)(el, {
        channel: t,
        streamId: o,
        participantOnScreen: a,
        isVideoAvailable: _,
        isVideoEnabled: f,
        canGoLive: h,
        currentUserId: p,
        activeStreams: S,
        activeSelfStream: g,
        isMainWindowFocused: $.A.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: T,
        cameraEncodeError: y,
    });
}

"use strict";
n.d(t, { A: () => ed });
var i = n(477900),
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    l = n(435558),
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
    b = n(766761),
    M = n(574172),
    P = n(976860),
    U = n(461782),
    w = n(447404),
    G = n(271195),
    x = n(905216),
    k = n(128286),
    F = n(528057),
    V = n(352018),
    B = n(616356),
    H = n(280450),
    j = n(45630),
    W = n(994500),
    Y = n(287809),
    K = n(803301),
    $ = n(531685),
    z = n(174459),
    q = n(562153),
    Z = n(427262),
    X = n(712577),
    Q = n(566331),
    J = n(768088),
    ee = n(256195),
    et = n(729365),
    en = n(566566),
    ei = n(222692),
    er = n(652215),
    ea = n(806931),
    es = n(211269),
    el = n(969426);
class eo extends r.PureComponent {
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
            canSeeParticipantName: (e?.type === ea.lp.STREAM || e?.type === ea.lp.USER) && n.type !== er.rbe.DM,
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
        return (0, ea.Ay)(e) ? t.find((t) => (0, L._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ea.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, D.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        z.default.track(er.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, p.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        z.default.track(er.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: T.A.getLayout(e.id), ...(0, p.QS)(e.id) });
    }
    handleVideo = (e) => {
        E.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, ei.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, I.bz)();
        let t = e.getGuildId() ?? er.ME;
        (0, P.uh)(t, e.id), h.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && A.A.selectParticipant(n.channelId, (0, L._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        s()((0, ea.Ay)(e), "cannot stop stream for non streamer"),
            (0, N.X)(f.A.VIDEO_PIP, N.O.STREAM, !1),
            (0, v.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, N.X)(f.A.VIDEO_PIP, N.O.POPOUT, !0), M.openChannelCallPopout(e);
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
        (0, i.jsx)(x.A, { className: es.iq, onClick: () => (0, N.X)(f.A.VIDEO_PIP, N.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, i.jsx)(F.A, { isSelfStream: e, className: es.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            s()(
                (0, ea.Ay)(e) || e?.type === ea.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, i.jsx)(w.A, {
                children: (0, i.jsx)(S.A, {
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
        (0, i.jsx)(k.A, {
            className: es.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: er.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        s()((0, ea.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, L._z)(t) === e.id);
        return null == n || n.state === er.XYD.ENDED
            ? null
            : (0, i.jsx)(V.A, { stream: n, className: es.iq, appContext: er.BRT.APP, location: f.A.VIDEO_PIP });
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
            if (t?.type === ea.lp.STREAM) return (0, i.jsx)(J.A, { stream: t.stream, width: n, avError: a });
            else if (t?.type === ea.lp.USER) return (0, i.jsx)(en.A, { userId: t.user.id, width: n, avError: a });
        }
        switch (!0) {
            case e?.state === er.XYD.ENDED:
                return (0, i.jsx)(Q.A, { stream: e, width: n });
            case e?.state === er.XYD.FAILED:
                return (0, i.jsx)(J.A, { stream: e, width: n });
            case t?.type === ea.lp.HIDDEN_STREAM:
                return (0, i.jsx)(ee.A, { participant: t, width: n });
            case r:
                return (0, i.jsx)(et.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === ea.lp.STREAM || t?.type === ea.lp.USER) {
            let n = q.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? Z.Ay.getName(t.user);
            return (0, i.jsx)(u.E, {
                variant: "text-md/normal",
                color: "text-overlay-light",
                className: es.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: r, width: a } = this.props,
            s = (0, C.m1)(e, Y.default, W.A),
            l = n?.id === H.default.getId() && r,
            o = this.renderStreamState(),
            d = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== ea.lp.ACTIVITY &&
                (null != o
                    ? (c = o)
                    : (n?.type === ea.lp.USER || n?.type === ea.lp.STREAM) &&
                      (c = (0, i.jsx)(X.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: j.Ay.getVideoComponent(),
                          mirror: l,
                          children: (0, i.jsx)(b.A, {
                              size: _._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, i.jsx)(U.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, i.jsx)(G.A, {
                        title: s,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == o ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: w.A,
                        width: a,
                        className: el.a8,
                        videoControlsClassName: d?.state === er.XYD.ENDED ? es._v : void 0,
                        ...e,
                        children: c,
                    }),
            })
        );
    }
}
function ed(e) {
    let { channel: t, width: n } = e,
        r = (0, d.bG)([m.A], () => m.A.getSpeaker(t.id)),
        a = (0, d.bG)([T.A], () => T.A.getParticipant(t.id, r), [t.id, r]),
        s = (0, d.bG)([j.Ay], () => o()(j.Ay.getVideoDevices()).values().first()),
        l = (0, d.bG)(
            [K.A],
            () =>
                null != a && a.type !== ea.lp.ACTIVITY && a.type !== ea.lp.HIDDEN_STREAM
                    ? K.A.getStreamId(a.user.id, t.getGuildId(), (0, g.A)(a.type))
                    : null,
            [a, t],
        ),
        u = null == s || s.disabled,
        _ = !u,
        E = (0, d.bG)([j.Ay], () => !u && j.Ay.isVideoEnabled(), [u]),
        A = (0, d.bG)([j.Ay], () => (0, y.A)(j.Ay)),
        h = (0, d.bG)([H.default], () => H.default.getId()),
        I = (0, d.bG)([B.A], () => B.A.getCurrentUserActiveStream()),
        f = null != a && "user" in a ? a.user.id : "",
        p = (0, R.A)(a?.type === ea.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, f),
        S = (0, O.A)(f),
        N = (0, d.yK)([B.A], () => B.A.getAllActiveStreams()),
        C = (0, d.bG)([$.A], () => $.A.isFocused());
    return (0, i.jsx)(eo, {
        channel: t,
        streamId: l,
        participantOnScreen: a,
        isVideoAvailable: _,
        isVideoEnabled: E,
        canGoLive: A,
        currentUserId: h,
        activeStreams: N,
        activeSelfStream: I,
        isMainWindowFocused: C,
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: p,
        cameraEncodeError: S,
    });
}

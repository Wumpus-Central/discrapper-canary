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
    h = n(827343),
    f = n(367513),
    p = n(951001),
    E = n(398590),
    m = n(793574),
    g = n(95561),
    A = n(313961),
    I = n(94247),
    T = n(520698),
    S = n(525788),
    y = n(384059),
    N = n(47167),
    v = n(958713),
    C = n(525505),
    R = n(899e3),
    O = n(652896),
    b = n(880144),
    D = n(638480),
    L = n(338771),
    w = n(334557),
    M = n(574172),
    P = n(976860),
    x = n(461782),
    k = n(447404),
    U = n(271195),
    G = n(905216),
    F = n(128286),
    V = n(528057),
    B = n(352018),
    H = n(616356),
    j = n(495544),
    Y = n(890063),
    W = n(994500),
    K = n(287809),
    $ = n(803301),
    z = n(531685),
    q = n(174459),
    X = n(562153),
    Z = n(427262),
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
        return null == n ? null : (0, D.A)(n, e.user, e.user.id === t, this.streamerPaused);
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
        h.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, er.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, E.bz)();
        let t = e.getGuildId() ?? es.ME;
        (0, P.uh)(t, e.id), p.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && f.A.selectParticipant(n.channelId, (0, O._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        a()((0, ea.Ay)(e), "cannot stop stream for non streamer"),
            (0, y.X)(m.A.VIDEO_PIP, y.O.STREAM, !1),
            (0, L.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, y.X)(m.A.VIDEO_PIP, y.O.POPOUT, !0), M.openChannelCallPopout(e);
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
        (0, i.jsx)(G.A, { className: eo.iq, onClick: () => (0, y.X)(m.A.VIDEO_PIP, y.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, i.jsx)(V.A, { isSelfStream: e, className: eo.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            a()(
                (0, ea.Ay)(e) || e?.type === ea.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, i.jsx)(k.A, {
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
        (0, i.jsx)(F.A, {
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
            : (0, i.jsx)(B.A, { stream: n, className: eo.iq, appContext: es.BRT.APP, location: m.A.VIDEO_PIP });
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
            let n = X.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? Z.Ay.getName(t.user);
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
            a = (0, N.m1)(e, K.default, W.A),
            o = n?.id === j.default.getId() && r,
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
                          component: Y.Ay.getVideoComponent(),
                          mirror: o,
                          children: (0, i.jsx)(w.A, {
                              size: _._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, i.jsx)(x.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, i.jsx)(U.A, {
                        title: a,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: k.A,
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
        r = (0, u.bG)([I.A], () => I.A.getSpeaker(t.id)),
        s = (0, u.bG)([A.A], () => A.A.getParticipant(t.id, r), [t.id, r]),
        a = (0, u.bG)([Y.Ay], () => l()(Y.Ay.getVideoDevices()).values().first()),
        o = (0, u.bG)(
            [$.A],
            () =>
                null != s && s.type !== ea.lp.ACTIVITY && s.type !== ea.lp.HIDDEN_STREAM
                    ? $.A.getStreamId(s.user.id, t.getGuildId(), (0, T.A)(s.type))
                    : null,
            [s, t],
        ),
        d = null == a || a.disabled,
        _ = !d,
        h = (0, u.bG)([Y.Ay], () => !d && Y.Ay.isVideoEnabled(), [d]),
        f = (0, u.bG)([Y.Ay], () => (0, b.A)(Y.Ay)),
        p = (0, u.bG)([j.default], () => j.default.getId()),
        E = (0, u.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        m = null != s && "user" in s ? s.user.id : "",
        g = (0, C.A)(s?.type === ea.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, m),
        S = (0, v.A)(m),
        y = (0, u.yK)([H.A], () => H.A.getAllActiveStreams()),
        N = (0, u.bG)([z.A], () => z.A.isFocused()),
        O = (0, R.Qu)();
    return (0, i.jsx)(eu, {
        channel: t,
        streamId: o,
        participantOnScreen: s,
        isVideoAvailable: _,
        isVideoEnabled: h,
        canGoLive: f,
        currentUserId: p,
        activeStreams: y,
        activeSelfStream: E,
        isMainWindowFocused: N || O,
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: g,
        cameraEncodeError: S,
    });
}

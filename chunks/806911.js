"use strict";
n.d(t, { A: () => el });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(205693),
    d = n(397927),
    _ = n(827343),
    f = n(367513),
    p = n(951001),
    h = n(398590),
    m = n(793574),
    E = n(58149),
    g = n(313961),
    A = n(520698),
    I = n(525788),
    T = n(384059),
    S = n(47167),
    y = n(958713),
    v = n(525505),
    N = n(652896),
    C = n(880144),
    R = n(638480),
    O = n(338771),
    b = n(991701),
    D = n(574172),
    L = n(976860),
    w = n(461782),
    M = n(447404),
    P = n(271195),
    x = n(905216),
    k = n(128286),
    U = n(528057),
    G = n(352018),
    F = n(616356),
    V = n(961350),
    B = n(430452),
    H = n(994500),
    j = n(287809),
    Y = n(788318),
    W = n(803301),
    K = n(531685),
    $ = n(954571),
    z = n(562153),
    q = n(427262),
    Z = n(712577),
    X = n(566331),
    Q = n(768088),
    J = n(256195),
    ee = n(729365),
    et = n(566566),
    en = n(222692),
    er = n(652215),
    ei = n(806931),
    es = n(82850),
    ea = n(604949);
class eo extends i.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = i.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, ei.Ay)(e),
            i = null != e && e.type !== ei.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: (e?.type === ei.lp.STREAM || e?.type === ei.lp.USER) && n.type !== er.rbe.DM,
            canDisconnect: !r,
            isSelf: i,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, N._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ei.Ay)(e) ? t.find((t) => (0, N._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ei.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, R.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        $.default.track(er.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, E.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        $.default.track(er.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: g.A.getLayout(e.id), ...(0, E.QS)(e.id) });
    }
    handleVideo = (e) => {
        _.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, en.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, h.bz)();
        let t = e.getGuildId() ?? er.ME;
        (0, L.uh)(t, e.id), p.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && f.A.selectParticipant(n.channelId, (0, N._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        a()((0, ei.Ay)(e), "cannot stop stream for non streamer"),
            (0, T.X)(m.A.VIDEO_PIP, T.O.STREAM, !1),
            (0, O.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, T.X)(m.A.VIDEO_PIP, T.O.POPOUT, !0), D.openChannelCallPopout(e);
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
        (0, r.jsx)(x.A, { className: es.iq, onClick: () => (0, T.X)(m.A.VIDEO_PIP, T.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, r.jsx)(U.A, { isSelfStream: e, className: es.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            a()(
                (0, ei.Ay)(e) || e?.type === ei.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, r.jsx)(M.A, {
                children: (0, r.jsx)(I.A, {
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
        (0, r.jsx)(k.A, {
            className: es.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: er.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        a()((0, ei.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, N._z)(t) === e.id);
        return null == n || n.state === er.XYD.ENDED
            ? null
            : (0, r.jsx)(G.A, { stream: n, className: es.iq, appContext: er.BRT.APP, location: m.A.VIDEO_PIP });
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
            if (t?.type === ei.lp.STREAM) return (0, r.jsx)(Q.A, { stream: t.stream, width: n, avError: s });
            else if (t?.type === ei.lp.USER) return (0, r.jsx)(et.A, { userId: t.user.id, width: n, avError: s });
        }
        switch (!0) {
            case e?.state === er.XYD.ENDED:
                return (0, r.jsx)(X.A, { stream: e, width: n });
            case e?.state === er.XYD.FAILED:
                return (0, r.jsx)(Q.A, { stream: e, width: n });
            case t?.type === ei.lp.HIDDEN_STREAM:
                return (0, r.jsx)(J.A, { participant: t, width: n });
            case i:
                return (0, r.jsx)(ee.A, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === ei.lp.STREAM || t?.type === ei.lp.USER) {
            let n = z.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? q.Ay.getName(t.user);
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
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: s } = this.props,
            a = (0, S.m1)(e, j.default, H.A),
            o = n?.id === V.default.getId() && i,
            l = this.renderStreamState(),
            u = this.activeStreamForSelectedParticipant,
            c = null;
        return (
            n?.type !== ei.lp.ACTIVITY &&
                (null != l
                    ? (c = l)
                    : (n?.type === ei.lp.USER || n?.type === ei.lp.STREAM) &&
                      (c = (0, r.jsx)(Z.A, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: B.Ay.getVideoComponent(),
                          mirror: o,
                          children: (0, r.jsx)(b.A, {
                              size: d._3J.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, r.jsx)(w.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, r.jsx)(P.A, {
                        title: a,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: M.A,
                        width: s,
                        className: ea.a8,
                        videoControlsClassName: u?.state === er.XYD.ENDED ? es._v : void 0,
                        ...e,
                        children: c,
                    }),
            })
        );
    }
}
function el(e) {
    let { channel: t, width: n } = e,
        i = (0, u.bG)([Y.A], () => Y.A.getSpeaker(t.id)),
        s = (0, u.bG)([g.A], () => g.A.getParticipant(t.id, i), [t.id, i]),
        a = (0, u.bG)([B.Ay], () => l()(B.Ay.getVideoDevices()).values().first()),
        o = (0, u.bG)(
            [W.A],
            () =>
                null != s && s.type !== ei.lp.ACTIVITY && s.type !== ei.lp.HIDDEN_STREAM
                    ? W.A.getStreamId(s.user.id, t.getGuildId(), (0, A.A)(s.type))
                    : null,
            [s, t],
        ),
        d = null == a || a.disabled,
        _ = !d,
        f = (0, u.bG)([B.Ay], () => !d && B.Ay.isVideoEnabled(), [d]),
        p = (0, u.bG)([B.Ay], () => (0, C.A)(B.Ay)),
        h = (0, u.bG)([V.default], () => V.default.getId()),
        m = (0, u.bG)([F.A], () => F.A.getCurrentUserActiveStream()),
        E = null != s && "user" in s ? s.user.id : "",
        I = (0, v.A)(s?.type === ei.lp.STREAM ? c.x.STREAM : c.x.DEFAULT, E),
        T = (0, y.A)(E),
        S = (0, u.yK)([F.A], () => F.A.getAllActiveStreams());
    return (0, r.jsx)(eo, {
        channel: t,
        streamId: o,
        participantOnScreen: s,
        isVideoAvailable: _,
        isVideoEnabled: f,
        canGoLive: p,
        currentUserId: h,
        activeStreams: S,
        activeSelfStream: m,
        isMainWindowFocused: K.A.isFocused(),
        width: n,
        isOverlayRenderingVideo: !1,
        videoStreamError: I,
        cameraEncodeError: T,
    });
}

"use strict";
n.d(t, { Ay: () => Z, rB: () => Y }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(615300),
    c = n(621466),
    d = n(933681),
    _ = n(939249),
    f = n(113494),
    p = n(782134),
    h = n(43990),
    E = n(607470),
    m = n(384015),
    g = n(945810),
    A = n(953051),
    I = n(423562),
    T = n(544180),
    S = n(186835),
    y = n(954571),
    N = n(927813),
    v = n(824744),
    C = n(475815),
    O = n(953584),
    R = n(122641),
    b = n(242254),
    D = n(893598),
    L = n(338659),
    w = n(410694),
    M = n(20504),
    P = n(652215),
    x = n(838541),
    k = n(650583),
    U = n(985018),
    G = n(277446),
    F = n(653307);
let V = "-:--",
    B = { friction: 14, tension: 200 },
    H = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    j = { width: "100%", height: "100%", backgroundColor: "black" };
function Y(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
let W = (e) => {
    let { current: t, duration: n } = e,
        i = null != t ? Y(t) : V,
        s = null != n ? Y(n) : V;
    return (
        (i = i.padStart(s.length, "0")),
        (0, r.jsxs)("div", {
            className: G.d$,
            children: [
                (0, r.jsx)("span", { className: G.Ue, children: i }),
                (0, r.jsx)("span", { className: G.zO, children: "/" }),
                (0, r.jsx)("span", { className: G.Ue, children: s }),
            ],
        })
    );
};
class K extends i.Component {
    static defaultProps = { disabled: !1 };
    state = { translateY: new u.A.Value(0) };
    volumeButton;
    durationBar;
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        let { hide: t, playing: n } = this.props;
        t && !e.hide
            ? (this.animateControls(1, n), this.volumeButton?.blur(), this.props.onControlsHide?.())
            : !t && e.hide && (this.animateControls(0, n), this.props.onControlsShow?.());
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t ? u.A.spring(n, { toValue: e, ...B }).start() : n.setValue(e);
    }
    setDurationRef = (e) => {
        this.durationBar = e;
    };
    setVolumeButtonRef = (e) => {
        this.volumeButton = e;
    };
    getAnimatedStyle() {
        let { translateY: e } = this.state;
        return { transform: [{ translateY: e.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) }] };
    }
    renderPlayIcon() {
        let { playing: e, currentTime: t, duration: n, onPause: i, onPlay: s, disabled: a } = this.props;
        return e
            ? (0, r.jsx)(_.D, {
                  className: G.CY,
                  onClick: i,
                  tabIndex: a ? -1 : 0,
                  "aria-label": U.intl.string(U.t.ZcgDJX),
                  children: (0, r.jsx)(f.E, { size: "xs", color: "currentColor", className: G.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, r.jsx)(_.D, {
                    className: G.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": U.intl.string(U.t.hsvh0i),
                    children: (0, r.jsx)(S.A, { className: G.pd }, "replay"),
                })
              : (0, r.jsx)(_.D, {
                    className: G.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": U.intl.string(U.t.RscU7I),
                    children: (0, r.jsx)(p.u, { size: "xs", color: "currentColor", className: G.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: i,
            muted: s,
            onDrag: a,
            onDragEnd: o,
            onDragStart: l,
            onToggleMuted: c,
            onVolumeShow: d,
            onVolumeHide: _,
            width: f,
            volume: p,
            type: h,
        } = this.props;
        return (0, r.jsxs)(u.A.div, {
            className: h === H.VIDEO ? G._v : G.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof f || f > 250 ? (0, r.jsx)(W, { current: n, duration: i }) : null,
                (0, r.jsx)(R.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: a,
                    onDragEnd: o,
                    onDragStart: l,
                    type: R.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, r.jsx)("div", {
                    className: F.Uu,
                    children: (0, r.jsx)(M.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, R.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: _,
                        iconClassName: G.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: G.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function $(e) {
    let { fileName: t, fileSize: n, src: i, disabled: s, mimeType: a, hideDownloadButton: o } = e;
    return (0, r.jsxs)("div", {
        className: G.WU,
        children: [
            (0, r.jsxs)("div", {
                className: G.xe,
                children: [
                    s
                        ? t
                        : (0, r.jsx)(m.A, { href: i, className: G.kH, iconClassName: G.XR, mimeType: a, fileName: t }),
                    (0, r.jsx)("div", { className: G.fL, children: n }),
                ],
            }),
            !o && (0, r.jsx)(m.A, { href: i, className: G.kH, iconClassName: G.XR, mimeType: a }),
        ],
    });
}
class z extends i.Component {
    state = { play: !1, scale: new u.A.Value(0), opacity: new u.A.Value(0) };
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    popAnimation = () => {
        let { opacity: e, scale: t } = this.state;
        t.setValue(0),
            e.setValue(0),
            u.A.parallel([
                u.A.sequence([
                    u.A.timing(e, { toValue: 1, duration: 200 }),
                    u.A.timing(e, { toValue: 0, duration: 200 }),
                ]),
                u.A.spring(t, { toValue: 1.5, ...B, friction: 80 }),
            ]).start();
    };
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return u.A.accelerate({
            opacity: e.interpolate({ inputRange: [0, 1], outputRange: [0, 0.8] }),
            transform: [{ scale: t.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? p.u : f.E;
        return (0, r.jsx)(u.A.div, {
            className: G.kO,
            style: this.getAnimatedStyle(),
            children: (0, r.jsx)(t, { className: G.PK }),
        });
    }
}
let q = (0, g.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class X {
    metadata;
    playTimeSec = 0;
    playWallTimeMs = 0;
    firstPlayWaitingMs = 0;
    stallCount = 0;
    stallMs = 0;
    seekCount = 0;
    seekWaitingMs = 0;
    errorMessage = null;
    errorCode = null;
    stateTime = performance.now();
    currentState = "not_started";
    playbackStartTime;
    lastPlayingTime;
    analyticsEnabled;
    constructor(e) {
        (this.metadata = e), (this.analyticsEnabled = q.getConfig({ location: "media_player" }).enabled);
    }
    moveToState(e) {
        (this.stateTime = performance.now()), (this.currentState = e);
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    sendEvent() {
        this.analyticsEnabled &&
            (null == this.errorCode &&
                null == this.errorMessage &&
                !1 === this.metadata.hasValidFrame &&
                ((this.errorCode = 4),
                (this.errorMessage = "No valid video frames detected - codec may be unsupported")),
            y.default.track(P.HAw.MEDIA_PLAY_FINISHED, {
                play_time_sec: this.playTimeSec,
                play_wall_time_ms: this.playWallTimeMs,
                first_play_waiting_ms: this.firstPlayWaitingMs,
                stall_count: this.stallCount,
                stall_ms: this.stallMs,
                seek_count: this.seekCount,
                seek_waiting_ms: this.seekWaitingMs,
                media_source: this.metadata.src,
                mime_type: this.metadata.mimeType,
                file_size: this.metadata.fileSize,
                file_duration_sec: this.metadata.fileDurationSec,
                connection_type: T.A.getType(),
                effective_connection_speed: T.A.getEffectiveConnectionSpeed(),
                service_provider: T.A.getServiceProvider(),
                error_message: this.errorMessage,
                error_code: this.errorCode,
            })),
            (this.playTimeSec = 0),
            (this.playWallTimeMs = 0),
            (this.firstPlayWaitingMs = 0),
            (this.stallCount = 0),
            (this.stallMs = 0),
            (this.seekCount = 0),
            (this.seekWaitingMs = 0),
            (this.playbackStartTime = void 0),
            (this.lastPlayingTime = void 0),
            this.moveToState("not_started");
    }
    updatePlayTime(e) {
        (this.playTimeSec += Math.max((this.lastPlayingTime ?? e) - (this.playbackStartTime ?? 0), 0)),
            (this.playWallTimeMs += this.timeInState());
    }
    onWaiting = (e) => {
        switch (this.currentState) {
            case "not_started":
                this.moveToState("not_started_waiting");
                break;
            case "playing":
                this.updatePlayTime(e.currentTarget.currentTime), (this.stallCount += 1), this.moveToState("stalled");
                break;
            case "seeking":
            case "not_started_waiting":
            case "stalled":
                break;
            case "paused":
            case "seeked":
                this.moveToState("stalled");
                break;
            default:
                (0, d.dr)(this.currentState);
        }
    };
    onSeeking = (e) => {
        switch (this.currentState) {
            case "seeking":
            case "seeked":
                this.moveToState("seeking");
                return;
            case "stalled":
                this.stallMs += this.timeInState();
                break;
            case "playing":
                this.updatePlayTime(e.currentTarget.currentTime);
                break;
            case "not_started":
            case "not_started_waiting":
            case "paused":
                break;
            default:
                (0, d.dr)(this.currentState);
        }
        (this.seekCount += 1), this.moveToState("seeking");
    };
    onSeeked = (e) => {
        switch (this.currentState) {
            case "seeking":
            case "seeked":
                let t = this.stateTime;
                this.moveToState("seeked"), (this.stateTime = t);
                break;
            case "not_started":
            case "not_started_waiting":
            case "stalled":
            case "playing":
            case "paused":
                break;
            default:
                (0, d.dr)(this.currentState);
        }
    };
    onPause = (e) => {
        switch (this.currentState) {
            case "playing":
                this.updatePlayTime(e.currentTarget.currentTime), this.moveToState("paused"), this.sendEvent();
                break;
            case "stalled":
                (this.stallMs += this.timeInState()), this.moveToState("paused"), this.sendEvent();
                break;
            case "not_started":
            case "not_started_waiting":
            case "paused":
            case "seeking":
                break;
            case "seeked":
                (this.seekWaitingMs += this.timeInState()), (this.seekCount += 1);
                break;
            default:
                (0, d.dr)(this.currentState);
        }
    };
    onError = (e) => {
        this.moveToState("paused"), this.sendEvent();
    };
    onPlaying = (e) => {
        switch (this.currentState) {
            case "playing":
                return;
            case "not_started":
                this.firstPlayWaitingMs = 0;
                break;
            case "not_started_waiting":
                this.firstPlayWaitingMs = this.timeInState();
                break;
            case "stalled":
                this.stallMs += this.timeInState();
                break;
            case "seeked":
                this.seekWaitingMs += this.timeInState();
                break;
            case "paused":
            case "seeking":
                break;
            default:
                (0, d.dr)(this.currentState);
        }
        (this.playbackStartTime = e.currentTarget.currentTime), this.moveToState("playing");
    };
    onTimeUpdate = (e) => {
        switch (this.currentState) {
            case "playing":
                this.lastPlayingTime = e.currentTarget.currentTime;
                return;
            case "not_started":
            case "not_started_waiting":
            case "stalled":
            case "seeked":
            case "paused":
            case "seeking":
                break;
            default:
                (0, d.dr)(this.currentState);
        }
    };
    onDragStart = (e) => {
        null != e && (this.lastPlayingTime = e);
    };
    onLoadedMetadata = (e) => {
        this.metadata.fileDurationSec = e.currentTarget.duration;
    };
}
class Q extends i.PureComponent {
    static Types = H;
    static defaultProps = {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1,
    };
    static minWidth = 150;
    static minHeight = 110;
    _unmounted = !1;
    _lastMove = 0;
    _analytics;
    _statsCollector = null;
    _hasStatsListener = !1;
    mediaRef = i.createRef();
    controlsRef = i.createRef();
    handleVideoRef = (e) => {
        (this.mediaRef.current = e), null != this.props.videoRef && (this.props.videoRef.current = e);
    };
    playPausePopRef = i.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        super(e), (this._analytics = new X({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: r, playable: i } = this.props,
            s = "function" == typeof r ? r() : r,
            a = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !i,
            muted: a,
            volume: s,
            playing: t,
            preload: "none",
            width: Q.minWidth,
            height: Q.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: r, src: i } = this.props;
        if (
            r === H.VIDEO &&
            (O.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            O.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                O.Ay.setVideoStats(i, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: r, onMute: i, src: s, type: a },
            state: { playing: o, fullscreen: l, muted: u, dragging: c, volume: d, showStats: _ },
        } = this;
        if (s !== e.src && a === H.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                O.Ay.clearVideoStats(e.src);
            let t = O.Ay.isVideoStatsEnabled(s);
            _ !== t && (t ? this.toggleStats() : _ && this.toggleStats());
        }
        let { current: f } = this.mediaRef,
            { current: p } = this.playPausePopRef;
        if (null == f) return;
        o && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && p?.pop(o))
            : !o && t.playing && (f.pause(), p?.pop(o), n?.()),
            o && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let h = (0, C.qf)(f.parentNode, f);
        l && !t.fullscreen && null != h
            ? ((0, C.tl)(h), h.addEventListener(C.Wb, this.handleFullScreenExit))
            : !l &&
              t.fullscreen &&
              null != h &&
              (h.removeEventListener(C.Wb, this.handleFullScreenExit), (0, C.sP)(h, h.ownerDocument)),
            c === R.A.Types.DURATION && t.dragging !== R.A.Types.DURATION && o
                ? f.pause()
                : c !== R.A.Types.DURATION && t.dragging === R.A.Types.DURATION && o && f.play(),
            u !== t.muted && ((f.muted = u), i?.(u)),
            d !== t.volume && ((f.volume = d), r?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (O.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === H.VIDEO && O.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, C.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(C.Wb, this.handleFullScreenExit), (0, C.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: r } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let s = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (s.volume = e));
            }
            if ("function" == typeof r) {
                let e = r();
                e !== this.state.muted && ((i.muted = e), (s.muted = e));
            }
            this.setState(s), i.play(), t?.(e, i.currentTime * N.A.Millis.SECOND, i.duration * N.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, Q.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, Q.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, C.qf)(e.parentNode, e);
        (null != t && (0, C._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
    };
    toggleFullscreen = () => {
        if (null != this.props.onFullscreenChange) return void this.props.onFullscreenChange(!this.state.fullscreen);
        let e = !this.state.fullscreen;
        this.setState({ fullscreen: e });
    };
    setMuted = (e) => {
        this.setState({ muted: e });
    };
    toggleMuted = () => {
        this.setMuted(!this.state.muted);
    };
    setTime = (() => {
        var e = this;
        return function (t) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { current: r } = e.mediaRef;
            null != r &&
                isFinite(r.duration) &&
                isFinite(r.currentTime) &&
                ((r.currentTime = t), e.updateValue(t / r.duration, n), e.updateTime(t, r.duration));
        };
    })();
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            r = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== r) && this.setState({ currentTime: n, duration: r });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
        n !== this.state.hideControls && null == e && this.setState({ hideControls: n });
    }
    handleUIUpdate = () => {
        if (!this.state.playing || this._unmounted) return;
        let { current: e } = this.mediaRef;
        null != e &&
            (e.duration > 0 && this.updateValue(e.currentTime / e.duration),
            this.updateTime(e.currentTime, e.duration),
            this.updateControlsVisibility(),
            requestAnimationFrame(this.handleUIUpdate));
    };
    handleDrag = (e, t) => {
        let { current: n } = this.mediaRef;
        if (t === R.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === R.A.Types.VOLUME) {
            let t = (0, v.w)(e, 1);
            0 === t
                ? this.setState({ muted: !0, volume: t })
                : this.state.muted && t > 0
                  ? this.setState({ muted: !1, volume: t })
                  : this.setState({ volume: t });
        }
    };
    handleLoaded = (e) => {
        this._analytics.onLoadedMetadata(e);
        let { current: t } = this.mediaRef;
        null != t &&
            (null != this.props.initialTimeSec &&
                this.props.initialTimeSec > 0 &&
                (t.currentTime = this.props.initialTimeSec),
            this.updateTime(t.currentTime, t.duration),
            this.setState({ hasLoadedMetadata: !0, currentTime: t.currentTime, duration: t.duration }));
    };
    handleDurationChange = () => {
        let { current: e } = this.mediaRef;
        null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
    };
    handleBuffer = l().debounce(() => {
        let { current: e } = this.mediaRef;
        null == e
            ? this.setState({ buffers: [] })
            : this.setState({
                  buffers: (function (e) {
                      let t = [],
                          { duration: n } = e;
                      for (let r = 0; r < e.buffered.length; r++) {
                          let i = e.buffered.start(r),
                              s = e.buffered.end(r);
                          if (s - i < 1) continue;
                          let a = (s - i) / n,
                              o = i / n;
                          t.push([o, a]);
                      }
                      return t;
                  })(e),
              });
    }, 400);
    handleEnded = (e) => {
        let { onEnded: t } = this.props;
        null != t && t(e), this.setState({ playing: !1, hideControls: !1 });
    };
    handleMouseMove = () => {
        this._lastMove = Date.now();
    };
    handleMouseLeave = () => {
        this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
    };
    handleMouseEnter = () => {
        "none" === this.state.preload && this.setState({ preload: "metadata" }), this.setState({ hovering: !0 });
    };
    handleVideoClick = (e) => {
        let {
            state: { hasClickedPlay: t, playing: n },
            props: { onClick: r, autoPlay: i, autoMute: s },
        } = this;
        null != r
            ? r(e)
            : (e.stopPropagation(),
              i && !t && n && s && this.state.muted
                  ? this.setState({ muted: !1, hasClickedPlay: !0 })
                  : this.setPlay(!this.state.playing));
    };
    setPlay = (e) => {
        let {
            props: { autoMute: t },
            state: { hasClickedPlay: n, muted: r },
        } = this;
        e !== this.state.playing &&
            (e
                ? this.setState({ playing: e, hasClickedPlay: !0, muted: (!!n || !t || !r) && r })
                : this.setState({ playing: !1, hideControls: !1 }));
    };
    handleDragStart = (e) => {
        this.setState({ dragging: e }), this._analytics.onDragStart(this.mediaRef.current?.currentTime ?? null);
    };
    handleDragEnd = () => {
        this.setState({ dragging: null }), (this._lastMove = Date.now());
    };
    handleKeyDown = (e) => {
        let { current: t } = this.mediaRef,
            { disableArrowKeySeek: n } = this.props;
        if (e.key === k.dh.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.key !== k.dh.ARROW_LEFT || null == t || n)
            if (e.key !== k.dh.ARROW_RIGHT || null == t || n) {
                if ((0, A.A)(e.key) && null != t) {
                    e.preventDefault(), e.stopPropagation();
                    let n = Number(e.key) / 10;
                    (t.currentTime = t.duration * n), this.setPlay(!0);
                }
            } else {
                e.preventDefault(), e.stopPropagation();
                let n = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
                this.setTime(n);
            }
        else {
            e.preventDefault(), e.stopPropagation();
            let n = Math.max(0, t.currentTime - 5);
            this.setTime(n);
        }
    };
    handleError = (e) => {
        let t = e.currentTarget;
        (this._analytics.errorCode = t.error?.code ?? null),
            (this._analytics.errorMessage = t.error?.message ?? null),
            this._analytics.onError(e);
    };
    _isUpdatingStats = !1;
    toggleStats = () => {
        let { showStats: e } = this.state,
            { current: t } = this.mediaRef,
            { src: n } = this.props;
        if (e)
            null != this._statsCollector && this._statsCollector.stopTracking(),
                (this._isUpdatingStats = !0),
                this.setState({ showStats: !1 }, () => {
                    (this._isUpdatingStats = !1), this._unmounted || O.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, c.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new L.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        (this._isUpdatingStats = !1), this._unmounted || O.Ay.setVideoStats(this.props.src, !0);
                    });
            } catch (e) {
                null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || O.Ay.setVideoStats(this.props.src, !1);
            }
        else O.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== H.VIDEO ||
            this._isUpdatingStats ||
            (O.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: i, responsive: s, mediaLayoutType: a } = this.props,
            { playing: o, fullscreen: l } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return i
            ? (0, r.jsx)(E.A, {
                  alt: e,
                  className: G.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: u,
                  responsive: s && !l,
                  mediaLayoutType: a,
                  playsInline: !0,
                  autoPlay: o,
              })
            : (0, r.jsx)(E.A, {
                  alt: e,
                  className: G.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: s && !l,
                  mediaLayoutType: l ? x.dG.STATIC : a,
                  onClick: this.handleVideoClick,
                  onEnded: this.handleEnded,
                  onError: this.handleError,
                  onWaiting: this._analytics.onWaiting,
                  onSeeking: this._analytics.onSeeking,
                  onSeeked: this._analytics.onSeeked,
                  onPause: this._analytics.onPause,
                  onPlaying: this._analytics.onPlaying,
                  onTimeUpdate: this._analytics.onTimeUpdate,
                  onLoadedMetadata: this.handleLoaded,
                  onProgress: this.handleBuffer,
                  poster: n,
                  preload: this.state.preload,
                  ref: this.handleVideoRef,
                  width: u,
                  src: t,
              });
    }
    renderAudio() {
        return (0, r.jsx)("audio", {
            className: G.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, r.jsx)("source", { src: this.props.src }),
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: i = !0,
                    onVolumeShow: s,
                    onVolumeHide: a,
                    onControlsHide: o,
                    onControlsShow: l,
                },
                state: {
                    buffers: u,
                    currentTime: c,
                    duration: d,
                    hasClickedPlay: _,
                    hideControls: f,
                    muted: p,
                    playing: h,
                    fullscreen: E,
                    volume: m,
                    dragging: g,
                },
            } = this,
            A = this.getWidth();
        return _ || n || t === H.AUDIO
            ? (0, r.jsx)(K, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, v.M)(m, 1),
                  hide: t === H.VIDEO && f,
                  muted: p,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: s,
                  onVolumeHide: a,
                  onControlsShow: l,
                  onControlsHide: o,
                  playing: h,
                  dragging: g,
                  type: t,
                  ref: this.controlsRef,
                  width: E ? window.screen.width : A,
                  disabled: !i,
                  children:
                      t === H.VIDEO
                          ? (0, r.jsx)(I.A, {
                                "aria-label": U.intl.string(U.t["2nM3Pk"]),
                                className: G.CY,
                                iconClassName: G.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, C.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, r.jsx)(b.A, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: s, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : i === H.AUDIO
              ? (0, r.jsx)($, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: a, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, r.jsx)(z, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r ? j : t === H.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: s,
                renderLinkComponent: o,
                responsive: l,
                mediaLayoutType: u,
                renderOverlayContent: c,
            } = this.props,
            { fullscreen: d, hideControls: _, playing: f } = this.state,
            p = G.ub;
        if ((t === H.AUDIO ? (p = G._X) : _ ? (p = G.CX) : f && (p = G.sw), i && t === H.VIDEO)) {
            let t = this.getWidth();
            return (0, r.jsxs)("div", {
                className: a()(p, { [G.mE]: u === x.dG.MOSAIC }),
                style: l ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, r.jsx)("div", {
                        className: G.s4,
                        children: (0, r.jsx)(D.A, {
                            className: G.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o,
                        }),
                    }),
                ],
            });
        }
        return (0, r.jsxs)("div", {
            className: a()(p, G.mr, s, { [G.mE]: u === x.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: f ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === H.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, r.jsx)(h.N, {
                    theme: P.NJ8.MIDNIGHT,
                    children: (e) => (0, r.jsx)("div", { className: e, children: this.renderControls() }),
                }),
                t === H.VIDEO ? this.renderPlayPausePop() : null,
                null != c ? (0, r.jsx)("div", { className: a()({ [G.eM]: f || d }), children: c() }) : null,
                t === H.VIDEO && this.state.showStats && null != this.state.videoStats
                    ? (0, r.jsx)(w.J, { stats: this.state.videoStats, onClose: this.toggleStats })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== H.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            n = e.currentTime,
            r = e.readyState;
        if (0 === t && r >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    r = e.currentTime;
                if (0 === t && r > n + 0.5) {
                    this._analytics.metadata.hasValidFrame = !1;
                    return;
                }
                if (t > 0) {
                    this._analytics.metadata.hasValidFrame = !0;
                    return;
                }
            }, 1500);
        if (t > 0) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
    }
}
let Z = Q;

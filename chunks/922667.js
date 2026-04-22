"use strict";
n.d(t, { Ay: () => X, rB: () => W }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(615300),
    u = n(621466),
    d = n(933681),
    h = n(939249),
    m = n(113494),
    p = n(782134),
    f = n(43990),
    g = n(607470),
    _ = n(384015),
    x = n(945810),
    A = n(953051),
    C = n(201181),
    E = n(544180),
    I = n(186835),
    v = n(954571),
    y = n(927813),
    S = n(824744),
    b = n(475815),
    N = n(953584),
    T = n(122641),
    j = n(242254),
    R = n(893598),
    w = n(338659),
    L = n(410694),
    M = n(20504),
    k = n(652215),
    O = n(838541),
    P = n(650583),
    D = n(985018),
    U = n(277446),
    V = n(653307);
let G = "-:--",
    F = { friction: 14, tension: 200 },
    B = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    H = { width: "100%", height: "100%", backgroundColor: "black" };
function W(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
let K = (e) => {
    let { current: t, duration: n } = e,
        l = null != t ? W(t) : G,
        s = null != n ? W(n) : G;
    return (
        (l = l.padStart(s.length, "0")),
        (0, i.jsxs)("div", {
            className: U.d$,
            children: [
                (0, i.jsx)("span", { className: U.Ue, children: l }),
                (0, i.jsx)("span", { className: U.zO, children: "/" }),
                (0, i.jsx)("span", { className: U.Ue, children: s }),
            ],
        })
    );
};
class z extends l.Component {
    static defaultProps = { disabled: !1 };
    state = { translateY: new c.A.Value(0) };
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
        t ? c.A.spring(n, { toValue: e, ...F }).start() : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: l, onPlay: s, disabled: r } = this.props;
        return e
            ? (0, i.jsx)(h.D, {
                  className: U.CY,
                  onClick: l,
                  tabIndex: r ? -1 : 0,
                  "aria-label": D.intl.string(D.t.ZcgDJX),
                  children: (0, i.jsx)(m.E, { size: "xs", color: "currentColor", className: U.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, i.jsx)(h.D, {
                    className: U.CY,
                    onClick: s,
                    tabIndex: r ? -1 : 0,
                    "aria-label": D.intl.string(D.t.hsvh0i),
                    children: (0, i.jsx)(I.A, { className: U.pd }, "replay"),
                })
              : (0, i.jsx)(h.D, {
                    className: U.CY,
                    onClick: s,
                    tabIndex: r ? -1 : 0,
                    "aria-label": D.intl.string(D.t.RscU7I),
                    children: (0, i.jsx)(p.u, { size: "xs", color: "currentColor", className: U.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: l,
            muted: s,
            onDrag: r,
            onDragEnd: a,
            onDragStart: o,
            onToggleMuted: u,
            onVolumeShow: d,
            onVolumeHide: h,
            width: m,
            volume: p,
            type: f,
        } = this.props;
        return (0, i.jsxs)(c.A.div, {
            className: f === B.VIDEO ? U._v : U.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof m || m > 250 ? (0, i.jsx)(K, { current: n, duration: l }) : null,
                (0, i.jsx)(T.A, {
                    buffers: e,
                    value: l ?? 0,
                    onDrag: r,
                    onDragEnd: a,
                    onDragStart: o,
                    type: T.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, i.jsx)("div", {
                    className: V.Uu,
                    children: (0, i.jsx)(M.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => r(e, T.A.Types.VOLUME),
                        onToggleMute: u,
                        onVolumeShow: d,
                        onVolumeHide: h,
                        iconClassName: U.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: U.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function Z(e) {
    let { fileName: t, fileSize: n, src: l, disabled: s, mimeType: r, hideDownloadButton: a } = e;
    return (0, i.jsxs)("div", {
        className: U.WU,
        children: [
            (0, i.jsxs)("div", {
                className: U.xe,
                children: [
                    s
                        ? t
                        : (0, i.jsx)(_.A, { href: l, className: U.kH, iconClassName: U.XR, mimeType: r, fileName: t }),
                    (0, i.jsx)("div", { className: U.fL, children: n }),
                ],
            }),
            !a && (0, i.jsx)(_.A, { href: l, className: U.kH, iconClassName: U.XR, mimeType: r }),
        ],
    });
}
class q extends l.Component {
    state = { play: !1, scale: new c.A.Value(0), opacity: new c.A.Value(0) };
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    popAnimation = () => {
        let { opacity: e, scale: t } = this.state;
        t.setValue(0),
            e.setValue(0),
            c.A.parallel([
                c.A.sequence([
                    c.A.timing(e, { toValue: 1, duration: 200 }),
                    c.A.timing(e, { toValue: 0, duration: 200 }),
                ]),
                c.A.spring(t, { toValue: 1.5, ...F, friction: 80 }),
            ]).start();
    };
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return c.A.accelerate({
            opacity: e.interpolate({ inputRange: [0, 1], outputRange: [0, 0.8] }),
            transform: [{ scale: t.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? p.u : m.E;
        return (0, i.jsx)(c.A.div, {
            className: U.kO,
            style: this.getAnimatedStyle(),
            children: (0, i.jsx)(t, { className: U.PK }),
        });
    }
}
let Y = (0, x.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class J {
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
        (this.metadata = e), (this.analyticsEnabled = Y.getConfig({ location: "media_player" }).enabled);
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
            v.default.track(k.HAw.MEDIA_PLAY_FINISHED, {
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
                connection_type: E.A.getType(),
                effective_connection_speed: E.A.getEffectiveConnectionSpeed(),
                service_provider: E.A.getServiceProvider(),
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
class $ extends l.PureComponent {
    static Types = B;
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
    mediaRef = l.createRef();
    controlsRef = l.createRef();
    handleVideoRef = (e) => {
        (this.mediaRef.current = e), null != this.props.videoRef && (this.props.videoRef.current = e);
    };
    playPausePopRef = l.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        super(e), (this._analytics = new J({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: i, playable: l } = this.props,
            s = "function" == typeof i ? i() : i,
            r = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !l,
            muted: r,
            volume: s,
            playing: t,
            preload: "none",
            width: $.minWidth,
            height: $.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: i, src: l } = this.props;
        if (
            i === B.VIDEO &&
            (N.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            N.Ay.isVideoStatsEnabled(l) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                N.Ay.setVideoStats(l, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: i, onMute: l, src: s, type: r },
            state: { playing: a, fullscreen: o, muted: c, dragging: u, volume: d, showStats: h },
        } = this;
        if (s !== e.src && r === B.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                N.Ay.clearVideoStats(e.src);
            let t = N.Ay.isVideoStatsEnabled(s);
            h !== t && (t ? this.toggleStats() : h && this.toggleStats());
        }
        let { current: m } = this.mediaRef,
            { current: p } = this.playPausePopRef;
        if (null == m) return;
        a && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && p?.pop(a))
            : !a && t.playing && (m.pause(), p?.pop(a), n?.()),
            a && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let f = (0, b.qf)(m.parentNode, m);
        o && !t.fullscreen && null != f
            ? ((0, b.tl)(f), f.addEventListener(b.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(b.Wb, this.handleFullScreenExit), (0, b.sP)(f, f.ownerDocument)),
            u === T.A.Types.DURATION && t.dragging !== T.A.Types.DURATION && a
                ? m.pause()
                : u !== T.A.Types.DURATION && t.dragging === T.A.Types.DURATION && a && m.play(),
            c !== t.muted && ((m.muted = c), l?.(c)),
            d !== t.volume && ((m.volume = d), i?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (N.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === B.VIDEO && N.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, b.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(b.Wb, this.handleFullScreenExit), (0, b.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: i } = this.props,
            { current: l } = this.mediaRef;
        if (null != l) {
            let s = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((l.volume = e), (s.volume = e));
            }
            if ("function" == typeof i) {
                let e = i();
                e !== this.state.muted && ((l.muted = e), (s.muted = e));
            }
            this.setState(s), l.play(), t?.(e, l.currentTime * y.A.Millis.SECOND, l.duration * y.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, $.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, $.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, b.qf)(e.parentNode, e);
        (null != t && (0, b._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
                { current: i } = e.mediaRef;
            null != i &&
                isFinite(i.duration) &&
                isFinite(i.currentTime) &&
                ((i.currentTime = t), e.updateValue(t / i.duration, n), e.updateTime(t, i.duration));
        };
    })();
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            i = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== i) && this.setState({ currentTime: n, duration: i });
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
        if (t === T.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === T.A.Types.VOLUME) {
            let t = (0, S.w)(e, 1);
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
    handleBuffer = o().debounce(() => {
        let { current: e } = this.mediaRef;
        null == e
            ? this.setState({ buffers: [] })
            : this.setState({
                  buffers: (function (e) {
                      let t = [],
                          { duration: n } = e;
                      for (let i = 0; i < e.buffered.length; i++) {
                          let l = e.buffered.start(i),
                              s = e.buffered.end(i);
                          if (s - l < 1) continue;
                          let r = (s - l) / n,
                              a = l / n;
                          t.push([a, r]);
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
            props: { onClick: i, autoPlay: l, autoMute: s },
        } = this;
        null != i
            ? i(e)
            : (e.stopPropagation(),
              l && !t && n && s && this.state.muted
                  ? this.setState({ muted: !1, hasClickedPlay: !0 })
                  : this.setPlay(!this.state.playing));
    };
    setPlay = (e) => {
        let {
            props: { autoMute: t },
            state: { hasClickedPlay: n, muted: i },
        } = this;
        e !== this.state.playing &&
            (e
                ? this.setState({ playing: e, hasClickedPlay: !0, muted: (!!n || !t || !i) && i })
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
        if (e.key === P.dh.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.key !== P.dh.ARROW_LEFT || null == t || n)
            if (e.key !== P.dh.ARROW_RIGHT || null == t || n) {
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
                    (this._isUpdatingStats = !1), this._unmounted || N.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, u.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new w.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        (this._isUpdatingStats = !1), this._unmounted || N.Ay.setVideoStats(this.props.src, !0);
                    });
            } catch (e) {
                null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || N.Ay.setVideoStats(this.props.src, !1);
            }
        else N.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== B.VIDEO ||
            this._isUpdatingStats ||
            (N.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: l, responsive: s, mediaLayoutType: r } = this.props,
            { playing: a, fullscreen: o } = this.state,
            c = this.getWidth(),
            u = this.getHeight();
        return l
            ? (0, i.jsx)(g.A, {
                  alt: e,
                  className: U.Ki,
                  controls: !1,
                  height: u,
                  poster: n,
                  width: c,
                  responsive: s && !o,
                  mediaLayoutType: r,
                  playsInline: !0,
                  autoPlay: a,
              })
            : (0, i.jsx)(g.A, {
                  alt: e,
                  className: U.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: a,
                  height: u,
                  responsive: s && !o,
                  mediaLayoutType: o ? O.dG.STATIC : r,
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
                  width: c,
                  src: t,
              });
    }
    renderAudio() {
        return (0, i.jsx)("audio", {
            className: U.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, i.jsx)("source", { src: this.props.src }),
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: l = !0,
                    onVolumeShow: s,
                    onVolumeHide: r,
                    onControlsHide: a,
                    onControlsShow: o,
                },
                state: {
                    buffers: c,
                    currentTime: u,
                    duration: d,
                    hasClickedPlay: h,
                    hideControls: m,
                    muted: p,
                    playing: f,
                    fullscreen: g,
                    volume: _,
                    dragging: x,
                },
            } = this,
            A = this.getWidth();
        return h || n || t === B.AUDIO
            ? (0, i.jsx)(z, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, S.M)(_, 1),
                  hide: t === B.VIDEO && m,
                  muted: p,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: s,
                  onVolumeHide: r,
                  onControlsShow: o,
                  onControlsHide: a,
                  playing: f,
                  dragging: x,
                  type: t,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : A,
                  disabled: !l,
                  children:
                      t === B.VIDEO
                          ? (0, i.jsx)(C.A, {
                                "aria-label": D.intl.string(D.t["2nM3Pk"]),
                                className: U.CY,
                                iconClassName: U.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, b.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, i.jsx)(j.A, { onPlay: this.handleVideoClick, inactive: !l });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: l, playable: s, mimeType: r } = this.props;
        return null == e || null == t
            ? null
            : l === B.AUDIO
              ? (0, i.jsx)(Z, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: r, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, i.jsx)(q, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: i } = this.state,
            l = this.getWidth();
        return i ? H : t === B.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: l, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: l,
                className: s,
                renderLinkComponent: a,
                responsive: o,
                mediaLayoutType: c,
                renderOverlayContent: u,
            } = this.props,
            { fullscreen: d, hideControls: h, playing: m } = this.state,
            p = U.ub;
        if ((t === B.AUDIO ? (p = U._X) : h ? (p = U.CX) : m && (p = U.sw), l && t === B.VIDEO)) {
            let t = this.getWidth();
            return (0, i.jsxs)("div", {
                className: r()(p, { [U.mE]: c === O.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, i.jsx)("div", {
                        className: U.s4,
                        children: (0, i.jsx)(R.A, {
                            className: U.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a,
                        }),
                    }),
                ],
            });
        }
        return (0, i.jsxs)("div", {
            className: r()(p, U.mr, s, { [U.mE]: c === O.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: m ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === B.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, i.jsx)(f.N, {
                    theme: k.NJ8.MIDNIGHT,
                    children: (e) => (0, i.jsx)("div", { className: e, children: this.renderControls() }),
                }),
                t === B.VIDEO ? this.renderPlayPausePop() : null,
                null != u ? (0, i.jsx)("div", { className: r()({ [U.eM]: m || d }), children: u() }) : null,
                t === B.VIDEO && this.state.showStats && null != this.state.videoStats
                    ? (0, i.jsx)(L.J, { stats: this.state.videoStats, onClose: this.toggleStats })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, u.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== B.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            n = e.currentTime,
            i = e.readyState;
        if (0 === t && i >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    i = e.currentTime;
                if (0 === t && i > n + 0.5) {
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
let X = $;

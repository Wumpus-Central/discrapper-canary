"use strict";
n.d(t, { Ay: () => Z, rB: () => B }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(615300),
    c = n(621466),
    d = n(933681),
    _ = n(397927),
    f = n(607470),
    p = n(384015),
    h = n(600975),
    m = n(423562),
    E = n(544180),
    g = n(186835),
    A = n(954571),
    I = n(927813),
    T = n(824744),
    S = n(475815),
    y = n(953584),
    v = n(122641),
    N = n(242254),
    C = n(893598),
    R = n(338659),
    O = n(410694),
    b = n(20504),
    D = n(652215),
    L = n(838541),
    w = n(985018),
    M = n(73398),
    x = n(435115);
let P = 3e3,
    k = 1e3,
    U = "-:--",
    G = { friction: 14, tension: 200 },
    F = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    V = { width: "100%", height: "100%", backgroundColor: "black" };
function B(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
function H(e) {
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
}
let j = (e) => {
    let { current: t, duration: n } = e,
        i = null != t ? B(t) : U,
        s = null != n ? B(n) : U;
    return (
        (i = i.padStart(s.length, "0")),
        (0, r.jsxs)("div", {
            className: M.d$,
            children: [
                (0, r.jsx)("span", { className: M.Ue, children: i }),
                (0, r.jsx)("span", { className: M.zO, children: "/" }),
                (0, r.jsx)("span", { className: M.Ue, children: s }),
            ],
        })
    );
};
class Y extends i.Component {
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
        t ? u.A.spring(n, { toValue: e, ...G }).start() : n.setValue(e);
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
            ? (0, r.jsx)(_.DUT, {
                  className: M.CY,
                  onClick: i,
                  tabIndex: a ? -1 : 0,
                  "aria-label": w.intl.string(w.t.ZcgDJX),
                  children: (0, r.jsx)(_.E$n, { size: "xs", color: "currentColor", className: M.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, r.jsx)(_.DUT, {
                    className: M.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": w.intl.string(w.t.hsvh0i),
                    children: (0, r.jsx)(g.A, { className: M.pd }, "replay"),
                })
              : (0, r.jsx)(_.DUT, {
                    className: M.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": w.intl.string(w.t.RscU7I),
                    children: (0, r.jsx)(_.udU, { size: "xs", color: "currentColor", className: M.pd }, "play"),
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
            } = this.props,
            m = "string" == typeof f || f > 250;
        return (0, r.jsxs)(u.A.div, {
            className: h === F.VIDEO ? M._v : M.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m ? (0, r.jsx)(j, { current: n, duration: i }) : null,
                (0, r.jsx)(v.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: a,
                    onDragEnd: o,
                    onDragStart: l,
                    type: v.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, r.jsx)("div", {
                    className: x.Uu,
                    children: (0, r.jsx)(b.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, v.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: _,
                        iconClassName: M.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: M.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function W(e) {
    let { fileName: t, fileSize: n, src: i, disabled: s, mimeType: a, hideDownloadButton: o } = e;
    return (0, r.jsxs)("div", {
        className: M.WU,
        children: [
            (0, r.jsxs)("div", {
                className: M.xe,
                children: [
                    s
                        ? t
                        : (0, r.jsx)(p.A, { href: i, className: M.kH, iconClassName: M.XR, mimeType: a, fileName: t }),
                    (0, r.jsx)("div", { className: M.fL, children: n }),
                ],
            }),
            !o && (0, r.jsx)(p.A, { href: i, className: M.kH, iconClassName: M.XR, mimeType: a }),
        ],
    });
}
class K extends i.Component {
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
                u.A.spring(t, { toValue: 1.5, ...G, friction: 80 }),
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
            t = e ? _.udU : _.E$n;
        return (0, r.jsx)(u.A.div, {
            className: M.kO,
            style: this.getAnimatedStyle(),
            children: (0, r.jsx)(t, { className: M.PK }),
        });
    }
}
let $ = (0, h.C)({
    kind: "user",
    id: "2024-03_media_play_metrics",
    label: "Media play metrics User Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Send metrics", config: { enabled: !0 } }],
});
class z {
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
        (this.metadata = e), (this.analyticsEnabled = $.getCurrentConfig({ location: "media_player" }).enabled);
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
            A.default.track(D.HAw.MEDIA_PLAY_FINISHED, {
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
class q extends i.PureComponent {
    static Types = F;
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
        super(e), (this._analytics = new z({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
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
            width: q.minWidth,
            height: q.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: r, src: i } = this.props;
        if (
            r === F.VIDEO &&
            (y.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            y.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                y.Ay.setVideoStats(i, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: r, onMute: i, src: s, type: a },
            state: { playing: o, fullscreen: l, muted: u, dragging: c, volume: d, showStats: _ },
        } = this;
        if (s !== e.src && a === F.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                y.Ay.clearVideoStats(e.src);
            let t = y.Ay.isVideoStatsEnabled(s);
            _ !== t && (t ? this.toggleStats() : _ && this.toggleStats());
        }
        let { current: f } = this.mediaRef,
            { current: p } = this.playPausePopRef;
        if (null == f) return;
        o && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && p?.pop(o))
            : !o && t.playing && (f.pause(), p?.pop(o), n?.()),
            o && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let h = (0, S.qf)(f.parentNode, f);
        l && !t.fullscreen && null != h
            ? ((0, S.tl)(h), h.addEventListener(S.Wb, this.handleFullScreenExit))
            : !l &&
              t.fullscreen &&
              null != h &&
              (h.removeEventListener(S.Wb, this.handleFullScreenExit), (0, S.sP)(h, h.ownerDocument)),
            c === v.A.Types.DURATION && t.dragging !== v.A.Types.DURATION && o
                ? f.pause()
                : c !== v.A.Types.DURATION && t.dragging === v.A.Types.DURATION && o && f.play(),
            u !== t.muted && ((f.muted = u), i?.(u)),
            d !== t.volume && ((f.volume = d), r?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (y.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === F.VIDEO && y.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, S.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(S.Wb, this.handleFullScreenExit), (0, S.sP)(t));
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
            this.setState(s), i.play(), t?.(e, i.currentTime * I.A.Millis.SECOND, i.duration * I.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, q.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, q.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, S.qf)(e.parentNode, e);
        (null != t && (0, S._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
            n = t ? k : P,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls && null == e && this.setState({ hideControls: r });
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
        if (t === v.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === v.A.Types.VOLUME) {
            let t = (0, T.w)(e, 1);
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
        null == e ? this.setState({ buffers: [] }) : this.setState({ buffers: H(e) });
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
        if (e.which === D.Ks6.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.which !== D.Ks6.ARROW_LEFT || null == t || n)
            if (e.which !== D.Ks6.ARROW_RIGHT || null == t || n) {
                if (e.which >= D.Ks6.DIGIT_0 && e.which <= D.Ks6.DIGIT_9 && null != t) {
                    e.preventDefault(), e.stopPropagation();
                    let n = (e.which - D.Ks6.DIGIT_0) / 10;
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
                    (this._isUpdatingStats = !1), this._unmounted || y.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, c.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new R.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        (this._isUpdatingStats = !1), this._unmounted || y.Ay.setVideoStats(this.props.src, !0);
                    });
            } catch (e) {
                null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || y.Ay.setVideoStats(this.props.src, !1);
            }
        else y.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== F.VIDEO ||
            this._isUpdatingStats ||
            (y.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: i, responsive: s, mediaLayoutType: a } = this.props,
            { playing: o, fullscreen: l } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return i
            ? (0, r.jsx)(f.A, {
                  alt: e,
                  className: M.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: u,
                  responsive: s && !l,
                  mediaLayoutType: a,
                  playsInline: !0,
                  autoPlay: o,
              })
            : (0, r.jsx)(f.A, {
                  alt: e,
                  className: M.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: s && !l,
                  mediaLayoutType: l ? L.dG.STATIC : a,
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
            className: M.z7,
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
                    volume: g,
                    dragging: A,
                },
            } = this,
            I = this.getWidth();
        return _ || n || t === F.AUDIO
            ? (0, r.jsx)(Y, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, T.M)(g, 1),
                  hide: t === F.VIDEO && f,
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
                  dragging: A,
                  type: t,
                  ref: this.controlsRef,
                  width: E ? window.screen.width : I,
                  disabled: !i,
                  children:
                      t === F.VIDEO
                          ? (0, r.jsx)(m.A, {
                                "aria-label": w.intl.string(w.t["2nM3Pk"]),
                                className: M.CY,
                                iconClassName: M.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, S.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, r.jsx)(N.A, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: s, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : i === F.AUDIO
              ? (0, r.jsx)(W, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: a, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, r.jsx)(K, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r ? V : t === F.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: n };
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
            { fullscreen: d, hideControls: f, playing: p } = this.state,
            h = M.ub;
        if ((t === F.AUDIO ? (h = M._X) : f ? (h = M.CX) : p && (h = M.sw), i && t === F.VIDEO)) {
            let t = this.getWidth();
            return (0, r.jsxs)("div", {
                className: a()(h, { [M.mE]: u === L.dG.MOSAIC }),
                style: l ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, r.jsx)("div", {
                        className: M.s4,
                        children: (0, r.jsx)(C.A, {
                            className: M.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o,
                        }),
                    }),
                ],
            });
        }
        return (0, r.jsxs)("div", {
            className: a()(h, M.mr, s, { [M.mE]: u === L.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: p ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === F.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, r.jsx)(_.NPJ, {
                    theme: D.NJ8.MIDNIGHT,
                    children: (e) => (0, r.jsx)("div", { className: e, children: this.renderControls() }),
                }),
                t === F.VIDEO ? this.renderPlayPausePop() : null,
                null != c ? (0, r.jsx)("div", { className: a()({ [M.eM]: p || d }), children: c() }) : null,
                t === F.VIDEO && this.state.showStats && null != this.state.videoStats
                    ? (0, r.jsx)(O.J, { stats: this.state.videoStats, onClose: this.toggleStats })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== F.VIDEO) {
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
let Z = q;

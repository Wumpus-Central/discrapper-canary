"use strict";
n.d(t, { Ay: () => Z, rB: () => j }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(615300),
    c = n(621466),
    d = n(933681),
    _ = n(397927),
    f = n(607470),
    h = n(384015),
    p = n(600975),
    g = n(423562),
    E = n(544180),
    A = n(186835),
    I = n(954571),
    T = n(927813),
    y = n(824744),
    S = n(475815),
    v = n(953584),
    C = n(122641),
    b = n(242254),
    N = n(893598),
    R = n(338659),
    O = n(410694),
    D = n(20504),
    L = n(652215),
    w = n(838541),
    x = n(985018),
    P = n(940727),
    M = n(20976);
let k = 3e3,
    U = 1e3,
    G = "-:--",
    F = { friction: 14, tension: 200 },
    V = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    B = { width: "100%", height: "100%", backgroundColor: "black" };
function j(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
function H(e) {
    let t = [],
        { duration: n } = e;
    for (let r = 0; r < e.buffered.length; r++) {
        let i = e.buffered.start(r),
            a = e.buffered.end(r);
        if (a - i < 1) continue;
        let s = (a - i) / n,
            o = i / n;
        t.push([o, s]);
    }
    return t;
}
let Y = (e) => {
    let { current: t, duration: n } = e,
        i = null != t ? j(t) : G,
        a = null != n ? j(n) : G;
    return (
        (i = i.padStart(a.length, "0")),
        (0, r.jsxs)("div", {
            className: P.d$,
            children: [
                (0, r.jsx)("span", { className: P.Ue, children: i }),
                (0, r.jsx)("span", { className: P.zO, children: "/" }),
                (0, r.jsx)("span", { className: P.Ue, children: a }),
            ],
        })
    );
};
class W extends i.Component {
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
        t ? u.A.spring(n, { toValue: e, ...F }).start() : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: i, onPlay: a, disabled: s } = this.props;
        return e
            ? (0, r.jsx)(_.DUT, {
                  className: P.CY,
                  onClick: i,
                  tabIndex: s ? -1 : 0,
                  "aria-label": x.intl.string(x.t.ZcgDJX),
                  children: (0, r.jsx)(_.E$n, { size: "xs", color: "currentColor", className: P.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, r.jsx)(_.DUT, {
                    className: P.CY,
                    onClick: a,
                    tabIndex: s ? -1 : 0,
                    "aria-label": x.intl.string(x.t.hsvh0i),
                    children: (0, r.jsx)(A.A, { className: P.pd }, "replay"),
                })
              : (0, r.jsx)(_.DUT, {
                    className: P.CY,
                    onClick: a,
                    tabIndex: s ? -1 : 0,
                    "aria-label": x.intl.string(x.t.RscU7I),
                    children: (0, r.jsx)(_.udU, { size: "xs", color: "currentColor", className: P.pd }, "play"),
                });
    }
    render() {
        let {
                buffers: e,
                children: t,
                currentTime: n,
                duration: i,
                muted: a,
                onDrag: s,
                onDragEnd: o,
                onDragStart: l,
                onToggleMuted: c,
                onVolumeShow: d,
                onVolumeHide: _,
                width: f,
                volume: h,
                type: p,
            } = this.props,
            g = "string" == typeof f || f > 250;
        return (0, r.jsxs)(u.A.div, {
            className: p === V.VIDEO ? P._v : P.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                g ? (0, r.jsx)(Y, { current: n, duration: i }) : null,
                (0, r.jsx)(C.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: s,
                    onDragEnd: o,
                    onDragStart: l,
                    type: C.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, r.jsx)("div", {
                    className: M.Uu,
                    children: (0, r.jsx)(D.A, {
                        ref: this.setVolumeButtonRef,
                        muted: a,
                        value: h,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => s(e, C.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: _,
                        iconClassName: P.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: P.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function K(e) {
    let { fileName: t, fileSize: n, src: i, disabled: a, mimeType: s, hideDownloadButton: o } = e;
    return (0, r.jsxs)("div", {
        className: P.WU,
        children: [
            (0, r.jsxs)("div", {
                className: P.xe,
                children: [
                    a
                        ? t
                        : (0, r.jsx)(h.A, { href: i, className: P.kH, iconClassName: P.XR, mimeType: s, fileName: t }),
                    (0, r.jsx)("div", { className: P.fL, children: n }),
                ],
            }),
            !o && (0, r.jsx)(h.A, { href: i, className: P.kH, iconClassName: P.XR, mimeType: s }),
        ],
    });
}
class $ extends i.Component {
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
                u.A.spring(t, { toValue: 1.5, ...F, friction: 80 }),
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
            className: P.kO,
            style: this.getAnimatedStyle(),
            children: (0, r.jsx)(t, { className: P.PK }),
        });
    }
}
let z = (0, p.C)({
    kind: "user",
    id: "2024-03_media_play_metrics",
    label: "Media play metrics User Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Send metrics", config: { enabled: !0 } }],
});
class q {
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
        (this.metadata = e), (this.analyticsEnabled = z.getCurrentConfig({ location: "media_player" }).enabled);
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
            I.default.track(L.HAw.MEDIA_PLAY_FINISHED, {
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
class X extends i.PureComponent {
    static Types = V;
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
    playPausePopRef = i.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        super(e), (this._analytics = new q({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: r, playable: i } = this.props,
            a = "function" == typeof r ? r() : r,
            s = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !i,
            muted: s,
            volume: a,
            playing: t,
            preload: "none",
            width: X.minWidth,
            height: X.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: r, src: i } = this.props;
        if (
            r === V.VIDEO &&
            (v.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            v.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                v.Ay.setVideoStats(i, !1);
            }
        let { current: a } = this.mediaRef;
        null != a && (t && (a.muted = t), e && (this.play(!0), this.handleUIUpdate()), (a.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: r, onMute: i, src: a, type: s },
            state: { playing: o, fullscreen: l, muted: u, dragging: c, volume: d, showStats: _ },
        } = this;
        if (a !== e.src && s === V.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                v.Ay.clearVideoStats(e.src);
            let t = v.Ay.isVideoStatsEnabled(a);
            _ !== t && (t ? this.toggleStats() : _ && this.toggleStats());
        }
        let { current: f } = this.mediaRef,
            { current: h } = this.playPausePopRef;
        if (null == f) return;
        o && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && h?.pop(o))
            : !o && t.playing && (f.pause(), h?.pop(o), n?.()),
            o && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let p = (0, S.qf)(f.parentNode, f);
        l && !t.fullscreen && null != p
            ? ((0, S.tl)(p), p.addEventListener(S.Wb, this.handleFullScreenExit))
            : !l &&
              t.fullscreen &&
              null != p &&
              (p.removeEventListener(S.Wb, this.handleFullScreenExit), (0, S.sP)(p, p.ownerDocument)),
            c === C.A.Types.DURATION && t.dragging !== C.A.Types.DURATION && o
                ? f.pause()
                : c !== C.A.Types.DURATION && t.dragging === C.A.Types.DURATION && o && f.play(),
            u !== t.muted && ((f.muted = u), i?.(u)),
            d !== t.volume && ((f.volume = d), r?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (v.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === V.VIDEO && v.Ay.clearVideoStats(this.props.src));
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
            let a = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (a.volume = e));
            }
            if ("function" == typeof r) {
                let e = r();
                e !== this.state.muted && ((i.muted = e), (a.muted = e));
            }
            this.setState(a), i.play(), t?.(e, i.currentTime * T.A.Millis.SECOND, i.duration * T.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, X.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, X.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, S.qf)(e.parentNode, e);
        (null != t && (0, S._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
    };
    toggleFullscreen = () => {
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
            n = t ? U : k,
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
        if (t === C.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === C.A.Types.VOLUME) {
            let t = (0, y.w)(e, 1);
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
            (this.updateTime(t.currentTime, t.duration),
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
            props: { onClick: r, autoPlay: i, autoMute: a },
        } = this;
        null != r
            ? r(e)
            : (e.stopPropagation(),
              i && !t && n && a ? this.setState({ muted: !1, hasClickedPlay: !0 }) : this.setPlay(!this.state.playing));
    };
    setPlay = (e) => {
        let {
            props: { autoMute: t },
            state: { hasClickedPlay: n, muted: r },
        } = this;
        e !== this.state.playing &&
            (e
                ? this.setState({ playing: e, hasClickedPlay: !0, muted: (!!n || !t) && r })
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
        if (e.which === L.Ks6.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.which !== L.Ks6.ARROW_LEFT || null == t || n)
            if (e.which !== L.Ks6.ARROW_RIGHT || null == t || n) {
                if (e.which >= L.Ks6.DIGIT_0 && e.which <= L.Ks6.DIGIT_9 && null != t) {
                    e.preventDefault(), e.stopPropagation();
                    let n = (e.which - L.Ks6.DIGIT_0) / 10;
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
                    (this._isUpdatingStats = !1), this._unmounted || v.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, c.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new R.s(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        (this._isUpdatingStats = !1), this._unmounted || v.Ay.setVideoStats(this.props.src, !0);
                    });
            } catch (e) {
                null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || v.Ay.setVideoStats(this.props.src, !1);
            }
        else v.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== V.VIDEO ||
            this._isUpdatingStats ||
            (v.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: i, responsive: a, mediaLayoutType: s } = this.props,
            { playing: o, fullscreen: l } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return i
            ? (0, r.jsx)(f.A, {
                  alt: e,
                  className: P.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: u,
                  responsive: a && !l,
                  mediaLayoutType: s,
                  playsInline: !0,
                  autoPlay: o,
              })
            : (0, r.jsx)(f.A, {
                  alt: e,
                  className: P.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: a && !l,
                  mediaLayoutType: l ? w.dG.STATIC : s,
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
                  ref: this.mediaRef,
                  width: u,
                  src: t,
              });
    }
    renderAudio() {
        return (0, r.jsx)("audio", {
            className: P.z7,
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
                    onVolumeShow: a,
                    onVolumeHide: s,
                    onControlsHide: o,
                    onControlsShow: l,
                },
                state: {
                    buffers: u,
                    currentTime: c,
                    duration: d,
                    hasClickedPlay: _,
                    hideControls: f,
                    muted: h,
                    playing: p,
                    fullscreen: E,
                    volume: A,
                    dragging: I,
                },
            } = this,
            T = this.getWidth();
        return _ || n || t === V.AUDIO
            ? (0, r.jsx)(W, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, y.M)(A, 1),
                  hide: t === V.VIDEO && f,
                  muted: h,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: a,
                  onVolumeHide: s,
                  onControlsShow: l,
                  onControlsHide: o,
                  playing: p,
                  dragging: I,
                  type: t,
                  ref: this.controlsRef,
                  width: E ? window.screen.width : T,
                  disabled: !i,
                  children:
                      t === V.VIDEO
                          ? (0, r.jsx)(g.A, {
                                "aria-label": x.intl.string(x.t["2nM3Pk"]),
                                className: P.CY,
                                iconClassName: P.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, S.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, r.jsx)(b.A, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: a, mimeType: s } = this.props;
        return null == e || null == t
            ? null
            : i === V.AUDIO
              ? (0, r.jsx)(K, { fileName: e, fileSize: t, src: n, disabled: !a, mimeType: s, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, r.jsx)($, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r ? B : t === V.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: a,
                renderLinkComponent: o,
                responsive: l,
                mediaLayoutType: u,
                renderOverlayContent: c,
            } = this.props,
            { fullscreen: d, hideControls: f, playing: h } = this.state,
            p = P.ub;
        if ((t === V.AUDIO ? (p = P._X) : f ? (p = P.CX) : h && (p = P.sw), i && t === V.VIDEO)) {
            let t = this.getWidth();
            return (0, r.jsxs)("div", {
                className: s()(p, { [P.mE]: u === w.dG.MOSAIC }),
                style: l ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, r.jsx)("div", {
                        className: P.s4,
                        children: (0, r.jsx)(N.A, {
                            className: P.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o,
                        }),
                    }),
                ],
            });
        }
        return (0, r.jsxs)("div", {
            className: s()(p, P.mr, a, { [P.mE]: u === w.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: h ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === V.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, r.jsx)(_.NPJ, {
                    theme: L.NJ8.MIDNIGHT,
                    children: (e) => (0, r.jsx)("div", { className: e, children: this.renderControls() }),
                }),
                t === V.VIDEO ? this.renderPlayPausePop() : null,
                null != c ? (0, r.jsx)("div", { className: s()({ [P.eM]: h || d }), children: c() }) : null,
                t === V.VIDEO && this.state.showStats && null != this.state.videoStats
                    ? (0, r.jsx)(O.J, { stats: this.state.videoStats, onClose: this.toggleStats })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== V.VIDEO) {
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
let Z = X;

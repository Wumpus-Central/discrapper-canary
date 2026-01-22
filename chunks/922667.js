n.d(t, {
    Ay: () => en,
    rB: () => z,
}),
    n(321073),
    n(896048);
var r,
    i,
    a = n(627968),
    s = n(64700),
    o = n(503698),
    l = n.n(o),
    c = n(735438),
    u = n.n(c),
    d = n(615300),
    f = n(621466),
    p = n(933681),
    _ = n(397927),
    h = n(607470),
    m = n(384015),
    g = n(600975),
    E = n(423562),
    b = n(544180),
    y = n(186835),
    O = n(954571),
    A = n(927813),
    v = n(824744),
    S = n(475815),
    I = n(953584),
    T = n(122641),
    C = n(242254),
    N = n(893598),
    R = n(338659),
    w = n(410694),
    P = n(20504),
    D = n(652215),
    x = n(838541),
    L = n(985018),
    j = n(940727),
    M = n(20976);

function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}

function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = 3e3,
    B = 1e3,
    H = "-:--",
    Y = {
        friction: 14,
        tension: 200,
    },
    W = {
        VIDEO: "VIDEO",
        AUDIO: "AUDIO",
    },
    K = {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
    };

function z(e) {
    let t = 0 | e,
        n = t % 60;
    return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
}

function q(e) {
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
let X = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? z(t) : H,
        i = null != n ? z(n) : H;
    return (
        (r = r.padStart(i.length, "0")),
        (0, a.jsxs)("div", {
            className: j.d$,
            children: [
                (0, a.jsx)("span", {
                    className: j.Ue,
                    children: r,
                }),
                (0, a.jsx)("span", {
                    className: j.zO,
                    children: "/",
                }),
                (0, a.jsx)("span", {
                    className: j.Ue,
                    children: i,
                }),
            ],
        })
    );
};
class Z extends (r = s.Component) {
    componentDidMount() {
        this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
        var t, n, r, i, a;
        let { hide: s, playing: o } = this.props;
        s && !e.hide
            ? (this.animateControls(1, o),
              null == (t = this.volumeButton) || t.blur(),
              null == (n = (r = this.props).onControlsHide) || n.call(r))
            : !s && e.hide && (this.animateControls(0, o), null == (i = (a = this.props).onControlsShow) || i.call(a));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { durationBar: n } = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let { translateY: n } = this.state;
        t
            ? d.A.spring(
                  n,
                  U(
                      {
                          toValue: e,
                      },
                      Y,
                  ),
              ).start()
            : n.setValue(e);
    }
    getAnimatedStyle() {
        let { translateY: e } = this.state;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                    }),
                },
            ],
        };
    }
    renderPlayIcon() {
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: i, disabled: s } = this.props;
        return e
            ? (0, a.jsx)(_.DUT, {
                  className: j.CY,
                  onClick: r,
                  tabIndex: s ? -1 : 0,
                  "aria-label": L.intl.string(L.t.ZcgDJX),
                  children: (0, a.jsx)(
                      _.E$n,
                      {
                          size: "xs",
                          color: "currentColor",
                          className: j.pd,
                      },
                      "pause",
                  ),
              })
            : null != t && t === n
              ? (0, a.jsx)(_.DUT, {
                    className: j.CY,
                    onClick: i,
                    tabIndex: s ? -1 : 0,
                    "aria-label": L.intl.string(L.t.hsvh0i),
                    children: (0, a.jsx)(
                        y.A,
                        {
                            className: j.pd,
                        },
                        "replay",
                    ),
                })
              : (0, a.jsx)(_.DUT, {
                    className: j.CY,
                    onClick: i,
                    tabIndex: s ? -1 : 0,
                    "aria-label": L.intl.string(L.t.RscU7I),
                    children: (0, a.jsx)(
                        _.udU,
                        {
                            size: "xs",
                            color: "currentColor",
                            className: j.pd,
                        },
                        "play",
                    ),
                });
    }
    render() {
        let {
                buffers: e,
                children: t,
                currentTime: n,
                duration: r,
                muted: i,
                onDrag: s,
                onDragEnd: o,
                onDragStart: l,
                onToggleMuted: c,
                onVolumeShow: u,
                onVolumeHide: f,
                width: p,
                volume: _,
                type: h,
            } = this.props,
            m = "string" == typeof p || p > 250;
        return (0, a.jsxs)(d.A.div, {
            className: h === W.VIDEO ? j._v : j.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                m
                    ? (0, a.jsx)(X, {
                          current: n,
                          duration: r,
                      })
                    : null,
                (0, a.jsx)(T.A, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: s,
                    onDragEnd: o,
                    onDragStart: l,
                    type: T.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, a.jsx)("div", {
                    className: M.Uu,
                    children: (0, a.jsx)(P.A, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: _,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => s(e, T.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: u,
                        onVolumeHide: f,
                        iconClassName: j.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: j.L9,
                    }),
                }),
                t,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            k(this, "state", {
                translateY: new d.A.Value(0),
            }),
            k(this, "volumeButton", void 0),
            k(this, "durationBar", void 0),
            k(this, "setDurationRef", (e) => {
                this.durationBar = e;
            }),
            k(this, "setVolumeButtonRef", (e) => {
                this.volumeButton = e;
            });
    }
}

function Q(e) {
    let { fileName: t, fileSize: n, src: r, disabled: i, mimeType: s, hideDownloadButton: o } = e;
    return (0, a.jsxs)("div", {
        className: j.WU,
        children: [
            (0, a.jsxs)("div", {
                className: j.xe,
                children: [
                    i
                        ? t
                        : (0, a.jsx)(m.A, {
                              href: r,
                              className: j.kH,
                              iconClassName: j.XR,
                              mimeType: s,
                              fileName: t,
                          }),
                    (0, a.jsx)("div", {
                        className: j.fL,
                        children: n,
                    }),
                ],
            }),
            !o &&
                (0, a.jsx)(m.A, {
                    href: r,
                    className: j.kH,
                    iconClassName: j.XR,
                    mimeType: s,
                }),
        ],
    });
}
k(Z, "defaultProps", {
    disabled: !1,
});
class $ extends s.Component {
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState(
            {
                play: e,
            },
            this.popAnimation,
        );
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return d.A.accelerate({
            opacity: e.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.8],
            }),
            transform: [
                {
                    scale: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2],
                    }),
                },
            ],
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? _.udU : _.E$n;
        return (0, a.jsx)(d.A.div, {
            className: j.kO,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, {
                className: j.PK,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            k(this, "state", {
                play: !1,
                scale: new d.A.Value(0),
                opacity: new d.A.Value(0),
            }),
            k(this, "popAnimation", () => {
                let { opacity: e, scale: t } = this.state;
                t.setValue(0),
                    e.setValue(0),
                    d.A.parallel([
                        d.A.sequence([
                            d.A.timing(e, {
                                toValue: 1,
                                duration: 200,
                            }),
                            d.A.timing(e, {
                                toValue: 0,
                                duration: 200,
                            }),
                        ]),
                        d.A.spring(
                            t,
                            V(
                                U(
                                    {
                                        toValue: 1.5,
                                    },
                                    Y,
                                ),
                                {
                                    friction: 80,
                                },
                            ),
                        ),
                    ]).start();
            });
    }
}
let J = (0, g.C)({
    kind: "user",
    id: "2024-03_media_play_metrics",
    label: "Media play metrics User Experiment",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Send metrics",
            config: {
                enabled: !0,
            },
        },
    ],
});
class ee {
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
            O.default.track(D.HAw.MEDIA_PLAY_FINISHED, {
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
                connection_type: b.A.getType(),
                effective_connection_speed: b.A.getEffectiveConnectionSpeed(),
                service_provider: b.A.getServiceProvider(),
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
        var t, n;
        (this.playTimeSec += Math.max(
            (null != (t = this.lastPlayingTime) ? t : e) - (null != (n = this.playbackStartTime) ? n : 0),
            0,
        )),
            (this.playWallTimeMs += this.timeInState());
    }
    constructor(e) {
        k(this, "metadata", void 0),
            k(this, "playTimeSec", 0),
            k(this, "playWallTimeMs", 0),
            k(this, "firstPlayWaitingMs", 0),
            k(this, "stallCount", 0),
            k(this, "stallMs", 0),
            k(this, "seekCount", 0),
            k(this, "seekWaitingMs", 0),
            k(this, "errorMessage", null),
            k(this, "errorCode", null),
            k(this, "stateTime", performance.now()),
            k(this, "currentState", "not_started"),
            k(this, "playbackStartTime", void 0),
            k(this, "lastPlayingTime", void 0),
            k(this, "analyticsEnabled", void 0),
            k(this, "onWaiting", (e) => {
                switch (this.currentState) {
                    case "not_started":
                        this.moveToState("not_started_waiting");
                        break;
                    case "playing":
                        this.updatePlayTime(e.currentTarget.currentTime),
                            (this.stallCount += 1),
                            this.moveToState("stalled");
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
                        (0, p.dr)(this.currentState);
                }
            }),
            k(this, "onSeeking", (e) => {
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
                        (0, p.dr)(this.currentState);
                }
                (this.seekCount += 1), this.moveToState("seeking");
            }),
            k(this, "onSeeked", (e) => {
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
                        (0, p.dr)(this.currentState);
                }
            }),
            k(this, "onPause", (e) => {
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
                        (0, p.dr)(this.currentState);
                }
            }),
            k(this, "onError", (e) => {
                this.moveToState("paused"), this.sendEvent();
            }),
            k(this, "onPlaying", (e) => {
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
                        (0, p.dr)(this.currentState);
                }
                (this.playbackStartTime = e.currentTarget.currentTime), this.moveToState("playing");
            }),
            k(this, "onTimeUpdate", (e) => {
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
                        (0, p.dr)(this.currentState);
                }
            }),
            k(this, "onDragStart", (e) => {
                null != e && (this.lastPlayingTime = e);
            }),
            k(this, "onLoadedMetadata", (e) => {
                this.metadata.fileDurationSec = e.currentTarget.duration;
            }),
            (this.metadata = e),
            (this.analyticsEnabled = J.getCurrentConfig({
                location: "media_player",
            }).enabled);
    }
}
class et extends (i = s.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing
            ? {
                  playing: !1,
                  hideControls: !1,
              }
            : null;
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: r, src: i } = this.props;
        if (
            r === W.VIDEO &&
            (I.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            I.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                I.Ay.setVideoStats(i, !1);
            }
        let { current: a } = this.mediaRef;
        null != a && (t && (a.muted = t), e && (this.play(!0), this.handleUIUpdate()), (a.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: r, onMute: i, src: a, type: s },
            state: { playing: o, fullscreen: l, muted: c, dragging: u, volume: d, showStats: f },
        } = this;
        if (a !== e.src && s === W.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                I.Ay.clearVideoStats(e.src);
            let t = I.Ay.isVideoStatsEnabled(a);
            f !== t && (t ? this.toggleStats() : f && this.toggleStats());
        }
        let { current: p } = this.mediaRef,
            { current: _ } = this.playPausePopRef;
        if (null == p) return;
        o && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == _ || _.pop(o)))
            : !o && t.playing && (p.pause(), null == _ || _.pop(o), null == n || n()),
            o && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let h = (0, S.qf)(p.parentNode, p);
        l && !t.fullscreen && null != h
            ? ((0, S.tl)(h), h.addEventListener(S.Wb, this.handleFullScreenExit))
            : !l &&
              t.fullscreen &&
              null != h &&
              (h.removeEventListener(S.Wb, this.handleFullScreenExit), (0, S.sP)(h, h.ownerDocument)),
            u === T.A.Types.DURATION && t.dragging !== T.A.Types.DURATION && o
                ? p.pause()
                : u !== T.A.Types.DURATION && t.dragging === T.A.Types.DURATION && o && p.play(),
            c !== t.muted && ((p.muted = c), null == i || i(c)),
            d !== t.volume && ((p.volume = d), null == r || r(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (I.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === W.VIDEO && I.Ay.clearVideoStats(this.props.src));
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
            this.setState(a),
                i.play(),
                null == t || t(e, i.currentTime * A.A.Millis.SECOND, i.duration * A.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, et.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, et.minHeight);
    }
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            r = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== r) &&
            this.setState({
                currentTime: n,
                duration: r,
            });
    }
    updateControlsVisibility() {
        let { dragging: e, fullscreen: t } = this.state,
            n = t ? B : F,
            r = Math.max(0, Date.now() - this._lastMove) > n;
        r !== this.state.hideControls &&
            null == e &&
            this.setState({
                hideControls: r,
            });
    }
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: r, responsive: i, mediaLayoutType: s } = this.props,
            { playing: o, fullscreen: l } = this.state,
            c = this.getWidth(),
            u = this.getHeight();
        return r
            ? (0, a.jsx)(h.A, {
                  alt: e,
                  className: j.Ki,
                  controls: !1,
                  height: u,
                  poster: n,
                  width: c,
                  responsive: i && !l,
                  mediaLayoutType: s,
                  playsInline: !0,
                  autoPlay: o,
              })
            : (0, a.jsx)(h.A, {
                  alt: e,
                  className: j.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: u,
                  responsive: i && !l,
                  mediaLayoutType: l ? x.dG.STATIC : s,
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
                  width: c,
                  src: t,
              });
    }
    renderAudio() {
        return (0, a.jsx)("audio", {
            className: j.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, a.jsx)("source", {
                src: this.props.src,
            }),
        });
    }
    renderControls() {
        let { current: e } = this.mediaRef,
            {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: r = !0,
                    onVolumeShow: i,
                    onVolumeHide: s,
                    onControlsHide: o,
                    onControlsShow: l,
                },
                state: {
                    buffers: c,
                    currentTime: u,
                    duration: d,
                    hasClickedPlay: f,
                    hideControls: p,
                    muted: _,
                    playing: h,
                    fullscreen: m,
                    volume: g,
                    dragging: b,
                },
            } = this,
            y = this.getWidth();
        return f || n || t === W.AUDIO
            ? (0, a.jsx)(Z, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, v.M)(g, 1),
                  hide: t === W.VIDEO && p,
                  muted: _,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: i,
                  onVolumeHide: s,
                  onControlsShow: l,
                  onControlsHide: o,
                  playing: h,
                  dragging: b,
                  type: t,
                  ref: this.controlsRef,
                  width: m ? window.screen.width : y,
                  disabled: !r,
                  children:
                      t === W.VIDEO
                          ? (0, a.jsx)(E.A, {
                                "aria-label": L.intl.string(L.t["2nM3Pk"]),
                                className: j.CY,
                                iconClassName: j.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, S.qf)(null == e ? void 0 : e.parentNode, e),
                            })
                          : null,
              })
            : (0, a.jsx)(C.A, {
                  onPlay: this.handleVideoClick,
                  inactive: !r,
              });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: i, mimeType: s } = this.props;
        return null == e || null == t
            ? null
            : r === W.AUDIO
              ? (0, a.jsx)(Q, {
                    fileName: e,
                    fileSize: t,
                    src: n,
                    disabled: !i,
                    mimeType: s,
                    hideDownloadButton: !0,
                })
              : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)($, {
            ref: this.playPausePopRef,
        });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: r } = this.state,
            i = this.getWidth();
        return r
            ? K
            : t === W.AUDIO
              ? {
                    width: void 0,
                    height: "auto",
                }
              : e
                ? void 0
                : {
                      width: i,
                      height: n,
                  };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: r,
                className: i,
                renderLinkComponent: s,
                responsive: o,
                mediaLayoutType: c,
                renderOverlayContent: u,
            } = this.props,
            { fullscreen: d, hideControls: f, playing: p } = this.state,
            h = j.ub;
        if ((t === W.AUDIO ? (h = j._X) : f ? (h = j.CX) : p && (h = j.sw), r && t === W.VIDEO)) {
            let t = this.getWidth();
            return (0, a.jsxs)("div", {
                className: l()(h, {
                    [j.mE]: c === x.dG.MOSAIC,
                }),
                style: o
                    ? void 0
                    : {
                          width: t,
                          height: e,
                      },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)("div", {
                        className: j.s4,
                        children: (0, a.jsx)(N.A, {
                            className: j.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: s,
                        }),
                    }),
                ],
            });
        }
        return (0, a.jsxs)("div", {
            className: l()(h, j.mr, i, {
                [j.mE]: c === x.dG.MOSAIC,
            }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: p ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === W.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, a.jsx)(_.NPJ, {
                    theme: D.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, a.jsx)("div", {
                            className: e,
                            children: this.renderControls(),
                        }),
                }),
                t === W.VIDEO ? this.renderPlayPausePop() : null,
                null != u
                    ? (0, a.jsx)("div", {
                          className: l()({
                              [j.eM]: p || d,
                          }),
                          children: u(),
                      })
                    : null,
                t === W.VIDEO && this.state.showStats && null != this.state.videoStats
                    ? (0, a.jsx)(w.J, {
                          stats: this.state.videoStats,
                          onClose: this.toggleStats,
                      })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, f.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== W.VIDEO) {
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
    constructor(e) {
        var t, n;
        super(e),
            (t = this),
            k(this, "_unmounted", !1),
            k(this, "_lastMove", 0),
            k(this, "_analytics", void 0),
            k(this, "_statsCollector", null),
            k(this, "_hasStatsListener", !1),
            k(this, "mediaRef", s.createRef()),
            k(this, "controlsRef", s.createRef()),
            k(this, "playPausePopRef", s.createRef()),
            k(this, "handleFullScreenExit", () => {
                let { current: e } = this.mediaRef;
                if (null == e) return;
                let t = (0, S.qf)(e.parentNode, e);
                (null != t && (0, S._U)(t, null == t ? void 0 : t.ownerDocument)) ||
                    this.setState({
                        fullscreen: !1,
                    });
            }),
            k(this, "toggleFullscreen", () => {
                let e = !this.state.fullscreen;
                this.setState({
                    fullscreen: e,
                });
            }),
            k(this, "setMuted", (e) => {
                this.setState({
                    muted: e,
                });
            }),
            k(this, "toggleMuted", () => {
                this.setMuted(!this.state.muted);
            }),
            k(this, "setTime", function (e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { current: r } = t.mediaRef;
                null != r &&
                    isFinite(r.duration) &&
                    isFinite(r.currentTime) &&
                    ((r.currentTime = e), t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
            }),
            k(this, "handleUIUpdate", () => {
                if (!this.state.playing || this._unmounted) return;
                let { current: e } = this.mediaRef;
                null != e &&
                    (e.duration > 0 && this.updateValue(e.currentTime / e.duration),
                    this.updateTime(e.currentTime, e.duration),
                    this.updateControlsVisibility(),
                    requestAnimationFrame(this.handleUIUpdate));
            }),
            k(this, "handleDrag", (e, t) => {
                let { current: n } = this.mediaRef;
                if (t === T.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === T.A.Types.VOLUME) {
                    let t = (0, v.w)(e, 1);
                    0 === t
                        ? this.setState({
                              muted: !0,
                              volume: t,
                          })
                        : this.state.muted && t > 0
                          ? this.setState({
                                muted: !1,
                                volume: t,
                            })
                          : this.setState({
                                volume: t,
                            });
                }
            }),
            k(this, "handleLoaded", (e) => {
                this._analytics.onLoadedMetadata(e);
                let { current: t } = this.mediaRef;
                null != t &&
                    (this.updateTime(t.currentTime, t.duration),
                    this.setState({
                        hasLoadedMetadata: !0,
                        currentTime: t.currentTime,
                        duration: t.duration,
                    }));
            }),
            k(this, "handleDurationChange", () => {
                let { current: e } = this.mediaRef;
                null != e &&
                    (this.updateTime(e.currentTime, e.duration),
                    this.setState({
                        duration: e.duration,
                    }));
            }),
            k(
                this,
                "handleBuffer",
                u().debounce(() => {
                    let { current: e } = this.mediaRef;
                    null == e
                        ? this.setState({
                              buffers: [],
                          })
                        : this.setState({
                              buffers: q(e),
                          });
                }, 400),
            ),
            k(this, "handleEnded", (e) => {
                let { onEnded: t } = this.props;
                null != t && t(e),
                    this.setState({
                        playing: !1,
                        hideControls: !1,
                    });
            }),
            k(this, "handleMouseMove", () => {
                this._lastMove = Date.now();
            }),
            k(this, "handleMouseLeave", () => {
                this.state.playing && (this._lastMove = 0),
                    this.setState({
                        hovering: !1,
                    });
            }),
            k(this, "handleMouseEnter", () => {
                "none" === this.state.preload &&
                    this.setState({
                        preload: "metadata",
                    }),
                    this.setState({
                        hovering: !0,
                    });
            }),
            k(this, "handleVideoClick", (e) => {
                let {
                    state: { hasClickedPlay: t, playing: n },
                    props: { onClick: r, autoPlay: i, autoMute: a },
                } = this;
                null != r
                    ? r(e)
                    : (e.stopPropagation(),
                      i && !t && n && a
                          ? this.setState({
                                muted: !1,
                                hasClickedPlay: !0,
                            })
                          : this.setPlay(!this.state.playing));
            }),
            k(this, "setPlay", (e) => {
                let {
                    props: { autoMute: t },
                    state: { hasClickedPlay: n, muted: r },
                } = this;
                e !== this.state.playing &&
                    (e
                        ? this.setState({
                              playing: e,
                              hasClickedPlay: !0,
                              muted: (!!n || !t) && r,
                          })
                        : this.setState({
                              playing: !1,
                              hideControls: !1,
                          }));
            }),
            k(this, "handleDragStart", (e) => {
                var t, n;
                this.setState({
                    dragging: e,
                }),
                    this._analytics.onDragStart(
                        null != (t = null == (n = this.mediaRef.current) ? void 0 : n.currentTime) ? t : null,
                    );
            }),
            k(this, "handleDragEnd", () => {
                this.setState({
                    dragging: null,
                }),
                    (this._lastMove = Date.now());
            }),
            k(this, "handleKeyDown", (e) => {
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
            }),
            k(this, "handleError", (e) => {
                var t, n, r, i;
                let a = e.currentTarget;
                (this._analytics.errorCode = null != (t = null == (r = a.error) ? void 0 : r.code) ? t : null),
                    (this._analytics.errorMessage =
                        null != (n = null == (i = a.error) ? void 0 : i.message) ? n : null),
                    this._analytics.onError(e);
            }),
            k(this, "_isUpdatingStats", !1),
            k(this, "toggleStats", () => {
                let { showStats: e } = this.state,
                    { current: t } = this.mediaRef,
                    { src: n } = this.props;
                if (e)
                    null != this._statsCollector && this._statsCollector.stopTracking(),
                        (this._isUpdatingStats = !0),
                        this.setState(
                            {
                                showStats: !1,
                            },
                            () => {
                                (this._isUpdatingStats = !1), this._unmounted || I.Ay.setVideoStats(this.props.src, !1);
                            },
                        );
                else if (null != t && (0, f.vq)(t, HTMLVideoElement))
                    try {
                        null == this._statsCollector && (this._statsCollector = new R.s(t, this.props.fileSizeBytes)),
                            this._statsCollector.startTracking(this.handleStatsUpdate),
                            (this._isUpdatingStats = !0),
                            this.setState(
                                {
                                    showStats: !0,
                                    videoStats: this._statsCollector.getStats(),
                                },
                                () => {
                                    (this._isUpdatingStats = !1),
                                        this._unmounted || I.Ay.setVideoStats(this.props.src, !0);
                                },
                            );
                    } catch (e) {
                        null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                            (this._isUpdatingStats = !1),
                            this._unmounted || I.Ay.setVideoStats(this.props.src, !1);
                    }
                else I.Ay.setVideoStats(n, !1);
            }),
            k(this, "handleStatsUpdate", (e) => {
                this.setState({
                    videoStats: e,
                });
            }),
            k(this, "handleStatsStoreChange", () => {
                let { src: e, type: t } = this.props;
                t !== W.VIDEO ||
                    this._isUpdatingStats ||
                    (I.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
            }),
            (this._analytics = new ee({
                src: e.src,
                mimeType: null == (n = e.mimeType) ? void 0 : n.join("/"),
                fileSize: e.fileSizeBytes,
            }));
        const { autoPlay: r, autoMute: i, volume: a, playable: o } = this.props,
            l = "function" == typeof a ? a() : a,
            c = "function" == typeof i ? i() : i;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !o,
            muted: c,
            volume: l,
            playing: r,
            preload: "none",
            width: et.minWidth,
            height: et.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
}
k(et, "Types", W),
    k(et, "defaultProps", {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1,
    }),
    k(et, "minWidth", 150),
    k(et, "minHeight", 110);
let en = et;

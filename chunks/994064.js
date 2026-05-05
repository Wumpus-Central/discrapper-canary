"use strict";
n.d(t, { rB: () => ea, Ay: () => eh }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(615300),
    c = n(621466),
    d = n(933681),
    _ = n(939249),
    f = n(113494),
    h = n(782134),
    p = n(187322),
    E = n(43990),
    m = n(607470),
    g = n(384015),
    A = n(945810),
    I = n(953051),
    T = n(423562),
    S = n(544180),
    N = n(953727);
function y(e) {
    let { width: t = 16, height: n = 16, color: r = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsx)("svg", {
        ...(0, N.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            className: s,
            fill: r,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
        }),
    });
}
var C = n(174459),
    v = n(927813),
    O = n(824744),
    R = n(475815),
    b = n(953584),
    D = n(122641),
    L = n(692051),
    w = n(375708),
    M = n(83699);
function P(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        o = r.useRef(null),
        l = (0, i.jsx)("div", {
            className: M.P0,
            ref: o,
            children: (0, i.jsx)(h.u, { size: "xs", color: "currentColor", className: M.Kk }),
        });
    return (0, i.jsx)(L.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, i.jsx)("div", { className: M.Iv, children: l })
                : (0, i.jsx)(_.D, {
                      className: a()(n, M.Iv, { [M.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": w.intl.string(w.t.RscU7I),
                      focusProps: { ringTarget: o },
                      children: l,
                  }),
    });
}
var x = n(821209);
let U = new (n(626584).A)("mp4box"),
    k = {
        videoCodec: null,
        audioCodec: null,
        videoCodecDescription: null,
        audioCodecDescription: null,
        videoBitrate: null,
        audioBitrate: null,
        audioChannels: null,
        audioSampleRate: null,
        frameRate: null,
        videoWidth: null,
        videoHeight: null,
        isProgressive: null,
        isFragmented: null,
        containerFormat: null,
    };
function G(e) {
    return null === e
        ? "N/A"
        : e < 1e3
          ? `${e} bps`
          : e < 1e6
            ? `${(e / 1e3).toFixed(1)} Kbps`
            : `${(e / 1e6).toFixed(2)} Mbps`;
}
async function F(e) {
    try {
        let t;
        if ("u" < typeof fetch) return k;
        let { default: i } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
            r = null;
        try {
            let t = await fetch(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (r = parseInt(e, 10));
            }
        } catch {}
        try {
            t = await fetch(e, { method: "GET", headers: { Range: "bytes=0-524287" } });
        } catch (e) {
            return U.warn("Range request failed, likely CORS issue:", e), k;
        }
        if (!t.ok && 206 !== t.status) return U.warn("Unexpected response status:", t.status), k;
        if ("opaque" === t.type) return U.warn("Opaque response, CORS headers may be missing"), k;
        let s = await t.arrayBuffer(),
            a = i.createFile();
        return new Promise((t) => {
            let n = !1,
                i = !1,
                o = null,
                l = null,
                u = () => {
                    n || ((n = !0), clearTimeout(c), null != l && clearTimeout(l), t(k));
                },
                c = setTimeout(() => {
                    U.warn("Timeout after", 5e3, "ms, moov atom not found"), u();
                }, 5e3);
            (a.onReady = (e) => {
                if (n) return;
                (n = !0), clearTimeout(c), null != l && clearTimeout(l);
                let i = e.videoTracks[0],
                    r = e.audioTracks[0],
                    s = {
                        videoCodec: i?.codec ?? null,
                        audioCodec: r?.codec ?? null,
                        videoCodecDescription:
                            null != i
                                ? (function (e) {
                                      if (e.startsWith("avc1")) return "H.264/AVC";
                                      if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
                                      if (e.startsWith("vp08")) return "VP8";
                                      if (e.startsWith("vp09")) return "VP9";
                                      if (e.startsWith("av01")) return "AV1";
                                      return e;
                                  })(i.codec)
                                : null,
                        audioCodecDescription:
                            null != r
                                ? (function (e) {
                                      if (e.startsWith("mp4a.40.2")) return "AAC-LC";
                                      if (e.startsWith("mp4a.40.5")) return "HE-AAC";
                                      if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
                                      if (e.startsWith("mp4a.40")) return "AAC";
                                      if ("opus" === e) return "Opus";
                                      else if ("vorbis" === e) return "Vorbis";
                                      return e;
                                  })(r.codec)
                                : null,
                        videoBitrate: i?.bitrate ?? null,
                        audioBitrate: r?.bitrate ?? null,
                        audioChannels: r?.audio?.channel_count ?? null,
                        audioSampleRate: r?.audio?.sample_rate ?? null,
                        frameRate:
                            null != i
                                ? (function (e) {
                                      if (
                                          null != e.nb_samples &&
                                          null != e.duration &&
                                          null != e.timescale &&
                                          0 !== e.timescale
                                      ) {
                                          let t = e.duration / e.timescale;
                                          if (t > 0) return Math.round(e.nb_samples / t);
                                      }
                                      return null;
                                  })(i)
                                : null,
                        videoWidth: i?.video?.width ?? null,
                        videoHeight: i?.video?.height ?? null,
                        isProgressive: e.isProgressive ?? null,
                        isFragmented: e.isFragmented ?? null,
                        containerFormat: (function (e) {
                            if (0 === e.length) return "MP4";
                            let t = e[0];
                            if ("isom" === t) return "MP4 (ISO Base Media)";
                            if ("mp41" === t) return "MP4 v1";
                            if ("mp42" === t) return "MP4 v2";
                            if (t.startsWith("M4V")) return "M4V (iTunes Video)";
                            if (t.startsWith("M4A")) return "M4A (iTunes Audio)";
                            else if (t.startsWith("qt")) return "QuickTime";
                            else if ("dash" === t) return "DASH";
                            else if ("iso5" === t) return "MP4 (ISO/IEC 14496-12:2005)";
                            else if ("iso6" === t) return "MP4 (ISO/IEC 14496-12:2012)";
                            return `MP4 (${t})`;
                        })(e.brands ?? []),
                    };
                t(s);
            }),
                (a.onError = () => {
                    u();
                }),
                (a.onSeek = async (t) => {
                    if (n || i || null == r || !(r > 524288)) {
                        if (i) {
                            if (null != o && performance.now() - o < 5e3) return;
                            u();
                            return;
                        }
                    } else {
                        (i = !0), U.log("Fetching end chunk for moov atom");
                        try {
                            let t = await fetch(e, {
                                method: "GET",
                                headers: { Range: `bytes=${r - 524288}-${r - 1}` },
                            });
                            if (t.ok || 206 === t.status) {
                                let e,
                                    n = await t.arrayBuffer();
                                200 === t.status && n.byteLength === r
                                    ? ((n = n.slice(r - 524288)), (e = Math.max(0, r - 524288)))
                                    : (e = 206 === t.status ? Math.max(0, r - 524288) : 0);
                                let i = n;
                                i.fileStart = e;
                                try {
                                    a.appendBuffer(i), a.flush(), (o = performance.now());
                                    return;
                                } catch (e) {
                                    U.warn("Failed to append end chunk:", e), u();
                                    return;
                                }
                            }
                        } catch (e) {
                            U.warn("Failed to fetch end chunk:", e);
                        }
                        u();
                        return;
                    }
                    (null == r || r <= 524288) && u();
                }),
                (s.fileStart = 0);
            try {
                a.appendBuffer(s),
                    a.flush(),
                    (l = setTimeout(() => {
                        n || i || null == a.onSeek || a.onSeek({ offset: 0, isLast: !1 });
                    }, 500));
            } catch (e) {
                u();
            }
        });
    } catch (e) {
        return k;
    }
}
class V {
    videoElement;
    updateInterval = null;
    updateCallback = null;
    recentFrameRates = [];
    lastCurrentTime = 0;
    baselineFrames = 0;
    baselineTime = 0;
    lockedFrameRate = null;
    lastKnownFrameRate = null;
    cachedCodecInfo = null;
    codecInfoPromise = null;
    codecInfoFetchId = 0;
    fileSizeBytes = null;
    constructor(e, t) {
        (this.videoElement = e), (this.fileSizeBytes = t ?? null), this.fetchCodecInfo();
    }
    async fetchCodecInfo() {
        let e = "" !== this.videoElement.src ? this.videoElement.src : this.videoElement.currentSrc;
        if (null == e || "" === e || null != this.codecInfoPromise) return;
        let t = this.codecInfoFetchId;
        this.codecInfoPromise = F(e);
        let n = await this.codecInfoPromise;
        this.codecInfoFetchId === t && (this.cachedCodecInfo = n);
    }
    resetCodecInfo(e) {
        this.codecInfoFetchId++,
            (this.cachedCodecInfo = null),
            (this.codecInfoPromise = null),
            (this.fileSizeBytes = e ?? null),
            (this.recentFrameRates = []),
            (this.lastCurrentTime = 0),
            (this.baselineFrames = 0),
            (this.baselineTime = 0),
            (this.lockedFrameRate = null),
            (this.lastKnownFrameRate = null),
            this.fetchCodecInfo();
    }
    getStats() {
        let e,
            t,
            n,
            i = this.videoElement;
        this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
            ? ((e = this.cachedCodecInfo.videoWidth), (t = this.cachedCodecInfo.videoHeight), (n = `${e}x${t}`))
            : ((e = 0 !== i.videoWidth ? i.videoWidth : 0),
              (t = 0 !== i.videoHeight ? i.videoHeight : 0),
              (n = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
        let r = Math.round(i.clientWidth),
            s = Math.round(i.clientHeight),
            a = [],
            o = 0,
            l = i.currentTime;
        for (let e = 0; e < i.buffered.length; e++) {
            let t = i.buffered.start(e),
                n = i.buffered.end(e);
            a.push({ start: t, end: n }), n > l && (t <= l ? (o += n - l) : (o += n - t));
        }
        let u = 0,
            c = 0,
            d = 0,
            _ = null;
        if ("function" == typeof i.getVideoPlaybackQuality) {
            let e = i.getVideoPlaybackQuality();
            (u = e.droppedVideoFrames), (d = (c = e.totalVideoFrames) > 0 ? (u / c) * 100 : 0);
        }
        if (this.cachedCodecInfo?.frameRate != null) _ = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof i.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) _ = this.lockedFrameRate;
            else if (Math.abs(i.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    (this.lockedFrameRate = Math.round(e)),
                        (_ = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate);
                } else
                    (this.baselineFrames = c),
                        (this.baselineTime = i.currentTime),
                        (this.recentFrameRates = []),
                        (_ = this.lastKnownFrameRate);
            else {
                let e = c - this.baselineFrames,
                    t = i.currentTime - this.baselineTime;
                t >= 1 && e > 0
                    ? (this.recentFrameRates.push(e / t),
                      this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
                      (_ = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length)),
                      (this.lastKnownFrameRate = _))
                    : null !== this.lastKnownFrameRate && (_ = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = i.currentTime;
        }
        let f = i.error?.code ?? null,
            h = i.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: n,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: r,
                viewportHeight: s,
                currentTime: i.currentTime,
                duration: i.duration,
                bufferedRanges: a,
                bufferedSeconds: o,
                droppedFrames: u,
                totalFrames: c,
                droppedFramesPercent: d,
                frameRate: _,
                src: i.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: f,
                errorMessage: h,
            }
        );
    }
    startTracking(e) {
        this.stopTracking(),
            (this.updateCallback = e),
            (this.updateInterval = window.setInterval(() => {
                null != this.updateCallback && this.updateCallback(this.getStats());
            }, 1e3));
    }
    stopTracking() {
        null !== this.updateInterval && (window.clearInterval(this.updateInterval), (this.updateInterval = null)),
            (this.updateCallback = null);
    }
    destroy() {
        this.stopTracking();
    }
}
var B = n(990078),
    H = n(624479),
    j = n(789645),
    Y = n(957565),
    W = n(239957);
let K = "Close",
    z = "Copy to JSON",
    $ = "Copied!";
function q(e) {
    var t, n, s, a, o;
    let l,
        { stats: u, onClose: c } = e,
        [d, f] = r.useState(!1),
        h = r.useRef(null);
    r.useEffect(
        () => () => {
            null != h.current && clearTimeout(h.current);
        },
        [],
    );
    let p = r.useCallback(() => {
        let e = JSON.stringify(
            {
                media: {
                    video: {
                        codec: u.codecInfo?.videoCodecDescription ?? u.codecInfo?.videoCodec,
                        codecRaw: u.codecInfo?.videoCodec,
                        bitRate: u.codecInfo?.videoBitrate != null ? Math.round(u.codecInfo.videoBitrate) : null,
                        frameRate: u.frameRate,
                        width: u.videoWidth,
                        height: u.videoHeight,
                    },
                    audio: {
                        codec: u.codecInfo?.audioCodecDescription ?? u.codecInfo?.audioCodec,
                        codecRaw: u.codecInfo?.audioCodec,
                        bitRate: u.codecInfo?.audioBitrate != null ? Math.round(u.codecInfo.audioBitrate) : null,
                        channels: u.codecInfo?.audioChannels,
                        sampleRate: u.codecInfo?.audioSampleRate,
                    },
                    fileSizeBytes: u.fileSizeBytes,
                    durationSeconds: u.duration,
                    containerFormat: u.codecInfo?.containerFormat,
                    isProgressive: u.codecInfo?.isProgressive,
                    isFragmented: u.codecInfo?.isFragmented,
                },
                playback: {
                    viewportWidth: u.viewportWidth,
                    viewportHeight: u.viewportHeight,
                    currentTimeSeconds: u.currentTime,
                    bufferedSeconds: u.bufferedSeconds,
                    droppedFrames: u.droppedFrames,
                    totalDecodedFrames: u.totalFrames,
                    droppedFramesPercent:
                        null != u.droppedFramesPercent ? parseFloat(u.droppedFramesPercent.toFixed(2)) : null,
                    errorCode: u.errorCode,
                    errorMessage: u.errorMessage,
                },
            },
            null,
            2,
        );
        (0, Y.C)(
            e,
            () => {
                f(!0),
                    null != h.current && clearTimeout(h.current),
                    (h.current = window.setTimeout(() => {
                        f(!1), (h.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [u]);
    return (0, i.jsxs)("div", {
        className: W.gP,
        children: [
            (0, i.jsxs)("div", {
                className: W.wx,
                children: [
                    (0, i.jsx)("div", { className: W.DD, children: "Stats for Nerds" }),
                    (0, i.jsxs)("div", {
                        className: W.Pz,
                        children: [
                            (0, i.jsx)(B.m, {
                                text: d ? $ : z,
                                children: (0, i.jsx)(_.D, {
                                    className: W.cL,
                                    onClick: p,
                                    "aria-label": d ? $ : z,
                                    focusProps: { offset: 2 },
                                    children: (0, i.jsx)(H.T, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, i.jsx)(B.m, {
                                text: K,
                                children: (0, i.jsx)(_.D, {
                                    className: W.b,
                                    onClick: c,
                                    "aria-label": K,
                                    focusProps: { offset: 2 },
                                    children: (0, i.jsx)(j.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: W.Qs,
                children: [
                    u.codecInfo?.containerFormat != null &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Container" }),
                                (0, i.jsx)("span", { className: W.cR, children: u.codecInfo.containerFormat }),
                            ],
                        }),
                    (u.codecInfo?.isProgressive != null || u.codecInfo?.isFragmented != null) &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Format" }),
                                (0, i.jsx)("span", {
                                    className: W.cR,
                                    children:
                                        ((t = u.codecInfo.isProgressive ?? null),
                                        (n = u.codecInfo.isFragmented ?? null),
                                        (l = []),
                                        (!0 === t && l.push("Progressive"),
                                        !0 === n && l.push("Fragmented"),
                                        0 === l.length)
                                            ? "Standard"
                                            : l.join(", ")),
                                }),
                            ],
                        }),
                    null != u.codecInfo &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Resolution" }),
                                (0, i.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        u.resolution,
                                        " @ ",
                                        null === (s = u.frameRate) ? "N/A" : `${s} fps`,
                                        u.droppedFrames > 0 && ` (${u.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != u.codecInfo &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Viewport" }),
                                (0, i.jsxs)("span", {
                                    className: W.cR,
                                    children: [u.viewportWidth, "x", u.viewportHeight],
                                }),
                            ],
                        }),
                    u.codecInfo?.videoCodec != null &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Video" }),
                                (0, i.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        u.codecInfo.videoCodecDescription ?? u.codecInfo.videoCodec ?? "Unknown",
                                        null != u.codecInfo.videoBitrate && ` @ ${G(u.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    u.codecInfo?.audioCodec != null &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Audio" }),
                                (0, i.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        u.codecInfo.audioCodecDescription ?? u.codecInfo.audioCodec ?? "Unknown",
                                        null != u.codecInfo.audioBitrate && ` @ ${G(u.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    u.codecInfo?.audioChannels != null &&
                        (0, i.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, i.jsx)("span", { className: W.Zh, children: "Audio Channels" }),
                                (0, i.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        (function (e) {
                                            if (null === e) return "N/A";
                                            switch (e) {
                                                case 1:
                                                    return "Mono";
                                                case 2:
                                                    return "Stereo";
                                                case 6:
                                                    return "5.1 Surround";
                                                case 8:
                                                    return "7.1 Surround";
                                                default:
                                                    return `${e} channels`;
                                            }
                                        })(u.codecInfo.audioChannels),
                                        null != u.codecInfo.audioSampleRate &&
                                            ` @ ${null === ((a = u.codecInfo.audioSampleRate)) ? "N/A" : a < 1e3 ? `${a} Hz` : `${(a / 1e3).toFixed(1)} kHz`}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: W.N8,
                        children: [
                            (0, i.jsx)("span", { className: W.Zh, children: "Buffer Health" }),
                            (0, i.jsx)("span", {
                                className: W.cR,
                                children: isFinite((o = u.bufferedSeconds)) ? o.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== u.errorCode &&
                        (0, i.jsx)("div", {
                            className: W.K6,
                            children: (0, i.jsxs)("div", {
                                className: W.N8,
                                children: [
                                    (0, i.jsx)("span", { className: W.Zh, children: "Error" }),
                                    (0, i.jsxs)("span", {
                                        className: W.cR,
                                        children: [u.errorCode, null !== u.errorMessage && `: ${u.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
var Z = n(20504),
    X = n(652215),
    Q = n(838541),
    J = n(650583),
    ee = n(277446),
    et = n(653307);
let en = "-:--",
    ei = { friction: 14, tension: 200 },
    er = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    es = { width: "100%", height: "100%", backgroundColor: "black" };
function ea(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
let eo = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? ea(t) : en,
        s = null != n ? ea(n) : en;
    return (
        (r = r.padStart(s.length, "0")),
        (0, i.jsxs)("div", {
            className: ee.d$,
            children: [
                (0, i.jsx)("span", { className: ee.Ue, children: r }),
                (0, i.jsx)("span", { className: ee.zO, children: "/" }),
                (0, i.jsx)("span", { className: ee.Ue, children: s }),
            ],
        })
    );
};
class el extends r.Component {
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
        t ? u.A.spring(n, { toValue: e, ...ei }).start() : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: s, disabled: a } = this.props;
        return e
            ? (0, i.jsx)(_.D, {
                  className: ee.CY,
                  onClick: r,
                  tabIndex: a ? -1 : 0,
                  "aria-label": w.intl.string(w.t.ZcgDJX),
                  children: (0, i.jsx)(f.E, { size: "xs", color: "currentColor", className: ee.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, i.jsx)(_.D, {
                    className: ee.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": w.intl.string(w.t.hsvh0i),
                    children: (0, i.jsx)(y, { className: ee.pd }, "replay"),
                })
              : (0, i.jsx)(_.D, {
                    className: ee.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": w.intl.string(w.t.RscU7I),
                    children: (0, i.jsx)(h.u, { size: "xs", color: "currentColor", className: ee.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: r,
            muted: s,
            onDrag: a,
            onDragEnd: o,
            onDragStart: l,
            onToggleMuted: c,
            onVolumeShow: d,
            onVolumeHide: _,
            width: f,
            volume: h,
            type: p,
        } = this.props;
        return (0, i.jsxs)(u.A.div, {
            className: p === er.VIDEO ? ee._v : ee.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof f || f > 250 ? (0, i.jsx)(eo, { current: n, duration: r }) : null,
                (0, i.jsx)(D.A, {
                    buffers: e,
                    value: r ?? 0,
                    onDrag: a,
                    onDragEnd: o,
                    onDragStart: l,
                    type: D.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, i.jsx)("div", {
                    className: et.Uu,
                    children: (0, i.jsx)(Z.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: h,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, D.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: _,
                        iconClassName: ee.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: ee.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function eu(e) {
    let { fileName: t, fileSize: n, src: r, disabled: s, mimeType: a, hideDownloadButton: o } = e;
    return (0, i.jsxs)("div", {
        className: ee.WU,
        children: [
            (0, i.jsxs)("div", {
                className: ee.xe,
                children: [
                    s
                        ? t
                        : (0, i.jsx)(g.A, {
                              href: r,
                              className: ee.kH,
                              iconClassName: ee.XR,
                              mimeType: a,
                              fileName: t,
                          }),
                    (0, i.jsx)("div", { className: ee.fL, children: n }),
                ],
            }),
            !o && (0, i.jsx)(g.A, { href: r, className: ee.kH, iconClassName: ee.XR, mimeType: a }),
        ],
    });
}
class ec extends r.Component {
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
                u.A.spring(t, { toValue: 1.5, ...ei, friction: 80 }),
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
            t = e ? h.u : f.E;
        return (0, i.jsx)(u.A.div, {
            className: ee.kO,
            style: this.getAnimatedStyle(),
            children: (0, i.jsx)(t, { className: ee.PK }),
        });
    }
}
let ed = (0, A.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class e_ {
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
        (this.metadata = e), (this.analyticsEnabled = ed.getConfig({ location: "media_player" }).enabled);
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
            C.default.track(X.HAw.MEDIA_PLAY_FINISHED, {
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
                connection_type: S.A.getType(),
                effective_connection_speed: S.A.getEffectiveConnectionSpeed(),
                service_provider: S.A.getServiceProvider(),
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
class ef extends r.PureComponent {
    static Types = er;
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
    mediaRef = r.createRef();
    controlsRef = r.createRef();
    handleVideoRef = (e) => {
        (this.mediaRef.current = e), null != this.props.videoRef && (this.props.videoRef.current = e);
    };
    playPausePopRef = r.createRef();
    containerRef = r.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        super(e),
            (this._analytics = new e_({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: i, playable: r } = this.props,
            s = "function" == typeof i ? i() : i,
            a = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !r,
            muted: a,
            volume: s,
            playing: t,
            preload: "none",
            width: ef.minWidth,
            height: ef.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: i, src: r } = this.props;
        if (
            i === er.VIDEO &&
            (b.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            b.Ay.isVideoStatsEnabled(r) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                b.Ay.setVideoStats(r, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: i, onMute: r, src: s, type: a },
            state: { playing: o, fullscreen: l, muted: u, dragging: c, volume: d, showStats: _ },
        } = this;
        if (s !== e.src && a === er.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                b.Ay.clearVideoStats(e.src);
            let t = b.Ay.isVideoStatsEnabled(s);
            _ !== t && (t ? this.toggleStats() : _ && this.toggleStats());
        }
        let { current: f } = this.mediaRef,
            { current: h } = this.playPausePopRef;
        if (null == f) return;
        o && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && h?.pop(o))
            : !o && t.playing && (f.pause(), h?.pop(o), n?.()),
            o && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let p = (0, R.qf)(f.parentNode, f);
        l && !t.fullscreen && null != p
            ? ((0, R.tl)(p), p.addEventListener(R.Wb, this.handleFullScreenExit))
            : !l &&
              t.fullscreen &&
              null != p &&
              (p.removeEventListener(R.Wb, this.handleFullScreenExit), (0, R.sP)(p, p.ownerDocument)),
            c === D.A.Types.DURATION && t.dragging !== D.A.Types.DURATION && o
                ? f.pause()
                : c !== D.A.Types.DURATION && t.dragging === D.A.Types.DURATION && o && f.play(),
            u !== t.muted && ((f.muted = u), r?.(u)),
            d !== t.volume && ((f.volume = d), i?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (b.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === er.VIDEO && b.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, R.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(R.Wb, this.handleFullScreenExit), (0, R.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: i } = this.props,
            { current: r } = this.mediaRef;
        if (null != r) {
            let s = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((r.volume = e), (s.volume = e));
            }
            if ("function" == typeof i) {
                let e = i();
                e !== this.state.muted && ((r.muted = e), (s.muted = e));
            }
            this.setState(s), r.play(), t?.(e, r.currentTime * v.A.Millis.SECOND, r.duration * v.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, ef.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, ef.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, R.qf)(e.parentNode, e);
        (null != t && (0, R._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
        if (t === D.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === D.A.Types.VOLUME) {
            let t = (0, O.w)(e, 1);
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
                      for (let i = 0; i < e.buffered.length; i++) {
                          let r = e.buffered.start(i),
                              s = e.buffered.end(i);
                          if (s - r < 1) continue;
                          let a = (s - r) / n,
                              o = r / n;
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
            props: { onClick: i, autoPlay: r, autoMute: s },
        } = this;
        null != i
            ? i(e)
            : (e.stopPropagation(),
              r && !t && n && s && this.state.muted
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
        if (e.key === J.dh.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.key !== J.dh.ARROW_LEFT || null == t || n)
            if (e.key !== J.dh.ARROW_RIGHT || null == t || n) {
                if ((0, I.A)(e.key) && null != t) {
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
                    (this._isUpdatingStats = !1), this._unmounted || b.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, c.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new V(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        (this._isUpdatingStats = !1), this._unmounted || b.Ay.setVideoStats(this.props.src, !0);
                    });
            } catch (e) {
                null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || b.Ay.setVideoStats(this.props.src, !1);
            }
        else b.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== er.VIDEO ||
            this._isUpdatingStats ||
            (b.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: r, responsive: s, mediaLayoutType: a } = this.props,
            { playing: o, fullscreen: l } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return r
            ? (0, i.jsx)(m.A, {
                  alt: e,
                  className: ee.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: u,
                  responsive: s && !l,
                  mediaLayoutType: a,
                  playsInline: !0,
                  autoPlay: o,
              })
            : (0, i.jsx)(m.A, {
                  alt: e,
                  className: ee.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: o,
                  height: c,
                  responsive: s && !l,
                  mediaLayoutType: l ? Q.dG.STATIC : a,
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
        return (0, i.jsx)("audio", {
            className: ee.z7,
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
                    playable: r = !0,
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
                    muted: h,
                    playing: p,
                    fullscreen: E,
                    volume: m,
                    dragging: g,
                },
            } = this,
            A = this.getWidth();
        return _ || n || t === er.AUDIO
            ? (0, i.jsx)(el, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, O.M)(m, 1),
                  hide: t === er.VIDEO && f,
                  muted: h,
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
                  playing: p,
                  dragging: g,
                  type: t,
                  ref: this.controlsRef,
                  width: E ? window.screen.width : A,
                  disabled: !r,
                  children:
                      t === er.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, i.jsx)(T.A, {
                                "aria-label": w.intl.string(w.t["2nM3Pk"]),
                                className: ee.CY,
                                iconClassName: ee.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, R.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, i.jsx)(P, { onPlay: this.handleVideoClick, inactive: !r });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: s, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : r === er.AUDIO
              ? (0, i.jsx)(eu, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: a, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, i.jsx)(ec, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: i } = this.state,
            r = this.getWidth();
        return i ? es : t === er.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: r, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: r,
                className: s,
                renderLinkComponent: o,
                responsive: l,
                mediaLayoutType: u,
                renderOverlayContent: c,
            } = this.props,
            { fullscreen: d, hideControls: _, playing: f } = this.state,
            h = ee.ub;
        if ((t === er.AUDIO ? (h = ee._X) : _ ? (h = ee.CX) : f && (h = ee.sw), r && t === er.VIDEO)) {
            let t = this.getWidth();
            return (0, i.jsxs)("div", {
                className: a()(h, { [ee.mE]: u === Q.dG.MOSAIC }),
                style: l ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, i.jsx)("div", {
                        className: ee.s4,
                        children: (0, i.jsx)(x.A, {
                            className: ee.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o,
                        }),
                    }),
                ],
            });
        }
        return (0, i.jsx)("div", {
            ref: this.containerRef,
            className: a()(h, ee.mr, s, { [ee.mE]: u === Q.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: f ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, i.jsxs)(p.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === er.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, i.jsx)(E.N, {
                        theme: X.NJ8.MIDNIGHT,
                        children: (e) => (0, i.jsx)("div", { className: e, children: this.renderControls() }),
                    }),
                    t === er.VIDEO ? this.renderPlayPausePop() : null,
                    null != c ? (0, i.jsx)("div", { className: a()({ [ee.eM]: f || d }), children: c() }) : null,
                    t === er.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, i.jsx)(q, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== er.VIDEO) {
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
let eh = ef;

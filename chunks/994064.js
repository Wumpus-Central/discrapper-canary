"use strict";
n.d(t, { rB: () => el, Ay: () => eh }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(615300),
    c = n(621466),
    u = n(933681),
    _ = n(939249),
    E = n(113494),
    A = n(782134),
    h = n(187322),
    I = n(43990),
    f = n(607470),
    p = n(384015),
    T = n(945810),
    m = n(953051),
    g = n(423562),
    S = n(544180),
    N = n(953727);
function C(e) {
    let { width: t = 16, height: n = 16, color: r = "currentColor", foreground: a, ...s } = e;
    return (0, i.jsx)("svg", {
        ...(0, N.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            className: a,
            fill: r,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
        }),
    });
}
var R = n(174459),
    O = n(927813),
    L = n(824744),
    D = n(475815),
    y = n(953584),
    v = n(122641),
    b = n(692051),
    M = n(375708),
    P = n(83699);
function U(e) {
    let { onPlay: t, className: n, inactive: a } = e,
        l = r.useRef(null),
        o = (0, i.jsx)("div", {
            className: P.P0,
            ref: l,
            children: (0, i.jsx)(A.u, { size: "xs", color: "currentColor", className: P.Kk }),
        });
    return (0, i.jsx)(b.Y.Consumer, {
        children: (e) =>
            a || null == t
                ? (0, i.jsx)("div", { className: P.Iv, children: o })
                : (0, i.jsx)(_.D, {
                      className: s()(n, P.Iv, { [P.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": M.intl.string(M.t.RscU7I),
                      focusProps: { ringTarget: l },
                      children: o,
                  }),
    });
}
var w = n(821209);
let G = new (n(626584).A)("mp4box"),
    x = {
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
function k(e) {
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
        if ("u" < typeof fetch) return x;
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
            return G.warn("Range request failed, likely CORS issue:", e), x;
        }
        if (!t.ok && 206 !== t.status) return G.warn("Unexpected response status:", t.status), x;
        if ("opaque" === t.type) return G.warn("Opaque response, CORS headers may be missing"), x;
        let a = await t.arrayBuffer(),
            s = i.createFile();
        return new Promise((t) => {
            let n = !1,
                i = !1,
                l = null,
                o = null,
                d = () => {
                    n || ((n = !0), clearTimeout(c), null != o && clearTimeout(o), t(x));
                },
                c = setTimeout(() => {
                    G.warn("Timeout after", 5e3, "ms, moov atom not found"), d();
                }, 5e3);
            (s.onReady = (e) => {
                if (n) return;
                (n = !0), clearTimeout(c), null != o && clearTimeout(o);
                let i = e.videoTracks[0],
                    r = e.audioTracks[0],
                    a = {
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
                t(a);
            }),
                (s.onError = () => {
                    d();
                }),
                (s.onSeek = async (t) => {
                    if (n || i || null == r || !(r > 524288)) {
                        if (i) {
                            if (null != l && performance.now() - l < 5e3) return;
                            d();
                            return;
                        }
                    } else {
                        (i = !0), G.log("Fetching end chunk for moov atom");
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
                                    s.appendBuffer(i), s.flush(), (l = performance.now());
                                    return;
                                } catch (e) {
                                    G.warn("Failed to append end chunk:", e), d();
                                    return;
                                }
                            }
                        } catch (e) {
                            G.warn("Failed to fetch end chunk:", e);
                        }
                        d();
                        return;
                    }
                    (null == r || r <= 524288) && d();
                }),
                (a.fileStart = 0);
            try {
                s.appendBuffer(a),
                    s.flush(),
                    (o = setTimeout(() => {
                        n || i || null == s.onSeek || s.onSeek({ offset: 0, isLast: !1 });
                    }, 500));
            } catch (e) {
                d();
            }
        });
    } catch (e) {
        return x;
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
            a = Math.round(i.clientHeight),
            s = [],
            l = 0,
            o = i.currentTime;
        for (let e = 0; e < i.buffered.length; e++) {
            let t = i.buffered.start(e),
                n = i.buffered.end(e);
            s.push({ start: t, end: n }), n > o && (t <= o ? (l += n - o) : (l += n - t));
        }
        let d = 0,
            c = 0,
            u = 0,
            _ = null;
        if ("function" == typeof i.getVideoPlaybackQuality) {
            let e = i.getVideoPlaybackQuality();
            (d = e.droppedVideoFrames), (u = (c = e.totalVideoFrames) > 0 ? (d / c) * 100 : 0);
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
        let E = i.error?.code ?? null,
            A = i.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: n,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: r,
                viewportHeight: a,
                currentTime: i.currentTime,
                duration: i.duration,
                bufferedRanges: s,
                bufferedSeconds: l,
                droppedFrames: d,
                totalFrames: c,
                droppedFramesPercent: u,
                frameRate: _,
                src: i.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: E,
                errorMessage: A,
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
    H = n(834730),
    j = n(624479),
    W = n(789645),
    Y = n(957565),
    K = n(239957);
let $ = "Close",
    z = "Copy to JSON",
    q = "Copied!";
function Z(e) {
    var t, n, a, s, l;
    let o,
        { stats: d, onClose: c } = e,
        [u, E] = r.useState(!1),
        A = r.useRef(null);
    r.useEffect(
        () => () => {
            null != A.current && clearTimeout(A.current);
        },
        [],
    );
    let h = r.useCallback(() => {
        let e = JSON.stringify(
            {
                media: {
                    video: {
                        codec: d.codecInfo?.videoCodecDescription ?? d.codecInfo?.videoCodec,
                        codecRaw: d.codecInfo?.videoCodec,
                        bitRate: d.codecInfo?.videoBitrate != null ? Math.round(d.codecInfo.videoBitrate) : null,
                        frameRate: d.frameRate,
                        width: d.videoWidth,
                        height: d.videoHeight,
                    },
                    audio: {
                        codec: d.codecInfo?.audioCodecDescription ?? d.codecInfo?.audioCodec,
                        codecRaw: d.codecInfo?.audioCodec,
                        bitRate: d.codecInfo?.audioBitrate != null ? Math.round(d.codecInfo.audioBitrate) : null,
                        channels: d.codecInfo?.audioChannels,
                        sampleRate: d.codecInfo?.audioSampleRate,
                    },
                    fileSizeBytes: d.fileSizeBytes,
                    durationSeconds: d.duration,
                    containerFormat: d.codecInfo?.containerFormat,
                    isProgressive: d.codecInfo?.isProgressive,
                    isFragmented: d.codecInfo?.isFragmented,
                },
                playback: {
                    viewportWidth: d.viewportWidth,
                    viewportHeight: d.viewportHeight,
                    currentTimeSeconds: d.currentTime,
                    bufferedSeconds: d.bufferedSeconds,
                    droppedFrames: d.droppedFrames,
                    totalDecodedFrames: d.totalFrames,
                    droppedFramesPercent:
                        null != d.droppedFramesPercent ? parseFloat(d.droppedFramesPercent.toFixed(2)) : null,
                    errorCode: d.errorCode,
                    errorMessage: d.errorMessage,
                },
            },
            null,
            2,
        );
        (0, Y.C)(
            e,
            () => {
                E(!0),
                    null != A.current && clearTimeout(A.current),
                    (A.current = window.setTimeout(() => {
                        E(!1), (A.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [d]);
    return (0, i.jsxs)("div", {
        className: K.gP,
        children: [
            (0, i.jsxs)("div", {
                className: K.wx,
                children: [
                    (0, i.jsx)(H.E, { variant: "text-md/bold", color: "none", children: "Stats for Nerds" }),
                    (0, i.jsxs)("div", {
                        className: K.Pz,
                        children: [
                            (0, i.jsx)(B.m, {
                                text: u ? q : z,
                                children: (0, i.jsx)(_.D, {
                                    className: K.cL,
                                    onClick: h,
                                    "aria-label": u ? q : z,
                                    focusProps: { offset: 2 },
                                    children: (0, i.jsx)(j.T, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, i.jsx)(B.m, {
                                text: $,
                                children: (0, i.jsx)(_.D, {
                                    className: K.b,
                                    onClick: c,
                                    "aria-label": $,
                                    focusProps: { offset: 2 },
                                    children: (0, i.jsx)(W.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: K.Qs,
                children: [
                    d.codecInfo?.containerFormat != null &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Container" }),
                                (0, i.jsx)("span", { className: K.cR, children: d.codecInfo.containerFormat }),
                            ],
                        }),
                    (d.codecInfo?.isProgressive != null || d.codecInfo?.isFragmented != null) &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Format" }),
                                (0, i.jsx)("span", {
                                    className: K.cR,
                                    children:
                                        ((t = d.codecInfo.isProgressive ?? null),
                                        (n = d.codecInfo.isFragmented ?? null),
                                        (o = []),
                                        (!0 === t && o.push("Progressive"),
                                        !0 === n && o.push("Fragmented"),
                                        0 === o.length)
                                            ? "Standard"
                                            : o.join(", ")),
                                }),
                            ],
                        }),
                    null != d.codecInfo &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Resolution" }),
                                (0, i.jsxs)("span", {
                                    className: K.cR,
                                    children: [
                                        d.resolution,
                                        " @ ",
                                        null === (a = d.frameRate) ? "N/A" : `${a} fps`,
                                        d.droppedFrames > 0 && ` (${d.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != d.codecInfo &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Viewport" }),
                                (0, i.jsxs)("span", {
                                    className: K.cR,
                                    children: [d.viewportWidth, "x", d.viewportHeight],
                                }),
                            ],
                        }),
                    d.codecInfo?.videoCodec != null &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Video" }),
                                (0, i.jsxs)("span", {
                                    className: K.cR,
                                    children: [
                                        d.codecInfo.videoCodecDescription ?? d.codecInfo.videoCodec ?? "Unknown",
                                        null != d.codecInfo.videoBitrate && ` @ ${k(d.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    d.codecInfo?.audioCodec != null &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Audio" }),
                                (0, i.jsxs)("span", {
                                    className: K.cR,
                                    children: [
                                        d.codecInfo.audioCodecDescription ?? d.codecInfo.audioCodec ?? "Unknown",
                                        null != d.codecInfo.audioBitrate && ` @ ${k(d.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    d.codecInfo?.audioChannels != null &&
                        (0, i.jsxs)("div", {
                            className: K.N8,
                            children: [
                                (0, i.jsx)("span", { className: K.Zh, children: "Audio Channels" }),
                                (0, i.jsxs)("span", {
                                    className: K.cR,
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
                                        })(d.codecInfo.audioChannels),
                                        null != d.codecInfo.audioSampleRate &&
                                            ` @ ${null === ((s = d.codecInfo.audioSampleRate)) ? "N/A" : s < 1e3 ? `${s} Hz` : `${(s / 1e3).toFixed(1)} kHz`}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: K.N8,
                        children: [
                            (0, i.jsx)("span", { className: K.Zh, children: "Buffer Health" }),
                            (0, i.jsx)("span", {
                                className: K.cR,
                                children: isFinite((l = d.bufferedSeconds)) ? l.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== d.errorCode &&
                        (0, i.jsx)("div", {
                            className: K.K6,
                            children: (0, i.jsxs)("div", {
                                className: K.N8,
                                children: [
                                    (0, i.jsx)("span", { className: K.Zh, children: "Error" }),
                                    (0, i.jsxs)("span", {
                                        className: K.cR,
                                        children: [d.errorCode, null !== d.errorMessage && `: ${d.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
var X = n(20504),
    Q = n(652215),
    J = n(838541),
    ee = n(650583),
    et = n(277446),
    en = n(653307);
let ei = "-:--",
    er = { friction: 14, tension: 200 },
    ea = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    es = { width: "100%", height: "100%", backgroundColor: "black" };
function el(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
let eo = (e) => {
    let { current: t, duration: n } = e,
        r = null != t ? el(t) : ei,
        a = null != n ? el(n) : ei;
    return (
        (r = r.padStart(a.length, "0")),
        (0, i.jsxs)("div", {
            className: et.d$,
            children: [
                (0, i.jsx)("span", { className: et.Ue, children: r }),
                (0, i.jsx)("span", { className: et.zO, children: "/" }),
                (0, i.jsx)("span", { className: et.Ue, children: a }),
            ],
        })
    );
};
class ed extends r.Component {
    static defaultProps = { disabled: !1 };
    state = { translateY: new d.A.Value(0) };
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
        t ? d.A.spring(n, { toValue: e, ...er }).start() : n.setValue(e);
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
        let { playing: e, currentTime: t, duration: n, onPause: r, onPlay: a, disabled: s } = this.props;
        return e
            ? (0, i.jsx)(_.D, {
                  className: et.CY,
                  onClick: r,
                  tabIndex: s ? -1 : 0,
                  "aria-label": M.intl.string(M.t.ZcgDJX),
                  children: (0, i.jsx)(E.E, { size: "xs", color: "currentColor", className: et.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, i.jsx)(_.D, {
                    className: et.CY,
                    onClick: a,
                    tabIndex: s ? -1 : 0,
                    "aria-label": M.intl.string(M.t.hsvh0i),
                    children: (0, i.jsx)(C, { className: et.pd }, "replay"),
                })
              : (0, i.jsx)(_.D, {
                    className: et.CY,
                    onClick: a,
                    tabIndex: s ? -1 : 0,
                    "aria-label": M.intl.string(M.t.RscU7I),
                    children: (0, i.jsx)(A.u, { size: "xs", color: "currentColor", className: et.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: r,
            muted: a,
            onDrag: s,
            onDragEnd: l,
            onDragStart: o,
            onToggleMuted: c,
            onVolumeShow: u,
            onVolumeHide: _,
            width: E,
            volume: A,
            type: h,
        } = this.props;
        return (0, i.jsxs)(d.A.div, {
            className: h === ea.VIDEO ? et._v : et.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof E || E > 250 ? (0, i.jsx)(eo, { current: n, duration: r }) : null,
                (0, i.jsx)(v.A, {
                    buffers: e,
                    value: r ?? 0,
                    onDrag: s,
                    onDragEnd: l,
                    onDragStart: o,
                    type: v.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, i.jsx)("div", {
                    className: en.Uu,
                    children: (0, i.jsx)(X.A, {
                        ref: this.setVolumeButtonRef,
                        muted: a,
                        value: A,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => s(e, v.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: u,
                        onVolumeHide: _,
                        iconClassName: et.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: et.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function ec(e) {
    let { fileName: t, fileSize: n, src: r, disabled: a, mimeType: s, hideDownloadButton: l } = e;
    return (0, i.jsxs)("div", {
        className: et.WU,
        children: [
            (0, i.jsxs)("div", {
                className: et.xe,
                children: [
                    a
                        ? t
                        : (0, i.jsx)(p.A, {
                              href: r,
                              className: et.kH,
                              iconClassName: et.XR,
                              mimeType: s,
                              fileName: t,
                          }),
                    (0, i.jsx)("div", { className: et.fL, children: n }),
                ],
            }),
            !l && (0, i.jsx)(p.A, { href: r, className: et.kH, iconClassName: et.XR, mimeType: s }),
        ],
    });
}
class eu extends r.Component {
    state = { play: !1, scale: new d.A.Value(0), opacity: new d.A.Value(0) };
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    popAnimation = () => {
        let { opacity: e, scale: t } = this.state;
        t.setValue(0),
            e.setValue(0),
            d.A.parallel([
                d.A.sequence([
                    d.A.timing(e, { toValue: 1, duration: 200 }),
                    d.A.timing(e, { toValue: 0, duration: 200 }),
                ]),
                d.A.spring(t, { toValue: 1.5, ...er, friction: 80 }),
            ]).start();
    };
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state;
        return d.A.accelerate({
            opacity: e.interpolate({ inputRange: [0, 1], outputRange: [0, 0.8] }),
            transform: [{ scale: t.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
        });
    }
    render() {
        let { play: e } = this.state,
            t = e ? A.u : E.E;
        return (0, i.jsx)(d.A.div, {
            className: et.kO,
            style: this.getAnimatedStyle(),
            children: (0, i.jsx)(t, { className: et.PK }),
        });
    }
}
let e_ = (0, T.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class eE {
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
        (this.metadata = e), (this.analyticsEnabled = e_.getConfig({ location: "media_player" }).enabled);
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
            R.default.track(Q.HAw.MEDIA_PLAY_FINISHED, {
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
                (0, u.dr)(this.currentState);
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
                (0, u.dr)(this.currentState);
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
                (0, u.dr)(this.currentState);
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
                (0, u.dr)(this.currentState);
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
                (0, u.dr)(this.currentState);
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
                (0, u.dr)(this.currentState);
        }
    };
    onDragStart = (e) => {
        null != e && (this.lastPlayingTime = e);
    };
    onLoadedMetadata = (e) => {
        this.metadata.fileDurationSec = e.currentTarget.duration;
    };
}
class eA extends r.PureComponent {
    static Types = ea;
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
            (this._analytics = new eE({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: i, playable: r } = this.props,
            a = "function" == typeof i ? i() : i,
            s = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !r,
            muted: s,
            volume: a,
            playing: t,
            preload: "none",
            width: eA.minWidth,
            height: eA.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: i, src: r } = this.props;
        if (
            i === ea.VIDEO &&
            (y.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            y.Ay.isVideoStatsEnabled(r) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                y.Ay.setVideoStats(r, !1);
            }
        let { current: a } = this.mediaRef;
        null != a && (t && (a.muted = t), e && (this.play(!0), this.handleUIUpdate()), (a.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: i, onMute: r, src: a, type: s },
            state: { playing: l, fullscreen: o, muted: d, dragging: c, volume: u, showStats: _ },
        } = this;
        if (a !== e.src && s === ea.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                y.Ay.clearVideoStats(e.src);
            let t = y.Ay.isVideoStatsEnabled(a);
            _ !== t && (t ? this.toggleStats() : _ && this.toggleStats());
        }
        let { current: E } = this.mediaRef,
            { current: A } = this.playPausePopRef;
        if (null == E) return;
        l && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && A?.pop(l))
            : !l && t.playing && (E.pause(), A?.pop(l), n?.()),
            l && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let h = (0, D.qf)(E.parentNode, E);
        o && !t.fullscreen && null != h
            ? ((0, D.tl)(h), h.addEventListener(D.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != h &&
              (h.removeEventListener(D.Wb, this.handleFullScreenExit), (0, D.sP)(h, h.ownerDocument)),
            c === v.A.Types.DURATION && t.dragging !== v.A.Types.DURATION && l
                ? E.pause()
                : c !== v.A.Types.DURATION && t.dragging === v.A.Types.DURATION && l && E.play(),
            d !== t.muted && ((E.muted = d), r?.(d)),
            u !== t.volume && ((E.volume = u), i?.(u));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (y.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === ea.VIDEO && y.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, D.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(D.Wb, this.handleFullScreenExit), (0, D.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: i } = this.props,
            { current: r } = this.mediaRef;
        if (null != r) {
            let a = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((r.volume = e), (a.volume = e));
            }
            if ("function" == typeof i) {
                let e = i();
                e !== this.state.muted && ((r.muted = e), (a.muted = e));
            }
            this.setState(a), r.play(), t?.(e, r.currentTime * O.A.Millis.SECOND, r.duration * O.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, eA.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, eA.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, D.qf)(e.parentNode, e);
        (null != t && (0, D._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
        if (t === v.A.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
        else if (t === v.A.Types.VOLUME) {
            let t = (0, L.w)(e, 1);
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
                          let r = e.buffered.start(i),
                              a = e.buffered.end(i);
                          if (a - r < 1) continue;
                          let s = (a - r) / n,
                              l = r / n;
                          t.push([l, s]);
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
            props: { onClick: i, autoPlay: r, autoMute: a },
        } = this;
        null != i
            ? i(e)
            : (e.stopPropagation(),
              r && !t && n && a && this.state.muted
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
        if (e.key === ee.dh.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.key !== ee.dh.ARROW_LEFT || null == t || n)
            if (e.key !== ee.dh.ARROW_RIGHT || null == t || n) {
                if ((0, m.A)(e.key) && null != t) {
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
                    (this._isUpdatingStats = !1), this._unmounted || y.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, c.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new V(t, this.props.fileSizeBytes)),
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
        t !== ea.VIDEO ||
            this._isUpdatingStats ||
            (y.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: r, responsive: a, mediaLayoutType: s } = this.props,
            { playing: l, fullscreen: o } = this.state,
            d = this.getWidth(),
            c = this.getHeight();
        return r
            ? (0, i.jsx)(f.A, {
                  alt: e,
                  className: et.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: d,
                  responsive: a && !o,
                  mediaLayoutType: s,
                  playsInline: !0,
                  autoPlay: l,
              })
            : (0, i.jsx)(f.A, {
                  alt: e,
                  className: et.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: l,
                  height: c,
                  responsive: a && !o,
                  mediaLayoutType: o ? J.dG.STATIC : s,
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
                  width: d,
                  src: t,
              });
    }
    renderAudio() {
        return (0, i.jsx)("audio", {
            className: et.z7,
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
                    onVolumeShow: a,
                    onVolumeHide: s,
                    onControlsHide: l,
                    onControlsShow: o,
                },
                state: {
                    buffers: d,
                    currentTime: c,
                    duration: u,
                    hasClickedPlay: _,
                    hideControls: E,
                    muted: A,
                    playing: h,
                    fullscreen: I,
                    volume: f,
                    dragging: p,
                },
            } = this,
            T = this.getWidth();
        return _ || n || t === ea.AUDIO
            ? (0, i.jsx)(ed, {
                  buffers: d,
                  currentTime: c,
                  duration: u,
                  volume: (0, L.M)(f, 1),
                  hide: t === ea.VIDEO && E,
                  muted: A,
                  autoPlay: n,
                  onDrag: this.handleDrag,
                  onDragEnd: this.handleDragEnd,
                  onDragStart: this.handleDragStart,
                  onPause: () => this.setPlay(!1),
                  onPlay: () => this.setPlay(!0),
                  onToggleMuted: this.toggleMuted,
                  onVolumeShow: a,
                  onVolumeHide: s,
                  onControlsShow: o,
                  onControlsHide: l,
                  playing: h,
                  dragging: p,
                  type: t,
                  ref: this.controlsRef,
                  width: I ? window.screen.width : T,
                  disabled: !r,
                  children:
                      t === ea.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, i.jsx)(g.A, {
                                "aria-label": M.intl.string(M.t["2nM3Pk"]),
                                className: et.CY,
                                iconClassName: et.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, D.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, i.jsx)(U, { onPlay: this.handleVideoClick, inactive: !r });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: r, playable: a, mimeType: s } = this.props;
        return null == e || null == t
            ? null
            : r === ea.AUDIO
              ? (0, i.jsx)(ec, { fileName: e, fileSize: t, src: n, disabled: !a, mimeType: s, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, i.jsx)(eu, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: i } = this.state,
            r = this.getWidth();
        return i ? es : t === ea.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: r, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: r,
                className: a,
                renderLinkComponent: l,
                responsive: o,
                mediaLayoutType: d,
                renderOverlayContent: c,
            } = this.props,
            { fullscreen: u, hideControls: _, playing: E } = this.state,
            A = et.ub;
        if ((t === ea.AUDIO ? (A = et._X) : _ ? (A = et.CX) : E && (A = et.sw), r && t === ea.VIDEO)) {
            let t = this.getWidth();
            return (0, i.jsxs)("div", {
                className: s()(A, { [et.mE]: d === J.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, i.jsx)("div", {
                        className: et.s4,
                        children: (0, i.jsx)(w.A, {
                            className: et.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: l,
                        }),
                    }),
                ],
            });
        }
        return (0, i.jsx)("div", {
            ref: this.containerRef,
            className: s()(A, et.mr, a, { [et.mE]: d === J.dG.MOSAIC }),
            "data-fullscreen": u,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: E ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, i.jsxs)(h.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === ea.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, i.jsx)(I.N, {
                        theme: Q.NJ8.MIDNIGHT,
                        children: (e) => (0, i.jsx)("div", { className: e, children: this.renderControls() }),
                    }),
                    t === ea.VIDEO ? this.renderPlayPausePop() : null,
                    null != c ? (0, i.jsx)("div", { className: s()({ [et.eM]: E || u }), children: c() }) : null,
                    t === ea.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, i.jsx)(Z, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== ea.VIDEO) {
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
let eh = eA;

"use strict";
n.d(t, { rB: () => ea, Ay: () => ep }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(615300),
    c = n(621466),
    d = n(933681),
    h = n(939249),
    m = n(113494),
    f = n(782134),
    p = n(259678),
    g = n(43990),
    x = n(607470),
    A = n(384015),
    E = n(945810),
    C = n(953051),
    I = n(423562),
    y = n(544180),
    S = n(953727);
function N(e) {
    let { width: t = 16, height: n = 16, color: i = "currentColor", foreground: s, ...r } = e;
    return (0, l.jsx)("svg", {
        ...(0, S.A)(r),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            className: s,
            fill: i,
            d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
        }),
    });
}
var v = n(174459),
    _ = n(927813),
    T = n(824744),
    j = n(475815),
    b = n(953584),
    R = n(122641),
    O = n(692051),
    M = n(375708),
    L = n(317714);
function k(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        a = i.useRef(null),
        o = (0, l.jsx)("div", {
            className: L.P0,
            ref: a,
            children: (0, l.jsx)(f.PlayIcon, { size: "xs", color: "currentColor", className: L.Kk }),
        });
    return (0, l.jsx)(O.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, l.jsx)("div", { className: L.Iv, children: o })
                : (0, l.jsx)(h.D, {
                      className: r()(n, L.Iv, { [L.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": M.intl.string(M.t.RscU7I),
                      focusProps: { ringTarget: a },
                      children: o,
                  }),
    });
}
var w = n(821209);
let P = new (n(626584).A)("mp4box"),
    D = {
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
function U(e) {
    return null === e
        ? "N/A"
        : e < 1e3
          ? `${e} bps`
          : e < 1e6
            ? `${(e / 1e3).toFixed(1)} Kbps`
            : `${(e / 1e6).toFixed(2)} Mbps`;
}
async function G(e) {
    try {
        let t;
        if ("u" < typeof fetch) return D;
        let { default: l } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
            i = null;
        try {
            let t = await fetch(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (i = parseInt(e, 10));
            }
        } catch {}
        try {
            t = await fetch(e, { method: "GET", headers: { Range: "bytes=0-524287" } });
        } catch (e) {
            return P.warn("Range request failed, likely CORS issue:", e), D;
        }
        if (!t.ok && 206 !== t.status) return P.warn("Unexpected response status:", t.status), D;
        if ("opaque" === t.type) return P.warn("Opaque response, CORS headers may be missing"), D;
        let s = await t.arrayBuffer(),
            r = l.createFile();
        return new Promise((t) => {
            let n = !1,
                l = !1,
                a = null,
                o = null;
            function u() {
                n || ((n = !0), clearTimeout(c), null != o && clearTimeout(o), t(D));
            }
            let c = setTimeout(() => {
                P.warn("Timeout after", 5e3, "ms, moov atom not found"), u();
            }, 5e3);
            (r.onReady = (e) => {
                if (n) return;
                (n = !0), clearTimeout(c), null != o && clearTimeout(o);
                let l = e.videoTracks[0],
                    i = e.audioTracks[0],
                    s = {
                        videoCodec: l?.codec ?? null,
                        audioCodec: i?.codec ?? null,
                        videoCodecDescription:
                            null != l
                                ? (function (e) {
                                      if (e.startsWith("avc1")) return "H.264/AVC";
                                      if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
                                      if (e.startsWith("vp08")) return "VP8";
                                      if (e.startsWith("vp09")) return "VP9";
                                      if (e.startsWith("av01")) return "AV1";
                                      return e;
                                  })(l.codec)
                                : null,
                        audioCodecDescription:
                            null != i
                                ? (function (e) {
                                      if (e.startsWith("mp4a.40.2")) return "AAC-LC";
                                      if (e.startsWith("mp4a.40.5")) return "HE-AAC";
                                      if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
                                      if (e.startsWith("mp4a.40")) return "AAC";
                                      if ("opus" === e) return "Opus";
                                      else if ("vorbis" === e) return "Vorbis";
                                      return e;
                                  })(i.codec)
                                : null,
                        videoBitrate: l?.bitrate ?? null,
                        audioBitrate: i?.bitrate ?? null,
                        audioChannels: i?.audio?.channel_count ?? null,
                        audioSampleRate: i?.audio?.sample_rate ?? null,
                        frameRate:
                            null != l
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
                                  })(l)
                                : null,
                        videoWidth: l?.video?.width ?? null,
                        videoHeight: l?.video?.height ?? null,
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
                (r.onError = () => {
                    u();
                }),
                (r.onSeek = async (t) => {
                    if (n || l || null == i || !(i > 524288)) {
                        if (l) {
                            if (null != a && performance.now() - a < 5e3) return;
                            u();
                            return;
                        }
                    } else {
                        (l = !0), P.log("Fetching end chunk for moov atom");
                        try {
                            let t = await fetch(e, {
                                method: "GET",
                                headers: { Range: `bytes=${i - 524288}-${i - 1}` },
                            });
                            if (t.ok || 206 === t.status) {
                                let e,
                                    n = await t.arrayBuffer();
                                200 === t.status && n.byteLength === i
                                    ? ((n = n.slice(i - 524288)), (e = Math.max(0, i - 524288)))
                                    : (e = 206 === t.status ? Math.max(0, i - 524288) : 0);
                                let l = n;
                                l.fileStart = e;
                                try {
                                    r.appendBuffer(l), r.flush(), (a = performance.now());
                                    return;
                                } catch (e) {
                                    P.warn("Failed to append end chunk:", e), u();
                                    return;
                                }
                            }
                        } catch (e) {
                            P.warn("Failed to fetch end chunk:", e);
                        }
                        u();
                        return;
                    }
                    (null == i || i <= 524288) && u();
                }),
                (s.fileStart = 0);
            try {
                r.appendBuffer(s),
                    r.flush(),
                    (o = setTimeout(() => {
                        n || l || null == r.onSeek || r.onSeek({ offset: 0, isLast: !1 });
                    }, 500));
            } catch (e) {
                u();
            }
        });
    } catch (e) {
        return D;
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
        this.codecInfoPromise = G(e);
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
            l = this.videoElement;
        this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
            ? ((e = this.cachedCodecInfo.videoWidth), (t = this.cachedCodecInfo.videoHeight), (n = `${e}x${t}`))
            : ((e = 0 !== l.videoWidth ? l.videoWidth : 0),
              (t = 0 !== l.videoHeight ? l.videoHeight : 0),
              (n = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
        let i = Math.round(l.clientWidth),
            s = Math.round(l.clientHeight),
            r = [],
            a = 0,
            o = l.currentTime;
        for (let e = 0; e < l.buffered.length; e++) {
            let t = l.buffered.start(e),
                n = l.buffered.end(e);
            r.push({ start: t, end: n }), n > o && (t <= o ? (a += n - o) : (a += n - t));
        }
        let u = 0,
            c = 0,
            d = 0,
            h = null;
        if ("function" == typeof l.getVideoPlaybackQuality) {
            let e = l.getVideoPlaybackQuality();
            (u = e.droppedVideoFrames), (d = (c = e.totalVideoFrames) > 0 ? (u / c) * 100 : 0);
        }
        if (this.cachedCodecInfo?.frameRate != null) h = this.cachedCodecInfo.frameRate;
        else if ("function" == typeof l.getVideoPlaybackQuality) {
            if (null !== this.lockedFrameRate) h = this.lockedFrameRate;
            else if (Math.abs(l.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
                if (this.recentFrameRates.length >= 3) {
                    let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
                    (this.lockedFrameRate = Math.round(e)),
                        (h = this.lockedFrameRate),
                        (this.lastKnownFrameRate = this.lockedFrameRate);
                } else
                    (this.baselineFrames = c),
                        (this.baselineTime = l.currentTime),
                        (this.recentFrameRates = []),
                        (h = this.lastKnownFrameRate);
            else {
                let e = c - this.baselineFrames,
                    t = l.currentTime - this.baselineTime;
                t >= 1 && e > 0
                    ? (this.recentFrameRates.push(e / t),
                      this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
                      (h = Math.round(this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length)),
                      (this.lastKnownFrameRate = h))
                    : null !== this.lastKnownFrameRate && (h = this.lastKnownFrameRate);
            }
            this.lastCurrentTime = l.currentTime;
        }
        let m = l.error?.code ?? null,
            f = l.error?.message ?? null;
        return (
            null == this.codecInfoPromise && this.fetchCodecInfo(),
            {
                resolution: n,
                videoWidth: e,
                videoHeight: t,
                viewportWidth: i,
                viewportHeight: s,
                currentTime: l.currentTime,
                duration: l.duration,
                bufferedRanges: r,
                bufferedSeconds: a,
                droppedFrames: u,
                totalFrames: c,
                droppedFramesPercent: d,
                frameRate: h,
                src: l.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: m,
                errorMessage: f,
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
var F = n(834730),
    H = n(866665),
    B = n(624479),
    W = n(789645),
    K = n(957565),
    z = n(183714);
let Z = "Close",
    Y = "Copy to JSON",
    q = "Copied!";
function J(e) {
    var t, n, s, r, a;
    let o,
        { stats: u, onClose: c } = e,
        [d, m] = i.useState(!1),
        f = i.useRef(null);
    i.useEffect(
        () => () => {
            null != f.current && clearTimeout(f.current);
        },
        [],
    );
    let p = i.useCallback(() => {
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
        (0, K.C)(
            e,
            () => {
                m(!0),
                    null != f.current && clearTimeout(f.current),
                    (f.current = window.setTimeout(() => {
                        m(!1), (f.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [u]);
    return (0, l.jsxs)("div", {
        className: z.gP,
        children: [
            (0, l.jsxs)("div", {
                className: z.wx,
                children: [
                    (0, l.jsx)(F.E, { variant: "text-md/bold", color: "none", children: "Stats for Nerds" }),
                    (0, l.jsxs)("div", {
                        className: z.Pz,
                        children: [
                            (0, l.jsx)(H.m, {
                                text: d ? q : Y,
                                children: (0, l.jsx)(h.D, {
                                    className: z.cL,
                                    onClick: p,
                                    "aria-label": d ? q : Y,
                                    focusProps: { offset: 2 },
                                    children: (0, l.jsx)(B.CopyIcon, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, l.jsx)(H.m, {
                                text: Z,
                                children: (0, l.jsx)(h.D, {
                                    className: z.b,
                                    onClick: c,
                                    "aria-label": Z,
                                    focusProps: { offset: 2 },
                                    children: (0, l.jsx)(W.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: z.Qs,
                children: [
                    u.codecInfo?.containerFormat != null &&
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Container" }),
                                (0, l.jsx)("span", { className: z.cR, children: u.codecInfo.containerFormat }),
                            ],
                        }),
                    (u.codecInfo?.isProgressive != null || u.codecInfo?.isFragmented != null) &&
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Format" }),
                                (0, l.jsx)("span", {
                                    className: z.cR,
                                    children:
                                        ((t = u.codecInfo.isProgressive ?? null),
                                        (n = u.codecInfo.isFragmented ?? null),
                                        (o = []),
                                        (!0 === t && o.push("Progressive"),
                                        !0 === n && o.push("Fragmented"),
                                        0 === o.length)
                                            ? "Standard"
                                            : o.join(", ")),
                                }),
                            ],
                        }),
                    null != u.codecInfo &&
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Resolution" }),
                                (0, l.jsxs)("span", {
                                    className: z.cR,
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
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Viewport" }),
                                (0, l.jsxs)("span", {
                                    className: z.cR,
                                    children: [u.viewportWidth, "x", u.viewportHeight],
                                }),
                            ],
                        }),
                    u.codecInfo?.videoCodec != null &&
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Video" }),
                                (0, l.jsxs)("span", {
                                    className: z.cR,
                                    children: [
                                        u.codecInfo.videoCodecDescription ?? u.codecInfo.videoCodec ?? "Unknown",
                                        null != u.codecInfo.videoBitrate && ` @ ${U(u.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    u.codecInfo?.audioCodec != null &&
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Audio" }),
                                (0, l.jsxs)("span", {
                                    className: z.cR,
                                    children: [
                                        u.codecInfo.audioCodecDescription ?? u.codecInfo.audioCodec ?? "Unknown",
                                        null != u.codecInfo.audioBitrate && ` @ ${U(u.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    u.codecInfo?.audioChannels != null &&
                        (0, l.jsxs)("div", {
                            className: z.N8,
                            children: [
                                (0, l.jsx)("span", { className: z.Zh, children: "Audio Channels" }),
                                (0, l.jsxs)("span", {
                                    className: z.cR,
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
                                            ` @ ${null === ((r = u.codecInfo.audioSampleRate)) ? "N/A" : r < 1e3 ? `${r} Hz` : `${(r / 1e3).toFixed(1)} kHz`}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, l.jsxs)("div", {
                        className: z.N8,
                        children: [
                            (0, l.jsx)("span", { className: z.Zh, children: "Buffer Health" }),
                            (0, l.jsx)("span", {
                                className: z.cR,
                                children: isFinite((a = u.bufferedSeconds)) ? a.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== u.errorCode &&
                        (0, l.jsx)("div", {
                            className: z.K6,
                            children: (0, l.jsxs)("div", {
                                className: z.N8,
                                children: [
                                    (0, l.jsx)("span", { className: z.Zh, children: "Error" }),
                                    (0, l.jsxs)("span", {
                                        className: z.cR,
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
var $ = n(20504),
    X = n(652215),
    Q = n(838541),
    ee = n(650583),
    et = n(311225),
    en = n(938442);
let el = "-:--",
    ei = { friction: 14, tension: 200 },
    es = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    er = { width: "100%", height: "100%", backgroundColor: "black" };
function ea(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
function eo(e) {
    let { current: t, duration: n } = e,
        i = null != t ? ea(t) : el,
        s = null != n ? ea(n) : el;
    return (
        (i = i.padStart(s.length, "0")),
        (0, l.jsxs)("div", {
            className: et.d$,
            children: [
                (0, l.jsx)("span", { className: et.Ue, children: i }),
                (0, l.jsx)("span", { className: et.zO, children: "/" }),
                (0, l.jsx)("span", { className: et.Ue, children: s }),
            ],
        })
    );
}
class eu extends i.Component {
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
        let { playing: e, currentTime: t, duration: n, onPause: i, onPlay: s, disabled: r } = this.props;
        return e
            ? (0, l.jsx)(h.D, {
                  className: et.CY,
                  onClick: i,
                  tabIndex: r ? -1 : 0,
                  "aria-label": M.intl.string(M.t.ZcgDJX),
                  children: (0, l.jsx)(m.PauseIcon, { size: "xs", color: "currentColor", className: et.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, l.jsx)(h.D, {
                    className: et.CY,
                    onClick: s,
                    tabIndex: r ? -1 : 0,
                    "aria-label": M.intl.string(M.t.hsvh0i),
                    children: (0, l.jsx)(N, { className: et.pd }, "replay"),
                })
              : (0, l.jsx)(h.D, {
                    className: et.CY,
                    onClick: s,
                    tabIndex: r ? -1 : 0,
                    "aria-label": M.intl.string(M.t.RscU7I),
                    children: (0, l.jsx)(f.PlayIcon, { size: "xs", color: "currentColor", className: et.pd }, "play"),
                });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: i,
            muted: s,
            onDrag: r,
            onDragEnd: a,
            onDragStart: o,
            onToggleMuted: c,
            onVolumeShow: d,
            onVolumeHide: h,
            width: m,
            volume: f,
            type: p,
        } = this.props;
        return (0, l.jsxs)(u.A.div, {
            className: p === es.VIDEO ? et._v : et.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof m || m > 250 ? (0, l.jsx)(eo, { current: n, duration: i }) : null,
                (0, l.jsx)(R.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: r,
                    onDragEnd: a,
                    onDragStart: o,
                    type: R.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, l.jsx)("div", {
                    className: en.Uu,
                    children: (0, l.jsx)($.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: f,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => r(e, R.A.Types.VOLUME),
                        onToggleMute: c,
                        onVolumeShow: d,
                        onVolumeHide: h,
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
    let { fileName: t, fileSize: n, src: i, disabled: s, mimeType: r, hideDownloadButton: a } = e;
    return (0, l.jsxs)("div", {
        className: et.WU,
        children: [
            (0, l.jsxs)("div", {
                className: et.xe,
                children: [
                    s
                        ? t
                        : (0, l.jsx)(A.A, {
                              href: i,
                              className: et.kH,
                              iconClassName: et.XR,
                              mimeType: r,
                              fileName: t,
                          }),
                    (0, l.jsx)("div", { className: et.fL, children: n }),
                ],
            }),
            !a && (0, l.jsx)(A.A, { href: i, className: et.kH, iconClassName: et.XR, mimeType: r }),
        ],
    });
}
class ed extends i.Component {
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
            t = e ? f.PlayIcon : m.PauseIcon;
        return (0, l.jsx)(u.A.div, {
            className: et.kO,
            style: this.getAnimatedStyle(),
            children: (0, l.jsx)(t, { className: et.PK }),
        });
    }
}
let eh = (0, E.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class em {
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
        (this.metadata = e), (this.analyticsEnabled = eh.getConfig({ location: "media_player" }).enabled);
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
            v.default.track(X.HAw.MEDIA_PLAY_FINISHED, {
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
                connection_type: y.A.getType(),
                effective_connection_speed: y.A.getEffectiveConnectionSpeed(),
                service_provider: y.A.getServiceProvider(),
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
class ef extends i.PureComponent {
    static Types = es;
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
    containerRef = i.createRef();
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
        super(e),
            (this._analytics = new em({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: l, playable: i } = this.props,
            s = "function" == typeof l ? l() : l,
            r = "function" == typeof n ? n() : n;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !i,
            muted: r,
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
            { type: l, src: i } = this.props;
        if (
            l === es.VIDEO &&
            (b.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            b.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                b.Ay.setVideoStats(i, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: l, onMute: i, src: s, type: r },
            state: { playing: a, fullscreen: o, muted: u, dragging: c, volume: d, showStats: h },
        } = this;
        if (s !== e.src && r === es.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                b.Ay.clearVideoStats(e.src);
            let t = b.Ay.isVideoStatsEnabled(s);
            h !== t && (t ? this.toggleStats() : h && this.toggleStats());
        }
        let { current: m } = this.mediaRef,
            { current: f } = this.playPausePopRef;
        if (null == m) return;
        a && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && f?.pop(a))
            : !a && t.playing && (m.pause(), f?.pop(a), n?.()),
            a && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let p = (0, j.qf)(m.parentNode, m);
        o && !t.fullscreen && null != p
            ? ((0, j.tl)(p), p.addEventListener(j.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != p &&
              (p.removeEventListener(j.Wb, this.handleFullScreenExit), (0, j.sP)(p, p.ownerDocument)),
            c === R.A.Types.DURATION && t.dragging !== R.A.Types.DURATION && a
                ? m.pause()
                : c !== R.A.Types.DURATION && t.dragging === R.A.Types.DURATION && a && m.play(),
            u !== t.muted && ((m.muted = u), i?.(u)),
            d !== t.volume && ((m.volume = d), l?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (b.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === es.VIDEO && b.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, j.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(j.Wb, this.handleFullScreenExit), (0, j.sP)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { onPlay: t, volume: n, autoMute: l } = this.props,
            { current: i } = this.mediaRef;
        if (null != i) {
            let s = {};
            if ("function" == typeof n) {
                let e = n();
                e !== this.state.volume && ((i.volume = e), (s.volume = e));
            }
            if ("function" == typeof l) {
                let e = l();
                e !== this.state.muted && ((i.muted = e), (s.muted = e));
            }
            this.setState(s), i.play(), t?.(e, i.currentTime * _.A.Millis.SECOND, i.duration * _.A.Millis.SECOND);
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
        let t = (0, j.qf)(e.parentNode, e);
        (null != t && (0, j._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
                { current: l } = e.mediaRef;
            null != l &&
                isFinite(l.duration) &&
                isFinite(l.currentTime) &&
                ((l.currentTime = t), e.updateValue(t / l.duration, n), e.updateTime(t, l.duration));
        };
    })();
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { current: n } = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e,
            l = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== l) && this.setState({ currentTime: n, duration: l });
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
    handleBuffer = o().debounce(() => {
        let { current: e } = this.mediaRef;
        null == e
            ? this.setState({ buffers: [] })
            : this.setState({
                  buffers: (function (e) {
                      let t = [],
                          { duration: n } = e;
                      for (let l = 0; l < e.buffered.length; l++) {
                          let i = e.buffered.start(l),
                              s = e.buffered.end(l);
                          if (s - i < 1) continue;
                          let r = (s - i) / n,
                              a = i / n;
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
            props: { onClick: l, autoPlay: i, autoMute: s },
        } = this;
        null != l
            ? l(e)
            : (e.stopPropagation(),
              i && !t && n && s && this.state.muted
                  ? this.setState({ muted: !1, hasClickedPlay: !0 })
                  : this.setPlay(!this.state.playing));
    };
    setPlay = (e) => {
        let {
            props: { autoMute: t },
            state: { hasClickedPlay: n, muted: l },
        } = this;
        e !== this.state.playing &&
            (e
                ? this.setState({ playing: e, hasClickedPlay: !0, muted: (!!n || !t || !l) && l })
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
                if ((0, C.A)(e.key) && null != t) {
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
        t !== es.VIDEO ||
            this._isUpdatingStats ||
            (b.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: i, responsive: s, mediaLayoutType: r } = this.props,
            { playing: a, fullscreen: o } = this.state,
            u = this.getWidth(),
            c = this.getHeight();
        return i
            ? (0, l.jsx)(x.A, {
                  alt: e,
                  className: et.Ki,
                  controls: !1,
                  height: c,
                  poster: n,
                  width: u,
                  responsive: s && !o,
                  mediaLayoutType: r,
                  playsInline: !0,
                  autoPlay: a,
              })
            : (0, l.jsx)(x.A, {
                  alt: e,
                  className: et.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: a,
                  height: c,
                  responsive: s && !o,
                  mediaLayoutType: o ? Q.dG.STATIC : r,
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
        return (0, l.jsx)("audio", {
            className: et.z7,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, l.jsx)("source", { src: this.props.src }),
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
                    onVolumeHide: r,
                    onControlsHide: a,
                    onControlsShow: o,
                },
                state: {
                    buffers: u,
                    currentTime: c,
                    duration: d,
                    hasClickedPlay: h,
                    hideControls: m,
                    muted: f,
                    playing: p,
                    fullscreen: g,
                    volume: x,
                    dragging: A,
                },
            } = this,
            E = this.getWidth();
        return h || n || t === es.AUDIO
            ? (0, l.jsx)(eu, {
                  buffers: u,
                  currentTime: c,
                  duration: d,
                  volume: (0, T.M)(x, 1),
                  hide: t === es.VIDEO && m,
                  muted: f,
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
                  playing: p,
                  dragging: A,
                  type: t,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : E,
                  disabled: !i,
                  children:
                      t === es.VIDEO && !1 !== this.props.allowFullScreen
                          ? (0, l.jsx)(I.A, {
                                "aria-label": M.intl.string(M.t["2nM3Pk"]),
                                className: et.CY,
                                iconClassName: et.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, j.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, l.jsx)(k, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: s, mimeType: r } = this.props;
        return null == e || null == t
            ? null
            : i === es.AUDIO
              ? (0, l.jsx)(ec, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: r, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, l.jsx)(ed, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: l } = this.state,
            i = this.getWidth();
        return l ? er : t === es.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: s,
                renderLinkComponent: a,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: c,
            } = this.props,
            { fullscreen: d, hideControls: h, playing: m } = this.state,
            f = et.bQ;
        if ((t === es.AUDIO ? (f = et._X) : h ? (f = et.CX) : m && (f = et.sw), i && t === es.VIDEO)) {
            let t = this.getWidth();
            return (0, l.jsxs)("div", {
                className: r()(f, { [et.mE]: u === Q.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, l.jsx)("div", {
                        className: et.s4,
                        children: (0, l.jsx)(w.A, {
                            className: et.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a,
                        }),
                    }),
                ],
            });
        }
        return (0, l.jsx)("div", {
            ref: this.containerRef,
            className: r()(f, et.mr, s, { [et.mE]: u === Q.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: m ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: (0, l.jsxs)(p.xp, {
                containerRef: this.containerRef,
                children: [
                    this.renderMetadata(),
                    t === es.AUDIO ? this.renderAudio() : this.renderVideo(),
                    (0, l.jsx)(g.N, {
                        theme: X.NJ8.MIDNIGHT,
                        children: (e) => (0, l.jsx)("div", { className: e, children: this.renderControls() }),
                    }),
                    t === es.VIDEO ? this.renderPlayPausePop() : null,
                    null != c ? (0, l.jsx)("div", { className: r()({ [et.eM]: m || d }), children: c() }) : null,
                    t === es.VIDEO && this.state.showStats && null != this.state.videoStats
                        ? (0, l.jsx)(J, { stats: this.state.videoStats, onClose: this.toggleStats })
                        : null,
                ],
            }),
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== es.VIDEO) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
        }
        if (null != this._analytics.metadata.hasValidFrame) return;
        let t = e.videoHeight,
            n = e.currentTime,
            l = e.readyState;
        if (0 === t && l >= 2)
            return void setTimeout(() => {
                if (null == e) return;
                let t = e.videoHeight,
                    l = e.currentTime;
                if (0 === t && l > n + 0.5) {
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
let ep = ef;

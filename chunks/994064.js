"use strict";
n.d(t, { rB: () => es, Ay: () => em }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
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
    C = n(953051),
    A = n(201181),
    E = n(544180),
    I = n(953727);
function v(e) {
    let { width: t = 16, height: n = 16, color: i = "currentColor", foreground: s, ...a } = e;
    return (0, l.jsx)("svg", {
        ...(0, I.A)(a),
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
var y = n(954571),
    b = n(927813),
    S = n(824744),
    N = n(475815),
    j = n(953584),
    T = n(122641),
    w = n(692051),
    R = n(985018),
    L = n(83699);
function k(e) {
    let { onPlay: t, className: n, inactive: s } = e,
        r = i.useRef(null),
        o = (0, l.jsx)("div", {
            className: L.P0,
            ref: r,
            children: (0, l.jsx)(p.u, { size: "xs", color: "currentColor", className: L.Kk }),
        });
    return (0, l.jsx)(w.Y.Consumer, {
        children: (e) =>
            s || null == t
                ? (0, l.jsx)("div", { className: L.Iv, children: o })
                : (0, l.jsx)(h.D, {
                      className: a()(n, L.Iv, { [L.vu]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      "aria-label": R.intl.string(R.t.RscU7I),
                      focusProps: { ringTarget: r },
                      children: o,
                  }),
    });
}
var M = n(821209);
let O = new (n(626584).A)("mp4box"),
    P = {
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
function D(e) {
    return null === e
        ? "N/A"
        : e < 1e3
          ? `${e} bps`
          : e < 1e6
            ? `${(e / 1e3).toFixed(1)} Kbps`
            : `${(e / 1e6).toFixed(2)} Mbps`;
}
async function U(e) {
    try {
        let t;
        if ("u" < typeof fetch) return P;
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
            return O.warn("Range request failed, likely CORS issue:", e), P;
        }
        if (!t.ok && 206 !== t.status) return O.warn("Unexpected response status:", t.status), P;
        if ("opaque" === t.type) return O.warn("Opaque response, CORS headers may be missing"), P;
        let s = await t.arrayBuffer(),
            a = l.createFile();
        return new Promise((t) => {
            let n = !1,
                l = !1,
                r = null,
                o = null,
                c = () => {
                    n || ((n = !0), clearTimeout(u), null != o && clearTimeout(o), t(P));
                },
                u = setTimeout(() => {
                    O.warn("Timeout after", 5e3, "ms, moov atom not found"), c();
                }, 5e3);
            (a.onReady = (e) => {
                if (n) return;
                (n = !0), clearTimeout(u), null != o && clearTimeout(o);
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
                (a.onError = () => {
                    c();
                }),
                (a.onSeek = async (t) => {
                    if (n || l || null == i || !(i > 524288)) {
                        if (l) {
                            if (null != r && performance.now() - r < 5e3) return;
                            c();
                            return;
                        }
                    } else {
                        (l = !0), O.log("Fetching end chunk for moov atom");
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
                                    a.appendBuffer(l), a.flush(), (r = performance.now());
                                    return;
                                } catch (e) {
                                    O.warn("Failed to append end chunk:", e), c();
                                    return;
                                }
                            }
                        } catch (e) {
                            O.warn("Failed to fetch end chunk:", e);
                        }
                        c();
                        return;
                    }
                    (null == i || i <= 524288) && c();
                }),
                (s.fileStart = 0);
            try {
                a.appendBuffer(s),
                    a.flush(),
                    (o = setTimeout(() => {
                        n || l || null == a.onSeek || a.onSeek({ offset: 0, isLast: !1 });
                    }, 500));
            } catch (e) {
                c();
            }
        });
    } catch (e) {
        return P;
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
        this.codecInfoPromise = U(e);
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
            a = [],
            r = 0,
            o = l.currentTime;
        for (let e = 0; e < l.buffered.length; e++) {
            let t = l.buffered.start(e),
                n = l.buffered.end(e);
            a.push({ start: t, end: n }), n > o && (t <= o ? (r += n - o) : (r += n - t));
        }
        let c = 0,
            u = 0,
            d = 0,
            h = null;
        if ("function" == typeof l.getVideoPlaybackQuality) {
            let e = l.getVideoPlaybackQuality();
            (c = e.droppedVideoFrames), (d = (u = e.totalVideoFrames) > 0 ? (c / u) * 100 : 0);
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
                    (this.baselineFrames = u),
                        (this.baselineTime = l.currentTime),
                        (this.recentFrameRates = []),
                        (h = this.lastKnownFrameRate);
            else {
                let e = u - this.baselineFrames,
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
            p = l.error?.message ?? null;
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
                bufferedRanges: a,
                bufferedSeconds: r,
                droppedFrames: c,
                totalFrames: u,
                droppedFramesPercent: d,
                frameRate: h,
                src: l.src,
                fileSizeBytes: this.fileSizeBytes,
                codecInfo: this.cachedCodecInfo,
                errorCode: m,
                errorMessage: p,
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
var G = n(990078),
    F = n(624479),
    B = n(789645),
    H = n(957565),
    W = n(239957);
let K = "Close",
    z = "Copy to JSON",
    Z = "Copied!";
function q(e) {
    var t, n, s, a, r;
    let o,
        { stats: c, onClose: u } = e,
        [d, m] = i.useState(!1),
        p = i.useRef(null);
    i.useEffect(
        () => () => {
            null != p.current && clearTimeout(p.current);
        },
        [],
    );
    let f = i.useCallback(() => {
        let e = JSON.stringify(
            {
                media: {
                    video: {
                        codec: c.codecInfo?.videoCodecDescription ?? c.codecInfo?.videoCodec,
                        codecRaw: c.codecInfo?.videoCodec,
                        bitRate: c.codecInfo?.videoBitrate != null ? Math.round(c.codecInfo.videoBitrate) : null,
                        frameRate: c.frameRate,
                        width: c.videoWidth,
                        height: c.videoHeight,
                    },
                    audio: {
                        codec: c.codecInfo?.audioCodecDescription ?? c.codecInfo?.audioCodec,
                        codecRaw: c.codecInfo?.audioCodec,
                        bitRate: c.codecInfo?.audioBitrate != null ? Math.round(c.codecInfo.audioBitrate) : null,
                        channels: c.codecInfo?.audioChannels,
                        sampleRate: c.codecInfo?.audioSampleRate,
                    },
                    fileSizeBytes: c.fileSizeBytes,
                    durationSeconds: c.duration,
                    containerFormat: c.codecInfo?.containerFormat,
                    isProgressive: c.codecInfo?.isProgressive,
                    isFragmented: c.codecInfo?.isFragmented,
                },
                playback: {
                    viewportWidth: c.viewportWidth,
                    viewportHeight: c.viewportHeight,
                    currentTimeSeconds: c.currentTime,
                    bufferedSeconds: c.bufferedSeconds,
                    droppedFrames: c.droppedFrames,
                    totalDecodedFrames: c.totalFrames,
                    droppedFramesPercent:
                        null != c.droppedFramesPercent ? parseFloat(c.droppedFramesPercent.toFixed(2)) : null,
                    errorCode: c.errorCode,
                    errorMessage: c.errorMessage,
                },
            },
            null,
            2,
        );
        (0, H.C)(
            e,
            () => {
                m(!0),
                    null != p.current && clearTimeout(p.current),
                    (p.current = window.setTimeout(() => {
                        m(!1), (p.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [c]);
    return (0, l.jsxs)("div", {
        className: W.gP,
        children: [
            (0, l.jsxs)("div", {
                className: W.wx,
                children: [
                    (0, l.jsx)("div", { className: W.DD, children: "Stats for Nerds" }),
                    (0, l.jsxs)("div", {
                        className: W.Pz,
                        children: [
                            (0, l.jsx)(G.m, {
                                text: d ? Z : z,
                                children: (0, l.jsx)(h.D, {
                                    className: W.cL,
                                    onClick: f,
                                    "aria-label": d ? Z : z,
                                    focusProps: { offset: 2 },
                                    children: (0, l.jsx)(F.T, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, l.jsx)(G.m, {
                                text: K,
                                children: (0, l.jsx)(h.D, {
                                    className: W.b,
                                    onClick: u,
                                    "aria-label": K,
                                    focusProps: { offset: 2 },
                                    children: (0, l.jsx)(B.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: W.Qs,
                children: [
                    c.codecInfo?.containerFormat != null &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Container" }),
                                (0, l.jsx)("span", { className: W.cR, children: c.codecInfo.containerFormat }),
                            ],
                        }),
                    (c.codecInfo?.isProgressive != null || c.codecInfo?.isFragmented != null) &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Format" }),
                                (0, l.jsx)("span", {
                                    className: W.cR,
                                    children:
                                        ((t = c.codecInfo.isProgressive ?? null),
                                        (n = c.codecInfo.isFragmented ?? null),
                                        (o = []),
                                        (!0 === t && o.push("Progressive"),
                                        !0 === n && o.push("Fragmented"),
                                        0 === o.length)
                                            ? "Standard"
                                            : o.join(", ")),
                                }),
                            ],
                        }),
                    null != c.codecInfo &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Resolution" }),
                                (0, l.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        c.resolution,
                                        " @ ",
                                        null === (s = c.frameRate) ? "N/A" : `${s} fps`,
                                        c.droppedFrames > 0 && ` (${c.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != c.codecInfo &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Viewport" }),
                                (0, l.jsxs)("span", {
                                    className: W.cR,
                                    children: [c.viewportWidth, "x", c.viewportHeight],
                                }),
                            ],
                        }),
                    c.codecInfo?.videoCodec != null &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Video" }),
                                (0, l.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        c.codecInfo.videoCodecDescription ?? c.codecInfo.videoCodec ?? "Unknown",
                                        null != c.codecInfo.videoBitrate && ` @ ${D(c.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    c.codecInfo?.audioCodec != null &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Audio" }),
                                (0, l.jsxs)("span", {
                                    className: W.cR,
                                    children: [
                                        c.codecInfo.audioCodecDescription ?? c.codecInfo.audioCodec ?? "Unknown",
                                        null != c.codecInfo.audioBitrate && ` @ ${D(c.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    c.codecInfo?.audioChannels != null &&
                        (0, l.jsxs)("div", {
                            className: W.N8,
                            children: [
                                (0, l.jsx)("span", { className: W.Zh, children: "Audio Channels" }),
                                (0, l.jsxs)("span", {
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
                                        })(c.codecInfo.audioChannels),
                                        null != c.codecInfo.audioSampleRate &&
                                            ` @ ${null === ((a = c.codecInfo.audioSampleRate)) ? "N/A" : a < 1e3 ? `${a} Hz` : `${(a / 1e3).toFixed(1)} kHz`}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, l.jsxs)("div", {
                        className: W.N8,
                        children: [
                            (0, l.jsx)("span", { className: W.Zh, children: "Buffer Health" }),
                            (0, l.jsx)("span", {
                                className: W.cR,
                                children: isFinite((r = c.bufferedSeconds)) ? r.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== c.errorCode &&
                        (0, l.jsx)("div", {
                            className: W.K6,
                            children: (0, l.jsxs)("div", {
                                className: W.N8,
                                children: [
                                    (0, l.jsx)("span", { className: W.Zh, children: "Error" }),
                                    (0, l.jsxs)("span", {
                                        className: W.cR,
                                        children: [c.errorCode, null !== c.errorMessage && `: ${c.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
var J = n(20504),
    Y = n(652215),
    X = n(838541),
    $ = n(650583),
    Q = n(277446),
    ee = n(653307);
let et = "-:--",
    en = { friction: 14, tension: 200 },
    el = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    ei = { width: "100%", height: "100%", backgroundColor: "black" };
function es(e) {
    let t = 0 | e,
        n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
}
let ea = (e) => {
    let { current: t, duration: n } = e,
        i = null != t ? es(t) : et,
        s = null != n ? es(n) : et;
    return (
        (i = i.padStart(s.length, "0")),
        (0, l.jsxs)("div", {
            className: Q.d$,
            children: [
                (0, l.jsx)("span", { className: Q.Ue, children: i }),
                (0, l.jsx)("span", { className: Q.zO, children: "/" }),
                (0, l.jsx)("span", { className: Q.Ue, children: s }),
            ],
        })
    );
};
class er extends i.Component {
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
        t ? c.A.spring(n, { toValue: e, ...en }).start() : n.setValue(e);
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
            ? (0, l.jsx)(h.D, {
                  className: Q.CY,
                  onClick: i,
                  tabIndex: a ? -1 : 0,
                  "aria-label": R.intl.string(R.t.ZcgDJX),
                  children: (0, l.jsx)(m.E, { size: "xs", color: "currentColor", className: Q.pd }, "pause"),
              })
            : null != t && t === n
              ? (0, l.jsx)(h.D, {
                    className: Q.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": R.intl.string(R.t.hsvh0i),
                    children: (0, l.jsx)(v, { className: Q.pd }, "replay"),
                })
              : (0, l.jsx)(h.D, {
                    className: Q.CY,
                    onClick: s,
                    tabIndex: a ? -1 : 0,
                    "aria-label": R.intl.string(R.t.RscU7I),
                    children: (0, l.jsx)(p.u, { size: "xs", color: "currentColor", className: Q.pd }, "play"),
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
            onDragEnd: r,
            onDragStart: o,
            onToggleMuted: u,
            onVolumeShow: d,
            onVolumeHide: h,
            width: m,
            volume: p,
            type: f,
        } = this.props;
        return (0, l.jsxs)(c.A.div, {
            className: f === el.VIDEO ? Q._v : Q.dH,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                "string" == typeof m || m > 250 ? (0, l.jsx)(ea, { current: n, duration: i }) : null,
                (0, l.jsx)(T.A, {
                    buffers: e,
                    value: i ?? 0,
                    onDrag: a,
                    onDragEnd: r,
                    onDragStart: o,
                    type: T.A.Types.DURATION,
                    ref: this.setDurationRef,
                }),
                (0, l.jsx)("div", {
                    className: ee.Uu,
                    children: (0, l.jsx)(J.A, {
                        ref: this.setVolumeButtonRef,
                        muted: s,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: (e) => a(e, T.A.Types.VOLUME),
                        onToggleMute: u,
                        onVolumeShow: d,
                        onVolumeHide: h,
                        iconClassName: Q.pd,
                        iconColor: "currentColor",
                        sliderWrapperClassName: Q.L9,
                    }),
                }),
                t,
            ],
        });
    }
}
function eo(e) {
    let { fileName: t, fileSize: n, src: i, disabled: s, mimeType: a, hideDownloadButton: r } = e;
    return (0, l.jsxs)("div", {
        className: Q.WU,
        children: [
            (0, l.jsxs)("div", {
                className: Q.xe,
                children: [
                    s
                        ? t
                        : (0, l.jsx)(_.A, { href: i, className: Q.kH, iconClassName: Q.XR, mimeType: a, fileName: t }),
                    (0, l.jsx)("div", { className: Q.fL, children: n }),
                ],
            }),
            !r && (0, l.jsx)(_.A, { href: i, className: Q.kH, iconClassName: Q.XR, mimeType: a }),
        ],
    });
}
class ec extends i.Component {
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
                c.A.spring(t, { toValue: 1.5, ...en, friction: 80 }),
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
        return (0, l.jsx)(c.A.div, {
            className: Q.kO,
            style: this.getAnimatedStyle(),
            children: (0, l.jsx)(t, { className: Q.PK }),
        });
    }
}
let eu = (0, x.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
class ed {
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
        (this.metadata = e), (this.analyticsEnabled = eu.getConfig({ location: "media_player" }).enabled);
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
            y.default.track(Y.HAw.MEDIA_PLAY_FINISHED, {
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
class eh extends i.PureComponent {
    static Types = el;
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
        super(e),
            (this._analytics = new ed({ src: e.src, mimeType: e.mimeType?.join("/"), fileSize: e.fileSizeBytes }));
        const { autoPlay: t, autoMute: n, volume: l, playable: i } = this.props,
            s = "function" == typeof l ? l() : l,
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
            width: eh.minWidth,
            height: eh.minHeight,
            hovering: !1,
            showStats: !1,
            videoStats: null,
        };
    }
    componentDidMount() {
        let { playing: e, muted: t, volume: n } = this.state,
            { type: l, src: i } = this.props;
        if (
            l === el.VIDEO &&
            (j.Ay.addChangeListener(this.handleStatsStoreChange),
            (this._hasStatsListener = !0),
            j.Ay.isVideoStatsEnabled(i) && !this.state.showStats)
        )
            try {
                this.toggleStats();
            } catch (e) {
                j.Ay.setVideoStats(i, !1);
            }
        let { current: s } = this.mediaRef;
        null != s && (t && (s.muted = t), e && (this.play(!0), this.handleUIUpdate()), (s.volume = n));
    }
    componentDidUpdate(e, t) {
        let {
            props: { onPause: n, onVolumeChange: l, onMute: i, src: s, type: a },
            state: { playing: r, fullscreen: o, muted: c, dragging: u, volume: d, showStats: h },
        } = this;
        if (s !== e.src && a === el.VIDEO) {
            null != this._statsCollector && this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
                j.Ay.clearVideoStats(e.src);
            let t = j.Ay.isVideoStatsEnabled(s);
            h !== t && (t ? this.toggleStats() : h && this.toggleStats());
        }
        let { current: m } = this.mediaRef,
            { current: p } = this.playPausePopRef;
        if (null == m) return;
        r && !t.playing
            ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && p?.pop(r))
            : !r && t.playing && (m.pause(), p?.pop(r), n?.()),
            r && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability();
        let f = (0, N.qf)(m.parentNode, m);
        o && !t.fullscreen && null != f
            ? ((0, N.tl)(f), f.addEventListener(N.Wb, this.handleFullScreenExit))
            : !o &&
              t.fullscreen &&
              null != f &&
              (f.removeEventListener(N.Wb, this.handleFullScreenExit), (0, N.sP)(f, f.ownerDocument)),
            u === T.A.Types.DURATION && t.dragging !== T.A.Types.DURATION && r
                ? m.pause()
                : u !== T.A.Types.DURATION && t.dragging === T.A.Types.DURATION && r && m.play(),
            c !== t.muted && ((m.muted = c), i?.(c)),
            d !== t.volume && ((m.volume = d), l?.(d));
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
            this._hasStatsListener &&
                (j.Ay.removeChangeListener(this.handleStatsStoreChange),
                (this._hasStatsListener = !1),
                this.props.type === el.VIDEO && j.Ay.clearVideoStats(this.props.src));
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, N.qf)(e.parentNode, e);
        null != t && (t.removeEventListener(N.Wb, this.handleFullScreenExit), (0, N.sP)(t));
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
            this.setState(s), i.play(), t?.(e, i.currentTime * b.A.Millis.SECOND, i.duration * b.A.Millis.SECOND);
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return "100%" === e ? e : Math.max(e, eh.minWidth);
    }
    getHeight() {
        let { height: e } = this.props;
        return "100%" === e ? e : Math.max(e, eh.minHeight);
    }
    handleFullScreenExit = () => {
        let { current: e } = this.mediaRef;
        if (null == e) return;
        let t = (0, N.qf)(e.parentNode, e);
        (null != t && (0, N._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
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
                      for (let l = 0; l < e.buffered.length; l++) {
                          let i = e.buffered.start(l),
                              s = e.buffered.end(l);
                          if (s - i < 1) continue;
                          let a = (s - i) / n,
                              r = i / n;
                          t.push([r, a]);
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
        if (e.key === $.dh.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
        else if (e.key !== $.dh.ARROW_LEFT || null == t || n)
            if (e.key !== $.dh.ARROW_RIGHT || null == t || n) {
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
                    (this._isUpdatingStats = !1), this._unmounted || j.Ay.setVideoStats(this.props.src, !1);
                });
        else if (null != t && (0, u.vq)(t, HTMLVideoElement))
            try {
                null == this._statsCollector && (this._statsCollector = new V(t, this.props.fileSizeBytes)),
                    this._statsCollector.startTracking(this.handleStatsUpdate),
                    (this._isUpdatingStats = !0),
                    this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
                        (this._isUpdatingStats = !1), this._unmounted || j.Ay.setVideoStats(this.props.src, !0);
                    });
            } catch (e) {
                null != this._statsCollector && (this._statsCollector.destroy(), (this._statsCollector = null)),
                    (this._isUpdatingStats = !1),
                    this._unmounted || j.Ay.setVideoStats(this.props.src, !1);
            }
        else j.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
        this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
        let { src: e, type: t } = this.props;
        t !== el.VIDEO ||
            this._isUpdatingStats ||
            (j.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
        let { alt: e, src: t, poster: n, forceExternal: i, responsive: s, mediaLayoutType: a } = this.props,
            { playing: r, fullscreen: o } = this.state,
            c = this.getWidth(),
            u = this.getHeight();
        return i
            ? (0, l.jsx)(g.A, {
                  alt: e,
                  className: Q.Ki,
                  controls: !1,
                  height: u,
                  poster: n,
                  width: c,
                  responsive: s && !o,
                  mediaLayoutType: a,
                  playsInline: !0,
                  autoPlay: r,
              })
            : (0, l.jsx)(g.A, {
                  alt: e,
                  className: Q.Ki,
                  controls: !1,
                  playsInline: !0,
                  autoPlay: r,
                  height: u,
                  responsive: s && !o,
                  mediaLayoutType: o ? X.dG.STATIC : a,
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
        return (0, l.jsx)("audio", {
            className: Q.z7,
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
                    onVolumeHide: a,
                    onControlsHide: r,
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
            C = this.getWidth();
        return h || n || t === el.AUDIO
            ? (0, l.jsx)(er, {
                  buffers: c,
                  currentTime: u,
                  duration: d,
                  volume: (0, S.M)(_, 1),
                  hide: t === el.VIDEO && m,
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
                  onControlsShow: o,
                  onControlsHide: r,
                  playing: f,
                  dragging: x,
                  type: t,
                  ref: this.controlsRef,
                  width: g ? window.screen.width : C,
                  disabled: !i,
                  children:
                      t === el.VIDEO
                          ? (0, l.jsx)(A.A, {
                                "aria-label": R.intl.string(R.t["2nM3Pk"]),
                                className: Q.CY,
                                iconClassName: Q.pd,
                                guestWindow: window,
                                onClick: this.toggleFullscreen,
                                node: (0, N.qf)(e?.parentNode, e),
                            })
                          : null,
              })
            : (0, l.jsx)(k, { onPlay: this.handleVideoClick, inactive: !i });
    }
    renderMetadata() {
        let { fileName: e, fileSize: t, src: n, type: i, playable: s, mimeType: a } = this.props;
        return null == e || null == t
            ? null
            : i === el.AUDIO
              ? (0, l.jsx)(eo, { fileName: e, fileSize: t, src: n, disabled: !s, mimeType: a, hideDownloadButton: !0 })
              : null;
    }
    renderPlayPausePop() {
        return (0, l.jsx)(ec, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let { responsive: e, type: t, height: n } = this.props,
            { fullscreen: l } = this.state,
            i = this.getWidth();
        return l ? ei : t === el.AUDIO ? { width: void 0, height: "auto" } : e ? void 0 : { width: i, height: n };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: s,
                renderLinkComponent: r,
                responsive: o,
                mediaLayoutType: c,
                renderOverlayContent: u,
            } = this.props,
            { fullscreen: d, hideControls: h, playing: m } = this.state,
            p = Q.ub;
        if ((t === el.AUDIO ? (p = Q._X) : h ? (p = Q.CX) : m && (p = Q.sw), i && t === el.VIDEO)) {
            let t = this.getWidth();
            return (0, l.jsxs)("div", {
                className: a()(p, { [Q.mE]: c === X.dG.MOSAIC }),
                style: o ? void 0 : { width: t, height: e },
                onKeyDown: this.handleKeyDown,
                tabIndex: 0,
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, l.jsx)("div", {
                        className: Q.s4,
                        children: (0, l.jsx)(M.A, {
                            className: Q.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: r,
                        }),
                    }),
                ],
            });
        }
        return (0, l.jsxs)("div", {
            className: a()(p, Q.mr, s, { [Q.mE]: c === X.dG.MOSAIC }),
            "data-fullscreen": d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: m ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            tabIndex: 0,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === el.AUDIO ? this.renderAudio() : this.renderVideo(),
                (0, l.jsx)(f.N, {
                    theme: Y.NJ8.MIDNIGHT,
                    children: (e) => (0, l.jsx)("div", { className: e, children: this.renderControls() }),
                }),
                t === el.VIDEO ? this.renderPlayPausePop() : null,
                null != u ? (0, l.jsx)("div", { className: a()({ [Q.eM]: m || d }), children: u() }) : null,
                t === el.VIDEO && this.state.showStats && null != this.state.videoStats
                    ? (0, l.jsx)(q, { stats: this.state.videoStats, onClose: this.toggleStats })
                    : null,
            ],
        });
    }
    checkVideoDecodability() {
        let { current: e } = this.mediaRef;
        if (null == e || !(0, u.vq)(e, HTMLVideoElement)) return;
        if (this.props.type !== el.VIDEO) {
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
let em = eh;

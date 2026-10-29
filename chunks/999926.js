let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => e6, hp: () => nd, Ay: () => nB }), n(323874), n(14289), n(35956), n(321073));
var h,
    f = n(823598),
    I = n(626584),
    p = n(723702),
    T = n(19575);
(0, f.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (p.isPlatformEmbedded) {
                let e = (0, f.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => T.Ay.supportsFeature(e),
    setProcessPriority(e) {
        T.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => T.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => T.Ay.getOpenH264LibraryPath(),
});
var m = n(284009),
    g = n.n(m),
    S = n(435558),
    N = n.n(S),
    C = n(481613),
    O = n.n(C),
    R = n(299855),
    L = n.n(R),
    y = n(17928),
    D = n(205693),
    v = n(506774),
    b = n(451988),
    P = n(73153),
    M = n(77729),
    U = n(719129),
    w = n(894539),
    G = n(124838),
    x = n(274372),
    k = n(680725),
    F = n(487329),
    B = n(736056),
    V = n(6494),
    H = n(952818),
    j = n(540305),
    W = n(945810);
function Y(e) {
    return { agc2Enabled: !0, noiseCancellationDuringProcessing: !0, vadKrispActivationThreshold: e };
}
(0, W.mj)({
    kind: "user",
    name: "2026-09-agc2-mobile",
    defaultConfig: { agc2Enabled: !1, noiseCancellationDuringProcessing: !1, vadKrispActivationThreshold: 0.5 },
    variations: { 1: Y(0.4), 2: Y(0.5), 3: Y(0.6), 4: Y(0.7) },
});
let K = (0, W.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    $ = { probeAudioEffects: !1 },
    z = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: $,
        variations: { 1: { ...$, probeAudioEffects: !0 } },
    });
var X = n(403362);
let q = (0, W.mj)({
    kind: "user",
    name: "2026-08-audio-fidelity",
    defaultConfig: { capSampleRate: !1, capChannelCount: !1, condition: "none" },
    variations: {
        1: { capSampleRate: !0, capChannelCount: !1, condition: "krisp" },
        2: { capSampleRate: !0, capChannelCount: !1, condition: "noiseSuppression" },
        3: { capSampleRate: !0, capChannelCount: !1, condition: "echoCancellation" },
        4: { capSampleRate: !0, capChannelCount: !1, condition: "any" },
        5: { capSampleRate: !0, capChannelCount: !0, condition: "krisp" },
        6: { capSampleRate: !0, capChannelCount: !0, condition: "noiseSuppression" },
        7: { capSampleRate: !0, capChannelCount: !0, condition: "echoCancellation" },
        8: { capSampleRate: !0, capChannelCount: !0, condition: "any" },
    },
});
function Z(e, t) {
    switch (e) {
        case "krisp":
            return t.krispEnabled;
        case "noiseSuppression":
            return t.noiseSuppressionEnabled;
        case "echoCancellation":
            return t.echoCancellationEnabled;
        case "any":
            return t.krispEnabled || t.noiseSuppressionEnabled || t.echoCancellationEnabled;
        case "none":
            return !1;
        default:
            (0, X.xb)(e);
    }
}
let Q = (0, W.mj)({
    name: "2025-08-browser-hevc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var J = n(240921);
let ee = (0, J.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    et = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    en = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ei = n(574381),
    er = n(941426),
    ea = n(325278);
let es = new er.Vy("InputWatcher");
class el {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new b.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        ((this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(D.bg.Silence, this.handleSilence));
    }
    reset() {
        (this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0));
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ei.uF)() && L().satisfies(M.A?.os.release, ea.PH))
            try {
                let e = this.mediaEngineStore.getInputDeviceId(),
                    t = this.mediaEngineStore.getInputDevices()[e]?.guid;
                if (null != t && "" !== t) {
                    let e = n(19575).Ay;
                    await e.ensureModule("discord_voice");
                    let [i, r] = await Promise.all([
                        this.mediaEngine.getDeviceOSVolume(t),
                        this.mediaEngine.getDeviceOSMuted(t),
                    ]);
                    P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                es.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            (es.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                P.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                }));
        });
    };
}
let eo = [
        { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
        { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
        { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
    ],
    ed = (0, J.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ec = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eu = (0, W.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    e_ = (0, J.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, W.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eh = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var ef = n(625075);
let eI = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eT = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eg(e) {
    return em.getConfig({ location: e });
}
let eS = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eN = n(75076),
    eC = n(674966),
    eO = n(559633),
    eR = n(205106),
    eL = n(174459),
    ey = n(652215);
let eD = new er.Vy("AudioEffects");
async function ev(e, t, n) {
    if (!(0, ei.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    if (!L().satisfies(M.A.os.release, ">=10.0.22000"))
        return Promise.reject(Error("Audio effects querying likely not supported on this Windows version."));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            P.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eL.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        (eD.error("Failed to probe audio effects for device", e),
            eL.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
    }
}
var eb = n(967347),
    eP = n(617617),
    eM = n(125325),
    eU = n(353835),
    ew = n(927813),
    eG = n(38405),
    ex = n(350535),
    ek = n(280450),
    eF = n(131319),
    eB = n(347481),
    eV = n(734057),
    eH = n(763827),
    ej = n(287809),
    eW = n(117549),
    eY = n(765682),
    eK = n(355097),
    e$ = n(621380),
    ez = n(731854),
    eX = n(105292);
let eq = new I.A("MediaEngineStore"),
    eZ = "MediaEngineStore",
    eQ = {
        useAGC2: !0,
        enableAnalog: !1,
        enableDigital: !0,
        headroom_db: 5,
        max_gain_db: 50,
        initial_gain_db: 15,
        max_gain_change_db_per_second: 6,
        max_output_noise_level_dbfs: -50,
        fixed_gain_db: 0,
    },
    eJ = { left: 1, right: 1 },
    e0 = 5 * ew.A.Millis.SECOND,
    e1 = 2 * ew.A.Millis.SECOND,
    e2 = 30 * ew.A.Millis.SECOND,
    e3 = "https://ciscobinary.openh264.org/libopenh264-2.7.0-linux64.8.so.bz2",
    e5 = 0;
var e6 =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function e4() {
    return {
        mode: ey.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: p.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: 0.5,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
            updatedAt: void 0,
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: !1,
        deaf: !1,
        echoCancellation: !0,
        noiseSuppression: !1,
        automaticGainControl: !0,
        noiseCancellation: !0,
        bypassSystemInputProcessing: !0,
        hardwareEnabledVersion: 0,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: ez.Hz,
        outputVolume: ez.Hz,
        inputDeviceId: ez.dx,
        outputDeviceId: ez.dx,
        videoDeviceId: ez.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e9.supports(ez.O5.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        openH264Enabled: !0,
        sidechainCompression: !0,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null,
    };
}
let e7 = {
        [e$.m.CUSTOM]: {},
        [e$.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e$.m.STUDIO]: {
            mode: ey.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e8 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e9 = (0, D.hB)((0, D.WI)());
function te(e) {
    return ef.k.getConfig({ location: e }).videoEnabled;
}
eq.enableNativeLogger(!0);
let tt = {},
    tn = new Set([ez.x.DEFAULT]),
    ti = e9.supports(ez.O5.AUTO_ENABLE),
    tr = !1,
    ta = ez.x.STREAM,
    ts = 0,
    tl = !1,
    to = performance.now(),
    td = null,
    tc = { [ez.dx]: nf("No Input Devices", ez.oh.AUDIO_INPUT) },
    tu = { [ez.dx]: nf("No Output Devices", ez.oh.AUDIO_OUTPUT) },
    t_ = { [ez.dx]: nf("No Video Devices", ez.oh.VIDEO_INPUT) },
    tE = new b.Ep(),
    tA = !1,
    th = !1,
    tf = !1,
    tI = !1,
    tp = !1,
    tT = ez.qe,
    tm = ez.qe,
    tg = !1,
    tS = !1,
    tN = new b.Ep(),
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tv = !1,
    tb = !1,
    tP = [],
    tM = !1,
    tU = null,
    tw = !1,
    tG = !1,
    tx = !1,
    tk = {},
    tF = null,
    tB = null,
    tV = !1;
(eC.A.hasPermission(eY.iL.AUDIO, { showAuthorizationError: !1 }),
    eC.A.hasPermission(eY.iL.CAMERA, { showAuthorizationError: !1 }));
let tH = new Set(),
    tj = !1,
    tW = new Set(),
    tY = {},
    tK = null,
    t$ = null,
    tz = null,
    tX = !1,
    tq = !0,
    tZ = !1,
    tQ = !1,
    tJ = !1,
    t0 = !1,
    t1 = {};
function t2(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t3() {
    if (
        "u" < typeof window ||
        "u" < typeof navigator ||
        !("mediaCapabilities" in navigator) ||
        null == navigator.mediaCapabilities
    )
        return !1;
    try {
        let e = await navigator.mediaCapabilities.decodingInfo({
            type: "file",
            video: {
                contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                width: 1920,
                height: 1080,
                bitrate: 2e6,
                framerate: 30,
            },
        });
        return e.supported && e.powerEfficient;
    } catch {
        return !1;
    }
}
function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT,
        t = tt[e];
    return (null == t && ((t = e4()), (tt[e] = t)), t);
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT,
        t = t5(e);
    if (e === ez.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eE.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = e7[t.activeInputProfile ?? e$.m.CUSTOM],
        i = nP() ? t1 : e8,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t4(e) {
    let t = t6(e.context),
        n = t.mode;
    (e.context === ez.x.DEFAULT && (0, ec.N)(e9, !1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nP(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.Hz;
    return N().clamp(e, 0, t);
}
function t8(e) {
    let t = t6(e.context),
        n = !ti || t.mute || t.deaf;
    switch (e.context) {
        case ez.x.DEFAULT:
            n = n || tA || th || tf || !eC.A.didHavePermission(eY.iL.AUDIO);
            break;
        case ez.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ez.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eu.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function t9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tp,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t6().videoHook && U.c1(n.desktopSource.sourcePid),
            e9.setGoLiveSource(null, ta)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e9.setGoLiveSource(null, ta),
        tp || e)
    ) {
        let t = t6().videoDeviceId;
        (tp && t === ez.dx && tm === ez.dx && tT !== ez.qe ? (t = tT) : (tm = t),
            (tT = (tp = e) ? ng(t_, t) : ez.qe),
            e9.setVideoInputDevice(tT));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t2("MediaEngineStore go live"),
                r = t6().videoHook,
                a = nd(),
                s = a ? ((0, p.isWindows)() && L().satisfies(M.A?.os.release, ea.fG) ? ea.zl : ea.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= ea.zl && (l = !0 === t$ || ep.getConfig({ location: "updateVideo" }).enabled);
            let o = r && eI.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eA.getConfig({ location: "updateVideo" });
            e9.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, p.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nc(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e0,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ee.definition.defaultConfig : ee.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: o,
                        minCaptureWidth: d,
                        minCaptureHeight: c,
                    },
                    quality: e,
                },
                ta,
            );
        }
        null != t.cameraSource &&
            e9.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ta,
            );
    }
}
function ne(e) {
    switch (e) {
        case ez.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case ez.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case ez.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case ez.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case ez.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case ez.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case ez.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case ez.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case ez.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nt = new Set([
    ez.CO.KRISP_INIT_ERROR,
    ez.CO.KRISP_INIT_ERROR_NATIVE,
    ez.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    ez.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    ez.CO.KRISP_INIT_ERROR_UNSIGNED,
    ez.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nn(e, t) {
    if (
        (eq.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: ne(e), voiceProcessingErrorDetails: t }),
        eL.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nt.has(e))
    ) {
        tb = !0;
        return;
    }
    e === ez.CO.KRISP_VAD_CPU_OVERUSE
        ? P.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tw = !0), P.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function ni(e, t) {
    let n = t === ez.$C.LIVE;
    (eq.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case ez.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case ez.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function nr(e) {
    return { enabled: e, ...(e ? eQ : { useAGC2: !1 }) };
}
function na(e, t) {
    e.setAutomaticGainControl(nr(t));
}
function ns(e, t) {
    let n = (0, eR.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eq.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function nl() {
    let e = t6(),
        t = e.inputDeviceId,
        n = eB.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!Z("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return q.getConfig({ location: t });
            })({ location: n });
            return Z(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, eR.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (e9.setVoiceSampleRateCap(a), e9.setVoiceChannelCountCap(s));
}
function no(e) {
    let t = t6(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eB.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eB.A.hasNoiseSuppression(n) || t.noiseSuppression),
        na(e, eB.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ns(e, t.noiseCancellation),
        nl(),
        (0, p.isWindows)() && L().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === ez.x.DEFAULT)
    ) {
        let t = nT(tc[i.getInputDeviceId()]) || nT(tu[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(t ? "mix" : "auto");
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nd() {
    return (0, p.isWindows)() && L().satisfies(M.A?.os.release, ea.yg);
}
function nc() {
    return (0, p.isMac)() && e9.supports(ez.O5.SCREEN_CAPTURE_KIT) && L().satisfies(M.A?.os.release, ea.e);
}
function nu() {
    return (
        (0, p.isWindows)() &&
        e9.supports(ez.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e9.supports(ez.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function n_() {
    return e9.supports(ez.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t5(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && v.w.set(eZ, tt), i);
}
function nA() {
    let e = t6();
    (nC(e.inputDeviceId),
        e9.setAudioOutputDevice(e.outputDeviceId),
        t9(),
        e9.setInputVolume(e.inputVolume),
        e9.setOutputVolume(e.outputVolume),
        e9.setAecDump(e.aecDumpEnabled),
        e9.setSidechainCompression(e.sidechainCompression),
        e9.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e9.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && T.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function nh() {
    ti || e9.enable().then(() => P.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nf(e, t) {
    return {
        id: ez.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nI(e, t) {
    return (
        null !=
        t.find(
            (t) =>
                (null != t.containerId && t.containerId === e.containerId) ||
                (null != t.hardwareId && t.hardwareId === e.hardwareId) ||
                (null != t.originalId && t.originalId === e.originalId),
        )
    );
}
let np = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nT(e) {
    return e?.windowsDeviceService === "voicemodvad";
}
function nm(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nf(i, n);
        return { [e.id]: e };
    }
    return N()(r)
        .map((t) => ({
            id: t.id,
            deviceType: n,
            index: t.index,
            name: t.name,
            disabled: !1,
            facing: t.facing,
            guid: t.originalId,
            hardwareId: t.hardwareId,
            containerId: t.containerId,
            effects: t.effects,
            formFactor: (function (e, t) {
                let { inputDevices: n, outputDevices: i, videoDevices: r } = t;
                switch (!0) {
                    case "videoinput" === e.type:
                    case nI(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && np.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nI(e, i):
                    case "audiooutput" === e.type && nI(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
            windowsDeviceDescription: t.windowsDeviceDescription,
            windowsDeviceInterfaceFriendlyName: t.windowsDeviceInterfaceFriendlyName,
        }))
        .keyBy("id")
        .value();
}
function ng(e, t) {
    let n = e[t] ?? e[ez.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nS(e) {
    if (!(0, p.isWindows)() || !z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tc[e];
    if (t?.guid != null)
        try {
            await ev(t.guid, e, e9);
        } catch (e) {
            eq.warn("Unable to query audio effects", e);
        }
}
function nN(e) {
    if (null != e) return null != e.guid && "" !== e.guid ? e.guid : e.name;
}
function nC(e) {
    (e9.setAudioInputDevice(e),
        nS(e),
        (function (e) {
            if (!(0, p.isWindows)() && !(0, p.isMac)() && !(0, p.isLinux)()) return;
            let t = nN(tc[e]);
            null != t && e9.watchDeviceHardwareMutedChange?.(t);
        })(e));
}
function nO(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eP.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eK.W.USER ? ez.x.DEFAULT : ez.x.STREAM,
            r = i === ez.x.STREAM ? ez.Cn : ez.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t6(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eM.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                e9.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    e9.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nE({ localMutes: s, localVolumes: l }, i);
    }
}
function nL(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eq.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eU.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eU.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, p.isWindows)() &&
                    n > 1 &&
                    U.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            P.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && t6().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function ny() {
    let e = ez.x.DEFAULT,
        { videoToggleStateMap: t } = t6(e);
    for (let [e, n] of Object.entries(t)) n === ey.bb8.AUTO_PROBING && delete t[e];
    nE({ videoToggleStateMap: t }, e, !1);
}
function nD(e) {
    let t = t6(),
        n = e9.getAudioSubsystem(),
        r = e9.getAudioLayer(),
        a = ng(tc, t.inputDeviceId),
        s = tc[a]?.name,
        l = (0, eR.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eL.default.track(ey.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: r,
        input_device: s,
        effective_noise_cancellation: l,
    });
}
function nv() {
    let e = t6(),
        t = tW.size > 0,
        n = e.inputDeviceId,
        i = eB.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nr(eB.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (e9.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nl());
}
async function nb() {
    if (!e9.supports(ez.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((tJ = !0), (tQ = e9.supports(ez.O5.GAMESCOPE_CAPTURE)));
}
function nP() {
    return (tv || !1) && !tb;
}
async function nM() {
    try {
        await T.Ay.ensureModule("discord_krisp");
        let e = T.Ay.requireModule("discord_krisp");
        ((tv = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tP = e), i.emitChange());
            }),
            i.emitChange(),
            await T.Ay.ensureModule("discord_voice"));
        let t = T.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (eq.warn(`Failed to load Krisp module: ${t.message}`), eG.A.captureException(t));
        let e = ez.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ez.CO.KRISP_INIT_ERROR : n;
        }
        ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: ne(e) }),
            eL.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        tD = !1;
    }
}
async function nU() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e3);
        if (null === i) return void eq.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await T.Ay.downloadOpenH264(
                e3,
                a,
                "1522f873a482923c5ec018a4415e1866898197528828c50f90fd300c94620df3",
                (e) => {
                    eq.log("OpenH264 download status", e);
                },
            );
            (eq.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (eq.error("OpenH264 download failed", n), (t = n.message), (e = !1));
        }
        if (
            (eL.default.track(ey.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await T.Ay.cleanupUnusedOpenH264Files([a]);
            eq.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eq.error("OpenH264 download failed", e);
    }
}
function nw(e) {
    e === ez.rB.AUTOMATIC
        ? (nE({ automaticAudioSubsystem: !0 }), nG())
        : (nE({ automaticAudioSubsystem: !1 }), e9.setAudioSubsystem(e));
}
function nG() {
    e9.queueAudioSubsystem(ez.rB.EXPERIMENTAL);
}
function nx(e) {
    let { section: t } = e;
    return (t === ey.nc_.VOICE && nh(), !1);
}
class nk extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new el(e9, this)),
            tE.start(e2, () => {
                (eq.error("Device enumeration timed out"), eL.default.track(ey.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            e9.on(D.bg.Connection, (e) => {
                let t;
                (nv(), t4(e), t8(e), no(e));
                let n = t6();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)() || (0, p.isLinux)()
                        ? (null != tB
                              ? tB
                              : "u" > typeof window
                                ? (tB = t3().then((e) => ((tF = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(ez.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.isMac)() && e.setExperimentFlag(ez.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(ez.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(ez.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(ez.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(ez.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(ez.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ez.x.STREAM)
                ) {
                    let t = nO(tu);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(ez.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            ez.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, ez.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = K.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(ez.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(ez.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(ez.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    tK?.startsWith("AMD") &&
                    eg("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ez.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    tK?.startsWith("Intel") &&
                    !0 === t$ &&
                    1 === tz &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(ez.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(ez.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    tK?.startsWith("Intel") &&
                    !0 === t$ &&
                    1 === tz &&
                    eT.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(ez.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    tK?.startsWith("Qualcomm") &&
                    eg("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ez.fd.WMF_GPU_ENCODE, !0),
                e9.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t6(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== ek.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ek.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    P.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === ez.x.DEFAULT &&
                        ((tS = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tS;
                            ((tS = !0),
                                e && i.emitChange(),
                                tN.start(e1, () => {
                                    ((tS = !1), i.emitChange());
                                }));
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        P.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eL.default.track(ey.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nn),
                    e.on(D.yq.VoiceActivityDetectorError, nn),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eL.default.track(ey.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eF.A.bitrate),
                    e.applyVideoQualityMode(eW.A.mode),
                    (0, p.isWindows)() &&
                        e9.supports(ez.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e9.setAsyncVideoInputDeviceInit(!0));
            }),
            e9.on(D.bg.DeviceChange, (e, t, n) => {
                (tE.stop(),
                    P.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            e9.on(D.bg.VolumeChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e9.on(D.bg.DesktopSourceEnd, (e, t) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e9.on(D.bg.AudioPermission, (e) => {
                ((tV = !0), P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            e9.on(D.bg.VideoPermission, (e) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e9.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eU.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eq.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eL.default.track(
                        ey.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eq.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eq.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            e9.on(D.bg.VideoInputInitialized, (e) => {
                eL.default.track(ey.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ew.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eH.A.getMediaSessionId(),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e9.on(D.bg.AudioInputInitialized, (e) => {
                eL.default.track(ey.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ew.A.Millis.SECOND),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e9.on(D.bg.ClipsRecordingRestartNeeded, () => {
                P.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e9.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = ts < 3;
                ((ts += 1),
                    P.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? P.h.dispatch({ type: "CLIPS_RESTART" })
                        : eq.warn(
                              `Clips init failure budget exhausted (${ts} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            e9.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== ts && (eq.info(`Clips bridge reported healthy; resetting restart budget (was ${ts}).`), (ts = 0));
            }),
            e9.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tl !== e && (eq.info(`Clips recorder ready changed: ${e}`), (tl = e));
            }),
            e9.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eq.info("Clips bridge idle shutdown");
            }),
            e9.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            e9.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e9.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e9.on(D.bg.NativeScreenSharePickerError, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e9.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eL.default.track(ey.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e9.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e9.on(D.bg.ConnectionStats, (e) => {
                P.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e5++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e9.on(D.bg.VoiceProcessingError, nn),
            e9.on(D.bg.VideoFilterError, ni),
            e9.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nF(e);
                null !== t && eL.default.track(ey.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e9.setOnVideoContainerResized((e, t, n) => {
                P.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            nb(),
            l.reset(),
            (0, eb.w)().then((e) => {
                if (null != e) {
                    ((tK = e.gpu_brand), (t$ = e.has_intel_hybrid_igpu), (tz = e.gpu_count));
                    let t = e.gpus ?? [];
                    tX = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            e9.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            e9.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), e9.eachConnection(no), i.emitChange());
            }),
            null != (e = v.w.get("audio")) && (v.w.set(eZ, { [ez.x.DEFAULT]: e }), v.w.remove("audio")),
            (tt = v.w.get(eZ) ?? {}),
            N().each(tt, (e) => {
                (N().defaultsDeep(e, e4()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ex.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e9.supports(ez.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nA(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !tD && !tv
                ? ((tD = !0), nM())
                : (0, p.isWeb)() && e9.supports(ez.O5.NOISE_CANCELLATION)
                  ? ((tv = !0), i.emitChange())
                  : (0, p.isWeb)() && nE({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nU(),
            ny(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !t0)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    T.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = ez.tl;
                let n = nF(e);
                (null !== n && eL.default.track(ey.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, ez.tl));
            }
            ((t0 = !0), setTimeout(t, ez.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === td &&
            e9
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        td = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (eq.error("Failed to parse codec survey", e), (td = !1));
                    }
                })
                .catch((e) => {
                    (eq.error("Failed to get codec survey", e), (td = !1));
                })
                .finally(() => {
                    P.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tY = {
                [ez.O5.VIDEO]: e9.supports(ez.O5.VIDEO),
                [ez.O5.DESKTOP_CAPTURE]: e9.supports(ez.O5.DESKTOP_CAPTURE),
                [ez.O5.HYBRID_VIDEO]: e9.supports(ez.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ek.default, eF.A, eB.A, eV.A, x.Ay, B.A, eH.A, H.Ay, eP.A, ej.default, eW.A));
    }
    supports(e) {
        return (e !== ez.O5.VIDEO || !!te("MediaEngineStore.supports")) && e9.supports(e);
    }
    supportsInApp(e) {
        return (e !== ez.O5.VIDEO || !!te("MediaEngineStore.supportsInApp")) && (tY[e] || e9.supports(e));
    }
    isSupported() {
        return e9.supported();
    }
    isNoiseSuppressionSupported() {
        return e9.supports(ez.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nP();
    }
    isNoiseCancellationError() {
        return tw;
    }
    isAutomaticGainControlSupported() {
        return e9.supports(ez.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !n_() && (e9.supports(ez.O5.LEGACY_AUDIO_SUBSYSTEM) || e9.supports(ez.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e9.supports(ez.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e9.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nP();
    }
    isAecDumpSupported() {
        return e9.supports(ez.O5.AEC_DUMP);
    }
    getAecDump() {
        return t6().aecDumpEnabled;
    }
    getMediaEngine() {
        return e9;
    }
    getVideoComponent() {
        return e9.Video;
    }
    getCameraComponent() {
        return e9.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tM;
    }
    isEnabled() {
        return ti;
    }
    isMute() {
        return this.isSelfMute() || tA;
    }
    isDeaf() {
        return this.isSelfDeaf() || tI;
    }
    isServerMute() {
        return tA;
    }
    isServerDeaf() {
        return tI;
    }
    hasContext(e) {
        return null != tt[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return e === ez.x.DEFAULT && th;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t6(e).mute ||
            !eC.A.didHavePermission(eY.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ez.x.DEFAULT && tf)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tg;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tg = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eB.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tq;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return !this.isSupported() || t6(e).deaf;
    }
    isVideoEnabled() {
        return tp && tO;
    }
    isVideoAvailable() {
        return Object.values(t_).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tO;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.STREAM;
        return ta === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.STREAM;
        return ta === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return e !== ek.default.getId() && (t6(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e9.supports(ez.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return t6(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return t6(t).videoToggleStateMap[e] ?? ey.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return t === ez.x.DEFAULT && tH.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return e === ez.x.DEFAULT && tH.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tG;
    }
    isNativeAudioPermissionReady() {
        return tV;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ta;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return to;
    }
    isH264MfDecodeAvailable() {
        return td;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT,
            n = t6(t).localPans[e];
        return null != n ? n : eJ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT,
            n = t === ez.x.STREAM ? ez.Cn : ez.Hz,
            i = t6(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t6().inputVolume;
    }
    getOutputVolume() {
        return t6().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return t6(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return t6(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(tt, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ey.TBI.PUSH_TO_TALK && tn.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ng(tc, t6().inputDeviceId);
    }
    getOutputDeviceId() {
        return ng(tu, t6().outputDeviceId);
    }
    getVideoDeviceId() {
        return ng(t_, t6().videoDeviceId);
    }
    getInputDevices() {
        return tc;
    }
    getOutputDevices() {
        return tu;
    }
    getVideoDevices() {
        return t_;
    }
    getEchoCancellation() {
        let e = t6();
        return eB.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e9.supports(ez.O5.SIDECHAIN_COMPRESSION) && t6().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t6().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t6().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tF && tF;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && t6().openH264Enabled;
    }
    getLoopback() {
        return tW.size > 0;
    }
    getLoopbackReasons() {
        return tW;
    }
    getNoiseSuppression() {
        let e = t6();
        return eB.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t6();
        return eB.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t6().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t6().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t6().silenceWarning;
    }
    getDebugLogging() {
        return e9.getDebugLogging();
    }
    getQoS() {
        return t6().qos;
    }
    getAttenuation() {
        return t6().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t6().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t6().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nu() && t6().automaticAudioSubsystem ? ez.rB.AUTOMATIC : e9.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e9.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t6().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e$.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return t6(e);
    }
    getState() {
        return {
            settingsByContext: tt,
            inputDevices: tc,
            outputDevices: tu,
            appSupported: tY,
            krispModuleLoaded: tv,
            krispFatalError: tb,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: ta,
        };
    }
    getInputDetectedThisConnection() {
        return tR;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tL;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceHardwareMuted() {
        return c;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== ey.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        e9.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tr;
    }
    getVideoHook() {
        return t6().videoHook;
    }
    supportsVideoHook() {
        return e9.supports(ez.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t6().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e9.supports(ez.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && e9.supports(ez.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t6().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e9.supports(ez.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tJ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === ez.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === ez.x.STREAM && "streamer" === t && (0, p.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eh.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return tQ;
    }
    getSpeakingWhileMuted() {
        return tS;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        return t6().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveSystemTelecomCall() {
        return tZ;
    }
    setHasActiveSystemTelecomCall(e) {
        tZ = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? e9.supports(ez.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.P$) && nc()
            : (0, p.isWindows)()
              ? e9.supports(ez.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && e9.supports(ez.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tk[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return this.supports(ez.O5.VIDEO)
            ? [{ rid: "100", type: e === ez.x.DEFAULT ? ez.mI.VIDEO : ez.mI.SCREEN, quality: ez.Y4 }]
            : [];
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return e9.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tx &&
            ((tx = !0),
            (0, p.isWeb)() &&
                e9.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eq.warn("DAVE preload failed:", e), eG.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e9.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tl;
    }
    isClipsRecordingReadySignalSupported() {
        return e9.supports(ez.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tK;
    }
    getHasNvidiaGpu() {
        return tX || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nF(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    ((t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0)));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        i = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let i = n[e];
            ((t[`slow_task_${e}_name`] = i.name), (t[`slow_task_${e}_longest_exec_time_ns`] = i.longestExecTimeNs));
        }
    for (let e = 0; e < 3; e++)
        if (e < i.length) {
            let n = i[e];
            ((t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs));
        }
    return ((t.full_task_report = JSON.stringify(n)), t);
}
let nB = (i = new nk(P.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t9(r, null), null != t || null == n)) {
            ty = !1;
            return;
        }
        if (ty) return;
        ty = !0;
        let a = t6();
        (a.mute || a.deaf) && (nE({ deaf: !1, mute: !1 }), e9.eachConnection(t8));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tA = t.mute || t.suppress), (tI = t.deaf), e9.eachConnection(t8));
                let e = null != t.guildId && null != t.channelId && null != tU && tU !== t.channelId,
                    n = !ty && null == t.channelId;
                return (t9(!e && !n && tp), (tU = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== ek.default.getId() || null != eH.A.getChannelId() || t9(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tA = !1), (tI = !1));
        let t = t6();
        (nu() && (n_() ? nw(ez.rB.AUTOMATIC) : t.automaticAudioSubsystem && nG()),
            e9.supports(ez.O5.OFFLOAD_ADM_CONTROLS) && e9.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e9.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (e9.setNcModels?.(eo), i.emitChange()),
            nS(t.inputDeviceId),
            nR());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.isWeb)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ey.S7L.CONNECTING:
                nh();
                break;
            case ey.S7L.RTC_CONNECTING:
                ((tL = !1), (o = void 0), (d = void 0), (c = void 0), (tR = !1), l.reset());
                break;
            case ey.S7L.RTC_CONNECTED:
                t9();
                break;
            case ey.S7L.DISCONNECTED:
                ((t1 = {}),
                    (function () {
                        if (0 === tH.size) return;
                        let e = ez.x.DEFAULT,
                            { disabledLocalVideos: t } = t6(e);
                        (tH.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e9.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tH.clear(),
                            nE({ disabledLocalVideos: t }, e, !1));
                    })(),
                    ny());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((th = t), e9.eachConnection(t8));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t6(t);
        if (t === ez.x.DEFAULT && (eC.A.requestPermission(eY.iL.AUDIO), tf)) return !1;
        ((i = !r && !i) || (r = !1), n || (tg = !0), nE({ mute: i, deaf: r }, t), e9.eachConnection(t8));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nE({ mute: n }, t), i || (tg = !0), e9.eachConnection(t8));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nE({ deaf: !t6(t).deaf }, t), e9.eachConnection(t8));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ek.default.getId()) return;
        let { localMutes: i } = t6(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nE({ localMutes: i }, t),
            e9.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === ey.bb8.DISABLED,
            { disabledLocalVideos: l } = t6(t),
            o = l[n] ?? !1,
            d = tH.has(n),
            c = i === ey.bb8.AUTO_ENABLED || i === ey.bb8.MANUAL_ENABLED;
        (eq.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === ez.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eq.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t6(t);
        if (
            (h[n] === ey.bb8.AUTO_PROBING &&
                i === ey.bb8.AUTO_ENABLED &&
                (0, eN.A)(n, s ? ez.Al.AUTO_DISABLE : ez.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nE({ videoToggleStateMap: h }, t, r),
            i === ey.bb8.AUTO_PROBING
                ? eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tj ||
                (eq.info(`isAutoDisableAllowed=${tj} - disabling VideoHealthManager`),
                eH.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tj)) return;
            ((0, eN.A)(n, s ? ez.Al.AUTO_DISABLE : ez.Al.AUTO_ENABLE, c), s ? tH.add(n) : tH.delete(n));
        } else
            A &&
                (d && !s
                    ? (eq.info("disallowing auto-disable for this session because of manual override by user"),
                      (tj = !1),
                      eH.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eN.A)(n, ez.Al.MANUAL_REENABLE, c))
                    : (0, eN.A)(n, s ? ez.Al.MANUAL_DISABLE : ez.Al.MANUAL_ENABLE, c));
        (_ && !s && tH.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nE({ disabledLocalVideos: l }, t, r),
            e9.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ek.default.getId()) return;
        let r = t === ez.x.STREAM ? ez.Cn : ez.Hz,
            { localVolumes: a } = t6(t);
        (i === r ? delete a[n] : (a[n] = i),
            nE({ localVolumes: a }, t),
            e9.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t6(t);
        ((a[n] = { left: i, right: r }), nE({ localPans: a }, t), e9.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nE({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e9.eachConnection(t4));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nE({ inputVolume: t7(t) }), e9.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nE({ outputVolume: t }), e9.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = ng(tc, t)),
            (to = performance.now()),
            nE({ inputDeviceId: t }),
            nC(t),
            e9.eachConnection(no),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tR = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nE({ outputDeviceId: (t = ng(tu, t)) }), e9.setAudioOutputDevice(t), e9.eachConnection(no));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nE({ activeInputProfile: t });
        let n = t6();
        (e9.eachConnection((e) => {
            (t4(e), no(e));
        }),
            e9.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nv());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nE({ echoCancellation: e.enabled }),
            n = eB.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (e9.eachConnection((e) => e.setEchoCancellation(n)), nv(), nD(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nE({ sidechainCompression: e.enabled })), e9.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nE({ sidechainCompressionStrength: e.strength });
        e9.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tW.add(n) : tW.delete(n), nv());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nE({ noiseSuppression: e.enabled }),
            n = eB.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (e9.eachConnection((e) => e.setNoiseSuppression(n)), nv(), nD(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nE({ automaticGainControl: e.enabled });
        (e9.eachConnection((e) => na(e, t.automaticGainControl)), nv(), nD(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nE({ noiseCancellation: e.enabled });
        (e9.eachConnection((e) => ns(e, t.noiseCancellation)), nv(), nD(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eO.A.setKrispModelOverride(e.model), (E = e.model), nv());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nE({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e9.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eO.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tM = e.enabled), e9.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nE({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nE({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nE({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nE({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e9.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nE({ qos: t }), e9.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tc;
        if (
            ((tc = nm(e, { deviceType: ez.oh.AUDIO_INPUT, defaultName: eX.intl.string(eX.t["/QIjDA"]) })),
            !N().isEqual(tc, t))
        ) {
            let e = t6();
            (nC(ng(tc, e.inputDeviceId)), e9.eachConnection(no));
        }
        !(function (e) {
            let t = tu;
            if (
                ((tu = nm(e, { deviceType: ez.oh.AUDIO_OUTPUT, defaultName: eX.intl.string(eX.t.xlUg0v) })),
                !N().isEqual(tu, t))
            ) {
                let e = t6(),
                    n = ng(tu, e.outputDeviceId);
                (e9.setAudioOutputDevice(n), e9.eachConnection(no));
                let i = nO(t),
                    r = nO(tu);
                i !== r &&
                    e9.eachConnection((e) => {
                        e.context === ez.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tO = e.videoDevices.length > 0;
        let n = t_;
        if (
            ((t_ = nm(e, { deviceType: ez.oh.VIDEO_INPUT, defaultName: eX.intl.string(eX.t.WKWARY) })),
            tp && !N().isEqual(t_, n))
        ) {
            let e = void 0 !== t_[tT],
                t = tT === ez.dx && n[ez.dx]?.disabled,
                i = "Firefox" === O().name && "" === tT && n[tT]?.name === "Default" && !n[tT]?.disabled;
            t9(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nE({ inputVolume: t7(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (v.w.remove(eZ), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tL = !0 !== tR && !t), t && (tR = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = ng(tc, t6().inputDeviceId),
            r = tc[i];
        if (t !== nN(r)) return !1;
        ((c = n), eL.default.track(ey.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nw(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nE({ bypassSystemInputProcessing: t }), e9.setAudioInputBypassSystemProcessing(t), nl(), nD(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((ti = e.enabled), e.unmute && nE({ mute: !1, deaf: !1 }), e9.eachConnection(t8));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eC.A.requestPermission(eY.iL.CAMERA), t9(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((ti = !1), e9.eachConnection(t8));
                    break;
                case "video":
                    t9(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? ez.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = i.startsWith(`${ez.fS.ACTIVITY}:`),
                d = o ? null : eU.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = nL(d, r)),
                s !== ta && (null != a && e9.setGoLiveSource(null, ta), (ta = s)),
                t9(s === ez.x.STREAM && tp, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? ez.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === ez.x.STREAM && tp,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t9(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t9(tp, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nE({ videoDeviceId: (t = ng(t_, t)) }), t9());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tr !== e.required && ((tr = e.required), e.required || e9.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nx,
    USER_SETTINGS_MODAL_SET_SECTION: nx,
    CERTIFIED_DEVICES_SET: function () {
        return (e9.eachConnection(no), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tn.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tn.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((tt = t.settingsByContext),
            (tc = t.inputDevices),
            (tu = t.outputDevices),
            (tY = t.appSupported),
            (tv = t.krispModuleLoaded),
            (tb = t.krispFatalError),
            (u = t.krispVersion),
            (ta = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = V.A.isEnabled();
        if (t === ey.g6G.BACKGROUND && tp && !n) ((tC = !0), t9(!1));
        else {
            if (t !== ey.g6G.ACTIVE || !tC) return !1;
            ((tC = !1), t9(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e9.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tf) return !1;
        ((tf = n), e9.eachConnection(t8));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eY.hL.ACCEPTED;
        switch (n) {
            case eY.iL.AUDIO:
                ((tV = !0), e9.eachConnection(t8));
                break;
            case eY.iL.CAMERA:
                !i && tp && t9(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e9.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nE({ aecDumpEnabled: t });
        e9.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nE({ openH264Enabled: t }), T.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((tt = Object.values(ez.x).reduce((e, n) => {
            let i = e4();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            v.w.set(eZ, tt),
            nA());
    },
    CHANNEL_DELETE: function () {
        if ((!tp && null == a) || null != eH.A.getRTCConnectionId()) return !1;
        t9(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === ez.CO.KRISP_CPU_OVERUSE) {
            ((t1.noiseCancellation = !1), (t1.noiseSuppression = !0));
            let e = t6();
            return (e9.eachConnection((t) => ns(t, e.noiseCancellation)), nv(), nD(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === ez.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t1.modeOptions = { vadUseKrisp: !1 }), e9.eachConnection((e) => t4(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tw && ((tw = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e9.applyMediaFilterSettings(t).finally(() => {
            ((tG = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tG = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tG = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eK.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nR(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (e9.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t6().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eU.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nL(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t2("MediaEngineStore clips"),
            c = t6().videoHook,
            u = c && eI.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eA.getConfig({ location: "handleClipsInit" });
        e9.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: nd(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nc(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e0,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(ez.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), e9.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tq = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tk[t] = { active: n, available: i }), nl());
    },
}));

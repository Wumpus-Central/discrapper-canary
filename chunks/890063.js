"use strict";
let i, r, s, a, o, l, u, c, d, _, h;
n.d(t, { yz: () => e9, Ay: () => nF }), n(323874), n(14289), n(35956), n(321073);
var f,
    p = n(823598),
    E = n(626584),
    m = n(723702),
    g = n(19575);
(0, p.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (m.isPlatformEmbedded) {
                let e = (0, p.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new E.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => g.Ay.supportsFeature(e),
    setProcessPriority(e) {
        g.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => g.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => g.Ay.getOpenH264LibraryPath(),
});
var A = n(284009),
    I = n.n(A),
    T = n(735438),
    S = n.n(T),
    y = n(481613),
    N = n.n(y),
    v = n(299855),
    C = n.n(v),
    R = n(17928),
    O = n(459838),
    b = n(506774),
    D = n(451988),
    L = n(228366),
    w = n(77729),
    M = n(719129),
    P = n(894539),
    x = n(124838),
    k = n(274372),
    U = n(915618),
    G = n(572164),
    F = n(680725),
    V = n(487329),
    B = n(736056),
    H = n(6494),
    j = n(952818),
    Y = n(540305),
    W = n(945810);
let K = {
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
    $ = (0, W.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: { noiseCancellationDuringProcessing: !1, noiseCancellationConfig: { useAGC2: !1 } },
        variations: {
            1: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: { useAGC2: !1 } },
            2: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.5 },
            3: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.7 },
            4: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.8 },
            5: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.9 },
            6: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.95 },
        },
    });
function z(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? $.definition.defaultConfig : $.getConfig({ location: t });
}
let q = (0, W.mj)({
        name: "2026-05-av1-bitrate-tuning",
        kind: "user",
        defaultConfig: { bitrate: 35e5 },
        variations: { 1: { bitrate: 3e6 }, 2: { bitrate: 25e5 } },
    }),
    X = (0, W.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Z = { probeAudioEffects: !1 },
    Q = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: Z,
        variations: { 1: { ...Z, probeAudioEffects: !0 } },
    }),
    J = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ee = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    et = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var en = n(240921);
let ei = (0, en.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    er = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    es = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ea = n(574381),
    eo = n(941426),
    el = n(325278);
let eu = new eo.Vy("InputWatcher");
class ec {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new D.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(O.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ea.uF)() && C().satisfies(w.A?.os.release, el.PH))
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
                    L.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                eu.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            eu.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                L.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let ed = (0, en.Ay)({
    kind: "user",
    name: "2025-10-low-latency-rate-control",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var e_ = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var eh = n(801644);
let ef = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ep = (0, en.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    em = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, en.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
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
    eS = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function ey(e) {
    return eS.getConfig({ location: e });
}
let eN = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ev = n(75076),
    eC = n(91777),
    eR = n(559633),
    eO = n(205106),
    eb = n(174459),
    eD = n(652215);
let eL = new eo.Vy("AudioEffects");
async function ew(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            L.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eb.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eL.error("Failed to probe audio effects for device", e),
            eb.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eM = n(967347),
    eP = n(617617),
    ex = n(125325),
    ek = n(499156),
    eU = n(353835),
    eG = n(927813),
    eF = n(38405),
    eV = n(350535),
    eB = n(495544),
    eH = n(131319),
    ej = n(347481),
    eY = n(734057),
    eW = n(763827),
    eK = n(287809),
    e$ = n(117549),
    ez = n(765682),
    eq = n(829997),
    eX = n(355097),
    eZ = n(621380),
    eQ = n(731854),
    eJ = n(375708);
let e0 = new E.A("MediaEngineStore"),
    e1 = "MediaEngineStore",
    e2 = { left: 1, right: 1 },
    e3 = 5 * eG.A.Millis.SECOND,
    e6 = 2 * eG.A.Millis.SECOND,
    e4 = 30 * eG.A.Millis.SECOND,
    e5 = +eG.A.Millis.MINUTE,
    e7 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e8 = 0;
var e9 =
    (((f = {}).WEBCAM = "WEBCAM"),
    (f.INTEGRATED = "INTEGRATED"),
    (f.BLUETOOTH = "BLUETOOTH"),
    (f.AIRPLAY = "AIRPLAY"),
    (f.HEADSET = "HEADSET"),
    f);
function te() {
    return {
        mode: eD.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: m.isPlatformEmbedded || __OVERLAY__,
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
        audioMixerSettings: { ...eq.b },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eQ.Hz,
        outputVolume: eQ.Hz,
        inputDeviceId: eQ.dx,
        outputDeviceId: eQ.dx,
        videoDeviceId: eQ.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ti.supports(eQ.O5.VIDEO_HOOK),
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
let tt = {
        [eZ.m.CUSTOM]: {},
        [eZ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eZ.m.STUDIO]: {
            mode: eD.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tn = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    ti = (0, O.hB)((0, O.WI)());
e0.enableNativeLogger(!0);
let tr = {},
    ts = new Set([eQ.x.DEFAULT]),
    ta = ti.supports(eQ.O5.AUTO_ENABLE),
    to = !1,
    tl = eQ.x.STREAM,
    tu = performance.now(),
    tc = null,
    td = { [eQ.dx]: nm("No Input Devices") },
    t_ = { [eQ.dx]: nm("No Output Devices") },
    th = { [eQ.dx]: nm("No Video Devices") },
    tf = new D.Ep(),
    tp = !1,
    tE = !1,
    tm = !1,
    tg = !1,
    tA = !1,
    tI = eQ.qe,
    tT = eQ.qe,
    tS = !1,
    ty = !1,
    tN = new D.Ep(),
    tv = !1,
    tC = !1,
    tR = !1,
    tO = !1,
    tb = new D.Ep(),
    tD = !1,
    tL = !1,
    tw = !1,
    tM = !1,
    tP = [],
    tx = !1,
    tk = null,
    tU = !1,
    tG = !1,
    tF = !1,
    tV = {},
    tB = null,
    tH = null,
    tj = !1;
eC.A.hasPermission(ez.iL.AUDIO, { showAuthorizationError: !1 }),
    eC.A.hasPermission(ez.iL.CAMERA, { showAuthorizationError: !1 });
let tY = new Set(),
    tW = !1,
    tK = new Set(),
    t$ = {},
    tz = null,
    tq = null,
    tX = null,
    tZ = !0,
    tQ = !1,
    tJ = new D.Ep(),
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t6 = {};
function t4(e) {
    return (function (e) {
        let { location: t } = e;
        return er.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t5() {
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
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
        t = tr[e];
    return null == t && ((t = te()), (tr[e] = t)), t;
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
        t = t7(e),
        n = tt[t.activeInputProfile ?? eZ.m.CUSTOM],
        i = nL() ? t6 : tn,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ep.definition.defaultConfig : ep.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function t9(e) {
    let t = t8(e.context),
        n = t.mode;
    e.context === eQ.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ek.A.getConfig({ location: "setInputMode" }),
        r = i && n === eD.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nL(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ne(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.Hz;
    return S().clamp(e, 0, t);
}
function nt(e) {
    let t = t8(e.context),
        n = !ta || t.mute || t.deaf;
    switch (e.context) {
        case eQ.x.DEFAULT:
            n = n || tp || tE || tm || !eC.A.didHavePermission(ez.iL.AUDIO);
            break;
        case eQ.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eQ.x.DEFAULT && P.A.updateNativeMute();
}
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, m.isWindows)()
                ? M.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t8().videoHook && M.c1(n.desktopSource.sourcePid),
            ti.setGoLiveSource(null, tl)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ti.setGoLiveSource(null, tl),
        tA || e)
    ) {
        let t = t8().videoDeviceId;
        tA && t === eQ.dx && tT === eQ.dx && tI !== eQ.qe ? (t = tI) : (tT = t),
            (tI = (tA = e) ? nT(th, t) : eQ.qe),
            ti.setVideoInputDevice(tI);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t4("MediaEngineStore go live"),
                r = t8().videoHook,
                s = nc(),
                a = s ? ((0, m.isWindows)() && C().satisfies(w.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                o = !1;
            (0, m.isWindows)() &&
                a >= el.zl &&
                (o =
                    !0 === tq
                        ? eI.getConfig({ location: "updateVideo" }).enabled
                        : eA.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !et.getConfig({ location: "updateVideo" }).enabled,
                u = r && em.getConfig({ location: "updateVideo" }).enabled;
            ti.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, m.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nd(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e3,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ei.definition.defaultConfig : ei.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                    },
                    quality: e,
                },
                tl,
            );
        }
        null != t.cameraSource &&
            ti.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tl,
            );
    }
}
function ni(e) {
    switch (e) {
        case eQ.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case eQ.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case eQ.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case eQ.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case eQ.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case eQ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case eQ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case eQ.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case eQ.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nr = new Set([
    eQ.CO.KRISP_INIT_ERROR,
    eQ.CO.KRISP_INIT_ERROR_NATIVE,
    eQ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eQ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eQ.CO.KRISP_INIT_ERROR_UNSIGNED,
    eQ.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function ns(e) {
    if (
        (e0.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
        eb.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nr.has(e))
    ) {
        tM = !0;
        return;
    }
    e === eQ.CO.KRISP_VAD_CPU_OVERUSE
        ? L.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tU = !0), L.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function na(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function no(e, t) {
    e.setAutomaticGainControl(na(t));
}
function nl(e, t) {
    let n = (0, eO.A)(t, i.getSystemMicrophoneMode());
    n !== t && e0.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nu(e) {
    let t = t8(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ej.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ej.A.hasNoiseSuppression(n) || t.noiseSuppression),
        no(e, ej.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nl(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, m.isWindows)() && C().satisfies(w.A?.os.release, ">=10.0.15063") && e.context === eQ.x.DEFAULT)
    ) {
        let t = (function (e) {
            let { location: t } = e;
            return ef.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setEchoReferenceMode(t.echoReferenceMode);
    }
    if ((0, m.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nc() {
    return (0, m.isWindows)() && C().satisfies(w.A?.os.release, el.yg);
}
function nd() {
    return (0, m.isMac)() && ti.supports(eQ.O5.SCREEN_CAPTURE_KIT) && C().satisfies(w.A?.os.release, el.e);
}
function n_() {
    return (
        (0, m.isWindows)() &&
        ti.supports(eQ.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ti.supports(eQ.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nh() {
    return ti.supports(eQ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t7(t);
    return Object.assign(i, e), !__OVERLAY__ && n && b.w.set(e1, tr), i;
}
function np() {
    let e = t8();
    ny(e.inputDeviceId),
        ti.setAudioOutputDevice(e.outputDeviceId),
        nn(),
        ti.setInputVolume(e.inputVolume),
        ti.setOutputVolume(e.outputVolume),
        ti.setAecDump(e.aecDumpEnabled),
        ti.setSidechainCompression(e.sidechainCompression),
        ti.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ti.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, m.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        ti.setAudioMixerOptions(e.audioMixerSettings);
}
function nE() {
    ta || ti.enable().then(() => L.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nm(e) {
    return { id: eQ.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function ng(e, t) {
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
let nA = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nI(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nm(i);
        return { [e.id]: e };
    }
    return S()(r)
        .map((t) => ({
            id: t.id,
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
                    case ng(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nA.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && ng(e, i):
                    case "audiooutput" === e.type && ng(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function nT(e, t) {
    let n = e[t] ?? e[eQ.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nS(e) {
    if (!(0, m.isWindows)() || !Q.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = td[e];
    t?.guid != null && ew(t.guid, e, ti);
}
function ny(e) {
    ti.setAudioInputDevice(e), nS(e);
}
function nN(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nv() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eP.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eX.W.USER ? eQ.x.DEFAULT : eQ.x.STREAM,
            r = i === eQ.x.STREAM ? eQ.Cn : eQ.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t8(i);
        for (let [e, t] of Object.entries(s))
            null == (0, ex.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                ti.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    ti.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nf({ localMutes: a, localVolumes: o }, i);
    }
}
function nC(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    e0.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eU.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eU.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = s),
                (0, m.isWindows)() &&
                    n > 1 &&
                    M.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            L.h.wait(() => {
                                L.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && t8().videoHook && M.GH(e), { soundshareId: null, soundshareSession: null };
}
function nR() {
    let e = eQ.x.DEFAULT,
        { videoToggleStateMap: t } = t8(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    nf({ videoToggleStateMap: t }, e, !1);
}
function nO(e) {
    let t = t8(),
        n = ti.getAudioSubsystem(),
        r = ti.getAudioLayer(),
        s = nT(td, t.inputDeviceId),
        a = td[s]?.name,
        o = (0, eO.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eb.default.track(eD.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: r,
        input_device: a,
        effective_noise_cancellation: o,
    });
}
function nb() {
    let e = t8(),
        t = tK.size > 0,
        n = e.inputDeviceId,
        i = ej.A.hasEchoCancellation(n) || e.echoCancellation,
        r = ej.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = na(ej.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    ti.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nD() {
    if (!ti.supports(eQ.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t2 = !0), (t1 = ti.supports(eQ.O5.GAMESCOPE_CAPTURE)));
}
function nL() {
    return (tw || !1) && !tM;
}
async function nw() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tw = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tP = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e0.warn(`Failed to load Krisp module: ${t.message}`), eF.A.captureException(t);
        let e = eQ.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eQ.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
            eb.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tL = !1;
    }
}
async function nM() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e7);
        if (null === i) return void e0.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await g.Ay.downloadOpenH264(
                e7,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e0.log("OpenH264 download status", e);
                },
            );
            e0.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e0.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eb.default.track(eD.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await g.Ay.cleanupUnusedOpenH264Files([s]);
            e0.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e0.error("OpenH264 download failed", e);
    }
}
function nP(e) {
    e === eQ.rB.AUTOMATIC
        ? (nf({ automaticAudioSubsystem: !0 }), nx())
        : (nf({ automaticAudioSubsystem: !1 }), ti.setAudioSubsystem(e));
}
function nx() {
    ti.queueAudioSubsystem(eQ.rB.EXPERIMENTAL);
}
function nk(e) {
    let { section: t } = e;
    return t === eD.nc_.VOICE && nE(), !1;
}
class nU extends R.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tf.start(e4, () => {
                e0.error("Device enumeration timed out"), eb.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            ti.on(O.bg.Connection, (e) => {
                let t;
                nb(),
                    t9(e),
                    nt(e),
                    nu(e),
                    e.context === eQ.x.STREAM &&
                        e.setAv1CodecBitrateFunc(() => q.getConfig({ location: "MediaEngineStore" }).bitrate);
                let n = t8();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, m.isWindows)()
                        ? (e.setExperimentFlag(eQ.fd.H265_HARDWARE_ONLY, !0),
                          (null != tH
                              ? tH
                              : "u" > typeof window
                                ? (tH = t5().then((e) => ((tB = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eQ.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, m.isMac)() && e.setExperimentFlag(eQ.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, m.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eQ.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eQ.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eQ.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eQ.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = x.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eQ.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eQ.x.STREAM)
                ) {
                    let t = nN(t_);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, m.isWindows)())
                    e.setExperimentFlag(eQ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isMac)())
                    e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eQ.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                C().satisfies(window?.DiscordNative?.os.release, eQ.Dk)
                            ),
                        );
                else if ((0, m.isLinux)()) e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, m.isIOS)())
                    e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isAndroid)() && !1) {
                    let { enabled: t } = X.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, m.isWeb)()) {
                    let { enabled: t } = J.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eQ.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, m.isWindows)() &&
                    tz?.startsWith("AMD") &&
                    ey("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eQ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tz?.startsWith("Intel") &&
                    eN.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eQ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tz?.startsWith("Intel") &&
                    !0 === tq &&
                    1 === tX &&
                    eT.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eQ.fd.INTEL_GPU, !0),
                (0, m.isWindows)() &&
                    tz?.startsWith("Qualcomm") &&
                    ey("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eQ.fd.WMF_GPU_ENCODE, !0),
                ti.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(eQ.X1),
                (n = t8(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eB.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eB.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    L.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eQ.x.DEFAULT &&
                        ((ty = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !ty;
                            (ty = !0),
                                e && i.emitChange(),
                                tN.start(e6, () => {
                                    (ty = !1), i.emitChange();
                                });
                        })),
                    e.on(O.yq.DesktopSourceEnd, (t, n) => {
                        L.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(O.yq.InteractionRequired, (e) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(O.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            eb.default.track(eD.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, Y.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, ns),
                    e.on(O.yq.VoiceActivityDetectorError, ns),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eb.default.track(eD.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eH.A.bitrate),
                    e.applyVideoQualityMode(e$.A.mode),
                    (0, m.isWindows)() &&
                        ti.supports(eQ.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        ti.setAsyncVideoInputDeviceInit(!0);
            }),
            ti.on(O.bg.DeviceChange, (e, t, n) => {
                tf.stop(),
                    L.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            ti.on(O.bg.VolumeChange, (e, t) => {
                L.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            ti.on(O.bg.DesktopSourceEnd, (e, t) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            ti.on(O.bg.AudioPermission, (e) => {
                (tj = !0), L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            ti.on(O.bg.VideoPermission, (e) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            ti.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eU.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e0.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    eg.getConfig({ location: "watchdog_timeout" }).enabled && null != w.A.processUtils.setCrashReason;
                try {
                    await eb.default.track(
                        eD.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e0.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e0.info("Relaunching app due to voice watchdog timeout"),
                    await w.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    w.A.app.relaunch());
            }),
            ti.on(O.bg.VideoInputInitialized, (e) => {
                eb.default.track(eD.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eG.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eW.A.getMediaSessionId(),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            ti.on(O.bg.AudioInputInitialized, (e) => {
                eb.default.track(eD.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eG.A.Millis.SECOND),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            ti.on(O.bg.ClipsRecordingRestartNeeded, () => {
                L.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            ti.on(O.bg.ClipsInitFailure, (e, t) => {
                L.h.wait(() => {
                    L.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            ti.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && M.c1(t), (a = null));
            }),
            ti.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            ti.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            ti.on(O.bg.NativeScreenSharePickerError, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            ti.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                eb.default.track(eD.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            ti.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            ti.on(O.bg.ConnectionStats, (e) => {
                L.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e8++,
                            context: n.context,
                        };
                    }),
                });
            }),
            ti.on(O.bg.VoiceProcessingError, ns),
            ti.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nG(e);
                null !== t && eb.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
            }),
            ti.setOnVideoContainerResized((e, t, n) => {
                L.h.wait(() =>
                    L.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nD(),
            o.reset(),
            (0, eM.w)().then((e) => {
                null != e && ((tz = e.gpu_brand), (tq = e.has_intel_hybrid_igpu), (tX = e.gpu_count));
            }),
            ti.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (h = e), ti.eachConnection(nu), i.emitChange();
            }),
            null != (e = b.w.get("audio")) && (b.w.set(e1, { [eQ.x.DEFAULT]: e }), b.w.remove("audio")),
            (tr = b.w.get(e1) ?? {}),
            S().each(tr, (e) => {
                S().defaultsDeep(e, te()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eV.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    ti.supports(eQ.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 1 &&
                        ((e.audioMixerSettingsVersion = 1), (e.audioMixerSettings = { ...eq.b })),
                    (0, m.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            np(),
            ((0, m.isWindows)() || (0, m.isLinux)() || (0, m.isMac)()) && !__OVERLAY__ && !tL && !tw
                ? ((tL = !0), nw())
                : (0, m.isWeb)() && ti.supports(eQ.O5.NOISE_CANCELLATION)
                  ? ((tw = !0), i.emitChange())
                  : (0, m.isWeb)() && nf({ noiseCancellation: !1 }),
            (0, m.isLinux)() && nM(),
            nR(),
            (0, m.isDesktop)() && m.isPlatformEmbedded && !t3)
        ) {
            t3 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eQ.tl;
                let n = nG(t);
                null !== n && eb.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eQ.tl);
            };
            setTimeout(e, eQ.tl);
        }
        (0, m.isWindows)() &&
            m.isPlatformEmbedded &&
            null === tc &&
            ti
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tc = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e0.error("Failed to parse codec survey", e), (tc = !1);
                    }
                })
                .catch((e) => {
                    e0.error("Failed to get codec survey", e), (tc = !1);
                })
                .finally(() => {
                    L.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, m.isAndroid)(),
            (t$ = {
                [eQ.O5.VIDEO]: ti.supports(eQ.O5.VIDEO),
                [eQ.O5.DESKTOP_CAPTURE]: ti.supports(eQ.O5.DESKTOP_CAPTURE),
                [eQ.O5.HYBRID_VIDEO]: ti.supports(eQ.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eB.default, eH.A, ej.A, eY.A, k.Ay, B.A, eW.A, j.Ay, eP.A, eK.default, e$.A);
    }
    supports(e) {
        return ti.supports(e);
    }
    supportsInApp(e) {
        return t$[e] || ti.supports(e);
    }
    isSupported() {
        return ti.supported();
    }
    isNoiseSuppressionSupported() {
        return ti.supports(eQ.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nL();
    }
    isNoiseCancellationError() {
        return tU;
    }
    isAutomaticGainControlSupported() {
        return ti.supports(eQ.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nh() && (ti.supports(eQ.O5.LEGACY_AUDIO_SUBSYSTEM) || ti.supports(eQ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ti.supports(eQ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ti.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nL();
    }
    isAecDumpSupported() {
        return ti.supports(eQ.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ti.supports(eQ.O5.VIDEO) && ti.supports(eQ.O5.SIMULCAST);
    }
    getAecDump() {
        return t8().aecDumpEnabled;
    }
    getMediaEngine() {
        return ti;
    }
    getVideoComponent() {
        return ti.Video;
    }
    getCameraComponent() {
        return ti.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tx;
    }
    isEnabled() {
        return ta;
    }
    isMute() {
        return this.isSelfMute() || tp;
    }
    isDeaf() {
        return this.isSelfDeaf() || tg;
    }
    isServerMute() {
        return tp;
    }
    isServerDeaf() {
        return tg;
    }
    getAudioMixerSettings() {
        return t8().audioMixerSettings;
    }
    hasContext(e) {
        return null != tr[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return e === eQ.x.DEFAULT && tE;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t8(e).mute ||
            !eC.A.didHavePermission(ez.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eQ.x.DEFAULT && tm)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tS;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tS = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
            t = tQ && "voice_isolation" !== this.getSystemMicrophoneMode() && t8(e).mode === eD.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ej.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tZ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return !this.isSupported() || t8(e).deaf;
    }
    isVideoEnabled() {
        return tA && tC;
    }
    isVideoAvailable() {
        return Object.values(th).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tC;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.STREAM;
        return tl === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.STREAM;
        return tl === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return e !== eB.default.getId() && (t8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ti.supports(eQ.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return t8(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return t8(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return t === eQ.x.DEFAULT && tY.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return e === eQ.x.DEFAULT && tY.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tG;
    }
    isNativeAudioPermissionReady() {
        return tj;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tl;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tu;
    }
    isH264MfDecodeAvailable() {
        return tc;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT,
            n = t8(t).localPans[e];
        return null != n ? n : e2;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT,
            n = t === eQ.x.STREAM ? eQ.Cn : eQ.Hz,
            i = t8(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t8().inputVolume;
    }
    getOutputVolume() {
        return t8().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return t8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return t8(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tr, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eD.TBI.PUSH_TO_TALK && ts.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nT(td, t8().inputDeviceId);
    }
    getOutputDeviceId() {
        return nT(t_, t8().outputDeviceId);
    }
    getVideoDeviceId() {
        return nT(th, t8().videoDeviceId);
    }
    getInputDevices() {
        return td;
    }
    getOutputDevices() {
        return t_;
    }
    getVideoDevices() {
        return th;
    }
    getEchoCancellation() {
        let e = t8();
        return ej.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ti.supports(eQ.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t8().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t8().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tB && tB;
    }
    getOpenH264Enabled() {
        return (0, m.isLinux)() && t8().openH264Enabled;
    }
    getLoopback() {
        return tK.size > 0;
    }
    getLoopbackReasons() {
        return tK;
    }
    getNoiseSuppression() {
        let e = t8();
        return ej.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t8();
        return ej.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t8().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t8().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t8().silenceWarning;
    }
    getDebugLogging() {
        return ti.getDebugLogging();
    }
    getQoS() {
        return t8().qos;
    }
    getAttenuation() {
        return t8().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t8().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t8().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return n_() && t8().automaticAudioSubsystem ? eQ.rB.AUTOMATIC : ti.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ti.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t8().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eZ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return t8(e);
    }
    getState() {
        return {
            settingsByContext: tr,
            inputDevices: td,
            outputDevices: t_,
            appSupported: t$,
            krispModuleLoaded: tw,
            krispFatalError: tM,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tl,
        };
    }
    getInputDetectedThisConnection() {
        return tR;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tO;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return m.isPlatformEmbedded || this.getMode() !== eD.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ti.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return to;
    }
    getVideoHook() {
        return t8().videoHook;
    }
    supportsVideoHook() {
        return ti.supports(eQ.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ti.supports(eQ.O5.EXPERIMENTAL_SOUNDSHARE) && C().satisfies(w.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, m.isWindows)() && ti.supports(eQ.O5.SOUNDSHARE) && C().satisfies(w.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t8().useSystemScreensharePicker,
            n = (0, m.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ti.supports(eQ.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t2;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eQ.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eQ.x.STREAM && "streamer" === t && (0, m.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eE.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t1;
    }
    getSpeakingWhileMuted() {
        return ty;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        return t8().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t0;
    }
    setHasActiveCallKitCall(e) {
        t0 = e;
    }
    supportsScreenSoundshare() {
        return (0, m.isMac)()
            ? ti.supports(eQ.O5.SOUNDSHARE) && C().satisfies(w.A?.os.release, el.P$) && nd()
            : (0, m.isWindows)()
              ? ti.supports(eQ.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, m.isLinux)() && ti.supports(eQ.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, m.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tV[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, m.isMac)() || (0, m.isIOS)()) return h;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
            t = this.supports(eQ.O5.VIDEO)
                ? [{ rid: "100", type: e === eQ.x.DEFAULT ? eQ.mI.VIDEO : eQ.mI.SCREEN, quality: eQ.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eQ.x.DEFAULT &&
                ee.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eQ.mI.VIDEO, quality: eQ.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, m.isWeb)() };
        return ti.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tF &&
            ((tF = !0),
            (0, m.isWeb)() &&
                ti.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e0.warn("DAVE preload failed:", e), eF.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return ti.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tz;
    }
}
function nG(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        i = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let i = n[e];
            (t[`slow_task_${e}_name`] = i.name), (t[`slow_task_${e}_longest_exec_time_ns`] = i.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < i.length) {
            let n = i[e];
            (t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
(i = new nU(L.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nn(r, null), null != t || null == n)) {
            tD = !1;
            return;
        }
        if (tD) return;
        tD = !0;
        let s = t8();
        (s.mute || s.deaf) && (nf({ deaf: !1, mute: !1 }), ti.eachConnection(nt));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tp = t.mute || t.suppress), (tg = t.deaf), ti.eachConnection(nt);
                let e = null != t.guildId && null != t.channelId && null != tk && tk !== t.channelId,
                    n = !tD && null == t.channelId;
                return nn(!e && !n && tA), (tk = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eB.default.getId() || null != eW.A.getChannelId() || nn(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tp = !1), (tg = !1);
        let t = t8();
        n_() && (nh() ? nP(eQ.rB.AUTOMATIC) : t.automaticAudioSubsystem && nx()),
            ti.supports(eQ.O5.OFFLOAD_ADM_CONTROLS) && ti.setOffloadAdmControls(!0),
            (0, m.isIOS)() &&
                es.getConfig({ location: "handleConnectionOpen" }).enabled &&
                ti.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nS(t.inputDeviceId),
            nv();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, m.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eD.S7L.CONNECTING:
                nE();
                break;
            case eD.S7L.RTC_CONNECTING:
                (tO = !1), (l = void 0), (u = void 0), (tR = !1), (tQ = !1), tJ.stop(), tb.stop(), o.reset();
                break;
            case eD.S7L.RTC_CONNECTED:
                nn();
                break;
            case eD.S7L.DISCONNECTED:
                (t6 = {}),
                    (function () {
                        if (0 === tY.size) return;
                        let e = eQ.x.DEFAULT,
                            { disabledLocalVideos: t } = t8(e);
                        tY.forEach((n) => {
                            I()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                ti.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tY.clear(),
                            nf({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nR();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tE = t), ti.eachConnection(nt);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t8(t);
        if (t === eQ.x.DEFAULT && (eC.A.requestPermission(ez.iL.AUDIO), tm)) return !1;
        (i = !r && !i) || (r = !1), n || (tS = !0), nf({ mute: i, deaf: r }, t), ti.eachConnection(nt);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nf({ mute: n }, t), i || (tS = !0), ti.eachConnection(nt);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nf({ deaf: !t8(t).deaf }, t), ti.eachConnection(nt);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eB.default.getId()) return;
        let { localMutes: i } = t8(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nf({ localMutes: i }, t),
            ti.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        I()(!(r && s), "These are not allowed to both be true.");
        let a = i === eD.bb8.DISABLED,
            { disabledLocalVideos: o } = t8(t),
            l = o[n] ?? !1,
            u = tY.has(n),
            c = i === eD.bb8.AUTO_ENABLED || i === eD.bb8.MANUAL_ENABLED;
        e0.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            I()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eQ.x.DEFAULT,
            h = s && d && _,
            f = r && d && _;
        e0.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${h} isManualToggleByUser=${f}`);
        let { videoToggleStateMap: p } = t8(t);
        if (
            (p[n] === eD.bb8.AUTO_PROBING &&
                i === eD.bb8.AUTO_ENABLED &&
                (0, ev.A)(n, a ? eQ.Al.AUTO_DISABLE : eQ.Al.AUTO_ENABLE, c),
            (p[n] = i),
            nf({ videoToggleStateMap: p }, t, r),
            i === eD.bb8.AUTO_PROBING
                ? eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tW ||
                (e0.info(`isAutoDisableAllowed=${tW} - disabling VideoHealthManager`),
                eW.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            h)
        ) {
            if ((!a && !u) || (a && !tW)) return;
            (0, ev.A)(n, a ? eQ.Al.AUTO_DISABLE : eQ.Al.AUTO_ENABLE, c), a ? tY.add(n) : tY.delete(n);
        } else
            f &&
                (u && !a
                    ? (e0.info("disallowing auto-disable for this session because of manual override by user"),
                      (tW = !1),
                      eW.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, ev.A)(n, eQ.Al.MANUAL_REENABLE, c))
                    : (0, ev.A)(n, a ? eQ.Al.MANUAL_DISABLE : eQ.Al.MANUAL_ENABLE, c));
        _ && !a && tY.delete(n),
            a ? (o[n] = !0) : delete o[n],
            nf({ disabledLocalVideos: o }, t, r),
            ti.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eB.default.getId()) return;
        let r = t === eQ.x.STREAM ? eQ.Cn : eQ.Hz,
            { localVolumes: s } = t8(t);
        i === r ? delete s[n] : (s[n] = i),
            nf({ localVolumes: s }, t),
            ti.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nf({ audioMixerSettings: n }, t),
            ti.setAudioMixerOptions(n),
            ti.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eQ.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t8(t);
        (s[n] = { left: i, right: r }), nf({ localPans: s }, t), ti.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nf({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), ti.eachConnection(t9);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nf({ inputVolume: ne(t) }), ti.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nf({ outputVolume: t }), ti.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nT(td, t)),
            (tu = performance.now()),
            nf({ inputDeviceId: t }),
            ny(t),
            ti.eachConnection(nu),
            (l = void 0),
            (u = void 0),
            tJ.stop(),
            (tQ = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tR = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nf({ outputDeviceId: (t = nT(t_, t)) }), ti.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nf({ activeInputProfile: t });
        let n = t8();
        ti.eachConnection((e) => {
            t9(e), nu(e);
        }),
            ti.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nb();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nf({ echoCancellation: e.enabled });
        ti.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nb(), nO(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nf({ sidechainCompression: e.enabled })), ti.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nf({ sidechainCompressionStrength: e.strength });
        ti.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tK.add(n) : tK.delete(n), nb();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nf({ noiseSuppression: e.enabled });
        ti.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nb(), nO(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nf({ automaticGainControl: e.enabled });
        ti.eachConnection((e) => no(e, t.automaticGainControl)), nb(), nO(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nf({ noiseCancellation: e.enabled });
        ti.eachConnection((e) => nl(e, t.noiseCancellation)), nb(), nO(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eR.A.setKrispModelOverride(e.model), (_ = e.model), nb();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nf({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        ti.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), eR.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, m.isWeb)() || ((tx = e.enabled), ti.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nf({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nf({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nf({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nf({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        ti.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nf({ qos: t }), ti.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = td;
        if (
            ((td = nI(e, { deviceType: eQ.oh.AUDIO_INPUT, defaultName: eJ.intl.string(eJ.t["/QIjDA"]) })),
            !S().isEqual(td, t))
        ) {
            let e = t8();
            ny(nT(td, e.inputDeviceId)), ti.eachConnection(nu);
        }
        !(function (e) {
            let t = t_;
            if (
                ((t_ = nI(e, { deviceType: eQ.oh.AUDIO_OUTPUT, defaultName: eJ.intl.string(eJ.t.xlUg0v) })),
                !S().isEqual(t_, t))
            ) {
                let e = t8(),
                    n = nT(t_, e.outputDeviceId);
                ti.setAudioOutputDevice(n);
                let i = nN(t),
                    r = nN(t_);
                i !== r &&
                    ti.eachConnection((e) => {
                        e.context === eQ.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tC = e.videoDevices.length > 0;
        let n = th;
        if (
            ((th = nI(e, { deviceType: eQ.oh.VIDEO_INPUT, defaultName: eJ.intl.string(eJ.t.WKWARY) })),
            tA && !S().isEqual(th, n))
        ) {
            let e = void 0 !== th[tI],
                t = tI === eQ.dx && n[eQ.dx]?.disabled,
                i = "Firefox" === N().name && "" === tI && n[tI]?.name === "Default" && !n[tI]?.disabled;
            nn(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nf({ inputVolume: ne(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        b.w.remove(e1), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tO = !0 !== tR && !t), t)) (tR = !0), (tQ = !1), tJ.stop(), tb.stop();
        else if (t8().mode === eD.TBI.VOICE_ACTIVITY && tR) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tJ.start(e5, () => {
                    eb.default.track(eD.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: td[nT(td, t8().inputDeviceId)]?.name,
                        rtc_connection_id: eW.A.getRTCConnectionId(),
                    }),
                        (tQ = !0),
                        i.emitChange();
                }),
                null != t &&
                    tb.start(t * eG.A.Millis.MINUTE, () => {
                        (tR = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nP(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nf({ bypassSystemInputProcessing: t }), ti.setAudioInputBypassSystemProcessing(t), nO(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (ta = e.enabled), e.unmute && nf({ mute: !1, deaf: !1 }), ti.eachConnection(nt);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eC.A.requestPermission(ez.iL.CAMERA), nn(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (ta = !1), ti.eachConnection(nt);
                    break;
                case "video":
                    nn(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? eQ.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = eU.A.getPidFromDesktopSource(i);
            m.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nC(l, r)),
                a !== tl && (null != s && ti.setGoLiveSource(null, tl), (tl = a)),
                nn(a === eQ.x.STREAM && tA, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eQ.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                s = e === eQ.x.STREAM && tA,
                a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nn(s, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
        } else nn(tA, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nf({ videoDeviceId: (t = nT(th, t)) }), nn();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return to !== e.required && ((to = e.required), e.required || ti.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nk,
    USER_SETTINGS_MODAL_SET_SECTION: nk,
    CERTIFIED_DEVICES_SET: function () {
        return ti.eachConnection(nu), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        ts.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        ts.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tr = t.settingsByContext),
            (td = t.inputDevices),
            (t_ = t.outputDevices),
            (t$ = t.appSupported),
            (tw = t.krispModuleLoaded),
            (tM = t.krispFatalError),
            (c = t.krispVersion),
            (tl = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eD.g6G.BACKGROUND && tA && !n) (tv = !0), nn(!1);
        else {
            if (t !== eD.g6G.ACTIVE || !tv) return !1;
            (tv = !1), nn(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        ti.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tm) return !1;
        (tm = n), ti.eachConnection(nt);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === ez.hL.ACCEPTED;
        switch (n) {
            case ez.iL.AUDIO:
                (tj = !0), ti.eachConnection(nt);
                break;
            case ez.iL.CAMERA:
                !i && tA && nn(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        ti.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nf({ aecDumpEnabled: t });
        ti.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nf({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tr = Object.values(eQ.x).reduce((e, n) => {
            let i = te();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            b.w.set(e1, tr),
            np();
    },
    CHANNEL_DELETE: function () {
        if ((!tA && null == s) || null != eW.A.getRTCConnectionId()) return !1;
        nn(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eQ.CO.KRISP_CPU_OVERUSE) {
            (t6.noiseCancellation = !1), (t6.noiseSuppression = !0);
            let e = t8();
            return ti.eachConnection((t) => nl(t, e.noiseCancellation)), nb(), nO(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eQ.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t6.modeOptions = { vadUseKrisp: !1 }), ti.eachConnection((e) => t9(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tU && ((tU = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        ti.applyMediaFilterSettings(t).finally(() => {
            (tG = !1), i.emitChange();
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
        if (t !== eX.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nv(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, G.Ao)() || null == w.A || (a?.desktopSource.id === t && a.quality === r)) return !1;
        null != a &&
            (ti.setClipsSource(null),
            (0, m.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? M.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t8().videoHook && M.c1(a.desktopSource.sourcePid)));
        let s = eU.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nC(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = t4("MediaEngineStore clips"),
            c = t8().videoHook,
            d = !c || !et.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && em.getConfig({ location: "handleClipsInit" }).enabled;
        ti.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: nc(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nd(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e3,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eQ.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), ti.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tZ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tV[t] = { active: n, available: i };
    },
})),
    (o = new ec(ti, i));
let nF = i;

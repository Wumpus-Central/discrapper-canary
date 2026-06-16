"use strict";
let i, r, s, a, o, l, u, c, d, _, h;
n.d(t, { yz: () => e7, Ay: () => nU }), n(323874), n(14289), n(35956), n(321073);
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
    C = n.n(y),
    N = n(299855),
    v = n.n(N),
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
    j = n(6494),
    H = n(952818),
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
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Z = { probeAudioEffects: !1 },
    X = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: Z,
        variations: { 1: { ...Z, probeAudioEffects: !0 } },
    }),
    Q = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    J = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    ee = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var et = n(240921);
let en = (0, et.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ei = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    er = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var es = n(574381),
    ea = n(941426),
    eo = n(325278);
let el = new ea.Vy("InputWatcher");
class eu {
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
        if ((0, es.uF)() && v().satisfies(w.A?.os.release, eo.PH))
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
                el.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            el.info("Silence:", e),
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
let ec = (0, et.Ay)({
    kind: "user",
    name: "2025-10-low-latency-rate-control",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ed = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var e_ = n(801644);
let eh = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ef = (0, et.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eE = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eT(e) {
    return eI.getConfig({ location: e });
}
let eS = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ey = n(75076),
    eC = n(91777),
    eN = n(559633),
    ev = n(205106),
    eR = n(174459),
    eO = n(652215);
let eb = new ea.Vy("AudioEffects");
async function eD(e, t, n) {
    if (!(0, es.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            L.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eR.default.track(eO.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eb.error("Failed to probe audio effects for device", e),
            eR.default.track(eO.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eL = n(967347),
    ew = n(617617),
    eM = n(125325),
    eP = n(499156),
    ex = n(353835),
    ek = n(927813),
    eU = n(38405),
    eG = n(350535),
    eF = n(495544),
    eV = n(131319),
    eB = n(347481),
    ej = n(734057),
    eH = n(763827),
    eY = n(287809),
    eW = n(117549),
    eK = n(765682),
    e$ = n(829997),
    ez = n(355097),
    eq = n(621380),
    eZ = n(731854),
    eX = n(375708);
let eQ = new E.A("MediaEngineStore"),
    eJ = "MediaEngineStore",
    e0 = { left: 1, right: 1 },
    e1 = 5 * ek.A.Millis.SECOND,
    e2 = 2 * ek.A.Millis.SECOND,
    e3 = 30 * ek.A.Millis.SECOND,
    e6 = +ek.A.Millis.MINUTE,
    e4 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e5 = 0;
var e7 =
    (((f = {}).WEBCAM = "WEBCAM"),
    (f.INTEGRATED = "INTEGRATED"),
    (f.BLUETOOTH = "BLUETOOTH"),
    (f.AIRPLAY = "AIRPLAY"),
    (f.HEADSET = "HEADSET"),
    f);
function e8() {
    return {
        mode: eO.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...e$.b },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eZ.Hz,
        outputVolume: eZ.Hz,
        inputDeviceId: eZ.dx,
        outputDeviceId: eZ.dx,
        videoDeviceId: eZ.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tt.supports(eZ.O5.VIDEO_HOOK),
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
let e9 = {
        [eq.m.CUSTOM]: {},
        [eq.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eq.m.STUDIO]: {
            mode: eO.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    te = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tt = (0, O.hB)((0, O.WI)());
eQ.enableNativeLogger(!0);
let tn = {},
    ti = new Set([eZ.x.DEFAULT]),
    tr = tt.supports(eZ.O5.AUTO_ENABLE),
    ts = !1,
    ta = eZ.x.STREAM,
    to = performance.now(),
    tl = null,
    tu = { [eZ.dx]: np("No Input Devices") },
    tc = { [eZ.dx]: np("No Output Devices") },
    td = { [eZ.dx]: np("No Video Devices") },
    t_ = new D.Ep(),
    th = !1,
    tf = !1,
    tp = !1,
    tE = !1,
    tm = !1,
    tg = eZ.qe,
    tA = eZ.qe,
    tI = !1,
    tT = !1,
    tS = new D.Ep(),
    ty = !1,
    tC = !1,
    tN = !1,
    tv = !1,
    tR = new D.Ep(),
    tO = !1,
    tb = !1,
    tD = !1,
    tL = !1,
    tw = [],
    tM = !1,
    tP = null,
    tx = !1,
    tk = !1,
    tU = !1,
    tG = {},
    tF = null,
    tV = null,
    tB = !1;
eC.A.hasPermission(eK.iL.AUDIO, { showAuthorizationError: !1 }),
    eC.A.hasPermission(eK.iL.CAMERA, { showAuthorizationError: !1 });
let tj = new Set(),
    tH = !1,
    tY = new Set(),
    tW = {},
    tK = null,
    t$ = null,
    tz = null,
    tq = !0,
    tZ = !1,
    tX = new D.Ep(),
    tQ = !1,
    tJ = !1,
    t0 = !1,
    t1 = !1,
    t2 = {};
function t3(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t6() {
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
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
        t = tn[e];
    return null == t && ((t = e8()), (tn[e] = t)), t;
}
function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
        t = t4(e),
        n = e9[t.activeInputProfile ?? eq.m.CUSTOM],
        i = nb() ? t2 : te,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ef.definition.defaultConfig : ef.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function t7(e) {
    let t = t5(e.context),
        n = t.mode;
    e.context === eZ.x.DEFAULT && (0, ed.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eP.A.getConfig({ location: "setInputMode" }),
        r = i && n === eO.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nb(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.Hz;
    return S().clamp(e, 0, t);
}
function t9(e) {
    let t = t5(e.context),
        n = !tr || t.mute || t.deaf;
    switch (e.context) {
        case eZ.x.DEFAULT:
            n = n || th || tf || tp || !eC.A.didHavePermission(eK.iL.AUDIO);
            break;
        case eZ.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eZ.x.DEFAULT && P.A.updateNativeMute();
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tm,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, m.isWindows)()
                ? M.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t5().videoHook && M.c1(n.desktopSource.sourcePid),
            tt.setGoLiveSource(null, ta)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tt.setGoLiveSource(null, ta),
        tm || e)
    ) {
        let t = t5().videoDeviceId;
        tm && t === eZ.dx && tA === eZ.dx && tg !== eZ.qe ? (t = tg) : (tA = t),
            (tg = (tm = e) ? nA(td, t) : eZ.qe),
            tt.setVideoInputDevice(tg);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t3("MediaEngineStore go live"),
                r = t5().videoHook,
                s = nl(),
                a = s ? ((0, m.isWindows)() && v().satisfies(w.A?.os.release, eo.fG) ? eo.zl : eo.eg) : 0,
                o = !1;
            (0, m.isWindows)() &&
                a >= eo.zl &&
                (o =
                    !0 === t$
                        ? eg.getConfig({ location: "updateVideo" }).enabled
                        : em.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                u = r && eE.getConfig({ location: "updateVideo" }).enabled;
            tt.setGoLiveSource(
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
                        allowScreenCaptureKit: nu(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e1,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? en.definition.defaultConfig : en.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                    },
                    quality: e,
                },
                ta,
            );
        }
        null != t.cameraSource &&
            tt.setGoLiveSource(
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
function nt(e) {
    switch (e) {
        case eZ.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case eZ.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case eZ.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case eZ.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case eZ.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case eZ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case eZ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case eZ.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case eZ.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nn = new Set([
    eZ.CO.KRISP_INIT_ERROR,
    eZ.CO.KRISP_INIT_ERROR_NATIVE,
    eZ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eZ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eZ.CO.KRISP_INIT_ERROR_UNSIGNED,
    eZ.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function ni(e) {
    if (
        (eQ.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
        eR.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nn.has(e))
    ) {
        tL = !0;
        return;
    }
    e === eZ.CO.KRISP_VAD_CPU_OVERUSE
        ? L.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tx = !0), L.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nr(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ns(e, t) {
    e.setAutomaticGainControl(nr(t));
}
function na(e, t) {
    let n = (0, ev.A)(t, i.getSystemMicrophoneMode());
    n !== t && eQ.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function no(e) {
    let t = t5(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eB.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eB.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ns(e, eB.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        na(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, m.isWindows)() && v().satisfies(w.A?.os.release, ">=10.0.15063") && e.context === eZ.x.DEFAULT)
    ) {
        let t = (function (e) {
            let { location: t } = e;
            return eh.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setEchoReferenceMode(t.echoReferenceMode);
    }
    if ((0, m.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nl() {
    return (0, m.isWindows)() && v().satisfies(w.A?.os.release, eo.yg);
}
function nu() {
    return (0, m.isMac)() && tt.supports(eZ.O5.SCREEN_CAPTURE_KIT) && v().satisfies(w.A?.os.release, eo.e);
}
function nc() {
    return (
        (0, m.isWindows)() &&
        tt.supports(eZ.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tt.supports(eZ.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nd() {
    return tt.supports(eZ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t4(t);
    return Object.assign(i, e), !__OVERLAY__ && n && b.w.set(eJ, tn), i;
}
function nh() {
    let e = t5();
    nT(e.inputDeviceId),
        tt.setAudioOutputDevice(e.outputDeviceId),
        ne(),
        tt.setInputVolume(e.inputVolume),
        tt.setOutputVolume(e.outputVolume),
        tt.setAecDump(e.aecDumpEnabled),
        tt.setSidechainCompression(e.sidechainCompression),
        tt.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, m.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        tt.setAudioMixerOptions(e.audioMixerSettings);
}
function nf() {
    tr || tt.enable().then(() => L.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function np(e) {
    return { id: eZ.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nE(e, t) {
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
let nm = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function ng(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = np(i);
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
                    case nE(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nm.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nE(e, i):
                    case "audiooutput" === e.type && nE(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function nA(e, t) {
    let n = e[t] ?? e[eZ.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nI(e) {
    if (!(0, m.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tu[e];
    t?.guid != null && eD(t.guid, e, tt);
}
function nT(e) {
    tt.setAudioInputDevice(e), nI(e);
}
function nS(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ny() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === ez.W.USER ? eZ.x.DEFAULT : eZ.x.STREAM,
            r = i === eZ.x.STREAM ? eZ.Cn : eZ.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t5(i);
        for (let [e, t] of Object.entries(s))
            null == (0, eM.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                tt.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tt.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        n_({ localMutes: a, localVolumes: o }, i);
    }
}
function nC(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eQ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ex.A.getAudioPid(e),
                    n = "";
                return null != t && (n = ex.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            L.h.wait(() => {
                                L.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && t5().videoHook && M.GH(e), { soundshareId: null, soundshareSession: null };
}
function nN() {
    let e = eZ.x.DEFAULT,
        { videoToggleStateMap: t } = t5(e);
    for (let [e, n] of Object.entries(t)) n === eO.bb8.AUTO_PROBING && delete t[e];
    n_({ videoToggleStateMap: t }, e, !1);
}
function nv(e) {
    let t = t5(),
        n = tt.getAudioSubsystem(),
        r = tt.getAudioLayer(),
        s = nA(tu, t.inputDeviceId),
        a = tu[s]?.name,
        o = (0, ev.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eR.default.track(eO.HAw.VOICE_PROCESSING, {
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
function nR() {
    let e = t5(),
        t = tY.size > 0,
        n = e.inputDeviceId,
        i = eB.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nr(eB.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    tt.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nO() {
    if (!tt.supports(eZ.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t0 = !0), (tJ = tt.supports(eZ.O5.GAMESCOPE_CAPTURE)));
}
function nb() {
    return (tD || !1) && !tL;
}
async function nD() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tD = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tw = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eQ.warn(`Failed to load Krisp module: ${t.message}`), eU.A.captureException(t);
        let e = eZ.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eZ.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
            eR.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tb = !1;
    }
}
async function nL() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e4);
        if (null === i) return void eQ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await g.Ay.downloadOpenH264(
                e4,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eQ.log("OpenH264 download status", e);
                },
            );
            eQ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eQ.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eR.default.track(eO.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await g.Ay.cleanupUnusedOpenH264Files([s]);
            eQ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eQ.error("OpenH264 download failed", e);
    }
}
function nw(e) {
    e === eZ.rB.AUTOMATIC
        ? (n_({ automaticAudioSubsystem: !0 }), nM())
        : (n_({ automaticAudioSubsystem: !1 }), tt.setAudioSubsystem(e));
}
function nM() {
    tt.queueAudioSubsystem(eZ.rB.EXPERIMENTAL);
}
function nP(e) {
    let { section: t } = e;
    return t === eO.nc_.VOICE && nf(), !1;
}
class nx extends R.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (t_.start(e3, () => {
                eQ.error("Device enumeration timed out"), eR.default.track(eO.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tt.on(O.bg.Connection, (e) => {
                let t;
                nR(), t7(e), t9(e), no(e);
                let n = t5();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, m.isWindows)()
                        ? (e.setExperimentFlag(eZ.fd.H265_HARDWARE_ONLY, !0),
                          (null != tV
                              ? tV
                              : "u" > typeof window
                                ? (tV = t6().then((e) => ((tF = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eZ.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, m.isMac)() && e.setExperimentFlag(eZ.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, m.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eZ.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eZ.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eZ.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eZ.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = x.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eZ.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eZ.x.STREAM)
                ) {
                    let t = nS(tc);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, m.isWindows)())
                    e.setExperimentFlag(eZ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isMac)())
                    e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eZ.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                v().satisfies(window?.DiscordNative?.os.release, eZ.Dk)
                            ),
                        );
                else if ((0, m.isLinux)()) e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, m.isIOS)())
                    e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isAndroid)() && !1) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, m.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eZ.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, m.isWindows)() &&
                    tK?.startsWith("AMD") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eZ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tK?.startsWith("Intel") &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eZ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tK?.startsWith("Intel") &&
                    !0 === t$ &&
                    1 === tz &&
                    eA.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eZ.fd.INTEL_GPU, !0),
                (0, m.isWindows)() &&
                    tK?.startsWith("Qualcomm") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eZ.fd.WMF_GPU_ENCODE, !0),
                tt.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(eZ.X1),
                (n = t5(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eF.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eF.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    L.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eZ.x.DEFAULT &&
                        ((tT = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !tT;
                            (tT = !0),
                                e && i.emitChange(),
                                tS.start(e2, () => {
                                    (tT = !1), i.emitChange();
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
                            eR.default.track(eO.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, Y.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, ni),
                    e.on(O.yq.VoiceActivityDetectorError, ni),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eR.default.track(eO.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eV.A.bitrate),
                    e.applyVideoQualityMode(eW.A.mode),
                    (0, m.isWindows)() &&
                        tt.supports(eZ.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tt.setAsyncVideoInputDeviceInit(!0);
            }),
            tt.on(O.bg.DeviceChange, (e, t, n) => {
                t_.stop(),
                    L.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tt.on(O.bg.VolumeChange, (e, t) => {
                L.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tt.on(O.bg.DesktopSourceEnd, (e, t) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tt.on(O.bg.AudioPermission, (e) => {
                (tB = !0), L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tt.on(O.bg.VideoPermission, (e) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tt.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ex.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eQ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != w.A.processUtils.setCrashReason;
                try {
                    await eR.default.track(
                        eO.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eQ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eQ.info("Relaunching app due to voice watchdog timeout"),
                    await w.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    w.A.app.relaunch());
            }),
            tt.on(O.bg.VideoInputInitialized, (e) => {
                eR.default.track(eO.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ek.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eH.A.getMediaSessionId(),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            tt.on(O.bg.AudioInputInitialized, (e) => {
                eR.default.track(eO.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ek.A.Millis.SECOND),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            tt.on(O.bg.ClipsRecordingRestartNeeded, () => {
                L.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tt.on(O.bg.ClipsInitFailure, (e, t) => {
                L.h.wait(() => {
                    L.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            tt.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && M.c1(t), (a = null));
            }),
            tt.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tt.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tt.on(O.bg.NativeScreenSharePickerError, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tt.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                eR.default.track(eO.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tt.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tt.on(O.bg.ConnectionStats, (e) => {
                L.h.dispatch({
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
            tt.on(O.bg.VoiceProcessingError, ni),
            tt.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nk(e);
                null !== t && eR.default.track(eO.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tt.setOnVideoContainerResized((e, t, n) => {
                L.h.wait(() =>
                    L.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nO(),
            o.reset(),
            (0, eL.w)().then((e) => {
                null != e && ((tK = e.gpu_brand), (t$ = e.has_intel_hybrid_igpu), (tz = e.gpu_count));
            }),
            tt.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (h = e), tt.eachConnection(no), i.emitChange();
            }),
            null != (e = b.w.get("audio")) && (b.w.set(eJ, { [eZ.x.DEFAULT]: e }), b.w.remove("audio")),
            (tn = b.w.get(eJ) ?? {}),
            S().each(tn, (e) => {
                S().defaultsDeep(e, e8()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eG.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tt.supports(eZ.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 1 &&
                        ((e.audioMixerSettingsVersion = 1), (e.audioMixerSettings = { ...e$.b })),
                    (0, m.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nh(),
            ((0, m.isWindows)() || (0, m.isLinux)() || (0, m.isMac)()) && !__OVERLAY__ && !tb && !tD
                ? ((tb = !0), nD())
                : (0, m.isWeb)() && tt.supports(eZ.O5.NOISE_CANCELLATION)
                  ? ((tD = !0), i.emitChange())
                  : (0, m.isWeb)() && n_({ noiseCancellation: !1 }),
            (0, m.isLinux)() && nL(),
            nN(),
            (0, m.isDesktop)() && m.isPlatformEmbedded && !t1)
        ) {
            t1 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eZ.tl;
                let n = nk(t);
                null !== n && eR.default.track(eO.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eZ.tl);
            };
            setTimeout(e, eZ.tl);
        }
        (0, m.isWindows)() &&
            m.isPlatformEmbedded &&
            null === tl &&
            tt
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tl = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eQ.error("Failed to parse codec survey", e), (tl = !1);
                    }
                })
                .catch((e) => {
                    eQ.error("Failed to get codec survey", e), (tl = !1);
                })
                .finally(() => {
                    L.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, m.isAndroid)(),
            (tW = {
                [eZ.O5.VIDEO]: tt.supports(eZ.O5.VIDEO),
                [eZ.O5.DESKTOP_CAPTURE]: tt.supports(eZ.O5.DESKTOP_CAPTURE),
                [eZ.O5.HYBRID_VIDEO]: tt.supports(eZ.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eF.default, eV.A, eB.A, ej.A, k.Ay, B.A, eH.A, H.Ay, ew.A, eY.default, eW.A);
    }
    supports(e) {
        return tt.supports(e);
    }
    supportsInApp(e) {
        return tW[e] || tt.supports(e);
    }
    isSupported() {
        return tt.supported();
    }
    isNoiseSuppressionSupported() {
        return tt.supports(eZ.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nb();
    }
    isNoiseCancellationError() {
        return tx;
    }
    isAutomaticGainControlSupported() {
        return tt.supports(eZ.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nd() && (tt.supports(eZ.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eZ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tt.supports(eZ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nb();
    }
    isAecDumpSupported() {
        return tt.supports(eZ.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tt.supports(eZ.O5.VIDEO) && tt.supports(eZ.O5.SIMULCAST);
    }
    getAecDump() {
        return t5().aecDumpEnabled;
    }
    getMediaEngine() {
        return tt;
    }
    getVideoComponent() {
        return tt.Video;
    }
    getCameraComponent() {
        return tt.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tM;
    }
    isEnabled() {
        return tr;
    }
    isMute() {
        return this.isSelfMute() || th;
    }
    isDeaf() {
        return this.isSelfDeaf() || tE;
    }
    isServerMute() {
        return th;
    }
    isServerDeaf() {
        return tE;
    }
    getAudioMixerSettings() {
        return t5().audioMixerSettings;
    }
    hasContext(e) {
        return null != tn[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return e === eZ.x.DEFAULT && tf;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t5(e).mute ||
            !eC.A.didHavePermission(eK.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eZ.x.DEFAULT && tp)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tI;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tI = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
            t = tZ && "voice_isolation" !== this.getSystemMicrophoneMode() && t5(e).mode === eO.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eB.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tq;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return !this.isSupported() || t5(e).deaf;
    }
    isVideoEnabled() {
        return tm && tC;
    }
    isVideoAvailable() {
        return Object.values(td).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tC;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.STREAM;
        return ta === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.STREAM;
        return ta === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return e !== eF.default.getId() && (t5(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tt.supports(eZ.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return t5(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return t5(t).videoToggleStateMap[e] ?? eO.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return t === eZ.x.DEFAULT && tj.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return e === eZ.x.DEFAULT && tj.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tk;
    }
    isNativeAudioPermissionReady() {
        return tB;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ta;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return to;
    }
    isH264MfDecodeAvailable() {
        return tl;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT,
            n = t5(t).localPans[e];
        return null != n ? n : e0;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT,
            n = t === eZ.x.STREAM ? eZ.Cn : eZ.Hz,
            i = t5(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t5().inputVolume;
    }
    getOutputVolume() {
        return t5().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return t5(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return t5(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tn, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eO.TBI.PUSH_TO_TALK && ti.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nA(tu, t5().inputDeviceId);
    }
    getOutputDeviceId() {
        return nA(tc, t5().outputDeviceId);
    }
    getVideoDeviceId() {
        return nA(td, t5().videoDeviceId);
    }
    getInputDevices() {
        return tu;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return td;
    }
    getEchoCancellation() {
        let e = t5();
        return eB.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tt.supports(eZ.O5.SIDECHAIN_COMPRESSION) && t5().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t5().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t5().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tF && tF;
    }
    getOpenH264Enabled() {
        return (0, m.isLinux)() && t5().openH264Enabled;
    }
    getLoopback() {
        return tY.size > 0;
    }
    getLoopbackReasons() {
        return tY;
    }
    getNoiseSuppression() {
        let e = t5();
        return eB.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t5();
        return eB.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t5().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t5().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t5().silenceWarning;
    }
    getDebugLogging() {
        return tt.getDebugLogging();
    }
    getQoS() {
        return t5().qos;
    }
    getAttenuation() {
        return t5().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t5().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t5().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nc() && t5().automaticAudioSubsystem ? eZ.rB.AUTOMATIC : tt.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tt.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t5().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eq.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return t5(e);
    }
    getState() {
        return {
            settingsByContext: tn,
            inputDevices: tu,
            outputDevices: tc,
            appSupported: tW,
            krispModuleLoaded: tD,
            krispFatalError: tL,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: ta,
        };
    }
    getInputDetectedThisConnection() {
        return tN;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tv;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return m.isPlatformEmbedded || this.getMode() !== eO.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tt.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ts;
    }
    getVideoHook() {
        return t5().videoHook;
    }
    supportsVideoHook() {
        return tt.supports(eZ.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t5().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tt.supports(eZ.O5.EXPERIMENTAL_SOUNDSHARE) && v().satisfies(w.A?.os.release, eo.$x);
    }
    supportsHookSoundshare() {
        return (0, m.isWindows)() && tt.supports(eZ.O5.SOUNDSHARE) && v().satisfies(w.A?.os.release, eo.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t5().useSystemScreensharePicker,
            n = (0, m.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tt.supports(eZ.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t0;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eZ.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eZ.x.STREAM && "streamer" === t && (0, m.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tJ;
    }
    getSpeakingWhileMuted() {
        return tT;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tw;
    }
    getKrispVadActivationThreshold() {
        return t5().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tQ;
    }
    setHasActiveCallKitCall(e) {
        tQ = e;
    }
    supportsScreenSoundshare() {
        return (0, m.isMac)()
            ? tt.supports(eZ.O5.SOUNDSHARE) && v().satisfies(w.A?.os.release, eo.P$) && nu()
            : (0, m.isWindows)()
              ? tt.supports(eZ.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, m.isLinux)() && tt.supports(eZ.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, m.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tG[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, m.isMac)() || (0, m.isIOS)()) return h;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
            t = this.supports(eZ.O5.VIDEO)
                ? [{ rid: "100", type: e === eZ.x.DEFAULT ? eZ.mI.VIDEO : eZ.mI.SCREEN, quality: eZ.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eZ.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eZ.mI.VIDEO, quality: eZ.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, m.isWeb)() };
        return tt.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tU &&
            ((tU = !0),
            (0, m.isWeb)() &&
                tt.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eQ.warn("DAVE preload failed:", e), eU.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tt.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tK;
    }
}
function nk(e) {
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
(i = new nx(L.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && ne(r, null), null != t || null == n)) {
            tO = !1;
            return;
        }
        if (tO) return;
        tO = !0;
        let s = t5();
        (s.mute || s.deaf) && (n_({ deaf: !1, mute: !1 }), tt.eachConnection(t9));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (th = t.mute || t.suppress), (tE = t.deaf), tt.eachConnection(t9);
                let e = null != t.guildId && null != t.channelId && null != tP && tP !== t.channelId,
                    n = !tO && null == t.channelId;
                return ne(!e && !n && tm), (tP = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eF.default.getId() || null != eH.A.getChannelId() || ne(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (th = !1), (tE = !1);
        let t = t5();
        nc() && (nd() ? nw(eZ.rB.AUTOMATIC) : t.automaticAudioSubsystem && nM()),
            tt.supports(eZ.O5.OFFLOAD_ADM_CONTROLS) && tt.setOffloadAdmControls(!0),
            (0, m.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tt.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nI(t.inputDeviceId),
            ny();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, m.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eO.S7L.CONNECTING:
                nf();
                break;
            case eO.S7L.RTC_CONNECTING:
                (tv = !1), (l = void 0), (u = void 0), (tN = !1), (tZ = !1), tX.stop(), tR.stop(), o.reset();
                break;
            case eO.S7L.RTC_CONNECTED:
                ne();
                break;
            case eO.S7L.DISCONNECTED:
                (t2 = {}),
                    (function () {
                        if (0 === tj.size) return;
                        let e = eZ.x.DEFAULT,
                            { disabledLocalVideos: t } = t5(e);
                        tj.forEach((n) => {
                            I()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tt.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tj.clear(),
                            n_({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nN();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tf = t), tt.eachConnection(t9);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t5(t);
        if (t === eZ.x.DEFAULT && (eC.A.requestPermission(eK.iL.AUDIO), tp)) return !1;
        (i = !r && !i) || (r = !1), n || (tI = !0), n_({ mute: i, deaf: r }, t), tt.eachConnection(t9);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        n_({ mute: n }, t), i || (tI = !0), tt.eachConnection(t9);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        n_({ deaf: !t5(t).deaf }, t), tt.eachConnection(t9);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eF.default.getId()) return;
        let { localMutes: i } = t5(t);
        i[n] ? delete i[n] : (i[n] = !0),
            n_({ localMutes: i }, t),
            tt.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        I()(!(r && s), "These are not allowed to both be true.");
        let a = i === eO.bb8.DISABLED,
            { disabledLocalVideos: o } = t5(t),
            l = o[n] ?? !1,
            u = tj.has(n),
            c = i === eO.bb8.AUTO_ENABLED || i === eO.bb8.MANUAL_ENABLED;
        eQ.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            I()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eZ.x.DEFAULT,
            h = s && d && _,
            f = r && d && _;
        eQ.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${h} isManualToggleByUser=${f}`);
        let { videoToggleStateMap: p } = t5(t);
        if (
            (p[n] === eO.bb8.AUTO_PROBING &&
                i === eO.bb8.AUTO_ENABLED &&
                (0, ey.A)(n, a ? eZ.Al.AUTO_DISABLE : eZ.Al.AUTO_ENABLE, c),
            (p[n] = i),
            n_({ videoToggleStateMap: p }, t, r),
            i === eO.bb8.AUTO_PROBING
                ? eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tH ||
                (eQ.info(`isAutoDisableAllowed=${tH} - disabling VideoHealthManager`),
                eH.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            h)
        ) {
            if ((!a && !u) || (a && !tH)) return;
            (0, ey.A)(n, a ? eZ.Al.AUTO_DISABLE : eZ.Al.AUTO_ENABLE, c), a ? tj.add(n) : tj.delete(n);
        } else
            f &&
                (u && !a
                    ? (eQ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tH = !1),
                      eH.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, ey.A)(n, eZ.Al.MANUAL_REENABLE, c))
                    : (0, ey.A)(n, a ? eZ.Al.MANUAL_DISABLE : eZ.Al.MANUAL_ENABLE, c));
        _ && !a && tj.delete(n),
            a ? (o[n] = !0) : delete o[n],
            n_({ disabledLocalVideos: o }, t, r),
            tt.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eF.default.getId()) return;
        let r = t === eZ.x.STREAM ? eZ.Cn : eZ.Hz,
            { localVolumes: s } = t5(t);
        i === r ? delete s[n] : (s[n] = i),
            n_({ localVolumes: s }, t),
            tt.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        n_({ audioMixerSettings: n }, t),
            tt.setAudioMixerOptions(n),
            tt.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eZ.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t5(t);
        (s[n] = { left: i, right: r }), n_({ localPans: s }, t), tt.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        n_({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tt.eachConnection(t7);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        n_({ inputVolume: t8(t) }), tt.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        n_({ outputVolume: t }), tt.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nA(tu, t)),
            (to = performance.now()),
            n_({ inputDeviceId: t }),
            nT(t),
            tt.eachConnection(no),
            (l = void 0),
            (u = void 0),
            tX.stop(),
            (tZ = !1);
        let { resetSilenceWarningOnDeviceChange: n } = e_.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tN = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        n_({ outputDeviceId: (t = nA(tc, t)) }), tt.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        n_({ activeInputProfile: t });
        let n = t5();
        tt.eachConnection((e) => {
            t7(e), no(e);
        }),
            tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nR();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = n_({ echoCancellation: e.enabled });
        tt.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nR(), nv(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = n_({ sidechainCompression: e.enabled })), tt.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = n_({ sidechainCompressionStrength: e.strength });
        tt.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tY.add(n) : tY.delete(n), nR();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = n_({ noiseSuppression: e.enabled });
        tt.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nR(), nv(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = n_({ automaticGainControl: e.enabled });
        tt.eachConnection((e) => ns(e, t.automaticGainControl)), nR(), nv(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = n_({ noiseCancellation: e.enabled });
        tt.eachConnection((e) => na(e, t.noiseCancellation)), nR(), nv(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eN.A.setKrispModelOverride(e.model), (_ = e.model), nR();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        n_({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tt.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), eN.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, m.isWeb)() || ((tM = e.enabled), tt.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        n_({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        n_({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        n_({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = n_({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tt.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        n_({ qos: t }), tt.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tu;
        if (
            ((tu = ng(e, { deviceType: eZ.oh.AUDIO_INPUT, defaultName: eX.intl.string(eX.t["/QIjDA"]) })),
            !S().isEqual(tu, t))
        ) {
            let e = t5();
            nT(nA(tu, e.inputDeviceId)), tt.eachConnection(no);
        }
        !(function (e) {
            let t = tc;
            if (
                ((tc = ng(e, { deviceType: eZ.oh.AUDIO_OUTPUT, defaultName: eX.intl.string(eX.t.xlUg0v) })),
                !S().isEqual(tc, t))
            ) {
                let e = t5(),
                    n = nA(tc, e.outputDeviceId);
                tt.setAudioOutputDevice(n);
                let i = nS(t),
                    r = nS(tc);
                i !== r &&
                    tt.eachConnection((e) => {
                        e.context === eZ.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tC = e.videoDevices.length > 0;
        let n = td;
        if (
            ((td = ng(e, { deviceType: eZ.oh.VIDEO_INPUT, defaultName: eX.intl.string(eX.t.WKWARY) })),
            tm && !S().isEqual(td, n))
        ) {
            let e = void 0 !== td[tg],
                t = tg === eZ.dx && n[eZ.dx]?.disabled,
                i = "Firefox" === C().name && "" === tg && n[tg]?.name === "Default" && !n[tg]?.disabled;
            ne(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        n_({ inputVolume: t8(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        b.w.remove(eJ), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tv = !0 !== tN && !t), t)) (tN = !0), (tZ = !1), tX.stop(), tR.stop();
        else if (t5().mode === eO.TBI.VOICE_ACTIVITY && tN) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = e_.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tX.start(e6, () => {
                    eR.default.track(eO.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tu[nA(tu, t5().inputDeviceId)]?.name,
                        rtc_connection_id: eH.A.getRTCConnectionId(),
                    }),
                        (tZ = !0),
                        i.emitChange();
                }),
                null != t &&
                    tR.start(t * ek.A.Millis.MINUTE, () => {
                        (tN = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nw(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        n_({ bypassSystemInputProcessing: t }), tt.setAudioInputBypassSystemProcessing(t), nv(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tr = e.enabled), e.unmute && n_({ mute: !1, deaf: !1 }), tt.eachConnection(t9);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eC.A.requestPermission(eK.iL.CAMERA), ne(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tr = !1), tt.eachConnection(t9);
                    break;
                case "video":
                    ne(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? eZ.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = ex.A.getPidFromDesktopSource(i);
            m.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nC(l, r)),
                a !== ta && (null != s && tt.setGoLiveSource(null, ta), (ta = a)),
                ne(a === eZ.x.STREAM && tm, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eZ.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                s = e === eZ.x.STREAM && tm,
                a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            ne(s, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
        } else ne(tm, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        n_({ videoDeviceId: (t = nA(td, t)) }), ne();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ts !== e.required && ((ts = e.required), e.required || tt.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nP,
    USER_SETTINGS_MODAL_SET_SECTION: nP,
    CERTIFIED_DEVICES_SET: function () {
        return tt.eachConnection(no), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        ti.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        ti.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tn = t.settingsByContext),
            (tu = t.inputDevices),
            (tc = t.outputDevices),
            (tW = t.appSupported),
            (tD = t.krispModuleLoaded),
            (tL = t.krispFatalError),
            (c = t.krispVersion),
            (ta = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = j.A.isEnabled();
        if (t === eO.g6G.BACKGROUND && tm && !n) (ty = !0), ne(!1);
        else {
            if (t !== eO.g6G.ACTIVE || !ty) return !1;
            (ty = !1), ne(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tt.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tp) return !1;
        (tp = n), tt.eachConnection(t9);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eK.hL.ACCEPTED;
        switch (n) {
            case eK.iL.AUDIO:
                (tB = !0), tt.eachConnection(t9);
                break;
            case eK.iL.CAMERA:
                !i && tm && ne(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tt.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = n_({ aecDumpEnabled: t });
        tt.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        n_({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tn = Object.values(eZ.x).reduce((e, n) => {
            let i = e8();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            b.w.set(eJ, tn),
            nh();
    },
    CHANNEL_DELETE: function () {
        if ((!tm && null == s) || null != eH.A.getRTCConnectionId()) return !1;
        ne(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eZ.CO.KRISP_CPU_OVERUSE) {
            (t2.noiseCancellation = !1), (t2.noiseSuppression = !0);
            let e = t5();
            return tt.eachConnection((t) => na(t, e.noiseCancellation)), nR(), nv(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eZ.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t2.modeOptions = { vadUseKrisp: !1 }), tt.eachConnection((e) => t7(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tx && ((tx = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tt.applyMediaFilterSettings(t).finally(() => {
            (tk = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tk = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tk = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== ez.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        ny(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, G.Ao)() || null == w.A || (a?.desktopSource.id === t && a.quality === r)) return !1;
        null != a &&
            (tt.setClipsSource(null),
            (0, m.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? M.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t5().videoHook && M.c1(a.desktopSource.sourcePid)));
        let s = ex.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nC(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = t3("MediaEngineStore clips"),
            c = t5().videoHook,
            d = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eE.getConfig({ location: "handleClipsInit" }).enabled;
        tt.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: nl(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nu(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e1,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eZ.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), tt.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tq = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tG[t] = { active: n, available: i };
    },
})),
    (o = new eu(tt, i));
let nU = i;

"use strict";
let i, r, s, a, o, l, d, _, u, c, E;
n.d(t, { Ay: () => nR }), n(323874), n(14289), n(35956), n(321073);
var h = n(823598),
    m = n(626584),
    f = n(723702),
    g = n(19575);
(0, h.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (f.isPlatformEmbedded) {
                let e = (0, h.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new m.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
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
var p = n(284009),
    A = n.n(p),
    I = n(735438),
    T = n.n(I),
    S = n(481613),
    N = n.n(S),
    C = n(299855),
    R = n.n(C),
    O = n(17928),
    y = n(205693),
    v = n(506774),
    D = n(451988),
    L = n(228366),
    b = n(77729),
    w = n(719129),
    P = n(894539),
    k = n(124838),
    M = n(274372),
    U = n(915618),
    x = n(572164),
    G = n(680725),
    V = n(487329),
    F = n(736056),
    B = n(6494),
    H = n(328153),
    j = n(540305),
    W = n(945810);
let Y = {
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
    K = (0, W.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: { noiseCancellationDuringProcessing: !1, noiseCancellationConfig: { useAGC2: !1 } },
        variations: {
            1: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: { useAGC2: !1 } },
            2: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: Y, vadKrispActivationThreshold: 0.5 },
            3: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: Y, vadKrispActivationThreshold: 0.7 },
            4: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: Y, vadKrispActivationThreshold: 0.8 },
            5: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: Y, vadKrispActivationThreshold: 0.9 },
            6: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: Y, vadKrispActivationThreshold: 0.95 },
        },
    });
function z(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? K.definition.defaultConfig : K.getConfig({ location: t });
}
let $ = (0, W.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    q = { probeAudioEffects: !1 },
    X = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: q,
        variations: { 1: { ...q, probeAudioEffects: !0 } },
    }),
    Z = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Q = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var J = n(250105);
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
    er = n(118356),
    es = n(325278);
let ea = new er.Vy("InputWatcher");
class eo {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new D.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(y.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ei.uF)() && R().satisfies(b.A?.os.release, es.PH))
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
                ea.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            ea.info("Silence:", e),
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
let el = (0, W.mj)({
        kind: "user",
        name: "2025-10-krisp-at-end",
        defaultConfig: { noiseCancellationAfterProcessing: !1, vadAfterWebrtc: !1 },
        variations: {
            1: { noiseCancellationAfterProcessing: !0, vadAfterWebrtc: !1 },
            2: { noiseCancellationAfterProcessing: !1, vadAfterWebrtc: !0 },
            3: { noiseCancellationAfterProcessing: !0, vadAfterWebrtc: !0 },
        },
    }),
    ed = (0, W.mj)({
        name: "2026-03-linux-vulkan-capture",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    e_ = (0, J.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eu = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var ec = n(801644);
let eE = (0, J.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eh = (0, W.mj)({
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
    ef = (0, J.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eI(e) {
    return eA.getConfig({ location: e });
}
let eT = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eS = n(75076),
    eN = n(91777),
    eC = n(559633),
    eR = n(205106),
    eO = n(954571),
    ey = n(652215);
let ev = new er.Vy("AudioEffects");
async function eD(e, t, n) {
    if (!(0, ei.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            L.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eO.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        ev.error("Failed to probe audio effects for device", e),
            eO.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eL = n(967347),
    eb = n(879172),
    ew = n(617617),
    eP = n(499156),
    ek = n(353835),
    eM = n(927813),
    eU = n(38405),
    ex = n(350535),
    eG = n(495544),
    eV = n(131319),
    eF = n(347481),
    eB = n(734057),
    eH = n(763827),
    ej = n(287809),
    eW = n(117549),
    eY = n(765682),
    eK = n(355097),
    ez = n(509381),
    e$ = n(731854),
    eq = n(985018);
let eX = new m.A("MediaEngineStore"),
    eZ = "MediaEngineStore",
    eQ = { left: 1, right: 1 },
    eJ = 5 * eM.A.Millis.SECOND,
    e0 = 2 * eM.A.Millis.SECOND,
    e1 = 30 * eM.A.Millis.SECOND,
    e2 = +eM.A.Millis.MINUTE,
    e3 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e6 = 0;
function e4() {
    return {
        mode: ey.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: f.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: e$.Hz,
        outputVolume: e$.Hz,
        inputDeviceId: e$.dx,
        outputDeviceId: e$.dx,
        videoDeviceId: e$.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e5.supports(e$.O5.VIDEO_HOOK),
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
        [ez.m.CUSTOM]: {},
        [ez.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ez.m.STUDIO]: {
            mode: ey.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e5 = (0, y.hB)((0, y.WI)());
eX.enableNativeLogger(!0);
let e8 = {},
    e9 = new Set([e$.x.DEFAULT]),
    te = e5.supports(e$.O5.AUTO_ENABLE),
    tt = !1,
    tn = e$.x.STREAM,
    ti = performance.now(),
    tr = null,
    ts = { [e$.dx]: na("No Input Devices") },
    ta = { [e$.dx]: na("No Output Devices") },
    to = { [e$.dx]: na("No Video Devices") },
    tl = new D.Ep(),
    td = !1,
    t_ = !1,
    tu = !1,
    tc = !1,
    tE = !1,
    th = e$.qe,
    tm = e$.qe,
    tf = !1,
    tg = !1,
    tp = new D.Ep(),
    tA = !1,
    tI = !1,
    tT = !1,
    tS = !1,
    tN = new D.Ep(),
    tC = !1,
    tR = !1,
    tO = !1,
    ty = [],
    tv = !1,
    tD = null,
    tL = !1,
    tb = !1,
    tw = !1,
    tP = {},
    tk = null,
    tM = null,
    tU = !1;
eN.A.hasPermission(eY.iL.AUDIO, { showAuthorizationError: !1 }),
    eN.A.hasPermission(eY.iL.CAMERA, { showAuthorizationError: !1 });
let tx = new Set(),
    tG = !1,
    tV = new Set(),
    tF = {},
    tB = null,
    tH = null,
    tj = !0,
    tW = !1,
    tY = new D.Ep(),
    tK = !1,
    tz = !1,
    t$ = !1,
    tq = !1;
function tX(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function tZ() {
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
function tQ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = e8[e];
    return null == t && ((t = e4()), (e8[e] = t)), t;
}
function tJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = tQ(e),
        n = e7[t.activeInputProfile ?? ez.m.CUSTOM],
        i = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == i.vadDuringPreProcess &&
            (i.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eE.definition.defaultConfig : eE.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == i.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (i.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: i };
}
function t0(e) {
    let t = tJ(e.context),
        n = t.mode;
    e.context === e$.x.DEFAULT && (0, eu.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eP.A.getConfig({ location: "setInputMode" }),
        r = i && n === ey.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && (tO || !1),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.Hz;
    return T().clamp(e, 0, t);
}
function t2(e) {
    let t = tJ(e.context),
        n = !te || t.mute || t.deaf;
    e.context === e$.x.DEFAULT
        ? (n = n || td || t_ || tu || !eN.A.didHavePermission(eY.iL.AUDIO))
        : e.context === e$.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === e$.x.DEFAULT && P.A.updateNativeMute();
}
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? w.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && tJ().videoHook && w.c1(n.desktopSource.sourcePid),
            e5.setGoLiveSource(null, tn)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e5.setGoLiveSource(null, tn),
        tE || e)
    ) {
        let t = tJ().videoDeviceId;
        tE && t === e$.dx && tm === e$.dx && th !== e$.qe ? (t = th) : (tm = t),
            (th = (tE = e) ? nl(to, t) : e$.qe),
            e5.setVideoInputDevice(th);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tX("MediaEngineStore go live"),
                r = tJ().videoHook,
                s = t9(),
                a = s ? ((0, f.isWindows)() && R().satisfies(b.A?.os.release, es.fG) ? es.zl : es.eg) : 0,
                o = !1;
            (0, f.isWindows)() &&
                a >= es.zl &&
                (o =
                    !0 === tH
                        ? ep.getConfig({ location: "updateVideo" }).enabled
                        : eg.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !Q.getConfig({ location: "updateVideo" }).enabled,
                d = r && em.getConfig({ location: "updateVideo" }).enabled;
            e5.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, f.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ne(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eJ,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ee.definition.defaultConfig : ee.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: d,
                    },
                    quality: e,
                },
                tn,
            );
        }
        null != t.cameraSource &&
            e5.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tn,
            );
    }
}
function t6(e) {
    switch (e) {
        case e$.CO.CPU_OVERUSE:
            return V.B6.NoiseCancellerCpuOveruse;
        case e$.CO.FAILED:
            return V.B6.NoiseCancellerFailed;
        case e$.CO.VAD_CPU_OVERUSE:
            return V.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t4(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function t7(e, t) {
    e.setAutomaticGainControl(t4(t));
}
function t5(e, t) {
    let n = (0, eR.A)(t, i.getSystemMicrophoneMode());
    n !== t && eX.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (function (e) {
        let { location: t, disable: n = !1 } = e;
        return n ? el.definition.defaultConfig : el.getConfig({ location: t });
    })({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function t8(e) {
    let t = tJ(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eF.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eF.A.hasNoiseSuppression(n) || t.noiseSuppression),
        t7(e, eF.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        t5(e, t.noiseCancellation),
        (0, f.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t9() {
    return (0, f.isWindows)() && R().satisfies(b.A?.os.release, es.yg);
}
function ne() {
    return (0, f.isMac)() && e5.supports(e$.O5.SCREEN_CAPTURE_KIT) && R().satisfies(b.A?.os.release, es.e);
}
function nt() {
    return (
        (0, f.isWindows)() &&
        e5.supports(e$.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e5.supports(e$.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nn() {
    return e5.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ni(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tQ(t);
    return Object.assign(i, e), !__OVERLAY__ && n && v.w.set(eZ, e8), i;
}
function nr() {
    let e = tJ();
    n_(e.inputDeviceId),
        e5.setAudioOutputDevice(e.outputDeviceId),
        t3(),
        e5.setInputVolume(e.inputVolume),
        e5.setOutputVolume(e.outputVolume),
        e5.setAecDump(e.aecDumpEnabled),
        e5.setSidechainCompression(e.sidechainCompression),
        e5.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e5.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function ns() {
    te || e5.enable().then(() => L.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function na(e) {
    return { id: e$.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function no(e, t) {
    if (0 === e.length) {
        let e = na(t);
        return { [e.id]: e };
    }
    return T()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
            effects: e.effects,
        }))
        .keyBy("id")
        .value();
}
function nl(e, t) {
    let n = e[t] ?? e[e$.dx] ?? T()(e).values().first();
    return null != n ? n.id : t;
}
function nd(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = ts[e];
    t?.guid != null && eD(t.guid, e, e5);
}
function n_(e) {
    e5.setAudioInputDevice(e), nd(e);
}
function nu(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eK.W.USER ? e$.x.DEFAULT : e$.x.STREAM,
            r = i === e$.x.STREAM ? e$.Cn : e$.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = tJ(i);
        for (let [e, t] of Object.entries(s))
            null == (0, eb.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                e5.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e5.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        ni({ localMutes: a, localVolumes: o }, i);
    }
}
function nE(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eX.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ek.A.getAudioPid(e),
                    n = "";
                return null != t && (n = ek.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = s),
                (0, f.isWindows)() &&
                    n > 1 &&
                    w.GH(n, { soundshare_session: r }).then((e) => {
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
    return null != e && tJ().videoHook && w.GH(e), { soundshareId: null, soundshareSession: null };
}
function nh() {
    let e = e$.x.DEFAULT,
        { videoToggleStateMap: t } = tJ(e);
    for (let [e, n] of Object.entries(t)) n === ey.bb8.AUTO_PROBING && delete t[e];
    ni({ videoToggleStateMap: t }, e, !1);
}
function nm(e) {
    let t = tJ(),
        n = e5.getAudioSubsystem(),
        r = e5.getAudioLayer(),
        s = nl(ts, t.inputDeviceId),
        a = ts[s]?.name,
        o = (0, eR.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eO.default.track(ey.HAw.VOICE_PROCESSING, {
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
function nf() {
    let e = tJ(),
        t = tV.size > 0,
        n = e.inputDeviceId,
        i = eF.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eF.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = t4(eF.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    e5.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function ng() {
    if (!e5.supports(e$.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t$ = !0), (tz = e5.supports(e$.O5.GAMESCOPE_CAPTURE)));
}
async function np() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tO = !0),
            (_ = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (ty = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eX.warn(`Failed to load Krisp module: ${t.message}`), eU.A.captureException(t);
        let e = e$.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e$.CO.INITIALIZED : n;
        }
        eO.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), ni({ noiseCancellation: !1 });
    } finally {
        tR = !1;
    }
}
async function nA() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e3);
        if (null === i) return void eX.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await g.Ay.downloadOpenH264(
                e3,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eX.log("OpenH264 download status", e);
                },
            );
            eX.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eX.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eO.default.track(ey.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await g.Ay.cleanupUnusedOpenH264Files([s]);
            eX.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eX.error("OpenH264 download failed", e);
    }
}
function nI(e) {
    e === e$.rB.AUTOMATIC
        ? (ni({ automaticAudioSubsystem: !0 }), nT())
        : (ni({ automaticAudioSubsystem: !1 }), e5.setAudioSubsystem(e));
}
function nT() {
    e5.queueAudioSubsystem(e$.rB.EXPERIMENTAL);
}
function nS(e) {
    let { section: t } = e;
    return t === ey.nc_.VOICE && ns(), !1;
}
class nN extends O.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tl.start(e1, () => {
                eX.error("Device enumeration timed out"), eO.default.track(ey.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            e5.on(y.bg.Connection, (e) => {
                let t;
                t0(e), t2(e), t8(e);
                let n = tJ();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e$.fd.H265_HARDWARE_ONLY, !0),
                          (null != tM
                              ? tM
                              : "u" > typeof window
                                ? (tM = tZ().then((e) => ((tk = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e$.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e$.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e$.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e$.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = k.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e$.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e$.x.STREAM)
                ) {
                    let t = nu(ta);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isLinux)()) e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, f.isIOS)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isAndroid)() && !1) {
                    let { enabled: t } = $.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, f.isWeb)()) {
                    let { enabled: t } = Z.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e$.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    tB?.startsWith("AMD") &&
                    eI("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tB?.startsWith("Intel") &&
                    eT.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tB?.startsWith("Qualcomm") &&
                    eI("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                e5.setHasFullbandPerformance(null === (t = (0, G.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(e$.X1),
                (n = tJ(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eG.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eG.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    L.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e$.x.DEFAULT &&
                        ((tg = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tg;
                            (tg = !0),
                                e && i.emitChange(),
                                tp.start(e0, () => {
                                    (tg = !1), i.emitChange();
                                });
                        })),
                    e.on(y.yq.DesktopSourceEnd, (t, n) => {
                        L.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(y.yq.InteractionRequired, (e) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(y.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            eO.default.track(ey.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, j.A)(s?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, (e) => {
                        eX.warn(`noisecancellererror event: ${e}`),
                            (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: t6(e) }),
                            (tL = !0),
                            eO.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                            L.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                            L.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                            L.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                    }),
                    e.on(y.yq.VoiceActivityDetectorError, (e) => {
                        eX.warn(`voiceactivitydetectorerror event: ${e}`),
                            (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: t6(e) }),
                            eO.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                            L.h.dispatch({
                                type: "AUDIO_SET_MODE",
                                context: e$.x.DEFAULT,
                                mode: ey.TBI.VOICE_ACTIVITY,
                                options: { ...tJ(e$.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                            }),
                            L.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                    }),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eO.default.track(ey.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eV.A.bitrate),
                    e.applyVideoQualityMode(eW.A.mode),
                    (0, f.isWindows)() &&
                        e5.supports(e$.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e5.setAsyncVideoInputDeviceInit(!0);
            }),
            e5.on(y.bg.DeviceChange, (e, t, n) => {
                tl.stop(),
                    L.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            e5.on(y.bg.VolumeChange, (e, t) => {
                L.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e5.on(y.bg.DesktopSourceEnd, (e, t) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e5.on(y.bg.AudioPermission, (e) => {
                (tU = !0), L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            e5.on(y.bg.VideoPermission, (e) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e5.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ek.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eX.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    ef.getConfig({ location: "watchdog_timeout" }).enabled && null != b.A.processUtils.setCrashReason;
                try {
                    await eO.default.track(
                        ey.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eX.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eX.info("Relaunching app due to voice watchdog timeout"),
                    await b.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    b.A.app.relaunch());
            }),
            e5.on(y.bg.VideoInputInitialized, (e) => {
                eO.default.track(ey.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eM.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eH.A.getMediaSessionId(),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e5.on(y.bg.AudioInputInitialized, (e) => {
                eO.default.track(ey.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eM.A.Millis.SECOND),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e5.on(y.bg.ClipsRecordingRestartNeeded, () => {
                L.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e5.on(y.bg.ClipsInitFailure, (e, t) => {
                L.h.wait(() => {
                    L.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            e5.on(y.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && w.c1(t), (a = null));
            }),
            e5.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e5.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e5.on(y.bg.NativeScreenSharePickerError, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e5.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eO.default.track(ey.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e5.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e5.on(y.bg.ConnectionStats, (e) => {
                L.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e6++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e5.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = nC(e);
                null !== t && eO.default.track(ey.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e5.setOnVideoContainerResized((e, t, n) => {
                L.h.wait(() =>
                    L.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            ng(),
            o.reset(),
            (0, eL.w)().then((e) => {
                null != e && ((tB = e.gpu_brand), (tH = e.has_intel_hybrid_igpu));
            }),
            e5.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), e5.eachConnection(t8), i.emitChange();
            }),
            null != (e = v.w.get("audio")) && (v.w.set(eZ, { [e$.x.DEFAULT]: e }), v.w.remove("audio")),
            (e8 = v.w.get(eZ) ?? {}),
            T().each(e8, (e) => {
                T().defaultsDeep(e, e4()),
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
                    e5.supports(e$.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nr(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tR && !tO
                ? ((tR = !0), np())
                : (0, f.isWeb)() && e5.supports(e$.O5.NOISE_CANCELLATION)
                  ? ((tO = !0), i.emitChange())
                  : (0, f.isWeb)() && ni({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nA(),
            nh(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !tq)
        ) {
            tq = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = e$.tl;
                let n = nC(t);
                null !== n && eO.default.track(ey.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, e$.tl);
            };
            setTimeout(e, e$.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tr &&
            e5
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tr = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eX.error("Failed to parse codec survey", e), (tr = !1);
                    }
                })
                .catch((e) => {
                    eX.error("Failed to get codec survey", e), (tr = !1);
                })
                .finally(() => {
                    L.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, f.isAndroid)(),
            (tF = {
                [e$.O5.VIDEO]: e5.supports(e$.O5.VIDEO),
                [e$.O5.DESKTOP_CAPTURE]: e5.supports(e$.O5.DESKTOP_CAPTURE),
                [e$.O5.HYBRID_VIDEO]: e5.supports(e$.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eG.default, eV.A, eF.A, eB.A, M.A, F.A, eH.A, H.Ay, ew.A, ej.default, eW.A);
    }
    supports(e) {
        return e5.supports(e);
    }
    supportsInApp(e) {
        return tF[e] || e5.supports(e);
    }
    isSupported() {
        return e5.supported();
    }
    isNoiseSuppressionSupported() {
        return e5.supports(e$.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return tO || !1;
    }
    isNoiseCancellationError() {
        return tL;
    }
    isAutomaticGainControlSupported() {
        return e5.supports(e$.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nn() && (e5.supports(e$.O5.LEGACY_AUDIO_SUBSYSTEM) || e5.supports(e$.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e5.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e5.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return tO || !1;
    }
    isAecDumpSupported() {
        return e5.supports(e$.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e5.supports(e$.O5.VIDEO) && e5.supports(e$.O5.SIMULCAST);
    }
    getAecDump() {
        return tJ().aecDumpEnabled;
    }
    getMediaEngine() {
        return e5;
    }
    getVideoComponent() {
        return e5.Video;
    }
    getCameraComponent() {
        return e5.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tv;
    }
    isEnabled() {
        return te;
    }
    isMute() {
        return this.isSelfMute() || td;
    }
    isDeaf() {
        return this.isSelfDeaf() || tc;
    }
    hasContext(e) {
        return null != e8[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && t_;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return (
            !this.isEnabled() ||
            tJ(e).mute ||
            !eN.A.didHavePermission(eY.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e$.x.DEFAULT && tu)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tf;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tf = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
            t = tW && "voice_isolation" !== this.getSystemMicrophoneMode() && tJ(e).mode === ey.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eF.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tj;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isSupported() || tJ(e).deaf;
    }
    isVideoEnabled() {
        return tE && tI;
    }
    isVideoAvailable() {
        return Object.values(to).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tI;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tn === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tn === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return e !== eG.default.getId() && (tJ(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e5.supports(e$.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return tJ(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return tJ(t).videoToggleStateMap[e] ?? ey.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t === e$.x.DEFAULT && tx.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tx.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tb;
    }
    isNativeAudioPermissionReady() {
        return tU;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tn;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ti;
    }
    isH264MfDecodeAvailable() {
        return tr;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = tJ(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            i = tJ(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return tJ().inputVolume;
    }
    getOutputVolume() {
        return tJ().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return tJ(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return tJ(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            T().each(e8, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ey.TBI.PUSH_TO_TALK && e9.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nl(ts, tJ().inputDeviceId);
    }
    getOutputDeviceId() {
        return nl(ta, tJ().outputDeviceId);
    }
    getVideoDeviceId() {
        return nl(to, tJ().videoDeviceId);
    }
    getInputDevices() {
        return ts;
    }
    getOutputDevices() {
        return ta;
    }
    getVideoDevices() {
        return to;
    }
    getEchoCancellation() {
        let e = tJ();
        return eF.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e5.supports(e$.O5.SIDECHAIN_COMPRESSION) && tJ().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tJ().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tJ().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tk && tk;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && tJ().openH264Enabled;
    }
    getLoopback() {
        return tV.size > 0;
    }
    getLoopbackReasons() {
        return tV;
    }
    getNoiseSuppression() {
        let e = tJ();
        return eF.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tJ();
        return eF.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tJ().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tJ().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return tJ().silenceWarning;
    }
    getDebugLogging() {
        return e5.getDebugLogging();
    }
    getQoS() {
        return tJ().qos;
    }
    getAttenuation() {
        return tJ().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tJ().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tJ().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nt() && tJ().automaticAudioSubsystem ? e$.rB.AUTOMATIC : e5.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e5.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tJ().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ez.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return tJ(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: ts,
            outputDevices: ta,
            appSupported: tF,
            krispModuleLoaded: tO,
            krispVersion: _,
            krispSuppressionLevel: u,
            goLiveSource: s,
            goLiveContext: tn,
        };
    }
    getInputDetectedThisConnection() {
        return tT;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tS;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== ey.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e5.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tt;
    }
    getVideoHook() {
        return tJ().videoHook;
    }
    supportsVideoHook() {
        return e5.supports(e$.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tJ().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e5.supports(e$.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(b.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && e5.supports(e$.O5.SOUNDSHARE) && R().satisfies(b.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tJ().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e5.supports(e$.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t$;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e$.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === e$.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eh.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (
            (function (e) {
                let { location: t } = e;
                return ed.getConfig({ location: t });
            })({ location: "handleReady" }).enabled && n.push("linux-vulkan"),
            n.join(",")
        );
    }
    getUseGamescopeCapture() {
        return tz;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return ty;
    }
    getKrispVadActivationThreshold() {
        return tJ().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tK;
    }
    setHasActiveCallKitCall(e) {
        tK = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? e5.supports(e$.O5.SOUNDSHARE) && R().satisfies(b.A?.os.release, es.P$) && ne()
            : (0, f.isWindows)()
              ? e5.supports(e$.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && e5.supports(e$.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tP[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
            t = this.supports(e$.O5.VIDEO)
                ? [{ rid: "100", type: e === e$.x.DEFAULT ? e$.mI.VIDEO : e$.mI.SCREEN, quality: e$.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e$.x.DEFAULT &&
                t.push({ rid: "50", type: e$.mI.VIDEO, quality: e$.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return e5.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tw &&
            ((tw = !0),
            (0, f.isWeb)() &&
                e5.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eX.warn("DAVE preload failed:", e), eU.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e5.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tB;
    }
}
function nC(e) {
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
(i = new nN(L.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t3(r, null), null != t || null == n)) {
            tC = !1;
            return;
        }
        if (tC) return;
        tC = !0;
        let s = tJ();
        (s.mute || s.deaf) && (ni({ deaf: !1, mute: !1 }), e5.eachConnection(t2));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (td = t.mute || t.suppress), (tc = t.deaf), e5.eachConnection(t2);
                let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
                    n = !tC && null == t.channelId;
                return t3(!e && !n && tE), (tD = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eG.default.getId() || null != eH.A.getChannelId() || t3(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (td = !1), (tc = !1);
        let t = tJ();
        nt() && (nn() ? nI(e$.rB.AUTOMATIC) : t.automaticAudioSubsystem && nT()),
            e5.supports(e$.O5.OFFLOAD_ADM_CONTROLS) && e5.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e5.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nd(t.inputDeviceId),
            nc();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ey.S7L.CONNECTING:
                ns();
                break;
            case ey.S7L.RTC_CONNECTING:
                (tS = !1), (l = void 0), (d = void 0), (tT = !1), (tW = !1), tY.stop(), tN.stop(), o.reset();
                break;
            case ey.S7L.RTC_CONNECTED:
                t3();
                break;
            case ey.S7L.DISCONNECTED:
                (function () {
                    if (0 === tx.size) return;
                    let e = e$.x.DEFAULT,
                        { disabledLocalVideos: t } = tJ(e);
                    tx.forEach((n) => {
                        A()(t[n], "If you are auto-disabled, then you are also disabled."),
                            delete t[n],
                            e5.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                    }),
                        tx.clear(),
                        ni({ disabledLocalVideos: t }, e, !1);
                })(),
                    nh();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (t_ = t), e5.eachConnection(t2);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = tJ(t);
        if (t === e$.x.DEFAULT && (eN.A.requestPermission(eY.iL.AUDIO), tu)) return !1;
        (i = !r && !i) || (r = !1), n || (tf = !0), ni({ mute: i, deaf: r }, t), e5.eachConnection(t2);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        ni({ mute: n }, t), i || (tf = !0), e5.eachConnection(t2);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        ni({ deaf: !tJ(t).deaf }, t), e5.eachConnection(t2);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eG.default.getId()) return;
        let { localMutes: i } = tJ(t);
        i[n] ? delete i[n] : (i[n] = !0),
            ni({ localMutes: i }, t),
            e5.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        A()(!(r && s), "These are not allowed to both be true.");
        let a = i === ey.bb8.DISABLED,
            { disabledLocalVideos: o } = tJ(t),
            l = o[n] ?? !1,
            d = tx.has(n),
            _ = i === ey.bb8.AUTO_ENABLED || i === ey.bb8.MANUAL_ENABLED;
        eX.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${d}, isVideoShown=${_}`),
            A()(!(d && !l), "If you are auto-disabled, then you are also disabled.");
        let u = a !== l,
            c = t === e$.x.DEFAULT,
            E = s && u && c,
            h = r && u && c;
        eX.info(`changed=${u} isDefaultContext=${c} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${h}`);
        let { videoToggleStateMap: m } = tJ(t);
        if (
            (m[n] === ey.bb8.AUTO_PROBING &&
                i === ey.bb8.AUTO_ENABLED &&
                (0, eS.A)(n, a ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, _),
            (m[n] = i),
            ni({ videoToggleStateMap: m }, t, r),
            i === ey.bb8.AUTO_PROBING
                ? eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tG ||
                (eX.info(`isAutoDisableAllowed=${tG} - disabling VideoHealthManager`),
                eH.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!a && !d) || (a && !tG)) return;
            (0, eS.A)(n, a ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, _), a ? tx.add(n) : tx.delete(n);
        } else
            h &&
                (d && !a
                    ? (eX.info("disallowing auto-disable for this session because of manual override by user"),
                      (tG = !1),
                      eH.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eS.A)(n, e$.Al.MANUAL_REENABLE, _))
                    : (0, eS.A)(n, a ? e$.Al.MANUAL_DISABLE : e$.Al.MANUAL_ENABLE, _));
        c && !a && tx.delete(n),
            a ? (o[n] = !0) : delete o[n],
            ni({ disabledLocalVideos: o }, t, r),
            e5.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eG.default.getId()) return;
        let r = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            { localVolumes: s } = tJ(t);
        i === r ? delete s[n] : (s[n] = i),
            ni({ localVolumes: s }, t),
            e5.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = tJ(t);
        (s[n] = { left: i, right: r }), ni({ localPans: s }, t), e5.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        ni({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e5.eachConnection(t0);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        ni({ inputVolume: t1(t) }), e5.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        ni({ outputVolume: t }), e5.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nl(ts, t)),
            (ti = performance.now()),
            ni({ inputDeviceId: t }),
            n_(t),
            e5.eachConnection(t8),
            (l = void 0),
            (d = void 0),
            tY.stop(),
            (tW = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ec.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tT = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        ni({ outputDeviceId: (t = nl(ta, t)) }), e5.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        ni({ activeInputProfile: t });
        let n = tJ();
        e5.eachConnection((e) => {
            t0(e), t8(e);
        }),
            e5.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nf();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = ni({ echoCancellation: e.enabled });
        e5.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nf(), nm(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = ni({ sidechainCompression: e.enabled })), e5.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = ni({ sidechainCompressionStrength: e.strength });
        e5.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tV.add(n) : tV.delete(n), nf();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = ni({ noiseSuppression: e.enabled });
        e5.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nf(), nm(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = ni({ automaticGainControl: e.enabled });
        e5.eachConnection((e) => t7(e, t.automaticGainControl)), nf(), nm(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = ni({ noiseCancellation: e.enabled });
        e5.eachConnection((e) => t5(e, t.noiseCancellation)), nf(), nm(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eC.A.setKrispModelOverride(e.model), (c = e.model), nf();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        ni({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e5.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eC.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tv = e.enabled), e5.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        ni({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        ni({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        ni({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = ni({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e5.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        ni({ qos: t }), e5.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: i } = e,
            r = ts;
        if (((ts = no(t, eq.intl.string(eq.t["/QIjDA"]))), !T().isEqual(ts, r))) {
            let e = tJ();
            n_(nl(ts, e.inputDeviceId)), e5.eachConnection(t8);
        }
        !(function (e) {
            let t = ta;
            if (((ta = no(e, eq.intl.string(eq.t.xlUg0v))), !T().isEqual(ta, t))) {
                let e = tJ(),
                    n = nl(ta, e.outputDeviceId);
                e5.setAudioOutputDevice(n);
                let i = nu(t),
                    r = nu(ta);
                i !== r &&
                    e5.eachConnection((e) => {
                        e.context === e$.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(n);
        tI = i.length > 0;
        let s = to;
        if (((to = no(i, eq.intl.string(eq.t.WKWARY))), tE && !T().isEqual(to, s))) {
            let e = void 0 !== to[th],
                t = th === e$.dx && s[e$.dx]?.disabled,
                n = "Firefox" === N().name && "" === th && s[th]?.name === "Default" && !s[th]?.disabled;
            t3(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        ni({ inputVolume: t1(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        v.w.remove(eZ), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tS = !0 !== tT && !t), t)) (tT = !0), (tW = !1), tY.stop(), tN.stop();
        else if (tJ().mode === ey.TBI.VOICE_ACTIVITY && tT) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ec.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tY.start(e2, () => {
                    eO.default.track(ey.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: ts[nl(ts, tJ().inputDeviceId)]?.name,
                        rtc_connection_id: eH.A.getRTCConnectionId(),
                    }),
                        (tW = !0),
                        i.emitChange();
                }),
                null != t &&
                    tN.start(t * eM.A.Millis.MINUTE, () => {
                        (tT = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nI(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        ni({ bypassSystemInputProcessing: t }), e5.setAudioInputBypassSystemProcessing(t), nm(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (te = e.enabled), e.unmute && ni({ mute: !1, deaf: !1 }), e5.eachConnection(t2);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eN.A.requestPermission(eY.iL.CAMERA), t3(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (te = !1), e5.eachConnection(t2);
                    break;
                case "video":
                    t3(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? e$.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = ek.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nE(l, r)),
                a !== tn && (null != s && e5.setGoLiveSource(null, tn), (tn = a)),
                t3(a === e$.x.STREAM && tE, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e$.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i } = t.cameraSettings,
                r = e === e$.x.STREAM && tE,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t3(r, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t3(tE, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        ni({ videoDeviceId: (t = nl(to, t)) }), t3();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tt !== e.required && ((tt = e.required), e.required || e5.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nS,
    USER_SETTINGS_MODAL_SET_SECTION: nS,
    CERTIFIED_DEVICES_SET: function () {
        return e5.eachConnection(t8), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        e9.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        e9.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (e8 = t.settingsByContext),
            (ts = t.inputDevices),
            (ta = t.outputDevices),
            (tF = t.appSupported),
            (tO = t.krispModuleLoaded),
            (_ = t.krispVersion),
            (tn = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === ey.g6G.BACKGROUND && tE && !n) (tA = !0), t3(!1);
        else {
            if (t !== ey.g6G.ACTIVE || !tA) return !1;
            (tA = !1), t3(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e5.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tu) return !1;
        (tu = n), e5.eachConnection(t2);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eY.hL.ACCEPTED;
        switch (n) {
            case eY.iL.AUDIO:
                (tU = !0), e5.eachConnection(t2);
                break;
            case eY.iL.CAMERA:
                !i && tE && t3(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e5.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = ni({ aecDumpEnabled: t });
        e5.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        ni({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (e8 = Object.values(e$.x).reduce((e, n) => {
            let i = e4();
            return (e[n] = T().merge(i, t[n])), e;
        }, {})),
            v.w.set(eZ, e8),
            nr();
    },
    CHANNEL_DELETE: function () {
        if ((!tE && null == s) || null != eH.A.getRTCConnectionId()) return !1;
        t3(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tL && ((tL = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e5.applyMediaFilterSettings(t).finally(() => {
            (tb = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tb = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tb = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eK.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nc(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, x.Ao)() || null == b.A) return !1;
        null != a &&
            (e5.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? w.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && tJ().videoHook && w.c1(a.desktopSource.sourcePid)));
        let s = ek.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nE(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let d = tX("MediaEngineStore clips"),
            _ = tJ().videoHook,
            u = !_ || !Q.getConfig({ location: "handleClipsInit" }).enabled,
            c = _ && em.getConfig({ location: "handleClipsInit" }).enabled;
        e5.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: _,
                useHookFramePacer: u,
                useGraphicsCapture: t9(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: ne(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eJ,
                hdrCaptureMode: d,
                videoHookAllowDx12: c,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e$.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), e5.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tj = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tP[t] = { active: n, available: i };
    },
})),
    (o = new eo(e5, i));
let nR = i;

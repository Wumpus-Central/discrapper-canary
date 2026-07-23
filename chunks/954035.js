"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => tt, Ay: () => nz }), n(323874), n(14289), n(35956), n(321073);
var A,
    h = n(823598),
    I = n(626584),
    f = n(723702),
    p = n(19575);
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
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => p.Ay.supportsFeature(e),
    setProcessPriority(e) {
        p.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => p.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => p.Ay.getOpenH264LibraryPath(),
});
var T = n(284009),
    m = n.n(T),
    g = n(435558),
    S = n.n(g),
    N = n(481613),
    C = n.n(N),
    O = n(299855),
    R = n.n(O),
    L = n(17928),
    y = n(459838),
    D = n(506774),
    v = n(451988),
    b = n(228366),
    M = n(77729),
    P = n(719129),
    U = n(894539),
    w = n(124838),
    G = n(915725),
    x = n(915618),
    k = n(572164),
    F = n(680725),
    V = n(487329),
    B = n(736056),
    H = n(6494),
    j = n(952818),
    W = n(540305),
    Y = n(945810);
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
    $ = (0, Y.mj)({
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
let q = (0, Y.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Z = { probeAudioEffects: !1 },
    X = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: Z,
        variations: { 1: { ...Z, probeAudioEffects: !0 } },
    }),
    Q = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    J = (0, Y.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    ee = (0, Y.mj)({
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
    ei = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    er = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ea = n(574381),
    es = n(118356),
    el = n(325278);
let eo = new es.Vy("InputWatcher");
class ed {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
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
        if ((0, ea.uF)() && R().satisfies(M.A?.os.release, el.PH))
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
                    b.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                eo.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            eo.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                b.h.dispatch({
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
var eu = n(140175);
let e_ = (0, Y.mj)({
    name: "2026-07-mkl-zen-cpu-dispatch-override",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function eE(e) {
    return e_.getConfig({ location: e });
}
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var eA = n(801644);
let eh = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eI = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ef = (0, et.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eT = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eC(e) {
    return eN.getConfig({ location: e });
}
let eO = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eR = n(75076),
    eL = n(91777),
    ey = n(559633),
    eD = n(205106),
    ev = n(174459),
    eb = n(652215);
let eM = new es.Vy("AudioEffects");
async function eP(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            ev.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eM.error("Failed to probe audio effects for device", e),
            ev.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eU = n(967347),
    ew = n(617617),
    eG = n(125325),
    ex = n(499156),
    ek = n(738566),
    eF = n(353835),
    eV = n(927813),
    eB = n(38405),
    eH = n(350535),
    ej = n(280450),
    eW = n(131319),
    eY = n(347481),
    eK = n(734057),
    e$ = n(763827),
    ez = n(287809),
    eq = n(117549),
    eZ = n(765682);
let eX = {
    enabled: !0,
    spatialBlend: 1,
    reflectionsEnabled: !1,
    roomSize: 25,
    mode: "arc",
    spread: 2,
    arcAngle: 20,
    gridColumns: 3,
    gridSpacing: 1,
    buckets: 10,
    listenerHeight: 0.15,
    distance: 5,
};
var eQ = n(355097),
    eJ = n(621380),
    e0 = n(731854),
    e1 = n(375708);
let e2 = new I.A("MediaEngineStore"),
    e3 = "MediaEngineStore",
    e6 = { left: 1, right: 1 },
    e4 = 5 * eV.A.Millis.SECOND,
    e5 = 2 * eV.A.Millis.SECOND,
    e7 = 30 * eV.A.Millis.SECOND,
    e8 = +eV.A.Millis.MINUTE,
    e9 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    te = 0;
var tt =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function tn() {
    return {
        mode: eb.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eX },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e0.Hz,
        outputVolume: e0.Hz,
        inputDeviceId: e0.dx,
        outputDeviceId: e0.dx,
        videoDeviceId: e0.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ta.supports(e0.O5.VIDEO_HOOK),
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
let ti = {
        [eJ.m.CUSTOM]: {},
        [eJ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eJ.m.STUDIO]: {
            mode: eb.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tr = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    ta = (0, y.hB)((0, y.WI)());
e2.enableNativeLogger(!0);
let ts = {},
    tl = new Set([e0.x.DEFAULT]),
    to = ta.supports(e0.O5.AUTO_ENABLE),
    td = !1,
    tc = e0.x.STREAM,
    tu = 0,
    t_ = !1,
    tE = performance.now(),
    tA = null,
    th = { [e0.dx]: nN("No Input Devices") },
    tI = { [e0.dx]: nN("No Output Devices") },
    tf = { [e0.dx]: nN("No Video Devices") },
    tp = new v.Ep(),
    tT = !1,
    tm = !1,
    tg = !1,
    tS = !1,
    tN = !1,
    tC = e0.qe,
    tO = e0.qe,
    tR = !1,
    tL = !1,
    ty = new v.Ep(),
    tD = !1,
    tv = !1,
    tb = !1,
    tM = !1,
    tP = new v.Ep(),
    tU = !1,
    tw = !1,
    tG = !1,
    tx = !1,
    tk = [],
    tF = !1,
    tV = null,
    tB = !1,
    tH = !1,
    tj = !1,
    tW = !1,
    tY = {},
    tK = null,
    t$ = null,
    tz = !1;
eL.A.hasPermission(eZ.iL.AUDIO, { showAuthorizationError: !1 }),
    eL.A.hasPermission(eZ.iL.CAMERA, { showAuthorizationError: !1 });
let tq = new Set(),
    tZ = !1,
    tX = new Set(),
    tQ = {},
    tJ = null,
    t0 = null,
    t1 = null,
    t2 = !0,
    t3 = !1,
    t6 = new v.Ep(),
    t4 = !1,
    t5 = !1,
    t7 = !1,
    t8 = !1,
    t9 = {};
function ne(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function nt() {
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
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
        t = ts[e];
    return null == t && ((t = tn()), (ts[e] = t)), t;
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
        t = nn(e),
        n = ti[t.activeInputProfile ?? eJ.m.CUSTOM],
        i = nV() ? t9 : tr,
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
function nr(e) {
    let t = ni(e.context),
        n = t.mode;
    e.context === e0.x.DEFAULT && (0, eu.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ex.A.getConfig({ location: "setInputMode" }),
        r = i && n === eb.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nV(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function na(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.Hz;
    return S().clamp(e, 0, t);
}
function ns(e) {
    let t = ni(e.context),
        n = !to || t.mute || t.deaf;
    switch (e.context) {
        case e0.x.DEFAULT:
            n = n || tT || tm || tg || !eL.A.didHavePermission(eZ.iL.AUDIO);
            break;
        case e0.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e0.x.DEFAULT && U.A.updateNativeMute();
}
function nl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tN,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && ni().videoHook && P.c1(n.desktopSource.sourcePid),
            ta.setGoLiveSource(null, tc)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ta.setGoLiveSource(null, tc),
        tN || e)
    ) {
        let t = ni().videoDeviceId;
        tN && t === e0.dx && tO === e0.dx && tC !== e0.qe ? (t = tC) : (tO = t),
            (tC = (tN = e) ? ny(tf, t) : e0.qe),
            ta.setVideoInputDevice(tC);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ne("MediaEngineStore go live"),
                r = ni().videoHook,
                a = nI(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= el.zl &&
                (l =
                    !0 === t0
                        ? eg.getConfig({ location: "updateVideo" }).enabled
                        : em.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                d = r && eT.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = eI.getConfig({ location: "updateVideo" });
            ta.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: o,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, f.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nf(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e4,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? en.definition.defaultConfig : en.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tc,
            );
        }
        null != t.cameraSource &&
            ta.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tc,
            );
    }
}
function no(e) {
    switch (e) {
        case e0.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e0.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e0.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e0.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e0.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e0.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e0.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e0.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e0.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e0.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nd = new Set([
    e0.CO.KRISP_INIT_ERROR,
    e0.CO.KRISP_INIT_ERROR_NATIVE,
    e0.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e0.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e0.CO.KRISP_INIT_ERROR_UNSIGNED,
    e0.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e0.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nc(e) {
    if (
        (e2.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: no(e) }),
        ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nd.has(e))
    ) {
        tx = !0;
        return;
    }
    e === e0.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tB = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nu(e, t) {
    let n = t === e0.$C.LIVE;
    e2.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e0.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e0.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function n_(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nE(e, t) {
    e.setAutomaticGainControl(n_(t));
}
function nA(e, t) {
    let n = (0, eD.A)(t, i.getSystemMicrophoneMode());
    n !== t && e2.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nh(e) {
    let t = ni(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eY.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eY.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nE(e, eY.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nA(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nw(t.audioMixerSettings)),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e0.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eh.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nR(th[i.getInputDeviceId()]) || nR(tI[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nI() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, el.yg);
}
function nf() {
    return (0, f.isMac)() && ta.supports(e0.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, el.e);
}
function np() {
    return (
        (0, f.isWindows)() &&
        ta.supports(e0.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ta.supports(e0.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nT() {
    return ta.supports(e0.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = nn(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e3, ts), i;
}
function ng() {
    let e = ni();
    nv(e.inputDeviceId),
        ta.setAudioOutputDevice(e.outputDeviceId),
        nl(),
        ta.setInputVolume(e.inputVolume),
        ta.setOutputVolume(e.outputVolume),
        ta.setAecDump(e.aecDumpEnabled),
        ta.setSidechainCompression(e.sidechainCompression),
        ta.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ta.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nG(e.audioMixerSettings);
}
function nS() {
    to || ta.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nN(e) {
    return { id: e0.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nC(e, t) {
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
let nO = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nR(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nL(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nN(i);
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
                    case nC(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nO.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nC(e, i):
                    case "audiooutput" === e.type && nC(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function ny(e, t) {
    let n = e[t] ?? e[e0.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nD(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = th[e];
    t?.guid != null && eP(t.guid, e, ta);
}
function nv(e) {
    ta.setAudioInputDevice(e), nD(e);
}
function nb(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eQ.W.USER ? e0.x.DEFAULT : e0.x.STREAM,
            r = i === e0.x.STREAM ? e0.Cn : e0.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = ni(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eG.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                ta.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    ta.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nm({ localMutes: s, localVolumes: l }, i);
    }
}
function nP(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e2.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eF.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eF.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, f.isWindows)() &&
                    n > 1 &&
                    P.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            b.h.wait(() => {
                                b.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return null != e && ni().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nU() {
    let e = e0.x.DEFAULT,
        { videoToggleStateMap: t } = ni(e);
    for (let [e, n] of Object.entries(t)) n === eb.bb8.AUTO_PROBING && delete t[e];
    nm({ videoToggleStateMap: t }, e, !1);
}
function nw(e) {
    let { enabled: t } = ek.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && ta.supports(e0.O5.SPATIAL_AUDIO);
}
function nG(e) {
    (tW = nw(e)), ta.setAudioMixerOptions({ ...e, enabled: tW });
}
function nx(e) {
    let t = ni(),
        n = ta.getAudioSubsystem(),
        r = ta.getAudioLayer(),
        a = ny(th, t.inputDeviceId),
        s = th[a]?.name,
        l = (0, eD.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    ev.default.track(eb.HAw.VOICE_PROCESSING, {
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
function nk() {
    let e = ni(),
        t = tX.size > 0,
        n = e.inputDeviceId,
        i = eY.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eY.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = n_(eY.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    ta.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    });
}
async function nF() {
    if (!ta.supports(e0.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t7 = !0), (t5 = ta.supports(e0.O5.GAMESCOPE_CAPTURE)));
}
function nV() {
    return (tG || !1) && !tx;
}
async function nB() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tG = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            (0, f.isWindows)() && e.setMklZenOverrideEnabled?.(eE("setupKrispNativeModule").enabled),
            e.getNcModels?.().then((e) => {
                (tk = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e2.warn(`Failed to load Krisp module: ${t.message}`), eB.A.captureException(t);
        let e = e0.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e0.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: no(e) }),
            ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tw = !1;
    }
}
async function nH() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e9);
        if (null === i) return void e2.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                e9,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e2.log("OpenH264 download status", e);
                },
            );
            e2.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e2.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ev.default.track(eb.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e2.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e2.error("OpenH264 download failed", e);
    }
}
function nj(e) {
    e === e0.rB.AUTOMATIC
        ? (nm({ automaticAudioSubsystem: !0 }), nW())
        : (nm({ automaticAudioSubsystem: !1 }), ta.setAudioSubsystem(e));
}
function nW() {
    ta.queueAudioSubsystem(e0.rB.EXPERIMENTAL);
}
function nY(e) {
    let { section: t } = e;
    return t === eb.nc_.VOICE && nS(), !1;
}
class nK extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(ta, this)),
            tp.start(e7, () => {
                e2.error("Device enumeration timed out"), ev.default.track(eb.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            ta.on(y.bg.Connection, (e) => {
                let t;
                nk(), nr(e), ns(e), nh(e);
                let n = ni();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e0.fd.H265_HARDWARE_ONLY, !0),
                          (null != t$
                              ? t$
                              : "u" > typeof window
                                ? (t$ = nt().then((e) => ((tK = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e0.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e0.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e0.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e0.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e0.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e0.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e0.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e0.x.STREAM)
                ) {
                    let t = nb(tI);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e0.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e0.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e0.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e0.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e0.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e0.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e0.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    tJ?.startsWith("AMD") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e0.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tJ?.startsWith("Intel") &&
                    !0 === t0 &&
                    1 === t1 &&
                    eO.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e0.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e0.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    tJ?.startsWith("Intel") &&
                    !0 === t0 &&
                    1 === t1 &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e0.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    tJ?.startsWith("Qualcomm") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e0.fd.WMF_GPU_ENCODE, !0),
                ta.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e0.X1),
                (n = ni(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== ej.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ej.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e0.x.DEFAULT &&
                        ((tL = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tL;
                            (tL = !0),
                                e && i.emitChange(),
                                ty.start(e5, () => {
                                    (tL = !1), i.emitChange();
                                });
                        })),
                    e.on(y.yq.DesktopSourceEnd, (t, n) => {
                        b.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(y.yq.InteractionRequired, (e) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(y.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            ev.default.track(eb.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, nc),
                    e.on(y.yq.VoiceActivityDetectorError, nc),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        ev.default.track(eb.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eW.A.bitrate),
                    e.applyVideoQualityMode(eq.A.mode),
                    (0, f.isWindows)() &&
                        ta.supports(e0.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        ta.setAsyncVideoInputDeviceInit(!0);
            }),
            ta.on(y.bg.DeviceChange, (e, t, n) => {
                tp.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            ta.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            ta.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            ta.on(y.bg.AudioPermission, (e) => {
                (tz = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            ta.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            ta.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eF.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e2.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await ev.default.track(
                        eb.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e2.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e2.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            ta.on(y.bg.VideoInputInitialized, (e) => {
                ev.default.track(eb.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eV.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: e$.A.getMediaSessionId(),
                    rtc_connection_id: e$.A.getRTCConnectionId(),
                });
            }),
            ta.on(y.bg.AudioInputInitialized, (e) => {
                ev.default.track(eb.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eV.A.Millis.SECOND),
                    rtc_connection_id: e$.A.getRTCConnectionId(),
                });
            }),
            ta.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            ta.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = tu < 3;
                (tu += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e2.warn(
                                      `Clips init failure budget exhausted (${tu} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            ta.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== tu && (e2.info(`Clips bridge reported healthy; resetting restart budget (was ${tu}).`), (tu = 0));
            }),
            ta.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                t_ !== e && (e2.info(`Clips recorder ready changed: ${e}`), (t_ = e));
            }),
            ta.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e2.info("Clips bridge idle shutdown");
            }),
            ta.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            ta.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            ta.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            ta.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            ta.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                ev.default.track(eb.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            ta.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            ta.on(y.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: te++,
                            context: n.context,
                        };
                    }),
                });
            }),
            ta.on(y.bg.VoiceProcessingError, nc),
            ta.on(y.bg.VideoFilterError, nu),
            ta.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = n$(e);
                null !== t && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, t);
            }),
            ta.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nF(),
            l.reset(),
            (0, eU.w)().then((e) => {
                null != e && ((tJ = e.gpu_brand), (t0 = e.has_intel_hybrid_igpu), (t1 = e.gpu_count));
            }),
            ta.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), ta.eachConnection(nh), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e3, { [e0.x.DEFAULT]: e }), D.w.remove("audio")),
            (ts = D.w.get(e3) ?? {}),
            S().each(ts, (e) => {
                S().defaultsDeep(e, tn()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eH.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    ta.supports(e0.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...eX })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            ng(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tw && !tG
                ? ((tw = !0), nB())
                : (0, f.isWeb)() && ta.supports(e0.O5.NOISE_CANCELLATION)
                  ? ((tG = !0), i.emitChange())
                  : (0, f.isWeb)() && nm({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nH(),
            nU(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !t8)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e0.tl;
                let n = n$(e);
                null !== n && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e0.tl);
            }
            (t8 = !0), setTimeout(t, e0.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tA &&
            ta
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tA = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e2.error("Failed to parse codec survey", e), (tA = !1);
                    }
                })
                .catch((e) => {
                    e2.error("Failed to get codec survey", e), (tA = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tQ = {
                [e0.O5.VIDEO]: ta.supports(e0.O5.VIDEO),
                [e0.O5.DESKTOP_CAPTURE]: ta.supports(e0.O5.DESKTOP_CAPTURE),
                [e0.O5.HYBRID_VIDEO]: ta.supports(e0.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ej.default, eW.A, eY.A, eK.A, G.Ay, B.A, e$.A, j.Ay, ew.A, ez.default, eq.A);
    }
    supports(e) {
        return ta.supports(e);
    }
    supportsInApp(e) {
        return tQ[e] || ta.supports(e);
    }
    isSupported() {
        return ta.supported();
    }
    isNoiseSuppressionSupported() {
        return ta.supports(e0.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nV();
    }
    isNoiseCancellationError() {
        return tB;
    }
    isAutomaticGainControlSupported() {
        return ta.supports(e0.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nT() && (ta.supports(e0.O5.LEGACY_AUDIO_SUBSYSTEM) || ta.supports(e0.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ta.supports(e0.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ta.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nV();
    }
    isAecDumpSupported() {
        return ta.supports(e0.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ta.supports(e0.O5.VIDEO) && ta.supports(e0.O5.SIMULCAST);
    }
    getAecDump() {
        return ni().aecDumpEnabled;
    }
    getMediaEngine() {
        return ta;
    }
    getVideoComponent() {
        return ta.Video;
    }
    getCameraComponent() {
        return ta.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tF;
    }
    isEnabled() {
        return to;
    }
    isMute() {
        return this.isSelfMute() || tT;
    }
    isDeaf() {
        return this.isSelfDeaf() || tS;
    }
    isServerMute() {
        return tT;
    }
    isServerDeaf() {
        return tS;
    }
    getAudioMixerSettings() {
        return ni().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return tW;
    }
    hasContext(e) {
        return null != ts[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return e === e0.x.DEFAULT && tm;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ni(e).mute ||
            !eL.A.didHavePermission(eZ.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e0.x.DEFAULT && tg)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tR;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tR = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
            t = t3 && "voice_isolation" !== this.getSystemMicrophoneMode() && ni(e).mode === eb.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eY.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t2;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return !this.isSupported() || ni(e).deaf;
    }
    isVideoEnabled() {
        return tN && tv;
    }
    isVideoAvailable() {
        return Object.values(tf).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tv;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.STREAM;
        return tc === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.STREAM;
        return tc === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return e !== ej.default.getId() && (ni(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ta.supports(e0.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return ni(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return ni(t).videoToggleStateMap[e] ?? eb.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT;
        return t === e0.x.DEFAULT && tq.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return e === e0.x.DEFAULT && tq.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tH;
    }
    isNativeAudioPermissionReady() {
        return tz;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tc;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tE;
    }
    isH264MfDecodeAvailable() {
        return tA;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT,
            n = ni(t).localPans[e];
        return null != n ? n : e6;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e0.x.DEFAULT,
            n = t === e0.x.STREAM ? e0.Cn : e0.Hz,
            i = ni(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return ni().inputVolume;
    }
    getOutputVolume() {
        return ni().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return ni(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return ni(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(ts, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eb.TBI.PUSH_TO_TALK && tl.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ny(th, ni().inputDeviceId);
    }
    getOutputDeviceId() {
        return ny(tI, ni().outputDeviceId);
    }
    getVideoDeviceId() {
        return ny(tf, ni().videoDeviceId);
    }
    getInputDevices() {
        return th;
    }
    getOutputDevices() {
        return tI;
    }
    getVideoDevices() {
        return tf;
    }
    getEchoCancellation() {
        let e = ni();
        return eY.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ta.supports(e0.O5.SIDECHAIN_COMPRESSION) && ni().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ni().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ni().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tK && tK;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && ni().openH264Enabled;
    }
    getLoopback() {
        return tX.size > 0;
    }
    getLoopbackReasons() {
        return tX;
    }
    getNoiseSuppression() {
        let e = ni();
        return eY.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ni();
        return eY.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ni().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ni().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return ni().silenceWarning;
    }
    getDebugLogging() {
        return ta.getDebugLogging();
    }
    getQoS() {
        return ni().qos;
    }
    getAttenuation() {
        return ni().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ni().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ni().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return np() && ni().automaticAudioSubsystem ? e0.rB.AUTOMATIC : ta.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ta.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ni().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eJ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT;
        return ni(e);
    }
    getState() {
        return {
            settingsByContext: ts,
            inputDevices: th,
            outputDevices: tI,
            appSupported: tQ,
            krispModuleLoaded: tG,
            krispFatalError: tx,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tc,
        };
    }
    getInputDetectedThisConnection() {
        return tb;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tM;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== eb.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ta.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return td;
    }
    getVideoHook() {
        return ni().videoHook;
    }
    supportsVideoHook() {
        return ta.supports(e0.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ni().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ta.supports(e0.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && ta.supports(e0.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ni().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ta.supports(e0.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t7;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e0.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === e0.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t5;
    }
    getSpeakingWhileMuted() {
        return tL;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tk;
    }
    getKrispVadActivationThreshold() {
        return ni().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t4;
    }
    setHasActiveCallKitCall(e) {
        t4 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? ta.supports(e0.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.P$) && nf()
            : (0, f.isWindows)()
              ? ta.supports(e0.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && ta.supports(e0.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tY[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.x.DEFAULT,
            t = this.supports(e0.O5.VIDEO)
                ? [{ rid: "100", type: e === e0.x.DEFAULT ? e0.mI.VIDEO : e0.mI.SCREEN, quality: e0.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e0.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e0.mI.VIDEO, quality: e0.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return ta.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tj &&
            ((tj = !0),
            (0, f.isWeb)() &&
                ta.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e2.warn("DAVE preload failed:", e), eB.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return ta.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return t_;
    }
    isClipsRecordingReadySignalSupported() {
        return ta.supports(e0.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tJ;
    }
}
function n$(e) {
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
let nz = (i = new nK(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nl(r, null), null != t || null == n)) {
            tU = !1;
            return;
        }
        if (tU) return;
        tU = !0;
        let a = ni();
        (a.mute || a.deaf) && (nm({ deaf: !1, mute: !1 }), ta.eachConnection(ns));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tT = t.mute || t.suppress), (tS = t.deaf), ta.eachConnection(ns);
                let e = null != t.guildId && null != t.channelId && null != tV && tV !== t.channelId,
                    n = !tU && null == t.channelId;
                return nl(!e && !n && tN), (tV = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== ej.default.getId() || null != e$.A.getChannelId() || nl(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tT = !1), (tS = !1);
        let t = ni();
        np() && (nT() ? nj(e0.rB.AUTOMATIC) : t.automaticAudioSubsystem && nW()),
            ta.supports(e0.O5.OFFLOAD_ADM_CONTROLS) && ta.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                ta.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isWindows)() &&
                tG &&
                p.Ay.requireModule("discord_krisp").setMklZenOverrideEnabled?.(eE("handleConnectionOpen").enabled),
            nD(t.inputDeviceId),
            nM();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eb.S7L.CONNECTING:
                nS();
                break;
            case eb.S7L.RTC_CONNECTING:
                (tM = !1), (o = void 0), (d = void 0), (tb = !1), (t3 = !1), t6.stop(), tP.stop(), l.reset();
                break;
            case eb.S7L.RTC_CONNECTED:
                nl();
                break;
            case eb.S7L.DISCONNECTED:
                (t9 = {}),
                    (function () {
                        if (0 === tq.size) return;
                        let e = e0.x.DEFAULT,
                            { disabledLocalVideos: t } = ni(e);
                        tq.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                ta.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tq.clear(),
                            nm({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nU();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tm = t), ta.eachConnection(ns);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = ni(t);
        if (t === e0.x.DEFAULT && (eL.A.requestPermission(eZ.iL.AUDIO), tg)) return !1;
        (i = !r && !i) || (r = !1), n || (tR = !0), nm({ mute: i, deaf: r }, t), ta.eachConnection(ns);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nm({ mute: n }, t), i || (tR = !0), ta.eachConnection(ns);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nm({ deaf: !ni(t).deaf }, t), ta.eachConnection(ns);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ej.default.getId()) return;
        let { localMutes: i } = ni(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nm({ localMutes: i }, t),
            ta.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eb.bb8.DISABLED,
            { disabledLocalVideos: l } = ni(t),
            o = l[n] ?? !1,
            d = tq.has(n),
            c = i === eb.bb8.AUTO_ENABLED || i === eb.bb8.MANUAL_ENABLED;
        e2.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e0.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e2.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = ni(t);
        if (
            (h[n] === eb.bb8.AUTO_PROBING &&
                i === eb.bb8.AUTO_ENABLED &&
                (0, eR.A)(n, s ? e0.Al.AUTO_DISABLE : e0.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nm({ videoToggleStateMap: h }, t, r),
            i === eb.bb8.AUTO_PROBING
                ? e$.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : e$.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tZ ||
                (e2.info(`isAutoDisableAllowed=${tZ} - disabling VideoHealthManager`),
                e$.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tZ)) return;
            (0, eR.A)(n, s ? e0.Al.AUTO_DISABLE : e0.Al.AUTO_ENABLE, c), s ? tq.add(n) : tq.delete(n);
        } else
            A &&
                (d && !s
                    ? (e2.info("disallowing auto-disable for this session because of manual override by user"),
                      (tZ = !1),
                      e$.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eR.A)(n, e0.Al.MANUAL_REENABLE, c))
                    : (0, eR.A)(n, s ? e0.Al.MANUAL_DISABLE : e0.Al.MANUAL_ENABLE, c));
        _ && !s && tq.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nm({ disabledLocalVideos: l }, t, r),
            ta.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ej.default.getId()) return;
        let r = t === e0.x.STREAM ? e0.Cn : e0.Hz,
            { localVolumes: a } = ni(t);
        i === r ? delete a[n] : (a[n] = i),
            nm({ localVolumes: a }, t),
            ta.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nm({ audioMixerSettings: n }, t), nG(n), ta.eachConnection((e) => e.setSpatialAudioEnabled(tW), e0.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = ni(t);
        (a[n] = { left: i, right: r }), nm({ localPans: a }, t), ta.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nm({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), ta.eachConnection(nr);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nm({ inputVolume: na(t) }), ta.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nm({ outputVolume: t }), ta.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = ny(th, t)),
            (tE = performance.now()),
            nm({ inputDeviceId: t }),
            nv(t),
            ta.eachConnection(nh),
            (o = void 0),
            (d = void 0),
            t6.stop(),
            (t3 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eA.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tb = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nm({ outputDeviceId: (t = ny(tI, t)) }), ta.setAudioOutputDevice(t), ta.eachConnection(nh);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nm({ activeInputProfile: t });
        let n = ni();
        ta.eachConnection((e) => {
            nr(e), nh(e);
        }),
            ta.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nk();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nm({ echoCancellation: e.enabled });
        ta.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nk(), nx(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nm({ sidechainCompression: e.enabled })), ta.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nm({ sidechainCompressionStrength: e.strength });
        ta.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tX.add(n) : tX.delete(n), nk();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nm({ noiseSuppression: e.enabled });
        ta.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nk(), nx(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nm({ automaticGainControl: e.enabled });
        ta.eachConnection((e) => nE(e, t.automaticGainControl)), nk(), nx(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nm({ noiseCancellation: e.enabled });
        ta.eachConnection((e) => nA(e, t.noiseCancellation)), nk(), nx(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        ey.A.setKrispModelOverride(e.model), (_ = e.model), nk();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nm({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        ta.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), ey.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tF = e.enabled), ta.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nm({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nm({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nm({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nm({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        ta.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nm({ qos: t }), ta.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = th;
        if (
            ((th = nL(e, { deviceType: e0.oh.AUDIO_INPUT, defaultName: e1.intl.string(e1.t["/QIjDA"]) })),
            !S().isEqual(th, t))
        ) {
            let e = ni();
            nv(ny(th, e.inputDeviceId)), ta.eachConnection(nh);
        }
        !(function (e) {
            let t = tI;
            if (
                ((tI = nL(e, { deviceType: e0.oh.AUDIO_OUTPUT, defaultName: e1.intl.string(e1.t.xlUg0v) })),
                !S().isEqual(tI, t))
            ) {
                let e = ni(),
                    n = ny(tI, e.outputDeviceId);
                ta.setAudioOutputDevice(n), ta.eachConnection(nh);
                let i = nb(t),
                    r = nb(tI);
                i !== r &&
                    ta.eachConnection((e) => {
                        e.context === e0.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tv = e.videoDevices.length > 0;
        let n = tf;
        if (
            ((tf = nL(e, { deviceType: e0.oh.VIDEO_INPUT, defaultName: e1.intl.string(e1.t.WKWARY) })),
            tN && !S().isEqual(tf, n))
        ) {
            let e = void 0 !== tf[tC],
                t = tC === e0.dx && n[e0.dx]?.disabled,
                i = "Firefox" === C().name && "" === tC && n[tC]?.name === "Default" && !n[tC]?.disabled;
            nl(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nm({ inputVolume: na(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e3), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tM = !0 !== tb && !t), t)) (tb = !0), (t3 = !1), t6.stop(), tP.stop();
        else if (ni().mode === eb.TBI.VOICE_ACTIVITY && tb) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eA.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t6.start(e8, () => {
                    ev.default.track(eb.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: th[ny(th, ni().inputDeviceId)]?.name,
                        rtc_connection_id: e$.A.getRTCConnectionId(),
                    }),
                        (t3 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tP.start(t * eV.A.Millis.MINUTE, () => {
                        (tb = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nj(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nm({ bypassSystemInputProcessing: t }), ta.setAudioInputBypassSystemProcessing(t), nx(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (to = e.enabled), e.unmute && nm({ mute: !1, deaf: !1 }), ta.eachConnection(ns);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eL.A.requestPermission(eZ.iL.CAMERA), nl(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (to = !1), ta.eachConnection(ns);
                    break;
                case "video":
                    nl(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e0.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eF.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nP(o, r)),
                s !== tc && (null != a && ta.setGoLiveSource(null, tc), (tc = s)),
                nl(s === e0.x.STREAM && tN, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e0.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e0.x.STREAM && tN,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nl(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nl(tN, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nm({ videoDeviceId: (t = ny(tf, t)) }), nl();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return td !== e.required && ((td = e.required), e.required || ta.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nY,
    USER_SETTINGS_MODAL_SET_SECTION: nY,
    CERTIFIED_DEVICES_SET: function () {
        return ta.eachConnection(nh), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tl.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tl.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (ts = t.settingsByContext),
            (th = t.inputDevices),
            (tI = t.outputDevices),
            (tQ = t.appSupported),
            (tG = t.krispModuleLoaded),
            (tx = t.krispFatalError),
            (c = t.krispVersion),
            (tc = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eb.g6G.BACKGROUND && tN && !n) (tD = !0), nl(!1);
        else {
            if (t !== eb.g6G.ACTIVE || !tD) return !1;
            (tD = !1), nl(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        ta.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tg) return !1;
        (tg = n), ta.eachConnection(ns);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eZ.hL.ACCEPTED;
        switch (n) {
            case eZ.iL.AUDIO:
                (tz = !0), ta.eachConnection(ns);
                break;
            case eZ.iL.CAMERA:
                !i && tN && nl(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        ta.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nm({ aecDumpEnabled: t });
        ta.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nm({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (ts = Object.values(e0.x).reduce((e, n) => {
            let i = tn();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e3, ts),
            ng();
    },
    CHANNEL_DELETE: function () {
        if ((!tN && null == a) || null != e$.A.getRTCConnectionId()) return !1;
        nl(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e0.CO.KRISP_CPU_OVERUSE) {
            (t9.noiseCancellation = !1), (t9.noiseSuppression = !0);
            let e = ni();
            return ta.eachConnection((t) => nA(t, e.noiseCancellation)), nk(), nx(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e0.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t9.modeOptions = { vadUseKrisp: !1 }), ta.eachConnection((e) => nr(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tB && ((tB = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        ta.applyMediaFilterSettings(t).finally(() => {
            (tH = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tH = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tH = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eQ.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nM(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (ta.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && ni().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eF.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nP(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = ne("MediaEngineStore clips"),
            c = ni().videoHook,
            u = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eT.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = eI.getConfig({ location: "handleClipsInit" });
        ta.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nI(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nf(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e4,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e0.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), ta.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t2 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tY[t] = { active: n, available: i };
    },
}));

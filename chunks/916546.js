let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => ti, Ay: () => n1 }), n(323874), n(14289), n(35956), n(321073);
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
    x = n(572164),
    k = n(680725),
    F = n(487329),
    V = n(736056),
    B = n(6494),
    H = n(952818),
    j = n(540305),
    W = n(945810);
let Y = (0, W.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    K = { probeAudioEffects: !1 },
    $ = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: K,
        variations: { 1: { ...K, probeAudioEffects: !0 } },
    });
var z = n(403362);
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
            (0, z.xb)(e);
    }
}
let X = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Q = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    J = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ee = n(240921);
let et = (0, ee.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    ei = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(574381),
    ea = n(941426),
    es = n(325278);
let el = new ea.Vy("InputWatcher");
class eo {
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
        if ((0, er.uF)() && R().satisfies(M.A?.os.release, es.PH))
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
                b.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let ed = (0, W.mj)({
        kind: "user",
        name: "2026-07-krisp-cpu-disablement",
        defaultConfig: { consecutiveFailures: 1 },
        variations: { 1: { consecutiveFailures: 3 }, 2: { consecutiveFailures: 5 }, 3: { consecutiveFailures: 10 } },
    }),
    ec = (0, W.mj)({
        kind: "user",
        name: "2026-04-krisp-v9-ios",
        defaultConfig: {
            models: [
                { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
                { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
                { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
            ],
        },
        variations: {
            1: {
                models: [
                    { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
                    {
                        name: "small_NC_non_optimized",
                        maxSampleRate: 16e3,
                        filename: "c6.f.s.laughter.da1785_non_optimized.kef",
                    },
                    { name: "full_NC_non_optimized", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7.kef" },
                ],
            },
        },
    }),
    eu = (0, ee.Ay)({
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
let eE = (0, ee.Ay)({
    kind: "user",
    name: "2026-07-nvenc-reconstructed-frames",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eA = n(801644);
let eh = (0, W.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ef = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ep = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eT = n(625075);
let em = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eC = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eO(e) {
    return eC.getConfig({ location: e });
}
let eR = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eL = n(75076),
    ey = n(91777),
    eD = n(559633),
    ev = n(205106),
    eb = n(174459),
    eM = n(652215);
let eP = new ea.Vy("AudioEffects");
async function eU(e, t, n) {
    if (!(0, er.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eb.default.track(eM.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eP.error("Failed to probe audio effects for device", e),
            eb.default.track(eM.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var ew = n(967347),
    eG = n(617617),
    ex = n(125325),
    ek = n(499156),
    eF = n(738566),
    eV = n(353835),
    eB = n(927813),
    eH = n(38405),
    ej = n(350535),
    eW = n(280450),
    eY = n(131319),
    eK = n(347481),
    e$ = n(734057),
    ez = n(763827),
    eq = n(287809),
    eZ = n(117549),
    eX = n(765682);
let eQ = {
    enabled: !0,
    spatialBlend: 1,
    reflectionsEnabled: !1,
    roomSize: 25,
    distanceAttenuationEnabled: !1,
    mode: "arc",
    spread: 2,
    arcAngle: 20,
    gridColumns: 3,
    gridSpacing: 1,
    buckets: 10,
    listenerHeight: 0.15,
    distance: 5,
};
var eJ = n(355097),
    e0 = n(621380),
    e1 = n(731854),
    e2 = n(375708);
let e3 = new I.A("MediaEngineStore"),
    e5 = "MediaEngineStore",
    e6 = {
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
    e4 = { left: 1, right: 1 },
    e7 = 5 * eB.A.Millis.SECOND,
    e8 = 2 * eB.A.Millis.SECOND,
    e9 = 30 * eB.A.Millis.SECOND,
    te = +eB.A.Millis.MINUTE,
    tt = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    tn = 0;
var ti =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function tr() {
    return {
        mode: eM.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eQ },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e1.Hz,
        outputVolume: e1.Hz,
        inputDeviceId: e1.dx,
        outputDeviceId: e1.dx,
        videoDeviceId: e1.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tl.supports(e1.O5.VIDEO_HOOK),
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
let ta = {
        [e0.m.CUSTOM]: {},
        [e0.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e0.m.STUDIO]: {
            mode: eM.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ts = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tl = (0, y.hB)((0, y.WI)());
function to(e) {
    return eT.k.getConfig({ location: e }).videoEnabled;
}
e3.enableNativeLogger(!0);
let td = {},
    tc = new Set([e1.x.DEFAULT]),
    tu = tl.supports(e1.O5.AUTO_ENABLE),
    t_ = !1,
    tE = e1.x.STREAM,
    tA = 0,
    th = !1,
    tI = performance.now(),
    tf = null,
    tp = { [e1.dx]: nv("No Input Devices") },
    tT = { [e1.dx]: nv("No Output Devices") },
    tm = { [e1.dx]: nv("No Video Devices") },
    tg = new v.Ep(),
    tS = !1,
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = e1.qe,
    ty = e1.qe,
    tD = !1,
    tv = !1,
    tb = new v.Ep(),
    tM = !1,
    tP = !1,
    tU = !1,
    tw = !1,
    tG = new v.Ep(),
    tx = !1,
    tk = !1,
    tF = !1,
    tV = !1,
    tB = [],
    tH = !1,
    tj = null,
    tW = !1,
    tY = !1,
    tK = !1,
    t$ = !1,
    tz = e1.D1.UNKNOWN,
    tq = {},
    tZ = null,
    tX = null,
    tQ = !1;
ey.A.hasPermission(eX.iL.AUDIO, { showAuthorizationError: !1 }),
    ey.A.hasPermission(eX.iL.CAMERA, { showAuthorizationError: !1 });
let tJ = new Set(),
    t0 = !1,
    t1 = new Set(),
    t2 = {},
    t3 = null,
    t5 = null,
    t6 = null,
    t4 = !0,
    t7 = !1,
    t8 = new v.Ep(),
    t9 = !1,
    ne = !1,
    nt = !1,
    nn = !1,
    ni = {};
function nr(e) {
    return (function (e) {
        let { location: t } = e;
        return en.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function na() {
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
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
        t = td[e];
    return null == t && ((t = tr()), (td[e] = t)), t;
}
function nl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
        t = ns(e);
    if (e === e1.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eh.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = ta[t.activeInputProfile ?? e0.m.CUSTOM],
        i = n$() ? ni : ts,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function no(e) {
    let t = nl(e.context),
        n = t.mode;
    e.context === e1.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ek.A.getConfig({ location: "setInputMode" }),
        r = i && n === eM.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && n$(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.Hz;
    return S().clamp(e, 0, t);
}
function nc(e) {
    let t = nl(e.context),
        n = !tu || t.mute || t.deaf;
    switch (e.context) {
        case e1.x.DEFAULT:
            n = n || tS || tN || tC || !ey.A.didHavePermission(eX.iL.AUDIO);
            break;
        case e1.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e1.x.DEFAULT && U.A.updateNativeMute();
}
function nu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nl().videoHook && P.c1(n.desktopSource.sourcePid),
            tl.setGoLiveSource(null, tE)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tl.setGoLiveSource(null, tE),
        tR || e)
    ) {
        let t = nl().videoDeviceId;
        tR && t === e1.dx && ty === e1.dx && tL !== e1.qe ? (t = tL) : (ty = t),
            (tL = (tR = e) ? nw(tm, t) : e1.qe),
            tl.setVideoInputDevice(tL);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nr("MediaEngineStore go live"),
                r = nl().videoHook,
                a = nN(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, es.fG) ? es.zl : es.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= es.zl &&
                (l =
                    !0 === t5
                        ? eS.getConfig({ location: "updateVideo" }).enabled
                        : eg.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !J.getConfig({ location: "updateVideo" }).enabled,
                d = r && em.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = ef.getConfig({ location: "updateVideo" });
            tl.setGoLiveSource(
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
                        allowScreenCaptureKit: nC(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e7,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? et.definition.defaultConfig : et.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tE,
            );
        }
        null != t.cameraSource &&
            tl.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tE,
            );
    }
}
function n_(e) {
    switch (e) {
        case e1.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case e1.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case e1.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case e1.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case e1.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case e1.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case e1.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case e1.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case e1.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nE = new Set([
    e1.CO.KRISP_INIT_ERROR,
    e1.CO.KRISP_INIT_ERROR_NATIVE,
    e1.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e1.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e1.CO.KRISP_INIT_ERROR_UNSIGNED,
    e1.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nA() {
    tz = e1.D1.UNKNOWN;
}
function nh(e) {
    e !== tz && ((tz = e), i.emitChange());
}
function nI(e, t) {
    if (
        (e3.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e), voiceProcessingErrorDetails: t }),
        eb.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nE.has(e))
    ) {
        tV = !0;
        return;
    }
    e === e1.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tW = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nf(e, t) {
    let n = t === e1.$C.LIVE;
    e3.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e1.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case e1.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function np(e) {
    return { enabled: e, ...(e && 1 ? e6 : { useAGC2: !1 }) };
}
function nT(e, t) {
    e.setAutomaticGainControl(np(t));
}
function nm(e, t) {
    let n = (0, ev.A)(t, i.getSystemMicrophoneMode());
    n !== t && e3.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t && !0);
}
function ng() {
    let e = nl(),
        t = e.inputDeviceId,
        n = eK.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eK.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, ev.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    tl.setVoiceSampleRateCap(a), tl.setVoiceChannelCountCap(s);
}
function nS(e) {
    let t = nl(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eK.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eK.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nT(e, eK.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nm(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nH(t.audioMixerSettings)),
        ng(),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e1.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eI.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nP(tp[i.getInputDeviceId()]) || nP(tT[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isDesktop)()) {
        let { consecutiveFailures: t } = (function (e) {
            let { location: t } = e;
            return ed.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setNoiseCancellationCpuDisablement(t);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nN() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, es.yg);
}
function nC() {
    return (0, f.isMac)() && tl.supports(e1.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, es.e);
}
function nO() {
    return (
        (0, f.isWindows)() &&
        tl.supports(e1.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tl.supports(e1.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nR() {
    return tl.supports(e1.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ns(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e5, td), i;
}
function ny() {
    let e = nl();
    nx(e.inputDeviceId),
        tl.setAudioOutputDevice(e.outputDeviceId),
        nu(),
        tl.setInputVolume(e.inputVolume),
        tl.setOutputVolume(e.outputVolume),
        tl.setAecDump(e.aecDumpEnabled),
        tl.setSidechainCompression(e.sidechainCompression),
        tl.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tl.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nj(e.audioMixerSettings);
}
function nD() {
    tu || tl.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nv(e) {
    return { id: e1.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nb(e, t) {
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
let nM = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nP(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nU(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nv(i);
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
                    case nb(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nM.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nb(e, i):
                    case "audiooutput" === e.type && nb(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nw(e, t) {
    let n = e[t] ?? e[e1.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nG(e) {
    if (!(0, f.isWindows)() || !$.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tp[e];
    t?.guid != null && eU(t.guid, e, tl);
}
function nx(e) {
    tl.setAudioInputDevice(e), nG(e);
}
function nk(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eG.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eJ.W.USER ? e1.x.DEFAULT : e1.x.STREAM,
            r = i === e1.x.STREAM ? e1.Cn : e1.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nl(i);
        for (let [e, t] of Object.entries(a))
            null == (0, ex.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tl.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tl.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nL({ localMutes: s, localVolumes: l }, i);
    }
}
function nV(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e3.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eV.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eV.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            b.h.wait(() => {
                                b.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return null != e && nl().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nB() {
    let e = e1.x.DEFAULT,
        { videoToggleStateMap: t } = nl(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    nL({ videoToggleStateMap: t }, e, !1);
}
function nH(e) {
    let { enabled: t } = eF.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && tl.supports(e1.O5.SPATIAL_AUDIO);
}
function nj(e) {
    (t$ = nH(e)),
        tl.setAudioMixerOptions({
            isSpatial: t$,
            enabled: t$,
            spatialBlend: e.spatialBlend,
            reflectionsEnabled: e.reflectionsEnabled,
            roomSize: e.roomSize,
            distanceAttenuationEnabled: e.distanceAttenuationEnabled,
        });
}
function nW(e) {
    let t = nl(),
        n = tl.getAudioSubsystem(),
        r = tl.getAudioLayer(),
        a = nw(tp, t.inputDeviceId),
        s = tp[a]?.name,
        l = (0, ev.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eb.default.track(eM.HAw.VOICE_PROCESSING, {
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
function nY() {
    let e = nl(),
        t = t1.size > 0,
        n = e.inputDeviceId,
        i = eK.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eK.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = np(eK.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    tl.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        ng();
}
async function nK() {
    if (!tl.supports(e1.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((nt = !0), (ne = tl.supports(e1.O5.GAMESCOPE_CAPTURE)));
}
function n$() {
    return (tF || !1) && !tV;
}
async function nz() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tF = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tB = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e3.warn(`Failed to load Krisp module: ${t.message}`), eH.A.captureException(t);
        let e = e1.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e1.CO.KRISP_INIT_ERROR : n;
        }
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
            eb.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tk = !1;
    }
}
async function nq() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(tt);
        if (null === i) return void e3.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                tt,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e3.log("OpenH264 download status", e);
                },
            );
            e3.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e3.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eb.default.track(eM.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e3.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e3.error("OpenH264 download failed", e);
    }
}
function nZ(e) {
    e === e1.rB.AUTOMATIC
        ? (nL({ automaticAudioSubsystem: !0 }), nX())
        : (nL({ automaticAudioSubsystem: !1 }), tl.setAudioSubsystem(e));
}
function nX() {
    tl.queueAudioSubsystem(e1.rB.EXPERIMENTAL);
}
function nQ(e) {
    let { section: t } = e;
    return t === eM.nc_.VOICE && nD(), !1;
}
class nJ extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new eo(tl, this)),
            tg.start(e9, () => {
                e3.error("Device enumeration timed out"), eb.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tl.on(y.bg.Connection, (e) => {
                let t;
                nY(), no(e), nc(e), nS(e);
                let n = nl();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e1.fd.H265_HARDWARE_ONLY, !0),
                          (null != tX
                              ? tX
                              : "u" > typeof window
                                ? (tX = na().then((e) => ((tZ = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e1.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e1.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e1.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eu.definition.defaultConfig : eu.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e1.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e1.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e1.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e1.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e1.x.STREAM)
                ) {
                    let t = nk(tT);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e1.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e1.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e1.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = Y.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e1.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = X.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e1.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, f.isWindows)() &&
                    t3?.startsWith("AMD") &&
                    eO("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e1.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t3?.startsWith("Intel") &&
                    !0 === t5 &&
                    1 === t6 &&
                    eR.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e1.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e1.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t3?.startsWith("Intel") &&
                    !0 === t5 &&
                    1 === t6 &&
                    eN.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e1.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t3?.startsWith("Qualcomm") &&
                    eO("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e1.fd.WMF_GPU_ENCODE, !0),
                tl.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = nl(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eW.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eW.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e1.x.DEFAULT &&
                        ((tv = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tv;
                            (tv = !0),
                                e && i.emitChange(),
                                tb.start(e8, () => {
                                    (tv = !1), i.emitChange();
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
                            eb.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, nI),
                    e.on(y.yq.VoiceActivityDetectorError, nI),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eb.default.track(eM.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eY.A.bitrate),
                    e.applyVideoQualityMode(eZ.A.mode),
                    (0, f.isWindows)() &&
                        tl.supports(e1.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tl.setAsyncVideoInputDeviceInit(!0);
            }),
            tl.on(y.bg.DeviceChange, (e, t, n) => {
                tg.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tl.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tl.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tl.on(y.bg.AudioPermission, (e) => {
                (tQ = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tl.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tl.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eV.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e3.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eb.default.track(
                        eM.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e3.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e3.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            tl.on(y.bg.VideoInputInitialized, (e) => {
                eb.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eB.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: ez.A.getMediaSessionId(),
                    rtc_connection_id: ez.A.getRTCConnectionId(),
                });
            }),
            tl.on(y.bg.AudioInputInitialized, (e) => {
                eb.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eB.A.Millis.SECOND),
                    rtc_connection_id: ez.A.getRTCConnectionId(),
                });
            }),
            tl.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tl.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = tA < 3;
                (tA += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e3.warn(
                                      `Clips init failure budget exhausted (${tA} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            tl.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== tA && (e3.info(`Clips bridge reported healthy; resetting restart budget (was ${tA}).`), (tA = 0));
            }),
            tl.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                th !== e && (e3.info(`Clips recorder ready changed: ${e}`), (th = e));
            }),
            tl.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e3.info("Clips bridge idle shutdown");
            }),
            tl.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            tl.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tl.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tl.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tl.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eb.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tl.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tl.on(y.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: tn++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tl.on(y.bg.VoiceProcessingError, nI),
            tl.on(y.bg.VideoFilterError, nf),
            tl.on(y.bg.SpatialAudioStatus, nh),
            tl.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = n0(e);
                null !== t && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tl.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nK(),
            l.reset(),
            (0, ew.w)().then((e) => {
                null != e && ((t3 = e.gpu_brand), (t5 = e.has_intel_hybrid_igpu), (t6 = e.gpu_count));
            }),
            tl.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), tl.eachConnection(nS), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e5, { [e1.x.DEFAULT]: e }), D.w.remove("audio")),
            (td = D.w.get(e5) ?? {}),
            S().each(td, (e) => {
                S().defaultsDeep(e, tr()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ej.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tl.supports(e1.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...eQ })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            ny(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tk && !tF
                ? ((tk = !0), nz())
                : (0, f.isWeb)() && tl.supports(e1.O5.NOISE_CANCELLATION)
                  ? ((tF = !0), i.emitChange())
                  : (0, f.isWeb)() && nL({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nq(),
            nB(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !nn)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e1.tl;
                let n = n0(e);
                null !== n && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e1.tl);
            }
            (nn = !0), setTimeout(t, e1.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tf &&
            tl
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tf = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e3.error("Failed to parse codec survey", e), (tf = !1);
                    }
                })
                .catch((e) => {
                    e3.error("Failed to get codec survey", e), (tf = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t2 = {
                [e1.O5.VIDEO]: tl.supports(e1.O5.VIDEO),
                [e1.O5.DESKTOP_CAPTURE]: tl.supports(e1.O5.DESKTOP_CAPTURE),
                [e1.O5.HYBRID_VIDEO]: tl.supports(e1.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eW.default, eY.A, eK.A, e$.A, G.Ay, V.A, ez.A, H.Ay, eG.A, eq.default, eZ.A);
    }
    supports(e) {
        return (e !== e1.O5.VIDEO || !!to("MediaEngineStore.supports")) && tl.supports(e);
    }
    supportsInApp(e) {
        return (e !== e1.O5.VIDEO || !!to("MediaEngineStore.supportsInApp")) && (t2[e] || tl.supports(e));
    }
    isSupported() {
        return tl.supported();
    }
    isNoiseSuppressionSupported() {
        return tl.supports(e1.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n$();
    }
    isNoiseCancellationError() {
        return tW;
    }
    isAutomaticGainControlSupported() {
        return tl.supports(e1.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nR() && (tl.supports(e1.O5.LEGACY_AUDIO_SUBSYSTEM) || tl.supports(e1.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tl.supports(e1.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tl.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n$();
    }
    isAecDumpSupported() {
        return tl.supports(e1.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tl.supports(e1.O5.VIDEO) && tl.supports(e1.O5.SIMULCAST);
    }
    getAecDump() {
        return nl().aecDumpEnabled;
    }
    getMediaEngine() {
        return tl;
    }
    getVideoComponent() {
        return tl.Video;
    }
    getCameraComponent() {
        return tl.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tH;
    }
    isEnabled() {
        return tu;
    }
    isMute() {
        return this.isSelfMute() || tS;
    }
    isDeaf() {
        return this.isSelfDeaf() || tO;
    }
    isServerMute() {
        return tS;
    }
    isServerDeaf() {
        return tO;
    }
    getAudioMixerSettings() {
        return nl().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioRequested() {
        return t$;
    }
    getSpatialAudioStatus() {
        return tz;
    }
    hasContext(e) {
        return null != td[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return e === e1.x.DEFAULT && tN;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nl(e).mute ||
            !ey.A.didHavePermission(eX.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e1.x.DEFAULT && tC)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tD;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tD = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
            t = t7 && "voice_isolation" !== this.getSystemMicrophoneMode() && nl(e).mode === eM.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eK.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t4;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return !this.isSupported() || nl(e).deaf;
    }
    isVideoEnabled() {
        return tR && tP;
    }
    isVideoAvailable() {
        return Object.values(tm).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tP;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.STREAM;
        return tE === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.STREAM;
        return tE === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return e !== eW.default.getId() && (nl(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tl.supports(e1.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return nl(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return nl(t).videoToggleStateMap[e] ?? eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return t === e1.x.DEFAULT && tJ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return e === e1.x.DEFAULT && tJ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tY;
    }
    isNativeAudioPermissionReady() {
        return tQ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tE;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tI;
    }
    isH264MfDecodeAvailable() {
        return tf;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT,
            n = nl(t).localPans[e];
        return null != n ? n : e4;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT,
            n = t === e1.x.STREAM ? e1.Cn : e1.Hz,
            i = nl(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nl().inputVolume;
    }
    getOutputVolume() {
        return nl().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return nl(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return nl(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(td, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eM.TBI.PUSH_TO_TALK && tc.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nw(tp, nl().inputDeviceId);
    }
    getOutputDeviceId() {
        return nw(tT, nl().outputDeviceId);
    }
    getVideoDeviceId() {
        return nw(tm, nl().videoDeviceId);
    }
    getInputDevices() {
        return tp;
    }
    getOutputDevices() {
        return tT;
    }
    getVideoDevices() {
        return tm;
    }
    getEchoCancellation() {
        let e = nl();
        return eK.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tl.supports(e1.O5.SIDECHAIN_COMPRESSION) && nl().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nl().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nl().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tZ && tZ;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && nl().openH264Enabled;
    }
    getLoopback() {
        return t1.size > 0;
    }
    getLoopbackReasons() {
        return t1;
    }
    getNoiseSuppression() {
        let e = nl();
        return eK.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nl();
        return eK.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nl().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nl().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nl().silenceWarning;
    }
    getDebugLogging() {
        return tl.getDebugLogging();
    }
    getQoS() {
        return nl().qos;
    }
    getAttenuation() {
        return nl().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nl().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nl().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nO() && nl().automaticAudioSubsystem ? e1.rB.AUTOMATIC : tl.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tl.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nl().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e0.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return nl(e);
    }
    getState() {
        return {
            settingsByContext: td,
            inputDevices: tp,
            outputDevices: tT,
            appSupported: t2,
            krispModuleLoaded: tF,
            krispFatalError: tV,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tE,
        };
    }
    getInputDetectedThisConnection() {
        return tU;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tw;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return f.isPlatformEmbedded || this.getMode(e) !== eM.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        tl.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return t_;
    }
    getVideoHook() {
        return nl().videoHook;
    }
    supportsVideoHook() {
        return tl.supports(e1.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nl().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tl.supports(e1.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && tl.supports(e1.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nl().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tl.supports(e1.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nt;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e1.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eE.definition.defaultConfig : eE.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e1.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return ne;
    }
    getSpeakingWhileMuted() {
        return tv;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tB;
    }
    getKrispVadActivationThreshold() {
        return nl().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t9;
    }
    setHasActiveCallKitCall(e) {
        t9 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? tl.supports(e1.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, es.P$) && nC()
            : (0, f.isWindows)()
              ? tl.supports(e1.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && tl.supports(e1.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tq[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
            t = this.supports(e1.O5.VIDEO)
                ? [{ rid: "100", type: e === e1.x.DEFAULT ? e1.mI.VIDEO : e1.mI.SCREEN, quality: e1.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e1.x.DEFAULT &&
                Q.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e1.mI.VIDEO, quality: e1.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return tl.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tK &&
            ((tK = !0),
            (0, f.isWeb)() &&
                tl.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e3.warn("DAVE preload failed:", e), eH.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tl.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return th;
    }
    isClipsRecordingReadySignalSupported() {
        return tl.supports(e1.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t3;
    }
}
function n0(e) {
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
let n1 = (i = new nJ(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nu(r, null), null == n && nA(), null != t || null == n)) {
            tx = !1;
            return;
        }
        if (tx) return;
        tx = !0;
        let a = nl();
        (a.mute || a.deaf) && (nL({ deaf: !1, mute: !1 }), tl.eachConnection(nc));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tS = t.mute || t.suppress), (tO = t.deaf), tl.eachConnection(nc);
                let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
                    n = !tx && null == t.channelId;
                return nu(!e && !n && tR), (tj = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eW.default.getId() || null != ez.A.getChannelId() || nu(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tS = !1), (tO = !1);
        let t = nl();
        nO() && (nR() ? nZ(e1.rB.AUTOMATIC) : t.automaticAudioSubsystem && nX()),
            tl.supports(e1.O5.OFFLOAD_ADM_CONTROLS) && tl.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                ei.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tl.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isIOS)() && (tl.setNcModels?.(ec.getConfig({ location: "setupKrisp" }).models), i.emitChange()),
            nG(t.inputDeviceId),
            nF();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eM.S7L.CONNECTING:
                nD();
                break;
            case eM.S7L.RTC_CONNECTING:
                (tw = !1), (o = void 0), (d = void 0), (tU = !1), (t7 = !1), t8.stop(), tG.stop(), l.reset();
                break;
            case eM.S7L.RTC_CONNECTED:
                nu();
                break;
            case eM.S7L.DISCONNECTED:
                (ni = {}),
                    (function () {
                        if (0 === tJ.size) return;
                        let e = e1.x.DEFAULT,
                            { disabledLocalVideos: t } = nl(e);
                        tJ.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tl.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tJ.clear(),
                            nL({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nB();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tN = t), tl.eachConnection(nc);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nl(t);
        if (t === e1.x.DEFAULT && (ey.A.requestPermission(eX.iL.AUDIO), tC)) return !1;
        (i = !r && !i) || (r = !1), n || (tD = !0), nL({ mute: i, deaf: r }, t), tl.eachConnection(nc);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nL({ mute: n }, t), i || (tD = !0), tl.eachConnection(nc);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nL({ deaf: !nl(t).deaf }, t), tl.eachConnection(nc);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eW.default.getId()) return;
        let { localMutes: i } = nl(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nL({ localMutes: i }, t),
            tl.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eM.bb8.DISABLED,
            { disabledLocalVideos: l } = nl(t),
            o = l[n] ?? !1,
            d = tJ.has(n),
            c = i === eM.bb8.AUTO_ENABLED || i === eM.bb8.MANUAL_ENABLED;
        e3.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e1.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e3.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nl(t);
        if (
            (h[n] === eM.bb8.AUTO_PROBING &&
                i === eM.bb8.AUTO_ENABLED &&
                (0, eL.A)(n, s ? e1.Al.AUTO_DISABLE : e1.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nL({ videoToggleStateMap: h }, t, r),
            i === eM.bb8.AUTO_PROBING
                ? ez.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : ez.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            t0 ||
                (e3.info(`isAutoDisableAllowed=${t0} - disabling VideoHealthManager`),
                ez.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !t0)) return;
            (0, eL.A)(n, s ? e1.Al.AUTO_DISABLE : e1.Al.AUTO_ENABLE, c), s ? tJ.add(n) : tJ.delete(n);
        } else
            A &&
                (d && !s
                    ? (e3.info("disallowing auto-disable for this session because of manual override by user"),
                      (t0 = !1),
                      ez.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eL.A)(n, e1.Al.MANUAL_REENABLE, c))
                    : (0, eL.A)(n, s ? e1.Al.MANUAL_DISABLE : e1.Al.MANUAL_ENABLE, c));
        _ && !s && tJ.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nL({ disabledLocalVideos: l }, t, r),
            tl.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eW.default.getId()) return;
        let r = t === e1.x.STREAM ? e1.Cn : e1.Hz,
            { localVolumes: a } = nl(t);
        i === r ? delete a[n] : (a[n] = i),
            nL({ localVolumes: a }, t),
            tl.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nL({ audioMixerSettings: n }, t),
            nj(n),
            t$ || nA(),
            tl.eachConnection((e) => e.setSpatialAudioEnabled(t$), e1.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nl(t);
        (a[n] = { left: i, right: r }), nL({ localPans: a }, t), tl.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nL({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tl.eachConnection(no);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nL({ inputVolume: nd(t) }), tl.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nL({ outputVolume: t }), tl.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nw(tp, t)),
            (tI = performance.now()),
            nL({ inputDeviceId: t }),
            nx(t),
            tl.eachConnection(nS),
            (o = void 0),
            (d = void 0),
            t8.stop(),
            (t7 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eA.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tU = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nL({ outputDeviceId: (t = nw(tT, t)) }), tl.setAudioOutputDevice(t), tl.eachConnection(nS);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nL({ activeInputProfile: t });
        let n = nl();
        tl.eachConnection((e) => {
            no(e), nS(e);
        }),
            tl.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nY();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nL({ echoCancellation: e.enabled }),
            n = eK.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        tl.eachConnection((e) => e.setEchoCancellation(n)), nY(), nW(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nL({ sidechainCompression: e.enabled })), tl.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nL({ sidechainCompressionStrength: e.strength });
        tl.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t1.add(n) : t1.delete(n), nY();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nL({ noiseSuppression: e.enabled }),
            n = eK.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        tl.eachConnection((e) => e.setNoiseSuppression(n)), nY(), nW(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nL({ automaticGainControl: e.enabled });
        tl.eachConnection((e) => nT(e, t.automaticGainControl)), nY(), nW(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nL({ noiseCancellation: e.enabled });
        tl.eachConnection((e) => nm(e, t.noiseCancellation)), nY(), nW(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eD.A.setKrispModelOverride(e.model), (_ = e.model), nY();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nL({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tl.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eD.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tH = e.enabled), tl.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nL({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nL({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nL({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nL({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tl.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nL({ qos: t }), tl.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tp;
        if (
            ((tp = nU(e, { deviceType: e1.oh.AUDIO_INPUT, defaultName: e2.intl.string(e2.t["/QIjDA"]) })),
            !S().isEqual(tp, t))
        ) {
            let e = nl();
            nx(nw(tp, e.inputDeviceId)), tl.eachConnection(nS);
        }
        !(function (e) {
            let t = tT;
            if (
                ((tT = nU(e, { deviceType: e1.oh.AUDIO_OUTPUT, defaultName: e2.intl.string(e2.t.xlUg0v) })),
                !S().isEqual(tT, t))
            ) {
                let e = nl(),
                    n = nw(tT, e.outputDeviceId);
                tl.setAudioOutputDevice(n), tl.eachConnection(nS);
                let i = nk(t),
                    r = nk(tT);
                i !== r &&
                    tl.eachConnection((e) => {
                        e.context === e1.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tP = e.videoDevices.length > 0;
        let n = tm;
        if (
            ((tm = nU(e, { deviceType: e1.oh.VIDEO_INPUT, defaultName: e2.intl.string(e2.t.WKWARY) })),
            tR && !S().isEqual(tm, n))
        ) {
            let e = void 0 !== tm[tL],
                t = tL === e1.dx && n[e1.dx]?.disabled,
                i = "Firefox" === C().name && "" === tL && n[tL]?.name === "Default" && !n[tL]?.disabled;
            nu(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nL({ inputVolume: nd(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e5), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tw = !0 !== tU && !t), t)) (tU = !0), (t7 = !1), t8.stop(), tG.stop();
        else if (nl().mode === eM.TBI.VOICE_ACTIVITY && tU) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eA.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t8.start(te, () => {
                    eb.default.track(eM.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tp[nw(tp, nl().inputDeviceId)]?.name,
                        rtc_connection_id: ez.A.getRTCConnectionId(),
                    }),
                        (t7 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tG.start(t * eB.A.Millis.MINUTE, () => {
                        (tU = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nZ(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nL({ bypassSystemInputProcessing: t }), tl.setAudioInputBypassSystemProcessing(t), ng(), nW(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tu = e.enabled), e.unmute && nL({ mute: !1, deaf: !1 }), tl.eachConnection(nc);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ey.A.requestPermission(eX.iL.CAMERA), nu(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tu = !1), tl.eachConnection(nc);
                    break;
                case "video":
                    nu(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e1.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eV.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nV(o, r)),
                s !== tE && (null != a && tl.setGoLiveSource(null, tE), (tE = s)),
                nu(s === e1.x.STREAM && tR, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e1.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e1.x.STREAM && tR,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nu(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nu(tR, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nL({ videoDeviceId: (t = nw(tm, t)) }), nu();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return t_ !== e.required && ((t_ = e.required), e.required || tl.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nQ,
    USER_SETTINGS_MODAL_SET_SECTION: nQ,
    CERTIFIED_DEVICES_SET: function () {
        return tl.eachConnection(nS), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tc.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tc.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (td = t.settingsByContext),
            (tp = t.inputDevices),
            (tT = t.outputDevices),
            (t2 = t.appSupported),
            (tF = t.krispModuleLoaded),
            (tV = t.krispFatalError),
            (c = t.krispVersion),
            (tE = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === eM.g6G.BACKGROUND && tR && !n) (tM = !0), nu(!1);
        else {
            if (t !== eM.g6G.ACTIVE || !tM) return !1;
            (tM = !1), nu(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tl.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tC) return !1;
        (tC = n), tl.eachConnection(nc);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eX.hL.ACCEPTED;
        switch (n) {
            case eX.iL.AUDIO:
                (tQ = !0), tl.eachConnection(nc);
                break;
            case eX.iL.CAMERA:
                !i && tR && nu(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tl.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nL({ aecDumpEnabled: t });
        tl.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nL({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (td = Object.values(e1.x).reduce((e, n) => {
            let i = tr();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e5, td),
            ny();
    },
    CHANNEL_DELETE: function () {
        if ((!tR && null == a) || null != ez.A.getRTCConnectionId()) return !1;
        nu(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e1.CO.KRISP_CPU_OVERUSE) {
            (ni.noiseCancellation = !1), (ni.noiseSuppression = !0);
            let e = nl();
            return tl.eachConnection((t) => nm(t, e.noiseCancellation)), nY(), nW(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e1.CO.KRISP_VAD_CPU_OVERUSE &&
            ((ni.modeOptions = { vadUseKrisp: !1 }), tl.eachConnection((e) => no(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tW && ((tW = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tl.applyMediaFilterSettings(t).finally(() => {
            (tY = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tY = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tY = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eJ.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nF(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, x.T)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tl.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nl().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eV.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nV(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = nr("MediaEngineStore clips"),
            c = nl().videoHook,
            u = !c || !J.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && em.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = ef.getConfig({ location: "handleClipsInit" });
        tl.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nN(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nC(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e7,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e1.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), tl.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t4 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tq[t] = { active: n, available: i }), ng();
    },
}));

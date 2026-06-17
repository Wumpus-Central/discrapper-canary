"use strict";
n.d(t, { A: () => H });
var i = n(691540),
    r = n(97483),
    s = n(228366),
    a = n(77729),
    o = n(627363),
    l = n(710195),
    u = n(952818),
    c = n(569926),
    d = n(652896),
    _ = n(616356),
    h = n(495544),
    f = n(941327),
    p = n(741394),
    E = n(459838),
    m = n(439372),
    g = n(967347),
    A = n(885386),
    I = n(763827),
    T = n(116956),
    S = n(174459),
    y = n(723702),
    C = n(734066),
    N = n(274372),
    v = n(372684),
    R = n(974293),
    O = n(915618),
    b = n(572164),
    D = n(696016),
    L = n(652215),
    w = n(325278);
class M extends m.A {
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => this.applyNativeClipsSettings(),
        STREAM_DELETE: (e) => this.handleStreamEnded(e),
        STREAM_CLOSE: (e) => this.handleStreamEnded(e),
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, C.Pm)() || n !== L.S7L.RTC_CONNECTED) return;
        let r = h.default.getId();
        if (t === E.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === E.x.STREAM && null != i) {
            let { ownerId: e } = (0, d.Iy)(i);
            if (e !== r) return;
            let t = T.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === E.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = T.A.getRTCConnection(
            d._z({ streamType: null != i ? w.U4.GUILD : w.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        S.default.track(L.HAw.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n,
            clip_runtime: (0, R.GN)("handleClipsInitFailure"),
        });
    }
    maybeShowClipsWarning(e) {
        let t = I.A.getChannelId();
        null == t ||
            N.Ay.getClipsWarningShown(t) ||
            e === h.default.getId() ||
            !N.Ay.isClipsEnabledForUser(e) ||
            (A.Q$.getSetting() &&
                (s.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        I.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, O.A)(f.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, C.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == N.Ay.getHardwareClassification() ||
                    null == N.Ay.getHardwareClassificationForDecoupled() ||
                    N.Ay.getHardwareClassificationVersion() !== D.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        s.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== E.x.STREAM || !(0, O.A)(f.Ay)) return;
        let s = T.A.getRTCConnection(
            d._z({ streamType: null != r ? w.U4.GUILD : w.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, g.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand).filter((e) => null != e && "" !== e),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await a.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                S.default.track(L.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: D.V0,
                    gpu_models: e,
                    clip_runtime: (0, R.GN)("classifyHardwareAndTrack"),
                }),
                t
            );
        } catch (e) {
            return v.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, y.isWindows)()) {
            let t = e.some((e) => D.sc.test(e)),
                n = e.some((e) => D.l_.test(e));
            return t ? v.k9.MEETS_AUTO_ENABLE : n ? v.k9.MEETS_MINIMUM : v.k9.BELOW_MINIMUM;
        }
        return (0, y.isMac)()
            ? "arm64" === a.A.app.getAppArch()
                ? v.k9.MEETS_AUTO_ENABLE
                : v.k9.MEETS_MINIMUM
            : v.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, O.A)(f.Ay)) return;
        let t = I.A.getRTCConnection();
        if (null == t) return;
        if (e === h.default.getId()) return void t.setClipRecordUser(e, "audio", (0, b.TD)());
        let n = N.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, O.A)(f.Ay)) return;
        let t = I.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, b.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, O.A)(f.Ay) && h.default.getId() === e) {
            let n = (0, b.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var P = n(334686),
    x = n(315240);
n(257290);
var k = n(201538),
    U = n(409067),
    G = n(227628),
    F = n(468550),
    V = n(375708);
class B extends M {
    constructor() {
        super(),
            Object.assign(this.actions, {
                CLIPS_SAVE_CLIP: (e) => {
                    let { clip: t } = e;
                    t.isCandidate || this.maybeOpenQuickBar();
                },
                CLIPS_PROMOTE_CLIP_CANDIDATE: (e) => this.maybeOpenQuickBar(),
            });
    }
    stores = new Map().set(l.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!N.Ay.canShowReminders()) return;
        let e = u.Ay.getVisibleGame();
        null == e ||
            (N.Ay.getLastClipsSession()
                ?.newClipIds.map(N.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (G.MZ.getState().isOpen || (0, G.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !N.Ay.canShowReminders()) return;
        let t = N.Ay.getLastClipsSession();
        if (null == t || 0 === t.newClipIds.length) return;
        let { enabled: n } = P.O.getConfig({ location: "ClipsManager" }),
            i = n && !N.Ay.getSettings().showPovClipsInGallery;
        t.newClipIds.some((t) => {
            let n = N.Ay.getClipById(t);
            return null != n && n.applicationId === e && (!i || !(0, U.kD)(n));
        }) && (0, F.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: V.intl.string(V.t["d+41qJ"]),
            type: r.Ck.CLIP,
            options: { duration: D.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, O.A)(f.Ay)) return;
        let t = f.Ay.getMediaEngine(),
            n = () => {
                let n = N.Ay.getSettings(),
                    i = (0, b.TD)();
                if (
                    (t.setClipBufferLength(i ? n.clipsLength / 1e3 : 0),
                    e?.settings.decoupledClipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: i, resolution: r } = n.clipsQuality;
                    t.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, i) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
            };
        (0, b.TD)()
            ? ((0, k.UW)(), (0, R.qi)("applyNativeClipsSettings") && !(0, k.t_)() ? (0, k.so)().then(n) : n())
            : n();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = u.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = u.Ay.getVisibleGame();
        if (((0, G.yj)(), e.removed.length > 0 && null == t)) {
            let t = e.removed[0]?.id;
            queueMicrotask(() => this.handleClipsReminder(t));
        }
        null == t ||
            ((0, F.kF)(),
            this.prefetchRichPresenceData(t.id),
            e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), D.dV)
                : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        c.I.fetchMany([e]), o.YY.fetchMany([e]);
    }
    handleStreamEnded(e) {
        if (!(0, b.TD)()) return;
        let { ownerId: t } = (0, d.Iy)(e.streamKey);
        t !== h.default.getId() || ((0, R.qi)("handleStreamEnded") && this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, b.TD)() || null != _.A.getCurrentUserActiveStream()) return;
        let e = u.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        if ((0, R.qi)("fireClipsInitEvent") && !(0, k.t_)())
            return void (0, k.so)().then(() => {
                (0, k.t_)() && this.fireClipsInitEvent();
            });
        let t = N.Ay.getSettings();
        s.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = N.Ay.getSettings();
        "" !== e &&
            e !== N.he &&
            x
                .Fb(e)
                .then(() => j())
                .catch((e) => {
                    D.nx.error("Failed to load clips directory on connection open", e);
                });
    }
}
async function j() {
    if (N.Ay.hasClips() || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    if (N.Ay.getSettings().storageLocation === e)
        try {
            let e = await a.A.app.getPath("videos");
            x.HU((0, p.CN)(e, N._c));
        } catch (e) {
            D.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let H = new B();

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
    h = n(280450),
    f = n(451409),
    E = n(741394),
    p = n(459838),
    m = n(439372),
    g = n(967347),
    A = n(885386),
    I = n(763827),
    T = n(116956),
    S = n(174459),
    N = n(723702),
    C = n(734066),
    y = n(274372),
    O = n(372684),
    R = n(974293),
    v = n(915618),
    b = n(572164),
    L = n(696016),
    D = n(652215),
    w = n(325278);
class P extends m.A {
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
        CLIPS_RESTART: () => this.fireClipsInitEvent(!0),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, C.Pm)() || n !== D.S7L.RTC_CONNECTED) return;
        let r = h.default.getId();
        if (t === p.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === p.x.STREAM && null != i) {
            let { ownerId: e } = (0, d.Iy)(i);
            if (e !== r) return;
            let t = T.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === p.x.DEFAULT &&
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
        S.default.track(D.HAw.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n,
            clip_runtime: (0, R.GN)("handleClipsInitFailure"),
        });
    }
    maybeShowClipsWarning(e) {
        let t = I.A.getChannelId();
        null == t ||
            y.Ay.getClipsWarningShown(t) ||
            e === h.default.getId() ||
            !y.Ay.isClipsEnabledForUser(e) ||
            (A.Q$.getSetting() &&
                (s.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        I.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, v.A)(f.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, C.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == y.Ay.getHardwareClassification() ||
                    null == y.Ay.getHardwareClassificationForDecoupled() ||
                    y.Ay.getHardwareClassificationVersion() !== L.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        s.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== p.x.STREAM || !(0, v.A)(f.Ay)) return;
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
                S.default.track(D.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: L.V0,
                    gpu_models: e,
                    clip_runtime: (0, R.GN)("classifyHardwareAndTrack"),
                }),
                t
            );
        } catch (e) {
            return O.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, N.isWindows)()) {
            let t = e.some((e) => L.sc.test(e)),
                n = e.some((e) => L.l_.test(e));
            return t ? O.k9.MEETS_AUTO_ENABLE : n ? O.k9.MEETS_MINIMUM : O.k9.BELOW_MINIMUM;
        }
        return (0, N.isMac)()
            ? "arm64" === a.A.app.getAppArch()
                ? O.k9.MEETS_AUTO_ENABLE
                : O.k9.MEETS_MINIMUM
            : O.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, v.A)(f.Ay)) return;
        let t = I.A.getRTCConnection();
        if (null == t) return;
        if (e === h.default.getId()) return void t.setClipRecordUser(e, "audio", (0, b.TD)());
        let n = y.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, v.A)(f.Ay)) return;
        let t = I.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, b.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, v.A)(f.Ay) && h.default.getId() === e) {
            let n = (0, b.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var M = n(430795);
n(452082);
var x = n(201538),
    U = n(409067),
    k = n(227628),
    G = n(468550),
    V = n(375708);
class F extends P {
    constructor() {
        super(),
            Object.assign(this.actions, {
                CLIPS_SAVE_CLIP: (e) => {
                    let { clip: t } = e;
                    t.isCandidate || this.maybeOpenQuickBar();
                },
                CLIPS_PROMOTE_CLIP_CANDIDATE: (e) => this.maybeOpenQuickBar(),
                CLIPS_SESSION_STOP: (e) => {
                    let { gameId: t } = e;
                    return this.handleClipsReminder(t ?? void 0);
                },
                CLIPS_SESSION_START: (e) => {
                    let { previousGameId: t } = e;
                    null != t ? this.handleClipsReminder(t) : (0, G.kF)();
                },
            });
    }
    stores = new Map().set(l.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!y.Ay.canShowReminders()) return;
        let e = u.Ay.getVisibleGame();
        null == e ||
            (y.Ay.getLastClipsSession()
                ?.newClipIds.map(y.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (k.MZ.getState().isOpen || (0, k.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !y.Ay.canShowReminders()) return;
        let t = y.Ay.getLastClipsSession();
        if (null == t || 0 === t.newClipIds.length) return;
        let n = !y.Ay.getSettings().showPovClipsInGallery;
        t.newClipIds.some((t) => {
            let i = y.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, U.kD)(i));
        }) && (0, G.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: V.intl.string(V.t["d+41qJ"]),
            type: r.Ck.CLIP,
            options: { duration: L.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, v.A)(f.Ay)) return;
        let { midSessionV3Flip: t } = (0, x.UW)(),
            n = f.Ay.getMediaEngine(),
            i = () => {
                let i = y.Ay.getSettings(),
                    r = (0, b.TD)();
                if (
                    (n.setClipsRecordingEnabled(r),
                    n.setClipBufferLength(r ? i.clipsLength / 1e3 : 0),
                    (e?.settings.decoupledClipsEnabled === !0 || e?.settings.clipsEnabled === !0) &&
                        this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: t, resolution: r } = i.clipsQuality;
                    n.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, t) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
                t &&
                    (L.nx.info("clips v3 effective state flipped; dispatching CLIPS_RESTART"),
                    s.h.dispatch({ type: "CLIPS_RESTART" }));
            };
        (0, b.TD)() && (0, R.qi)("applyNativeClipsSettings") && !(0, x.t_)() ? (0, x.so)().then(i) : i();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = u.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = u.Ay.getVisibleGame();
        (0, k.yj)(),
            null == t ||
                (this.prefetchRichPresenceData(t.id),
                e.added.find((e) => e.pid === t.pid)
                    ? setTimeout(() => this.fireClipsInitEvent(), L.dV)
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
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(0, b.TD)() || (!e && null != _.A.getCurrentUserActiveStream())) return;
        let t = u.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if ((0, R.qi)("fireClipsInitEvent") && !(0, x.t_)())
            return void (0, x.so)().then(() => {
                (0, x.t_)() && this.fireClipsInitEvent(e);
            });
        let n = y.Ay.getSettings();
        s.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = y.Ay.getSettings();
        "" !== e &&
            e !== y.he &&
            M.Fb(e)
                .then(() => B())
                .catch((e) => {
                    L.nx.error("Failed to load clips directory on connection open", e);
                });
    }
}
async function B() {
    if (y.Ay.hasClips() || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    if (y.Ay.getSettings().storageLocation === e)
        try {
            let e = await a.A.app.getPath("videos");
            M.HU((0, E.CN)(e, y._c));
        } catch (e) {
            L.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let H = new F();

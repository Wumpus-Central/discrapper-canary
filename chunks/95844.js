"use strict";
n.d(t, { A: () => H });
var i = n(691540),
    r = n(97483),
    a = n(228366),
    s = n(77729),
    l = n(627363),
    o = n(710195),
    d = n(952818),
    c = n(569926),
    u = n(652896),
    _ = n(616356),
    E = n(280450),
    A = n(451409),
    h = n(741394),
    I = n(459838),
    f = n(439372),
    p = n(967347),
    T = n(885386),
    m = n(763827),
    g = n(116956),
    S = n(174459),
    N = n(723702),
    C = n(734066),
    O = n(274372),
    R = n(372684),
    L = n(974293),
    D = n(915618),
    y = n(572164),
    v = n(696016),
    b = n(652215),
    M = n(325278);
class P extends f.A {
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
        if (!(0, C.Pm)() || n !== b.S7L.RTC_CONNECTED) return;
        let r = E.default.getId();
        switch (t) {
            case I.x.DEFAULT:
                this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
                break;
            case I.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, u.Iy)(i);
                if (e !== r) return;
                let t = g.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === I.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = g.A.getRTCConnection(
            u._z({ streamType: null != i ? M.U4.GUILD : M.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        S.default.track(b.HAw.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n,
            clip_runtime: (0, L.GN)("handleClipsInitFailure"),
        });
    }
    maybeShowClipsWarning(e) {
        let t = m.A.getChannelId();
        null == t ||
            O.Ay.getClipsWarningShown(t) ||
            e === E.default.getId() ||
            !O.Ay.isClipsEnabledForUser(e) ||
            (T.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        m.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, D.A)(A.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, C.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == O.Ay.getHardwareClassification() ||
                    null == O.Ay.getHardwareClassificationForDecoupled() ||
                    O.Ay.getHardwareClassificationVersion() !== v.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        a.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== I.x.STREAM || !(0, D.A)(A.Ay)) return;
        let a = g.A.getRTCConnection(
            u._z({ streamType: null != r ? M.U4.GUILD : M.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, p.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand).filter((e) => null != e && "" !== e),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await s.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                S.default.track(b.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: v.V0,
                    gpu_models: e,
                    clip_runtime: (0, L.GN)("classifyHardwareAndTrack"),
                }),
                t
            );
        } catch (e) {
            return R.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, N.isWindows)()) {
            let t = e.some((e) => v.sc.test(e)),
                n = e.some((e) => v.l_.test(e));
            return t ? R.k9.MEETS_AUTO_ENABLE : n ? R.k9.MEETS_MINIMUM : R.k9.BELOW_MINIMUM;
        }
        return (0, N.isMac)()
            ? "arm64" === s.A.app.getAppArch()
                ? R.k9.MEETS_AUTO_ENABLE
                : R.k9.MEETS_MINIMUM
            : R.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, D.A)(A.Ay)) return;
        let t = m.A.getRTCConnection();
        if (null == t) return;
        if (e === E.default.getId()) return void t.setClipRecordUser(e, "audio", (0, y.TD)());
        let n = O.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, D.A)(A.Ay)) return;
        let t = m.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, y.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, D.A)(A.Ay) && E.default.getId() === e) {
            let n = (0, y.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var U = n(430795);
n(452082);
var w = n(201538),
    G = n(409067),
    x = n(227628),
    k = n(468550),
    F = n(375708);
class V extends P {
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
                    null != t ? this.handleClipsReminder(t) : (0, k.kF)();
                },
            });
    }
    stores = new Map().set(o.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!O.Ay.canShowReminders()) return;
        let e = d.Ay.getVisibleGame();
        null == e ||
            (O.Ay.getLastClipsSession()
                ?.newClipIds.map(O.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (x.MZ.getState().isOpen || (0, x.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !O.Ay.canShowReminders()) return;
        let t = O.Ay.getLastClipsSession();
        if (null == t || 0 === t.newClipIds.length) return;
        let n = !O.Ay.getSettings().showPovClipsInGallery;
        t.newClipIds.some((t) => {
            let i = O.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, G.kD)(i));
        }) && (0, k.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: F.intl.string(F.t["d+41qJ"]),
            type: r.Ck.CLIP,
            options: { duration: v.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, D.A)(A.Ay)) return;
        let { midSessionV3Flip: t } = (0, w.UW)(),
            n = A.Ay.getMediaEngine(),
            i = () => {
                let i = O.Ay.getSettings(),
                    r = (0, y.TD)();
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
                    (v.nx.info("clips v3 effective state flipped; dispatching CLIPS_RESTART"),
                    a.h.dispatch({ type: "CLIPS_RESTART" }));
            };
        (0, y.TD)() && (0, L.qi)("applyNativeClipsSettings") && !(0, w.t_)() ? (0, w.so)().then(i) : i();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = d.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = d.Ay.getVisibleGame();
        (0, x.yj)(),
            null == t ||
                (this.prefetchRichPresenceData(t.id),
                e.added.find((e) => e.pid === t.pid)
                    ? setTimeout(() => this.fireClipsInitEvent(), v.dV)
                    : this.fireClipsInitEvent(),
                this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        c.I.fetchMany([e]), l.YY.fetchMany([e]);
    }
    handleStreamEnded(e) {
        if (!(0, y.TD)()) return;
        let { ownerId: t } = (0, u.Iy)(e.streamKey);
        t !== E.default.getId() || ((0, L.qi)("handleStreamEnded") && this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(0, y.TD)() || (!e && null != _.A.getCurrentUserActiveStream())) return;
        let t = d.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if ((0, L.qi)("fireClipsInitEvent") && !(0, w.t_)())
            return void (0, w.so)().then(() => {
                (0, w.t_)() && this.fireClipsInitEvent(e);
            });
        let n = O.Ay.getSettings();
        a.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = O.Ay.getSettings();
        "" !== e &&
            e !== O.he &&
            U.Fb(e)
                .then(() => B())
                .catch((e) => {
                    v.nx.error("Failed to load clips directory on connection open", e);
                });
    }
}
async function B() {
    if (O.Ay.hasClips() || null == s.A || null == s.A.app) return;
    let e = await s.A.app.getPath("documents");
    if (O.Ay.getSettings().storageLocation === e)
        try {
            let e = await s.A.app.getPath("videos");
            U.HU((0, h.CN)(e, O._c));
        } catch (e) {
            v.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let H = new V();

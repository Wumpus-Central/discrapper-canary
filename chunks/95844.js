n.d(t, { A: () => W });
var i = n(858899),
    r = n(176781),
    a = n(73153),
    s = n(77729),
    l = n(627363),
    o = n(710195),
    d = n(952818),
    c = n(569926),
    u = n(652896),
    _ = n(324029),
    E = n(72611),
    A = n(616356),
    h = n(280450),
    f = n(192820),
    I = n(741394),
    p = n(734066),
    T = n(205693),
    m = n(439372),
    g = n(967347),
    S = n(885386),
    N = n(734057),
    C = n(763827),
    O = n(116956),
    R = n(174459),
    L = n(723702),
    y = n(274372),
    D = n(572164),
    v = n(696016),
    b = n(652215),
    M = n(325278);
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
        if (!(0, p.Pm)() || n !== b.S7L.RTC_CONNECTED) return;
        let r = h.default.getId();
        switch (t) {
            case T.x.DEFAULT:
                (this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r));
                break;
            case T.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, u.Iy)(i);
                if (e !== r) return;
                let t = O.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === T.x.DEFAULT &&
            t.forEach((e) => {
                (this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e));
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        (this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t));
        let r = O.A.getRTCConnection(
            u._z({ streamType: null != i ? M.U4.GUILD : M.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        R.default.track(b.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: v.sT });
    }
    maybeShowClipsWarning(e) {
        let t = C.A.getChannelId();
        null == t ||
            y.Ay.getClipsWarningShown(t) ||
            e === h.default.getId() ||
            !y.Ay.isClipsEnabledForUser(e) ||
            (S.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        C.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, p.ri)(f.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, p.Pm)() &&
                (this.loadClipsFromStorage(),
                this.maybeStartNtpClock(),
                (null == y.Ay.getHardwareClassification() ||
                    null == y.Ay.getHardwareClassificationForDecoupled() ||
                    y.Ay.getHardwareClassificationVersion() !== v.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        a.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== T.x.STREAM || !(0, p.ri)(f.Ay)) return;
        let a = O.A.getRTCConnection(
            u._z({ streamType: null != r ? M.U4.GUILD : M.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
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
                    let e = (await s.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                R.default.track(b.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: v.V0,
                    gpu_models: e,
                    clip_runtime: v.sT,
                }),
                t
            );
        } catch (e) {
            return v.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, L.isWindows)()) {
            let t = e.some((e) => v.sc.test(e)),
                n = e.some((e) => v.l_.test(e));
            return t ? v.k9.MEETS_AUTO_ENABLE : n ? v.k9.MEETS_MINIMUM : v.k9.BELOW_MINIMUM;
        }
        return (0, L.isMac)()
            ? "arm64" === s.A.app.getAppArch()
                ? v.k9.MEETS_AUTO_ENABLE
                : v.k9.MEETS_MINIMUM
            : v.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, p.ri)(f.Ay)) return;
        let t = C.A.getRTCConnection();
        if (null == t) return;
        if (N.A.getChannel(C.A.getChannelId())?.isGuildStageVoice()) return void t.setClipRecordUser(e, "audio", !1);
        if (e === h.default.getId()) return void t.setClipRecordUser(e, "audio", (0, D.T)());
        let n = y.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, p.ri)(f.Ay)) return;
        let t = C.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, D.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, p.ri)(f.Ay) && h.default.getId() === e) {
            let n = (0, D.T)();
            (t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n));
            return;
        }
    }
}
var U = n(341923),
    w = n(614584);
n(423341);
var G = n(201538),
    x = n(564973),
    k = n(409067),
    F = n(227628),
    B = n(468550),
    V = n(660183);
class H extends P {
    constructor() {
        (super(),
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
                    null != t ? this.handleClipsReminder(t) : (0, B.kF)();
                },
                RPC_SERVER_READY: () => {
                    ((0, _.se)((0, D.T)()), (0, E.eZ)((0, D.T)()));
                },
            }));
    }
    handlePostConnectionOpen() {
        (super.handlePostConnectionOpen(), (0, _.se)((0, D.T)()), (0, E.eZ)((0, D.T)()));
    }
    maybeFetchAutoclipsCapabilities(e) {
        let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        null == e || ((0, U.s$)() && (0, D.T)() && (t ? x.b.refetchMany([e]) : x.b.fetchMany([e])));
    }
    stores = new Map().set(o.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!y.Ay.canShowReminders()) return;
        let e = d.Ay.getVisibleGame();
        null == e ||
            (y.Ay.getLastClipsSession()
                ?.clipIds.map(y.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (F.MZ.getState().isOpen || (0, F.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !y.Ay.canShowReminders()) return;
        let t = y.Ay.getLastClipsSession();
        if (null == t || !t.hasClips) return;
        let n = !y.Ay.getSettings().showPovClipsInGallery;
        t.clipIds.some((t) => {
            let i = y.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, k.kD)(i));
        }) && (0, B.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({ text: V.intl.string(V.t["d+41qJ"]), icon: r.x, duration: v.Vi });
    }
    applyNativeClipsSettings(e) {
        if ((e?.settings.clipsEnabled != null && ((0, _.se)((0, D.T)()), (0, E.eZ)((0, D.T)())), !(0, p.ri)(f.Ay)))
            return;
        (0, G.mj)();
        let t = f.Ay.getMediaEngine(),
            n = () => {
                let n = y.Ay.getSettings(),
                    i = (0, D.T)();
                if (
                    (t.setClipsRecordingEnabled(i),
                    t.setClipBufferLength(i ? n.clipsLength / 1e3 : 0),
                    e?.settings.clipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: i, resolution: r, bitratePercent: a } = n.clipsQuality;
                    t.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, i, a) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
            };
        (0, D.T)() ? ((0, G.t_)() ? n() : (0, G.so)().then(n)) : n();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = d.Ay.getVisibleGame();
        null != t &&
            t.id === e.game.id &&
            (this.prefetchRichPresenceData(t.id),
            this.maybeFetchAutoclipsCapabilities(t.id, { force: !0 }),
            this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = d.Ay.getVisibleGame();
        if (((0, F.yj)(), null == t)) return;
        this.prefetchRichPresenceData(t.id);
        let n = !!e.added.find((e) => e.pid === t.pid);
        (this.maybeFetchAutoclipsCapabilities(t.id, { force: n }),
            n ? setTimeout(() => this.fireClipsInitEvent(), v.dV) : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        (c.I.fetchMany([e]), l.YY.fetchMany([e]));
    }
    handleStreamEnded(e) {
        if (!(0, D.T)()) return;
        let { ownerId: t } = (0, u.Iy)(e.streamKey);
        t === h.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(0, D.T)() || (!e && null != A.A.getCurrentUserActiveStream())) return;
        let t = d.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, G.t_)())
            return void (0, G.so)().then(() => {
                (0, G.t_)() && this.fireClipsInitEvent(e);
            });
        let n = y.Ay.getSettings();
        a.h.dispatch({
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
            w
                .Fb(e)
                .then(() => j())
                .catch((e) => {
                    v.nx.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        s.A?.ntpClock?.start().catch(() => {});
    }
}
async function j() {
    if (y.Ay.hasClips() || null == s.A || null == s.A.app) return;
    let e = await s.A.app.getPath("documents");
    if (y.Ay.getSettings().storageLocation === e)
        try {
            let e = await s.A.app.getPath("videos");
            w.HU((0, I.CN)(e, y._c));
        } catch (e) {
            v.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let W = new H();

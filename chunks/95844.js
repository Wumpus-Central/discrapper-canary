n.d(t, { A: () => j });
var i = n(376357),
    r = n(73153),
    a = n(77729),
    s = n(627363),
    l = n(710195),
    o = n(952818),
    d = n(569926),
    c = n(652896),
    u = n(324029),
    _ = n(72611),
    E = n(616356),
    A = n(280450),
    h = n(192820),
    f = n(741394),
    I = n(734066),
    p = n(205693),
    T = n(439372),
    m = n(967347),
    g = n(885386),
    S = n(734057),
    N = n(763827),
    C = n(116956),
    O = n(174459),
    R = n(723702),
    L = n(915725),
    y = n(572164),
    D = n(696016),
    v = n(652215),
    b = n(325278);
class M extends T.A {
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
        if (!(0, I.Pm)() || n !== v.S7L.RTC_CONNECTED) return;
        let r = A.default.getId();
        switch (t) {
            case p.x.DEFAULT:
                (this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r));
                break;
            case p.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, c.Iy)(i);
                if (e !== r) return;
                let t = C.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === p.x.DEFAULT &&
            t.forEach((e) => {
                (this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e));
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        (this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t));
        let r = C.A.getRTCConnection(
            c._z({ streamType: null != i ? b.U4.GUILD : b.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        O.default.track(v.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: D.sT });
    }
    maybeShowClipsWarning(e) {
        let t = N.A.getChannelId();
        null == t ||
            L.Ay.getClipsWarningShown(t) ||
            e === A.default.getId() ||
            !L.Ay.isClipsEnabledForUser(e) ||
            (g.Q$.getSetting() &&
                (r.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        N.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, I.ri)(h.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, I.Pm)() &&
                (this.loadClipsFromStorage(),
                this.maybeStartNtpClock(),
                (null == L.Ay.getHardwareClassification() ||
                    null == L.Ay.getHardwareClassificationForDecoupled() ||
                    L.Ay.getHardwareClassificationVersion() !== D.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        r.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== p.x.STREAM || !(0, I.ri)(h.Ay)) return;
        let a = C.A.getRTCConnection(
            c._z({ streamType: null != r ? b.U4.GUILD : b.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, m.w)();
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
                O.default.track(v.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: D.V0,
                    gpu_models: e,
                    clip_runtime: D.sT,
                }),
                t
            );
        } catch (e) {
            return D.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, R.isWindows)()) {
            let t = e.some((e) => D.sc.test(e)),
                n = e.some((e) => D.l_.test(e));
            return t ? D.k9.MEETS_AUTO_ENABLE : n ? D.k9.MEETS_MINIMUM : D.k9.BELOW_MINIMUM;
        }
        return (0, R.isMac)()
            ? "arm64" === a.A.app.getAppArch()
                ? D.k9.MEETS_AUTO_ENABLE
                : D.k9.MEETS_MINIMUM
            : D.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, I.ri)(h.Ay)) return;
        let t = N.A.getRTCConnection();
        if (null == t) return;
        if (S.A.getChannel(N.A.getChannelId())?.isGuildStageVoice()) return void t.setClipRecordUser(e, "audio", !1);
        if (e === A.default.getId()) return void t.setClipRecordUser(e, "audio", (0, y.T)());
        let n = L.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, I.ri)(h.Ay)) return;
        let t = N.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, y.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, I.ri)(h.Ay) && A.default.getId() === e) {
            let n = (0, y.T)();
            (t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n));
            return;
        }
    }
}
var P = n(341923),
    U = n(614584);
n(423341);
var w = n(201538),
    G = n(564973),
    x = n(409067),
    k = n(227628),
    F = n(468550),
    B = n(660183);
class V extends M {
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
                    null != t ? this.handleClipsReminder(t) : (0, F.kF)();
                },
                RPC_SERVER_READY: () => {
                    ((0, u.se)(L.Ay.getEnableAutoclipping()), (0, _.eZ)(L.Ay.getEnableAutoclipping()));
                },
            }));
    }
    handlePostConnectionOpen() {
        (super.handlePostConnectionOpen(),
            (0, u.se)(L.Ay.getEnableAutoclipping()),
            (0, _.eZ)(L.Ay.getEnableAutoclipping()));
    }
    maybeFetchAutoclipsCapabilities(e) {
        let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        null == e || ((0, P.s$)() && L.Ay.getEnableAutoclipping() && (t ? G.b.refetchMany([e]) : G.b.fetchMany([e])));
    }
    stores = new Map().set(l.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!L.Ay.canShowReminders()) return;
        let e = o.Ay.getVisibleGame();
        null == e ||
            (L.Ay.getLastClipsSession()
                ?.clipIds.map(L.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (k.MZ.getState().isOpen || (0, k.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !L.Ay.canShowReminders()) return;
        let t = L.Ay.getLastClipsSession();
        if (null == t || !t.hasClips) return;
        let n = !L.Ay.getSettings().showPovClipsInGallery;
        t.clipIds.some((t) => {
            let i = L.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, x.kD)(i));
        }) && (0, F.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: B.intl.string(B.t["d+41qJ"]),
            type: i.Ck.CLIP,
            options: { duration: D.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (
            (e?.settings.enableAutoclipping != null &&
                ((0, u.se)(e.settings.enableAutoclipping), (0, _.eZ)(e.settings.enableAutoclipping)),
            !(0, I.ri)(h.Ay))
        )
            return;
        (0, w.mj)();
        let t = h.Ay.getMediaEngine(),
            n = () => {
                let n = L.Ay.getSettings(),
                    i = (0, y.T)();
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
        (0, y.T)() ? ((0, w.t_)() ? n() : (0, w.so)().then(n)) : n();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = o.Ay.getVisibleGame();
        null != t &&
            t.id === e.game.id &&
            (this.prefetchRichPresenceData(t.id),
            this.maybeFetchAutoclipsCapabilities(t.id, { force: !0 }),
            this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = o.Ay.getVisibleGame();
        if (((0, k.yj)(), null == t)) return;
        this.prefetchRichPresenceData(t.id);
        let n = !!e.added.find((e) => e.pid === t.pid);
        (this.maybeFetchAutoclipsCapabilities(t.id, { force: n }),
            n ? setTimeout(() => this.fireClipsInitEvent(), D.dV) : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        (d.I.fetchMany([e]), s.YY.fetchMany([e]));
    }
    handleStreamEnded(e) {
        if (!(0, y.T)()) return;
        let { ownerId: t } = (0, c.Iy)(e.streamKey);
        t === A.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(0, y.T)() || (!e && null != E.A.getCurrentUserActiveStream())) return;
        let t = o.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, w.t_)())
            return void (0, w.so)().then(() => {
                (0, w.t_)() && this.fireClipsInitEvent(e);
            });
        let n = L.Ay.getSettings();
        r.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = L.Ay.getSettings();
        "" !== e &&
            e !== L.he &&
            U.Fb(e)
                .then(() => H())
                .catch((e) => {
                    D.nx.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        a.A?.ntpClock?.start().catch(() => {});
    }
}
async function H() {
    if (L.Ay.hasClips() || null == a.A || null == a.A.app) return;
    let e = await a.A.app.getPath("documents");
    if (L.Ay.getSettings().storageLocation === e)
        try {
            let e = await a.A.app.getPath("videos");
            U.HU((0, f.CN)(e, L._c));
        } catch (e) {
            D.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let j = new V();

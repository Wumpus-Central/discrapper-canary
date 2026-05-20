"use strict";
n.d(t, { A: () => ee });
var i,
    r = n(192308),
    s = n(691540),
    a = n(97483),
    o = n(228366),
    l = n(627363),
    u = n(793943),
    c = n(710195),
    d = n(952818),
    _ = n(569926),
    f = n(652896),
    h = n(616356),
    p = n(495544),
    E = n(186111),
    m = n(761853),
    g = n(19575),
    A = n(459838),
    I = n(439372),
    T = n(77729),
    S = n(967347),
    N = n(885386),
    y = n(763827),
    C = n(116956),
    v = n(174459),
    O = n(723702),
    R = n(734066),
    b = n(274372),
    D = n(372684),
    L = n(915618),
    w = n(572164),
    M = n(696016),
    P = n(652215),
    x = n(325278);
class U extends I.A {
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
        if (!(0, R.Pm)() || n !== P.S7L.RTC_CONNECTED) return;
        let r = p.default.getId();
        if (t === A.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === A.x.STREAM && null != i) {
            let { ownerId: e } = (0, f.Iy)(i);
            if (e !== r) return;
            let t = C.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === A.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = C.A.getRTCConnection(
            f._z({ streamType: null != i ? x.U4.GUILD : x.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        v.default.track(P.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = y.A.getChannelId();
        null == t ||
            b.A.getClipsWarningShown(t) ||
            e === p.default.getId() ||
            !b.A.isClipsEnabledForUser(e) ||
            (N.Q$.getSetting() &&
                (o.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        y.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, L.A)(m.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, R.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == b.A.getHardwareClassification() ||
                    null == b.A.getHardwareClassificationForDecoupled() ||
                    b.A.getHardwareClassificationVersion() !== M.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        o.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== A.x.STREAM || !(0, L.A)(m.Ay)) return;
        let s = C.A.getRTCConnection(
            f._z({ streamType: null != r ? x.U4.GUILD : x.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, S.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand).filter((e) => null != e && "" !== e),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await T.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                v.default.track(P.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: M.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return D.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, O.isWindows)()) {
            let t = e.some((e) => M.sc.test(e)),
                n = e.some((e) => M.l_.test(e));
            return t ? D.k9.MEETS_AUTO_ENABLE : n ? D.k9.MEETS_MINIMUM : D.k9.BELOW_MINIMUM;
        }
        return (0, O.isMac)()
            ? "arm64" === T.A.app.getAppArch()
                ? D.k9.MEETS_AUTO_ENABLE
                : D.k9.MEETS_MINIMUM
            : D.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, L.A)(m.Ay)) return;
        let t = y.A.getRTCConnection();
        if (null == t) return;
        if (e === p.default.getId()) return void t.setClipRecordUser(e, "audio", (0, w.TD)());
        let n = b.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, L.A)(m.Ay)) return;
        let t = y.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, w.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, L.A)(m.Ay) && p.default.getId() === e) {
            let n = (0, w.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var k = n(150616);
let G = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-clips-v3-runtime",
    defaultConfig: { enableClipsV3: !1, enableClipsV3ML: !1 },
    variations: { 1: { enableClipsV3: !0, enableClipsV3ML: !1 }, 2: { enableClipsV3: !0, enableClipsV3ML: !0 } },
});
function F() {
    return G.getConfig({ location: "isClipsV3Enabled" }).enableClipsV3;
}
n(321073);
var V = n(626584),
    B = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let H = [
        [
            "laughter_screaming_old_spliced_2s",
            "onnx",
            "dce8aec92bae18f32afb08a94bdac1d72f02d7d5589e8ad75c57c2e4228e104b",
        ],
        ["laughter_screaming_krispy", "onnx", "8835cfe08b2517162462b710c44bda60c116611c997fbce4d14679a26d6d75ed"],
        ["ggml-base", "bin", "60ed5bc3dd14eea856493d334349b405782ddcaf0028d4b5df4088345fba2efe"],
    ],
    j = new V.A("ClipsAssetManager");
class Y {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    started = !1;
    start() {
        !this.started &&
            ((this.started = !0),
            j.info("Clips asset manager started"),
            (0, w.TD)() && (j.info("Clips enabled on startup, prefetching assets"), this.maybePrefetchAssets()));
    }
    stop() {
        g.Ay.stopClipsDownloads(),
            this.activeDownloads.clear(),
            (this.started = !1),
            j.info("Clips asset manager stopped");
    }
    getAssetState(e) {
        return this.state.assetState[e];
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === B.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        if (!__OVERLAY__ && (0, O.isWindows)())
            try {
                await this.refreshCatalog(), await this.prefetchAssets();
            } catch (e) {
                j.warn(`Failed to prefetch clips assets: ${e.message}`);
            }
    }
    async refreshCatalog() {
        if (!this.catalogRefreshing)
            try {
                this.catalogRefreshing = !0;
                let e = this.loadCatalog();
                null == this.state.catalogLastFetchTime && (await this.scanAssetState(e)),
                    (this.state.assets = e.assets),
                    (this.state.catalogLastFetchTime = new Date()),
                    (this.state.catalogFetchFailed = !1);
                let t = Object.values(e.assets).map((e) => e.fileName);
                await g.Ay.cleanupUnusedClipsFiles(t), j.info("Clips asset catalog refreshed");
            } catch (e) {
                j.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    loadCatalog() {
        let e = { assets: {} };
        for (let [t, n, i] of H)
            e.assets[t] = { url: `https://cdn.discordapp.com/assets/content/${i}.${n}`, fileName: `${t}.${n}` };
        return j.info("Loaded clips asset catalog with assets:", Object.keys(e.assets)), e;
    }
    async scanAssetState(e) {
        if (!g.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await g.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? B.DOWNLOADED : B.MISSING };
    }
    async prefetchAssets() {
        if (__OVERLAY__) return;
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== B.DOWNLOADED &&
                e?.status !== B.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        j.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            j.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            s = this.activeDownloads.get(n);
        if (null != s) return s;
        if (r?.status === B.DOWNLOADED) return Promise.resolve();
        if (r?.status === B.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: B.DOWNLOADING, downloadedBytes: 0 };
        let a = g.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && j.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: B.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? j.info("User canceled the download for clips asset", e)
                    : j.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: B.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, a), a;
    }
}
let W = new Y();
var K = n(607814);
n(871421);
var z = n(375708);
let $ = !1,
    q = null,
    Z = null,
    X = null;
function Q() {
    let e = F(),
        t = (function () {
            let { enableClipsV3: e, enableClipsV3ML: t } = G.getConfig({ location: "isClipsV3MLEnabled" });
            return e && t;
        })(),
        n = Z !== e,
        i = X !== t;
    if (!n && !i) return;
    let r = m.Ay.getMediaEngine();
    n && r.setClipsV3Enabled(e),
        i && r.setClipsV3MLEnabled(t),
        M.nx.info(`clips v3 runtime flags pushed: v3=${e} (was ${Z}), ml=${t} (was ${X})`),
        (Z = e),
        (X = t),
        e && t && W.start();
}
class J extends U {
    constructor() {
        super(),
            Object.assign(this.actions, {
                CLIPS_SAVE_CLIP: (e) => {
                    let { clip: t } = e;
                    t.isCandidate || this.maybeOpenReminderSidebar();
                },
                CLIPS_PROMOTE_CLIP_CANDIDATE: (e) => this.maybeOpenReminderSidebar(),
            });
    }
    stores = new Map().set(c.A, () => this.applyNativeClipsSettings());
    maybeOpenReminderSidebar() {
        let { enableReminderSidebar: e } = k.Z.getConfig({ location: "ClipsManager" });
        !e ||
            !b.A.canShowReminders() ||
            u.fy.getState().activePanel === u.HP.CLIPS_REMINDER ||
            E.A.hasLayers() ||
            (0, r.hasAnyModalOpen)() ||
            (0, u.nf)(u.HP.CLIPS_REMINDER);
    }
    showClipsToast() {
        (0, s.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: z.intl.string(z.t["d+41qJ"]),
            type: a.Ck.CLIP,
            options: { duration: M.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, L.A)(m.Ay)) return;
        let t = m.Ay.getMediaEngine(),
            n = () => {
                let n = b.A.getSettings(),
                    i = (0, w.TD)();
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
        Q(),
            !F() || $
                ? n()
                : ($
                      ? Promise.resolve()
                      : null != q
                        ? q
                        : (q = (async () => {
                              try {
                                  Q(), await g.Ay.ensureModule("discord_clips");
                                  let e = g.Ay.requireModule("discord_clips").getModulePath(),
                                      t = m.Ay.getMediaEngine(),
                                      n = g.Ay.getClipsDataDirSync();
                                  t.setClipsDataPath(n),
                                      t.setClipsModulePath(e),
                                      ($ = !0),
                                      M.nx.info("discord_clips module loaded, path: " + e);
                              } catch (e) {
                                  (q = null), M.nx.error("Failed to load discord_clips module", e);
                              }
                          })())
                  ).then(n);
    }
    handleClipsInitOnToggleDetection(e) {
        let t = d.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = d.Ay.getVisibleGame();
        null == t ||
            (this.prefetchRichPresenceData(t.id),
            e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), M.dV)
                : this.fireClipsInitEvent());
    }
    prefetchRichPresenceData(e) {
        _.I.fetchMany([e]), l.YY.fetchMany([e]);
    }
    handleStreamEnded(e) {
        if (!F()) return;
        let { ownerId: t } = (0, f.Iy)(e.streamKey);
        t === p.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        if (!(0, w.TD)() || null != h.A.getCurrentUserActiveStream()) return;
        let e = d.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = b.A.getSettings();
        o.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = b.A.getSettings().storageLocation;
        "" !== e &&
            K.Fb(e).catch((e) => {
                M.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let ee = new J();

"use strict";
n.d(t, { Ay: () => j, UB: () => V, _0: () => x, dv: () => G, kw: () => U }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(279194),
    a = n(141931),
    o = n(562465),
    l = n(118356),
    u = n(506774),
    c = n(56562),
    d = n(223273),
    _ = n(723702),
    f = n(998218),
    p = n(652215),
    h = n(264572).Buffer;
let m = window.DiscordNative,
    E = new Set(["jpg", "jpeg", "jfif", "png"]),
    g = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    A = (e) => e.startsWith("image/"),
    I = 5,
    T = null,
    S = null,
    y = null,
    v = {};
null != m &&
    ((T = m.remoteApp
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (y = m.remoteApp.getModuleVersions?.()),
    (S = m.remoteApp.getBuildNumber?.()));
let N = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    C = !1,
    b = "lastImageSaveDirectory",
    R = /[<>:"/\\|?*@]/g,
    O = /(\.[a-zA-Z0-9]+):[^.]*$/,
    D = /(\.[a-zA-Z0-9]+)%3A.+$/,
    L = /[^a-zA-Z0-9]/g,
    w = /\.[^.]*$/;
var x = (function (e) {
    return (e.SAVED = "saved"), (e.CANCELED = "canceled"), (e.ERRORED = "errored"), e;
})({});
function M(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(O, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(R, "_");
    } catch {
        return e
            .replace(D, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(R, "_");
    }
}
async function P(e) {
    let t = { method: "GET", mode: "cors" },
        n = await fetch(new Request(e, t));
    i()(200 === n.status, "Data fetch unsuccessful");
    let r = await n.arrayBuffer();
    return i()(null != r, "Data is null"), r;
}
function k(e) {
    return P(e);
}
var U = (function (e) {
        return (
            (e[(e.Camera = 0)] = "Camera"),
            (e[(e.Microphone = 1)] = "Microphone"),
            (e[(e.Photo = 2)] = "Photo"),
            (e[(e.InputMonitoring = 3)] = "InputMonitoring"),
            (e[(e.ScreenRecording = 4)] = "ScreenRecording"),
            e
        );
    })({}),
    G = (function (e) {
        return (e.VIDEO = "VIDEO"), (e.MUTE = "MUTE"), (e.DEAFEN = "DEAFEN"), (e.DISCONNECT = "DISCONNECT"), e;
    })({});
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
    return {
        id: t[e.id ?? ""],
        nativeProcessObserverId: parseInt(e.id ?? "", 10),
        name: e.gameName ?? e.name,
        origGameName: e.origGameName,
        processName: e.name ?? "",
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: e.sandboxed ?? !1,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: e.pidPath ?? [],
        gameMetadata: e.gameMetadata,
        windowHandle: e.windowHandle ?? null,
        fullscreenType: e.fullscreenType ?? c.aI.UNKNOWN,
        isLauncher: e.isLauncher ?? !1,
        executableFingerprint: e.executableFingerprint,
    };
}
function V(e, t) {
    if (null != t && A(t)) {
        let e = t.split("/")[1]?.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let n = f.A.toURLSafe(e);
    if (null == n) return;
    let r = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != r && r.length <= I ? r : void 0;
}
function B(e) {
    if ((0, _.isDesktop)())
        try {
            H.send(e);
        } catch (e) {}
}
let H = {
        requireModule: (e) => m.nativeModules.requireModule(e),
        ensureModule: (e) =>
            _.isPlatformEmbedded
                ? __OVERLAY__ && N.has(e)
                    ? Promise.resolve()
                    : m.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return m.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => m.crashReporter.getMetadata(),
        getSetting: async (e, t) => await m.settings.get(e, t),
        beforeUnload() {
            let e;
            try {
                e = this.requireModule("discord_overlay2");
            } catch (e) {}
            e && e.reset && e.reset(),
                e &&
                    e.disconnectAllProcesses &&
                    e.destroyHostProcess &&
                    (e.disconnectAllProcesses(), e.destroyHostProcess()),
                m.remotePowerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== u.w.get(s.qx) &&
                    this.supportsFeature(p.BYE.USER_DATA_CACHE) &&
                    m.userDataCache.cacheUserData(u.w.stringify());
        },
        inputEventRegister(e, t, n, r) {
            this.getDiscordUtils().inputEventRegister(
                parseInt(`${e}`),
                t.map((e) => {
                    let [t, n, r] = e;
                    return "string" == typeof r ? [t, n, r] : [t, n];
                }),
                n,
                r,
            );
        },
        inputEventUnregister(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e));
        },
        setOnInputEventCallback(e) {
            _.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t, n, r) {
            try {
                v = {};
                let i = 0,
                    s = this.getDiscordUtils(),
                    a = e.map((e) => {
                        let t = ++i;
                        return null != e.id && (v[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = v,
                    l = (e) => n(e.map((e) => F(e, o)));
                null != r && null != s.setProcessObserverUserId && s.setProcessObserverUserId(r),
                    t && null != s.setObservedGamesCallback2
                        ? s.setObservedGamesCallback2(a, l)
                        : s.setObservedGamesCallback(a, l);
            } catch (e) {}
        },
        setGameDetectionCallback(e) {
            this.getDiscordUtils().setGameDetectionCallback?.((t, n) =>
                e(
                    t.map((e) => F(e)),
                    n.map((e) => F(e)),
                ),
            );
        },
        setGameDetectionErrorCallback(e) {
            this.getDiscordUtils().setGameDetectionErrorCallback?.(e);
        },
        setRobloxSubgameDetectionConfig(e, t) {
            this.getDiscordUtils().setRobloxSubgameDetectionConfig?.(e, t);
        },
        checkForRobloxSubgameUpdate() {
            this.getDiscordUtils().checkForRobloxSubgameUpdate?.();
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback((t) => {
                e(t.map((e) => F(e)));
            });
        },
        clearCandidateGamesCallback() {
            this.getDiscordUtils().clearCandidateGamesCallback();
        },
        setGameCandidateOverrides(e) {
            this.getDiscordUtils().setGameCandidateOverrides(e.map((e) => ({ ...e, gameId: e.id, gameName: e.name })));
        },
        setObserverDebugCallback(e, t, n) {
            this.getDiscordUtils().setObserverDebugCallback((t) => e(t), t, n);
        },
        clearObserverDebugCallback() {
            this.getDiscordUtils().setObserverDebugCallback(null, d.Lb.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            let e = this.requireModule("discord_voice");
            return (
                C ||
                    (0, l.si)((t, n, r) => {
                        e.consoleLog(n, `[${t}] ${r}`);
                    }),
                (C = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!C)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule("discord_utils");
        },
        isSystemDarkMode() {
            return !!(0, _.isWindows)() && (this.getDiscordUtils().isSystemDarkMode?.() ?? !0);
        },
        getVoiceFilters() {
            return this.requireModule("discord_voice_filters");
        },
        getGameUtils() {
            return this.requireModule("discord_game_utils");
        },
        getCloudSync() {
            return this.requireModule("discord_cloudsync");
        },
        getDispatch() {
            return this.requireModule("discord_dispatch");
        },
        setBadge(e) {
            if ("darwin" === (0, _.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "•") : e > 0 && (t = `${e}`), m.remoteApp.dock.setBadge(t);
            } else
                "win32" === (0, _.getPlatformName)()
                    ? this.send("APP_BADGE_SET", e)
                    : "linux" === (0, _.getPlatformName)() && m.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            _.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e);
        },
        setThumbarButtons(e) {
            _.isPlatformEmbedded && m.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (_.isPlatformEmbedded) {
                let t = m.remoteApp;
                if (null != t.dock) {
                    let n = t.dock.bounce(e);
                    return async () => {
                        let e = await n;
                        t.dock.cancelBounce(e);
                    };
                }
            }
        },
        setSystemTrayApplications(e) {
            _.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e);
        },
        get architecture() {
            return _.isPlatformEmbedded ? m.process.arch : "";
        },
        get releaseChannel() {
            if (!_.isPlatformEmbedded) return "";
            let e = m.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return "";
        },
        get version() {
            return T;
        },
        get buildNumber() {
            return S;
        },
        get moduleVersions() {
            return y;
        },
        get parsedOSRelease() {
            if (!_.isPlatformEmbedded) return [];
            return m.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            _.isPlatformEmbedded && m.clipboard.copy(e);
        },
        async copyImage(e, t) {
            i()(_.isPlatformEmbedded, "Copy image method called outside native app"),
                i()("function" == typeof m.clipboard.copyImage, "Copy image not supported");
            let n = await k(e),
                r = V(e, t),
                s = null != r && E.has(r) ? `image.${r}` : e;
            m.clipboard.copyImage(h.from(n), s);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            m.clipboard.copyImage(h.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !_.isPlatformEmbedded) return !1;
            let n = V(e, t);
            return null == n || g.has(n);
        },
        async saveImage(e, t, n) {
            let r, s;
            i()(_.isPlatformEmbedded, "Save image method called outside native app");
            let a = f.A.toURLSafe(e);
            if (null == a) return "errored";
            let o = a.pathname.split("/").pop() ?? "unknown";
            o = M(o);
            let l = a.searchParams.get("format");
            if (null != l) {
                let e = l.replace(L, "").toLowerCase();
                if (e.length > 0) {
                    let t = o.replace(w, "");
                    o = `${t}.${e}`;
                }
            } else if (!o.includes(".")) {
                let r = V(e, t) ?? n ?? "png";
                o = `${o}.${r}`;
            }
            let c = await k(e),
                d = h.from(c),
                p = u.w.get(b);
            if (("string" != typeof p && (p = void 0), "function" == typeof m.fileManager.saveWithDialog2)) {
                if (null == (r = await m.fileManager.saveWithDialog2(d, o, p ?? void 0))) return "errored";
                if (r.canceledByUser) return "canceled";
                s = r.directory;
            } else
                try {
                    s = await m.fileManager.saveWithDialog(d, o, p ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == s || "" === s ? "errored" : (u.w.set(b, s), "saved");
        },
        async saveFile(e, t) {
            i()(_.isPlatformEmbedded, "Save file method called outside native app");
            let n = f.A.toURLSafe(e);
            if (null == n) return null;
            let r = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (r = M(r));
            let s = await P(e),
                a = h.from(s),
                o = await m.fileManager.saveWithDialog(a, r, void 0);
            return null == o ? null : o;
        },
        async downloadVoiceFilterFile(e, t, n) {
            i()(_.isPlatformEmbedded, "Download voice filter file method called outside native app");
            let r = f.A.toURLSafe(e);
            return (
                i()(r, "Could not download voice filter, fileSrc was not a valid path"),
                await m.fileManager.maybeDownloadVoiceFilterFile(e, t, n)
            );
        },
        stopVoiceFilterDownloads() {
            m.fileManager.stopVoiceFilterDownloads();
        },
        canCheckVoiceFilterFilesExist: () => "function" == typeof m.fileManager.checkVoiceFilterFilesExist,
        checkVoiceFilterFilesExist: async (e) => await m.fileManager.checkVoiceFilterFilesExist(e),
        cleanupUnusedVoiceFilterFiles: async (e) => await m.fileManager.cleanupUnusedVoiceFilterFiles(e),
        async downloadMLModelFile(e, t, n) {
            i()(_.isPlatformEmbedded, "Download ML model file method called outside native app");
            let r = f.A.toURLSafe(e);
            return (
                i()(r, "Could not download ML model, fileSrc was not a valid path"),
                await m.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            m.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof m.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await m.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await m.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadOpenH264(e, t, n, r) {
            i()(_.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let s = f.A.toURLSafe(e);
            return (
                i()(s, "Could not download OpenH264, fileSrc was not a valid path"),
                await m.fileManager.maybeDownloadOpenH264(e, t, n, r)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await m.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (_.isPlatformEmbedded) return m.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!_.isPlatformEmbedded || "function" != typeof m.clipboard.copyImage) return !1;
            if (null != e) {
                let t = V(e, void 0);
                if (null != t && !E.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            _.isPlatformEmbedded && m.clipboard.cut();
        },
        paste() {
            _.isPlatformEmbedded && m.clipboard.paste();
        },
        readClipboard: () => (_.isPlatformEmbedded ? m.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!_.isPlatformEmbedded && (m.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            m.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return m.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            m.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!_.isPlatformEmbedded) return !0;
            try {
                return m?.ipc != null && "function" == typeof m.ipc.send;
            } catch {
                return !1;
            }
        },
        async waitForIPCReady() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
                n = Date.now();
            for (; Date.now() - n < e; ) {
                if (this.isIPCReady()) return !0;
                await new Promise((e) => t.requestAnimationFrame(e));
            }
            return !1;
        },
        flashFrame(e) {
            m.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await m.nativeModules.ensureModule("discord_webauthn"), await m.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await m.nativeModules.ensureModule("discord_webauthn"), await m.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            m.window.minimize(e);
        },
        restore(e) {
            m.window.restore(e);
        },
        maximize(e) {
            m.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, _.isWindows)() && this.minimize(null), m.window.focus(t, e);
        },
        blur() {
            _.isPlatformEmbedded && null != m.window.blur ? m.window.blur() : window.blur();
        },
        fullscreen(e) {
            m.window.fullscreen(e);
        },
        close(e) {
            m.window.close(e);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof m.window.setAlwaysOnTop && m.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof m.window.isAlwaysOnTop && (t = await m.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof m?.window?.showInactive && m.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            m?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (_.isPlatformEmbedded && "darwin" === (0, _.getPlatformName)())
                try {
                    this.send("WINDOW_SET_TRAFFIC_LIGHT_POSITION", e);
                } catch (e) {}
        },
        purgeMemory() {
            _.isPlatformEmbedded && m.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            m.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            m.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            _.isPlatformEmbedded && m.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => m.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !_.isPlatformEmbedded || (!__OVERLAY__ && m.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            m.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            m.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            m.gpuSettings.setSetting?.(e, t);
        },
        getOpenOnStart: async () => (await m.app.getOpenOnStart?.()) ?? (await m.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, _.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!_.isPlatformEmbedded && (m.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != m.window.setBackgroundThrottling
                ? m.window.setBackgroundThrottling(e)
                : m.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof m.window.setFocusable && m.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            m.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            m.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => m.app.getPreferredSystemLanguages?.(),
        getPidFromDesktopSource(e) {
            if (!(0, _.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let t = e?.split(":"),
                n = t?.[0];
            if ("window" === n) {
                let e = t?.[1] ?? "",
                    n = this.getDiscordUtils().getPidFromWindowHandle(e);
                return null == n || 0 === n ? null : n;
            }
            return n.startsWith("screen") ? 1 : "prepicked" === n ? 1 : null;
        },
        getDesktopSourceFromPid(e) {
            if (!(0, _.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            let t = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == t || 0 === t.length ? null : ["window", t, "0"].join(":");
        },
        generateSessionFromPid(e) {
            return this.getDiscordUtils().generateSessionFromPid(e);
        },
        getAudioPid(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
        },
        setForegroundProcess(e) {
            let { setForegroundProcess: t } = this.getDiscordUtils();
            try {
                return null != t && t(e);
            } catch (e) {
                return !1;
            }
        },
        getDiscordMemoryUsage() {
            let { getDiscordMemoryUsage: e } = this.getDiscordUtils();
            return null != e ? e() : null;
        },
        getDiscordMemoryUsageElectronRenderer() {
            let { getDiscordMemoryUsageElectronRenderer: e } = this.getDiscordUtils();
            return e?.();
        },
        getDiscordMemoryPrivateUsageElectronRenderer() {
            let { getDiscordMemoryPrivUsageElectronRenderer: e } = this.getDiscordUtils();
            return e?.();
        },
        getDiscordMemoryUsageElectronProcessTypeDetails() {
            let { getDiscordMemoryUsageElectronProcessTypeDetails: e } = this.getDiscordUtils();
            return e?.();
        },
        enablePerfMemoryHooks(e) {
            let { enablePerfMemoryHooks: t } = this.getDiscordUtils();
            return t?.(e);
        },
        disablePerfMemoryHooks() {
            let { disablePerfMemoryHooks: e } = this.getDiscordUtils();
            return e?.();
        },
        getPerfAttributedMemory() {
            let { getPerfAttributedMemory: e } = this.getDiscordUtils();
            return e?.();
        },
        getPerfAttributedMemoryCallstacks(e) {
            let { getPerfAttributedMemoryCallstacks: t } = this.getDiscordUtils();
            return t?.(e);
        },
        getPerfAttributedMemoryStats() {
            let { getPerfAttributedMemoryStats: e } = this.getDiscordUtils();
            return e?.();
        },
        startCPUProfiling(e) {
            let { startCPUProfiling: t } = this.getDiscordUtils();
            return t?.(e);
        },
        async stopCPUProfiling() {
            let { stopCPUProfiling: e } = this.getDiscordUtils(),
                t = await e?.();
            return null == t ? Promise.reject(Error("Failed to stop CPU profiling")) : JSON.parse(t);
        },
        gzipAndBase64Encode(e) {
            let { gzipAndBase64Encode: t } = this.getDiscordUtils();
            return t?.(e) ?? Promise.resolve(null);
        },
        showOpenDialog: (e) => m.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            _.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != m.processUtils.flushStorageData
                          ? m.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            _.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != m.processUtils.flushCookies
                          ? m.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            _.isPlatformEmbedded &&
                m?.processUtils?.setCrashInformation != null &&
                m.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            _.isPlatformEmbedded && null != m.powerSaveBlocker ? m.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            _.isPlatformEmbedded && null != m.powerSaveBlocker && m.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            _.isPlatformEmbedded && null != m.powerSaveBlocker && m.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            _.isPlatformEmbedded && null != m.remoteApp.relaunch && m.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = `${(0, o.TP)()}${e}`;
            if (!_.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == m.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: i,
                    maxBps: s,
                    token: a,
                    chunkInterval: l,
                    contentType: u,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                c = t;
            "application/json" === u && (c = JSON.stringify(t));
            let d = (l / 1e3) * s,
                f = Math.ceil(c.length / d),
                p = Array(f);
            for (let e = 0; e < f; e++) {
                let t = e * d;
                p[e] = c.substring(t, t + d);
            }
            return new Promise((e, t) => {
                null != m.http &&
                    m.http.makeChunkedRequest(
                        r,
                        p,
                        { method: i, chunkInterval: l, contentType: u, token: a },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, _.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = m.app.getReleaseChannel(),
                r = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...r, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            m.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e);
        },
        initializeExitHook() {
            let { initializeExitHook: e } = this.getDiscordUtils();
            null != e && e();
        },
        initializeWERHandler() {
            let { initializeWERHandler: e } = this.getDiscordUtils();
            null != e && e();
        },
        pollQueueMetrics(e) {
            let { pollQueueMetrics: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        asyncify: (e) =>
            new Promise((t, n) => {
                e(t);
            }),
        IsGameDisplayModeUpdateSupported() {
            let { gameDisplayModeUpdate: e } = this.getDiscordUtils();
            return null != e;
        },
        GameDisplayModeUpdate(e) {
            let { gameDisplayModeUpdate: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GameDisplayModeIsGameSupported(e) {
            let { gameDisplayModeIsSupported: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GetWindowFullscreenTypeByPid(e, t, n) {
            let { getWindowFullscreenTypeByPid: r } = this.getDiscordUtils(),
                i = 0 !== e && null != r && null != t ? r(e, t) : null;
            return -1 === i && (i = null), i ?? n ?? c.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: c.YL.QUNS_UNKNOWN } : n(e, t);
        },
        SetGPUBoostEnabledByPid(e, t) {
            let { setGPUBoostEnabledByPid: n } = this.getDiscordUtils();
            return null != n && n(e, t);
        },
        SetSystemServicePerformanceMonitorEnabled(e, t) {
            let { setSystemServicePerformanceMonitorEnabled: n } = this.getDiscordUtils();
            return null != n && n(e, t);
        },
        GetSystemServicePerformanceMonitorSnapshot(e) {
            let t,
                { getSystemServicePerformanceMonitorSnapshot: n } = this.getDiscordUtils();
            if (null == n) return Promise.reject(new a.Fh());
            let r = new Promise((e, n) => {
                t = setTimeout(() => n(Error("Timed out waiting for performance snapshot")), 1e3);
            });
            return Promise.race([
                new Promise((t, r) => {
                    n(e, (e) => {
                        if ("null" === e) return void r(Error("Performance snapshot not available"));
                        try {
                            t(JSON.parse(e));
                        } catch (e) {
                            r(
                                Error(
                                    `Invalid performance snapshot JSON: ${e instanceof Error ? e.message : String(e)}`,
                                ),
                            );
                        }
                    });
                }),
                r,
            ]).finally(() => clearTimeout(t));
        },
        IsHardwareAcceleratedGPUSchedulingEnabled() {
            let { isHardwareAcceleratedGPUSchedulingEnabled: e } = this.getDiscordUtils();
            return null != e && e();
        },
        AcquireGlobalLock(e) {
            let { acquireGlobalLock: t } = this.getDiscordUtils();
            if (null != t) return t(e);
        },
        SetServiceChannel(e) {
            let { setServiceChannel: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        IsSystemServiceInstalled() {
            let { isSystemServiceInstalled: e } = this.getDiscordUtils();
            if (null != e) return e();
        },
        CanSystemServiceBeInstalled() {
            let { canSystemServiceBeInstalled: e } = this.getDiscordUtils();
            if (null != e) return e();
        },
        InstallSystemService() {
            let { installSystemService: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        DoesSystemServiceHaveUpdate() {
            let { doesSystemServiceHaveUpdate: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        UpdateSystemService() {
            let { updateSystemService: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        UninstallSystemService() {
            let { uninstallSystemService: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        InputEventServiceSetStatusCallback(e) {
            let { inputEventServiceSetStatusCallback: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        InputEventServiceSetAllowed(e) {
            let { inputEventServiceSetAllowed: t } = this.getDiscordUtils();
            if (null != t) return t(e);
        },
        ToolServiceSetStatusCallback(e) {
            let { toolServiceSetStatusCallback: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        ToolServiceSetAllowed(e) {
            let { toolServiceSetAllowed: t } = this.getDiscordUtils();
            if (null != t) return t(e);
        },
        isModuleVersionAtLeast(e, t) {
            let n = [...(T ?? [0, 0, 0])];
            n.push(this.moduleVersions?.[e] ?? 0);
            let r = t[this.releaseChannel] ?? t.stable;
            for (let [e, t] of n.entries())
                if (t > r[e]) break;
                else if (t < r[e]) return !1;
            return !0;
        },
        fetchRiotGamesLiveClientData(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return _.isPlatformEmbedded
                ? null == m.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : m.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, _.isDesktop)() && this.send("APP_VIEWED");
        },
        appFirstRenderAfterReadyPayload() {
            (0, _.isDesktop)() && this.send("APP_FIRST_RENDER_AFTER_READY_PAYLOAD");
        },
        appLoaded() {
            B("APP_LOADED");
        },
        indexLoadedAsync() {
            B("DISCORD_APP_ASYNC_INDEX_TSX_LOADED");
        },
    },
    j = H;

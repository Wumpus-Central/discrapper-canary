"use strict";
n.d(t, { Ay: () => H, UB: () => F, _0: () => w, dv: () => U, kw: () => k }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(279194),
    a = n(562465),
    o = n(118356),
    l = n(506774),
    u = n(56562),
    c = n(223273),
    d = n(723702),
    _ = n(998218),
    f = n(652215),
    p = n(264572).Buffer;
let h = window.DiscordNative,
    m = new Set(["jpg", "jpeg", "jfif", "png"]),
    E = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    g = (e) => e.startsWith("image/"),
    A = 5,
    I = null,
    T = null,
    S = null,
    y = {};
null != h &&
    ((I = h.remoteApp
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (S = h.remoteApp.getModuleVersions?.()),
    (T = h.remoteApp.getBuildNumber?.()));
let v = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    N = !1,
    C = "lastImageSaveDirectory",
    b = /[<>:"/\\|?*@]/g,
    R = /(\.[a-zA-Z0-9]+):[^.]*$/,
    O = /(\.[a-zA-Z0-9]+)%3A.+$/,
    D = /[^a-zA-Z0-9]/g,
    L = /\.[^.]*$/;
var w = (function (e) {
    return (e.SAVED = "saved"), (e.CANCELED = "canceled"), (e.ERRORED = "errored"), e;
})({});
function x(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(R, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(b, "_");
    } catch {
        return e
            .replace(O, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(b, "_");
    }
}
async function M(e) {
    let t = { method: "GET", mode: "cors" },
        n = await fetch(new Request(e, t));
    i()(200 === n.status, "Data fetch unsuccessful");
    let r = await n.arrayBuffer();
    return i()(null != r, "Data is null"), r;
}
function P(e) {
    return M(e);
}
var k = (function (e) {
        return (
            (e[(e.Camera = 0)] = "Camera"),
            (e[(e.Microphone = 1)] = "Microphone"),
            (e[(e.Photo = 2)] = "Photo"),
            (e[(e.InputMonitoring = 3)] = "InputMonitoring"),
            (e[(e.ScreenRecording = 4)] = "ScreenRecording"),
            e
        );
    })({}),
    U = (function (e) {
        return (e.VIDEO = "VIDEO"), (e.MUTE = "MUTE"), (e.DEAFEN = "DEAFEN"), (e.DISCONNECT = "DISCONNECT"), e;
    })({});
function G(e) {
    return {
        id: y[e.id ?? ""],
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
        fullscreenType: e.fullscreenType ?? u.aI.UNKNOWN,
        isLauncher: e.isLauncher ?? !1,
        executableFingerprint: e.executableFingerprint,
    };
}
function F(e, t) {
    if (null != t && g(t)) {
        let e = t.split("/")[1]?.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let n = _.A.toURLSafe(e);
    if (null == n) return;
    let r = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != r && r.length <= A ? r : void 0;
}
function V(e) {
    if ((0, d.isDesktop)())
        try {
            B.send(e);
        } catch (e) {}
}
let B = {
        requireModule: (e) => h.nativeModules.requireModule(e),
        ensureModule: (e) =>
            d.isPlatformEmbedded
                ? __OVERLAY__ && v.has(e)
                    ? Promise.resolve()
                    : h.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return h.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => h.crashReporter.getMetadata(),
        getSetting: async (e, t) => await h.settings.get(e, t),
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
                h.remotePowerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== l.w.get(s.qx) &&
                    this.supportsFeature(f.BYE.USER_DATA_CACHE) &&
                    h.userDataCache.cacheUserData(l.w.stringify());
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
            d.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t, n, r) {
            try {
                y = {};
                let i = 0,
                    s = this.getDiscordUtils(),
                    a = e.map((e) => {
                        let t = ++i;
                        return null != e.id && (y[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = (e) => n(e.map(G));
                null != r && null != s.setProcessObserverUserId && s.setProcessObserverUserId(r),
                    t && null != s.setObservedGamesCallback2
                        ? s.setObservedGamesCallback2(a, o)
                        : s.setObservedGamesCallback(a, o);
            } catch (e) {}
        },
        setGameDetectionCallback(e) {
            this.getDiscordUtils().setGameDetectionCallback?.((t, n) => e(t.map(G), n.map(G)));
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
                e(t.map(G));
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
            this.getDiscordUtils().setObserverDebugCallback(null, c.Lb.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            let e = this.requireModule("discord_voice");
            return (
                N ||
                    (0, o.si)((t, n, r) => {
                        e.consoleLog(n, `[${t}] ${r}`);
                    }),
                (N = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!N)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule("discord_utils");
        },
        isSystemDarkMode() {
            return !!(0, d.isWindows)() && (this.getDiscordUtils().isSystemDarkMode?.() ?? !0);
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
            if ("darwin" === (0, d.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "•") : e > 0 && (t = `${e}`), h.remoteApp.dock.setBadge(t);
            } else
                "win32" === (0, d.getPlatformName)()
                    ? this.send("APP_BADGE_SET", e)
                    : "linux" === (0, d.getPlatformName)() && h.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            d.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e);
        },
        setThumbarButtons(e) {
            d.isPlatformEmbedded && h.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (d.isPlatformEmbedded) {
                let t = h.remoteApp;
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
            d.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e);
        },
        get architecture() {
            return d.isPlatformEmbedded ? h.process.arch : "";
        },
        get releaseChannel() {
            if (!d.isPlatformEmbedded) return "";
            let e = h.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return "";
        },
        get version() {
            return I;
        },
        get buildNumber() {
            return T;
        },
        get moduleVersions() {
            return S;
        },
        get parsedOSRelease() {
            if (!d.isPlatformEmbedded) return [];
            return h.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            d.isPlatformEmbedded && h.clipboard.copy(e);
        },
        async copyImage(e, t) {
            i()(d.isPlatformEmbedded, "Copy image method called outside native app"),
                i()("function" == typeof h.clipboard.copyImage, "Copy image not supported");
            let n = await P(e),
                r = F(e, t),
                s = null != r && m.has(r) ? `image.${r}` : e;
            h.clipboard.copyImage(p.from(n), s);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            h.clipboard.copyImage(p.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !d.isPlatformEmbedded) return !1;
            let n = F(e, t);
            return null == n || E.has(n);
        },
        async saveImage(e, t, n) {
            let r, s;
            i()(d.isPlatformEmbedded, "Save image method called outside native app");
            let a = _.A.toURLSafe(e);
            if (null == a) return "errored";
            let o = a.pathname.split("/").pop() ?? "unknown";
            o = x(o);
            let u = a.searchParams.get("format");
            if (null != u) {
                let e = u.replace(D, "").toLowerCase();
                if (e.length > 0) {
                    let t = o.replace(L, "");
                    o = `${t}.${e}`;
                }
            } else if (!o.includes(".")) {
                let r = F(e, t) ?? n ?? "png";
                o = `${o}.${r}`;
            }
            let c = await P(e),
                f = p.from(c),
                m = l.w.get(C);
            if (("string" != typeof m && (m = void 0), "function" == typeof h.fileManager.saveWithDialog2)) {
                if (null == (r = await h.fileManager.saveWithDialog2(f, o, m ?? void 0))) return "errored";
                if (r.canceledByUser) return "canceled";
                s = r.directory;
            } else
                try {
                    s = await h.fileManager.saveWithDialog(f, o, m ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == s || "" === s ? "errored" : (l.w.set(C, s), "saved");
        },
        async saveFile(e, t) {
            i()(d.isPlatformEmbedded, "Save file method called outside native app");
            let n = _.A.toURLSafe(e);
            if (null == n) return null;
            let r = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (r = x(r));
            let s = await M(e),
                a = p.from(s),
                o = await h.fileManager.saveWithDialog(a, r, void 0);
            return null == o ? null : o;
        },
        async downloadVoiceFilterFile(e, t, n) {
            i()(d.isPlatformEmbedded, "Download voice filter file method called outside native app");
            let r = _.A.toURLSafe(e);
            return (
                i()(r, "Could not download voice filter, fileSrc was not a valid path"),
                await h.fileManager.maybeDownloadVoiceFilterFile(e, t, n)
            );
        },
        stopVoiceFilterDownloads() {
            h.fileManager.stopVoiceFilterDownloads();
        },
        canCheckVoiceFilterFilesExist: () => "function" == typeof h.fileManager.checkVoiceFilterFilesExist,
        checkVoiceFilterFilesExist: async (e) => await h.fileManager.checkVoiceFilterFilesExist(e),
        cleanupUnusedVoiceFilterFiles: async (e) => await h.fileManager.cleanupUnusedVoiceFilterFiles(e),
        async downloadMLModelFile(e, t, n) {
            i()(d.isPlatformEmbedded, "Download ML model file method called outside native app");
            let r = _.A.toURLSafe(e);
            return (
                i()(r, "Could not download ML model, fileSrc was not a valid path"),
                await h.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            h.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof h.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await h.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await h.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadOpenH264(e, t, n, r) {
            i()(d.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let s = _.A.toURLSafe(e);
            return (
                i()(s, "Could not download OpenH264, fileSrc was not a valid path"),
                await h.fileManager.maybeDownloadOpenH264(e, t, n, r)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await h.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (d.isPlatformEmbedded) return h.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!d.isPlatformEmbedded || "function" != typeof h.clipboard.copyImage) return !1;
            if (null != e) {
                let t = F(e, void 0);
                if (null != t && !m.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            d.isPlatformEmbedded && h.clipboard.cut();
        },
        paste() {
            d.isPlatformEmbedded && h.clipboard.paste();
        },
        readClipboard: () => (d.isPlatformEmbedded ? h.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!d.isPlatformEmbedded && (h.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            h.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return h.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            h.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!d.isPlatformEmbedded) return !0;
            try {
                return h?.ipc != null && "function" == typeof h.ipc.send;
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
            h.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await h.nativeModules.ensureModule("discord_webauthn"), await h.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await h.nativeModules.ensureModule("discord_webauthn"), await h.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            h.window.minimize(e);
        },
        restore(e) {
            h.window.restore(e);
        },
        maximize(e) {
            h.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, d.isWindows)() && this.minimize(null), h.window.focus(t, e);
        },
        blur() {
            d.isPlatformEmbedded && null != h.window.blur ? h.window.blur() : window.blur();
        },
        fullscreen(e) {
            h.window.fullscreen(e);
        },
        close(e) {
            h.window.close(e);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof h.window.setAlwaysOnTop && h.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof h.window.isAlwaysOnTop && (t = await h.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof h?.window?.showInactive && h.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            h?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (d.isPlatformEmbedded && "darwin" === (0, d.getPlatformName)())
                try {
                    this.send("WINDOW_SET_TRAFFIC_LIGHT_POSITION", e);
                } catch (e) {}
        },
        purgeMemory() {
            d.isPlatformEmbedded && h.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            h.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            h.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            d.isPlatformEmbedded && h.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => h.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !d.isPlatformEmbedded || (!__OVERLAY__ && h.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            h.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            h.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            h.gpuSettings.setSetting?.(e, t);
        },
        getOpenOnStart: async () => (await h.app.getOpenOnStart?.()) ?? (await h.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, d.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!d.isPlatformEmbedded && (h.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != h.window.setBackgroundThrottling
                ? h.window.setBackgroundThrottling(e)
                : h.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof h.window.setFocusable && h.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            h.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            h.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => h.app.getPreferredSystemLanguages?.(),
        getPidFromDesktopSource(e) {
            if (!(0, d.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
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
            if (!(0, d.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
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
        showOpenDialog: (e) => h.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            d.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != h.processUtils.flushStorageData
                          ? h.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            d.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != h.processUtils.flushCookies
                          ? h.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            d.isPlatformEmbedded &&
                h?.processUtils?.setCrashInformation != null &&
                h.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            d.isPlatformEmbedded && null != h.powerSaveBlocker ? h.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            d.isPlatformEmbedded && null != h.powerSaveBlocker && h.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            d.isPlatformEmbedded && null != h.powerSaveBlocker && h.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            d.isPlatformEmbedded && null != h.remoteApp.relaunch && h.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = `${(0, a.TP)()}${e}`;
            if (!d.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == h.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: i,
                    maxBps: s,
                    token: o,
                    chunkInterval: l,
                    contentType: u,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                c = t;
            "application/json" === u && (c = JSON.stringify(t));
            let _ = (l / 1e3) * s,
                f = Math.ceil(c.length / _),
                p = Array(f);
            for (let e = 0; e < f; e++) {
                let t = e * _;
                p[e] = c.substring(t, t + _);
            }
            return new Promise((e, t) => {
                null != h.http &&
                    h.http.makeChunkedRequest(
                        r,
                        p,
                        { method: i, chunkInterval: l, contentType: u, token: o },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, d.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = h.app.getReleaseChannel(),
                r = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...r, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            h.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e);
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
            return -1 === i && (i = null), i ?? n ?? u.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: u.YL.QUNS_UNKNOWN } : n(e, t);
        },
        SetGPUBoostEnabledByPid(e, t) {
            let { setGPUBoostEnabledByPid: n } = this.getDiscordUtils();
            return null != n && n(e, t);
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
            let n = [...(I ?? [0, 0, 0])];
            n.push(this.moduleVersions?.[e] ?? 0);
            let r = t[this.releaseChannel] ?? t.stable;
            for (let [e, t] of n.entries())
                if (t > r[e]) break;
                else if (t < r[e]) return !1;
            return !0;
        },
        fetchRiotGamesLiveClientData(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return d.isPlatformEmbedded
                ? null == h.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : h.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, d.isDesktop)() && this.send("APP_VIEWED");
        },
        appFirstRenderAfterReadyPayload() {
            (0, d.isDesktop)() && this.send("APP_FIRST_RENDER_AFTER_READY_PAYLOAD");
        },
        appLoaded() {
            V("APP_LOADED");
        },
        indexLoadedAsync() {
            V("DISCORD_APP_ASYNC_INDEX_TSX_LOADED");
        },
    },
    H = B;

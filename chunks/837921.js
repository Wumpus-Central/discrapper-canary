"use strict";
n.d(t, { Ay: () => H, UB: () => V, _0: () => x, dv: () => G, kw: () => U }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(279194),
    s = n(562465),
    o = n(118356),
    l = n(506774),
    u = n(56562),
    c = n(223273),
    d = n(723702),
    _ = n(998218),
    f = n(652215),
    h = n(264572).Buffer;
let p = window.DiscordNative,
    g = new Set(["jpg", "jpeg", "jfif", "png"]),
    E = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    A = (e) => e.startsWith("image/"),
    I = 5,
    T = null,
    y = null,
    S = null,
    v = {};
null != p &&
    ((T = p.remoteApp
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (S = p.remoteApp.getModuleVersions?.()),
    (y = p.remoteApp.getBuildNumber?.()));
let C = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    b = !1,
    N = "lastImageSaveDirectory",
    R = /[<>:"/\\|?*@]/g,
    O = /(\.[a-zA-Z0-9]+):[^.]*$/,
    D = /(\.[a-zA-Z0-9]+)%3A.+$/,
    L = /[^a-zA-Z0-9]/g,
    w = /\.[^.]*$/;
var x = (function (e) {
    return (e.SAVED = "saved"), (e.CANCELED = "canceled"), (e.ERRORED = "errored"), e;
})({});
function P(e) {
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
async function M(e) {
    let t = { method: "GET", mode: "cors" },
        n = await fetch(new Request(e, t));
    i()(200 === n.status, "Data fetch unsuccessful");
    let r = await n.arrayBuffer();
    return i()(null != r, "Data is null"), r;
}
function k(e) {
    return M(e);
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
    return {
        id: v[e.id ?? ""],
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
function V(e, t) {
    if (null != t && A(t)) {
        let e = t.split("/")[1]?.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let n = _.A.toURLSafe(e);
    if (null == n) return;
    let r = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != r && r.length <= I ? r : void 0;
}
function B(e) {
    if ((0, d.isDesktop)())
        try {
            j.send(e);
        } catch (e) {}
}
let j = {
        requireModule: (e) => p.nativeModules.requireModule(e),
        ensureModule: (e) =>
            d.isPlatformEmbedded
                ? __OVERLAY__ && C.has(e)
                    ? Promise.resolve()
                    : p.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return p.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => p.crashReporter.getMetadata(),
        getSetting: async (e, t) => await p.settings.get(e, t),
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
                p.remotePowerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== l.w.get(a.qx) &&
                    this.supportsFeature(f.BYE.USER_DATA_CACHE) &&
                    p.userDataCache.cacheUserData(l.w.stringify());
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
                v = {};
                let i = 0,
                    a = this.getDiscordUtils(),
                    s = e.map((e) => {
                        let t = ++i;
                        return null != e.id && (v[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = (e) => n(e.map(F));
                null != r && null != a.setProcessObserverUserId && a.setProcessObserverUserId(r),
                    t && null != a.setObservedGamesCallback2
                        ? a.setObservedGamesCallback2(s, o)
                        : a.setObservedGamesCallback(s, o);
            } catch (e) {}
        },
        setGameDetectionCallback(e) {
            this.getDiscordUtils().setGameDetectionCallback?.((t, n) => e(t.map(F), n.map(F)));
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
                e(t.map(F));
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
                b ||
                    (0, o.si)((t, n, r) => {
                        e.consoleLog(n, `[${t}] ${r}`);
                    }),
                (b = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!b)
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
                -1 === e ? (t = "•") : e > 0 && (t = `${e}`), p.remoteApp.dock.setBadge(t);
            } else
                "win32" === (0, d.getPlatformName)()
                    ? this.send("APP_BADGE_SET", e)
                    : "linux" === (0, d.getPlatformName)() && p.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            d.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e);
        },
        setThumbarButtons(e) {
            d.isPlatformEmbedded && p.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (d.isPlatformEmbedded) {
                let t = p.remoteApp;
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
            return d.isPlatformEmbedded ? p.process.arch : "";
        },
        get releaseChannel() {
            if (!d.isPlatformEmbedded) return "";
            let e = p.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return "";
        },
        get version() {
            return T;
        },
        get buildNumber() {
            return y;
        },
        get moduleVersions() {
            return S;
        },
        get parsedOSRelease() {
            if (!d.isPlatformEmbedded) return [];
            return p.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            d.isPlatformEmbedded && p.clipboard.copy(e);
        },
        async copyImage(e, t) {
            i()(d.isPlatformEmbedded, "Copy image method called outside native app"),
                i()("function" == typeof p.clipboard.copyImage, "Copy image not supported");
            let n = await k(e),
                r = V(e, t),
                a = null != r && g.has(r) ? `image.${r}` : e;
            p.clipboard.copyImage(h.from(n), a);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            p.clipboard.copyImage(h.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !d.isPlatformEmbedded) return !1;
            let n = V(e, t);
            return null == n || E.has(n);
        },
        async saveImage(e, t, n) {
            let r, a;
            i()(d.isPlatformEmbedded, "Save image method called outside native app");
            let s = _.A.toURLSafe(e);
            if (null == s) return "errored";
            let o = s.pathname.split("/").pop() ?? "unknown";
            o = P(o);
            let u = s.searchParams.get("format");
            if (null != u) {
                let e = u.replace(L, "").toLowerCase();
                if (e.length > 0) {
                    let t = o.replace(w, "");
                    o = `${t}.${e}`;
                }
            } else if (!o.includes(".")) {
                let r = V(e, t) ?? n ?? "png";
                o = `${o}.${r}`;
            }
            let c = await k(e),
                f = h.from(c),
                g = l.w.get(N);
            if (("string" != typeof g && (g = void 0), "function" == typeof p.fileManager.saveWithDialog2)) {
                if (null == (r = await p.fileManager.saveWithDialog2(f, o, g ?? void 0))) return "errored";
                if (r.canceledByUser) return "canceled";
                a = r.directory;
            } else
                try {
                    a = await p.fileManager.saveWithDialog(f, o, g ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == a || "" === a ? "errored" : (l.w.set(N, a), "saved");
        },
        async saveFile(e, t) {
            i()(d.isPlatformEmbedded, "Save file method called outside native app");
            let n = _.A.toURLSafe(e);
            if (null == n) return null;
            let r = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (r = P(r));
            let a = await M(e),
                s = h.from(a),
                o = await p.fileManager.saveWithDialog(s, r, void 0);
            return null == o ? null : o;
        },
        async downloadVoiceFilterFile(e, t, n) {
            i()(d.isPlatformEmbedded, "Download voice filter file method called outside native app");
            let r = _.A.toURLSafe(e);
            return (
                i()(r, "Could not download voice filter, fileSrc was not a valid path"),
                await p.fileManager.maybeDownloadVoiceFilterFile(e, t, n)
            );
        },
        stopVoiceFilterDownloads() {
            p.fileManager.stopVoiceFilterDownloads();
        },
        canCheckVoiceFilterFilesExist: () => "function" == typeof p.fileManager.checkVoiceFilterFilesExist,
        checkVoiceFilterFilesExist: async (e) => await p.fileManager.checkVoiceFilterFilesExist(e),
        cleanupUnusedVoiceFilterFiles: async (e) => await p.fileManager.cleanupUnusedVoiceFilterFiles(e),
        async downloadMLModelFile(e, t, n) {
            i()(d.isPlatformEmbedded, "Download ML model file method called outside native app");
            let r = _.A.toURLSafe(e);
            return (
                i()(r, "Could not download ML model, fileSrc was not a valid path"),
                await p.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            p.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof p.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await p.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await p.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadOpenH264(e, t, n, r) {
            i()(d.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let a = _.A.toURLSafe(e);
            return (
                i()(a, "Could not download OpenH264, fileSrc was not a valid path"),
                await p.fileManager.maybeDownloadOpenH264(e, t, n, r)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await p.fileManager.cleanupUnusedOpenH264Files(e),
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!d.isPlatformEmbedded || "function" != typeof p.clipboard.copyImage) return !1;
            if (null != e) {
                let t = V(e, void 0);
                if (null != t && !g.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            d.isPlatformEmbedded && p.clipboard.cut();
        },
        paste() {
            d.isPlatformEmbedded && p.clipboard.paste();
        },
        readClipboard: () => (d.isPlatformEmbedded ? p.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!d.isPlatformEmbedded && (p.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            p.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return p.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            p.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!d.isPlatformEmbedded) return !0;
            try {
                return p?.ipc != null && "function" == typeof p.ipc.send;
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
            p.window.flashFrame(e);
        },
        webAuthnRegister: (e) =>
            p.nativeModules.ensureModule("discord_webauthn").then(() => p.webAuthn.webAuthnRegister(e)),
        webAuthnAuthenticate: (e) =>
            p.nativeModules.ensureModule("discord_webauthn").then(() => p.webAuthn.webAuthnAuthenticate(e)),
        minimize(e) {
            p.window.minimize(e);
        },
        restore(e) {
            p.window.restore(e);
        },
        maximize(e) {
            p.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, d.isWindows)() && this.minimize(null), p.window.focus(t, e);
        },
        blur() {
            d.isPlatformEmbedded && null != p.window.blur ? p.window.blur() : window.blur();
        },
        fullscreen(e) {
            p.window.fullscreen(e);
        },
        close(e) {
            p.window.close(e);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof p.window.setAlwaysOnTop && p.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof p.window.isAlwaysOnTop && (t = await p.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof p?.window?.showInactive && p.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            p?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (d.isPlatformEmbedded && "darwin" === (0, d.getPlatformName)())
                try {
                    this.send("WINDOW_SET_TRAFFIC_LIGHT_POSITION", e);
                } catch (e) {}
        },
        purgeMemory() {
            d.isPlatformEmbedded && p.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            p.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            p.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            d.isPlatformEmbedded && p.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => p.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !d.isPlatformEmbedded || (!__OVERLAY__ && p.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            p.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            p.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            p.gpuSettings.setSetting?.(e, t);
        },
        getOpenOnStart: async () => (await p.app.getOpenOnStart?.()) ?? (await p.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, d.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!d.isPlatformEmbedded && (p.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != p.window.setBackgroundThrottling
                ? p.window.setBackgroundThrottling(e)
                : p.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof p.window.setFocusable && p.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            p.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            p.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => p.app.getPreferredSystemLanguages?.(),
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
        showOpenDialog: (e) => p.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            d.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != p.processUtils.flushStorageData
                          ? p.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            d.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != p.processUtils.flushCookies
                          ? p.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            d.isPlatformEmbedded &&
                p?.processUtils?.setCrashInformation != null &&
                p.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            d.isPlatformEmbedded && null != p.powerSaveBlocker ? p.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            d.isPlatformEmbedded && null != p.powerSaveBlocker && p.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            d.isPlatformEmbedded && null != p.powerSaveBlocker && p.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            d.isPlatformEmbedded && null != p.remoteApp.relaunch && p.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = `${(0, s.TP)()}${e}`;
            if (!d.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == p.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: i,
                    maxBps: a,
                    token: o,
                    chunkInterval: l,
                    contentType: u,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                c = t;
            "application/json" === u && (c = JSON.stringify(t));
            let _ = (l / 1e3) * a,
                f = Math.ceil(c.length / _),
                h = Array(f);
            for (let e = 0; e < f; e++) {
                let t = e * _;
                h[e] = c.substring(t, t + _);
            }
            return new Promise((e, t) => {
                null != p.http &&
                    p.http.makeChunkedRequest(
                        r,
                        h,
                        { method: i, chunkInterval: l, contentType: u, token: o },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, d.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = p.app.getReleaseChannel(),
                r = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...r, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            p.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e);
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
            return d.isPlatformEmbedded
                ? null == p.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : p.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, d.isDesktop)() && this.send("APP_VIEWED");
        },
        appFirstRenderAfterReadyPayload() {
            (0, d.isDesktop)() && this.send("APP_FIRST_RENDER_AFTER_READY_PAYLOAD");
        },
        appLoaded() {
            B("APP_LOADED");
        },
        indexLoadedAsync() {
            B("DISCORD_APP_ASYNC_INDEX_TSX_LOADED");
        },
    },
    H = j;

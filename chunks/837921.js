"use strict";
n.d(t, { Ay: () => W, UB: () => H, _0: () => P, dv: () => V, kw: () => F }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(279194),
    a = n(141931),
    o = n(704619),
    l = n(562465),
    u = n(118356),
    c = n(506774),
    d = n(56562),
    _ = n(223273),
    f = n(723702),
    p = n(998218),
    h = n(652215),
    m = n(264572).Buffer;
let E = window.DiscordNative,
    g = new Set(["jpg", "jpeg", "jfif", "png"]),
    A = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    I = (e) => e.startsWith("image/"),
    T = 5,
    S = null,
    y = null,
    v = null,
    N = {};
null != E &&
    ((S = E.remoteApp
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (v = E.remoteApp.getModuleVersions?.()),
    (y = E.remoteApp.getBuildNumber?.()));
let C = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    R = !1,
    O = null,
    b = "lastImageSaveDirectory",
    D = /[<>:"/\\|?*@]/g,
    L = /(\.[a-zA-Z0-9]+):[^.]*$/,
    w = /(\.[a-zA-Z0-9]+)%3A.+$/,
    M = /[^a-zA-Z0-9]/g,
    x = /\.[^.]*$/;
var P = (function (e) {
    return (e.SAVED = "saved"), (e.CANCELED = "canceled"), (e.ERRORED = "errored"), e;
})({});
function k(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(L, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(D, "_");
    } catch {
        return e
            .replace(w, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(D, "_");
    }
}
async function U(e) {
    let t = { method: "GET", mode: "cors" },
        n = await fetch(new Request(e, t));
    i()(200 === n.status, "Data fetch unsuccessful");
    let r = await n.arrayBuffer();
    return i()(null != r, "Data is null"), r;
}
function G(e) {
    return U(e);
}
var F = (function (e) {
        return (
            (e[(e.Camera = 0)] = "Camera"),
            (e[(e.Microphone = 1)] = "Microphone"),
            (e[(e.Photo = 2)] = "Photo"),
            (e[(e.InputMonitoring = 3)] = "InputMonitoring"),
            (e[(e.ScreenRecording = 4)] = "ScreenRecording"),
            e
        );
    })({}),
    V = (function (e) {
        return (e.VIDEO = "VIDEO"), (e.MUTE = "MUTE"), (e.DEAFEN = "DEAFEN"), (e.DISCONNECT = "DISCONNECT"), e;
    })({});
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
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
        fullscreenType: e.fullscreenType ?? d.aI.UNKNOWN,
        isLauncher: e.isLauncher ?? !1,
        executableFingerprint: e.executableFingerprint,
    };
}
function H(e, t) {
    if (null != t && I(t)) {
        let e = t.split("/")[1]?.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let n = p.A.toURLSafe(e);
    if (null == n) return;
    let r = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != r && r.length <= T ? r : void 0;
}
function j(e) {
    if ((0, f.isDesktop)())
        try {
            Y.sendIPC(e);
        } catch (e) {}
}
let Y = {
        requireModule: (e) => E.nativeModules.requireModule(e),
        ensureModule: (e) =>
            f.isPlatformEmbedded
                ? __OVERLAY__ && C.has(e)
                    ? Promise.resolve()
                    : E.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return E.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => E.crashReporter.getMetadata(),
        getSetting: async (e, t) => await E.settings.get(e, t),
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
                E.remotePowerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== c.w.get(s.qx) &&
                    this.supportsFeature(h.BYE.USER_DATA_CACHE) &&
                    E.userDataCache.cacheUserData(c.w.stringify());
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
            f.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t, n, r) {
            try {
                N = {};
                let i = 0,
                    s = this.getDiscordUtils(),
                    a = e.map((e) => {
                        let t = ++i;
                        return null != e.id && (N[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = N,
                    l = (e) => n(e.map((e) => B(e, o)));
                null != r && null != s.setProcessObserverUserId && s.setProcessObserverUserId(r),
                    t && null != s.setObservedGamesCallback2
                        ? s.setObservedGamesCallback2(a, l)
                        : s.setObservedGamesCallback(a, l);
            } catch (e) {}
        },
        setGameDetectionCallback(e) {
            this.getDiscordUtils().setGameDetectionCallback?.((t, n) =>
                e(
                    t.map((e) => B(e)),
                    n.map((e) => B(e)),
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
                e(t.map((e) => B(e)));
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
            this.getDiscordUtils().setObserverDebugCallback(null, _.Lb.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            let e = this.requireModule("discord_voice");
            return (
                R ||
                    (0, u.si)((t, n, r) => {
                        e.consoleLog(n, `[${t}] ${r}`);
                    }),
                (R = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!R)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule("discord_utils");
        },
        isSystemDarkMode() {
            return !!(0, f.isWindows)() && (this.getDiscordUtils().isSystemDarkMode?.() ?? !0);
        },
        getDiscordIsElevated() {
            return (0, f.isWindows)() && null != this.getDiscordUtils().getDiscordIsElevated
                ? (null === O && (O = this.getDiscordUtils().getDiscordIsElevated()), O)
                : null;
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
            if ("darwin" === (0, f.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "•") : e > 0 && (t = `${e}`), E.remoteApp.dock.setBadge(t);
            } else
                "win32" === (0, f.getPlatformName)()
                    ? this.sendIPC(o.W.APP_BADGE_SET, e)
                    : "linux" === (0, f.getPlatformName)() && E.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            f.isPlatformEmbedded && this.sendIPC(o.W.SYSTEM_TRAY_SET_ICON, e);
        },
        setThumbarButtons(e) {
            f.isPlatformEmbedded && E.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (f.isPlatformEmbedded) {
                let t = E.remoteApp;
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
            f.isPlatformEmbedded && this.sendIPC(o.W.SYSTEM_TRAY_SET_APPLICATIONS, e);
        },
        get architecture() {
            return f.isPlatformEmbedded ? E.process.arch : "";
        },
        get releaseChannel() {
            if (!f.isPlatformEmbedded) return "";
            let e = E.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return "";
        },
        get version() {
            return S;
        },
        get buildNumber() {
            return y;
        },
        get moduleVersions() {
            return v;
        },
        get parsedOSRelease() {
            if (!f.isPlatformEmbedded) return [];
            return E.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            f.isPlatformEmbedded && E.clipboard.copy(e);
        },
        async copyImage(e, t) {
            i()(f.isPlatformEmbedded, "Copy image method called outside native app"),
                i()("function" == typeof E.clipboard.copyImage, "Copy image not supported");
            let n = await G(e),
                r = H(e, t),
                s = null != r && g.has(r) ? `image.${r}` : e;
            E.clipboard.copyImage(m.from(n), s);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            E.clipboard.copyImage(m.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !f.isPlatformEmbedded) return !1;
            let n = H(e, t);
            return null == n || A.has(n);
        },
        async saveImage(e, t, n) {
            let r, s;
            i()(f.isPlatformEmbedded, "Save image method called outside native app");
            let a = p.A.toURLSafe(e);
            if (null == a) return "errored";
            let o = a.pathname.split("/").pop() ?? "unknown";
            o = k(o);
            let l = a.searchParams.get("format");
            if (null != l) {
                let e = l.replace(M, "").toLowerCase();
                if (e.length > 0) {
                    let t = o.replace(x, "");
                    o = `${t}.${e}`;
                }
            } else if (!o.includes(".")) {
                let r = H(e, t) ?? n ?? "png";
                o = `${o}.${r}`;
            }
            let u = await G(e),
                d = m.from(u),
                _ = c.w.get(b);
            if (("string" != typeof _ && (_ = void 0), "function" == typeof E.fileManager.saveWithDialog2)) {
                if (null == (r = await E.fileManager.saveWithDialog2(d, o, _ ?? void 0))) return "errored";
                if (r.canceledByUser) return "canceled";
                s = r.directory;
            } else
                try {
                    s = await E.fileManager.saveWithDialog(d, o, _ ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == s || "" === s ? "errored" : (c.w.set(b, s), "saved");
        },
        async saveFile(e, t) {
            i()(f.isPlatformEmbedded, "Save file method called outside native app");
            let n = p.A.toURLSafe(e);
            if (null == n) return null;
            let r = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (r = k(r));
            let s = await U(e),
                a = m.from(s),
                o = await E.fileManager.saveWithDialog(a, r, void 0);
            return null == o ? null : o;
        },
        async downloadVoiceFilterFile(e, t, n) {
            i()(f.isPlatformEmbedded, "Download voice filter file method called outside native app");
            let r = p.A.toURLSafe(e);
            return (
                i()(r, "Could not download voice filter, fileSrc was not a valid path"),
                await E.fileManager.maybeDownloadVoiceFilterFile(e, t, n)
            );
        },
        stopVoiceFilterDownloads() {
            E.fileManager.stopVoiceFilterDownloads();
        },
        canCheckVoiceFilterFilesExist: () => "function" == typeof E.fileManager.checkVoiceFilterFilesExist,
        checkVoiceFilterFilesExist: async (e) => await E.fileManager.checkVoiceFilterFilesExist(e),
        cleanupUnusedVoiceFilterFiles: async (e) => await E.fileManager.cleanupUnusedVoiceFilterFiles(e),
        async downloadMLModelFile(e, t, n) {
            i()(f.isPlatformEmbedded, "Download ML model file method called outside native app");
            let r = p.A.toURLSafe(e);
            return (
                i()(r, "Could not download ML model, fileSrc was not a valid path"),
                await E.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            E.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof E.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await E.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await E.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadOpenH264(e, t, n, r) {
            i()(f.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let s = p.A.toURLSafe(e);
            return (
                i()(s, "Could not download OpenH264, fileSrc was not a valid path"),
                await E.fileManager.maybeDownloadOpenH264(e, t, n, r)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await E.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (f.isPlatformEmbedded) return E.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!f.isPlatformEmbedded || "function" != typeof E.clipboard.copyImage) return !1;
            if (null != e) {
                let t = H(e, void 0);
                if (null != t && !g.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            f.isPlatformEmbedded && E.clipboard.cut();
        },
        paste() {
            f.isPlatformEmbedded && E.clipboard.paste();
        },
        readClipboard: () => (f.isPlatformEmbedded ? E.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!f.isPlatformEmbedded && (E.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            E.ipc.on(e, t);
        },
        onIPC(e, t) {
            E.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return E.ipc.invoke(e, ...n);
        },
        invokeIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return E.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            E.ipc.send(e, ...n);
        },
        sendIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            E.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!f.isPlatformEmbedded) return !0;
            try {
                return E?.ipc != null && "function" == typeof E.ipc.send;
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
            E.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await E.nativeModules.ensureModule("discord_webauthn"), await E.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await E.nativeModules.ensureModule("discord_webauthn"), await E.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            E.window.minimize(e);
        },
        restore(e) {
            E.window.restore(e);
        },
        maximize(e) {
            E.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, f.isWindows)() && this.minimize(null), E.window.focus(t, e);
        },
        blur() {
            f.isPlatformEmbedded && null != E.window.blur ? E.window.blur() : window.blur();
        },
        fullscreen(e) {
            E.window.fullscreen(e);
        },
        close(e) {
            E.window.close(e);
        },
        clearNavigationHistory() {
            j(o.W.NAVIGATION_HISTORY_CLEAR);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof E.window.setAlwaysOnTop && E.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof E.window.isAlwaysOnTop && (t = await E.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof E?.window?.showInactive && E.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            E?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (f.isPlatformEmbedded && "darwin" === (0, f.getPlatformName)())
                try {
                    this.sendIPC(o.W.WINDOW_SET_TRAFFIC_LIGHT_POSITION, e);
                } catch (e) {}
        },
        purgeMemory() {
            f.isPlatformEmbedded && E.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            E.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            E.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            f.isPlatformEmbedded && E.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => E.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !f.isPlatformEmbedded || (!__OVERLAY__ && E.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            E.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setOpenH264Enabled(e) {
            E.settings.set("openH264Enabled", e);
        },
        setChromiumSwitches(e) {
            E.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            E.gpuSettings.setSetting?.(e, t);
        },
        getOpenOnStart: async () => (await E.app.getOpenOnStart?.()) ?? (await E.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, f.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!f.isPlatformEmbedded && (E.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != E.window.setBackgroundThrottling
                ? E.window.setBackgroundThrottling(e)
                : E.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof E.window.setFocusable && E.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            E.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            E.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => E.app.getPreferredSystemLanguages?.(),
        getPidFromDesktopSource(e) {
            if (!(0, f.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
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
            if (!(0, f.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
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
        showOpenDialog: (e) => E.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            f.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != E.processUtils.flushStorageData
                          ? E.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            f.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != E.processUtils.flushCookies
                          ? E.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            f.isPlatformEmbedded &&
                E?.processUtils?.setCrashInformation != null &&
                E.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            f.isPlatformEmbedded && null != E.powerSaveBlocker ? E.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            f.isPlatformEmbedded && null != E.powerSaveBlocker && E.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            f.isPlatformEmbedded && null != E.powerSaveBlocker && E.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            f.isPlatformEmbedded && null != E.remoteApp.relaunch && E.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = `${(0, l.TP)()}${e}`;
            if (!f.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == E.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: i,
                    maxBps: s,
                    token: a,
                    chunkInterval: o,
                    contentType: u,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                c = t;
            "application/json" === u && (c = JSON.stringify(t));
            let d = (o / 1e3) * s,
                _ = Math.ceil(c.length / d),
                p = Array(_);
            for (let e = 0; e < _; e++) {
                let t = e * d;
                p[e] = c.substring(t, t + d);
            }
            return new Promise((e, t) => {
                null != E.http &&
                    E.http.makeChunkedRequest(
                        r,
                        p,
                        { method: i, chunkInterval: o, contentType: u, token: a },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, f.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = E.app.getReleaseChannel(),
                r = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...r, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            this.sendIPC(o.W.SETTINGS_UPDATE_BACKGROUND_COLOR, e);
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
            return -1 === i && (i = null), i ?? n ?? d.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: d.YL.QUNS_UNKNOWN } : n(e, t);
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
            let n = [...(S ?? [0, 0, 0])];
            n.push(this.moduleVersions?.[e] ?? 0);
            let r = t[this.releaseChannel] ?? t.stable;
            for (let [e, t] of n.entries())
                if (t > r[e]) break;
                else if (t < r[e]) return !1;
            return !0;
        },
        fetchRiotGamesLiveClientData(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return f.isPlatformEmbedded
                ? null == E.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : E.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, f.isDesktop)() && this.sendIPC(o.W.APP_VIEWED);
        },
        appFirstRenderAfterReadyPayload() {
            (0, f.isDesktop)() && this.sendIPC(o.W.APP_FIRST_RENDER_AFTER_READY_PAYLOAD);
        },
        appLoaded() {
            j(o.W.APP_LOADED);
        },
        indexLoadedAsync() {
            j(o.W.APP_ASYNC_INDEX_TSX_LOADED);
        },
    },
    W = Y;

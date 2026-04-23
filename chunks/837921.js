"use strict";
n.d(t, { Ay: () => W, UB: () => H, _0: () => U, kw: () => V }), n(321073);
var r,
    i,
    s = n(284009),
    a = n.n(s),
    o = n(279194),
    l = n(141931),
    u = n(704619),
    c = n(562465),
    d = n(118356),
    _ = n(506774),
    f = n(56562),
    p = n(223273),
    h = n(723702),
    E = n(998218),
    m = n(652215),
    g = n(264572).Buffer;
let A = window.DiscordNative,
    I = new Set(["jpg", "jpeg", "jfif", "png"]),
    T = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    S = null,
    y = null,
    N = null,
    v = {},
    C = !1,
    O = {};
null != A &&
    ((S = A.app
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (N = A.app.getModuleVersions()),
    (y = A.app.getBuildNumber()));
let R = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    b = !1,
    D = null,
    L = "lastImageSaveDirectory",
    w = /[<>:"/\\|?*@]/g,
    M = /(\.[a-zA-Z0-9]+):[^.]*$/,
    P = /(\.[a-zA-Z0-9]+)%3A.+$/,
    x = /[^a-zA-Z0-9]/g,
    k = /\.[^.]*$/;
var U = (((r = {}).SAVED = "saved"), (r.CANCELED = "canceled"), (r.ERRORED = "errored"), r);
function G(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(M, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(w, "_");
    } catch {
        return e
            .replace(P, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(w, "_");
    }
}
async function F(e) {
    let t = await fetch(new Request(e, { method: "GET", mode: "cors" }));
    a()(200 === t.status, "Data fetch unsuccessful");
    let n = await t.arrayBuffer();
    return a()(null != n, "Data is null"), n;
}
var V =
    (((i = {})[(i.Camera = 0)] = "Camera"),
    (i[(i.Microphone = 1)] = "Microphone"),
    (i[(i.Photo = 2)] = "Photo"),
    (i[(i.InputMonitoring = 3)] = "InputMonitoring"),
    (i[(i.ScreenRecording = 4)] = "ScreenRecording"),
    i);
function B(e) {
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
        fullscreenType: e.fullscreenType ?? f.aI.UNKNOWN,
        isLauncher: e.isLauncher ?? !1,
        executableFingerprint: e.executableFingerprint,
    };
}
function H(e, t) {
    if (null != t && t.startsWith("image/")) {
        let e = t.split("/")[1]?.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let n = E.A.toURLSafe(e);
    if (null == n) return;
    let r = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != r && r.length <= 5 ? r : void 0;
}
function j(e) {
    if ((0, h.isDesktop)())
        try {
            Y.sendIPC(e);
        } catch (e) {}
}
let Y = {
        requireModule(e) {
            if (C && O.hasOwnProperty(e) && null != O[e]) return O[e];
            let t = A.nativeModules.requireModule(e);
            return C && (O[e] = t), t;
        },
        ensureModule: (e) =>
            h.isPlatformEmbedded
                ? __OVERLAY__ && R.has(e)
                    ? Promise.resolve()
                    : A.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return A.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => A.crashReporter.getMetadata(),
        getSetting: async (e, t) => await A.settings.get(e, t),
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
                A.powerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== _.w.get(o.qx) &&
                    this.supportsFeature(m.BYE.USER_DATA_CACHE) &&
                    A.userDataCache.cacheUserData(_.w.stringify());
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
            h.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e);
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
                    l = (e) => n(e.map((e) => B(e, o)));
                null != r && null != s.setProcessObserverUserId && s.setProcessObserverUserId(r),
                    t && null != s.setObservedGamesCallback2
                        ? s.setObservedGamesCallback2(a, l)
                        : s.setObservedGamesCallback(a, l);
            } catch (e) {}
        },
        setProcessObserverCollectExecutableFingerprint(e) {
            this.getDiscordUtils().setProcessObserverCollectExecutableFingerprint?.(e);
        },
        getExecutableFingerprintForProcess(e) {
            return new Promise((t) => {
                let n = this.getDiscordUtils()?.getExecutableFingerprintForProcess;
                null != n ? n(e, (e) => t(null != e && "" !== e ? e : null)) : t(null);
            });
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
            this.getDiscordUtils().setObserverDebugCallback(null, p.Lb.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            let e = this.requireModule("discord_voice");
            return (
                b ||
                    (0, d.si)((t, n, r) => {
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
            return !!(0, h.isWindows)() && (this.getDiscordUtils().isSystemDarkMode?.() ?? !0);
        },
        getDiscordIsElevated() {
            return (0, h.isWindows)() && null != this.getDiscordUtils().getDiscordIsElevated
                ? (null === D && (D = this.getDiscordUtils().getDiscordIsElevated()), D)
                : null;
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
            if ("darwin" === (0, h.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "•") : e > 0 && (t = `${e}`), A.app.dock.setBadge(t);
            } else
                "win32" === (0, h.getPlatformName)()
                    ? this.sendIPC(u.W.APP_BADGE_SET, e)
                    : "linux" === (0, h.getPlatformName)() && A.app.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            h.isPlatformEmbedded && this.sendIPC(u.W.SYSTEM_TRAY_SET_ICON, e);
        },
        setThumbarButtons(e) {
            h.isPlatformEmbedded && A.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (h.isPlatformEmbedded) {
                let t = A.app;
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
            h.isPlatformEmbedded && this.sendIPC(u.W.SYSTEM_TRAY_SET_APPLICATIONS, e);
        },
        get architecture() {
            return h.isPlatformEmbedded ? A.process.arch : "";
        },
        get releaseChannel() {
            if (!h.isPlatformEmbedded) return "";
            return A.app.getReleaseChannel();
        },
        get version() {
            return S;
        },
        get buildNumber() {
            return y;
        },
        get moduleVersions() {
            return N;
        },
        get parsedOSRelease() {
            if (!h.isPlatformEmbedded) return [];
            return A.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            h.isPlatformEmbedded && A.clipboard.copy(e);
        },
        async copyImage(e, t) {
            a()(h.isPlatformEmbedded, "Copy image method called outside native app"),
                a()("function" == typeof A.clipboard.copyImage, "Copy image not supported");
            let n = await F(e),
                r = H(e, t),
                i = null != r && I.has(r) ? `image.${r}` : e;
            A.clipboard.copyImage(g.from(n), i);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            A.clipboard.copyImage(g.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !h.isPlatformEmbedded) return !1;
            let n = H(e, t);
            return null == n || T.has(n);
        },
        async saveImage(e, t, n) {
            let r, i;
            a()(h.isPlatformEmbedded, "Save image method called outside native app");
            let s = E.A.toURLSafe(e);
            if (null == s) return "errored";
            let o = s.pathname.split("/").pop() ?? "unknown";
            o = G(o);
            let l = s.searchParams.get("format");
            if (null != l) {
                let e = l.replace(x, "").toLowerCase();
                if (e.length > 0) {
                    let t = o.replace(k, "");
                    o = `${t}.${e}`;
                }
            } else if (!o.includes(".")) {
                let r = H(e, t) ?? n ?? "png";
                o = `${o}.${r}`;
            }
            let u = await F(e),
                c = g.from(u),
                d = _.w.get(L);
            if (("string" != typeof d && (d = void 0), "function" == typeof A.fileManager.saveWithDialog2)) {
                if (null == (r = await A.fileManager.saveWithDialog2(c, o, d ?? void 0))) return "errored";
                if (r.canceledByUser) return "canceled";
                i = r.directory;
            } else
                try {
                    i = await A.fileManager.saveWithDialog(c, o, d ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == i || "" === i ? "errored" : (_.w.set(L, i), "saved");
        },
        async saveFile(e, t) {
            a()(h.isPlatformEmbedded, "Save file method called outside native app");
            let n = E.A.toURLSafe(e);
            if (null == n) return null;
            let r = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (r = G(r));
            let i = await F(e),
                s = g.from(i),
                o = await A.fileManager.saveWithDialog(s, r, void 0);
            return null == o ? null : o;
        },
        async downloadMLModelFile(e, t, n) {
            a()(h.isPlatformEmbedded, "Download ML model file method called outside native app");
            let r = E.A.toURLSafe(e);
            return (
                a()(r, "Could not download ML model, fileSrc was not a valid path"),
                await A.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            A.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof A.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await A.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await A.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadClipsFile(e, t, n) {
            a()(h.isPlatformEmbedded, "Download clips file method called outside native app");
            let r = E.A.toURLSafe(e);
            return (
                a()(r, "Could not download clips file, fileSrc was not a valid path"),
                await A.fileManager.maybeDownloadClipsFile(e, t, n)
            );
        },
        stopClipsDownloads() {
            A.fileManager.stopClipsDownloads();
        },
        canCheckClipsFilesExist: () => "function" == typeof A.fileManager.checkClipsFilesExist,
        checkClipsFilesExist: async (e) => await A.fileManager.checkClipsFilesExist(e),
        cleanupUnusedClipsFiles: async (e) => await A.fileManager.cleanupUnusedClipsFiles(e),
        getClipsDataDirSync: () => A.fileManager.getClipsDataDirSync(),
        async downloadOpenH264(e, t, n, r) {
            a()(h.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let i = E.A.toURLSafe(e);
            return (
                a()(i, "Could not download OpenH264, fileSrc was not a valid path"),
                await A.fileManager.maybeDownloadOpenH264(e, t, n, r)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await A.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (h.isPlatformEmbedded) return A.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!h.isPlatformEmbedded || "function" != typeof A.clipboard.copyImage) return !1;
            if (null != e) {
                let t = H(e, void 0);
                if (null != t && !I.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            h.isPlatformEmbedded && A.clipboard.cut();
        },
        paste() {
            h.isPlatformEmbedded && A.clipboard.paste();
        },
        readClipboard: () => (h.isPlatformEmbedded ? A.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!h.isPlatformEmbedded && (A.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            A.ipc.on(e, t);
        },
        onIPC(e, t) {
            A.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return A.ipc.invoke(e, ...n);
        },
        invokeIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return A.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            A.ipc.send(e, ...n);
        },
        sendIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            A.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!h.isPlatformEmbedded) return !0;
            try {
                return A?.ipc != null && "function" == typeof A.ipc.send;
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
            A.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await A.nativeModules.ensureModule("discord_webauthn"), await A.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await A.nativeModules.ensureModule("discord_webauthn"), await A.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            A.window.minimize(e);
        },
        restore(e) {
            A.window.restore(e);
        },
        maximize(e) {
            A.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, h.isWindows)() && this.minimize(null), A.window.focus(t, e);
        },
        blur() {
            h.isPlatformEmbedded && null != A.window.blur ? A.window.blur() : window.blur();
        },
        fullscreen(e) {
            A.window.fullscreen(e);
        },
        close(e) {
            A.window.close(e);
        },
        clearNavigationHistory() {
            j(u.W.NAVIGATION_HISTORY_CLEAR);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof A.window.setAlwaysOnTop && A.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof A.window.isAlwaysOnTop && (t = await A.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof A?.window?.showInactive && A.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            A?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (h.isPlatformEmbedded && "darwin" === (0, h.getPlatformName)())
                try {
                    this.sendIPC(u.W.WINDOW_SET_TRAFFIC_LIGHT_POSITION, e);
                } catch (e) {}
        },
        purgeMemory() {
            h.isPlatformEmbedded && A.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            A.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            A.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            h.isPlatformEmbedded && A.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => A.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !h.isPlatformEmbedded || (!__OVERLAY__ && A.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            A.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setOpenH264Enabled(e) {
            A?.settings?.set?.("openH264Enabled", e);
        },
        setChromiumSwitches(e) {
            A.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            A.gpuSettings.setSetting?.(e, t);
        },
        getOpenOnStart: async () => (await A.app.getOpenOnStart?.()) ?? (await A.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, h.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!h.isPlatformEmbedded && (A.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != A.window.setBackgroundThrottling
                ? A.window.setBackgroundThrottling(e)
                : A.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof A.window.setFocusable && A.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            A.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            A.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => A.app.getPreferredSystemLanguages?.(),
        getPidFromDesktopSource(e) {
            if (!(0, h.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
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
            if (!(0, h.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
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
        showOpenDialog: (e) => A.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            h.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != A.processUtils.flushStorageData
                          ? A.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            h.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != A.processUtils.flushCookies
                          ? A.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            h.isPlatformEmbedded &&
                A?.processUtils?.setCrashInformation != null &&
                A.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            h.isPlatformEmbedded && null != A.powerSaveBlocker ? A.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            h.isPlatformEmbedded && null != A.powerSaveBlocker && A.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            h.isPlatformEmbedded && null != A.powerSaveBlocker && A.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            h.isPlatformEmbedded && A.app.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = `${(0, c.TP)()}${e}`;
            if (!h.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == A.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: i,
                    maxBps: s,
                    token: a,
                    chunkInterval: o,
                    contentType: l,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                u = t;
            "application/json" === l && (u = JSON.stringify(t));
            let d = (o / 1e3) * s,
                _ = Math.ceil(u.length / d),
                f = Array(_);
            for (let e = 0; e < _; e++) {
                let t = e * d;
                f[e] = u.substring(t, t + d);
            }
            return new Promise((e, t) => {
                null != A.http &&
                    A.http.makeChunkedRequest(
                        r,
                        f,
                        { method: i, chunkInterval: o, contentType: l, token: a },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, h.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = A.app.getReleaseChannel(),
                r = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...r, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            this.sendIPC(u.W.SETTINGS_UPDATE_BACKGROUND_COLOR, e);
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
            return -1 === i && (i = null), i ?? n ?? f.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: f.YL.QUNS_UNKNOWN } : n(e, t);
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
            if (null == n) return Promise.reject(new l.Fh());
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
            return h.isPlatformEmbedded
                ? null == A.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : A.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, h.isDesktop)() && this.sendIPC(u.W.APP_VIEWED);
        },
        appFirstRenderAfterReadyPayload() {
            (0, h.isDesktop)() && this.sendIPC(u.W.APP_FIRST_RENDER_AFTER_READY_PAYLOAD);
        },
        appLoaded() {
            j(u.W.APP_LOADED);
        },
        indexLoadedAsync() {
            j(u.W.APP_ASYNC_INDEX_TSX_LOADED);
        },
        setUseRequireModuleCache(e) {
            C = e;
        },
    },
    W = Y;

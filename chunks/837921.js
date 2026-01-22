n.d(t, {
    Ay: () => Z,
    UB: () => z,
    _0: () => V,
    dv: () => W,
    kw: () => Y,
}),
    n(896048),
    n(747238),
    n(812715),
    n(65821),
    n(457529),
    n(321073);
var r,
    i,
    a,
    s,
    o = n(284009),
    l = n.n(o),
    c = n(279194),
    u = n(562465),
    d = n(118356),
    f = n(506774),
    p = n(56562),
    _ = n(223273),
    h = n(723702),
    m = n(998218),
    g = n(652215),
    E = n(264572).Buffer;
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = window.DiscordNative,
    S = new Set(["jpg", "jpeg", "jfif", "png"]),
    I = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    T = (e) => e.startsWith("image/"),
    C = 5,
    N = null,
    R = null,
    w = null,
    P = {};
null != v &&
    ((N = v.remoteApp
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (w = null == (r = (i = v.remoteApp).getModuleVersions) ? void 0 : r.call(i)),
    (R = null == (a = (s = v.remoteApp).getBuildNumber) ? void 0 : a.call(s)));
let D = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    x = !1,
    L = "lastImageSaveDirectory",
    j = /[<>:"/\\|?*@]/g,
    M = /(\.[a-zA-Z0-9]+):[^.]*$/,
    k = /(\.[a-zA-Z0-9]+)%3A.+$/,
    U = /[^a-zA-Z0-9]/g,
    G = /\.[^.]*$/;
var V = (function (e) {
    return (e.SAVED = "saved"), (e.CANCELED = "canceled"), (e.ERRORED = "errored"), e;
})({});
function F(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(M, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(j, "_");
    } catch (t) {
        return e
            .replace(k, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(j, "_");
    }
}
async function B(e) {
    let t = {
            method: "GET",
            mode: "cors",
        },
        n = await fetch(new Request(e, t));
    l()(200 === n.status, "Data fetch unsuccessful");
    let r = await n.arrayBuffer();
    return l()(null != r, "Data is null"), r;
}
function H(e) {
    return B(e);
}
var Y = (function (e) {
        return (
            (e[(e.Camera = 0)] = "Camera"),
            (e[(e.Microphone = 1)] = "Microphone"),
            (e[(e.Photo = 2)] = "Photo"),
            (e[(e.InputMonitoring = 3)] = "InputMonitoring"),
            (e[(e.ScreenRecording = 4)] = "ScreenRecording"),
            e
        );
    })({}),
    W = (function (e) {
        return (e.VIDEO = "VIDEO"), (e.MUTE = "MUTE"), (e.DEAFEN = "DEAFEN"), (e.DISCONNECT = "DISCONNECT"), e;
    })({});
function K(e) {
    var t, n, r, i, a, s, o, l, c;
    return {
        id: P[null != (t = e.id) ? t : ""],
        nativeProcessObserverId: parseInt(null != (n = e.id) ? n : "", 10),
        name: null != (r = e.gameName) ? r : e.name,
        origGameName: e.origGameName,
        processName: null != (i = e.name) ? i : "",
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null != (a = e.sandboxed) && a,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null != (s = e.pidPath) ? s : [],
        gameMetadata: e.gameMetadata,
        windowHandle: null != (o = e.windowHandle) ? o : null,
        fullscreenType: null != (l = e.fullscreenType) ? l : p.aI.UNKNOWN,
        isLauncher: null != (c = e.isLauncher) && c,
    };
}
function z(e, t) {
    var n, r, i, a;
    if (null != t && T(t)) {
        let e = null == (a = t.split("/")[1]) ? void 0 : a.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let s = m.A.toURLSafe(e);
    if (null == s) return;
    let o = null == (i = s.pathname) || null == (r = i.split(".")) || null == (n = r.pop()) ? void 0 : n.toLowerCase();
    return null != o && o.length <= C ? o : void 0;
}
function q(e) {
    if ((0, h.isDesktop)())
        try {
            X.send(e);
        } catch (e) {}
}
let X = {
        requireModule: (e) => v.nativeModules.requireModule(e),
        ensureModule: (e) =>
            h.isPlatformEmbedded
                ? __OVERLAY__ && D.has(e)
                    ? Promise.resolve()
                    : v.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return v.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => v.crashReporter.getMetadata(),
        getSetting: async (e, t) => await v.settings.get(e, t),
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
                v.remotePowerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== f.w.get(c.qx) &&
                    this.supportsFeature(g.BYE.USER_DATA_CACHE) &&
                    v.userDataCache.cacheUserData(f.w.stringify());
        },
        inputEventRegister(e, t, n, r) {
            this.getDiscordUtils().inputEventRegister(
                parseInt("".concat(e)),
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
        setObservedGamesCallback(e, t, n) {
            try {
                P = {};
                let r = 0,
                    i = this.getDiscordUtils();
                (t && null != i.setObservedGamesCallback2 ? i.setObservedGamesCallback2 : i.setObservedGamesCallback)(
                    e.map((e) => {
                        let t = ++r;
                        return (
                            null != e.id && (P[t] = e.id),
                            A(y({}, e), {
                                cmdline: e.cmdLine,
                                id: t,
                            })
                        );
                    }),
                    (e) => n(e.map(K)),
                );
            } catch (e) {}
        },
        setGameDetectionCallback(e) {
            var t, n;
            null == (t = (n = this.getDiscordUtils()).setGameDetectionCallback) ||
                t.call(n, (t, n) => e(t.map(K), n.map(K)));
        },
        setGameDetectionErrorCallback(e) {
            var t, n;
            null == (t = (n = this.getDiscordUtils()).setGameDetectionErrorCallback) || t.call(n, e);
        },
        setRobloxSubgameDetectionConfig(e, t) {
            var n, r;
            null == (n = (r = this.getDiscordUtils()).setRobloxSubgameDetectionConfig) || n.call(r, e, t);
        },
        checkForRobloxSubgameUpdate() {
            var e, t;
            null == (e = (t = this.getDiscordUtils()).checkForRobloxSubgameUpdate) || e.call(t);
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback((t) => {
                e(t.map(K));
            });
        },
        clearCandidateGamesCallback() {
            this.getDiscordUtils().clearCandidateGamesCallback();
        },
        setGameCandidateOverrides(e) {
            this.getDiscordUtils().setGameCandidateOverrides(
                e.map((e) =>
                    A(y({}, e), {
                        gameId: e.id,
                        gameName: e.name,
                    }),
                ),
            );
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
                x ||
                    (0, d.si)((t, n, r) => {
                        e.consoleLog(n, "[".concat(t, "] ").concat(r));
                    }),
                (x = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!x)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule("discord_utils");
        },
        isSystemDarkMode() {
            var e, t, n;
            return (
                !!(0, h.isWindows)() &&
                (null == (e = null == (t = (n = this.getDiscordUtils()).isSystemDarkMode) ? void 0 : t.call(n)) || e)
            );
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
            if ("darwin" === (0, h.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "\u2022") : e > 0 && (t = "".concat(e)), v.remoteApp.dock.setBadge(t);
            } else
                "win32" === (0, h.getPlatformName)()
                    ? this.send("APP_BADGE_SET", e)
                    : "linux" === (0, h.getPlatformName)() && v.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            h.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e);
        },
        setThumbarButtons(e) {
            var t, n;
            h.isPlatformEmbedded &&
                (null == (n = v.thumbar) || null == (t = n.setThumbarButtons) || t.call(n, e, this.isSystemDarkMode()));
        },
        bounceDock(e) {
            if (h.isPlatformEmbedded) {
                let t = v.remoteApp;
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
            h.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e);
        },
        get architecture() {
            return h.isPlatformEmbedded ? v.process.arch : "";
        },
        get releaseChannel() {
            if (!h.isPlatformEmbedded) return "";
            let e = v.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return "";
        },
        get version() {
            return N;
        },
        get buildNumber() {
            return R;
        },
        get moduleVersions() {
            return w;
        },
        get parsedOSRelease() {
            if (!h.isPlatformEmbedded) return [];
            return v.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            h.isPlatformEmbedded && v.clipboard.copy(e);
        },
        async copyImage(e, t) {
            l()(h.isPlatformEmbedded, "Copy image method called outside native app"),
                l()("function" == typeof v.clipboard.copyImage, "Copy image not supported");
            let n = await H(e),
                r = z(e, t),
                i = null != r && S.has(r) ? "image.".concat(r) : e;
            v.clipboard.copyImage(E.from(n), i);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            v.clipboard.copyImage(E.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !h.isPlatformEmbedded) return !1;
            let n = z(e, t);
            return null == n || I.has(n);
        },
        async saveImage(e, t, n) {
            var r, i, a;
            let s, o;
            l()(h.isPlatformEmbedded, "Save image method called outside native app");
            let c = m.A.toURLSafe(e);
            if (null == c) return "errored";
            let u = null != (r = c.pathname.split("/").pop()) ? r : "unknown";
            u = F(u);
            let d = c.searchParams.get("format");
            if (null != d) {
                let e = d.replace(U, "").toLowerCase();
                if (e.length > 0) {
                    let t = u.replace(G, "");
                    u = "".concat(t, ".").concat(e);
                }
            } else if (!u.includes(".")) {
                let r = null != (i = null != (a = z(e, t)) ? a : n) ? i : "png";
                u = "".concat(u, ".").concat(r);
            }
            let p = await H(e),
                _ = E.from(p),
                g = f.w.get(L);
            if (("string" != typeof g && (g = void 0), "function" == typeof v.fileManager.saveWithDialog2)) {
                if (null == (s = await v.fileManager.saveWithDialog2(_, u, null != g ? g : void 0))) return "errored";
                if (s.canceledByUser) return "canceled";
                o = s.directory;
            } else
                try {
                    o = await v.fileManager.saveWithDialog(_, u, null != g ? g : void 0);
                } catch (e) {
                    return "errored";
                }
            return null == o || "" === o ? "errored" : (f.w.set(L, o), "saved");
        },
        async saveFile(e, t) {
            var n;
            l()(h.isPlatformEmbedded, "Save file method called outside native app");
            let r = m.A.toURLSafe(e);
            if (null == r) return null;
            let i = null != (n = null != t ? t : r.pathname.split("/").pop()) ? n : "unknown";
            null == t && (i = F(i));
            let a = await B(e),
                s = E.from(a),
                o = await v.fileManager.saveWithDialog(s, i, void 0);
            return null == o ? null : o;
        },
        async downloadVoiceFilterFile(e, t, n) {
            l()(h.isPlatformEmbedded, "Download voice filter file method called outside native app");
            let r = m.A.toURLSafe(e);
            return (
                l()(r, "Could not download voice filter, fileSrc was not a valid path"),
                await v.fileManager.maybeDownloadVoiceFilterFile(e, t, n)
            );
        },
        stopVoiceFilterDownloads() {
            v.fileManager.stopVoiceFilterDownloads();
        },
        canCheckVoiceFilterFilesExist: () => "function" == typeof v.fileManager.checkVoiceFilterFilesExist,
        checkVoiceFilterFilesExist: async (e) => await v.fileManager.checkVoiceFilterFilesExist(e),
        cleanupUnusedVoiceFilterFiles: async (e) => await v.fileManager.cleanupUnusedVoiceFilterFiles(e),
        async downloadMLModelFile(e, t, n) {
            l()(h.isPlatformEmbedded, "Download ML model file method called outside native app");
            let r = m.A.toURLSafe(e);
            return (
                l()(r, "Could not download ML model, fileSrc was not a valid path"),
                await v.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            v.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof v.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await v.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await v.fileManager.cleanupUnusedMLModelFiles(e),
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!h.isPlatformEmbedded || "function" != typeof v.clipboard.copyImage) return !1;
            if (null != e) {
                let t = z(e, void 0);
                if (null != t && !S.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            h.isPlatformEmbedded && v.clipboard.cut();
        },
        paste() {
            h.isPlatformEmbedded && v.clipboard.paste();
        },
        readClipboard: () => (h.isPlatformEmbedded ? v.clipboard.read() : ""),
        clipboardHasMixedContent() {
            var e, t, n;
            return (
                !!h.isPlatformEmbedded &&
                null != (e = null == (t = (n = v.clipboard).hasMixedContent) ? void 0 : t.call(n)) &&
                e
            );
        },
        on(e, t) {
            v.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return v.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            v.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!h.isPlatformEmbedded) return !0;
            try {
                return (null == v ? void 0 : v.ipc) != null && "function" == typeof v.ipc.send;
            } catch (e) {
                return !1;
            }
        },
        async waitForIPCReady() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5000,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
                n = Date.now();
            for (; Date.now() - n < e; ) {
                if (this.isIPCReady()) return !0;
                await new Promise((e) => t.requestAnimationFrame(e));
            }
            return !1;
        },
        flashFrame(e) {
            v.window.flashFrame(e);
        },
        webAuthnRegister: (e) =>
            v.nativeModules.ensureModule("discord_webauthn").then(() => v.webAuthn.webAuthnRegister(e)),
        webAuthnAuthenticate: (e) =>
            v.nativeModules.ensureModule("discord_webauthn").then(() => v.webAuthn.webAuthnAuthenticate(e)),
        minimize(e) {
            v.window.minimize(e);
        },
        restore(e) {
            v.window.restore(e);
        },
        maximize(e) {
            v.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, h.isWindows)() && this.minimize(null), v.window.focus(t, e);
        },
        blur() {
            h.isPlatformEmbedded && null != v.window.blur ? v.window.blur() : window.blur();
        },
        fullscreen(e) {
            v.window.fullscreen(e);
        },
        close(e) {
            v.window.close(e);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof v.window.setAlwaysOnTop && v.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof v.window.isAlwaysOnTop && (t = await v.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            var t;
            "function" == typeof (null == v || null == (t = v.window) ? void 0 : t.showInactive) &&
                v.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            var n, r;
            null == v || null == (r = v.window) || null == (n = r.setMinimumSize) || n.call(r, e, t);
        },
        setTrafficLightPosition(e) {
            if (h.isPlatformEmbedded && "darwin" === (0, h.getPlatformName)())
                try {
                    this.send("WINDOW_SET_TRAFFIC_LIGHT_POSITION", e);
                } catch (e) {}
        },
        purgeMemory() {
            h.isPlatformEmbedded && v.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            v.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            v.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            h.isPlatformEmbedded && v.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => v.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !h.isPlatformEmbedded || (!__OVERLAY__ && v.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            v.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            v.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            var n, r;
            null == (n = (r = v.gpuSettings).setSetting) || n.call(r, e, t);
        },
        getOptionalUpdates: async () => await v.settings.get("OPTIN_OPTIONAL_UPDATES", !1),
        async setOptionalUpdates(e) {
            await v.settings.set("OPTIN_OPTIONAL_UPDATES", e);
        },
        async getOpenOnStart() {
            var e, t, n;
            return null != (e = await (null == (t = (n = v.app).getOpenOnStart) ? void 0 : t.call(n)))
                ? e
                : await v.settings.get("OPEN_ON_STARTUP", !0);
        },
        getGPUDriverVersions() {
            return (0, h.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!h.isPlatformEmbedded && (v.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != v.window.setBackgroundThrottling
                ? v.window.setBackgroundThrottling(e)
                : v.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof v.window.setFocusable && v.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            var e, t;
            null == (e = (t = v.app).pauseFrameEvictor) || e.call(t);
        },
        unpauseFrameEvictor() {
            var e, t;
            null == (e = (t = v.app).unpauseFrameEvictor) || e.call(t);
        },
        getPreferredSystemLanguages() {
            var e, t;
            return null == (e = (t = v.app).getPreferredSystemLanguages) ? void 0 : e.call(t);
        },
        getPidFromDesktopSource(e) {
            if (!(0, h.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let t = null == e ? void 0 : e.split(":"),
                n = null == t ? void 0 : t[0];
            if ("window" === n) {
                var r;
                let e = null != (r = null == t ? void 0 : t[1]) ? r : "",
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
            return null == e ? void 0 : e();
        },
        getDiscordMemoryPrivateUsageElectronRenderer() {
            let { getDiscordMemoryPrivUsageElectronRenderer: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        getDiscordMemoryUsageElectronProcessTypeDetails() {
            let { getDiscordMemoryUsageElectronProcessTypeDetails: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        enablePerfMemoryHooks(e) {
            let { enablePerfMemoryHooks: t } = this.getDiscordUtils();
            return null == t ? void 0 : t(e);
        },
        disablePerfMemoryHooks() {
            let { disablePerfMemoryHooks: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        getPerfAttributedMemory() {
            let { getPerfAttributedMemory: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        getPerfAttributedMemoryCallstacks(e) {
            let { getPerfAttributedMemoryCallstacks: t } = this.getDiscordUtils();
            return null == t ? void 0 : t(e);
        },
        getPerfAttributedMemoryStats() {
            let { getPerfAttributedMemoryStats: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        showOpenDialog: (e) => v.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            h.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != v.processUtils.flushStorageData
                          ? v.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            h.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != v.processUtils.flushCookies
                          ? v.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            var n;
            h.isPlatformEmbedded &&
                (null == v || null == (n = v.processUtils) ? void 0 : n.setCrashInformation) != null &&
                v.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            h.isPlatformEmbedded && null != v.powerSaveBlocker ? v.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            h.isPlatformEmbedded && null != v.powerSaveBlocker && v.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            h.isPlatformEmbedded && null != v.powerSaveBlocker && v.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            h.isPlatformEmbedded && null != v.remoteApp.relaunch && v.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = "".concat((0, u.TP)()).concat(e);
            if (!h.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == v.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: i,
                    maxBps: a,
                    token: s,
                    chunkInterval: o,
                    contentType: l,
                } = y(
                    {
                        maxBps: 8000,
                        chunkInterval: 50,
                        contentType: "application/json",
                    },
                    n,
                ),
                c = t;
            "application/json" === l && (c = JSON.stringify(t));
            let d = (o / 1000) * a,
                f = Math.ceil(c.length / d),
                p = Array(f);
            for (let e = 0; e < f; e++) {
                let t = e * d;
                p[e] = c.substring(t, t + d);
            }
            return new Promise((e, t) => {
                null != v.http &&
                    v.http.makeChunkedRequest(
                        r,
                        p,
                        {
                            method: i,
                            chunkInterval: o,
                            contentType: l,
                            token: s,
                        },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, h.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = v.app.getReleaseChannel(),
                r = null == t ? void 0 : t.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, y({}, r, e));
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            v.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e);
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
            var r;
            let { getWindowFullscreenTypeByPid: i } = this.getDiscordUtils(),
                a = 0 !== e && null != i && null != t ? i(e, t) : null;
            return -1 === a && (a = null), null != (r = null != a ? a : n) ? r : p.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: p.YL.QUNS_UNKNOWN } : n(e, t);
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
            var n, r, i;
            let a = [...(null != N ? N : [0, 0, 0])];
            a.push(null != (n = null == (i = this.moduleVersions) ? void 0 : i[e]) ? n : 0);
            let s = null != (r = t[this.releaseChannel]) ? r : t.stable;
            for (let [e, t] of a.entries())
                if (t > s[e]) break;
                else if (t < s[e]) return !1;
            return !0;
        },
        fetchRiotGamesLiveClientData(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return h.isPlatformEmbedded
                ? null == v.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : v.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, h.isDesktop)() && this.send("APP_VIEWED");
        },
        appFirstRenderAfterReadyPayload() {
            (0, h.isDesktop)() && this.send("APP_FIRST_RENDER_AFTER_READY_PAYLOAD");
        },
        appLoaded() {
            q("APP_LOADED");
        },
        indexLoadedAsync() {
            q("DISCORD_APP_ASYNC_INDEX_TSX_LOADED");
        },
    },
    Z = X;

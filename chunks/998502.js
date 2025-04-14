n.d(t, {
    ZP: () => j,
    jK: () => x,
    tS: () => M
}),
    n(35282),
    n(388685),
    n(415506),
    n(49124),
    n(539854);
var r,
    i,
    o,
    a,
    s = n(512722),
    l = n.n(s),
    c = n(259443),
    u = n(719711),
    d = n(544891),
    f = n(433517),
    _ = n(593472),
    p = n(189451),
    h = n(358085),
    m = n(591759),
    g = n(981631),
    E = n(413135).Buffer;
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = window.DiscordNative,
    S = ['jpg', 'jpeg', 'png'],
    T = null,
    N = null,
    A = null,
    C = {};
null != I &&
    ((T = I.remoteApp
        .getVersion()
        .split('.')
        .map((e) => parseInt(e))),
    (A = null == (r = (i = I.remoteApp).getModuleVersions) ? void 0 : r.call(i)),
    (N = null == (o = (a = I.remoteApp).getBuildNumber) ? void 0 : o.call(a)));
let R = new Set(['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice']),
    P = !1,
    w = 'lastImageSaveDirectory';
async function D(e) {
    let t = {
            method: 'GET',
            mode: 'cors'
        },
        n = await fetch(new Request(e, t));
    l()(200 === n.status, 'Data fetch unsuccessful');
    let r = await n.arrayBuffer();
    return l()(null != r, 'Data is null'), r;
}
function L(e) {
    return D(e);
}
var x = (function (e) {
        return (e[(e.Camera = 0)] = 'Camera'), (e[(e.Microphone = 1)] = 'Microphone'), (e[(e.Photo = 2)] = 'Photo'), (e[(e.InputMonitoring = 3)] = 'InputMonitoring'), (e[(e.ScreenRecording = 4)] = 'ScreenRecording'), e;
    })({}),
    M = (function (e) {
        return (e.VIDEO = 'VIDEO'), (e.MUTE = 'MUTE'), (e.DEAFEN = 'DEAFEN'), (e.DISCONNECT = 'DISCONNECT'), e;
    })({});
function k(e) {
    var t, n, r, i, o, a, s, l, c;
    return {
        id: C[null != (t = e.id) ? t : ''],
        nativeProcessObserverId: parseInt(null != (n = e.id) ? n : '', 10),
        name: null != (r = e.gameName) ? r : e.name,
        processName: null != (i = e.name) ? i : '',
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null != (o = e.sandboxed) && o,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null != (a = e.pidPath) ? a : [],
        windowHandle: null != (s = e.windowHandle) ? s : null,
        fullscreenType: null != (l = e.fullscreenType) ? l : _.Jx.UNKNOWN,
        isLauncher: null != (c = e.isLauncher) && c
    };
}
let j = {
    requireModule: (e) => I.nativeModules.requireModule(e),
    ensureModule: (e) => (h.isPlatformEmbedded ? (__OVERLAY__ && R.has(e) ? Promise.resolve() : I.nativeModules.ensureModule(e)) : Promise.reject(Error('not embedded'))),
    get canBootstrapNewUpdater() {
        return I.nativeModules.canBootstrapNewUpdater || !1;
    },
    getCrashReporterMetadata: () => I.crashReporter.getMetadata(),
    getSetting: async (e, t) => await I.settings.get(e, t),
    beforeUnload() {
        var e, t;
        let n;
        try {
            n = this.requireModule('discord_overlay2');
        } catch (e) {}
        n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), I.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== f.K.get(u.SV) && this.supportsFeature(g.eRX.USER_DATA_CACHE) && I.userDataCache.cacheUserData(f.K.stringify()), null == I || null == (t = I.window) || t.close(null == I || null == (e = I.globalOverlay) ? void 0 : e.WINDOW_KEY);
    },
    inputEventRegister(e, t, n, r) {
        this.getDiscordUtils().inputEventRegister(
            parseInt(''.concat(e)),
            t.map((e) => {
                let [t, n, r] = e;
                return 'string' == typeof r ? [t, n, r] : [t, n];
            }),
            n,
            r
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
    setObservedGamesCallback(e, t) {
        try {
            C = {};
            let n = 0;
            this.getDiscordUtils().setObservedGamesCallback(
                e.map((e) => {
                    let t = ++n;
                    return (
                        null != e.id && (C[t] = e.id),
                        O(y({}, e), {
                            cmdline: e.cmdLine,
                            id: t
                        })
                    );
                }),
                (e) => t(e.map(k))
            );
        } catch (e) {}
    },
    setCandidateGamesCallback(e) {
        this.getDiscordUtils().setCandidateGamesCallback((t) => e(t.map(k)));
    },
    clearCandidateGamesCallback() {
        this.getDiscordUtils().clearCandidateGamesCallback();
    },
    setGameCandidateOverrides(e) {
        this.getDiscordUtils().setGameCandidateOverrides(
            e.map((e) =>
                O(y({}, e), {
                    gameId: e.id,
                    gameName: e.name
                })
            )
        );
    },
    setObserverDebugCallback(e, t, n) {
        this.getDiscordUtils().setObserverDebugCallback((t) => e(t), t, n);
    },
    clearObserverDebugCallback() {
        this.getDiscordUtils().setObserverDebugCallback(null, p.l.NONE, 0);
    },
    shouldDisplayNotifications() {
        return this.getDiscordUtils().shouldDisplayNotifications();
    },
    getVoiceEngine() {
        if (__OVERLAY__) throw Error('cannot require discord_voice in overlay');
        let e = this.requireModule('discord_voice');
        return (
            P ||
                (0, c.Bl)((t, n, r) => {
                    e.consoleLog(n, '['.concat(t, '] ').concat(r));
                }),
            (P = !0),
            e
        );
    },
    getDiscordUtils() {
        if (!P)
            try {
                this.getVoiceEngine();
            } catch (e) {}
        return this.requireModule('discord_utils');
    },
    isSystemDarkMode() {
        var e, t, n;
        return !!(0, h.isWindows)() && (null == (n = null == (e = (t = this.getDiscordUtils()).isSystemDarkMode) ? void 0 : e.call(t)) || n);
    },
    getVoiceFilters() {
        return this.requireModule('discord_voice_filters');
    },
    getGameUtils() {
        return this.requireModule('discord_game_utils');
    },
    getCloudSync() {
        return this.requireModule('discord_cloudsync');
    },
    getDispatch() {
        return this.requireModule('discord_dispatch');
    },
    setBadge(e) {
        if ('darwin' === (0, h.getPlatformName)()) {
            let t = '';
            -1 === e ? (t = '\u2022') : e > 0 && (t = ''.concat(e)), I.remoteApp.dock.setBadge(t);
        } else 'win32' === (0, h.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, h.getPlatformName)() && I.remoteApp.setBadgeCount(e >= 0 ? e : 0);
    },
    setSystemTrayIcon(e) {
        h.isPlatformEmbedded && this.send('SYSTEM_TRAY_SET_ICON', e);
    },
    setThumbarButtons(e) {
        var t, n;
        h.isPlatformEmbedded && (null == (n = I.thumbar) || null == (t = n.setThumbarButtons) || t.call(n, e, this.isSystemDarkMode()));
    },
    bounceDock(e) {
        if (h.isPlatformEmbedded) {
            let t = I.remoteApp;
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
        h.isPlatformEmbedded && this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
    },
    get architecture() {
        return h.isPlatformEmbedded ? I.process.arch : '';
    },
    get releaseChannel() {
        if (!h.isPlatformEmbedded) return '';
        let e = I.remoteApp.getReleaseChannel();
        if (null != e) return e;
        return '';
    },
    get version() {
        return T;
    },
    get buildNumber() {
        return N;
    },
    get moduleVersions() {
        return A;
    },
    get parsedOSRelease() {
        if (!h.isPlatformEmbedded) return [];
        return I.os.release.split('.').map((e) => parseInt(e, 10));
    },
    copy(e) {
        h.isPlatformEmbedded && I.clipboard.copy(e);
    },
    async copyImage(e) {
        l()(h.isPlatformEmbedded, 'Copy image method called outside native app'), l()('function' == typeof I.clipboard.copyImage, 'Copy image not supported');
        let t = await L(e);
        I.clipboard.copyImage(E.from(t), e);
    },
    async copyImageBlob(e, t) {
        let n = await e.arrayBuffer();
        I.clipboard.copyImage(E.from(n), t);
    },
    async saveImage(e) {
        var t;
        l()(h.isPlatformEmbedded, 'Save image method called outside native app');
        let n = m.Z.toURLSafe(e);
        if (null == n) return;
        let r = null != (t = n.pathname.split('/').pop()) ? t : 'unknown',
            i = f.K.get(w),
            o = await L(e),
            a = E.from(o),
            s = await I.fileManager.saveWithDialog(a, r, null != i ? i : void 0);
        null != s && f.K.set(w, s);
    },
    async saveFile(e, t) {
        var n;
        l()(h.isPlatformEmbedded, 'Save file method called outside native app');
        let r = m.Z.toURLSafe(e);
        if (null == r) return null;
        let i = null != (n = null != t ? t : r.pathname.split('/').pop()) ? n : 'unknown',
            o = await D(e),
            a = E.from(o);
        return I.fileManager.saveWithDialog(a, i);
    },
    async downloadVoiceFilterFile(e, t, n) {
        l()(h.isPlatformEmbedded, 'Download voice filter file method called outside native app');
        let r = m.Z.toURLSafe(e);
        return l()(r, 'Could not download voice filter, fileSrc was not a valid path'), await I.fileManager.maybeDownloadVoiceFilterFile(e, t, n);
    },
    stopVoiceFilterDownloads() {
        I.fileManager.stopVoiceFilterDownloads();
    },
    canCopyImage() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        if (null != e) {
            var t, n;
            let r = null == (t = m.Z.toURLSafe(e)) ? void 0 : t.pathname;
            if (null == r) return !1;
            let i = null == (n = r.split('.').pop()) ? void 0 : n.toLowerCase();
            if (null != i && !S.includes(i)) return !1;
        }
        return 'function' == typeof I.clipboard.copyImage;
    },
    cut() {
        h.isPlatformEmbedded && I.clipboard.cut();
    },
    paste() {
        h.isPlatformEmbedded && I.clipboard.paste();
    },
    readClipboard: () => (h.isPlatformEmbedded ? I.clipboard.read() : ''),
    on(e, t) {
        I.ipc.on(e, t);
    },
    invoke(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return I.ipc.invoke(e, ...n);
    },
    send(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        I.ipc.send(e, ...n);
    },
    flashFrame(e) {
        I.window.flashFrame(e);
    },
    webAuthnRegister: (e) => I.nativeModules.ensureModule('discord_webauthn').then(() => I.webAuthn.webAuthnRegister(e)),
    webAuthnAuthenticate: (e) => I.nativeModules.ensureModule('discord_webauthn').then(() => I.webAuthn.webAuthnAuthenticate(e)),
    minimize(e) {
        I.window.minimize(e);
    },
    restore(e) {
        I.window.restore(e);
    },
    maximize(e) {
        I.window.maximize(e);
    },
    focus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t && (0, h.isWindows)() && this.minimize(null), I.window.focus(t, e);
    },
    blur() {
        h.isPlatformEmbedded && null != I.window.blur ? I.window.blur() : window.blur();
    },
    fullscreen(e) {
        I.window.fullscreen(e);
    },
    close(e) {
        I.window.close(e);
    },
    setAlwaysOnTop(e, t) {
        'function' == typeof I.window.setAlwaysOnTop && I.window.setAlwaysOnTop(e, t);
    },
    async isAlwaysOnTop(e) {
        let t = !1;
        return 'function' == typeof I.window.isAlwaysOnTop && (t = await I.window.isAlwaysOnTop(e)), t;
    },
    showInactive(e) {
        'function' == typeof I.window.showInactive && I.window.showInactive(e);
    },
    setMinimumSize(e, t) {
        var n, r;
        null == I || null == (r = I.window) || null == (n = r.setMinimumSize) || n.call(r, e, t);
    },
    purgeMemory() {
        h.isPlatformEmbedded && I.processUtils.purgeMemory();
    },
    updateCrashReporter(e) {
        I.crashReporter.updateCrashReporter(e);
    },
    triggerJSException(e) {
        I.crashReporter.triggerJSException(e);
    },
    flushDNSCache() {
        h.isPlatformEmbedded && I.processUtils.flushDNSCache();
    },
    supportsFeature: (e) => I.features.supports(e),
    getEnableHardwareAcceleration: () => !h.isPlatformEmbedded || (!__OVERLAY__ && I.gpuSettings.getEnableHardwareAcceleration()),
    setEnableHardwareAcceleration(e) {
        I.gpuSettings.setEnableHardwareAcceleration(e);
    },
    setChromiumSwitches(e) {
        I.gpuSettings.setChromiumSwitches(e);
    },
    getGPUDriverVersions() {
        return (0, h.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
    },
    setZoomFactor: (e) => !!h.isPlatformEmbedded && (I.window.setZoomFactor(e), !0),
    setBackgroundThrottling(e) {
        null != I.window.setBackgroundThrottling ? I.window.setBackgroundThrottling(e) : I.window.webContents.setBackgroundThrottling(e);
    },
    setFocusable(e, t) {
        'function' == typeof I.window.setFocusable && I.window.setFocusable(e, t);
    },
    pauseFrameEvictor() {
        var e, t;
        null == (e = (t = I.app).pauseFrameEvictor) || e.call(t);
    },
    unpauseFrameEvictor() {
        var e, t;
        null == (e = (t = I.app).pauseFrameEvictor) || e.call(t);
    },
    getPidFromDesktopSource(e) {
        if (!(0, h.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
        let t = null == e ? void 0 : e.split(':'),
            n = null == t ? void 0 : t[0];
        if ('window' === n) {
            var r;
            let e = null != (r = null == t ? void 0 : t[1]) ? r : '',
                n = this.getDiscordUtils().getPidFromWindowHandle(e);
            return null == n || 0 === n ? null : n;
        }
        return n.startsWith('screen') ? 1 : 'prepicked' === n ? 1 : null;
    },
    getDesktopSourceFromPid(e) {
        if (!(0, h.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
        let t = this.getDiscordUtils().getWindowHandleFromPid(e);
        return null == t || 0 === t.length ? null : ['window', t, '0'].join(':');
    },
    generateSessionFromPid(e) {
        return this.getDiscordUtils().generateSessionFromPid(e);
    },
    getAudioPid(e) {
        return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
    },
    setForegroundProcess(e) {
        let { setForegroundProcess: t } = this.getDiscordUtils();
        return null != t && t(e);
    },
    getDiscordMemoryUsage() {
        let { getDiscordMemoryUsage: e } = this.getDiscordUtils();
        return null != e ? e() : null;
    },
    getDiscordMemoryUsageElectronRenderer() {
        let { getDiscordMemoryUsageElectronRenderer: e } = this.getDiscordUtils();
        return null == e ? void 0 : e();
    },
    getDiscordMemoryUsageElectronProcessTypeDetails() {
        let { getDiscordMemoryUsageElectronProcessTypeDetails: e } = this.getDiscordUtils();
        return null == e ? void 0 : e();
    },
    showOpenDialog: (e) => I.fileManager.showOpenDialog({ properties: e }),
    flushStorageData: () =>
        h.isPlatformEmbedded
            ? new Promise((e, t) => {
                  null != I.processUtils.flushStorageData ? I.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e())) : e();
              })
            : Promise.resolve(),
    flushCookies: () =>
        h.isPlatformEmbedded
            ? new Promise((e, t) => {
                  null != I.processUtils.flushCookies ? I.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e())) : e();
              })
            : Promise.resolve(),
    setCrashInformation(e, t) {
        var n;
        h.isPlatformEmbedded && (null == I || null == (n = I.processUtils) ? void 0 : n.setCrashInformation) != null && I.processUtils.setCrashInformation(e, t);
    },
    blockDisplaySleep: () => (h.isPlatformEmbedded && null != I.powerSaveBlocker ? I.powerSaveBlocker.blockDisplaySleep() : null),
    unblockDisplaySleep(e) {
        h.isPlatformEmbedded && null != I.powerSaveBlocker && I.powerSaveBlocker.unblockDisplaySleep(e);
    },
    cleanupDisplaySleep() {
        h.isPlatformEmbedded && null != I.powerSaveBlocker && I.powerSaveBlocker.cleanupDisplaySleep();
    },
    relaunch() {
        h.isPlatformEmbedded && null != I.remoteApp.relaunch && I.remoteApp.relaunch();
    },
    makeChunkedRequest(e, t, n) {
        let r = ''.concat((0, d.K0)()).concat(e);
        if (!h.isPlatformEmbedded) return Promise.reject(Error('Not embedded!'));
        if (null == I.http) return Promise.reject(Error('HTTP module not available'));
        let {
                method: i,
                maxBps: o,
                token: a,
                chunkInterval: s,
                contentType: l
            } = y(
                {
                    maxBps: 8000,
                    chunkInterval: 50,
                    contentType: 'application/json'
                },
                n
            ),
            c = t;
        'application/json' === l && (c = JSON.stringify(t));
        let u = (s / 1000) * o,
            f = Math.ceil(c.length / u),
            _ = Array(f);
        for (let e = 0; e < f; e++) {
            let t = e * u;
            _[e] = c.substring(t, t + u);
        }
        return new Promise((e, t) => {
            null != I.http &&
                I.http.makeChunkedRequest(
                    r,
                    _,
                    {
                        method: i,
                        chunkInterval: s,
                        contentType: l,
                        token: a
                    },
                    (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r))
                );
        });
    },
    submitLiveCrashReport(e) {
        if (!(0, h.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
        let t = this.getCrashReporterMetadata(),
            n = I.app.getReleaseChannel(),
            r = null == t ? void 0 : t.sentry;
        return this.getDiscordUtils().submitLiveCrashReport(n, y({}, r, e));
    },
    crash(e) {
        let t = this.getDiscordUtils().crash;
        return null != t && (t(e), !0);
    },
    setApplicationBackgroundColor(e) {
        I.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
    },
    initializeExitHook() {
        let { initializeExitHook: e } = this.getDiscordUtils();
        null != e && e();
    },
    initializeWERHandler() {
        let { initializeWERHandler: e } = this.getDiscordUtils();
        null != e && e();
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
            o = 0 !== e && null != i && null != t ? i(e, t) : null;
        return -1 === o && (o = null), null != (r = null != o ? o : n) ? r : _.Jx.UNKNOWN;
    },
    GetWindowFullscreenTypeExtraByPid(e, t) {
        let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
        return null == n || null == t ? { quns: _.Ng.QUNS_UNKNOWN } : n(e, t);
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
    isModuleVersionAtLeast(e, t) {
        var n, r, i;
        let o = [...(null != T ? T : [0, 0, 0])];
        o.push(null != (r = null == (n = this.moduleVersions) ? void 0 : n[e]) ? r : 0);
        let a = null != (i = t[this.releaseChannel]) ? i : t.stable;
        for (let [e, t] of o.entries())
            if (t > a[e]) break;
            else if (t < a[e]) return !1;
        return !0;
    },
    fetchRiotGamesLiveClientData: (e, t) => (h.isPlatformEmbedded ? (null == I.riotGames ? Promise.reject(Error('Riot Games module not available')) : I.riotGames.fetchLiveClientData(e, t)) : Promise.reject(Error('Not embedded!'))),
    appViewed() {
        (0, h.isDesktop)() && this.send('APP_VIEWED');
    },
    appLoaded() {
        if ((0, h.isDesktop)())
            try {
                this.send('APP_LOADED');
            } catch (e) {}
    }
};

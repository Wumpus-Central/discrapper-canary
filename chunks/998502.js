n.d(t, {
    ZP: () => j,
    jK: () => L,
    tS: () => M
}),
    n(301563),
    n(47120),
    n(411104),
    n(26686),
    n(653041);
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
    p = n(593472),
    _ = n(189451),
    h = n(358085),
    m = n(591759),
    g = n(981631),
    E = n(413135).Buffer;
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = window.DiscordNative,
    I = ['jpg', 'jpeg', 'png'],
    T = null,
    N = null,
    A = null,
    C = {};
null != S &&
    ((T = S.remoteApp
        .getVersion()
        .split('.')
        .map((e) => parseInt(e))),
    (A = null === (r = (i = S.remoteApp).getModuleVersions) || void 0 === r ? void 0 : r.call(i)),
    (N = null === (o = (a = S.remoteApp).getBuildNumber) || void 0 === o ? void 0 : o.call(a)));
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
function x(e) {
    return D(e);
}
var L = (function (e) {
        return (e[(e.Camera = 0)] = 'Camera'), (e[(e.Microphone = 1)] = 'Microphone'), (e[(e.Photo = 2)] = 'Photo'), (e[(e.InputMonitoring = 3)] = 'InputMonitoring'), (e[(e.ScreenRecording = 4)] = 'ScreenRecording'), e;
    })({}),
    M = (function (e) {
        return (e.VIDEO = 'VIDEO'), (e.MUTE = 'MUTE'), (e.DEAFEN = 'DEAFEN'), (e.DISCONNECT = 'DISCONNECT'), e;
    })({});
function k(e) {
    var t, n, r, i, o, a, s, l;
    return {
        id: C[null !== (t = e.id) && void 0 !== t ? t : ''],
        nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : '', 10),
        name: null !== (r = e.gameName) && void 0 !== r ? r : e.name,
        processName: null !== (i = e.name) && void 0 !== i ? i : '',
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null !== (o = e.sandboxed) && void 0 !== o && o,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null !== (a = e.pidPath) && void 0 !== a ? a : [],
        windowHandle: null !== (s = e.windowHandle) && void 0 !== s ? s : null,
        fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : p.Jx.UNKNOWN
    };
}
let j = {
    requireModule: (e) => S.nativeModules.requireModule(e),
    ensureModule: (e) => (h.isPlatformEmbedded ? (__OVERLAY__ && R.has(e) ? Promise.resolve() : S.nativeModules.ensureModule(e)) : Promise.reject(Error('not embedded'))),
    get canBootstrapNewUpdater() {
        return S.nativeModules.canBootstrapNewUpdater || !1;
    },
    getCrashReporterMetadata: () => S.crashReporter.getMetadata(),
    getSetting: async (e, t) => await S.settings.get(e, t),
    beforeUnload() {
        var e, t;
        let n;
        try {
            n = this.requireModule('discord_overlay2');
        } catch (e) {}
        n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), S.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== f.K.get(u.SV) && this.supportsFeature(g.eRX.USER_DATA_CACHE) && S.userDataCache.cacheUserData(f.K.stringify()), null == S || null === (t = S.window) || void 0 === t || t.close(null == S ? void 0 : null === (e = S.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
    },
    inputEventRegister(e, t, n, r) {
        Array.isArray(t) || (t = t.toJS()),
            this.getDiscordUtils().inputEventRegister(
                parseInt(e),
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
                        O(b({}, e), {
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
                O(b({}, e), {
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
        this.getDiscordUtils().setObserverDebugCallback(null, _.l.NONE, 0);
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
        return !!(0, h.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n);
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
            -1 === e ? (t = '\u2022') : e > 0 && (t = ''.concat(e)), S.remoteApp.dock.setBadge(t);
        } else 'win32' === (0, h.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, h.getPlatformName)() && S.remoteApp.setBadgeCount(e >= 0 ? e : 0);
    },
    setSystemTrayIcon(e) {
        h.isPlatformEmbedded && this.send('SYSTEM_TRAY_SET_ICON', e);
    },
    setThumbarButtons(e) {
        var t, n;
        h.isPlatformEmbedded && (null === (n = S.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode()));
    },
    bounceDock(e) {
        if (h.isPlatformEmbedded) {
            let t = S.remoteApp;
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
        return h.isPlatformEmbedded ? S.process.arch : '';
    },
    get releaseChannel() {
        if (!h.isPlatformEmbedded) return '';
        let e = S.remoteApp.getReleaseChannel();
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
        return S.os.release.split('.').map((e) => parseInt(e, 10));
    },
    copy(e) {
        h.isPlatformEmbedded && S.clipboard.copy(e);
    },
    async copyImage(e) {
        l()(h.isPlatformEmbedded, 'Copy image method called outside native app'), l()('function' == typeof S.clipboard.copyImage, 'Copy image not supported');
        let t = await x(e);
        S.clipboard.copyImage(E.from(t), e);
    },
    async copyImageBlob(e, t) {
        let n = await e.arrayBuffer();
        S.clipboard.copyImage(E.from(n), t);
    },
    async saveImage(e) {
        var t;
        l()(h.isPlatformEmbedded, 'Save image method called outside native app');
        let n = m.Z.toURLSafe(e);
        if (null == n) return;
        let r = null !== (t = n.pathname.split('/').pop()) && void 0 !== t ? t : 'unknown',
            i = f.K.get(w),
            o = await x(e),
            a = E.from(o),
            s = await S.fileManager.saveWithDialog(a, r, null != i ? i : void 0);
        null != s && f.K.set(w, s);
    },
    async saveFile(e, t) {
        var n;
        l()(h.isPlatformEmbedded, 'Save file method called outside native app');
        let r = m.Z.toURLSafe(e);
        if (null == r) return null;
        let i = null !== (n = null != t ? t : r.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown',
            o = await D(e),
            a = E.from(o);
        return S.fileManager.saveWithDialog(a, i);
    },
    async downloadVoiceFilterFile(e, t, n) {
        l()(h.isPlatformEmbedded, 'Download voice filter file method called outside native app'), null != m.Z.toURLSafe(e) && (await S.fileManager.maybeDownloadVoiceFilterFile(e, t, n));
    },
    stopVoiceFilterDownloads() {
        S.fileManager.stopVoiceFilterDownloads();
    },
    canCopyImage() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        if (null != e) {
            var t, n;
            let r = null === (t = m.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
            if (null == r) return !1;
            let i = null === (n = r.split('.').pop()) || void 0 === n ? void 0 : n.toLowerCase();
            if (null != i && !I.includes(i)) return !1;
        }
        return 'function' == typeof S.clipboard.copyImage;
    },
    cut() {
        h.isPlatformEmbedded && S.clipboard.cut();
    },
    paste() {
        h.isPlatformEmbedded && S.clipboard.paste();
    },
    readClipboard: () => (h.isPlatformEmbedded ? S.clipboard.read() : ''),
    on(e, t) {
        S.ipc.on(e, t);
    },
    invoke(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return S.ipc.invoke(e, ...n);
    },
    send(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        S.ipc.send(e, ...n);
    },
    flashFrame(e) {
        S.window.flashFrame(e);
    },
    webAuthnRegister: (e) => S.nativeModules.ensureModule('discord_webauthn').then(() => S.webAuthn.webAuthnRegister(e)),
    webAuthnAuthenticate: (e) => S.nativeModules.ensureModule('discord_webauthn').then(() => S.webAuthn.webAuthnAuthenticate(e)),
    minimize(e) {
        S.window.minimize(e);
    },
    restore(e) {
        S.window.restore(e);
    },
    maximize(e) {
        S.window.maximize(e);
    },
    focus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t && (0, h.isWindows)() && this.minimize(null), S.window.focus(t, e);
    },
    blur() {
        h.isPlatformEmbedded && null != S.window.blur ? S.window.blur() : window.blur();
    },
    fullscreen(e) {
        S.window.fullscreen(e);
    },
    close(e) {
        S.window.close(e);
    },
    setAlwaysOnTop(e, t) {
        'function' == typeof S.window.setAlwaysOnTop && S.window.setAlwaysOnTop(e, t);
    },
    async isAlwaysOnTop(e) {
        let t = !1;
        return 'function' == typeof S.window.isAlwaysOnTop && (t = await S.window.isAlwaysOnTop(e)), t;
    },
    showInactive(e) {
        'function' == typeof S.window.showInactive && S.window.showInactive(e);
    },
    setMinimumSize(e, t) {
        var n, r;
        null == S || null === (r = S.window) || void 0 === r || null === (n = r.setMinimumSize) || void 0 === n || n.call(r, e, t);
    },
    purgeMemory() {
        h.isPlatformEmbedded && S.processUtils.purgeMemory();
    },
    updateCrashReporter(e) {
        S.crashReporter.updateCrashReporter(e);
    },
    triggerJSException(e) {
        S.crashReporter.triggerJSException(e);
    },
    flushDNSCache() {
        h.isPlatformEmbedded && S.processUtils.flushDNSCache();
    },
    supportsFeature: (e) => S.features.supports(e),
    getEnableHardwareAcceleration: () => !h.isPlatformEmbedded || (!__OVERLAY__ && S.gpuSettings.getEnableHardwareAcceleration()),
    setEnableHardwareAcceleration(e) {
        S.gpuSettings.setEnableHardwareAcceleration(e);
    },
    setChromiumSwitches(e) {
        S.gpuSettings.setChromiumSwitches(e);
    },
    getGPUDriverVersions() {
        return (0, h.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
    },
    setZoomFactor: (e) => !!h.isPlatformEmbedded && (S.window.setZoomFactor(e), !0),
    setBackgroundThrottling(e) {
        null != S.window.setBackgroundThrottling ? S.window.setBackgroundThrottling(e) : S.window.webContents.setBackgroundThrottling(e);
    },
    setFocusable(e, t) {
        'function' == typeof S.window.setFocusable && S.window.setFocusable(e, t);
    },
    pauseFrameEvictor() {
        var e, t;
        null === (e = (t = S.app).pauseFrameEvictor) || void 0 === e || e.call(t);
    },
    unpauseFrameEvictor() {
        var e, t;
        null === (e = (t = S.app).pauseFrameEvictor) || void 0 === e || e.call(t);
    },
    getPidFromDesktopSource(e) {
        if (!(0, h.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
        let t = null == e ? void 0 : e.split(':'),
            n = null == t ? void 0 : t[0];
        if ('window' === n) {
            var r;
            let e = null !== (r = null == t ? void 0 : t[1]) && void 0 !== r ? r : '',
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
    showOpenDialog: (e) => S.fileManager.showOpenDialog({ properties: e }),
    flushStorageData: () =>
        h.isPlatformEmbedded
            ? new Promise((e, t) => {
                  null != S.processUtils.flushStorageData ? S.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e())) : e();
              })
            : Promise.resolve(),
    flushCookies: () =>
        h.isPlatformEmbedded
            ? new Promise((e, t) => {
                  null != S.processUtils.flushCookies ? S.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e())) : e();
              })
            : Promise.resolve(),
    setCrashInformation(e, t) {
        var n;
        h.isPlatformEmbedded && (null == S ? void 0 : null === (n = S.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null && S.processUtils.setCrashInformation(e, t);
    },
    blockDisplaySleep: () => (h.isPlatformEmbedded && null != S.powerSaveBlocker ? S.powerSaveBlocker.blockDisplaySleep() : null),
    unblockDisplaySleep(e) {
        h.isPlatformEmbedded && null != S.powerSaveBlocker && S.powerSaveBlocker.unblockDisplaySleep(e);
    },
    cleanupDisplaySleep() {
        h.isPlatformEmbedded && null != S.powerSaveBlocker && S.powerSaveBlocker.cleanupDisplaySleep();
    },
    relaunch() {
        h.isPlatformEmbedded && null != S.remoteApp.relaunch && S.remoteApp.relaunch();
    },
    makeChunkedRequest(e, t, n) {
        let r = ''.concat((0, d.K0)()).concat(e);
        if (!h.isPlatformEmbedded) return Promise.reject(Error('Not embedded!'));
        if (null == S.http) return Promise.reject(Error('HTTP module not available'));
        let {
                method: i,
                maxBps: o,
                token: a,
                chunkInterval: s,
                contentType: l
            } = b(
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
            p = Array(f);
        for (let e = 0; e < f; e++) {
            let t = e * u;
            p[e] = c.substring(t, t + u);
        }
        return new Promise((e, t) => {
            null != S.http &&
                S.http.makeChunkedRequest(
                    r,
                    p,
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
            n = S.app.getReleaseChannel(),
            r = null == t ? void 0 : t.sentry;
        return this.getDiscordUtils().submitLiveCrashReport(n, b({}, r, e));
    },
    crash(e) {
        let t = this.getDiscordUtils().crash;
        return null != t && (t(e), !0);
    },
    setApplicationBackgroundColor(e) {
        S.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
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
        return -1 === o && (o = null), null !== (r = null != o ? o : n) && void 0 !== r ? r : p.Jx.UNKNOWN;
    },
    GetWindowFullscreenTypeExtraByPid(e, t) {
        let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
        return null == n || null == t ? { quns: p.Ng.QUNS_UNKNOWN } : n(e, t);
    },
    SetGPUBoostEnabledByPid(e, t) {
        let { setGPUBoostEnabledByPid: n } = this.getDiscordUtils();
        return null != n && n(e, t);
    },
    IsHardwareAcceleratedGPUSchedulingEnabled() {
        let { isHardwareAcceleratedGPUSchedulingEnabled: e } = this.getDiscordUtils();
        return null != e && e();
    },
    isModuleVersionAtLeast(e, t) {
        var n, r, i;
        let o = [...(null != T ? T : [0, 0, 0])];
        o.push(null !== (r = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : 0);
        let a = null !== (i = t[this.releaseChannel]) && void 0 !== i ? i : t.stable;
        for (let [e, t] of o.entries()) {
            if (t > a[e]) break;
            if (t < a[e]) return !1;
        }
        return !0;
    },
    fetchRiotGamesLiveClientData: (e, t) => (h.isPlatformEmbedded ? (null == S.riotGames ? Promise.reject(Error('Riot Games module not available')) : S.riotGames.fetchLiveClientData(e, t)) : Promise.reject(Error('Not embedded!'))),
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

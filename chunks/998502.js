n.d(t, {
    ZP: () => L,
    jK: () => O,
    tS: () => D
}),
    n(47120),
    n(411104),
    n(653041);
var i,
    r,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(259443),
    c = n(719711),
    d = n(544891),
    f = n(433517),
    _ = n(593472),
    p = n(189451),
    h = n(358085),
    m = n(591759),
    g = n(981631),
    E = n(413135).Buffer;
let v = window.DiscordNative,
    y = ['jpg', 'jpeg', 'png'],
    I = null,
    T = null,
    b = null,
    S = {};
null != v &&
    ((I = v.remoteApp
        .getVersion()
        .split('.')
        .map((e) => parseInt(e))),
    (b = null === (i = (r = v.remoteApp).getModuleVersions) || void 0 === i ? void 0 : i.call(r)),
    (T = null === (a = (s = v.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(s)));
let A = new Set(['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice']),
    N = !1;
async function C(e) {
    let t = {
            method: 'GET',
            mode: 'cors'
        },
        n = await fetch(new Request(e, t));
    l()(200 === n.status, 'Data fetch unsuccessful');
    let i = await n.arrayBuffer();
    return l()(null != i, 'Data is null'), i;
}
function R(e) {
    return C(e);
}
var O = (function (e) {
        return (e[(e.Camera = 0)] = 'Camera'), (e[(e.Microphone = 1)] = 'Microphone'), (e[(e.Photo = 2)] = 'Photo'), (e[(e.InputMonitoring = 3)] = 'InputMonitoring'), (e[(e.ScreenRecording = 4)] = 'ScreenRecording'), e;
    })({}),
    D = (function (e) {
        return (e.VIDEO = 'VIDEO'), (e.MUTE = 'MUTE'), (e.DEAFEN = 'DEAFEN'), (e.DISCONNECT = 'DISCONNECT'), e;
    })({});
function x(e) {
    var t, n, i, r, a, s, o, l;
    return {
        id: S[null !== (t = e.id) && void 0 !== t ? t : ''],
        nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : '', 10),
        name: null !== (i = e.gameName) && void 0 !== i ? i : e.name,
        processName: null !== (r = e.name) && void 0 !== r ? r : '',
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null !== (a = e.sandboxed) && void 0 !== a && a,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null !== (s = e.pidPath) && void 0 !== s ? s : [],
        windowHandle: null !== (o = e.windowHandle) && void 0 !== o ? o : null,
        fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : _.Jx.UNKNOWN
    };
}
let L = {
    requireModule: (e) => v.nativeModules.requireModule(e),
    ensureModule: (e) => (h.isPlatformEmbedded ? (__OVERLAY__ && A.has(e) ? Promise.resolve() : v.nativeModules.ensureModule(e)) : Promise.reject(Error('not embedded'))),
    get canBootstrapNewUpdater() {
        return v.nativeModules.canBootstrapNewUpdater || !1;
    },
    getCrashReporterMetadata: () => v.crashReporter.getMetadata(),
    getSetting: async (e, t) => await v.settings.get(e, t),
    beforeUnload() {
        var e, t;
        let n;
        try {
            n = this.requireModule('discord_overlay2');
        } catch (e) {}
        n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), v.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== f.K.get(c.SV) && this.supportsFeature(g.eRX.USER_DATA_CACHE) && v.userDataCache.cacheUserData(f.K.stringify()), null == v || null === (t = v.window) || void 0 === t || t.close(null == v ? void 0 : null === (e = v.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
    },
    inputEventRegister(e, t, n, i) {
        Array.isArray(t) || (t = t.toJS()),
            this.getDiscordUtils().inputEventRegister(
                parseInt(e),
                t.map((e) => {
                    let [t, n, i] = e;
                    return 'string' == typeof i ? [t, n, i] : [t, n];
                }),
                n,
                i
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
            S = {};
            let n = 0;
            this.getDiscordUtils().setObservedGamesCallback(
                e.map((e) => {
                    let t = ++n;
                    return (
                        null != e.id && (S[t] = e.id),
                        {
                            ...e,
                            cmdline: e.cmdLine,
                            id: t
                        }
                    );
                }),
                (e) => t(e.map(x))
            );
        } catch (e) {}
    },
    setCandidateGamesCallback(e) {
        this.getDiscordUtils().setCandidateGamesCallback((t) => e(t.map(x)));
    },
    clearCandidateGamesCallback() {
        this.getDiscordUtils().clearCandidateGamesCallback();
    },
    setGameCandidateOverrides(e) {
        this.getDiscordUtils().setGameCandidateOverrides(
            e.map((e) => ({
                ...e,
                gameId: e.id,
                gameName: e.name
            }))
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
            N ||
                (0, u.Bl)((t, n, i) => {
                    e.consoleLog(n, '['.concat(t, '] ').concat(i));
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
            -1 === e ? (t = '\u2022') : e > 0 && (t = ''.concat(e)), v.remoteApp.dock.setBadge(t);
        } else 'win32' === (0, h.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, h.getPlatformName)() && v.remoteApp.setBadgeCount(e >= 0 ? e : 0);
    },
    setSystemTrayIcon(e) {
        h.isPlatformEmbedded && this.send('SYSTEM_TRAY_SET_ICON', e);
    },
    setThumbarButtons(e) {
        var t, n;
        h.isPlatformEmbedded && (null === (n = v.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode()));
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
        h.isPlatformEmbedded && this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
    },
    get architecture() {
        return h.isPlatformEmbedded ? v.process.arch : '';
    },
    get releaseChannel() {
        if (!h.isPlatformEmbedded) return '';
        let e = v.remoteApp.getReleaseChannel();
        if (null != e) return e;
        return '';
    },
    get version() {
        return I;
    },
    get buildNumber() {
        return T;
    },
    get moduleVersions() {
        return b;
    },
    get parsedOSRelease() {
        if (!h.isPlatformEmbedded) return [];
        return v.os.release.split('.').map((e) => parseInt(e, 10));
    },
    copy(e) {
        h.isPlatformEmbedded && v.clipboard.copy(e);
    },
    async copyImage(e) {
        l()(h.isPlatformEmbedded, 'Copy image method called outside native app'), l()('function' == typeof v.clipboard.copyImage, 'Copy image not supported');
        let t = await R(e);
        v.clipboard.copyImage(E.from(t), e);
    },
    async copyImageBlob(e, t) {
        let n = await e.arrayBuffer();
        v.clipboard.copyImage(E.from(n), t);
    },
    async saveImage(e) {
        var t;
        l()(h.isPlatformEmbedded, 'Save image method called outside native app');
        let n = m.Z.toURLSafe(e);
        if (null == n) return;
        let i = null !== (t = n.pathname.split('/').pop()) && void 0 !== t ? t : 'unknown',
            r = await R(e),
            a = E.from(r);
        return v.fileManager.saveWithDialog(a, i);
    },
    async saveFile(e, t) {
        var n;
        l()(h.isPlatformEmbedded, 'Save file method called outside native app');
        let i = m.Z.toURLSafe(e);
        if (null == i) return;
        let r = null !== (n = null != t ? t : i.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown',
            a = await C(e),
            s = E.from(a);
        return v.fileManager.saveWithDialog(s, r);
    },
    async downloadVoiceFilterFile(e, t, n) {
        l()(h.isPlatformEmbedded, 'Download voice filter file method called outside native app'), null != m.Z.toURLSafe(e) && (await v.fileManager.maybeDownloadVoiceFilterFile(e, t, n));
    },
    canCopyImage() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        if (null != e) {
            var t, n;
            let i = null === (t = m.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
            if (null == i) return !1;
            let r = null === (n = i.split('.').pop()) || void 0 === n ? void 0 : n.toLowerCase();
            if (null != r && !y.includes(r)) return !1;
        }
        return 'function' == typeof v.clipboard.copyImage;
    },
    cut() {
        h.isPlatformEmbedded && v.clipboard.cut();
    },
    paste() {
        h.isPlatformEmbedded && v.clipboard.paste();
    },
    readClipboard: () => (h.isPlatformEmbedded ? v.clipboard.read() : ''),
    on(e, t) {
        v.ipc.on(e, t);
    },
    invoke(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return v.ipc.invoke(e, ...n);
    },
    send(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        v.ipc.send(e, ...n);
    },
    flashFrame(e) {
        v.window.flashFrame(e);
    },
    webAuthnRegister: (e) => v.nativeModules.ensureModule('discord_webauthn').then(() => v.webAuthn.webAuthnRegister(e)),
    webAuthnAuthenticate: (e) => v.nativeModules.ensureModule('discord_webauthn').then(() => v.webAuthn.webAuthnAuthenticate(e)),
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
        'function' == typeof v.window.setAlwaysOnTop && v.window.setAlwaysOnTop(e, t);
    },
    async isAlwaysOnTop(e) {
        let t = !1;
        return 'function' == typeof v.window.isAlwaysOnTop && (t = await v.window.isAlwaysOnTop(e)), t;
    },
    setMinimumSize(e, t) {
        var n, i;
        null == v || null === (i = v.window) || void 0 === i || null === (n = i.setMinimumSize) || void 0 === n || n.call(i, e, t);
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
    getEnableHardwareAcceleration: () => !h.isPlatformEmbedded || (!__OVERLAY__ && v.gpuSettings.getEnableHardwareAcceleration()),
    setEnableHardwareAcceleration(e) {
        v.gpuSettings.setEnableHardwareAcceleration(e);
    },
    setChromiumSwitches(e) {
        v.gpuSettings.setChromiumSwitches(e);
    },
    getGPUDriverVersions() {
        return (0, h.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
    },
    setZoomFactor: (e) => !!h.isPlatformEmbedded && (v.window.setZoomFactor(e), !0),
    setBackgroundThrottling(e) {
        null != v.window.setBackgroundThrottling ? v.window.setBackgroundThrottling(e) : v.window.webContents.setBackgroundThrottling(e);
    },
    setFocusable(e, t) {
        'function' == typeof v.window.setFocusable && v.window.setFocusable(e, t);
    },
    pauseFrameEvictor() {
        var e, t;
        null === (e = (t = v.app).pauseFrameEvictor) || void 0 === e || e.call(t);
    },
    unpauseFrameEvictor() {
        var e, t;
        null === (e = (t = v.app).pauseFrameEvictor) || void 0 === e || e.call(t);
    },
    getPidFromDesktopSource(e) {
        if (!(0, h.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
        let t = null == e ? void 0 : e.split(':'),
            n = null == t ? void 0 : t[0];
        if ('window' === n) {
            var i;
            let e = null !== (i = null == t ? void 0 : t[1]) && void 0 !== i ? i : '',
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
    showOpenDialog: (e) => v.fileManager.showOpenDialog({ properties: e }),
    flushStorageData: () =>
        h.isPlatformEmbedded
            ? new Promise((e, t) => {
                  null != v.processUtils.flushStorageData ? v.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e())) : e();
              })
            : Promise.resolve(),
    flushCookies: () =>
        h.isPlatformEmbedded
            ? new Promise((e, t) => {
                  null != v.processUtils.flushCookies ? v.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e())) : e();
              })
            : Promise.resolve(),
    setCrashInformation(e, t) {
        var n;
        h.isPlatformEmbedded && (null == v ? void 0 : null === (n = v.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null && v.processUtils.setCrashInformation(e, t);
    },
    blockDisplaySleep: () => (h.isPlatformEmbedded && null != v.powerSaveBlocker ? v.powerSaveBlocker.blockDisplaySleep() : null),
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
        let i = ''.concat((0, d.K0)()).concat(e);
        if (!h.isPlatformEmbedded) return Promise.reject(Error('Not embedded!'));
        if (null == v.http) return Promise.reject(Error('HTTP module not available'));
        let {
                method: r,
                maxBps: a,
                token: s,
                chunkInterval: o,
                contentType: l
            } = {
                maxBps: 8000,
                chunkInterval: 50,
                contentType: 'application/json',
                ...n
            },
            u = t;
        'application/json' === l && (u = JSON.stringify(t));
        let c = (o / 1000) * a,
            f = Math.ceil(u.length / c),
            _ = Array(f);
        for (let e = 0; e < f; e++) {
            let t = e * c;
            _[e] = u.substring(t, t + c);
        }
        return new Promise((e, t) => {
            null != v.http &&
                v.http.makeChunkedRequest(
                    i,
                    _,
                    {
                        method: r,
                        chunkInterval: o,
                        contentType: l,
                        token: s
                    },
                    (n, i) => (null != n ? t(n) : i.status >= 400 ? t(Error(i.body)) : void e(i))
                );
        });
    },
    submitLiveCrashReport(e) {
        if (!(0, h.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
        let t = this.getCrashReporterMetadata(),
            n = v.app.getReleaseChannel(),
            i = null == t ? void 0 : t.sentry;
        return this.getDiscordUtils().submitLiveCrashReport(n, {
            ...i,
            ...e
        });
    },
    crash(e) {
        let t = this.getDiscordUtils().crash;
        return null != t && (t(e), !0);
    },
    setApplicationBackgroundColor(e) {
        v.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
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
        var i;
        let { getWindowFullscreenTypeByPid: r } = this.getDiscordUtils(),
            a = 0 !== e && null != r && null != t ? r(e, t) : null;
        return -1 === a && (a = null), null !== (i = null != a ? a : n) && void 0 !== i ? i : _.Jx.UNKNOWN;
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
    isModuleVersionAtLeast(e, t) {
        var n, i, r;
        let a = [...(null != I ? I : [0, 0, 0])];
        a.push(null !== (i = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== i ? i : 0);
        let s = null !== (r = t[this.releaseChannel]) && void 0 !== r ? r : t.stable;
        for (let [e, t] of a.entries()) {
            if (t > s[e]) break;
            if (t < s[e]) return !1;
        }
        return !0;
    },
    fetchRiotGamesLiveClientData: (e, t) => (h.isPlatformEmbedded ? (null == v.riotGames ? Promise.reject(Error('Riot Games module not available')) : v.riotGames.fetchLiveClientData(e, t)) : Promise.reject(Error('Not embedded!'))),
    appViewed() {
        (0, h.isDesktop)() && this.send('APP_VIEWED');
    }
};

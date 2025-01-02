r.d(n, {
    jK: function () {
        return l;
    },
    tS: function () {
        return u;
    }
});
var i,
    a,
    s,
    o,
    l,
    u,
    c = r(47120);
var d = r(411104);
var f = r(653041);
var _ = r(512722),
    h = r.n(_),
    p = r(259443),
    m = r(719711),
    g = r(544891),
    E = r(433517),
    v = r(593472),
    I = r(189451),
    T = r(358085),
    b = r(591759),
    y = r(981631),
    S = r(413135).Buffer;
let A = window.DiscordNative,
    N = ['jpg', 'jpeg', 'png'],
    C = null,
    R = null,
    O = null,
    D = {};
null != A &&
    ((C = A.remoteApp
        .getVersion()
        .split('.')
        .map((e) => parseInt(e))),
    (O = null === (i = (a = A.remoteApp).getModuleVersions) || void 0 === i ? void 0 : i.call(a)),
    (R = null === (s = (o = A.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(o)));
let L = new Set(['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice']),
    x = !1;
async function w(e) {
    let n = {
            method: 'GET',
            mode: 'cors'
        },
        r = await fetch(new Request(e, n));
    h()(200 === r.status, 'Data fetch unsuccessful');
    let i = await r.arrayBuffer();
    return h()(null != i, 'Data is null'), i;
}
function P(e) {
    return w(e);
}
function M(e) {
    var n, r, i, a, s, o, l, u;
    return {
        id: D[null !== (n = e.id) && void 0 !== n ? n : ''],
        nativeProcessObserverId: parseInt(null !== (r = e.id) && void 0 !== r ? r : '', 10),
        name: null !== (i = e.gameName) && void 0 !== i ? i : e.name,
        processName: null !== (a = e.name) && void 0 !== a ? a : '',
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null !== (s = e.sandboxed) && void 0 !== s && s,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null !== (o = e.pidPath) && void 0 !== o ? o : [],
        windowHandle: null !== (l = e.windowHandle) && void 0 !== l ? l : null,
        fullscreenType: null !== (u = e.fullscreenType) && void 0 !== u ? u : v.Jx.UNKNOWN
    };
}
!(function (e) {
    (e[(e.Camera = 0)] = 'Camera'), (e[(e.Microphone = 1)] = 'Microphone'), (e[(e.Photo = 2)] = 'Photo'), (e[(e.InputMonitoring = 3)] = 'InputMonitoring'), (e[(e.ScreenRecording = 4)] = 'ScreenRecording');
})(l || (l = {})),
    !(function (e) {
        (e.VIDEO = 'VIDEO'), (e.MUTE = 'MUTE'), (e.DEAFEN = 'DEAFEN'), (e.DISCONNECT = 'DISCONNECT');
    })(u || (u = {})),
    (n.ZP = {
        requireModule: (e) => A.nativeModules.requireModule(e),
        ensureModule: (e) => (T.isPlatformEmbedded ? (__OVERLAY__ && L.has(e) ? Promise.resolve() : A.nativeModules.ensureModule(e)) : Promise.reject(Error('not embedded'))),
        get canBootstrapNewUpdater() {
            return A.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => A.crashReporter.getMetadata(),
        getSetting: async (e, n) => await A.settings.get(e, n),
        beforeUnload() {
            var e, n;
            let r;
            try {
                r = this.requireModule('discord_overlay2');
            } catch (e) {}
            r && r.reset && r.reset(), r && r.disconnectAllProcesses && r.destroyHostProcess && (r.disconnectAllProcesses(), r.destroyHostProcess()), A.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== E.K.get(m.SV) && this.supportsFeature(y.eRX.USER_DATA_CACHE) && A.userDataCache.cacheUserData(E.K.stringify()), null == A || null === (n = A.window) || void 0 === n || n.close(null == A ? void 0 : null === (e = A.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
        },
        inputEventRegister(e, n, r, i) {
            !Array.isArray(n) && (n = n.toJS()),
                this.getDiscordUtils().inputEventRegister(
                    parseInt(e),
                    n.map((e) => {
                        let [n, r, i] = e;
                        return 'string' == typeof i ? [n, r, i] : [n, r];
                    }),
                    r,
                    i
                );
        },
        inputEventUnregister(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e));
        },
        setOnInputEventCallback(e) {
            if (!!T.isPlatformEmbedded) this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, n) {
            try {
                D = {};
                let r = 0;
                this.getDiscordUtils().setObservedGamesCallback(
                    e.map((e) => {
                        let n = ++r;
                        return (
                            null != e.id && (D[n] = e.id),
                            {
                                ...e,
                                cmdline: e.cmdLine,
                                id: n
                            }
                        );
                    }),
                    (e) => n(e.map(M))
                );
            } catch (e) {}
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback((n) => e(n.map(M)));
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
        setObserverDebugCallback(e, n, r) {
            this.getDiscordUtils().setObserverDebugCallback((n) => e(n), n, r);
        },
        clearObserverDebugCallback() {
            this.getDiscordUtils().setObserverDebugCallback(null, I.l.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error('cannot require discord_voice in overlay');
            let e = this.requireModule('discord_voice');
            return (
                !x &&
                    (0, p.Bl)((n, r, i) => {
                        e.consoleLog(r, '['.concat(n, '] ').concat(i));
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
            return this.requireModule('discord_utils');
        },
        isSystemDarkMode() {
            var e, n, r;
            return !!(0, T.isWindows)() && (null === (r = null === (e = (n = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(n)) || void 0 === r || r);
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
            if ('darwin' === (0, T.getPlatformName)()) {
                let n = '';
                -1 === e ? (n = '\u2022') : e > 0 && (n = ''.concat(e)), A.remoteApp.dock.setBadge(n);
            } else 'win32' === (0, T.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, T.getPlatformName)() && A.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            if (!!T.isPlatformEmbedded) this.send('SYSTEM_TRAY_SET_ICON', e);
        },
        setThumbarButtons(e) {
            var n, r;
            if (!!T.isPlatformEmbedded) null === (r = A.thumbar) || void 0 === r || null === (n = r.setThumbarButtons) || void 0 === n || n.call(r, e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (T.isPlatformEmbedded) {
                let n = A.remoteApp;
                if (null != n.dock) {
                    let r = n.dock.bounce(e);
                    return async () => {
                        let e = await r;
                        n.dock.cancelBounce(e);
                    };
                }
            }
        },
        setSystemTrayApplications(e) {
            if (!!T.isPlatformEmbedded) this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
        },
        get architecture() {
            return T.isPlatformEmbedded ? A.process.arch : '';
        },
        get releaseChannel() {
            if (!T.isPlatformEmbedded) return '';
            let e = A.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return '';
        },
        get version() {
            return C;
        },
        get buildNumber() {
            return R;
        },
        get moduleVersions() {
            return O;
        },
        copy(e) {
            T.isPlatformEmbedded && A.clipboard.copy(e);
        },
        async copyImage(e) {
            h()(T.isPlatformEmbedded, 'Copy image method called outside native app'), h()('function' == typeof A.clipboard.copyImage, 'Copy image not supported');
            let n = await P(e);
            A.clipboard.copyImage(S.from(n), e);
        },
        async copyImageBlob(e, n) {
            let r = await e.arrayBuffer();
            A.clipboard.copyImage(S.from(r), n);
        },
        async saveImage(e) {
            var n;
            h()(T.isPlatformEmbedded, 'Save image method called outside native app');
            let r = b.Z.toURLSafe(e);
            if (null == r) return;
            let i = null !== (n = r.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown',
                a = await P(e),
                s = S.from(a);
            return A.fileManager.saveWithDialog(s, i);
        },
        async saveFile(e, n) {
            var r;
            h()(T.isPlatformEmbedded, 'Save file method called outside native app');
            let i = b.Z.toURLSafe(e);
            if (null == i) return;
            let a = null !== (r = null != n ? n : i.pathname.split('/').pop()) && void 0 !== r ? r : 'unknown',
                s = await w(e),
                o = S.from(s);
            return A.fileManager.saveWithDialog(o, a);
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (null != e) {
                var n, r;
                let i = null === (n = b.Z.toURLSafe(e)) || void 0 === n ? void 0 : n.pathname;
                if (null == i) return !1;
                let a = null === (r = i.split('.').pop()) || void 0 === r ? void 0 : r.toLowerCase();
                if (null != a && !N.includes(a)) return !1;
            }
            return 'function' == typeof A.clipboard.copyImage;
        },
        cut() {
            T.isPlatformEmbedded && A.clipboard.cut();
        },
        paste() {
            T.isPlatformEmbedded && A.clipboard.paste();
        },
        readClipboard: () => (T.isPlatformEmbedded ? A.clipboard.read() : ''),
        on(e, n) {
            A.ipc.on(e, n);
        },
        invoke(e) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return A.ipc.invoke(e, ...r);
        },
        send(e) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            A.ipc.send(e, ...r);
        },
        flashFrame(e) {
            A.window.flashFrame(e);
        },
        webAuthnRegister: (e) => A.nativeModules.ensureModule('discord_webauthn').then(() => A.webAuthn.webAuthnRegister(e)),
        webAuthnAuthenticate: (e) => A.nativeModules.ensureModule('discord_webauthn').then(() => A.webAuthn.webAuthnAuthenticate(e)),
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
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            n && (0, T.isWindows)() && this.minimize(null), A.window.focus(n, e);
        },
        blur() {
            T.isPlatformEmbedded && null != A.window.blur ? A.window.blur() : window.blur();
        },
        fullscreen(e) {
            A.window.fullscreen(e);
        },
        close(e) {
            A.window.close(e);
        },
        setAlwaysOnTop(e, n) {
            'function' == typeof A.window.setAlwaysOnTop && A.window.setAlwaysOnTop(e, n);
        },
        async isAlwaysOnTop(e) {
            let n = !1;
            return 'function' == typeof A.window.isAlwaysOnTop && (n = await A.window.isAlwaysOnTop(e)), n;
        },
        setMinimumSize(e, n) {
            var r, i;
            null == A || null === (i = A.window) || void 0 === i || null === (r = i.setMinimumSize) || void 0 === r || r.call(i, e, n);
        },
        purgeMemory() {
            if (!!T.isPlatformEmbedded) A.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            A.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            A.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            T.isPlatformEmbedded && A.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => A.features.supports(e),
        getEnableHardwareAcceleration: () => !T.isPlatformEmbedded || (!__OVERLAY__ && A.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            A.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            A.gpuSettings.setChromiumSwitches(e);
        },
        getGPUDriverVersions() {
            return (0, T.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!T.isPlatformEmbedded && (A.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != A.window.setBackgroundThrottling ? A.window.setBackgroundThrottling(e) : A.window.webContents.setBackgroundThrottling(e);
        },
        pauseFrameEvictor() {
            var e, n;
            null === (e = (n = A.app).pauseFrameEvictor) || void 0 === e || e.call(n);
        },
        unpauseFrameEvictor() {
            var e, n;
            null === (e = (n = A.app).pauseFrameEvictor) || void 0 === e || e.call(n);
        },
        getPidFromDesktopSource(e) {
            if (!(0, T.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let n = null == e ? void 0 : e.split(':'),
                r = null == n ? void 0 : n[0];
            if ('window' === r) {
                var i;
                let e = null !== (i = null == n ? void 0 : n[1]) && void 0 !== i ? i : '',
                    r = this.getDiscordUtils().getPidFromWindowHandle(e);
                return null == r || 0 === r ? null : r;
            }
            if (r.startsWith('screen')) return 1;
            if ('prepicked' === r) return 1;
            else return null;
        },
        getDesktopSourceFromPid(e) {
            if (!(0, T.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            let n = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == n || 0 === n.length ? null : ['window', n, '0'].join(':');
        },
        generateSessionFromPid(e) {
            return this.getDiscordUtils().generateSessionFromPid(e);
        },
        getAudioPid(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
        },
        setForegroundProcess(e) {
            let { setForegroundProcess: n } = this.getDiscordUtils();
            return null != n && n(e);
        },
        getDiscordMemoryUsage() {
            let { getDiscordMemoryUsage: e } = this.getDiscordUtils();
            return null != e ? e() : null;
        },
        getDiscordMemoryUsageElectronRenderer() {
            let { getDiscordMemoryUsageElectronRenderer: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        showOpenDialog: (e) => A.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            T.isPlatformEmbedded
                ? new Promise((e, n) => {
                      null != A.processUtils.flushStorageData ? A.processUtils.flushStorageData((r) => (null != r ? n(Error(r)) : e())) : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            T.isPlatformEmbedded
                ? new Promise((e, n) => {
                      null != A.processUtils.flushCookies ? A.processUtils.flushCookies((r) => (null != r ? n(Error(r)) : e())) : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, n) {
            var r;
            if (!!T.isPlatformEmbedded && (null == A ? void 0 : null === (r = A.processUtils) || void 0 === r ? void 0 : r.setCrashInformation) != null) A.processUtils.setCrashInformation(e, n);
        },
        blockDisplaySleep: () => (T.isPlatformEmbedded && null != A.powerSaveBlocker ? A.powerSaveBlocker.blockDisplaySleep() : null),
        unblockDisplaySleep(e) {
            if (!!T.isPlatformEmbedded && null != A.powerSaveBlocker) A.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            if (!!T.isPlatformEmbedded && null != A.powerSaveBlocker) A.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            if (!!T.isPlatformEmbedded) null != A.remoteApp.relaunch && A.remoteApp.relaunch();
        },
        makeChunkedRequest(e, n, r) {
            let i = ''.concat((0, g.K0)()).concat(e);
            if (!T.isPlatformEmbedded) return Promise.reject(Error('Not embedded!'));
            if (null == A.http) return Promise.reject(Error('HTTP module not available'));
            let {
                    method: a,
                    maxBps: s,
                    token: o,
                    chunkInterval: l,
                    contentType: u
                } = {
                    maxBps: 8000,
                    chunkInterval: 50,
                    contentType: 'application/json',
                    ...r
                },
                c = n;
            'application/json' === u && (c = JSON.stringify(n));
            let d = (l / 1000) * s,
                f = Math.ceil(c.length / d),
                _ = Array(f);
            for (let e = 0; e < f; e++) {
                let n = e * d;
                _[e] = c.substring(n, n + d);
            }
            return new Promise((e, n) => {
                null != A.http &&
                    A.http.makeChunkedRequest(
                        i,
                        _,
                        {
                            method: a,
                            chunkInterval: l,
                            contentType: u,
                            token: o
                        },
                        (r, i) => (null != r ? n(r) : i.status >= 400 ? n(Error(i.body)) : void e(i))
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, T.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let n = this.getCrashReporterMetadata(),
                r = A.app.getReleaseChannel(),
                i = null == n ? void 0 : n.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(r, {
                ...i,
                ...e
            });
        },
        crash(e) {
            let n = this.getDiscordUtils().crash;
            return null != n && (n(e), !0);
        },
        setApplicationBackgroundColor(e) {
            A.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
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
            new Promise((n, r) => {
                e(n);
            }),
        IsGameDisplayModeUpdateSupported() {
            let { gameDisplayModeUpdate: e } = this.getDiscordUtils();
            return null != e;
        },
        GameDisplayModeUpdate(e) {
            let { gameDisplayModeUpdate: n } = this.getDiscordUtils();
            return null != n && null != e && n(e);
        },
        GameDisplayModeIsGameSupported(e) {
            let { gameDisplayModeIsSupported: n } = this.getDiscordUtils();
            return null != n && null != e && n(e);
        },
        GetWindowFullscreenTypeByPid(e, n, r) {
            var i;
            let { getWindowFullscreenTypeByPid: a } = this.getDiscordUtils(),
                s = 0 !== e && null != a && null != n ? a(e, n) : null;
            return -1 === s && (s = null), null !== (i = null != s ? s : r) && void 0 !== i ? i : v.Jx.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, n) {
            let { getWindowFullscreenTypeExtraByPid: r } = this.getDiscordUtils();
            return null == r || null == n ? { quns: v.Ng.QUNS_UNKNOWN } : r(e, n);
        },
        isModuleVersionAtLeast(e, n) {
            var r, i, a;
            let s = [...(null != C ? C : [0, 0, 0])];
            s.push(null !== (i = null === (r = this.moduleVersions) || void 0 === r ? void 0 : r[e]) && void 0 !== i ? i : 0);
            let o = null !== (a = n[this.releaseChannel]) && void 0 !== a ? a : n.stable;
            for (let [e, n] of s.entries()) {
                if (n > o[e]) break;
                if (n < o[e]) return !1;
            }
            return !0;
        },
        fetchRiotGamesLiveClientData: (e, n) => (T.isPlatformEmbedded ? (null == A.riotGames ? Promise.reject(Error('Riot Games module not available')) : A.riotGames.fetchLiveClientData(e, n)) : Promise.reject(Error('Not embedded!'))),
        appViewed() {
            if (!!(0, T.isDesktop)()) this.send('APP_VIEWED');
        }
    });

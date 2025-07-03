(n.d(t, { Z: () => y }), n(388685), n(539854));
var r = n(544891),
    i = n(433517),
    a = n(570140),
    o = n(147913),
    s = n(865427),
    l = n(710845),
    c = n(70956),
    u = n(358085),
    d = n(960048),
    f = n(998502);
function _(e, t, n) {
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
let p = +c.Z.Millis.HOUR,
    h = 7 * c.Z.Millis.DAY,
    m = +c.Z.Millis.DAY,
    g = i.K.get('lastNonRequiredUpdateShown', Date.now()),
    E = new l.Z('AutoUpdateManager');
class b extends o.Z {
    _initialize() {
        u.isPlatformEmbedded && (f.ZP.on('CHECKING_FOR_UPDATES', this._handleCheckingForUpdates), f.ZP.on('UPDATE_NOT_AVAILABLE', this._handleNativeUpdateNotAvailable), f.ZP.on('UPDATE_AVAILABLE', () => this._handleUpdateAvailable(!0)), f.ZP.on('UPDATE_ERROR', this._handleUpdateError), f.ZP.on('UPDATE_DOWNLOADED', () => this._handleUpdateDownloaded(!0)), f.ZP.on('UPDATE_MANUALLY', this._handleUpdateManually));
    }
    _terminate() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable && (this.nativeUpdateAvailable ? (null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : f.ZP.send('QUIT_AND_INSTALL')) : location.reload(!0));
    }
    handlePostConnectionOpen() {
        ((this.nativeUpdateCountThreshold = 3), this.checkForUpdates(), (this._checkInterval = setInterval(this.checkForUpdates, p)));
    }
    async _requestNewUpdaterBootstrap() {
        let e;
        E.log('Bootstrapping new updater host...');
        try {
            (await f.ZP.ensureModule('discord_updater_bootstrap'), (e = f.ZP.requireModule('discord_updater_bootstrap')), (this._bootstrapper = e));
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            (this._handleCheckingForUpdates(), await e.bootstrap(f.ZP.releaseChannel, 'win'), (this.updateAvailable = !0), (this.nativeUpdateAvailable = !0), this._handleUpdateDownloaded(!0));
        } catch (e) {
            (E.log('Failed to bootstrap new updater:', e), this._handleNativeUpdateNotAvailable(), d.Z.captureException(e));
        }
    }
    _emitCallbacks() {
        (this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []));
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            _(this, '_checkInterval', null),
            _(this, '_callbacks', []),
            _(this, '_bootstrapper', null),
            _(this, 'updateAvailable', !1),
            _(this, 'nativeUpdateAvailable', !1),
            _(this, 'nativeUpdatesDownloaded', 0),
            _(this, 'nativeUpdateCountThreshold', 1),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                AUTO_UPDATER_QUIT_AND_INSTALL: () => this.quitAndInstall()
            }),
            _(this, 'checkForUpdates', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = 'win32' === (0, u.getPlatformName)(),
                    r = n && t.nativeUpdatesDownloaded < t.nativeUpdateCountThreshold;
                return (
                    (e || !t.nativeUpdateAvailable || r) && (u.isPlatformEmbedded ? (n && f.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : f.ZP.send('CHECK_FOR_UPDATES', { allowMultipleUpdates: !1 })) : t._handleNativeUpdateNotAvailable()),
                    new Promise((e) => {
                        t.updateAvailable ? e(!0) : t._callbacks.push(e);
                    })
                );
            }),
            _(this, '_handleCheckingForUpdates', () => {
                a.Z.dispatch({ type: 'CHECKING_FOR_UPDATES' });
            }),
            _(this, '_handleNativeUpdateNotAvailable', () => {
                (this._handleCheckingForUpdates(),
                    r.tn
                        .get({
                            url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                            query: { _: (Date.now() / 1000 / 60 / 5) | 0 },
                            oldFormErrors: !0,
                            rejectWithError: !0
                        })
                        .then(
                            (e) => {
                                if (null == e.body || '89406c91c6b50e96030d52576fa6e4370bcec984' === e.body.hash) return this._handleUpdateNotAvailable();
                                if (e.body.required || (0, s.fD)()) return this._handleUpdateDownloaded(!1);
                                let t = 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : m;
                                if (Date.now() - g > t) return (i.K.set('lastNonRequiredUpdateShown', Date.now()), this._handleUpdateDownloaded(!1));
                            },
                            () => this._handleUpdateError()
                        ));
            }),
            _(this, '_handleUpdateNotAvailable', () => {
                (a.Z.dispatch({ type: 'UPDATE_NOT_AVAILABLE' }), this._emitCallbacks());
            }),
            _(this, '_handleUpdateAvailable', (e) => {
                ((this.updateAvailable = !0), (this.nativeUpdateAvailable = e), a.Z.dispatch({ type: 'UPDATE_AVAILABLE' }));
            }),
            _(this, '_handleUpdateManually', () => {
                ((this.updateAvailable = !0), (this.nativeUpdateAvailable = !0), a.Z.dispatch({ type: 'UPDATE_MANUALLY' }));
            }),
            _(this, '_handleUpdateError', (e) => {
                ((this.updateAvailable = !1),
                    a.Z.dispatch({
                        type: 'UPDATE_ERROR',
                        message: e
                    }));
            }),
            _(this, '_handleUpdateDownloaded', (e, t, n, r, i) => {
                (e && (this.nativeUpdatesDownloaded += 1),
                    this._handleUpdateAvailable(e),
                    a.Z.dispatch({
                        type: 'UPDATE_DOWNLOADED',
                        releaseNotes: t,
                        releaseName: n,
                        releaseDate: r,
                        updateURL: i
                    }),
                    this._emitCallbacks());
            }));
    }
}
let y = new b();

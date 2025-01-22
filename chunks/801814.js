var i, a;
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function s() {
    return {
        num_failed: 0,
        num_delta_installed: 0,
        num_full_installed: 0,
        foreground_bytes_total: 0,
        background_bytes_total: 0,
        foreground_download_ms_total: 0,
        background_download_ms_total: 0,
        foreground_install_ms_total: 0,
        background_install_ms_total: 0
    };
}
function l(e) {
    return 'host' === e;
}
r.d(n, {
    Z: function () {
        return u;
    }
}),
    !(function (e) {
        (e.CHECKING_FOR_UPDATES = 'checking-for-updates'), (e.INSTALLED_MODULE = 'installed-module'), (e.UPDATE_CHECK_FINISHED = 'update-check-finished'), (e.DOWNLOADING_MODULE = 'downloading-module'), (e.DOWNLOADING_MODULE_PROGRESS = 'downloading-module-progress'), (e.DOWNLOADING_MODULES_FINISHED = 'downloading-modules-finished'), (e.UPDATE_MANUALLY = 'update-manually'), (e.DOWNLOADED_MODULE = 'downloaded-module'), (e.INSTALLING_MODULES_FINISHED = 'installing-modules-finished'), (e.INSTALLING_MODULE = 'installing-module'), (e.INSTALLING_MODULE_PROGRESS = 'installing-module-progress'), (e.NO_PENDING_UPDATES = 'no-pending-updates');
    })(i || (i = {})),
    !(function (e) {
        (e.CLOUD_SYNC = 'discord_cloudsync'), (e.DESKTOP_CORE = 'discord_desktop_core'), (e.DISPATCH = 'discord_dispatch'), (e.ERLPACK = 'discord_erlpack'), (e.GAME_UTILS = 'discord_game_utils'), (e.HOOK = 'discord_hook'), (e.KRISP = 'discord_krisp'), (e.MEDIA = 'discord_media'), (e.MODULES = 'discord_modules'), (e.OVERLAY2 = 'discord_overlay2'), (e.RPC = 'discord_rpc'), (e.SPELLCHECK = 'discord_spellcheck'), (e.UPDATER_BOOTSTRAP = 'discord_updater_bootstrap'), (e.UTILS = 'discord_utils'), (e.VIGILANTE = 'discord_vigilante'), (e.VOICE = 'discord_voice'), (e.ZSTD = 'discord_zstd');
    })(a || (a = {}));
class u {
    handleDownloadingModule(e) {
        if (!l(e.name)) {
            if (null != this._downloadingModules[e.name]) {
                console.warn('Duplicate downloading-module event for module ', e.name);
                return;
            }
            this._downloadingModules[e.name] = {
                startTime: BigInt(e.now),
                foreground: e.foreground
            };
        }
    }
    _updateReportField(e, n, r) {
        let i = this._report[e];
        null != i ? (this._report[e] = r(i, n)) : (this._report[e] = n);
    }
    incrementReportField(e, n) {
        this._updateReportField(e, n, (e, n) => e + n);
    }
    setReportFieldMinimum(e, n) {
        this._updateReportField(e, n, Math.min);
    }
    setReportFieldMaximum(e, n) {
        this._updateReportField(e, n, Math.max);
    }
    handleDownloadedModule(e) {
        if (l(e.name)) return;
        let n = this._downloadingModules[e.name];
        if (null == n) {
            console.warn('Downloaded complete without corresponding downloading event for module ', e.name);
            return;
        }
        let r = n.foreground ? 'foreground' : 'background',
            i = ''.concat(r, '_download_ms_').concat(e.name),
            a = ''.concat(r, '_bytes_').concat(e.name),
            o = Number((BigInt(e.now) - n.startTime + BigInt(999999)) / BigInt(1000000)),
            s = !1 === e.receivedBytes ? 0 : e.receivedBytes;
        n.foreground ? ((this._report.foreground_download_ms_total += o), (this._report.foreground_bytes_total += s)) : ((this._report.background_download_ms_total += o), (this._report.background_bytes_total += s)), this.incrementReportField(i, o), this.incrementReportField(a, s), delete this._downloadingModules[e.name];
    }
    handleInstallingModule(e) {
        if (!l(e.name)) {
            if (null != this._installingModules[e.name]) {
                console.warn('Duplicate installing-module event for module ', e.name);
                return;
            }
            this._installingModules[e.name] = {
                startTime: BigInt(e.now),
                foreground: e.foreground,
                oldVersion: e.oldVersion,
                newVersion: e.newVersion
            };
        }
    }
    handleInstalledModule(e) {
        if (l(e.name)) return;
        let n = this._installingModules[e.name];
        if (null == n) return;
        let r = n.foreground ? 'foreground' : 'background',
            i = ''.concat(r, '_install_ms_').concat(e.name),
            a = 'min_version_'.concat(e.name),
            o = 'max_version_'.concat(e.name),
            s = Number((BigInt(e.now) - n.startTime + BigInt(999999)) / BigInt(1000000));
        n.foreground ? (this._report.foreground_install_ms_total += s) : (this._report.background_install_ms_total += s), this.incrementReportField(i, s), this.setReportFieldMinimum(a, n.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(o, n.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name];
    }
    trackEvent(e) {
        switch (e.type) {
            case 'installing-module':
                this.handleInstallingModule(e);
                break;
            case 'installed-module':
                this.handleInstalledModule(e);
                break;
            case 'downloading-module':
                this.handleDownloadingModule(e);
                break;
            case 'downloaded-module':
                this.handleDownloadedModule(e);
        }
    }
    getStats() {
        return this._report;
    }
    reset() {
        this._report = s();
    }
    submissionReady() {
        return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0;
    }
    constructor() {
        o(this, '_installingModules', {}), o(this, '_downloadingModules', {}), o(this, '_report', void 0), (this._report = s());
    }
}

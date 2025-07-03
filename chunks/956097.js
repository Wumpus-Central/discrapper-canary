(n.d(t, { Z: () => x }), n(388685));
var i,
    r,
    s,
    l = n(442837),
    a = n(544891),
    o = n(570140),
    c = n(668781),
    d = n(358085),
    u = n(998502),
    m = n(49226),
    p = n(981631);
let g = { status: '' },
    h = [],
    f = ['discord.com', 'discordapp.com', 'discordapp.net', 'dl.discordapp.net', 'discordcdn.com', 'discord.gg', 'discord.media'];
class b extends (i = l.ZP.Store) {
    initialize() {
        (this.updateState(), this.addListener());
    }
    logEvent(e) {
        ('status' in e && 'string' == typeof e.status && (g = e), (h = [...h.slice(h.length < 10 ? 0 : 1, 10), e]), this.emitChange());
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(await (null === u.ZP || void 0 === u.ZP || null == (n = u.ZP.getDiscordUtils) || null == (t = n.call(u.ZP)) || null == (e = t.runWarpCommand) ? void 0 : e.call(t, 'status')));
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === u.ZP || void 0 === u.ZP || null == (n = u.ZP.getDiscordUtils) || null == (t = n.call(u.ZP)) || null == (e = t.onWarpEvent) || e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        try {
            return await u.ZP.getDiscordUtils().runWarpCommand(e, ...n);
        } catch (e) {
            throw (this.logEvent({ commandError: e.message }), e);
        }
    }
    async install() {
        if (this.clientEnabled)
            try {
                this.logEvent({ status: 'Installing' });
                let e = await u.ZP.getDiscordUtils().installWarp();
                (this.logEvent({
                    status: 'Installed',
                    installLog: e
                }),
                    this.connect());
            } catch (e) {
                this.logEvent({
                    status: 'InstallFailed',
                    error: e.message
                });
            }
    }
    async promptInstall() {
        (await c.Z.confirm({
            title: 'Warp not installed',
            body: 'Do you want to install Warp?'
        }))
            ? this.install()
            : this.logEvent({ status: 'InstallDeclined' });
    }
    async configureLicense() {
        try {
            var e;
            let t = await this.runCommand('registration', 'show');
            if (((null == t ? void 0 : t.code) === 'MissingRegistration' && (await this.runCommand('registration', 'new'), (t = await this.runCommand('registration', 'show'))), (null == t || null == (e = t.account) ? void 0 : e.type) === 'free' && m.Z.getCurrentConfig({ location: 'configureLicense' }).plus)) {
                let { key: e } = (
                    await a.tn.get({
                        url: p.ANM.USER_WARP_LICENSE,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body;
                null != e && '' !== e && (await this.runCommand('registration', 'license', e));
            }
        } catch (e) {}
    }
    async configureExceptions() {
        try {
            let t = await this.runCommand('tunnel', 'host', 'list');
            if ((null == t ? void 0 : t.mode) === 'exclude')
                for (let n of f) {
                    var e;
                    (null == t || null == (e = t.hosts) ? void 0 : e.indexOf(n)) === -1 && (await this.runCommand('tunnel', 'host', 'add', n));
                }
        } catch (e) {}
    }
    async configureMode() {
        try {
            await this.runCommand('mode', 'warp+doh');
        } catch (e) {}
    }
    get state() {
        return g;
    }
    get log() {
        return h;
    }
    get clientEnabled() {
        return m.Z.getCurrentConfig(
            { location: 'WarpClientStore' },
            {
                autoTrackExposure: !0,
                disable: !d.isPlatformEmbedded
            }
        ).enable;
    }
    get enabled() {
        return 'Connected' === g.status || this.connecting;
    }
    get connecting() {
        return 'Configuring' === g.status || 'Connecting' === g.status || 'ConnectCommandSent' === g.status || 'Installing' === g.status || 'Installed' === g.status;
    }
    async connect() {
        if (this.clientEnabled) {
            (this.logEvent({ status: 'Configuring' }), await this.configureLicense(), await this.configureExceptions(), await this.configureMode());
            try {
                (this.logEvent({ status: 'ConnectCommandSent' }), await this.runCommand('connect'));
            } catch (e) {
                'Failed to locate warp-cli' === e.message && this.promptInstall();
            }
        }
        return this.clientEnabled;
    }
    disconnect() {
        return (this.clientEnabled && (this.runCommand('disconnect'), (g = { status: 'DisconnectCommandSent' })), this.clientEnabled);
    }
}
((s = 'WarpClientStore'),
    (r = 'displayName') in b
        ? Object.defineProperty(b, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[r] = s));
let x = new b(o.Z, {});

n.d(t, { Z: () => x }), n(388685);
var r,
    i,
    s,
    a = n(200651),
    l = n(442837),
    o = n(544891),
    c = n(570140),
    d = n(668781),
    u = n(358085),
    m = n(998502),
    g = n(49226),
    p = n(981631);
let h = { status: '' },
    f = [],
    b = ['discord.com', 'discordapp.com', 'discordapp.net', 'dl.discordapp.net', 'discordcdn.com', 'discord.gg', 'discord.media'];
class N extends (r = l.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        'status' in e && 'string' == typeof e.status && (h = e), (f = [...f.slice(f.length < 10 ? 0 : 1, 10), e]), this.emitChange();
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(await (null === m.ZP || void 0 === m.ZP || null == (n = m.ZP.getDiscordUtils) || null == (t = n.call(m.ZP)) || null == (e = t.runWarpCommand) ? void 0 : e.call(t, 'status')));
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === m.ZP || void 0 === m.ZP || null == (n = m.ZP.getDiscordUtils) || null == (t = n.call(m.ZP)) || null == (e = t.onWarpEvent) || e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await m.ZP.getDiscordUtils().runWarpCommand(e, ...n);
        } catch (e) {
            throw (this.logEvent({ commandError: e.message }), e);
        }
    }
    async install() {
        if (this.clientEnabled)
            try {
                this.logEvent({ status: 'Installing' });
                let e = await m.ZP.getDiscordUtils().installWarp();
                this.logEvent({
                    status: 'Installed',
                    installLog: e
                }),
                    this.connect();
            } catch (e) {
                this.logEvent({
                    status: 'InstallFailed',
                    error: e.message
                });
            }
    }
    async promptInstall() {
        (await d.Z.confirm({
            title: 'Warp not installed',
            body: (0, a.jsx)('span', { children: 'Do you want to install Warp?' })
        }))
            ? this.install()
            : this.logEvent({ status: 'InstallDeclined' });
    }
    async configureLicense() {
        try {
            var e;
            let t = await this.runCommand('registration', 'show');
            if (((null == t ? void 0 : t.code) === 'MissingRegistration' && (await this.runCommand('registration', 'new'), (t = await this.runCommand('registration', 'show'))), (null == t || null == (e = t.account) ? void 0 : e.type) === 'free' && g.Z.getCurrentConfig({ location: 'configureLicense' }).plus)) {
                let { key: e } = (
                    await o.tn.get({
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
                for (let n of b) {
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
        return h;
    }
    get log() {
        return f;
    }
    get clientEnabled() {
        return g.Z.getCurrentConfig(
            { location: 'WarpClientStore' },
            {
                autoTrackExposure: !0,
                disable: !u.isPlatformEmbedded
            }
        ).enable;
    }
    get enabled() {
        return 'Connected' === h.status || this.connecting;
    }
    get connecting() {
        return 'Configuring' === h.status || 'Connecting' === h.status || 'ConnectCommandSent' === h.status || 'Installing' === h.status || 'Installed' === h.status;
    }
    async connect() {
        if (this.clientEnabled) {
            this.logEvent({ status: 'Configuring' }), await this.configureLicense(), await this.configureExceptions(), await this.configureMode();
            try {
                this.logEvent({ status: 'ConnectCommandSent' }), await this.runCommand('connect');
            } catch (e) {
                'Failed to locate warp-cli' === e.message && this.promptInstall();
            }
        }
        return this.clientEnabled;
    }
    disconnect() {
        return this.clientEnabled && (this.runCommand('disconnect'), (h = { status: 'DisconnectCommandSent' })), this.clientEnabled;
    }
}
(s = 'WarpClientStore'),
    (i = 'displayName') in N
        ? Object.defineProperty(N, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[i] = s);
let x = new N(c.Z, {});

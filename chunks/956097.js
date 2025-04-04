n.d(t, { Z: () => N }), n(47120);
var r,
    i,
    s,
    a = n(200651),
    l = n(442837),
    o = n(544891),
    c = n(570140),
    d = n(668781),
    u = n(998502),
    m = n(49226),
    g = n(981631);
let p = { status: '' },
    h = [],
    f = ['discord.com', 'discordapp.com', 'discordapp.net', 'dl.discordapp.net', 'discordcdn.com', 'discord.gg', 'discord.media'];
class b extends (r = l.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        'status' in e && 'string' == typeof e.status && (p = e), (h = [...h.slice(h.length < 10 ? 0 : 1, 10), e]), this.emitChange();
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
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
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
            if (((null == t ? void 0 : t.code) === 'MissingRegistration' && (await this.runCommand('registration', 'new'), (t = await this.runCommand('registration', 'show'))), (null == t || null == (e = t.account) ? void 0 : e.type) === 'free' && m.Z.getCurrentConfig({ location: 'configureLicense' }).plus)) {
                let { key: e } = (
                    await o.tn.get({
                        url: g.ANM.USER_WARP_LICENSE,
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
    get state() {
        return p;
    }
    get log() {
        return h;
    }
    get clientEnabled() {
        return m.Z.getCurrentConfig({ location: 'WarpClientStore' }).enable;
    }
    get enabled() {
        return 'Connected' === p.status || this.connecting;
    }
    get connecting() {
        return 'Configuring' === p.status || 'Connecting' === p.status || 'ConnectCommandSent' === p.status || 'Installing' === p.status || 'Installed' === p.status;
    }
    async connect() {
        if (this.clientEnabled) {
            this.logEvent({ status: 'Configuring' }), await this.configureLicense(), await this.configureExceptions();
            try {
                this.logEvent({ status: 'ConnectCommandSent' }), await this.runCommand('connect');
            } catch (e) {
                'Failed to locate warp-cli' === e.message && this.promptInstall();
            }
        }
        return this.clientEnabled;
    }
    disconnect() {
        return this.clientEnabled && (this.runCommand('disconnect'), (p = { status: 'DisconnectCommandSent' })), this.clientEnabled;
    }
}
(s = 'WarpClientStore'),
    (i = 'displayName') in b
        ? Object.defineProperty(b, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[i] = s);
let N = new b(c.Z, {});

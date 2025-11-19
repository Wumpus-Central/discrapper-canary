n.d(t, { Z: () => b }), n(388685), n(415506);
var r,
    i = n(818710),
    a = n(442837),
    o = n(544891),
    s = n(570140),
    l = n(668781),
    c = n(299886),
    u = n(960048),
    d = n(998502),
    f = n(981631);
function _(e, t, n) {
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
let p = 10,
    h = { status: "" },
    m = [],
    g = [
        "discord.com",
        "discordapp.com",
        "discordapp.net",
        "dl.discordapp.net",
        "discordcdn.com",
        "discord.gg",
        "discord.media",
    ];
class E extends (r = a.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (h = e),
            (m = [...m.slice(m.length < p ? 0 : 1, p), e]),
            this.emitChange();
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(
                await (null === d.ZP ||
                void 0 === d.ZP ||
                null == (n = d.ZP.getDiscordUtils) ||
                null == (t = n.call(d.ZP)) ||
                null == (e = t.runWarpCommand)
                    ? void 0
                    : e.call(t, "status")),
            );
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === d.ZP ||
                void 0 === d.ZP ||
                null == (n = d.ZP.getDiscordUtils) ||
                null == (t = n.call(d.ZP)) ||
                null == (e = t.onWarpEvent) ||
                e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await d.ZP.getDiscordUtils().runWarpCommand(e, ...n);
        } catch (e) {
            throw (this.logEvent({ commandError: e.message }), e);
        }
    }
    async install() {
        if (this.clientEnabled)
            try {
                this.logEvent({ status: "Installing" });
                let e = await d.ZP.getDiscordUtils().installWarp();
                this.logEvent({
                    status: "Installed",
                    installLog: e,
                }),
                    this.connect();
            } catch (e) {
                this.logEvent({
                    status: "InstallFailed",
                    error: e.message,
                });
            }
    }
    async promptInstall() {
        (await l.Z.confirm({
            title: "Warp not installed",
            body: "Do you want to install Warp?",
        }))
            ? this.install()
            : this.logEvent({ status: "InstallDeclined" });
    }
    async configureLicense() {
        try {
            let e = await this.runCommand("registration", "show");
            if ((null == e ? void 0 : e.code) === "MissingRegistration")
                throw Error("MissingRegistration when configuring license");
            if (c.H.getConfig({ location: "configureLicense" }).enabled) {
                let e = (
                    await o.tn.post({
                        url: f.ANM.USER_WARP_LICENSE,
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body.license_key;
                null != e && "" !== e && (await this.runCommand("registration", "license", e));
            }
        } catch (e) {
            u.Z.captureException(e);
        }
    }
    async configureExceptions() {
        try {
            let t = await this.runCommand("tunnel", "host", "list");
            if ((null == t ? void 0 : t.mode) === "exclude")
                for (let n of g) {
                    var e;
                    (null == t || null == (e = t.hosts) ? void 0 : e.indexOf(n)) === -1 &&
                        (await this.runCommand("tunnel", "host", "add", n));
                }
        } catch (e) {}
    }
    async configureMode() {
        try {
            await this.runCommand("mode", "warp+doh");
        } catch (e) {}
    }
    get state() {
        return h;
    }
    get log() {
        return m;
    }
    get clientEnabled() {
        return (0, i.nI)() && c.H.getConfig({ location: "WarpClientStore" }).enabled;
    }
    get enabled() {
        return "Connected" === h.status || this.connecting;
    }
    get connecting() {
        return (
            "Configuring" === h.status ||
            "Connecting" === h.status ||
            "ConnectCommandSent" === h.status ||
            "Installing" === h.status ||
            "Installed" === h.status
        );
    }
    async connect() {
        if (this.clientEnabled) {
            this.logEvent({ status: "Configuring" }), await this.configureExceptions(), await this.configureMode();
            try {
                this.logEvent({ status: "ConnectCommandSent" }), await this.runCommand("connect");
            } catch (e) {
                "Failed to locate warp-cli" === e.message && this.promptInstall();
            }
        }
        return this.clientEnabled;
    }
    async disconnect() {
        if (this.clientEnabled) {
            let e = this.runCommand("disconnect");
            return (h = { status: "DisconnectCommandSent" }), await e;
        }
        return this.clientEnabled;
    }
    async finishSetup() {
        return (
            await this.configureLicense(),
            await this.configureExceptions(),
            await this.configureMode(),
            await this.updateState(),
            !0
        );
    }
}
_(E, "displayName", "WarpClientStore");
let b = new E(s.Z, {});

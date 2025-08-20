n.d(t, { Z: () => E }), n(388685);
var r,
    i = n(442837),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(358085),
    c = n(998502),
    u = n(49226),
    d = n(981631);
function f(e, t, n) {
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
let _ = 10,
    p = { status: "" },
    h = [],
    m = [
        "discord.com",
        "discordapp.com",
        "discordapp.net",
        "dl.discordapp.net",
        "discordcdn.com",
        "discord.gg",
        "discord.media",
    ];
class g extends (r = i.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (p = e),
            (h = [...h.slice(h.length < _ ? 0 : 1, _), e]),
            this.emitChange();
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(
                await (null === c.ZP ||
                void 0 === c.ZP ||
                null == (n = c.ZP.getDiscordUtils) ||
                null == (t = n.call(c.ZP)) ||
                null == (e = t.runWarpCommand)
                    ? void 0
                    : e.call(t, "status")),
            );
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === c.ZP ||
                void 0 === c.ZP ||
                null == (n = c.ZP.getDiscordUtils) ||
                null == (t = n.call(c.ZP)) ||
                null == (e = t.onWarpEvent) ||
                e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await c.ZP.getDiscordUtils().runWarpCommand(e, ...n);
        } catch (e) {
            throw (this.logEvent({ commandError: e.message }), e);
        }
    }
    async install() {
        if (this.clientEnabled)
            try {
                this.logEvent({ status: "Installing" });
                let e = await c.ZP.getDiscordUtils().installWarp();
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
        (await s.Z.confirm({
            title: "Warp not installed",
            body: "Do you want to install Warp?",
        }))
            ? this.install()
            : this.logEvent({ status: "InstallDeclined" });
    }
    async configureLicense() {
        try {
            var e;
            let t = await this.runCommand("registration", "show");
            if (
                ((null == t ? void 0 : t.code) === "MissingRegistration" &&
                    (await this.runCommand("registration", "new"), (t = await this.runCommand("registration", "show"))),
                (null == t || null == (e = t.account) ? void 0 : e.type) === "free" &&
                    u.Z.getCurrentConfig({ location: "configureLicense" }).plus)
            ) {
                let { key: e } = (
                    await a.tn.get({
                        url: d.ANM.USER_WARP_LICENSE,
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body;
                null != e && "" !== e && (await this.runCommand("registration", "license", e));
            }
        } catch (e) {}
    }
    async configureExceptions() {
        try {
            let t = await this.runCommand("tunnel", "host", "list");
            if ((null == t ? void 0 : t.mode) === "exclude")
                for (let n of m) {
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
        return p;
    }
    get log() {
        return h;
    }
    get clientEnabled() {
        return u.Z.getCurrentConfig(
            { location: "WarpClientStore" },
            {
                autoTrackExposure: !0,
                disable: !l.isPlatformEmbedded,
            },
        ).enable;
    }
    get enabled() {
        return "Connected" === p.status || this.connecting;
    }
    get connecting() {
        return (
            "Configuring" === p.status ||
            "Connecting" === p.status ||
            "ConnectCommandSent" === p.status ||
            "Installing" === p.status ||
            "Installed" === p.status
        );
    }
    async connect() {
        if (this.clientEnabled) {
            this.logEvent({ status: "Configuring" }),
                await this.configureLicense(),
                await this.configureExceptions(),
                await this.configureMode();
            try {
                this.logEvent({ status: "ConnectCommandSent" }), await this.runCommand("connect");
            } catch (e) {
                "Failed to locate warp-cli" === e.message && this.promptInstall();
            }
        }
        return this.clientEnabled;
    }
    disconnect() {
        return (
            this.clientEnabled && (this.runCommand("disconnect"), (p = { status: "DisconnectCommandSent" })),
            this.clientEnabled
        );
    }
}
f(g, "displayName", "WarpClientStore");
let E = new g(o.Z, {});

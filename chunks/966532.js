"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(328153),
    s = n(287809),
    a = n(977997),
    o = n(572164),
    l = n(399925),
    d = n(734066),
    _ = n(64683);
class u extends i.A {
    registrations = new Map();
    activeHandlers = new Map();
    initialized = !1;
    actions = {
        RUNNING_GAMES_CHANGE: () => this.updateActiveHandlers(),
        CLIPS_SETTINGS_UPDATE: () => this.updateActiveHandlers(),
        VOICE_CHANNEL_SELECT: () => this.updateActiveHandlers(),
        VOICE_STATE_UPDATES: () => this.updateActiveHandlers(),
    };
    ensureInitialized() {
        if (!this.initialized)
            for (let e of ((this.initialized = !0),
            [
                {
                    type: "voiceChannel",
                    name: "ml-audio-classification",
                    isEnabled: d.J,
                    importHandler: () => n.e("94430").then(n.bind(n, 712589)),
                },
                {
                    type: "voiceChannel",
                    name: "distributed-clipping",
                    isEnabled: d.J,
                    importHandler: () => n.e("70726").then(n.bind(n, 949285)),
                },
                {
                    type: "application",
                    name: "steam-timeline",
                    isEnabled: d.J,
                    importHandler: () => n.e("52741").then(n.bind(n, 664420)),
                },
                {
                    type: "application",
                    name: "league-of-legends",
                    applicationId: _.m,
                    isEnabled: d.J,
                    importHandler: () => n.e("31263").then(n.bind(n, 903010)),
                },
            ]))
                "voiceChannel" === e.type
                    ? this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled)
                    : "application" === e.type &&
                      this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled);
    }
    registerApplication(e, t, n, i) {
        this.registrations.set(e, { type: "application", name: e, applicationId: t, isEnabled: i, importHandler: n });
    }
    registerVoiceChannel(e, t, n) {
        this.registrations.set(e, { type: "voiceChannel", name: e, isEnabled: n, importHandler: t });
    }
    isUserInVoiceChannel() {
        let e = s.default.getCurrentUser();
        if (null == e) return !1;
        let t = a.A.getVoiceStateForUser(e.id);
        return t?.channelId != null;
    }
    async updateActiveHandlers() {
        this.ensureInitialized();
        let e = (0, o.TD)(),
            t = r.Ay.getRunningGames(),
            n = this.isUserInVoiceChannel();
        if (!e) return void (await this.stopAllHandlers());
        let i = new Set(t.map((e) => e.id));
        for (let [e, t] of this.registrations) {
            let r = !1;
            null == t.isEnabled || t.isEnabled()
                ? "application" === t.type
                    ? (r = null == t.applicationId ? i.size > 0 : i.has(t.applicationId))
                    : "voiceChannel" === t.type && (r = n)
                : (r = !1);
            let s = this.activeHandlers.has(e);
            r && !s ? await this.startHandler(e, t) : !r && s && (await this.stopHandler(e));
        }
    }
    async startHandler(e, t) {
        let n = (0, (await t.importHandler()).default)(l.Ts);
        n.start(), this.activeHandlers.set(e, { handler: n, registration: t });
    }
    stopHandler(e) {
        let t = this.activeHandlers.get(e);
        null != t && (t.handler.stop(), this.activeHandlers.delete(e));
    }
    stopAllHandlers() {
        for (let e of Array.from(this.activeHandlers.keys())) this.stopHandler(e);
    }
    getHandlerState(e) {
        let t = this.activeHandlers.get(e);
        return t?.handler.getState?.();
    }
    _initialize() {
        this.ensureInitialized();
    }
    _terminate() {
        for (let [, e] of this.activeHandlers) e.handler.stop();
        this.activeHandlers.clear();
    }
}
let c = new u();

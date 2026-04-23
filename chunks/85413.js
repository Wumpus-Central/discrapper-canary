"use strict";
n.d(t, { A: () => d });
var r = n(439372),
    i = n(15285),
    s = n(287809),
    a = n(977997),
    o = n(572164),
    l = n(399925),
    u = n(450948);
class c extends r.A {
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
            for (let e of ((this.initialized = !0), (0, u.O)()))
                "voiceChannel" === e.type
                    ? this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled)
                    : "application" === e.type &&
                      this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled);
    }
    registerApplication(e, t, n, r) {
        this.registrations.set(e, { type: "application", name: e, applicationId: t, isEnabled: r, importHandler: n });
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
            t = i.Ay.getRunningGames(),
            n = this.isUserInVoiceChannel();
        if (!e) return void (await this.stopAllHandlers());
        let r = new Set(t.map((e) => e.id));
        for (let [e, t] of this.registrations) {
            let i = !1;
            null == t.isEnabled || t.isEnabled()
                ? "application" === t.type
                    ? (i = null == t.applicationId ? r.size > 0 : r.has(t.applicationId))
                    : "voiceChannel" === t.type && (i = n)
                : (i = !1);
            let s = this.activeHandlers.has(e);
            i && !s ? await this.startHandler(e, t) : !i && s && (await this.stopHandler(e));
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
let d = new c();

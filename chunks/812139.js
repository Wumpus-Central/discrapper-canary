n.d(t, { A: () => m });
var i = n(439372),
    r = n(397369),
    a = n(287809),
    s = n(977997),
    l = n(572164),
    o = n(489496),
    d = n(507868),
    c = n(419490),
    u = n(458977),
    _ = n(696016),
    E = n(171251),
    A = n(826685),
    f = n(876474),
    h = n(190443);
function I(e, t) {
    return !!c.Ay.getEnableAutoclipping() && d.A.hasCapability(t ?? r.Ay.getVisibleGame()?.id, e);
}
class p extends i.A {
    registrations = new Map();
    activeHandlers = new Map();
    initialized = !1;
    terminatedCount = 0;
    actions = {
        RUNNING_GAMES_CHANGE: () => this.updateActiveHandlers(),
        CLIPS_SETTINGS_UPDATE: () => this.updateActiveHandlers(),
        VOICE_CHANNEL_SELECT: () => this.updateActiveHandlers(),
        VOICE_STATE_UPDATES: () => this.updateActiveHandlers(),
        CLIPS_AUTOCLIPS_CAPABILITIES_UPDATE: () => this.updateActiveHandlers(),
        CLIPS_AUTOCLIPS_STAFF_BYPASS_OVERRIDE: () => this.updateActiveHandlers(),
    };
    ensureInitialized() {
        if (!this.initialized)
            for (let e of ((this.initialized = !0),
            [
                {
                    type: "voiceChannel",
                    name: "ml-audio-classification",
                    isEnabled: () => I(_.pZ.LAUGHTER | _.pZ.SHOUTING),
                    importHandler: () => n.e(553725).then(n.bind(n, 691148)),
                },
                {
                    type: "voiceChannel",
                    name: "distributed-clipping",
                    isEnabled: () =>
                        !!c.Ay.getEnableAutoclipping() &&
                        d.A.isGameAllowed(void 0 ?? r.Ay.getVisibleGame()?.id) &&
                        u.A.getConfig({ location: "Clip signal handler registration" }).enableDistributedClips,
                    importHandler: () => n.e(878045).then(n.bind(n, 359788)),
                },
                {
                    type: "application",
                    name: "league-of-legends",
                    applicationId: f.m,
                    isEnabled: () => I(_.pZ.GAME_EVENTS, f.m),
                    importHandler: () => n.e(95052).then(n.bind(n, 743047)),
                },
                {
                    type: "application",
                    name: "cs2-gsi",
                    applicationId: E.w,
                    isEnabled: () => I(_.pZ.GAME_EVENTS, E.w),
                    importHandler: () => n.e(27741).then(n.bind(n, 532204)),
                },
                {
                    type: "application",
                    name: "dota-gsi",
                    applicationId: A.b,
                    isEnabled: () => I(_.pZ.GAME_EVENTS, A.b),
                    importHandler: () => n.e(536642).then(n.bind(n, 442969)),
                },
                {
                    type: "application",
                    name: "rocket-league",
                    applicationId: h.e,
                    isEnabled: () => I(_.pZ.GAME_EVENTS, h.e),
                    importHandler: () => n.e(760821).then(n.bind(n, 999828)),
                },
            ]))
                switch (e.type) {
                    case "voiceChannel":
                        this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled);
                        break;
                    case "application":
                        this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled);
                }
    }
    registerApplication(e, t, n, i) {
        this.registrations.set(e, { type: "application", name: e, applicationId: t, isEnabled: i, importHandler: n });
    }
    registerVoiceChannel(e, t, n) {
        this.registrations.set(e, { type: "voiceChannel", name: e, isEnabled: n, importHandler: t });
    }
    isUserInVoiceChannel() {
        let e = a.default.getCurrentUser();
        if (null == e) return !1;
        let t = s.A.getVoiceStateForUser(e.id);
        return t?.channelId != null;
    }
    async updateActiveHandlers() {
        if ((this.ensureInitialized(), !(0, l.T)())) return void this.stopAllHandlers();
        let e = this.terminatedCount;
        for (let [t, n] of this.registrations) {
            let i = () => {
                    if (!(0, l.T)() || (null != n.isEnabled && !n.isEnabled())) return !1;
                    switch (n.type) {
                        case "application": {
                            let e = new Set(r.Ay.getRunningGames().map((e) => e.id));
                            if (null == n.applicationId) return e.size > 0;
                            return e.has(n.applicationId);
                        }
                        case "voiceChannel":
                            return this.isUserInVoiceChannel();
                        default:
                            return !1;
                    }
                },
                a = () => this.activeHandlers.has(t),
                s = i(),
                o = a();
            if (s && !o) {
                let r = (await n.importHandler()).default;
                if (this.terminatedCount !== e) return;
                i() && !a() && this.startHandler(t, n, r);
            } else !s && o && this.stopHandler(t);
        }
    }
    startHandler(e, t, n) {
        let i = n(o.Ts);
        (i.start(), this.activeHandlers.set(e, { handler: i, registration: t }));
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
        (this.terminatedCount++, this.stopAllHandlers());
    }
}
let m = new p();

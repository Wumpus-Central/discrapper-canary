n.d(t, { A: () => C });
var i = n(439372),
    r = n(952818),
    a = n(287809),
    s = n(977997),
    l = n(572164),
    o = n(614584),
    d = n(507868),
    c = n(915725),
    u = n(974293),
    _ = n(240899),
    E = n(458977),
    A = n(399091),
    h = n(526233);
let I = (0, n(945810).mj)({
        kind: "user",
        name: "2026-08-rocketleague-events",
        defaultConfig: { enableRocketLeagueEvents: !1 },
        variations: { 1: { enableRocketLeagueEvents: !0 } },
    }),
    f = n(786661).E.applicationIds["0"],
    p = "356875988589740042";
var T = n(876474),
    m = n(190443);
let g = "Clip signal handler registration";
function S(e) {
    return !!c.Ay.getEnableAutoclipping() && d.A.isGameAllowed(e ?? r.Ay.getVisibleGame()?.id);
}
class N extends i.A {
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
                    isEnabled: () => (0, u.$i)(g) && S(),
                    importHandler: () => n.e("553725").then(n.bind(n, 691148)),
                },
                {
                    type: "voiceChannel",
                    name: "distributed-clipping",
                    isEnabled: () => S() && E.A.getConfig({ location: g }).enableDistributedClips,
                    importHandler: () => n.e("878045").then(n.bind(n, 359788)),
                },
                {
                    type: "application",
                    name: "league-of-legends",
                    applicationId: T.m,
                    isEnabled: () => S(T.m) && h.A.getConfig({ location: g }).enableLeagueEvents,
                    importHandler: () => n.e("618549").then(n.bind(n, 877588)),
                },
                {
                    type: "application",
                    name: "cs2-gsi",
                    applicationId: f,
                    isEnabled: () => S(f) && _.A.getConfig({ location: g }).enableCs2Gsi,
                    importHandler: () => Promise.all([n.e("556967"), n.e("860838")]).then(n.bind(n, 525509)),
                },
                {
                    type: "application",
                    name: "dota-gsi",
                    applicationId: p,
                    isEnabled: () => S(p) && A.A.getConfig({ location: g }).enableDotaGsi,
                    importHandler: () => Promise.all([n.e("556967"), n.e("677980")]).then(n.bind(n, 250263)),
                },
                {
                    type: "application",
                    name: "rocket-league",
                    applicationId: m.e,
                    isEnabled: () => S(m.e) && I.getConfig({ location: g }).enableRocketLeagueEvents,
                    importHandler: () => Promise.all([n.e("556967"), n.e("182150")]).then(n.bind(n, 446885)),
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
let C = new N();

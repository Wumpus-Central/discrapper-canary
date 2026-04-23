n.d(t, { A: () => h });
var i = n(311907),
    l = n(73153),
    s = n(71393),
    r = n(652215);
let a = { description: "", channels: [], enabled: !1 },
    o = a,
    d = !1,
    c = !1,
    u = a;
function m(e) {
    let { welcomeScreen: t, guildId: n } = e,
        i = s.A.getGuild(n);
    (u = o =
        null != t
            ? {
                  description: t.description ?? "",
                  channels: t.welcome_channels ?? [],
                  enabled: i?.features.has(r.GuildFeatures.WELCOME_SCREEN_ENABLED),
              }
            : a),
        (c = !1);
}
class g extends i.Ay.Store {
    static displayName = "WelcomeScreenSettingsStore";
    initialize() {
        this.waitFor(s.A);
    }
    get() {
        return u;
    }
    showNotice() {
        return c;
    }
    getSettingsProps() {
        return { submitting: d, hasErrors: c, welcomeSettings: u, originalWelcomeSettings: o };
    }
}
let h = new g(l.h, {
    WELCOME_SCREEN_FETCH_SUCCESS: m,
    WELCOME_SCREEN_UPDATE: m,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        (u = o), (c = !1);
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        (u = a), (o = a);
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        u = { ...u, ...t };
    },
    WELCOME_SCREEN_SUBMIT: function () {
        d = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        m(e), (d = !1);
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        (c = !0), (d = !1);
    },
});

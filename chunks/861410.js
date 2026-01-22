n.d(t, { A: () => p }), n(228524);
var r,
    i = n(311907),
    l = n(73153),
    s = n(71393),
    a = n(652215);
function c(e, t, n) {
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
let o = {
        description: "",
        channels: [],
        enabled: !1,
    },
    d = o,
    u = !1,
    f = !1,
    g = o;
function b(e) {
    let { welcomeScreen: t, guildId: n } = e,
        r = s.A.getGuild(n);
    if (null != t) {
        var i, l;
        g = d = {
            description: null != (i = t.description) ? i : "",
            channels: null != (l = t.welcome_channels) ? l : [],
            enabled: null == r ? void 0 : r.features.has(a.GuildFeatures.WELCOME_SCREEN_ENABLED),
        };
    } else g = d = o;
    f = !1;
}
class m extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A);
    }
    get() {
        return g;
    }
    showNotice() {
        return f;
    }
    getSettingsProps() {
        return {
            submitting: u,
            hasErrors: f,
            welcomeSettings: g,
            originalWelcomeSettings: d,
        };
    }
}
c(m, "displayName", "WelcomeScreenSettingsStore");
let p = new m(l.h, {
    WELCOME_SCREEN_FETCH_SUCCESS: b,
    WELCOME_SCREEN_UPDATE: b,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        (g = d), (f = !1);
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        (g = o), (d = o);
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        g = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        c(e, t, n[t]);
                    });
            }
            return e;
        })({}, g, t);
    },
    WELCOME_SCREEN_SUBMIT: function () {
        u = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        b(e), (u = !1);
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        (f = !0), (u = !1);
    },
});

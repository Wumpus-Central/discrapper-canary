n.d(t, { Z: () => b }), n(388685), n(953529);
var r,
    i = n(442837),
    l = n(570140),
    a = n(45966),
    s = n(999382),
    o = n(290511);
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
let d = [],
    u = !1,
    g = [];
function f() {
    let e = s.Z.getGuildId();
    if (null == e) {
        (d = []), (g = []), (u = !1);
        return;
    }
    (d = [...a.Z.getConnections(e)]), (g = []), (u = !1);
}
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z, s.Z);
    }
    getEditedConnections() {
        return d;
    }
    getErrors() {
        return g;
    }
    isSubmitting() {
        return u;
    }
    hasChanges() {
        let e = s.Z.getGuildId();
        if (null == e) return !1;
        let t = a.Z.getConnections(e);
        return (
            d.length !== t.length ||
            d.some((e, n) => {
                let r = t[n];
                return (
                    null == r ||
                    e.connection_type !== r.connection_type ||
                    e.application_id !== r.application_id ||
                    e.provider_id !== r.provider_id ||
                    e.description !== r.description
                );
            })
        );
    }
    showNotice() {
        return this.hasChanges();
    }
    hasValidationErrors() {
        return g.length > 0;
    }
}
c(m, "displayName", "GuildSettingsOnboardingConnectionsStore");
let b = new m(l.Z, {
    GUILD_SETTINGS_INIT: f,
    GUILD_SETTINGS_SET_SECTION: f,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function (e) {
        let { connection: t } = e;
        if (d.length >= o.yx) {
            g = ["Maximum ".concat(o.yx, " connections allowed")];
            return;
        }
        (d = [...d, t]), (g = (0, o.rZ)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function (e) {
        let { index: t } = e;
        (d = d.filter((e, n) => n !== t)), (g = (0, o.rZ)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE: function (e) {
        let { index: t, updates: n } = e;
        (d = d.map((e, r) =>
            r === t
                ? (function (e) {
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
                  })({}, e, n)
                : e,
        )),
            (g = (0, o.rZ)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function (e) {
        let { connections: t } = e;
        (d = [...t]), (g = (0, o.rZ)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function () {
        let e = s.Z.getGuildId();
        if (null == e) {
            (d = []), (g = []);
            return;
        }
        (d = [...a.Z.getConnections(e)]), (g = []);
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function () {
        (u = !0), (g = (0, o.rZ)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { connections: t } = e;
        (u = !1), (g = []), (d = [...t]);
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED: function (e) {
        let { errors: t } = e;
        (u = !1), (g = t);
    },
});

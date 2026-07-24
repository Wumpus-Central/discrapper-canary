"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let a = {},
    s = null;
function l() {
    (a = {}), (s = null);
}
class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: a, initialized: s };
    }
}
let d = new o(r.h, {
    CONNECTION_OPEN: l,
    LOGOUT: l,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (a = t.categories), (s = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        a = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        a = { ...a, ...t };
    },
});

"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let s = {},
    a = null;
function o() {
    (s = {}), (a = null);
}
class l extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: s, initialized: a };
    }
}
let u = new l(r.h, {
    CONNECTION_OPEN: o,
    LOGOUT: o,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (s = t.categories), (a = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        s = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        s = { ...s, ...t };
    },
});

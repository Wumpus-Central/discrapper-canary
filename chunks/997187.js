n.d(t, { A: () => d });
var i = n(17928),
    l = n(228366);
let s = {},
    r = null;
function o() {
    (s = {}), (r = null);
}
class a extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: s, initialized: r };
    }
}
let d = new a(l.h, {
    CONNECTION_OPEN: o,
    LOGOUT: o,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (s = t.categories), (r = t.initialized);
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

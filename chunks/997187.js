n.d(t, { A: () => d });
var i = n(17928),
    l = n(228366);
let r = {},
    s = null;
function a() {
    (r = {}), (s = null);
}
class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: r, initialized: s };
    }
}
let d = new o(l.h, {
    CONNECTION_OPEN: a,
    LOGOUT: a,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (r = t.categories), (s = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        r = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        r = { ...r, ...t };
    },
});

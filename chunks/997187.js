n.d(t, { A: () => c });
var i = n(17928),
    s = n(73153);
let r = {},
    l = null;
function a() {
    ((r = {}), (l = null));
}
class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: r, initialized: l };
    }
}
let c = new o(s.h, {
    CONNECTION_OPEN: a,
    LOGOUT: a,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        ((r = t.categories), (l = t.initialized));
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

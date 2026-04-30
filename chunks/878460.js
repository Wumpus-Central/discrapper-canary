t.d(n, { A: () => r });
var l = t(17928),
    E = t(228366);
let i = {},
    A = null;
function a() {
    (i = {}), (A = null);
}
class _ extends l.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: i, initialized: A };
    }
}
let r = new _(E.h, {
    CONNECTION_OPEN: a,
    LOGOUT: a,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: n } = e;
        (i = n.categories), (A = n.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: n } = e;
        i = n.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: n } = e;
        i = { ...i, ...n };
    },
});

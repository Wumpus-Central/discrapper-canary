var i = n(855986),
    r = n(73153);
let s = {},
    l = null;
function a() {
    ((s = {}), (l = null));
}
class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: s, initialized: l };
    }
}
let c = new o(r.h, {
    CONNECTION_OPEN: a,
    LOGOUT: a,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        ((s = t.categories), (l = t.initialized));
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        s = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        s = { ...s, ...t };
    },
    EMAIL_SETTINGS_UPDATE_FAILURE: function (e) {
        let { previous: t } = e;
        s = { ...s, ...t };
    },
});
n.d(t, {}, { A: c });

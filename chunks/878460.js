n.d(t, { A: () => c });
var i = n(311907),
    s = n(73153);
let r = {},
    a = null;
function l() {
    (r = {}), (a = null);
}
class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: r, initialized: a };
    }
}
let c = new o(s.h, {
    CONNECTION_OPEN: l,
    LOGOUT: l,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (r = t.categories), (a = t.initialized);
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

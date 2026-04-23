n.d(t, { A: () => o });
var i = n(311907),
    E = n(73153);
let l = {},
    a = null;
function s() {
    (l = {}), (a = null);
}
class r extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return { categories: l, initialized: a };
    }
}
let o = new r(E.h, {
    CONNECTION_OPEN: s,
    LOGOUT: s,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (l = t.categories), (a = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        l = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        l = { ...l, ...t };
    },
});

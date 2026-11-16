var i = n(855986),
    r = n(73153);
let s = {},
    l = null,
    a = !1;
function o() {
    ((s = {}), (l = null), (a = !1));
}
class c extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    get isFetching() {
        return a;
    }
    getEmailSettings() {
        return { categories: s, initialized: l };
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: o,
    LOGOUT: o,
    EMAIL_SETTINGS_FETCH_START: () => {
        a = !0;
    },
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        ((s = t.categories), (l = t.initialized), (a = !1));
    },
    EMAIL_SETTINGS_FETCH_FAILURE: () => {
        a = !1;
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
n.d(t, {}, { A: d });

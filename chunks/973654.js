var i = n(73153);
(n(677313),
    n(964404),
    n(185928),
    n.d(
        t,
        {},
        {
            GQ: function (e) {
                i.h.dispatch({ type: "SET_THEME_OVERRIDE", theme: e });
            },
            LA: function (e) {
                i.h.dispatch({ type: "SYSTEM_THEME_CHANGE", systemTheme: e });
            },
            NA: function (e) {
                i.h.dispatch({ type: "UPDATE_THEME_PREFERENCES", preferences: e });
            },
            XG: function () {
                i.h.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
            },
            ZM: function (e) {
                i.h.dispatch({ type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled: e });
            },
            k7: function (e) {
                i.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: e } });
            },
            qX: function (e, t) {
                i.h.dispatch({ type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme: e, clientTheme: t });
            },
        },
    ));

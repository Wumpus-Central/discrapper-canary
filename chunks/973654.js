"use strict";
n.d(t, { GQ: () => d, LA: () => r, NA: () => s, XG: () => c, ZM: () => o, k7: () => a, qX: () => l });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "SYSTEM_THEME_CHANGE", systemTheme: e });
}
function a(e) {
    i.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: e } });
}
function s(e) {
    i.h.dispatch({ type: "UPDATE_THEME_PREFERENCES", preferences: e });
}
function l(e, t) {
    i.h.dispatch({ type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme: e, clientTheme: t });
}
function o(e) {
    i.h.dispatch({ type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled: e });
}
function d(e) {
    i.h.dispatch({ type: "SET_THEME_OVERRIDE", theme: e });
}
function c() {
    i.h.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
}
n(677313), n(742023), n(185928);

"use strict";
n.d(t, { GQ: () => o, LA: () => i, NA: () => a, XG: () => l, k7: () => s });
var r = n(73153);
function i(e) {
    r.h.dispatch({ type: "SYSTEM_THEME_CHANGE", systemTheme: e });
}
function s(e) {
    r.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: e } });
}
function a(e) {
    r.h.dispatch({ type: "UPDATE_THEME_PREFERENCES", preferences: e });
}
function o(e) {
    r.h.dispatch({ type: "SET_THEME_OVERRIDE", theme: e });
}
function l() {
    r.h.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
}
n(677313), n(964404), n(185928);

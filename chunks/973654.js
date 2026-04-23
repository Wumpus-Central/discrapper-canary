"use strict";
n.d(t, { GQ: () => o, LA: () => r, NA: () => a, XG: () => l, k7: () => s });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "SYSTEM_THEME_CHANGE", systemTheme: e });
}
function s(e) {
    i.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: e } });
}
function a(e) {
    i.h.dispatch({ type: "UPDATE_THEME_PREFERENCES", preferences: e });
}
function o(e) {
    i.h.dispatch({ type: "SET_THEME_OVERRIDE", theme: e });
}
function l() {
    i.h.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
}
n(677313), n(964404), n(185928);

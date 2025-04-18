n.d(t, {
    Ag: () => o,
    Q_: () => i,
    hi: () => a
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'SYSTEM_THEME_CHANGE',
        systemTheme: e
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'UNSYNCED_USER_SETTINGS_UPDATE',
        settings: { useSystemTheme: e }
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'UPDATE_THEME_PREFERENCES',
        preferences: e
    });
}
n(541049), n(740492), n(874893);

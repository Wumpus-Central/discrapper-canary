r.d(n, {
    hi: function () {
        return s;
    }
});
var i = r(570140);
function a(e) {
    Dispatcher.dispatch({
        type: 'SYSTEM_THEME_CHANGE',
        systemTheme: e
    });
}
r(740492), r(874893);
function s(e) {
    i.Z.dispatch({
        type: 'UNSYNCED_USER_SETTINGS_UPDATE',
        settings: { useSystemTheme: e }
    });
}

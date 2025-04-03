n.d(t, {
    Gl: () => s,
    hG: () => i,
    oI: () => r
});
var a = n(570140);
function i(e, t, n) {
    a.Z.dispatch({
        type: 'CONNECTED_DEVICE_SET',
        displayName: e,
        connectedDevicePreference: t,
        location: n
    });
}
function s(e) {
    a.Z.dispatch({
        type: 'CONNECTED_DEVICE_IGNORE',
        displayName: e
    });
}
function r() {
    a.Z.dispatch({ type: 'CONNECTED_DEVICE_NEVER_SHOW_MODAL' });
}

n.d(t, {
    Gl: () => l,
    hG: () => a,
    oI: () => s
});
var i = n(570140);
function a(e, t, n) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_SET',
        displayName: e,
        connectedDevicePreference: t,
        location: n
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_IGNORE',
        displayName: e
    });
}
function s() {
    i.Z.dispatch({ type: 'CONNECTED_DEVICE_NEVER_SHOW_MODAL' });
}

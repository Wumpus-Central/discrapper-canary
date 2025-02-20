n.d(t, { Z: () => i });
var r = n(570140);
let i = {
    clearVADWarning() {
        r.Z.dispatch({ type: 'PERMISSION_CLEAR_VAD_WARNING' });
    },
    clearSuppressWarning() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        r.Z.dispatch({
            type: 'PERMISSION_CLEAR_SUPPRESS_WARNING',
            forever: e
        });
    },
    clearPTTAdminWarning() {
        r.Z.dispatch({ type: 'PERMISSION_CLEAR_PTT_ADMIN_WARNING' });
    },
    requestElevatedProcess(e) {
        r.Z.dispatch({
            type: 'PERMISSION_REQUEST_ELEVATED_PROCESS',
            pid: e
        });
    },
    clearElevatedProcess() {
        r.Z.dispatch({ type: 'PERMISSION_CLEAR_ELEVATED_PROCESS' });
    },
    continueNonelevatedProcess(e) {
        r.Z.dispatch({
            type: 'PERMISSION_CONTINUE_NONELEVATED_PROCESS',
            pid: e
        });
    }
};

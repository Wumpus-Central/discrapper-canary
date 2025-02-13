let o;
n.d(t, { Z: () => c });
var r = n(145597);
function c(e, t) {
    if (__OVERLAY__) {
        let e = t.getGame(),
            n = (0, r.QF)();
        return null == e || null == n
            ? null
            : (null == o ? void 0 : o.id) === e.id && (null == o ? void 0 : o.pid) === n
              ? o
              : (o = {
                    id: e.id,
                    pid: n,
                    pidPath: [],
                    nativeProcessObserverId: 0,
                    hidden: !1,
                    elevated: !1,
                    name: e.name,
                    lastFocused: 0,
                    exePath: '',
                    exeName: '',
                    cmdLine: '',
                    processName: '',
                    distributor: null,
                    windowHandle: null,
                    fullscreenType: 0
                });
    }
    return e.getVisibleGame();
}

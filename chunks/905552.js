let r;
n.d(l, { A: () => a });
var t = n(9302);
function a(e, l) {
    if (__OVERLAY__) {
        let e = l.getGame(),
            n = (0, t.getPID)();
        return null == e || null == n
            ? null
            : r?.id === e.id && r?.pid === n
              ? r
              : (r = {
                    id: e.id,
                    pid: n,
                    pidPath: [],
                    nativeProcessObserverId: 0,
                    hidden: !1,
                    elevated: !1,
                    name: e.name,
                    lastFocused: 0,
                    exePath: "",
                    exeName: "",
                    cmdLine: "",
                    processName: "",
                    distributor: null,
                    windowHandle: null,
                    fullscreenType: 0,
                });
    }
    return e.getVisibleGame();
}

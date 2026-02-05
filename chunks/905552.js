let l;
n.d(t, { A: () => a });
var s = n(9302);
function a(e, t) {
    if (__OVERLAY__) {
        let e = t.getGame(),
            n = (0, s.getPID)();
        return null == e || null == n
            ? null
            : l?.id === e.id && l?.pid === n
              ? l
              : (l = {
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

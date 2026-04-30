"use strict";
let i;
n.d(t, { A: () => s });
var r = n(9302);
function s(e, t) {
    if (__OVERLAY__) {
        let e = t.getGame(),
            n = (0, r.getPID)();
        return null == e || null == n
            ? null
            : i?.id === e.id && i?.pid === n
              ? i
              : (i = {
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

"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(961350),
    l = n(977997),
    r = n(643501);
function a() {
    return (0, i.bG)([s.default, l.A, r.default], () => {
        let e = s.default.getId(),
            t = r.default.getRemoteSessionId();
        return l.A.getVoiceStateForSession(e, t) ?? void 0;
    }, []);
}

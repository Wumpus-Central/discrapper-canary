"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(280450),
    a = n(977997),
    s = n(643501);
function l() {
    return (0, i.bG)([r.default, a.A, s.default], () => {
        let e = r.default.getId(),
            t = s.default.getRemoteSessionId();
        return a.A.getVoiceStateForSession(e, t) ?? void 0;
    }, []);
}

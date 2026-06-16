"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(495544),
    s = n(977997),
    a = n(643501);
function o() {
    return (0, i.bG)([r.default, s.A, a.default], () => {
        let e = r.default.getId(),
            t = a.default.getRemoteSessionId();
        return s.A.getVoiceStateForSession(e, t) ?? void 0;
    }, []);
}

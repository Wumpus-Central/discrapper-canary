n.d(t, { A: () => a });
var i = n(17928),
    l = n(495544),
    s = n(977997),
    r = n(643501);
function a() {
    return (0, i.bG)([l.default, s.A, r.default], () => {
        let e = l.default.getId(),
            t = r.default.getRemoteSessionId();
        return s.A.getVoiceStateForSession(e, t) ?? void 0;
    }, []);
}

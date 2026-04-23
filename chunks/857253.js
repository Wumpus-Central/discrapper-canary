n.d(t, { A: () => r });
var i = n(311907),
    l = n(961350),
    s = n(977997),
    a = n(643501);
function r() {
    return (0, i.bG)([l.default, s.A, a.default], () => {
        let e = l.default.getId(),
            t = a.default.getRemoteSessionId();
        return s.A.getVoiceStateForSession(e, t) ?? void 0;
    }, []);
}

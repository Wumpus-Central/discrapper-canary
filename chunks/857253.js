a.d(e, { A: () => d });
var s = a(17928),
    i = a(280450),
    l = a(977997),
    h = a(643501);
function d() {
    return (0, s.bG)([i.default, l.A, h.default], () => {
        let t = i.default.getId(),
            e = h.default.getRemoteSessionId();
        return l.A.getVoiceStateForSession(t, e) ?? void 0;
    }, []);
}

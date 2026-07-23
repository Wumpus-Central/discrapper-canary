a.d(e, { A: () => d });
var s = a(17928),
    l = a(280450),
    i = a(977997),
    h = a(643501);
function d() {
    return (0, s.bG)([l.default, i.A, h.default], () => {
        let t = l.default.getId(),
            e = h.default.getRemoteSessionId();
        return i.A.getVoiceStateForSession(t, e) ?? void 0;
    }, []);
}

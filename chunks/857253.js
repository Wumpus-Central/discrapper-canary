n.d(t, { A: () => s });
var r = n(311907),
    l = n(961350),
    i = n(977997),
    a = n(643501);
function s() {
    return (0, r.bG)([l.default, i.A, a.default], () => {
        var e;
        let t = l.default.getId(),
            n = a.default.getRemoteSessionId();
        return null != (e = i.A.getVoiceStateForSession(t, n)) ? e : void 0;
    }, []);
}

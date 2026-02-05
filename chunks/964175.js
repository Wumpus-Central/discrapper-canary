n.d(t, { A: () => s });
var i = n(311907),
    r = n(961350),
    a = n(309010),
    l = n(312006);
function s(e) {
    return (0, i.bG)([r.default, a.A, l.Ay], () => {
        let t = r.default.getId();
        return a.A.getVoiceChannelId() === e ? l.Ay.getPermissionsForUser(t, e) : null;
    }, [e]);
}

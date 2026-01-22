n.d(t, {
    A: () => s,
});
var r = n(311907),
    i = n(961350),
    l = n(309010),
    a = n(312006);

function s(e) {
    return (0, r.bG)([i.default, l.A, a.Ay], () => {
        let t = i.default.getId();
        return l.A.getVoiceChannelId() === e ? a.Ay.getPermissionsForUser(t, e) : null;
    }, [e]);
}

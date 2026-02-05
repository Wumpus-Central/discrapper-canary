n.d(t, { Ay: () => a });
var l = n(311907),
    i = n(470710),
    s = n(313961),
    r = n(806931);
function a(e, t) {
    return (0, l.bG)(
        [i.A, s.A],
        () => i.A.isCallActive(e, t) && s.A.getParticipants(e).some((e) => e.type === r.lp.USER && !e.ringing),
        [e, t],
    );
}

n.d(t, { Ay: () => a });
var l = n(311907),
    i = n(470710),
    r = n(313961),
    s = n(806931);
function a(e, t) {
    return (0, l.bG)(
        [i.A, r.A],
        () => i.A.isCallActive(e, t) && r.A.getParticipants(e).some((e) => e.type === s.lp.USER && !e.ringing),
        [e, t],
    );
}

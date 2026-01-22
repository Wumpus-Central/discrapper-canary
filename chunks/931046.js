n.d(t, {
    Ay: () => a,
});
var r = n(311907),
    l = n(470710),
    i = n(313961),
    s = n(806931);

function a(e, t) {
    return (0, r.bG)(
        [l.A, i.A],
        () => l.A.isCallActive(e, t) && i.A.getParticipants(e).some((e) => e.type === s.lp.USER && !e.ringing),
        [e, t],
    );
}

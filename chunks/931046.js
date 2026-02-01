n.d(t, {
    Ay: () => s,
});
var i = n(311907),
    r = n(470710),
    l = n(313961),
    a = n(806931);

function s(e, t) {
    return (0, i.bG)(
        [r.A, l.A],
        () => r.A.isCallActive(e, t) && l.A.getParticipants(e).some((e) => e.type === a.lp.USER && !e.ringing),
        [e, t],
    );
}

n.d(t, { A: () => a });
var i = n(587895),
    r = n(311043);
function a(e) {
    let t = new Set();
    return (
        null == e ||
            (t.add(e),
            r.A.getGame(e)?.linkedApplications?.forEach((e) => t.add(e.id)),
            i.A.getApplication(e)?.linkedGames?.forEach((e) => {
                t.add(e.id), r.A.getGame(e.id)?.linkedApplications?.forEach((e) => t.add(e.id));
            })),
        t
    );
}

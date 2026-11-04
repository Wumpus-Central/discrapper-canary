var i = n(855986),
    r = n(587895),
    a = n(311043);
function s(e) {
    let t = new Set();
    return (
        null == e ||
            (t.add(e),
            a.A.getGame(e)?.linkedApplications?.forEach((e) => t.add(e.id)),
            r.A.getApplication(e)?.linkedGames?.forEach((e) => {
                (t.add(e.id), a.A.getGame(e.id)?.linkedApplications?.forEach((e) => t.add(e.id)));
            })),
        t
    );
}
n.d(
    t,
    {},
    {
        A: s,
        T: function (e) {
            return (0, i.yK)([a.A, r.A], () => Array.from(s(e)), [e]);
        },
    },
);

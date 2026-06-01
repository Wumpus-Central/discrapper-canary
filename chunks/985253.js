"use strict";
function i(e, t, n) {
    let i = new Set();
    return (
        null == e ||
            (i.add(e),
            t.getGame(e)?.linkedApplications?.forEach((e) => i.add(e.id)),
            n.getApplication(e)?.linkedGames?.forEach((e) => {
                i.add(e.id), t.getGame(e.id)?.linkedApplications?.forEach((e) => i.add(e.id));
            })),
        i
    );
}
n.d(t, { A: () => i });

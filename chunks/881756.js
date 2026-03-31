"use strict";
n.d(t, { A: () => a });
var r = n(311907),
    i = n(760751),
    s = n(800007);
function a() {
    return (0, r.cf)([i.A], () => {
        let [e, t] = s.Ge,
            n = i.A.getDetectableGame(e),
            r = i.A.getDetectableGame(t);
        return { gameName: n?.name ?? "Minecraft", gameName2: r?.name ?? "Hytale" };
    });
}

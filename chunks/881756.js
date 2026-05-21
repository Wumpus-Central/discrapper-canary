"use strict";
n.d(t, { A: () => s });
var i = n(569926),
    r = n(800007);
function s() {
    let { data: e } = (0, i.I)(r.FG),
        { data: t } = (0, i.I)(r.LC);
    return { gameName: e?.name ?? "Minecraft", gameName2: t?.name ?? "Hytale" };
}

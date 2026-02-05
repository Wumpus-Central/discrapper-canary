"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(15285),
    a = n(760751),
    s = n(667269);
function o(e) {
    let { game: t } = e,
        n = i.Ay.isDetectionEnabled(t),
        r = t.id ?? a.A.getGameByName(t.name)?.id;
    null != r && (0, s.J)(r, n);
}
class l extends r.A {
    actions = { RUNNING_GAME_TOGGLE_DETECTION: o, RUNNING_GAME_DELETE_ENTRY: o };
}
let u = new l();

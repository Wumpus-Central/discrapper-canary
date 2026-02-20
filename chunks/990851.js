"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(15285),
    s = n(760751),
    a = n(667269);
function o(e) {
    let { game: t } = e,
        n = i.Ay.isDetectionEnabled(t),
        r = t.id ?? s.A.findGame(t)?.id;
    null != r && (0, a.J)(r, n);
}
class l extends r.A {
    actions = { RUNNING_GAME_TOGGLE_DETECTION: o, RUNNING_GAME_DELETE_ENTRY: o };
}
let u = new l();
